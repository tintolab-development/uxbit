# UXBIT MCP 서버 효율적 구축 가이드

Stencil이 MCP를 직접 제공하지 않는 상황에서, 기존 인프라를 최대한 활용하여 효율적으로 UXBIT MCP 서버를 구축하는 방법입니다.

## 📋 목차

1. [핵심 전략](#핵심-전략)
2. [기존 인프라 활용](#기존-인프라-활용)
3. [최소 구현 접근법](#최소-구현-접근법)
4. [자동화 전략](#자동화-전략)
5. [단계별 구현](#단계별-구현)
6. [배포 및 설정](#배포-및-설정)
7. [최적화 팁](#최적화-팁)
8. [FAQ](#faq)

---

## 핵심 전략

### 1. 기존 빌드 아티팩트 활용

Stencil은 이미 다음을 생성합니다:

- ✅ `custom-elements.json`: 컴포넌트 메타데이터 (자동 생성)
- ✅ TypeScript 타입 정의: `dist/types/`
- ✅ 컴포넌트 문서: `docs/components/*.md`

**→ 이들을 그대로 활용하면 파싱/생성 로직이 거의 필요 없음**

### 2. 최소 코드 원칙

**하지 말아야 할 것:**

- ❌ 컴포넌트 소스 코드 파싱 (Stencil이 이미 함)
- ❌ 메타데이터 수동 생성 (custom-elements.json 활용)
- ❌ 복잡한 빌드 파이프라인 구축

**해야 할 것:**

- ✅ 기존 JSON 파일 읽기
- ✅ 기존 문서 파일 제공
- ✅ 간단한 검색/필터링 로직

### 3. 빌드 프로세스 통합

MCP 서버를 Stencil 빌드 프로세스에 통합하여:

- 컴포넌트 변경 시 자동으로 MCP 서버도 업데이트
- 단일 명령으로 전체 시스템 빌드

---

## 기존 인프라 활용

### 1. Stencil 빌드 아티팩트

#### custom-elements.json (자동 생성)

**위치:** `apps/stencil-components/custom-elements.json`

**생성 설정:** `stencil.config.ts`

```typescript
{
  type: 'docs-json',
  file: 'custom-elements.json',
}
```

**구조:**

```json
{
  "components": [
    {
      "tag": "tinto-button",
      "props": [...],
      "events": [...],
      "methods": [...],
      "docs": "..."
    }
  ]
}
```

**활용 방법:**

- 파일을 직접 읽어서 파싱
- 추가 변환 없이 그대로 사용
- 컴포넌트 추가/변경 시 자동 반영

#### TypeScript 타입 정의

**위치:** `apps/stencil-components/dist/types/`

**활용:**

- 컴포넌트 타입 정보 참조
- Props 타입 검증 (선택사항)

### 2. 문서 파일

#### 컴포넌트 문서

**위치:** `apps/stencil-components/docs/components/`

**파일명 패턴:** `{tag-name}.md`

**예시:**

- `tinto-button.md`
- `tinto-image.md`
- `tinto-section.md`

**활용:**

- 파일 시스템에서 직접 읽기
- URI 기반 리소스로 제공
- 추가 변환 불필요

#### 컴포넌트 개요

**위치:** `apps/stencil-components/docs/COMPONENTS_OVERVIEW.md`

**활용:**

- 전체 컴포넌트 개요 리소스로 제공

### 3. 모노레포 구조

**장점:**

- 워크스페이스 의존성으로 Stencil 컴포넌트 패키지 직접 참조
- 상대 경로로 파일 접근 가능
- 단일 빌드 명령으로 전체 시스템 빌드

---

## 최소 구현 접근법

### 핵심 아이디어: "읽기 전용 서버"

MCP 서버는 다음만 수행:

1. **읽기**: 기존 파일 읽기
2. **변환**: 최소한의 데이터 변환 (필요시)
3. **제공**: MCP 프로토콜로 노출

### 구현 복잡도 비교

#### ❌ 복잡한 접근 (불필요)

```typescript
// 컴포넌트 소스 코드 파싱
const ast = parseTSX(componentSource);
const props = extractProps(ast);
const events = extractEvents(ast);
// ... 수백 줄의 파싱 로직
```

#### ✅ 간단한 접근 (권장)

```typescript
// 기존 JSON 파일 읽기
const data = JSON.parse(await readFile('custom-elements.json', 'utf-8'));
const components = data.components;
// 끝!
```

### 코드 라인 수 예상

| 접근법              | 예상 코드 라인 수 |
| ------------------- | ----------------- |
| 소스 코드 파싱      | 500+ 라인         |
| **기존 JSON 활용**  | **~200 라인**     |
| 문서 파일 직접 제공 | ~50 라인          |
| **총합**            | **~250 라인**     |

---

## 자동화 전략

### 1. 빌드 후처리 통합

#### Stencil 빌드 후 자동 실행

**방법 1: npm scripts 활용**

```json
{
  "scripts": {
    "build": "stencil build && node scripts/post-build.mjs",
    "postbuild": "node scripts/generate-mcp-index.mjs"
  }
}
```

**방법 2: Stencil 플러그인 (고급)**

- 커스텀 플러그인으로 빌드 후 MCP 인덱스 생성
- 더 깔끔하지만 구현 복잡도 증가

**권장:** 방법 1 (간단하고 충분함)

### 2. 파일 감시 (Watch Mode)

개발 중 자동 업데이트:

```typescript
// MCP 서버가 파일 변경 감지
import { watch } from 'fs';

watch('custom-elements.json', () => {
  reloadComponents();
});
```

### 3. CI/CD 통합

빌드 파이프라인에 자동 포함:

```yaml
# .github/workflows/build.yml
- name: Build Stencil Components
  run: pnpm --filter @uxbit/stencil-components build

- name: Build MCP Server
  run: pnpm --filter @uxbit/mcp-server build
```

---

## 단계별 구현

### Phase 1: 최소 기능 서버 (1-2시간)

#### 1.1 프로젝트 초기화

```bash
# 디렉토리 생성
mkdir -p apps/mcp-server/src

# package.json 생성
cd apps/mcp-server
pnpm init
```

**최소 의존성:**

```json
{
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.4"
  },
  "devDependencies": {
    "@types/node": "^22.13.5",
    "typescript": "^5.9.3"
  }
}
```

#### 1.2 기본 서버 구조

```typescript
// src/index.ts (약 50줄)
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '../../..');
const CUSTOM_ELEMENTS_JSON = join(PROJECT_ROOT, 'apps/stencil-components/custom-elements.json');

// 서버 초기화 및 핸들러 설정
// ...
```

#### 1.3 컴포넌트 로더 (간단 버전)

```typescript
// 약 30줄
async function loadComponents() {
  const content = await readFile(CUSTOM_ELEMENTS_JSON, 'utf-8');
  return JSON.parse(content).components;
}
```

#### 1.4 리소스 핸들러

```typescript
// 약 40줄
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;

  if (uri === 'uxbit://components/list') {
    const components = await loadComponents();
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
    const docPath = join(PROJECT_ROOT, `apps/stencil-components/docs/components/${tagName}.md`);
    const content = await readFile(docPath, 'utf-8');
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: content,
        },
      ],
    };
  }
});
```

#### 1.5 도구 핸들러 (검색)

```typescript
// 약 50줄
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const components = await loadComponents();

  if (name === 'search_components') {
    const query = (args as any).query?.toLowerCase() || '';
    const results = components.filter((comp) => {
      const searchText = `${comp.tag} ${comp.docs || ''}`.toLowerCase();
      return searchText.includes(query);
    });

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
});
```

**총 코드량: ~170줄**

### Phase 2: 기능 확장 (선택사항)

#### 2.1 캐싱 추가

```typescript
let componentsCache: ComponentInfo[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5분

async function loadComponents() {
  const now = Date.now();
  if (componentsCache && now - cacheTimestamp < CACHE_TTL) {
    return componentsCache;
  }

  const content = await readFile(CUSTOM_ELEMENTS_JSON, 'utf-8');
  componentsCache = JSON.parse(content).components;
  cacheTimestamp = now;
  return componentsCache;
}
```

#### 2.2 추가 도구

- `get_component_info`: 상세 정보 조회
- `list_all_components`: 전체 목록
- `search_props`: Props로 검색

#### 2.3 에러 처리 강화

```typescript
try {
  // 파일 읽기
} catch (error) {
  if (error.code === 'ENOENT') {
    // 파일 없음 처리
  } else {
    // 기타 에러
  }
}
```

---

## 배포 및 설정

### MCP 서버 실행 방식

**중요:** MCP 서버는 웹 문서가 아니라 **실행 가능한 서버 프로그램**입니다.

- ❌ 웹 서버에 배포하는 것이 아님
- ✅ 로컬 머신에서 Node.js 프로세스로 실행
- ✅ MCP 클라이언트(에디터)가 stdio로 통신

### 로컬 실행

**에디터(Cursor 등)에서 코딩할 때:**

- MCP 서버는 **로컬에서만 실행**됩니다
- 에디터가 로컬 MCP 서버와 직접 통신
- 클라우드 배포나 원격 서버 불필요

**동작 흐름:**

```
Cursor (에디터)
  ↓ stdio 통신
로컬 MCP 서버 (node dist/index.js)
  ↓ 파일 읽기
로컬 파일 시스템 (custom-elements.json, docs/*.md)
```

**장점:**

- 빠른 응답 속도 (로컬 통신)
- 인터넷 연결 불필요
- 설정 간단
- 보안 (데이터가 로컬에만 존재)

### Git 관리

**MCP 서버는 일반 소스 코드이므로 Git으로 관리 가능합니다.**

**관리할 항목:**

```
apps/mcp-server/
├── src/
│   └── index.ts          # ✅ Git에 포함
├── package.json          # ✅ Git에 포함
├── tsconfig.json         # ✅ Git에 포함
├── README.md             # ✅ Git에 포함
└── dist/                 # ❌ .gitignore에 추가 (빌드 결과물)
```

**장점:**

- 버전 관리: 코드 변경 이력 추적
- 협업: 팀원과 공유 및 동기화
- 배포: 저장소 클론 후 바로 사용 가능
- 설정 공유: 팀 전체가 동일한 MCP 서버 사용

**사용 시나리오:**

```bash
# 1. 저장소 클론
git clone <repo>
cd uxbit

# 2. 의존성 설치
pnpm install

# 3. 빌드
pnpm --filter @uxbit/mcp-server build

# 4. 에디터 설정에 경로 지정
```

### Cursor 에디터 설정

**필수:** Cursor 설정에 MCP 서버를 등록해야 합니다.

#### 설정 파일 위치

- **macOS:** `~/Library/Application Support/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json`
- 또는 Cursor 설정 UI에서 MCP 섹션

#### 설정 내용

```json
{
  "mcpServers": {
    "uxbit": {
      "command": "node",
      "args": ["/Users/tintolab/Desktop/uxbit/apps/mcp-server/dist/index.js"]
    }
  }
}
```

**중요 사항:**

- ✅ **절대 경로 사용** (상대 경로는 동작하지 않을 수 있음)
- ✅ 빌드된 파일 경로 (`dist/index.js`)
- ✅ 경로가 변경되면 설정도 업데이트 필요

#### 설정 후

1. Cursor 재시작 (또는 설정 리로드)
2. MCP 서버가 자동으로 실행됨
3. AI가 UXBIT 컴포넌트 정보에 접근 가능

### 언어 선택 (영문 vs 한글)

**MCP 프로토콜 자체는 언어에 무관합니다.**

**권장 사항:**

- **코드/변수명**: 영문 (표준 관례)
- **사용자 문서**: 팀 언어 (한국어 가능)
- **AI가 읽을 메타데이터**: 영문 권장 (선택사항)

**이유:**

- AI 모델이 영문 설명을 더 잘 이해할 수 있는 경우가 있음
- 하지만 필수는 아님 - 한국어로도 충분히 동작

**예시:**

```typescript
// ✅ 영문 (권장)
{
  name: 'search_components',
  description: 'Search components by name or description'
}

// ✅ 한글 (가능)
{
  name: 'search_components',
  description: '컴포넌트 이름이나 설명으로 검색'
}
```

---

## 최적화 팁

### 1. 파일 I/O 최소화

#### 문제: 매 요청마다 파일 읽기

```typescript
// ❌ 비효율적
async function getComponent(tagName: string) {
  const data = await readFile(CUSTOM_ELEMENTS_JSON, 'utf-8');
  // 매번 파일 읽기
}
```

#### 해결: 메모리 캐싱

```typescript
// ✅ 효율적
let cache: ComponentInfo[] | null = null;

async function getComponents() {
  if (!cache) {
    const data = await readFile(CUSTOM_ELEMENTS_JSON, 'utf-8');
    cache = JSON.parse(data).components;
  }
  return cache;
}
```

### 2. 지연 로딩

문서 파일은 요청 시에만 읽기:

```typescript
// 문서는 필요할 때만 로드
async function getComponentDoc(tagName: string) {
  const docPath = join(DOCS_DIR, `${tagName}.md`);
  try {
    return await readFile(docPath, 'utf-8');
  } catch {
    return null; // 문서 없음
  }
}
```

### 3. 병렬 처리

여러 리소스를 동시에 읽기:

```typescript
const [overview, components] = await Promise.all([
  readFile(OVERVIEW_PATH, 'utf-8'),
  readFile(CUSTOM_ELEMENTS_JSON, 'utf-8'),
]);
```

### 4. 경로 상대화

절대 경로 대신 상대 경로 사용:

```typescript
// ❌ 절대 경로 (이식성 낮음)
const path = '/Users/.../uxbit/apps/stencil-components/...';

// ✅ 상대 경로 (이식성 높음)
const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, '../../stencil-components/...');
```

---

## 구현 체크리스트

### 필수 기능 (MVP)

- [ ] MCP 서버 기본 구조
- [ ] custom-elements.json 읽기
- [ ] 컴포넌트 목록 리소스 제공
- [ ] 개별 컴포넌트 문서 리소스 제공
- [ ] 컴포넌트 검색 도구
- [ ] 컴포넌트 정보 조회 도구

### 선택 기능

- [ ] 컴포넌트 개요 리소스
- [ ] Props 검색 도구
- [ ] 캐싱 메커니즘
- [ ] 파일 감시 (자동 리로드)
- [ ] 에러 처리 강화
- [ ] 로깅 시스템

### 최적화

- [ ] 메모리 캐싱
- [ ] 지연 로딩
- [ ] 병렬 처리
- [ ] 경로 최적화

---

## 예상 개발 시간

| 단계     | 작업             | 예상 시간   |
| -------- | ---------------- | ----------- |
| Phase 1  | 기본 서버 구조   | 1-2시간     |
| Phase 2  | 기능 확장        | 1-2시간     |
| Phase 3  | 최적화 및 테스트 | 1시간       |
| **총합** |                  | **3-5시간** |

**비교: 소스 코드 파싱 방식은 10-20시간 예상**

---

## 코드 예시: 완전한 최소 구현

```typescript
#!/usr/bin/env node
// apps/mcp-server/src/index.ts (약 200줄)

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '../../..');
const STENCIL_DIR = join(PROJECT_ROOT, 'apps/stencil-components');
const CUSTOM_ELEMENTS_JSON = join(STENCIL_DIR, 'custom-elements.json');
const DOCS_DIR = join(STENCIL_DIR, 'docs');

interface ComponentInfo {
  tag: string;
  props?: any[];
  events?: any[];
  methods?: any[];
  docs?: string;
}

class UxbitMCPServer {
  private server: Server;
  private componentsCache: ComponentInfo[] | null = null;

  constructor() {
    this.server = new Server(
      {
        name: 'uxbit-mcp-server',
        version: '0.0.1',
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      },
    );

    this.setupHandlers();
  }

  private setupHandlers() {
    // 리소스 목록
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      const components = await this.loadComponents();

      const resources = [
        {
          uri: 'uxbit://components/list',
          name: 'Component List',
          description: '모든 컴포넌트 목록',
          mimeType: 'application/json',
        },
      ];

      for (const comp of components) {
        resources.push({
          uri: `uxbit://components/${comp.tag}`,
          name: `${comp.tag} Documentation`,
          description: comp.docs || '',
          mimeType: 'text/markdown',
        });
      }

      return { resources };
    });

    // 리소스 읽기
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const { uri } = request.params;

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

      const match = uri.match(/^uxbit:\/\/components\/(.+)$/);
      if (match) {
        const tagName = match[1];
        const docPath = join(DOCS_DIR, 'components', `${tagName}.md`);
        try {
          const content = await readFile(docPath, 'utf-8');
          return {
            contents: [
              {
                uri,
                mimeType: 'text/markdown',
                text: content,
              },
            ],
          };
        } catch {
          throw new Error(`Documentation not found: ${tagName}`);
        }
      }

      throw new Error(`Resource not found: ${uri}`);
    });

    // 도구 목록
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'search_components',
            description: '컴포넌트 검색',
            inputSchema: {
              type: 'object',
              properties: {
                query: { type: 'string' },
              },
              required: ['query'],
            },
          },
        ],
      };
    });

    // 도구 실행
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      const components = await this.loadComponents();

      if (name === 'search_components') {
        const query = (args as any).query?.toLowerCase() || '';
        const results = components.filter((comp) => {
          const text = `${comp.tag} ${comp.docs || ''}`.toLowerCase();
          return text.includes(query);
        });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(results, null, 2),
            },
          ],
        };
      }

      throw new Error(`Unknown tool: ${name}`);
    });
  }

  private async loadComponents(): Promise<ComponentInfo[]> {
    if (this.componentsCache) {
      return this.componentsCache;
    }

    const content = await readFile(CUSTOM_ELEMENTS_JSON, 'utf-8');
    const data = JSON.parse(content);
    this.componentsCache = data.components || [];
    return this.componentsCache;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('UXBIT MCP 서버 시작됨');
  }
}

const server = new UxbitMCPServer();
server.run().catch(console.error);
```

---

## 빌드 통합 예시

### package.json 스크립트

```json
{
  "scripts": {
    "build": "stencil build",
    "build:mcp": "pnpm build && pnpm --filter @uxbit/mcp-server build",
    "dev": "stencil build --watch",
    "dev:mcp": "pnpm dev & pnpm --filter @uxbit/mcp-server dev"
  }
}
```

### 루트 package.json

```json
{
  "scripts": {
    "mcp:build": "pnpm --filter @uxbit/stencil-components build && pnpm --filter @uxbit/mcp-server build",
    "mcp:dev": "pnpm --filter @uxbit/stencil-components dev & pnpm --filter @uxbit/mcp-server dev"
  }
}
```

---

## 결론

### 핵심 원칙

1. **기존 아티팩트 활용**: Stencil이 생성한 파일 그대로 사용
2. **최소 코드**: 읽기 + 변환 + 제공만 수행
3. **자동화**: 빌드 프로세스에 통합
4. **단순함**: 복잡한 파싱 로직 피하기

### 예상 효과

- ✅ **개발 시간**: 3-5시간 (vs 10-20시간)
- ✅ **코드량**: ~200줄 (vs 500+줄)
- ✅ **유지보수**: 쉬움 (기존 파일 의존)
- ✅ **자동 동기화**: Stencil 빌드 시 자동 업데이트

### 다음 단계

1. Phase 1 구현 (MVP)
2. 실제 MCP 클라이언트에서 테스트
3. 필요 시 Phase 2 기능 추가
4. 문서화 및 배포

---

## FAQ

### Q1: MCP 서버를 웹에 배포해야 하나요?

**A:** 아니요. MCP 서버는 웹 문서가 아니라 **실행 가능한 서버 프로그램**입니다.

- 웹 서버에 배포하는 것이 아님
- 로컬 머신에서 Node.js 프로세스로 실행
- MCP 클라이언트(에디터)가 stdio로 통신

### Q2: 로컬에서만 서버가 돌아가면 되나요?

**A:** 네, 맞습니다. 에디터에서 코딩할 때는 **로컬에서만 실행**하면 됩니다.

- 클라우드 배포 불필요
- 빠른 응답 속도
- 인터넷 연결 불필요

### Q3: Git으로 관리 가능한가요?

**A:** 네, 가능합니다. MCP 서버는 일반 소스 코드이므로 Git으로 관리할 수 있습니다.

- 버전 관리 가능
- 팀원과 공유 가능
- 저장소 클론 후 바로 사용 가능

### Q4: Cursor 에디터에서 settings/mcp에 등록이 필요한가요?

**A:** 네, **필수입니다.** Cursor 설정 파일에 MCP 서버를 등록해야 사용할 수 있습니다.

```json
{
  "mcpServers": {
    "uxbit": {
      "command": "node",
      "args": ["/path/to/uxbit/apps/mcp-server/dist/index.js"]
    }
  }
}
```

### Q5: 로컬 경로를 적용시켜야 하나요?

**A:** 네, 맞습니다. Cursor 설정에 **절대 경로**를 지정해야 합니다.

- 상대 경로는 동작하지 않을 수 있음
- 빌드된 파일 경로 (`dist/index.js`) 사용
- 경로가 변경되면 설정도 업데이트 필요

### Q6: 영문으로 작성해야 하나요?

**A:** 필수는 아닙니다. 다만 AI 모델이 영문 설명을 더 잘 이해할 수 있는 경우가 있어 영문을 권장합니다.

- 코드/변수명: 영문 (표준 관례)
- 사용자 문서: 팀 언어 (한국어 가능)
- AI 메타데이터: 영문 권장 (선택사항)

---

**작성일:** 2025년 12월 30일 (KST)  
**버전:** 1.1.0
