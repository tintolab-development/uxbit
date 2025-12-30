# 컴포넌트 품질 평가 도구 사용 가이드

## 개요

`evaluate_component_quality` 도구는 UXBIT 디자인 시스템 표준에 맞춰 컴포넌트의 품질을 객관적으로 평가합니다.

## 사용 방법

### 기본 사용

Cursor에서 AI에게 요청:

```
tinto-button 컴포넌트의 품질을 평가해줘
```

또는:

```
Evaluate the quality of tinto-button component
```

## 평가 지표

### 1. 일관성 (Consistency) - 25%

**측정 항목:**

- Props 네이밍 일치율
- 이벤트 네이밍 패턴 준수
- 디자인 토큰 사용 일치율

**기준:**

- 공통 Props 사용 여부 (variant, size, disabled, loading)
- 이벤트 네이밍 패턴 준수
- 디자인 토큰 일관성

### 2. 재사용성 (Reusability) - 20%

**측정 항목:**

- 필수 Props 비율 (낮을수록 좋음)
- 선택 Props 비율 (높을수록 좋음)
- variant/size 지원 여부
- 컴포지션 가능성 (slots)

**기준:**

- 필수 Props 비율: 20% 이하 권장
- variant/size prop 지원
- Slots 지원

### 3. 완성도 (Completeness) - 20%

**측정 항목:**

- 문서화 완성도
- 예제 코드 개수
- 접근성(a11y) 지원
- 에러 처리
- TypeScript 타입 정의

**기준:**

- 문서화: 필수
- 예제 코드: 3개 이상 권장
- 접근성: 지원 필수
- TypeScript 타입: 100% 정의

### 4. 성능 (Performance) - 15%

**측정 항목:**

- 번들 크기
- 렌더링 성능
- 메모리 사용량

**참고:** 현재는 기본 점수(85점) 제공, 실제 측정은 런타임에서 수행 필요

### 5. 사용성 (Usability) - 15%

**측정 항목:**

- API 직관성
- 학습 곡선 (Props 개수)
- 개발자 경험

**기준:**

- Props 개수: 20개 이하 권장
- 직관적인 API
- 완전한 문서화

### 6. 표준 준수 (Standards) - 5%

**측정 항목:**

- Web Components 표준 준수
- Shadow DOM 사용
- 시맨틱 HTML
- ARIA 가이드라인 준수

**기준:**

- 모든 항목 필수

## 평가 결과 형식

```json
{
  "component": "tinto-button",
  "evaluationDate": "2025-12-30T...",
  "scores": {
    "consistency": 92,
    "reusability": 85,
    "completeness": 88,
    "performance": 85,
    "usability": 87,
    "standards": 100
  },
  "totalScore": 88.5,
  "grade": "A",
  "details": {
    "consistency": {
      "propsNamingMatch": 95,
      "eventsNamingMatch": 90,
      "tokenUsageMatch": 88
    },
    "reusability": {
      "requiredPropsRatio": 20,
      "optionalPropsRatio": 80,
      "variantSupport": true,
      "sizeSupport": true
    },
    "completeness": {
      "documentationScore": 100,
      "exampleCount": 5,
      "a11ySupport": true
    }
  },
  "improvements": ["일관성: 이벤트 네이밍 패턴을 더 일치시키기", "완성도: 추가 예제 코드 작성"]
}
```

## 등급 체계

- **A+ (90-100점)**: 우수 - 프로덕션 사용 가능, 다른 컴포넌트의 벤치마크
- **A (80-89점)**: 양호 - 프로덕션 사용 가능, 소소한 개선 여지
- **B (70-79점)**: 보통 - 사용 가능하나 개선 필요
- **C (60-69점)**: 미흡 - 상당한 개선 필요
- **D (0-59점)**: 불량 - 재설계 권장

## 개선 제안

평가 결과에는 구체적인 개선 제안이 포함됩니다:

- **일관성**: 공통 Props 추가, 토큰 사용 패턴 일치
- **재사용성**: variant/size prop 추가, 필수 Props 비율 감소
- **완성도**: 문서화, 예제 코드, 접근성 지원
- **사용성**: Props 개수 감소, API 직관성 향상
- **표준 준수**: ARIA 가이드라인 준수

## 사용 예시

### 예시 1: 새 컴포넌트 평가

```
"새로 만든 tinto-new-component 컴포넌트의 품질을 평가해줘"
```

**결과:**

- 각 지표별 점수
- 종합 점수 및 등급
- 개선 제안 목록

### 예시 2: 기존 컴포넌트 재평가

```
"tinto-button 컴포넌트를 평가하고, 마이그레이션 전 점수와 비교해줘"
```

**결과:**

- 현재 점수
- 이전 점수와 비교
- 개선된 영역 식별

## 마이그레이션 활용

### Strict 기준

마이그레이션을 위한 Strict 기준:

- 일관성: 90점 이상
- 재사용성: 85점 이상
- 완성도: 90점 이상
- 성능: 85점 이상
- 사용성: 85점 이상
- 표준 준수: 100점 (필수)
- **종합 점수: 88점 이상 (A 등급)**

### 마이그레이션 프로세스

1. **평가 실행**

   ```
   "tinto-button 컴포넌트의 품질을 평가해줘"
   ```

2. **결과 분석**
   - 부족한 영역 식별
   - 개선 제안 검토

3. **마이그레이션 작업**
   - 제안된 개선 사항 적용
   - 코드 수정

4. **재평가**

   ```
   "tinto-button 컴포넌트를 다시 평가해줘"
   ```

5. **완료 확인**
   - A 등급 달성 확인
   - 모든 기준 충족 확인

## 주의사항

### 자동 평가의 한계

- **성능 지표**: 런타임 측정이 필요하므로 기본 점수 제공
- **주관적 요소**: 일부 지표는 휴리스틱 기반
- **컨텍스트**: 프로젝트별 요구사항은 별도 고려 필요

### 권장 사항

- 평가 결과를 절대적 기준으로 보지 말고 가이드로 활용
- 팀 리뷰와 함께 사용
- 지속적인 개선을 목표로

## 관련 문서

- [컴포넌트 품질 평가 방법론](./COMPONENT_QUALITY_METRICS.md) - 상세 평가 방법론
- [마이그레이션 계획](../migration/MIGRATION_PLAN.md) - 마이그레이션 계획

---

**작성일:** 2025년 12월 30일 (KST)  
**버전:** 1.0.0
