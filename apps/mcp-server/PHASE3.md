# Phase 3 기능 상세 가이드

## 개요

Phase 3에서는 파일 감시, 추가 검색 기능, 성능 모니터링, 통계 정보 제공 기능을 추가했습니다.

## 1. 파일 감시 (File Watching)

### 기능 설명

개발 중 `custom-elements.json`이나 문서 파일이 변경되면 자동으로 캐시를 무효화하여 최신 데이터를 제공합니다.

### 감시 대상

- `custom-elements.json`: 컴포넌트 메타데이터 변경 감지
- `COMPONENTS_OVERVIEW.md`: 개요 문서 변경 감지
- `docs/components/*.md`: 개별 컴포넌트 문서 변경 감지

### 동작 방식

1. 서버 시작 시 파일 감시 시작
2. 파일 변경 감지 시 해당 캐시 무효화
3. 다음 요청 시 최신 데이터 로드

### 사용 예시

```bash
# 개발 중 컴포넌트 수정 후 Stencil 빌드
pnpm --filter @uxbit/stencil-components build

# MCP 서버가 자동으로 변경 감지하고 캐시 갱신
# 별도 재시작 불필요
```

## 2. 추가 검색 기능

### search_events

특정 이벤트를 발생시키는 컴포넌트를 검색합니다.

**사용 예시:**

```
"click" 이벤트를 발생시키는 컴포넌트를 찾아줘
```

**반환 데이터:**

```json
[
  {
    "tagName": "tinto-button",
    "description": "...",
    "events": [
      {
        "name": "buttonClick",
        "type": "CustomEvent<ButtonClickDetail>"
      }
    ]
  }
]
```

### search_methods

특정 메서드를 가진 컴포넌트를 검색합니다.

**사용 예시:**

```
"show" 메서드를 가진 컴포넌트를 찾아줘
```

**반환 데이터:**

```json
[
  {
    "tagName": "tinto-modal",
    "description": "...",
    "methods": [
      {
        "name": "show",
        "signature": "..."
      }
    ]
  }
]
```

## 3. 성능 모니터링

### 추적되는 메트릭

- **requestCount**: 총 요청 수
- **cacheHits**: 캐시 히트 수
- **cacheMisses**: 캐시 미스 수
- **averageResponseTime**: 평균 응답 시간 (ms)
- **totalResponseTime**: 총 응답 시간 (ms)
- **cacheHitRate**: 캐시 히트율 (%)

### 메트릭 업데이트

- 모든 도구 실행 시 자동으로 메트릭 업데이트
- 요청 처리 시간 자동 측정
- 캐시 사용 여부 자동 추적

## 4. 통계 정보 제공

### get_statistics 도구

컴포넌트 라이브러리의 전체 통계와 성능 메트릭을 제공합니다.

**사용 예시:**

```
UXBIT 컴포넌트 라이브러리 통계를 보여줘
```

**반환 데이터:**

```json
{
  "components": {
    "total": 15,
    "averagePropsPerComponent": 12.5,
    "averageEventsPerComponent": 2.3,
    "averageMethodsPerComponent": 1.8
  },
  "totals": {
    "props": 187,
    "events": 34,
    "methods": 27
  },
  "mostUsedProps": [
    { "name": "variant", "count": 8 },
    { "name": "size", "count": 7 },
    { "name": "disabled", "count": 6 }
  ],
  "performance": {
    "requestCount": 42,
    "cacheHits": 35,
    "cacheMisses": 7,
    "averageResponseTime": 12.5,
    "totalResponseTime": 525,
    "cacheHitRate": 83.33
  }
}
```

### 통계 항목 설명

#### components

- **total**: 전체 컴포넌트 수
- **averagePropsPerComponent**: 컴포넌트당 평균 Props 수
- **averageEventsPerComponent**: 컴포넌트당 평균 Events 수
- **averageMethodsPerComponent**: 컴포넌트당 평균 Methods 수

#### totals

- **props**: 전체 Props 수
- **events**: 전체 Events 수
- **methods**: 전체 Methods 수

#### mostUsedProps

- 가장 많이 사용되는 Props Top 10
- 각 Props가 몇 개의 컴포넌트에서 사용되는지 표시

#### performance

- **requestCount**: 총 요청 수
- **cacheHits**: 캐시 히트 수
- **cacheMisses**: 캐시 미스 수
- **averageResponseTime**: 평균 응답 시간 (ms)
- **totalResponseTime**: 총 응답 시간 (ms)
- **cacheHitRate**: 캐시 히트율 (%)

## 사용 시나리오

### 시나리오 1: 개발 중 자동 업데이트

```bash
# 1. 컴포넌트 수정
vim apps/stencil-components/src/components/button/button.tsx

# 2. Stencil 빌드
pnpm --filter @uxbit/stencil-components build

# 3. MCP 서버가 자동으로 변경 감지
# 별도 재시작 불필요, 다음 요청부터 최신 데이터 제공
```

### 시나리오 2: 이벤트 기반 컴포넌트 찾기

```
사용자: "클릭 이벤트를 발생시키는 컴포넌트를 찾아줘"
AI: search_events 도구 사용 → 결과 반환
```

### 시나리오 3: 성능 모니터링

```
사용자: "MCP 서버 성능 통계를 보여줘"
AI: get_statistics 도구 사용 → 성능 메트릭 반환
```

### 시나리오 4: 라이브러리 분석

```
사용자: "UXBIT 컴포넌트 라이브러리 통계를 보여줘"
AI: get_statistics 도구 사용 → 전체 통계 반환
```

## 성능 개선 효과

### Phase 3 이전

- 파일 변경 시 수동 재시작 필요
- 제한적인 검색 기능
- 성능 지표 없음

### Phase 3 이후

- ✅ 자동 파일 감시로 개발 효율성 향상
- ✅ 다양한 검색 옵션으로 컴포넌트 발견 용이
- ✅ 성능 모니터링으로 최적화 가능
- ✅ 통계 정보로 라이브러리 이해도 향상

## 주의사항

### 파일 감시

- 파일 감시는 서버 시작 시에만 설정됩니다
- 서버 재시작 없이 파일 변경 감지 가능
- 대량의 파일 변경 시 일시적인 성능 저하 가능

### 성능 메트릭

- 메트릭은 서버 재시작 시 초기화됩니다
- 장기 통계를 원하면 외부 저장소 연동 필요
- 메모리 기반이므로 서버 재시작 시 데이터 손실

## 다음 단계

Phase 3가 완료되었습니다. 추가로 고려할 수 있는 기능:

- [ ] 장기 통계 저장 (파일 또는 DB)
- [ ] 웹 대시보드 (통계 시각화)
- [ ] 알림 기능 (성능 저하 시)
- [ ] API 버전 관리

---

**작성일:** 2025년 12월 30일 (KST)  
**버전:** Phase 3 완료
