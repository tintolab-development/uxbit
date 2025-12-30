# UXBIT MCP Server 테스트 가이드

## 사전 준비

### 1. 의존성 설치

```bash
cd apps/mcp-server
pnpm install
```

### 2. Stencil 컴포넌트 빌드

MCP 서버는 `custom-elements.json` 파일을 필요로 하므로, 먼저 Stencil 컴포넌트를 빌드해야 합니다:

```bash
# 루트에서 실행
pnpm --filter @uxbit/stencil-components build
```

또는:

```bash
cd apps/stencil-components
pnpm build
```

### 3. MCP 서버 빌드

```bash
cd apps/mcp-server
pnpm build
```

빌드가 성공하면 `dist/index.js` 파일이 생성됩니다.

## 로컬 테스트

### 1. 직접 실행 테스트

서버가 정상적으로 시작되는지 확인:

```bash
cd apps/mcp-server
pnpm start
```

서버가 시작되면 `UXBIT MCP 서버가 시작되었습니다.` 메시지가 표시됩니다.

**참고:** MCP 서버는 stdio를 통해 통신하므로, 직접 실행하면 입력을 기다리는 상태가 됩니다. 이는 정상입니다.

### 2. 파일 경로 확인

빌드된 파일의 절대 경로를 확인:

```bash
# macOS/Linux
realpath apps/mcp-server/dist/index.js

# 또는
cd apps/mcp-server
pwd
# 출력된 경로 + /dist/index.js
```

예시:

```
/Users/tintolab/Desktop/uxbit/apps/mcp-server/dist/index.js
```

## Cursor 에디터 설정

### 1. 설정 파일 위치

**macOS:**

```
~/Library/Application Support/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json
```

**Windows:**

```
%APPDATA%\Cursor\User\globalStorage\rooveterinaryinc.roo-cline\settings\cline_mcp_settings.json
```

**Linux:**

```
~/.config/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json
```

### 2. 설정 내용

위치한 설정 파일에 다음 내용을 추가 (또는 수정):

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

**중요:**

- `args`의 경로를 실제 빌드된 파일의 **절대 경로**로 변경하세요
- 경로에 공백이 있으면 따옴표로 감싸지 마세요 (JSON 배열 요소이므로)

### 3. Cursor 재시작

설정을 저장한 후 Cursor를 완전히 종료하고 다시 시작합니다.

## 테스트 시나리오

### 1. 리소스 목록 확인

Cursor에서 AI에게 요청:

```
UXBIT 컴포넌트 목록을 보여줘
```

또는:

```
List all UXBIT components
```

**예상 결과:**

- 컴포넌트 목록이 JSON 형식으로 반환
- 각 컴포넌트의 태그명, 설명, props/events/methods 개수 포함

### 2. 컴포넌트 검색

```
버튼 컴포넌트를 검색해줘
```

또는:

```
Search for button components in UXBIT
```

**예상 결과:**

- `tinto-button` 컴포넌트가 검색 결과에 포함
- 컴포넌트 정보 반환

### 3. 컴포넌트 상세 정보

```
tinto-button 컴포넌트의 상세 정보를 알려줘
```

또는:

```
Get detailed information about tinto-button component
```

**예상 결과:**

- Props 목록 (타입, 기본값, 설명)
- Events 목록
- Methods 목록
- 문서 내용

### 4. Props 검색

```
variant prop을 가진 컴포넌트를 찾아줘
```

또는:

```
Find components that have a "variant" prop
```

**예상 결과:**

- `variant` prop을 가진 모든 컴포넌트 목록
- 각 컴포넌트의 해당 prop 정보

### 5. 컴포넌트 개요

```
UXBIT 컴포넌트 개요를 보여줘
```

**예상 결과:**

- `COMPONENTS_OVERVIEW.md` 파일 내용
- 전체 컴포넌트 라이브러리 개요

## 문제 해결

### 문제 1: 서버가 시작되지 않음

**증상:** Cursor에서 MCP 서버 연결 실패

**해결 방법:**

1. 빌드 확인: `pnpm build` 실행
2. 경로 확인: 절대 경로가 정확한지 확인
3. Node.js 버전: Node.js 18+ 필요
4. 로그 확인: Cursor 개발자 도구에서 에러 메시지 확인

### 문제 2: 컴포넌트를 찾을 수 없음

**증상:** "Component not found" 에러

**해결 방법:**

1. Stencil 빌드 확인: `custom-elements.json` 파일이 생성되었는지 확인
2. 파일 위치 확인: `apps/stencil-components/custom-elements.json` 존재 여부
3. 캐시 클리어: 서버 재시작 (캐시는 메모리에만 저장)

### 문제 3: 문서를 읽을 수 없음

**증상:** "Documentation not found" 에러

**해결 방법:**

1. 문서 파일 확인: `apps/stencil-components/docs/components/{tagName}.md` 존재 여부
2. 파일명 확인: 태그명과 파일명이 일치하는지 확인 (예: `tinto-button` → `tinto-button.md`)

### 문제 4: 성능 이슈

**증상:** 응답이 느림

**해결 방법:**

1. 캐시 확인: 첫 요청 후 캐시가 적용되는지 확인
2. 파일 크기: `custom-elements.json` 파일 크기 확인
3. 로그 확인: 불필요한 파일 읽기가 발생하는지 확인

## 로그 확인

MCP 서버는 모든 로그를 `stderr`로 출력합니다. Cursor의 개발자 도구나 터미널에서 로그를 확인할 수 있습니다.

**로그 형식:**

```json
{
  "level": "info|warning|error",
  "message": "로그 메시지",
  "timestamp": "2025-12-30T...",
  "context": { ... }
}
```

## 성공 확인

다음이 모두 정상 작동하면 테스트 성공:

- ✅ 서버가 정상적으로 시작됨
- ✅ 컴포넌트 목록 조회 가능
- ✅ 컴포넌트 검색 작동
- ✅ 컴포넌트 상세 정보 조회 가능
- ✅ Props 검색 작동
- ✅ 컴포넌트 개요 문서 조회 가능
- ✅ 에러 메시지가 명확함
- ✅ 로그가 구조화되어 출력됨

## 다음 단계

테스트가 성공적으로 완료되면 **Phase 3**로 진행합니다:

- 파일 감시 (자동 리로드)
- 추가 검색 기능
- 성능 모니터링
- 통계 정보 제공

---

**작성일:** 2025년 12월 30일 (KST)  
**버전:** 1.0.0
