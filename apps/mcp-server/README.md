# UXBIT MCP Server

UXBIT Stencil 컴포넌트 라이브러리에 대한 정보를 제공하는 Model Context Protocol (MCP) 서버입니다.

## 목적

UXBIT은 **Ant Design, Material-UI, Chakra UI**와 같은 범용적인 **Headless UI 디자인 시스템**을 목표로 합니다.

이 MCP 서버는 AI 모델이 UXBIT 컴포넌트 라이브러리를 이해하고 활용할 수 있도록 하여:

- 컴포넌트 기반 개발을 AI와 함께 효율적으로 수행
- 일관된 디자인 시스템 가이드라인 제공
- 재사용 가능한 UI 컴포넌트의 빠른 검색 및 활용
- 프레임워크 독립적인 웹 컴포넌트 표준 준수

## 비전

**범용성 (Universal)**: 어떤 프레임워크(React, Vue, Angular, Vanilla JS)에서도 사용 가능한 Web Components  
**Headless**: 스타일과 로직의 분리, 커스터마이징 가능한 디자인 토큰 시스템  
**확장성**: 다양한 프로젝트와 디자인 시스템에 적용 가능한 컴포넌트 아키텍처

## 기능

- **컴포넌트 정보 제공**: custom-elements.json을 파싱하여 모든 컴포넌트의 props, events, methods 정보 제공
- **문서 리소스**: 각 컴포넌트의 마크다운 문서를 리소스로 제공
- **컴포넌트 검색**: 이름이나 설명으로 컴포넌트 검색
- **상세 정보 조회**: 특정 컴포넌트의 전체 정보 조회

## 설치

```bash
pnpm install
```

## 빌드

```bash
pnpm build
```

## 사용 방법

### MCP 클라이언트 설정

MCP 클라이언트(예: Claude Desktop, Cursor)에서 다음과 같이 설정:

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

또는 pnpm을 통해:

```json
{
  "mcpServers": {
    "uxbit": {
      "command": "pnpm",
      "args": ["--filter", "@uxbit/mcp-server", "start"]
    }
  }
}
```

## 제공되는 리소스

- `uxbit://components/overview` - 전체 컴포넌트 개요 문서 (Markdown)
- `uxbit://components/list` - 모든 컴포넌트 목록 (JSON)
- `uxbit://components/{tagName}` - 개별 컴포넌트 문서 (Markdown)

## 제공되는 도구

### 기본 검색

- `search_components` - 컴포넌트 이름이나 설명으로 검색
- `get_component_info` - 특정 컴포넌트의 상세 정보 조회 (props, events, methods, 문서)
- `list_all_components` - 모든 사용 가능한 컴포넌트 목록 조회

### 고급 검색 (Phase 3)

- `search_props` - 특정 prop을 가진 컴포넌트 검색 (예: "variant", "size" prop을 가진 컴포넌트 찾기)
- `search_events` - 특정 이벤트를 발생시키는 컴포넌트 검색
- `search_methods` - 특정 메서드를 가진 컴포넌트 검색

### 통계 및 모니터링 (Phase 3)

- `get_statistics` - 컴포넌트 라이브러리 통계 및 성능 메트릭 조회
- `health_check` - 서버 상태, 파일 접근성, 캐시, 성능, 메모리 확인

### 품질 평가

- `evaluate_component_quality` - 컴포넌트 품질 평가 (일관성, 재사용성, 완성도 등)

## Phase 2 기능

### 성능 최적화

- **TTL 기반 캐싱**: 컴포넌트 목록과 개요 문서를 5분간 캐시하여 성능 향상
- **지연 로딩**: 문서 파일은 요청 시에만 로드

### 에러 처리

- **강화된 에러 처리**: 모든 에러 상황에 대한 명확한 메시지 제공
- **캐시 폴백**: 파일 읽기 실패 시 캐시된 데이터 사용

### 로깅

- **구조화된 로깅**: JSON 형식의 로그로 디버깅 용이
- **로그 레벨**: info, warning, error 레벨 구분

## Phase 3 기능

### 파일 감시 (File Watching)

- **자동 리로드**: `custom-elements.json`이나 문서 파일 변경 시 자동으로 캐시 무효화
- **실시간 업데이트**: 개발 중 컴포넌트 변경 시 즉시 반영
- **효율적인 감시**: 필요한 파일만 선택적으로 감시

### 추가 검색 기능

- **이벤트 검색**: 특정 이벤트를 발생시키는 컴포넌트 찾기
- **메서드 검색**: 특정 메서드를 가진 컴포넌트 찾기
- **향상된 검색**: Props, Events, Methods를 통한 다각도 검색

### 성능 모니터링

- **요청 처리 시간 추적**: 각 요청의 처리 시간 측정
- **캐시 히트율**: 캐시 효율성 모니터링
- **평균 응답 시간**: 전체 성능 지표 제공
- **실시간 메트릭**: 통계 도구를 통해 실시간 확인 가능

### 통계 정보 제공

- **컴포넌트 통계**: 전체 컴포넌트 수, 평균 Props/Events/Methods 수
- **사용 빈도 분석**: 가장 많이 사용되는 Props 목록
- **성능 통계**: 요청 수, 캐시 히트율, 평균 응답 시간

## 토큰 사용 최적화 (Phase 4)

### 설정 기반 최적화

- **JSON 포맷 선택**: `compact` (기본), `pretty`, `minimal` 모드 지원
- **응답 크기 자동 체크**: 설정된 크기 초과 시 자동 요약 모드 전환
- **설정 가능한 기본값**: 모든 최적화 옵션을 기본값으로 설정 가능

### 캐시된 요약 정보

- **요약 캐시**: 컴포넌트 요약 정보를 별도로 캐싱하여 빠른 응답
- **요약 모드**: `summary: true` 옵션으로 요약 정보만 반환
- **문서 파일 읽기 제거**: 요약 모드에서는 문서 파일을 읽지 않아 속도 향상

### 페이지네이션 및 조건부 로딩

- **페이지네이션**: `page`, `pageSize` 파라미터로 결과 분할
- **조건부 상세 정보**: `includeDocs`, `includeSemantics`로 필요한 정보만 로드
- **선택적 데이터 로딩**: 문서나 semantic parts는 필요할 때만 로드

### 사용 예시

```typescript
// 토큰 최소화 모드로 서버 시작
const server = new UxbitMCPServer({
  defaultFormat: 'compact',
  defaultSummaryMode: true,
  defaultPageSize: 10,
  defaultIncludeDocs: false,
  enableSummaryCache: true,
  maxResponseSize: 50,
});

// 요약 모드로 컴포넌트 목록 조회
list_all_components({ summary: true, page: 1, pageSize: 10 });

// 문서 없이 컴포넌트 정보만 조회
get_component_info({ tagName: 'tinto-button', includeDocs: false });
```

### 예상 효과

- **토큰 사용량**: 30-70% 감소 (사용 패턴에 따라 다름)
- **응답 속도**: 요약 캐시 사용 시 향상
- **메모리 효율**: 요약 캐시로 메모리 사용 최적화

자세한 내용은 [프로덕션 최적화 문서](./PRODUCTION_OPTIMIZATION.md)를 참고하세요.

## 개발

```bash
# 개발 모드 (watch)
pnpm dev

# 빌드
pnpm build

# 실행
pnpm start
```

## 문서

### 가이드

- [테스트 가이드](./docs/guides/TESTING.md) - 상세 테스트 가이드
- [Cursor 테스트 가이드](./docs/guides/CURSOR_TEST_GUIDE.md) - Cursor에서 테스트하는 방법
- [테스트 체크리스트](./docs/guides/TEST_CHECKLIST.md) - 테스트 항목 체크리스트

### 비전 및 계획

- [비전](./docs/vision/VISION.md) - UXBIT MCP 서버의 목적과 비전
- [향후 개선 사항](./docs/vision/FUTURE_ENHANCEMENTS.md) - 향후 개선 가능한 사항들

### 단계별 문서

- [Phase 3 기능](./docs/phases/PHASE3.md) - Phase 3 기능 상세 가이드
- [Phase 1 테스트 결과](./docs/phases/PHASE1_TEST_RESULTS.md) - Phase 1 테스트 결과
- [다음 단계](./docs/phases/NEXT_STEPS.md) - 다음 단계 가이드

### 최적화

- [프로덕션 최적화](./docs/optimization/PRODUCTION_OPTIMIZATION.md) - 프로덕션 최적화 완료 보고서

### 평가 및 메트릭

- [컴포넌트 품질 평가](./docs/metrics/COMPONENT_QUALITY_METRICS.md) - 품질 평가 방법론
- [품질 평가 도구 사용 가이드](./docs/metrics/QUALITY_EVALUATION_TOOL.md) - 평가 도구 사용 방법

### 마이그레이션

- [마이그레이션 계획](./docs/migration/MIGRATION_PLAN.md) - 기존 컴포넌트 마이그레이션 계획

## 프로덕션 최적화 (완료)

### 에러 복구 메커니즘

- **재시도 로직**: 파일 읽기 실패 시 자동 재시도 (최대 3회)
- **지수 백오프**: 재시도 간격 점진적 증가
- **폴백 메커니즘**: 실패 시 캐시된 데이터 사용

### 타임아웃 처리

- **요청 타임아웃**: 파일 읽기 작업에 30초 타임아웃 설정
- **타임아웃 에러 처리**: 명확한 에러 메시지 제공

### 메모리 관리

- **자동 캐시 정리**: 힙 사용량 500MB 초과 시 자동 캐시 정리
- **메모리 모니터링**: 주기적 메모리 사용량 추적 (5분마다)
- **가비지 컬렉션**: 필요 시 GC 힌트 제공

### 헬스 체크

- **health_check 도구**: 서버 상태 확인
- **파일 접근성 체크**: 모든 필수 파일 접근 가능 여부 확인
- **캐시 상태 확인**: 캐시 동작 상태 확인
- **성능 메트릭**: 실시간 성능 지표 제공

### 설정 파일 지원

- **커스터마이징 가능**: 캐시 TTL, 타임아웃, 재시도 횟수 등 설정 가능
- **경로 커스터마이징**: 파일 경로 설정 가능
- **환경별 설정**: 개발/프로덕션 환경별 설정 지원

## 빠른 테스트

```bash
# 빠른 테스트
pnpm install
pnpm build
pnpm start
```

자세한 테스트 가이드는 [테스트 가이드](./docs/guides/TESTING.md)를 참고하세요.

## 진행 단계

1. ✅ 현재 상태 테스트 (준비 완료)
2. ✅ 컴포넌트 품질 평가 도구 구현
3. ✅ 토큰 사용 최적화 구현
4. ⏳ 평가 도구 테스트
5. ⏳ 기존 컴포넌트 Strict 검사 및 마이그레이션
6. ⏳ 실제 토큰 사용량 측정 및 분석

자세한 내용은 [마이그레이션 계획](./docs/migration/MIGRATION_PLAN.md)을 참고하세요.
