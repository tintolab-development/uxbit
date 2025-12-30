# tinto-navigation

내비게이션 컴포넌트. 하단 고정 내비게이션 바를 제공하며, 아이콘, 라벨, 배지 등을 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 내비게이션 -->
<tinto-navigation
  :items='[
    {"id":"home","label":"홈","icon":"home","href":"/"},
    {"id":"search","label":"검색","icon":"search","href":"/search"},
    {"id":"profile","label":"프로필","icon":"user","href":"/profile"}
  ]'
/>

<!-- 활성 아이템 지정 -->
<tinto-navigation active-id="home" :items="[...]" />

<!-- 배지 포함 -->
<tinto-navigation
  :items='[
    {"id":"home","label":"홈","icon":"home"},
    {"id":"notifications","label":"알림","icon":"bell","badge":"5"}
  ]'
/>
```

---

## Props

| Prop        | Type               | Default | 설명                   |
| ----------- | ------------------ | ------- | ---------------------- |
| `items`     | `NavigationItem[]` | `[]`    | 내비게이션 아이템 목록 |
| `active-id` | `string`           | -       | 활성 아이템 ID         |
| `fixed`     | `boolean`          | `true`  | 고정 여부 (하단 고정)  |

---

## Events

| 이벤트           | Payload                     | 설명               |
| ---------------- | --------------------------- | ------------------ |
| `tintoItemClick` | `NavigationItemClickDetail` | 아이템 클릭 이벤트 |

---

## 사용 예시

### 기본 내비게이션

```html
<tinto-navigation
  :items='[
    {"id":"home","label":"홈","icon":"home","href":"/"},
    {"id":"search","label":"검색","icon":"search","href":"/search"},
    {"id":"profile","label":"프로필","icon":"user","href":"/profile"}
  ]'
/>
```

### 활성 아이템 지정

```html
<tinto-navigation active-id="search" :items="[...]" />
```

### 배지 포함

```html
<tinto-navigation
  :items='[
    {"id":"home","label":"홈","icon":"home"},
    {"id":"notifications","label":"알림","icon":"bell","badge":"5"},
    {"id":"messages","label":"메시지","icon":"message","badge":10}
  ]'
/>
```

### 고정 해제

```html
<tinto-navigation fixed="{false}" :items="[...]" />
```

---

## A11y

- `role="navigation"` 자동 설정
- `aria-label` 자동 설정
- `aria-current="page"` 활성 아이템에 자동 설정
- 키보드 접근성 지원

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 44.0점  
**등급**: D

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 0.0      | 25%      | 0.00      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 75.0     | 20%      | 15.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 15.0     | 15%      | 2.25      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **44.0** | **100%** | **44.0**  |

#### 등급: D

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size, disabled, loading)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려

### 평가 상세

#### 일관성 (0.0점)

- Props 네이밍 일치율: 0%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 0%
- 공통 Props 사용: 0개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (75.0점)

- 문서화: ✅
- 예제 코드: 6개
- 접근성(a11y): ❌
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (15.0점)

- API 직관성: 0%
- Props 개수: 3개
- 학습 곡선: 높음
- 개발자 경험: 50%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: (평가 실행 후 업데이트)  
**종합 점수**: (평가 실행 후 업데이트)  
**등급**: (평가 실행 후 업데이트)

#### 점수 상세

| 지표                   | 점수  | 가중치   | 가중 점수 |
| ---------------------- | ----- | -------- | --------- |
| 일관성 (Consistency)   | -     | 25%      | -         |
| 재사용성 (Reusability) | -     | 20%      | -         |
| 완성도 (Completeness)  | -     | 20%      | -         |
| 성능 (Performance)     | -     | 15%      | -         |
| 사용성 (Usability)     | -     | 15%      | -         |
| 표준 준수 (Standards)  | -     | 5%       | -         |
| **종합**               | **-** | **100%** | **-**     |

#### 개선 제안

(평가 실행 후 업데이트)

### 평가 방법

1. Cursor에서 MCP 서버가 실행 중인지 확인
2. 다음 명령 실행:
   ```
   "tinto-navigation 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
