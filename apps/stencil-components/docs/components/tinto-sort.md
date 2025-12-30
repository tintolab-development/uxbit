# tinto-sort

정렬 컴포넌트. 데이터 정렬 옵션을 제공하며, 단일 선택 및 정렬 방향(asc/desc)을 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 정렬 -->
<tinto-sort
  label="정렬"
  :options='[
    {"value":"newest","label":"최신순"},
    {"value":"oldest","label":"오래된순"},
    {"value":"popular","label":"인기순"}
  ]'
/>

<!-- 정렬 방향 포함 -->
<tinto-sort
  label="정렬"
  :options='[
    {"value":"price","label":"가격","direction":"asc"},
    {"value":"name","label":"이름","direction":"desc"}
  ]'
/>

<!-- Button variant -->
<tinto-sort variant="button" label="정렬" :options="[...]" />
```

---

## Props

| Prop       | Type                                | Default     | 설명                                |
| ---------- | ----------------------------------- | ----------- | ----------------------------------- |
| `label`    | `string`                            | -           | 정렬 라벨                           |
| `variant`  | `'default' \| 'button' \| 'select'` | `'default'` | 정렬 variant                        |
| `size`     | `'sm' \| 'md' \| 'lg'`              | `'md'`      | 정렬 크기                           |
| `options`  | `SortOption[] \| string`            | `[]`        | 정렬 옵션들 (JSON 문자열 또는 객체) |
| `value`    | `string`                            | `''`        | 선택된 정렬 값                      |
| `disabled` | `boolean`                           | `false`     | 비활성화 여부                       |

---

## Events

| 이벤트            | Payload            | 설명             |
| ----------------- | ------------------ | ---------------- |
| `tintoSortChange` | `SortChangeDetail` | 정렬 변경 이벤트 |

---

## 사용 예시

### Variant

```html
<tinto-sort variant="default" label="정렬" :options="[...]" />
<tinto-sort variant="button" label="정렬" :options="[...]" />
<tinto-sort variant="select" label="정렬" :options="[...]" />
```

### 정렬 옵션

```html
<tinto-sort
  label="정렬"
  :options='[
    {"value":"newest","label":"최신순"},
    {"value":"oldest","label":"오래된순"},
    {"value":"popular","label":"인기순"},
    {"value":"price-asc","label":"가격 낮은순","direction":"asc"},
    {"value":"price-desc","label":"가격 높은순","direction":"desc"}
  ]'
/>
```

### 이벤트 처리

```html
<tinto-sort id="sortComponent" label="정렬" :options="[...]" />

<script>
  const sort = document.getElementById('sortComponent');

  sort.addEventListener('tintoSortChange', (e) => {
    const { value, direction, option } = e.detail;
    console.log('정렬 변경:', value, direction);
    // 정렬 로직 실행
  });
</script>
```

### Size

```html
<!-- Small size -->
<tinto-sort label="정렬" size="sm" :options="[...]" />

<!-- Medium size (기본값) -->
<tinto-sort label="정렬" size="md" :options="[...]" />

<!-- Large size -->
<tinto-sort label="정렬" size="lg" :options="[...]" />
```

---

## A11y

- ✅ 키보드 접근성 지원
- ✅ 트리거 버튼에 `aria-expanded`, `aria-haspopup` 자동 설정
- ✅ 드롭다운에 `role="listbox"` 자동 설정
- ✅ select variant에 `aria-label` 자동 설정
- ✅ ARIA 속성 자동 설정
- ✅ 스크린 리더 지원

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.1점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 35.0     | 15%      | 5.25      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.1** | **100%** | **73.1**  |

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
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (35.0점)

- API 직관성: 50%
- Props 개수: 6개
- 학습 곡선: 높음
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.1점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 35.0     | 15%      | 5.25      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.1** | **100%** | **73.1**  |

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
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (35.0점)

- API 직관성: 50%
- Props 개수: 6개
- 학습 곡선: 높음
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.1점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 35.0     | 15%      | 5.25      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.1** | **100%** | **73.1**  |

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
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (35.0점)

- API 직관성: 50%
- Props 개수: 6개
- 학습 곡선: 높음
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.1점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 35.0     | 15%      | 5.25      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.1** | **100%** | **73.1**  |

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
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (35.0점)

- API 직관성: 50%
- Props 개수: 6개
- 학습 곡선: 높음
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 64.8점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 70.0     | 20%      | 14.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 28.3     | 15%      | 4.25      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **64.8** | **100%** | **64.8**  |

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
- 예제 코드: 5개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (28.3점)

- API 직관성: 33%
- Props 개수: 5개
- 학습 곡선: 높음
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
   "tinto-sort 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
