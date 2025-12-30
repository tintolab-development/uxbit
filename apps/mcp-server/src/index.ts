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

interface ComponentInfo {
  tag: string;
  props?: any[];
  events?: any[];
  methods?: any[];
  docs?: string;
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
};

interface ServerConfig {
  cacheTTL?: number;
  requestTimeout?: number;
  maxRetries?: number;
  retryDelay?: number;
  customElementsPath?: string;
  docsPath?: string;
  overviewPath?: string;
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
                text: JSON.stringify(components, null, 2),
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
              properties: {},
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
            if (!query) {
              return {
                content: [
                  {
                    type: 'text',
                    text: JSON.stringify({ error: 'Query parameter is required' }, null, 2),
                  },
                ],
                isError: true,
              };
            }

            const results = components.filter((comp) => {
              const searchText = `${comp.tag} ${comp.docs || ''}`.toLowerCase();
              return searchText.includes(query);
            });

            this.logInfo('컴포넌트 검색', { query, resultsCount: results.length });

            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(results, null, 2),
                },
              ],
            };
          }

          case 'get_component_info': {
            const tagName = (args as any).tagName;
            if (!tagName) {
              return {
                content: [
                  {
                    type: 'text',
                    text: JSON.stringify({ error: 'tagName parameter is required' }, null, 2),
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
                    text: JSON.stringify({ error: `Component not found: ${tagName}` }, null, 2),
                  },
                ],
                isError: true,
              };
            }

            // 문서 파일도 함께 읽기
            const docPath = join(this.docsPath, 'components', `${tagName}.md`);
            let docContent = null;
            try {
              docContent = await this.readFileWithTimeout(docPath, 'utf-8');
            } catch (error: any) {
              this.logWarning('문서를 읽을 수 없음', { tagName, error: error.message });
            }

            const info = {
              ...component,
              documentation: docContent || 'Documentation not available.',
            };

            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(info, null, 2),
                },
              ],
            };
          }

          case 'list_all_components': {
            const list = components.map((comp) => ({
              tagName: comp.tag,
              description: comp.docs || '',
              propertiesCount: comp.props?.length || 0,
              eventsCount: comp.events?.length || 0,
              methodsCount: comp.methods?.length || 0,
            }));

            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(list, null, 2),
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
                    text: JSON.stringify({ error: 'propName parameter is required' }, null, 2),
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
                  text: JSON.stringify(results, null, 2),
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
                    text: JSON.stringify({ error: 'eventName parameter is required' }, null, 2),
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
                  text: JSON.stringify(results, null, 2),
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
                    text: JSON.stringify({ error: 'methodName parameter is required' }, null, 2),
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
                  text: JSON.stringify(results, null, 2),
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
                  text: JSON.stringify(healthWithMemory, null, 2),
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
                  text: JSON.stringify(stats, null, 2),
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
                    text: JSON.stringify({ error: 'tagName parameter is required' }, null, 2),
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
                  text: JSON.stringify(evaluation, null, 2),
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

  // 정리 메서드
  private cleanup() {
    this.fileWatchers.forEach((watcher) => watcher.close());
    this.fileWatchers = [];
    // 메모리 정리
    this.componentsCache = null;
    this.overviewCache = null;
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
    const standardsScore = this.calculateStandardsScore(component);

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
  private calculateStandardsScore(component: ComponentInfo): { score: number; details: any } {
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

    const score =
      (webComponentsCompliant ? 0.3 : 0) +
      (shadowDOM ? 0.3 : 0) +
      (semanticHTML ? 0.2 : 0) +
      (ariaCompliant ? 0.2 : 0);

    return {
      score: Math.round(score * 100),
      details: {
        webComponentsCompliant,
        shadowDOM,
        semanticHTML,
        ariaCompliant,
      },
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
    }

    return improvements.length > 0 ? improvements : ['모든 기준을 충족합니다! 🎉'];
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
