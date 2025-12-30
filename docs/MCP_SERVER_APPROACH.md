# UXBIT MCP 서버 구축 접근 방법

Stencil 라이브러리와 UXBIT 커스텀 컴포넌트를 위한 Model Context Protocol (MCP) 서버를 구축하는 방법론 가이드입니다.

## 📋 목차

1. [개요](#개요)
2. [MCP 서버 아키텍처 설계](#mcp-서버-아키텍처-설계)
3. [구현 단계별 접근](#구현-단계별-접근)
4. [데이터 소스 분석](#데이터-소스-분석)
5. [제공할 리소스 및 도구](#제공할-리소스-및-도구)
6. [통합 방법](#통합-방법)
7. [고려사항](#고려사항)

---

## 개요

### 목표

UXBIT Stencil 컴포넌트 라이브러리의 정보를 AI 모델이 쉽게 접근하고 활용할 수 있도록 MCP 서버를 구축합니다.

### MCP란?

Model Context Protocol은 AI 모델이 외부 데이터 소스와 상호작용할 수 있게 해주는 프로토콜입니다. MCP 서버는 다음을 제공합니다:

- **Resources**: 정적 데이터 (문서, 설정 파일 등)
- **Tools**: 동적 작업 수행 (검색, 조회, 계산 등)
- **Prompts**: 재사용 가능한 프롬프트 템플릿

---

## MCP 서버 아키텍처 설계

### 1. 서버 구조

```
apps/mcp-server/
├── src/
│   ├── index.ts              # MCP 서버 진입점
│   ├── handlers/
│   │   ├── resources.ts      # 리소스 핸들러
│   │   └── tools.ts          # 도구 핸들러
│   ├── parsers/
│   │   └── component-parser.ts  # custom-elements.json 파서
│   └── utils/
│       └── doc-loader.ts     # 문서 로더
├── package.json
├── tsconfig.json
└── README.md
```

### 2. 데이터 흐름

```
custom-elements.json → 파서 → 컴포넌트 메타데이터
     ↓
docs/components/*.md → 문서 로더 → 마크다운 문서
     ↓
MCP 서버 → Resources/Tools → AI 클라이언트
```

---

## 구현 단계별 접근

### Phase 1: 기본 인프라 구축

#### 1.1 프로젝트 초기화

```bash
# apps/mcp-server 디렉토리 생성
mkdir -p apps/mcp-server/src

# 패키지 설정
pnpm init
```

**필수 의존성:**

- `@modelcontextprotocol/sdk`: MCP SDK
- `typescript`: 타입스크립트 지원
- `@types/node`: Node.js 타입 정의

#### 1.2 기본 서버 구조

```typescript
// src/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
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
```

### Phase 2: 데이터 소스 통합

#### 2.1 custom-elements.json 파싱

**목표:** Stencil이 생성한 컴포넌트 메타데이터를 읽고 구조화

**접근 방법:**

1. `custom-elements.json` 파일 읽기
2. `components` 배열 순회
3. 각 컴포넌트의 다음 정보 추출:
   - `tag`: 컴포넌트 태그명
   - `props`: 속성 목록
   - `events`: 이벤트 목록
   - `methods`: 메서드 목록
   - `slots`: 슬롯 정보
   - `docs`: 문서 문자열

**구현 예시:**

```typescript
interface ComponentInfo {
  tagName: string;
  description: string;
  properties: PropInfo[];
  events: EventInfo[];
  methods: MethodInfo[];
  slots: SlotInfo[];
}

async function loadComponents(): Promise<Map<string, ComponentInfo>> {
  const content = await readFile(CUSTOM_ELEMENTS_JSON, 'utf-8');
  const data = JSON.parse(content);
  const components = new Map();

  for (const component of data.components) {
    components.set(component.tag, {
      tagName: component.tag,
      description: component.docs || '',
      properties: component.props || [],
      events: component.events || [],
      methods: component.methods || [],
      slots: component.slots || [],
    });
  }

  return components;
}
```

#### 2.2 문서 파일 로딩

**목표:** `docs/components/*.md` 파일들을 리소스로 제공

**접근 방법:**

1. `docs/components/` 디렉토리 스캔
2. 각 컴포넌트별 마크다운 파일 매핑
3. URI 기반 리소스 제공 (`uxbit://components/{tagName}`)

---

## 데이터 소스 분석

### 1. custom-elements.json 구조

**위치:** `apps/stencil-components/custom-elements.json`

**주요 필드:**

```json
{
  "components": [
    {
      "tag": "tinto-button",
      "props": [
        {
          "name": "variant",
          "type": "'primary' | 'secondary' | 'tertiary'",
          "default": "'primary'",
          "docs": "버튼 스타일 변형"
        }
      ],
      "events": [
        {
          "name": "buttonClick",
          "type": "CustomEvent<ButtonClickDetail>"
        }
      ],
      "methods": [],
      "slots": [],
      "docs": "컴포넌트 설명"
    }
  ]
}
```

### 2. 문서 파일 구조

**위치:** `apps/stencil-components/docs/components/`

**파일명 패턴:** `{tag-name}.md` (예: `tinto-button.md`)

**내용 구조:**

- 빠른 시작 예제
- Props 테이블
- Events 설명
- 사용 시나리오
- 코드 예제

### 3. 컴포넌트 개요 문서

**위치:** `apps/stencil-components/docs/COMPONENTS_OVERVIEW.md`

**내용:**

- 전체 컴포넌트 목록
- 각 컴포넌트의 주요 기능
- 사용 시나리오

---

## 제공할 리소스 및 도구

### Resources (정적 데이터)

#### 1. 컴포넌트 개요

- **URI:** `uxbit://components/overview`
- **타입:** `text/markdown`
- **내용:** `COMPONENTS_OVERVIEW.md` 파일 내용

#### 2. 컴포넌트 목록

- **URI:** `uxbit://components/list`
- **타입:** `application/json`
- **내용:** 모든 컴포넌트의 메타데이터 요약

#### 3. 개별 컴포넌트 문서

- **URI:** `uxbit://components/{tagName}`
- **타입:** `text/markdown`
- **내용:** 각 컴포넌트의 상세 문서

**예시:**

- `uxbit://components/tinto-button`
- `uxbit://components/tinto-image`
- `uxbit://components/tinto-section`

### Tools (동적 작업)

#### 1. 컴포넌트 검색

```typescript
{
  name: 'search_components',
  description: '컴포넌트 이름이나 설명으로 검색',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: '검색어'
      }
    }
  }
}
```

**동작:**

- 컴포넌트 태그명, 설명, props 이름에서 검색
- 매칭되는 컴포넌트 목록 반환

#### 2. 컴포넌트 상세 정보 조회

```typescript
{
  name: 'get_component_info',
  description: '특정 컴포넌트의 상세 정보 조회',
  inputSchema: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
        description: '컴포넌트 태그 이름'
      }
    }
  }
}
```

**반환 데이터:**

- Props 목록 (타입, 기본값, 설명)
- Events 목록
- Methods 목록
- Slots 정보
- 문서 내용

#### 3. 컴포넌트 목록 조회

```typescript
{
  name: 'list_all_components',
  description: '모든 사용 가능한 컴포넌트 목록 조회',
  inputSchema: {
    type: 'object',
    properties: {}
  }
}
```

**반환 데이터:**

- 모든 컴포넌트의 태그명과 간단한 설명

#### 4. Props 검색 (선택사항)

```typescript
{
  name: 'search_props',
  description: '특정 prop을 가진 컴포넌트 검색',
  inputSchema: {
    type: 'object',
    properties: {
      propName: {
        type: 'string',
        description: '검색할 prop 이름'
      }
    }
  }
}
```

---

## 통합 방법

### 1. MCP 클라이언트 설정

#### Claude Desktop

`~/Library/Application Support/Claude/claude_desktop_config.json`:

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

#### Cursor / 다른 클라이언트

각 클라이언트의 MCP 설정 파일에 동일한 형식으로 추가

### 2. 개발 워크플로우

#### 로컬 개발

```bash
# 의존성 설치
cd apps/mcp-server
pnpm install

# 빌드
pnpm build

# 개발 모드 (watch)
pnpm dev
```

#### 프로덕션 배포

```bash
# 빌드
pnpm build

# 실행
node dist/index.js
```

### 3. 모노레포 통합

**루트 package.json에 스크립트 추가:**

```json
{
  "scripts": {
    "mcp:build": "pnpm --filter @uxbit/mcp-server build",
    "mcp:dev": "pnpm --filter @uxbit/mcp-server dev"
  }
}
```

---

## 고려사항

### 1. 성능 최적화

#### 캐싱 전략

- `custom-elements.json` 파싱 결과를 메모리에 캐시
- 문서 파일은 요청 시 로드 (파일 시스템 I/O 최소화)
- 컴포넌트 목록은 서버 시작 시 한 번만 로드

#### 지연 로딩

- 문서 파일은 실제 요청 시에만 읽기
- 대용량 JSON 파일은 스트리밍 파싱 고려

### 2. 에러 처리

#### 파일 없음 처리

- `custom-elements.json`이 없을 경우: 빈 컴포넌트 목록 반환
- 문서 파일이 없을 경우: 컴포넌트 메타데이터만 반환

#### 파싱 에러 처리

- JSON 파싱 실패 시: 명확한 에러 메시지 반환
- 파일 읽기 실패 시: 로그 기록 후 기본값 반환

### 3. 확장성

#### 추가 리소스 타입

- Storybook 스토리 정보
- 컴포넌트 사용 예제 코드
- 테스트 케이스 정보

#### 추가 도구

- 컴포넌트 코드 생성 도구
- Props 유효성 검사 도구
- 컴포넌트 비교 도구

### 4. 보안

#### 파일 경로 검증

- 상대 경로 공격 방지
- 허용된 디렉토리만 접근 가능하도록 제한

#### 입력 검증

- 사용자 입력(검색어, 태그명) 검증
- SQL 인젝션 스타일 공격 방지 (파일 경로 조작)

### 5. 문서화

#### 서버 문서

- README.md에 설치 및 사용 방법
- 각 리소스와 도구의 상세 설명
- 예제 사용 사례

#### API 문서

- 리소스 URI 목록
- 도구 입력/출력 스키마
- 에러 코드 및 메시지

---

## 구현 우선순위

### MVP (최소 기능 제품)

1. ✅ 기본 MCP 서버 구조
2. ✅ custom-elements.json 파싱
3. ✅ 컴포넌트 목록 리소스
4. ✅ 개별 컴포넌트 문서 리소스
5. ✅ 컴포넌트 검색 도구
6. ✅ 컴포넌트 정보 조회 도구

### Phase 2

1. 컴포넌트 개요 리소스
2. Props 검색 도구
3. 에러 처리 강화
4. 성능 최적화 (캐싱)

### Phase 3

1. Storybook 스토리 정보 통합
2. 코드 생성 도구
3. 사용 예제 리소스
4. 확장된 검색 기능

---

## 참고 자료

### MCP 관련

- [Model Context Protocol 공식 문서](https://modelcontextprotocol.io/)
- [MCP SDK GitHub](https://github.com/modelcontextprotocol/typescript-sdk)

### Stencil 관련

- [Stencil 공식 문서](https://stenciljs.com/)
- [Custom Elements JSON 스펙](https://github.com/webcomponents/custom-elements-json)

### 프로젝트 내부

- `apps/stencil-components/custom-elements.json`: 컴포넌트 메타데이터
- `apps/stencil-components/docs/`: 컴포넌트 문서
- `apps/stencil-components/src/components/`: 컴포넌트 소스 코드

---

## 다음 단계

1. **프로토타입 개발**: 기본 구조로 MVP 구현
2. **테스트**: 실제 MCP 클라이언트에서 테스트
3. **반복 개선**: 사용자 피드백 기반 기능 추가
4. **문서화**: 사용 가이드 및 예제 작성
5. **배포**: 패키지화 및 배포 준비

---

**작성일:** 2025년 12월 30일 (KST)  
**작성자:** AI Assistant  
**버전:** 1.0.0
