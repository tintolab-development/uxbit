# tinto-filter

필터 컴포넌트. 단일/다중 선택, 범위, 검색 등 다양한 필터링 기능을 제공합니다.

---

## 빠른 시작

```html
<!-- 다중 선택 필터 -->
<tinto-filter
  filter-id="category"
  label="카테고리"
  type="multiple"
  :options='[{"value":"all","label":"전체"},{"value":"tech","label":"기술"}]'
/>

<!-- 단일 선택 필터 -->
<tinto-filter
  filter-id="sort"
  label="정렬"
  type="single"
  :options='[{"value":"newest","label":"최신순"}]'
/>

<!-- 검색 필터 -->
<tinto-filter filter-id="search" type="search" placeholder="검색..." searchable />
```

---

## Props

| Prop            | Type                                             | Default      | 설명                                 |
| --------------- | ------------------------------------------------ | ------------ | ------------------------------------ |
| `filter-id`     | `string`                                         | `''`         | 필터 ID (고유 식별자)                |
| `label`         | `string`                                         | -            | 필터 라벨                            |
| `type`          | `'single' \| 'multiple' \| 'range' \| 'search'`  | `'multiple'` | 필터 타입                            |
| `variant`       | `'default' \| 'button' \| 'checkbox' \| 'radio'` | `'default'`  | 필터 variant                         |
| `size`          | `'sm' \| 'md' \| 'lg'`                           | `'md'`       | 필터 크기                            |
| `options`       | `FilterOption[] \| string`                       | `[]`         | 필터 옵션들 (JSON 문자열 또는 객체)  |
| `value`         | `string \| string[]`                             | `[]`         | 선택된 값들 (단일 선택 시 하나의 값) |
| `placeholder`   | `string`                                         | -            | 플레이스홀더 (검색 필터용)           |
| `searchable`    | `boolean`                                        | `false`      | 검색 가능 여부                       |
| `show-clear`    | `boolean`                                        | `true`       | 필터 초기화 버튼 표시 여부           |
| `max-selection` | `number`                                         | -            | 최대 선택 개수 (multiple 타입일 때)  |
| `disabled`      | `boolean`                                        | `false`      | 비활성화 여부                        |

---

## Events

| 이벤트              | Payload                | 설명                |
| ------------------- | ---------------------- | ------------------- |
| `tintoFilterChange` | `FilterChangeDetail`   | 필터 값 변경 이벤트 |
| `tintoFilterClear`  | `{ filterId: string }` | 필터 초기화 이벤트  |

---

## 사용 예시

### 다중 선택 필터

```html
<tinto-filter
  filter-id="tags"
  label="태그"
  type="multiple"
  :options='[
    {"value":"react","label":"React"},
    {"value":"vue","label":"Vue"},
    {"value":"angular","label":"Angular"}
  ]'
/>
```

### 단일 선택 필터

```html
<tinto-filter
  filter-id="status"
  label="상태"
  type="single"
  variant="radio"
  :options='[
    {"value":"all","label":"전체"},
    {"value":"active","label":"활성"},
    {"value":"inactive","label":"비활성"}
  ]'
/>
```

### 검색 필터

```html
<tinto-filter filter-id="search" type="search" placeholder="검색어를 입력하세요" searchable />
```

### 최대 선택 개수 제한

```html
<tinto-filter filter-id="categories" type="multiple" max-selection="3" :options="[...]" />
```

### Size

```html
<!-- Small size -->
<tinto-filter filter-id="tags" size="sm" :options="[...]" />

<!-- Medium size (기본값) -->
<tinto-filter filter-id="tags" size="md" :options="[...]" />

<!-- Large size -->
<tinto-filter filter-id="tags" size="lg" :options="[...]" />
```

---

## A11y

- ✅ 키보드 접근성 지원
- ✅ 트리거 버튼에 `aria-expanded`, `aria-haspopup` 자동 설정
- ✅ 드롭다운에 `role="listbox"` 자동 설정
- ✅ ARIA 속성 자동 설정
- ✅ 스크린 리더 지원

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.0점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 34.0     | 15%      | 5.10      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.0** | **100%** | **73.0**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 7개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (34.0점)

- API 직관성: 25%
- Props 개수: 12개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.0점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 34.0     | 15%      | 5.10      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.0** | **100%** | **73.0**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 7개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (34.0점)

- API 직관성: 25%
- Props 개수: 12개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.0점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 34.0     | 15%      | 5.10      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.0** | **100%** | **73.0**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 7개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (34.0점)

- API 직관성: 25%
- Props 개수: 12개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.0점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 34.0     | 15%      | 5.10      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.0** | **100%** | **73.0**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 7개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (34.0점)

- API 직관성: 25%
- Props 개수: 12개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 65.2점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 70.0     | 20%      | 14.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 31.3     | 15%      | 4.69      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **65.2** | **100%** | **65.2**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (size, loading)
- 재사용성: size prop 추가 고려

### 평가 상세

#### 일관성 (35.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (70.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (31.3점)

- API 직관성: 18%
- Props 개수: 11개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

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
   "tinto-filter 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
