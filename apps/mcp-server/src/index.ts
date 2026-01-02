#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { readFile } from 'fs/promises';
import { watch as watchSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 프로젝트 루트 경로 계산
const PROJECT_ROOT = join(__dirname, '../../..');
const STENCIL_DIR = join(PROJECT_ROOT, 'apps/stencil-components');
const CUSTOM_ELEMENTS_JSON = join(STENCIL_DIR, 'custom-elements.json');
const DOCS_DIR = join(STENCIL_DIR, 'docs');
const OVERVIEW_PATH = join(DOCS_DIR, 'COMPONENTS_OVERVIEW.md');
const COMPONENTS_DIR = join(STENCIL_DIR, 'src/components');

interface ComponentInfo {
  tag: string;
  props?: any[];
  events?: any[];
  methods?: any[];
  docs?: string;
  semantics?: SemanticPart[];
  cssVariables?: string[];
}

interface ComponentSummary {
  tag: string;
  description: string; // 짧은 요약 (50자 이내)
  propsCount: number;
  eventsCount: number;
  methodsCount: number;
  hasDocumentation: boolean;
}

interface SemanticPart {
  name: string;
  description: string;
  element?: string; // HTML element type (div, span, button, etc.)
  styles?: string[]; // 주요 스타일 속성들
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

interface PerformanceMetrics {
  requestCount: number;
  cacheHits: number;
  cacheMisses: number;
  averageResponseTime: number;
  totalResponseTime: number;
}

// 기본 설정
const DEFAULT_CONFIG = {
  cacheTTL: 5 * 60 * 1000, // 5분
  requestTimeout: 30 * 1000, // 30초
  maxRetries: 3, // 최대 재시도 횟수
  retryDelay: 1000, // 재시도 지연 (ms)
  // 응답 최적화 설정
  defaultFormat: 'compact' as const, // 'compact' | 'pretty' | 'minimal'
  defaultSummaryMode: false, // 기본 요약 모드
  defaultPageSize: 20, // 기본 페이지 크기
  defaultIncludeDocs: true, // 기본 문서 포함 여부
  enableSummaryCache: true, // 요약 캐시 활성화
  maxResponseSize: 100, // 최대 응답 크기 (KB)
};

interface ServerConfig {
  cacheTTL?: number;
  requestTimeout?: number;
  maxRetries?: number;
  retryDelay?: number;
  customElementsPath?: string;
  docsPath?: string;
  overviewPath?: string;
  // 응답 최적화 설정
  defaultFormat?: 'compact' | 'pretty' | 'minimal';
  defaultSummaryMode?: boolean;
  defaultPageSize?: number;
  defaultIncludeDocs?: boolean;
  enableSummaryCache?: boolean;
  maxResponseSize?: number;
}

/**
 * UXBIT MCP Server
 *
 * 목적: Ant Design, Material-UI, Chakra UI와 같은 범용적인 Headless UI 디자인 시스템을 목표로 하는
 * UXBIT 컴포넌트 라이브러리에 대한 정보를 AI 모델에 제공합니다.
 *
 * 비전:
 * - 범용성: 프레임워크 독립적인 Web Components 표준 준수
 * - Headless: 스타일과 로직 분리, 커스터마이징 가능한 디자인 토큰 시스템
 * - 확장성: 다양한 프로젝트와 디자인 시스템에 적용 가능
 */
class UxbitMCPServer {
  private server: Server;
  private config: Required<ServerConfig>;
  private componentsCache: CacheEntry<ComponentInfo[]> | null = null;
  private overviewCache: CacheEntry<string> | null = null;
  private summaryCache: CacheEntry<ComponentSummary[]> | null = null;
  private performanceMetrics: PerformanceMetrics = {
    requestCount: 0,
    cacheHits: 0,
    cacheMisses: 0,
    averageResponseTime: 0,
    totalResponseTime: 0,
  };
  private fileWatchers: Array<{ close: () => void }> = [];
  private customElementsPath: string;
  private docsPath: string;
  private overviewPath: string;

  constructor(config: ServerConfig = {}) {
    // 설정 병합
    this.config = {
      cacheTTL: config.cacheTTL ?? DEFAULT_CONFIG.cacheTTL,
      requestTimeout: config.requestTimeout ?? DEFAULT_CONFIG.requestTimeout,
      maxRetries: config.maxRetries ?? DEFAULT_CONFIG.maxRetries,
      retryDelay: config.retryDelay ?? DEFAULT_CONFIG.retryDelay,
      customElementsPath: config.customElementsPath ?? CUSTOM_ELEMENTS_JSON,
      docsPath: config.docsPath ?? DOCS_DIR,
      overviewPath: config.overviewPath ?? OVERVIEW_PATH,
      // 응답 최적화 설정
      defaultFormat: config.defaultFormat ?? DEFAULT_CONFIG.defaultFormat,
      defaultSummaryMode: config.defaultSummaryMode ?? DEFAULT_CONFIG.defaultSummaryMode,
      defaultPageSize: config.defaultPageSize ?? DEFAULT_CONFIG.defaultPageSize,
      defaultIncludeDocs: config.defaultIncludeDocs ?? DEFAULT_CONFIG.defaultIncludeDocs,
      enableSummaryCache: config.enableSummaryCache ?? DEFAULT_CONFIG.enableSummaryCache,
      maxResponseSize: config.maxResponseSize ?? DEFAULT_CONFIG.maxResponseSize,
    };

    this.customElementsPath = this.config.customElementsPath;
    this.docsPath = this.config.docsPath;
    this.overviewPath = this.config.overviewPath;
    this.server = new Server(
      {
        name: 'uxbit-mcp-server',
        version: '0.0.1',
        description:
          'MCP server for UXBIT - A universal headless UI design system (like Ant Design, Material-UI) built with Web Components',
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      },
    );

    this.setupHandlers();
    this.setupFileWatchers();
  }

  private setupHandlers() {
    // 리소스 목록 제공
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      const components = await this.loadComponents();

      const resources = [
        {
          uri: 'uxbit://components/overview',
          name: 'UXBIT Components Overview',
          description:
            'Complete overview of all UXBIT components. UXBIT is a universal headless UI design system (like Ant Design, Material-UI) built with Web Components.',
          mimeType: 'text/markdown',
        },
        {
          uri: 'uxbit://components/list',
          name: 'Component List',
          description:
            'All UXBIT components list (JSON). UXBIT is a universal headless UI design system built with Web Components, similar to Ant Design or Material-UI.',
          mimeType: 'application/json',
        },
      ];

      // 각 컴포넌트별 문서 리소스 추가
      for (const comp of components) {
        resources.push({
          uri: `uxbit://components/${comp.tag}`,
          name: `${comp.tag} Documentation`,
          description:
            comp.docs ||
            `Documentation for ${comp.tag} - A universal headless UI component from UXBIT design system`,
          mimeType: 'text/markdown',
        });
      }

      return { resources };
    });

    // 리소스 읽기
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request: any) => {
      const { uri } = request.params;

      try {
        if (uri === 'uxbit://components/overview') {
          const overview = await this.loadOverview();
          return {
            contents: [
              {
                uri,
                mimeType: 'text/markdown',
                text: overview,
              },
            ],
          };
        }

        if (uri === 'uxbit://components/list') {
          const components = await this.loadComponents();
          return {
            contents: [
              {
                uri,
                mimeType: 'application/json',
                text: this.serialize(this.optimizeResponse(components)),
              },
            ],
          };
        }

        // 개별 컴포넌트 문서
        const match = uri.match(/^uxbit:\/\/components\/(.+)$/);
        if (match) {
          const tagName = match[1];
          const docPath = join(this.docsPath, 'components', `${tagName}.md`);
          try {
            const content = await this.readFileWithTimeout(docPath, 'utf-8');
            return {
              contents: [
                {
                  uri,
                  mimeType: 'text/markdown',
                  text: content,
                },
              ],
            };
          } catch (error: any) {
            this.logError('문서 읽기 실패', { tagName, error: error.message });
            throw new Error(`Documentation not found: ${tagName}`);
          }
        }

        throw new Error(`Resource not found: ${uri}`);
      } catch (error: any) {
        this.logError('리소스 읽기 실패', { uri, error: error.message });
        throw error;
      }
    });

    // 도구 목록 제공
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'search_components',
            description:
              'Search UXBIT components by name or description. UXBIT is a universal headless UI design system (like Ant Design, Material-UI) built with Web Components.',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search query (component name or keyword)',
                },
                summary: {
                  type: 'boolean',
                  description: 'Return summary only (default: false)',
                },
                page: {
                  type: 'number',
                  description: 'Page number (default: 1)',
                },
                pageSize: {
                  type: 'number',
                  description: 'Items per page (default: 20)',
                },
              },
              required: ['query'],
            },
          },
          {
            name: 'get_component_info',
            description:
              'Get detailed information about a specific UXBIT component including props, events, methods, and documentation. Useful for understanding how to use components in a headless UI design system.',
            inputSchema: {
              type: 'object',
              properties: {
                tagName: {
                  type: 'string',
                  description: 'Component tag name (e.g., tinto-button)',
                },
                includeDocs: {
                  type: 'boolean',
                  description: 'Include full documentation (default: true)',
                },
                includeSemantics: {
                  type: 'boolean',
                  description: 'Include semantic parts information (default: false)',
                },
              },
              required: ['tagName'],
            },
          },
          {
            name: 'list_all_components',
            description:
              'List all available UXBIT components. UXBIT provides universal, framework-agnostic Web Components for building consistent UI across different projects.',
            inputSchema: {
              type: 'object',
              properties: {
                summary: {
                  type: 'boolean',
                  description: 'Return summary only (default: false)',
                },
                page: {
                  type: 'number',
                  description: 'Page number (default: 1)',
                },
                pageSize: {
                  type: 'number',
                  description: 'Items per page (default: 20)',
                },
              },
            },
          },
          {
            name: 'search_props',
            description:
              'Search components by prop name. Useful for finding which UXBIT components have a specific property (e.g., "variant", "size", "disabled").',
            inputSchema: {
              type: 'object',
              properties: {
                propName: {
                  type: 'string',
                  description: 'Prop name to search for (e.g., "variant", "size")',
                },
              },
              required: ['propName'],
            },
          },
          {
            name: 'search_events',
            description:
              'Search components by event name. Find which UXBIT components emit a specific event.',
            inputSchema: {
              type: 'object',
              properties: {
                eventName: {
                  type: 'string',
                  description: 'Event name to search for (e.g., "click", "change")',
                },
              },
              required: ['eventName'],
            },
          },
          {
            name: 'search_methods',
            description:
              'Search components by method name. Find which UXBIT components have a specific method.',
            inputSchema: {
              type: 'object',
              properties: {
                methodName: {
                  type: 'string',
                  description: 'Method name to search for',
                },
              },
              required: ['methodName'],
            },
          },
          {
            name: 'get_statistics',
            description:
              'Get statistics about the UXBIT component library including total components, props, events, methods counts, and performance metrics.',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'health_check',
            description:
              'Check the health status of the MCP server including file accessibility, cache status, and performance metrics.',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'evaluate_component_quality',
            description:
              'Evaluate component quality against UXBIT design system standards. Returns scores for consistency, reusability, completeness, performance, usability, and standards compliance, along with improvement suggestions.',
            inputSchema: {
              type: 'object',
              properties: {
                tagName: {
                  type: 'string',
                  description: 'Component tag name to evaluate (e.g., tinto-button)',
                },
              },
              required: ['tagName'],
            },
          },
          {
            name: 'get_component_semantics',
            description:
              'Get semantic part information for a UXBIT component. Returns structured information about component parts (root, header, body, etc.) similar to Ant Design semantic descriptions. Useful for understanding component structure and styling capabilities.',
            inputSchema: {
              type: 'object',
              properties: {
                tagName: {
                  type: 'string',
                  description: 'Component tag name (e.g., tinto-button)',
                },
              },
              required: ['tagName'],
            },
          },
          {
            name: 'get_component_styling',
            description:
              'Get CSS variables and styling information for a UXBIT component. Returns all CSS custom properties (CSS variables) that can be used to customize the component appearance.',
            inputSchema: {
              type: 'object',
              properties: {
                tagName: {
                  type: 'string',
                  description: 'Component tag name (e.g., tinto-button)',
                },
              },
              required: ['tagName'],
            },
          },
        ],
      };
    });

    // 도구 실행
    this.server.setRequestHandler(CallToolRequestSchema, async (request: any) => {
      const { name, arguments: args } = request.params;
      const startTime = Date.now();

      try {
        const components = await this.loadComponents();

        switch (name) {
          case 'search_components': {
            const query = (args as any).query?.toLowerCase() || '';
            const summary = (args as any).summary ?? this.config.defaultSummaryMode;
            const page = (args as any).page || 1;
            const pageSize = (args as any).pageSize || this.config.defaultPageSize;

            if (!query) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: 'Query parameter is required' }),
                  },
                ],
                isError: true,
              };
            }

            let results: any[];
            if (summary) {
              // 요약 모드: 요약 정보만 사용
              const summaries = await this.loadSummaries();
              results = summaries.filter((comp) => {
                const searchText = `${comp.tag} ${comp.description}`.toLowerCase();
                return searchText.includes(query);
              });
            } else {
              // 전체 모드: 전체 컴포넌트 정보 사용
              results = components.filter((comp) => {
                const searchText = `${comp.tag} ${comp.docs || ''}`.toLowerCase();
                return searchText.includes(query);
              });
            }

            // 페이지네이션 적용
            const total = results.length;
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const paginatedResults = results.slice(start, end);

            this.logInfo('컴포넌트 검색', {
              query,
              resultsCount: total,
              page,
              pageSize,
              summary,
            });

            const response = {
              total,
              page,
              pageSize,
              hasMore: end < total,
              results: paginatedResults,
            };

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(response)),
                },
              ],
            };
          }

          case 'get_component_info': {
            const tagName = (args as any).tagName;
            const includeDocs = (args as any).includeDocs ?? this.config.defaultIncludeDocs;
            const includeSemantics = (args as any).includeSemantics === true;

            if (!tagName) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: 'tagName parameter is required' }),
                  },
                ],
                isError: true,
              };
            }

            const component = components.find((c) => c.tag === tagName);

            if (!component) {
              this.logWarning('컴포넌트를 찾을 수 없음', { tagName });
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: `Component not found: ${tagName}` }),
                  },
                ],
                isError: true,
              };
            }

            const info: any = {
              tag: component.tag,
              props: component.props,
              events: component.events,
              methods: component.methods,
            };

            // 문서는 필요할 때만 로드
            if (includeDocs) {
              const docPath = join(this.docsPath, 'components', `${tagName}.md`);
              try {
                info.documentation = await this.readFileWithTimeout(docPath, 'utf-8');
              } catch (error: any) {
                this.logWarning('문서를 읽을 수 없음', { tagName, error: error.message });
                info.documentation = null;
              }
            }

            // Semantic parts는 필요할 때만 추출
            if (includeSemantics) {
              info.semantics = await this.extractSemanticParts(tagName);
            }

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(info)),
                },
              ],
            };
          }

          case 'list_all_components': {
            const summary = (args as any).summary ?? this.config.defaultSummaryMode;
            const page = (args as any).page || 1;
            const pageSize = (args as any).pageSize || this.config.defaultPageSize;

            let list: any[];
            if (summary) {
              // 요약 모드: 요약 정보만 사용
              const summaries = await this.loadSummaries();
              list = summaries.map((s) => ({
                tagName: s.tag,
                description: s.description,
                propertiesCount: s.propsCount,
                eventsCount: s.eventsCount,
                methodsCount: s.methodsCount,
                hasDocumentation: s.hasDocumentation,
              }));
            } else {
              // 전체 모드: 전체 컴포넌트 정보 사용
              list = components.map((comp) => ({
                tagName: comp.tag,
                description: comp.docs || '',
                propertiesCount: comp.props?.length || 0,
                eventsCount: comp.events?.length || 0,
                methodsCount: comp.methods?.length || 0,
              }));
            }

            // 페이지네이션 적용
            const total = list.length;
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const paginatedList = list.slice(start, end);

            const response = {
              total,
              page,
              pageSize,
              hasMore: end < total,
              components: paginatedList,
            };

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(response)),
                },
              ],
            };
          }

          case 'search_props': {
            const propName = (args as any).propName;
            if (!propName) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: 'propName parameter is required' }),
                  },
                ],
                isError: true,
              };
            }

            const results = components
              .filter((comp) => {
                return comp.props?.some(
                  (prop: any) => prop.name?.toLowerCase() === propName.toLowerCase(),
                );
              })
              .map((comp) => {
                const prop = comp.props?.find(
                  (p: any) => p.name?.toLowerCase() === propName.toLowerCase(),
                );
                return {
                  tagName: comp.tag,
                  description: comp.docs || '',
                  prop: prop,
                };
              });

            this.logInfo('Props 검색', { propName, resultsCount: results.length });

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(results)),
                },
              ],
            };
          }

          case 'search_events': {
            const eventName = (args as any).eventName;
            if (!eventName) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: 'eventName parameter is required' }),
                  },
                ],
                isError: true,
              };
            }

            const results = components
              .filter((comp) => {
                return comp.events?.some((event: any) =>
                  event.name?.toLowerCase().includes(eventName.toLowerCase()),
                );
              })
              .map((comp) => {
                const matchingEvents = comp.events?.filter((event: any) =>
                  event.name?.toLowerCase().includes(eventName.toLowerCase()),
                );
                return {
                  tagName: comp.tag,
                  description: comp.docs || '',
                  events: matchingEvents,
                };
              });

            this.logInfo('이벤트 검색', { eventName, resultsCount: results.length });

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(results)),
                },
              ],
            };
          }

          case 'search_methods': {
            const methodName = (args as any).methodName;
            if (!methodName) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: 'methodName parameter is required' }),
                  },
                ],
                isError: true,
              };
            }

            const results = components
              .filter((comp) => {
                return comp.methods?.some((method: any) =>
                  method.name?.toLowerCase().includes(methodName.toLowerCase()),
                );
              })
              .map((comp) => {
                const matchingMethods = comp.methods?.filter((method: any) =>
                  method.name?.toLowerCase().includes(methodName.toLowerCase()),
                );
                return {
                  tagName: comp.tag,
                  description: comp.docs || '',
                  methods: matchingMethods,
                };
              });

            this.logInfo('메서드 검색', { methodName, resultsCount: results.length });

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(results)),
                },
              ],
            };
          }

          case 'health_check': {
            const health = await this.performHealthCheck();
            const memory = this.getMemoryUsage();
            const healthWithMemory = {
              ...health,
              memory,
            };
            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(healthWithMemory)),
                },
              ],
            };
          }

          case 'get_statistics': {
            const totalComponents = components.length;
            const totalProps = components.reduce((sum, comp) => sum + (comp.props?.length || 0), 0);
            const totalEvents = components.reduce(
              (sum, comp) => sum + (comp.events?.length || 0),
              0,
            );
            const totalMethods = components.reduce(
              (sum, comp) => sum + (comp.methods?.length || 0),
              0,
            );

            // 가장 많이 사용되는 Props 찾기
            const propUsage: Record<string, number> = {};
            components.forEach((comp) => {
              comp.props?.forEach((prop: any) => {
                if (prop.name) {
                  propUsage[prop.name] = (propUsage[prop.name] || 0) + 1;
                }
              });
            });

            const mostUsedProps = Object.entries(propUsage)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 10)
              .map(([name, count]) => ({ name, count }));

            const stats = {
              components: {
                total: totalComponents,
                averagePropsPerComponent: totalComponents > 0 ? totalProps / totalComponents : 0,
                averageEventsPerComponent: totalComponents > 0 ? totalEvents / totalComponents : 0,
                averageMethodsPerComponent:
                  totalComponents > 0 ? totalMethods / totalComponents : 0,
              },
              totals: {
                props: totalProps,
                events: totalEvents,
                methods: totalMethods,
              },
              mostUsedProps,
              performance: {
                ...this.performanceMetrics,
                cacheHitRate:
                  this.performanceMetrics.requestCount > 0
                    ? (this.performanceMetrics.cacheHits / this.performanceMetrics.requestCount) *
                      100
                    : 0,
              },
            };

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(stats)),
                },
              ],
            };
          }

          case 'evaluate_component_quality': {
            const tagName = (args as any).tagName;
            if (!tagName) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: 'tagName parameter is required' }),
                  },
                ],
                isError: true,
              };
            }

            const evaluation = await this.evaluateComponentQuality(tagName, components);
            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(evaluation)),
                },
              ],
            };
          }

          case 'get_component_semantics': {
            const tagName = (args as any).tagName;
            if (!tagName) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: 'tagName parameter is required' }),
                  },
                ],
                isError: true,
              };
            }

            const component = components.find((c) => c.tag === tagName);
            if (!component) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: `Component not found: ${tagName}` }),
                  },
                ],
                isError: true,
              };
            }

            // Semantic parts 추출
            const semantics = await this.extractSemanticParts(tagName);

            // Ant Design 스타일의 구조화된 설명 생성
            const semanticDescription = this.formatSemanticDescription(tagName, semantics);

            const result = {
              component: tagName,
              semantics,
              description: semanticDescription,
            };

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(result)),
                },
              ],
            };
          }

          case 'get_component_styling': {
            const tagName = (args as any).tagName;
            if (!tagName) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: 'tagName parameter is required' }),
                  },
                ],
                isError: true,
              };
            }

            const component = components.find((c) => c.tag === tagName);
            if (!component) {
              return {
                content: [
                  {
                    type: 'text',
                    text: this.serialize({ error: `Component not found: ${tagName}` }),
                  },
                ],
                isError: true,
              };
            }

            // CSS 변수 추출
            const cssVariables = await this.extractCSSVariables(tagName);
            const semantics = await this.extractSemanticParts(tagName);

            // Part별 CSS 변수 매핑
            const partVariables: Record<string, string[]> = {};
            for (const part of semantics) {
              const partVars = cssVariables.filter((v) =>
                v.toLowerCase().includes(part.name.toLowerCase()),
              );
              if (partVars.length > 0) {
                partVariables[part.name] = partVars;
              }
            }

            const result = {
              component: tagName,
              cssVariables,
              partVariables,
              stylingGuide: this.generateStylingGuide(tagName, cssVariables, semantics),
            };

            return {
              content: [
                {
                  type: 'text',
                  text: this.serialize(this.optimizeResponse(result)),
                },
              ],
            };
          }

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error: any) {
        this.logError('도구 실행 실패', { tool: name, error: error.message });
        throw error;
      } finally {
        // 성능 메트릭 업데이트
        const responseTime = Date.now() - startTime;
        this.performanceMetrics.requestCount++;
        this.performanceMetrics.totalResponseTime += responseTime;
        this.performanceMetrics.averageResponseTime =
          this.performanceMetrics.totalResponseTime / this.performanceMetrics.requestCount;

        // 주기적으로 메모리 체크 (100번 요청마다)
        if (this.performanceMetrics.requestCount % 100 === 0) {
          this.clearCacheIfNeeded();
        }
      }
    });
  }

  private async loadComponents(): Promise<ComponentInfo[]> {
    const now = Date.now();

    // 캐시가 있고 유효한 경우
    if (this.componentsCache && now - this.componentsCache.timestamp < this.config.cacheTTL) {
      this.performanceMetrics.cacheHits++;
      return this.componentsCache.data;
    }

    this.performanceMetrics.cacheMisses++;

    // 재시도 로직으로 파일 읽기
    return await this.retryOperation(
      async () => {
        const content = await this.readFileWithTimeout(this.customElementsPath, 'utf-8');
        const data = JSON.parse(content);
        const components = data.components || [];

        // 캐시 업데이트
        this.componentsCache = {
          data: components,
          timestamp: now,
        };

        this.logInfo('컴포넌트 로드 완료', { count: components.length });
        return components;
      },
      '컴포넌트 로드',
      () => {
        // 캐시가 있으면 오래된 데이터라도 반환
        if (this.componentsCache) {
          this.logWarning('캐시된 데이터 사용', {});
          return this.componentsCache.data;
        }
        return [];
      },
    );
  }

  private async loadOverview(): Promise<string> {
    const now = Date.now();

    // 캐시가 있고 유효한 경우
    if (this.overviewCache && now - this.overviewCache.timestamp < this.config.cacheTTL) {
      this.performanceMetrics.cacheHits++;
      return this.overviewCache.data;
    }

    this.performanceMetrics.cacheMisses++;

    return await this.retryOperation(
      async () => {
        const content = await this.readFileWithTimeout(this.overviewPath, 'utf-8');
        // 캐시 업데이트
        this.overviewCache = {
          data: content,
          timestamp: now,
        };
        return content;
      },
      '개요 문서 로드',
      () => {
        // 캐시가 있으면 오래된 데이터라도 반환
        if (this.overviewCache) {
          this.logWarning('캐시된 개요 문서 사용', {});
          return this.overviewCache.data;
        }
        return '# UXBIT Components\n\nOverview document is not available.';
      },
    );
  }

  // 요약 정보 생성 및 캐싱
  private async loadSummaries(): Promise<ComponentSummary[]> {
    if (!this.config.enableSummaryCache) {
      // 요약 캐시가 비활성화된 경우 즉시 생성
      const components = await this.loadComponents();
      return this.generateSummaries(components);
    }

    const now = Date.now();

    // 요약 캐시 확인
    if (this.summaryCache && now - this.summaryCache.timestamp < this.config.cacheTTL) {
      this.performanceMetrics.cacheHits++;
      return this.summaryCache.data;
    }

    this.performanceMetrics.cacheMisses++;

    // 전체 컴포넌트 로드 (이미 캐시되어 있을 수 있음)
    const components = await this.loadComponents();

    // 요약 정보 생성 (문서 파일 읽지 않음 - 빠름)
    const summaries = this.generateSummaries(components);

    // 요약 캐시 저장
    this.summaryCache = {
      data: summaries,
      timestamp: now,
    };

    return summaries;
  }

  // 요약 정보 생성
  private generateSummaries(components: ComponentInfo[]): ComponentSummary[] {
    return components.map((comp) => ({
      tag: comp.tag,
      description: this.extractShortDescription(comp.docs || ''),
      propsCount: comp.props?.length || 0,
      eventsCount: comp.events?.length || 0,
      methodsCount: comp.methods?.length || 0,
      hasDocumentation: !!comp.docs && comp.docs.length > 50,
    }));
  }

  // 로깅 유틸리티
  private logInfo(message: string, context?: Record<string, any>) {
    const logData = {
      level: 'info',
      message,
      timestamp: new Date().toISOString(),
      ...context,
    };
    console.error(JSON.stringify(logData));
  }

  private logWarning(message: string, context?: Record<string, any>) {
    const logData = {
      level: 'warning',
      message,
      timestamp: new Date().toISOString(),
      ...context,
    };
    console.error(JSON.stringify(logData));
  }

  private logError(message: string, context?: Record<string, any>) {
    const logData = {
      level: 'error',
      message,
      timestamp: new Date().toISOString(),
      ...context,
    };
    console.error(JSON.stringify(logData));
  }

  // 파일 감시 설정
  private setupFileWatchers() {
    try {
      // custom-elements.json 파일 감시
      const customElementsWatcher = watchSync(this.customElementsPath, (eventType) => {
        if (eventType === 'change') {
          this.logInfo('custom-elements.json 변경 감지, 캐시 무효화');
          this.componentsCache = null;
          this.summaryCache = null; // 요약 캐시도 무효화
        }
      });
      this.fileWatchers.push({ close: () => customElementsWatcher.close() });

      // 개요 문서 파일 감시
      const overviewWatcher = watchSync(this.overviewPath, (eventType) => {
        if (eventType === 'change') {
          this.logInfo('개요 문서 변경 감지, 캐시 무효화');
          this.overviewCache = null;
        }
      });
      this.fileWatchers.push({ close: () => overviewWatcher.close() });

      // 문서 디렉토리 감시
      const docsWatcher = watchSync(
        join(this.docsPath, 'components'),
        { recursive: true },
        (eventType, filename) => {
          if (eventType === 'change' && filename) {
            this.logInfo('문서 파일 변경 감지', { filename });
            // 컴포넌트 캐시는 유지하되, 개별 문서는 요청 시 다시 읽음
          }
        },
      );
      this.fileWatchers.push({ close: () => docsWatcher.close() });

      this.logInfo('파일 감시 시작됨', {
        watchedFiles: [
          this.customElementsPath,
          this.overviewPath,
          join(this.docsPath, 'components'),
        ],
      });
    } catch (error: any) {
      this.logWarning('파일 감시 설정 실패', { error: error.message });
    }
  }

  // 타임아웃이 있는 파일 읽기
  private async readFileWithTimeout(path: string, encoding: BufferEncoding): Promise<string> {
    return Promise.race([
      readFile(path, encoding),
      new Promise<string>((_, reject) =>
        setTimeout(
          () => reject(new Error(`File read timeout: ${path}`)),
          this.config.requestTimeout,
        ),
      ),
    ]);
  }

  // 재시도 로직이 있는 작업 실행
  private async retryOperation<T>(
    operation: () => Promise<T>,
    operationName: string,
    fallback?: () => T,
  ): Promise<T> {
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= this.config.maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error: any) {
        lastError = error;
        this.logWarning(`${operationName} 실패 (시도 ${attempt}/${this.config.maxRetries})`, {
          error: error.message,
        });

        if (attempt < this.config.maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, this.config.retryDelay * attempt));
        }
      }
    }

    // 모든 재시도 실패 시
    this.logError(`${operationName} 최종 실패`, {
      error: lastError?.message,
      attempts: this.config.maxRetries,
    });

    // 폴백이 있으면 사용
    if (fallback) {
      return fallback();
    }

    throw lastError || new Error(`${operationName} failed`);
  }

  // 헬스 체크 수행
  private async performHealthCheck(): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    checks: {
      customElementsFile: { accessible: boolean; error?: string };
      overviewFile: { accessible: boolean; error?: string };
      docsDirectory: { accessible: boolean; error?: string };
      cache: { components: boolean; overview: boolean };
      performance: PerformanceMetrics;
    };
    timestamp: string;
  }> {
    const checks: any = {
      customElementsFile: { accessible: false },
      overviewFile: { accessible: false },
      docsDirectory: { accessible: false },
      cache: {
        components: this.componentsCache !== null,
        overview: this.overviewCache !== null,
      },
      performance: { ...this.performanceMetrics },
    };

    // 파일 접근성 체크
    try {
      await this.readFileWithTimeout(this.customElementsPath, 'utf-8');
      checks.customElementsFile.accessible = true;
    } catch (error: any) {
      checks.customElementsFile.error = error.message;
    }

    try {
      await this.readFileWithTimeout(this.overviewPath, 'utf-8');
      checks.overviewFile.accessible = true;
    } catch (error: any) {
      checks.overviewFile.error = error.message;
    }

    try {
      await readFile(join(this.docsPath, 'components'), { encoding: 'utf-8' });
      checks.docsDirectory.accessible = true;
    } catch (error: any) {
      checks.docsDirectory.error = error.message;
    }

    // 상태 결정
    const allFilesAccessible =
      checks.customElementsFile.accessible &&
      checks.overviewFile.accessible &&
      checks.docsDirectory.accessible;

    const status =
      allFilesAccessible && checks.cache.components
        ? 'healthy'
        : allFilesAccessible
          ? 'degraded'
          : 'unhealthy';

    return {
      status,
      checks,
      timestamp: new Date().toISOString(),
    };
  }

  // JSON 직렬화 헬퍼 (설정에 따라 포맷 변경)
  private serialize(data: any, format?: 'compact' | 'pretty' | 'minimal'): string {
    const fmt = format || this.config.defaultFormat;

    switch (fmt) {
      case 'compact':
        return JSON.stringify(data); // 압축 (토큰 최소)
      case 'pretty':
        return JSON.stringify(data, null, 2); // 읽기 쉬움
      case 'minimal':
        return this.minimalSerialize(data); // 최소한의 정보만
      default:
        return JSON.stringify(data);
    }
  }

  // 최소한의 정보만 직렬화
  private minimalSerialize(data: any): string {
    if (Array.isArray(data)) {
      return JSON.stringify(data.map((item) => this.minimalSerialize(item)));
    }
    if (typeof data === 'object' && data !== null) {
      // 핵심 필드만 유지
      const minimal: any = {};
      if ('tag' in data) minimal.tag = data.tag;
      if ('tagName' in data) minimal.tagName = data.tagName;
      if ('description' in data) {
        const desc = data.description || '';
        minimal.desc = typeof desc === 'string' ? desc.substring(0, 50) : desc;
      }
      if ('docs' in data) {
        const docs = data.docs || '';
        minimal.desc = typeof docs === 'string' ? docs.substring(0, 50) : docs;
      }
      if ('props' in data) minimal.props = Array.isArray(data.props) ? data.props.length : 0;
      if ('events' in data) minimal.events = Array.isArray(data.events) ? data.events.length : 0;
      if ('methods' in data)
        minimal.methods = Array.isArray(data.methods) ? data.methods.length : 0;
      return JSON.stringify(minimal);
    }
    return JSON.stringify(data);
  }

  // 응답 크기 체크 및 자동 최적화
  private optimizeResponse(data: any): any {
    const serialized = this.serialize(data);
    const sizeKB = Buffer.byteLength(serialized, 'utf8') / 1024;

    if (sizeKB > this.config.maxResponseSize) {
      // 응답이 너무 크면 자동으로 요약 모드로 전환
      this.logWarning('응답 크기 초과, 요약 모드로 전환', {
        sizeKB: Math.round(sizeKB * 100) / 100,
        maxSize: this.config.maxResponseSize,
      });

      return this.summarizeResponse(data);
    }

    return data;
  }

  // 응답 요약
  private summarizeResponse(data: any): any {
    if (Array.isArray(data)) {
      return {
        total: data.length,
        summary: data.slice(0, 10).map((item: any) => ({
          tag: item.tag || item.tagName,
          description: this.extractShortDescription(item.description || item.docs || ''),
        })),
        message: `총 ${data.length}개 결과 중 10개만 표시. 상세 정보는 개별 조회하세요.`,
      };
    }
    return data;
  }

  // 짧은 설명 추출
  private extractShortDescription(docs: string): string {
    if (!docs) return '';
    // 첫 문장 또는 50자 이내 추출
    const firstSentence = docs.split(/[.!?]/)[0];
    return firstSentence.length > 50 ? firstSentence.substring(0, 47) + '...' : firstSentence;
  }

  // 정리 메서드
  private cleanup() {
    this.fileWatchers.forEach((watcher) => watcher.close());
    this.fileWatchers = [];
    // 메모리 정리
    this.componentsCache = null;
    this.overviewCache = null;
    this.summaryCache = null;
  }

  // 메모리 사용량 모니터링
  private getMemoryUsage(): {
    heapUsed: number;
    heapTotal: number;
    external: number;
    rss: number;
  } {
    const usage = process.memoryUsage();
    return {
      heapUsed: Math.round((usage.heapUsed / 1024 / 1024) * 100) / 100, // MB
      heapTotal: Math.round((usage.heapTotal / 1024 / 1024) * 100) / 100, // MB
      external: Math.round((usage.external / 1024 / 1024) * 100) / 100, // MB
      rss: Math.round((usage.rss / 1024 / 1024) * 100) / 100, // MB
    };
  }

  // 메모리 정리 (필요 시)
  private clearCacheIfNeeded() {
    const memory = this.getMemoryUsage();
    // 힙 사용량이 500MB를 초과하면 캐시 정리
    if (memory.heapUsed > 500) {
      this.logWarning('메모리 사용량 높음, 캐시 정리', { memory });
      this.componentsCache = null;
      this.overviewCache = null;
      this.summaryCache = null; // 요약 캐시도 정리
      // 가비지 컬렉션 힌트 (Node.js가 지원하는 경우)
      if (global.gc) {
        global.gc();
      }
    }
  }

  // 컴포넌트 품질 평가
  private async evaluateComponentQuality(
    tagName: string,
    allComponents: ComponentInfo[],
  ): Promise<{
    component: string;
    evaluationDate: string;
    scores: {
      consistency: number;
      reusability: number;
      completeness: number;
      performance: number;
      usability: number;
      standards: number;
    };
    totalScore: number;
    grade: string;
    details: {
      consistency: any;
      reusability: any;
      completeness: any;
      performance: any;
      usability: any;
      standards: any;
    };
    improvements: string[];
  }> {
    const component = allComponents.find((c) => c.tag === tagName);

    if (!component) {
      throw new Error(`Component not found: ${tagName}`);
    }

    // 전체 라이브러리 통계 계산
    const allProps = allComponents.flatMap((c) => c.props || []);
    const propUsage: Record<string, number> = {};
    allProps.forEach((prop: any) => {
      if (prop.name) {
        propUsage[prop.name] = (propUsage[prop.name] || 0) + 1;
      }
    });

    // 공통 Props 패턴 분석
    const commonProps = ['variant', 'size', 'disabled', 'loading'];
    const mostUsedProps = Object.entries(propUsage)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([name]) => name);

    // 1. 일관성 점수 계산
    const consistencyScore = this.calculateConsistencyScore(
      component,
      allComponents,
      commonProps,
      mostUsedProps,
    );

    // 2. 재사용성 점수 계산
    const reusabilityScore = this.calculateReusabilityScore(component, commonProps);

    // 3. 완성도 점수 계산
    const completenessScore = await this.calculateCompletenessScore(tagName, component);

    // 4. 성능 점수 (기본값, 실제 측정 불가)
    const performanceScore = 85; // 기본 점수

    // 5. 사용성 점수
    const usabilityScore = this.calculateUsabilityScore(component);

    // 6. 표준 준수 점수
    const standardsScore = await this.calculateStandardsScore(component);

    // 가중치
    const weights = {
      consistency: 0.25,
      reusability: 0.2,
      completeness: 0.2,
      performance: 0.15,
      usability: 0.15,
      standards: 0.05,
    };

    // 종합 점수 계산
    const totalScore =
      consistencyScore.score * weights.consistency +
      reusabilityScore.score * weights.reusability +
      completenessScore.score * weights.completeness +
      performanceScore * weights.performance +
      usabilityScore.score * weights.usability +
      standardsScore.score * weights.standards;

    // 등급 결정
    const grade =
      totalScore >= 90
        ? 'A+'
        : totalScore >= 80
          ? 'A'
          : totalScore >= 70
            ? 'B'
            : totalScore >= 60
              ? 'C'
              : 'D';

    // 개선 제안 생성
    const improvements = this.generateImprovements(
      component,
      consistencyScore,
      reusabilityScore,
      completenessScore,
      usabilityScore,
      standardsScore,
      commonProps,
    );

    return {
      component: tagName,
      evaluationDate: new Date().toISOString(),
      scores: {
        consistency: consistencyScore.score,
        reusability: reusabilityScore.score,
        completeness: completenessScore.score,
        performance: performanceScore,
        usability: usabilityScore.score,
        standards: standardsScore.score,
      },
      totalScore: Math.round(totalScore * 100) / 100,
      grade,
      details: {
        consistency: consistencyScore.details,
        reusability: reusabilityScore.details,
        completeness: completenessScore.details,
        performance: { note: 'Performance metrics require runtime measurement' },
        usability: usabilityScore.details,
        standards: standardsScore.details,
      },
      improvements,
    };
  }

  // 컴포넌트 유형 판별
  private getComponentType(tagName: string): 'layout' | 'ui' {
    const layoutComponents = ['tinto-app-route', 'tinto-section'];
    // tinto-wrapper는 UI 컴포넌트로 분류 (variant가 필요할 수 있음)
    return layoutComponents.includes(tagName) ? 'layout' : 'ui';
  }

  // 일관성 점수 계산
  private calculateConsistencyScore(
    component: ComponentInfo,
    allComponents: ComponentInfo[],
    commonProps: string[],
    _mostUsedProps: string[],
  ): { score: number; details: any } {
    const componentProps = (component.props || []).map((p: any) => p.name?.toLowerCase() || '');
    const componentEvents = (component.events || []).map((e: any) => e.name?.toLowerCase() || '');
    const componentType = this.getComponentType(component.tag);

    // Props 네이밍 일치율
    const commonPropsUsed = commonProps.filter((prop) =>
      componentProps.includes(prop.toLowerCase()),
    ).length;
    const propsNamingMatch = commonProps.length > 0 ? commonPropsUsed / commonProps.length : 0.5;

    // 이벤트 네이밍 패턴 (일반적인 패턴: Click, Change 등)
    const eventPatterns = ['click', 'change', 'input', 'focus', 'blur'];
    const eventsFollowingPattern = componentEvents.filter((event) =>
      eventPatterns.some((pattern) => event.includes(pattern)),
    ).length;
    const eventsNamingMatch =
      componentEvents.length > 0
        ? eventsFollowingPattern / componentEvents.length
        : componentEvents.length === 0
          ? 0.5
          : 0.3;

    // 토큰 사용 일치율 (레이아웃 컴포넌트는 variant/size 평가 제외)
    const tokenProps = ['variant', 'size', 'disabled', 'loading'];
    let tokenPropsUsed = 0;
    let tokenUsageMatch = 0.5;

    if (componentType === 'layout') {
      // 레이아웃 컴포넌트는 disabled, loading만 평가 (variant, size는 불필요)
      const layoutTokenProps = ['disabled', 'loading'];
      tokenPropsUsed = layoutTokenProps.filter((prop) =>
        componentProps.includes(prop.toLowerCase()),
      ).length;
      tokenUsageMatch =
        layoutTokenProps.length > 0 ? tokenPropsUsed / layoutTokenProps.length : 0.5;
    } else {
      // UI 컴포넌트는 모든 토큰 Props 평가
      tokenPropsUsed = tokenProps.filter((prop) =>
        componentProps.includes(prop.toLowerCase()),
      ).length;
      tokenUsageMatch = tokenProps.length > 0 ? tokenPropsUsed / tokenProps.length : 0.5;
    }

    const score = (propsNamingMatch * 0.4 + eventsNamingMatch * 0.3 + tokenUsageMatch * 0.3) * 100;

    return {
      score: Math.round(score * 100) / 100,
      details: {
        propsNamingMatch: Math.round(propsNamingMatch * 100),
        eventsNamingMatch: Math.round(eventsNamingMatch * 100),
        tokenUsageMatch: Math.round(tokenUsageMatch * 100),
        commonPropsUsed,
        eventsFollowingPattern,
        tokenPropsUsed,
        componentType,
      },
    };
  }

  // 재사용성 점수 계산
  private calculateReusabilityScore(
    component: ComponentInfo,
    commonProps: string[],
  ): { score: number; details: any } {
    const props = component.props || [];
    const requiredProps = props.filter((p: any) => !p.optional && !p.default).length;
    const optionalProps = props.filter((p: any) => p.optional || p.default).length;
    const totalProps = props.length;
    const componentType = this.getComponentType(component.tag);

    const requiredPropsRatio = totalProps > 0 ? requiredProps / totalProps : 0;
    const optionalPropsRatio = totalProps > 0 ? optionalProps / totalProps : 0;

    // variant/size 지원 여부 (레이아웃 컴포넌트는 평가 제외)
    const componentPropNames = props.map((p: any) => p.name?.toLowerCase() || '');
    const variantSupport = componentPropNames.includes('variant');
    const sizeSupport = componentPropNames.includes('size');

    // 컴포지션 가능성 (slots 지원 여부)
    const hasSlots = (component as any).slots && (component as any).slots.length > 0;

    // 점수 계산
    let score = 0;
    score += (1 - requiredPropsRatio) * 30; // 필수 Props 비율이 낮을수록 좋음
    score += optionalPropsRatio * 20; // 선택 Props 비율이 높을수록 좋음

    if (componentType === 'layout') {
      // 레이아웃 컴포넌트는 variant/size 점수 없음, 대신 유연성 점수 추가
      score += hasSlots ? 30 : 15; // slots 지원이 중요
      // 레이아웃 컴포넌트는 많은 Props가 정상이므로 추가 점수
      score += Math.min(totalProps / 10, 20); // Props가 많을수록 유연성 높음 (최대 20점)
    } else {
      // UI 컴포넌트는 variant/size 지원 평가
      score += variantSupport ? 20 : 0;
      score += sizeSupport ? 15 : 0;
      score += hasSlots ? 15 : 0;
    }

    return {
      score: Math.min(100, Math.round(score * 100) / 100),
      details: {
        requiredPropsRatio: Math.round(requiredPropsRatio * 100),
        optionalPropsRatio: Math.round(optionalPropsRatio * 100),
        variantSupport: componentType === 'layout' ? null : variantSupport, // 레이아웃은 null
        sizeSupport: componentType === 'layout' ? null : sizeSupport, // 레이아웃은 null
        hasSlots,
        totalProps,
        requiredProps,
        optionalProps,
        componentType,
      },
    };
  }

  // 완성도 점수 계산
  private async calculateCompletenessScore(
    tagName: string,
    component: ComponentInfo,
  ): Promise<{ score: number; details: any }> {
    // 문서화 확인
    const docPath = join(this.docsPath, 'components', `${tagName}.md`);
    let hasDocumentation = false;
    let exampleCount = 0;
    let docContent = '';

    try {
      docContent = await this.readFileWithTimeout(docPath, 'utf-8');
      hasDocumentation = docContent.length > 100; // 최소 100자 이상
      // 예제 코드 개수 추정 (``` 코드 블록 개수)
      exampleCount = (docContent.match(/```/g) || []).length / 2;
    } catch {
      hasDocumentation = false;
    }

    // 접근성 지원 (aria 관련 props 또는 events)
    const props = component.props || [];
    const hasAriaProps = props.some(
      (p: any) => p.name?.toLowerCase().includes('aria') || p.name?.toLowerCase().includes('role'),
    );
    const hasA11ySupport = hasAriaProps || component.docs?.toLowerCase().includes('accessibility');

    // 에러 처리 (disabled, loading 등 상태 관련 props)
    const hasErrorHandling = props.some((p: any) => {
      const name = p.name?.toLowerCase() || '';
      return name.includes('disabled') || name.includes('loading') || name.includes('error');
    });

    // TypeScript 타입 정의 (모든 props에 타입이 있는지)
    const propsWithTypes = props.filter((p: any) => p.type).length;
    const typescriptTypes = props.length > 0 ? propsWithTypes / props.length : 0.5;

    // 점수 계산
    let score = 0;
    score += hasDocumentation ? 40 : 0;
    score += Math.min(exampleCount * 5, 25); // 최대 25점
    score += hasA11ySupport ? 15 : 0;
    score += hasErrorHandling ? 10 : 0;
    score += typescriptTypes * 10;

    return {
      score: Math.min(100, Math.round(score * 100) / 100),
      details: {
        documentationScore: hasDocumentation ? 100 : 0,
        exampleCount: Math.round(exampleCount),
        a11ySupport: hasA11ySupport,
        errorHandling: hasErrorHandling,
        typescriptTypes: Math.round(typescriptTypes * 100),
        hasDocumentation,
      },
    };
  }

  // 사용성 점수 계산
  private calculateUsabilityScore(component: ComponentInfo): { score: number; details: any } {
    const props = component.props || [];
    const events = component.events || [];
    const componentType = this.getComponentType(component.tag);

    // API 직관성 (일반적인 prop 이름 사용)
    const intuitiveProps = ['variant', 'size', 'disabled', 'loading', 'href', 'target'];
    const intuitivePropsUsed = props.filter((p: any) =>
      intuitiveProps.includes(p.name?.toLowerCase() || ''),
    ).length;
    const apiIntuitiveness =
      props.length > 0 ? intuitivePropsUsed / Math.max(props.length, intuitiveProps.length) : 0.5;

    // 학습 곡선 (레이아웃 컴포넌트는 Props가 많아도 정상)
    let learningCurve = 1.0;
    if (componentType === 'layout') {
      // 레이아웃 컴포넌트는 Props가 많아도 정상 (완화된 평가)
      learningCurve =
        props.length <= 20 ? 1.0 : props.length <= 40 ? 0.9 : props.length <= 60 ? 0.8 : 0.7;
    } else {
      // UI 컴포넌트는 기존 평가 기준 유지
      learningCurve = props.length <= 10 ? 1 : props.length <= 20 ? 0.7 : 0.4;
    }

    // 개발자 경험 (문서, 예제, 타입 등)
    const hasDocs = !!component.docs && component.docs.length > 50;
    const hasTypes = props.every((p: any) => p.type);
    const developerExperience = (hasDocs ? 0.5 : 0) + (hasTypes ? 0.5 : 0);

    const score =
      (apiIntuitiveness * 0.4 + (1 - learningCurve) * 0.3 + developerExperience * 0.3) * 100;

    return {
      score: Math.round(score * 100) / 100,
      details: {
        apiIntuitiveness: Math.round(apiIntuitiveness * 100),
        learningCurve: Math.round(learningCurve * 100),
        developerExperience: Math.round(developerExperience * 100),
        propsCount: props.length,
        eventsCount: events.length,
        componentType,
      },
    };
  }

  // 표준 준수 점수 계산
  private async calculateStandardsScore(
    component: ComponentInfo,
  ): Promise<{ score: number; details: any }> {
    // Web Components 표준 준수 (tag 이름이 올바른 형식인지)
    const webComponentsCompliant =
      component.tag.includes('-') && component.tag.startsWith('tinto-');

    // Shadow DOM 사용 (encapsulation 정보가 있으면)
    const shadowDOM = true; // Stencil은 기본적으로 Shadow DOM 사용

    // 시맨틱 HTML (기본적으로 준수)
    const semanticHTML = true;

    // ARIA 준수 (접근성 관련 props/events)
    const props = component.props || [];
    const hasAriaProps = props.some((p: any) => p.name?.toLowerCase().includes('aria'));
    const ariaCompliant = hasAriaProps || component.docs?.toLowerCase().includes('aria');

    // 무한 루프 패턴 감지
    const lifecycleIssues = await this.detectLifecycleIssues(component.tag);

    // 점수 계산 (무한 루프 패턴이 있으면 감점)
    const score =
      (webComponentsCompliant ? 0.25 : 0) +
      (shadowDOM ? 0.25 : 0) +
      (semanticHTML ? 0.15 : 0) +
      (ariaCompliant ? 0.15 : 0) +
      (lifecycleIssues.hasIssues ? 0 : 0.2); // 무한 루프 패턴이 없으면 20점

    return {
      score: Math.round(score * 100),
      details: {
        webComponentsCompliant,
        shadowDOM,
        semanticHTML,
        ariaCompliant,
        lifecycleIssues,
      },
    };
  }

  // Lifecycle 메서드 문제 감지 (무한 루프 패턴 등)
  private async detectLifecycleIssues(tagName: string): Promise<{
    hasIssues: boolean;
    issues: string[];
    warnings: string[];
  }> {
    const componentName = tagName.replace('tinto-', '');
    const componentPath = join(COMPONENTS_DIR, componentName, `${componentName}.tsx`);

    const issues: string[] = [];
    const warnings: string[] = [];

    try {
      const content = await this.readFileWithTimeout(componentPath, 'utf-8');

      // 1. render() 메서드에서 prop/state 변경 감지
      const renderMethodRegex = /render\s*\([^)]*\)\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/gs;
      const renderMatch = renderMethodRegex.exec(content);
      if (renderMatch) {
        const renderBody = renderMatch[1];
        // this.prop = 또는 this.state = 패턴 감지
        const propStateAssignmentRegex = /this\.(?:props?|state)\s*=/g;
        if (propStateAssignmentRegex.test(renderBody)) {
          issues.push('CRITICAL: render() 메서드에서 prop/state 변경 감지 - 무한 루프 위험');
        }
        // panel.active = 같은 패턴도 감지
        const childPropAssignmentRegex = /\.(?:active|disabled|visible)\s*=\s*[^;]+/g;
        if (childPropAssignmentRegex.test(renderBody)) {
          issues.push(
            'CRITICAL: render() 메서드에서 자식 컴포넌트 prop 변경 감지 - 무한 루프 위험',
          );
        }
      }

      // 2. componentDidUpdate()에서 무조건 업데이트 감지
      const componentDidUpdateRegex =
        /componentDidUpdate\s*\([^)]*\)\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/gs;
      const updateMatch = componentDidUpdateRegex.exec(content);
      if (updateMatch) {
        const updateBody = updateMatch[1];
        // 조건문 없이 바로 메서드 호출하는 패턴 감지
        const unconditionalUpdateRegex = /(?:this\.\w+\(\)|collectTabPanels\(\)|update\w+\(\))/;
        const hasConditional =
          /if\s*\(/.test(updateBody) || /currentPanels\.length/.test(updateBody);
        if (unconditionalUpdateRegex.test(updateBody) && !hasConditional) {
          warnings.push(
            'WARNING: componentDidUpdate()에서 조건부 업데이트 로직이 없음 - 무한 루프 위험',
          );
        }
      }

      // 3. Shadow DOM 사용 시 render()에서 querySelectorAll 직접 사용 감지
      const hasShadowDOM = /shadow:\s*true/.test(content);
      if (hasShadowDOM && renderMatch) {
        const renderBody = renderMatch[1];
        const querySelectorInRender = /querySelectorAll\s*\(/.test(renderBody);
        if (querySelectorInRender) {
          warnings.push(
            'WARNING: Shadow DOM 사용 시 render()에서 querySelectorAll 직접 사용 - componentDidLoad()에서 수집 권장',
          );
        }
      }
    } catch (error) {
      // 파일을 읽을 수 없는 경우 (예: 컴포넌트가 아직 생성되지 않음)
      // 에러는 무시하고 빈 결과 반환
    }

    return {
      hasIssues: issues.length > 0,
      issues,
      warnings,
    };
  }

  // 개선 제안 생성
  private generateImprovements(
    component: ComponentInfo,
    consistency: { score: number; details: any },
    reusability: { score: number; details: any },
    completeness: { score: number; details: any },
    usability: { score: number; details: any },
    standards: { score: number; details: any },
    commonProps: string[],
  ): string[] {
    const improvements: string[] = [];

    const componentType = this.getComponentType(component.tag);

    // 일관성 개선 제안 (레이아웃 컴포넌트는 variant/size 제외)
    if (consistency.score < 90) {
      if (consistency.details.propsNamingMatch < 80) {
        // 레이아웃 컴포넌트는 variant, size를 제외한 공통 Props만 체크
        const propsToCheck =
          componentType === 'layout'
            ? commonProps.filter((p) => p !== 'variant' && p !== 'size')
            : commonProps;

        const missingProps = propsToCheck.filter(
          (prop) =>
            !(component.props || []).some((p: any) => p.name?.toLowerCase() === prop.toLowerCase()),
        );
        if (missingProps.length > 0) {
          improvements.push(`일관성: 공통 Props 추가 고려 (${missingProps.join(', ')})`);
        }
      }
      if (consistency.details.tokenUsageMatch < 80 && componentType !== 'layout') {
        // 레이아웃 컴포넌트는 variant/size 토큰 평가 제외
        improvements.push('일관성: 디자인 토큰 사용 패턴을 다른 컴포넌트와 일치시키기');
      }
    }

    // 재사용성 개선 제안 (레이아웃 컴포넌트는 variant/size 제안 제외)
    if (reusability.score < 85) {
      if (componentType !== 'layout') {
        // UI 컴포넌트만 variant/size 제안
        if (reusability.details.variantSupport === false) {
          improvements.push('재사용성: variant prop 추가 고려');
        }
        if (reusability.details.sizeSupport === false) {
          improvements.push('재사용성: size prop 추가 고려');
        }
      }
      if (reusability.details.requiredPropsRatio > 0.3) {
        improvements.push('재사용성: 필수 Props 비율을 낮추기 (기본값 제공)');
      }
    }

    // 완성도 개선 제안
    if (completeness.score < 90) {
      if (!completeness.details.hasDocumentation) {
        improvements.push('완성도: 컴포넌트 문서 작성 필요');
      }
      if (completeness.details.exampleCount < 3) {
        improvements.push('완성도: 예제 코드 추가 (최소 3개 권장)');
      }
      if (!completeness.details.a11ySupport) {
        improvements.push('완성도: 접근성(a11y) 지원 추가');
      }
    }

    // 사용성 개선 제안 (레이아웃 컴포넌트는 Props 개수 제안 완화)
    if (usability.score < 85) {
      if (componentType !== 'layout' && usability.details.propsCount > 20) {
        // 레이아웃 컴포넌트는 Props가 많아도 정상이므로 제안 제외
        improvements.push('사용성: Props 개수 줄이기 (20개 이하 권장)');
      }
      if (usability.details.apiIntuitiveness < 70) {
        improvements.push('사용성: API를 더 직관적으로 만들기');
      }
    }

    // 표준 준수 개선 제안
    if (standards.score < 100) {
      if (!standards.details.ariaCompliant) {
        improvements.push('표준 준수: ARIA 가이드라인 준수 필요');
      }
      // 무한 루프 패턴 개선 제안
      if (standards.details.lifecycleIssues?.hasIssues) {
        standards.details.lifecycleIssues.issues.forEach((issue: string) => {
          improvements.push(`🚨 ${issue}`);
        });
      }
      if (standards.details.lifecycleIssues?.warnings?.length > 0) {
        standards.details.lifecycleIssues.warnings.forEach((warning: string) => {
          improvements.push(`⚠️ ${warning}`);
        });
      }
    }

    return improvements.length > 0 ? improvements : ['모든 기준을 충족합니다! 🎉'];
  }

  // 컴포넌트 소스에서 part 속성 추출
  private async extractSemanticParts(tagName: string): Promise<SemanticPart[]> {
    const componentName = tagName.replace('tinto-', '');
    const componentPath = join(COMPONENTS_DIR, componentName, `${componentName}.tsx`);

    try {
      const content = await this.readFileWithTimeout(componentPath, 'utf-8');
      const parts: SemanticPart[] = [];

      // part="..." 패턴 찾기
      const partRegex = /part=["']([^"']+)["']/g;
      const elementRegex = /<(\w+)[^>]*part=["']([^"']+)["']/g;

      const partMatches = new Set<string>();
      let match;

      // 모든 part 속성 찾기
      while ((match = partRegex.exec(content)) !== null) {
        partMatches.add(match[1]);
      }

      // 각 part에 대한 요소 타입 찾기
      const partElements: Record<string, string> = {};
      while ((match = elementRegex.exec(content)) !== null) {
        partElements[match[2]] = match[1];
      }

      // root part는 항상 추가 (없으면 생성)
      if (!partMatches.has('root')) {
        parts.push({
          name: 'root',
          description: '루트 요소, 컴포넌트의 최상위 컨테이너',
          element: 'div',
          styles: ['display', 'position', 'width', 'height'],
        });
      }

      // 각 part에 대한 설명 생성
      for (const partName of partMatches) {
        const element = partElements[partName] || 'div';
        const description = this.generatePartDescription(tagName, partName, element);
        const styles = this.inferPartStyles(partName, element);

        parts.push({
          name: partName,
          description,
          element,
          styles,
        });
      }

      return parts;
    } catch (error: any) {
      this.logWarning('Semantic parts 추출 실패', { tagName, error: error.message });
      return [];
    }
  }

  // Part 설명 생성 (Ant Design 스타일)
  private generatePartDescription(tagName: string, partName: string, element: string): string {
    const componentName = tagName.replace('tinto-', '');
    const descriptions: Record<string, Record<string, string>> = {
      button: {
        root: '루트 요소, 버튼의 최상위 컨테이너로 배경색, 테두리, 패딩, 둥근 모서리, 그림자 효과, 전환 애니메이션, 커서 스타일, 텍스트 정렬 등 버튼의 전체적인 외관 스타일을 포함',
        label:
          '라벨 요소, 버튼 텍스트 내용을 감싸는 요소로 텍스트의 줄바꿈 방지, 중앙 정렬, 중문자 간격 최적화 등 텍스트 레이아웃 스타일을 제어',
        icon: '아이콘 요소, 아이콘의 폰트 크기, 색상 상속, SVG 스타일 리셋 등 아이콘 표시 관련 스타일을 포함',
        prefix: '접두사 요소, 버튼 앞쪽에 배치되는 아이콘이나 콘텐츠 영역',
        suffix: '접미사 요소, 버튼 뒤쪽에 배치되는 아이콘이나 콘텐츠 영역',
        spinner: '로딩 스피너 요소, 로딩 상태일 때 표시되는 회전 애니메이션 스피너',
      },
      card: {
        root: '카드 루트 요소, 위치 지정, 배경색, 테두리, 둥근 모서리, 그림자, 패딩 등 카드 컨테이너의 기본 스타일을 포함',
        header:
          '카드 헤더 영역, flex 레이아웃, 최소 높이, 패딩, 텍스트 색상, 폰트 두께, 폰트 크기, 배경색, 하단 테두리, 상단 둥근 모서리 등 스타일을 포함',
        body: '카드 본문 영역, 패딩, 폰트 크기 등 콘텐츠 표시의 기본 스타일을 포함',
        title: '카드 제목, 인라인 블록 레이아웃, flex 비율, 텍스트 생략 등 제목 표시 스타일을 포함',
        description: '카드 설명, 설명 텍스트의 폰트 크기, 줄 높이 등 레이아웃 스타일을 포함',
        image: '카드 이미지, 이미지의 표시 및 레이아웃 스타일을 포함',
        badge: '배지 요소, 할인율이나 특별 표시를 위한 배지 스타일',
        price: '가격 요소, 가격 정보 표시 스타일',
      },
      'form-input': {
        root: '폼 입력 루트 요소, 전체 입력 필드의 컨테이너',
        wrapper: '래퍼 요소, 라벨과 입력 필드를 감싸는 컨테이너',
        label: '라벨 요소, 입력 필드의 라벨 텍스트 스타일',
        container: '컨테이너 요소, 입력 필드와 아이콘을 포함하는 영역',
        input: '입력 필드 요소, 실제 텍스트 입력 영역의 스타일',
        'icon-start': '시작 아이콘 요소, 입력 필드 왼쪽에 배치되는 아이콘',
        'icon-end': '종료 아이콘 요소, 입력 필드 오른쪽에 배치되는 아이콘',
        message: '메시지 요소, 에러나 힌트 메시지 표시 영역',
      },
      modal: {
        root: '모달 루트 요소, 모달의 최상위 컨테이너',
        backdrop: '배경 요소, 모달 뒤의 어두운 배경 레이어',
        container: '컨테이너 요소, 모달 콘텐츠를 감싸는 컨테이너',
        header: '헤더 요소, 모달 제목과 닫기 버튼을 포함하는 영역',
        title: '제목 요소, 모달 제목 텍스트 스타일',
        body: '본문 요소, 모달의 주요 콘텐츠 영역',
        footer: '푸터 요소, 모달 하단의 버튼 영역',
        close: '닫기 버튼 요소, 모달을 닫는 버튼',
      },
      toast: {
        root: '토스트 루트 요소, 토스트 알림의 최상위 컨테이너',
        toast: '토스트 요소, 알림 메시지의 컨테이너',
        icon: '아이콘 요소, 토스트 타입에 따른 아이콘 표시',
        message: '메시지 요소, 토스트 알림의 텍스트 내용',
        close: '닫기 버튼 요소, 토스트를 닫는 버튼',
      },
      loading: {
        root: '로딩 루트 요소, 로딩 인디케이터의 최상위 컨테이너',
        loading: '로딩 요소, 로딩 애니메이션의 컨테이너',
        spinner: '스피너 요소, 회전하는 원형 로딩 애니메이션',
        dots: '점 요소, 점들이 순차적으로 나타나는 로딩 애니메이션',
        pulse: '펄스 요소, 펄스 효과를 가진 로딩 애니메이션',
        text: '텍스트 요소, 로딩 메시지 텍스트',
      },
    };

    if (descriptions[componentName] && descriptions[componentName][partName]) {
      return descriptions[componentName][partName];
    }

    // 기본 설명 생성
    const partNameMap: Record<string, string> = {
      root: '루트 요소',
      header: '헤더 요소',
      body: '본문 요소',
      footer: '푸터 요소',
      title: '제목 요소',
      content: '콘텐츠 요소',
      icon: '아이콘 요소',
      label: '라벨 요소',
      button: '버튼 요소',
      input: '입력 요소',
      image: '이미지 요소',
      description: '설명 요소',
      message: '메시지 요소',
      close: '닫기 버튼 요소',
      wrapper: '래퍼 요소',
      container: '컨테이너 요소',
    };

    const baseDesc = partNameMap[partName] || `${partName} 요소`;
    return `${baseDesc}, ${element} 태그를 사용하여 ${partName} 영역의 스타일을 제어할 수 있습니다`;
  }

  // Part의 주요 스타일 추론
  private inferPartStyles(partName: string, element: string): string[] {
    const commonStyles: Record<string, string[]> = {
      root: ['display', 'position', 'width', 'height', 'background', 'border', 'padding', 'margin'],
      header: ['display', 'padding', 'background', 'border-bottom', 'font-weight', 'font-size'],
      body: ['padding', 'background', 'color', 'font-size'],
      footer: ['display', 'padding', 'background', 'border-top'],
      title: ['font-size', 'font-weight', 'color', 'line-height', 'text-align'],
      content: ['padding', 'color', 'font-size', 'line-height'],
      icon: ['width', 'height', 'color', 'font-size', 'margin'],
      label: ['font-size', 'font-weight', 'color', 'padding', 'margin'],
      button: ['background', 'border', 'padding', 'border-radius', 'cursor', 'transition'],
      input: ['width', 'height', 'padding', 'border', 'background', 'color', 'font-size'],
      image: ['width', 'height', 'object-fit', 'border-radius'],
      message: ['color', 'font-size', 'margin', 'padding'],
    };

    return commonStyles[partName] || ['display', 'padding', 'margin'];
  }

  // CSS 파일에서 CSS 변수 추출
  private async extractCSSVariables(tagName: string): Promise<string[]> {
    const componentName = tagName.replace('tinto-', '');
    const cssPath = join(COMPONENTS_DIR, componentName, `${componentName}.css`);

    try {
      const content = await this.readFileWithTimeout(cssPath, 'utf-8');
      const variables = new Set<string>();

      // --variable-name 패턴 찾기
      const varRegex = /--[a-zA-Z0-9-]+/g;
      let match;

      while ((match = varRegex.exec(content)) !== null) {
        variables.add(match[0]);
      }

      return Array.from(variables).sort();
    } catch (error: any) {
      this.logWarning('CSS 변수 추출 실패', { tagName, error: error.message });
      return [];
    }
  }

  // Ant Design 스타일의 semantic 설명 포맷팅
  private formatSemanticDescription(tagName: string, semantics: SemanticPart[]): string {
    const componentName = tagName.replace('tinto-', '');
    let description = `# ${tagName} 컴포넌트 Semantic 구조\n\n`;
    description += `이 컴포넌트는 다음과 같은 semantic parts를 제공합니다:\n\n`;

    for (const part of semantics) {
      description += `### ${part.name}\n\n`;
      description += `- \`${part.name}\`: ${part.description}\n`;
      if (part.element) {
        description += `- 요소 타입: \`<${part.element}>\`\n`;
      }
      if (part.styles && part.styles.length > 0) {
        description += `- 주요 스타일 속성: ${part.styles.join(', ')}\n`;
      }
      description += `\n`;
    }

    description += `## 사용 예제\n\n`;
    description += `각 part는 CSS의 \`::part()\` 선택자를 통해 스타일링할 수 있습니다:\n\n`;
    description += `\`\`\`css\n`;
    for (const part of semantics) {
      description += `${tagName}::part(${part.name}) {\n`;
      description += `  /* ${part.description} 스타일링 */\n`;
      if (part.styles && part.styles.length > 0) {
        description += `  ${part.styles[0]}: /* 값 */;\n`;
      }
      description += `}\n\n`;
    }
    description += `\`\`\`\n`;

    return description;
  }

  // 스타일링 가이드 생성
  private generateStylingGuide(
    tagName: string,
    cssVariables: string[],
    semantics: SemanticPart[],
  ): string {
    let guide = `# ${tagName} 스타일링 가이드\n\n`;

    guide += `## CSS 변수 사용\n\n`;
    guide += `이 컴포넌트는 다음 CSS 변수를 제공합니다:\n\n`;
    for (const variable of cssVariables) {
      guide += `- \`${variable}\`: 컴포넌트 스타일 커스터마이징용 변수\n`;
    }

    guide += `\n## Part 선택자 사용\n\n`;
    guide += `각 semantic part는 \`::part()\` 선택자를 통해 스타일링할 수 있습니다:\n\n`;
    for (const part of semantics) {
      guide += `### ${part.name}\n\n`;
      guide += `\`\`\`css\n`;
      guide += `${tagName}::part(${part.name}) {\n`;
      if (part.styles && part.styles.length > 0) {
        guide += `  ${part.styles[0]}: /* 값 */;\n`;
      }
      guide += `}\n`;
      guide += `\`\`\`\n\n`;
    }

    guide += `## CSS 변수 오버라이드 예제\n\n`;
    guide += `\`\`\`css\n`;
    guide += `${tagName} {\n`;
    if (cssVariables.length > 0) {
      guide += `  ${cssVariables[0]}: /* 커스텀 값 */;\n`;
    }
    guide += `}\n`;
    guide += `\`\`\`\n`;

    return guide;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('UXBIT MCP 서버가 시작되었습니다.');

    // 프로세스 종료 시 정리
    process.on('SIGINT', () => {
      this.cleanup();
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      this.cleanup();
      process.exit(0);
    });

    // 주기적 메모리 모니터링 (5분마다)
    setInterval(
      () => {
        const memory = this.getMemoryUsage();
        this.logInfo('메모리 사용량', memory);
        this.clearCacheIfNeeded();
      },
      5 * 60 * 1000,
    );
  }
}

// 서버 실행
const server = new UxbitMCPServer();
server.run().catch(console.error);
