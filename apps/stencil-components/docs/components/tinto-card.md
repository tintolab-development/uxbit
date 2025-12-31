# tinto-card

카드 컴포넌트. 콘텐츠를 카드 형태로 표시하며, 이미지, 제목, 설명, 가격 등을 포함할 수 있습니다. 이커머스 용도로도 사용 가능합니다.

---

## 빠른 시작

```html
<!-- 기본 카드 -->
<tinto-card card-title="카드 제목" description="카드 설명" image="https://example.com/image.jpg" />

<!-- 이커머스 카드 -->
<tinto-card
  card-title="상품명"
  description="상품 설명"
  image="https://example.com/product.jpg"
  original-price="50000"
  sale-price="40000"
  discount-rate="20"
  badge="할인"
/>

<!-- 클릭 가능한 카드 -->
<tinto-card card-id="card-1" href="/product/1" card-title="클릭 가능한 카드" clickable />
```

---

## Props

### 기본 Props

| Prop          | Type                                   | Default      | 설명                              |
| ------------- | -------------------------------------- | ------------ | --------------------------------- |
| `card-id`     | `string`                               | -            | 카드 ID (클릭 이벤트에서 사용)    |
| `card-title`  | `string`                               | -            | 카드 제목 (슬롯으로도 대체 가능)  |
| `description` | `string`                               | -            | 카드 설명 (슬롯으로도 대체 가능)  |
| `image`       | `string`                               | -            | 이미지 URL (슬롯으로도 대체 가능) |
| `image-alt`   | `string`                               | -            | 이미지 alt 텍스트                 |
| `image-ratio` | `AspectRatio`                          | `'1:1'`      | 이미지 비율                       |
| `href`        | `string`                               | -            | 링크 URL                          |
| `variant`     | `'default' \| 'compact' \| 'detailed'` | `'default'`  | 카드 variant                      |
| `size`        | `'sm' \| 'md' \| 'lg'`                 | `'md'`       | 카드 크기                         |
| `direction`   | `'vertical' \| 'horizontal'`           | `'vertical'` | 카드 방향 (이미지 위치)           |
| `loading`     | `boolean`                              | `false`      | 로딩 상태                         |
| `clickable`   | `boolean`                              | `true`       | 클릭 가능 여부                    |

### 이커머스 Props

| Prop             | Type     | Default   | 설명        |
| ---------------- | -------- | --------- | ----------- |
| `original-price` | `number` | -         | 원가        |
| `sale-price`     | `number` | -         | 할인가      |
| `discount-rate`  | `number` | -         | 할인율 (%)  |
| `badge`          | `string` | -         | 배지 텍스트 |
| `currency`       | `string` | `'KRW'`   | 통화 코드   |
| `locale`         | `string` | `'ko-KR'` | 로케일      |

---

## Slots

| Slot          | 설명                                |
| ------------- | ----------------------------------- |
| `image`       | 이미지 (또는 `image` prop 사용)     |
| `title`       | 제목 (또는 `card-title` prop 사용)  |
| `description` | 설명 (또는 `description` prop 사용) |
| `badge`       | 배지 (이커머스용)                   |
| `footer`      | 푸터 콘텐츠                         |

---

## Events

| 이벤트       | Payload           | 설명             |
| ------------ | ----------------- | ---------------- |
| `tintoClick` | `CardClickDetail` | 카드 클릭 이벤트 |

---

## 사용 예시

### Variant

```html
<tinto-card variant="default" card-title="Default Card" />
<tinto-card variant="compact" card-title="Compact Card" />
<tinto-card variant="detailed" card-title="Detailed Card" />
```

### Size

```html
<tinto-card size="sm" card-title="Small Card" />
<tinto-card size="md" card-title="Medium Card" />
<tinto-card size="lg" card-title="Large Card" />
```

### Direction

```html
<tinto-card direction="vertical" card-title="Vertical Card" />
<tinto-card direction="horizontal" card-title="Horizontal Card" />
```

### 이커머스 카드

```html
<tinto-card
  card-title="상품명"
  description="상품 설명입니다"
  image="https://example.com/product.jpg"
  original-price="50000"
  sale-price="40000"
  discount-rate="20"
  badge="할인"
  href="/product/1"
/>
```

---

## Semantic Parts (컴포넌트 구조)

이 컴포넌트는 다음과 같은 semantic parts를 제공합니다. 각 part는 `::part()` 선택자를 통해 스타일링할 수 있습니다.

### `card` (루트 요소)

- **요소 타입**: `<article>`
- **설명**: 카드 루트 요소, 위치 지정, 배경색, 테두리, 둥근 모서리, 그림자, 패딩 등 카드 컨테이너의 기본 스타일을 포함
- **주요 스타일 속성**: `display`, `position`, `width`, `height`, `background`, `border`, `border-radius`, `box-shadow`, `padding`

### `button` (래퍼 요소)

- **요소 타입**: `<div>` 또는 `<a>`
- **설명**: 클릭 가능한 카드의 래퍼 요소, 전체 카드를 클릭 가능하게 만드는 컨테이너
- **주요 스타일 속성**: `display`, `width`, `height`, `cursor`, `text-decoration`

### `image-wrapper` (이미지 래퍼)

- **요소 타입**: `<div>`
- **설명**: 이미지 영역을 감싸는 래퍼 요소, 이미지와 배지의 위치를 제어
- **주요 스타일 속성**: `position`, `width`, `height`, `overflow`

### `image` (이미지 요소)

- **요소 타입**: `<tinto-image>`
- **설명**: 카드 이미지, 이미지의 표시 및 레이아웃 스타일을 포함
- **주요 스타일 속성**: `width`, `height`, `object-fit`, `border-radius`

### `image-placeholder` (이미지 플레이스홀더)

- **요소 타입**: `<div>`
- **설명**: 이미지가 없을 때 표시되는 플레이스홀더 영역
- **주요 스타일 속성**: `background`, `display`, `width`, `height`

### `badge` (배지 요소)

- **요소 타입**: `<div>`
- **설명**: 배지 요소, 할인율이나 특별 표시를 위한 배지 스타일
- **주요 스타일 속성**: `position`, `background`, `color`, `padding`, `border-radius`, `font-size`, `font-weight`

### `content` (콘텐츠 영역)

- **요소 타입**: `<div>`
- **설명**: 카드 본문 영역, 패딩, 폰트 크기 등 콘텐츠 표시의 기본 스타일을 포함
- **주요 스타일 속성**: `padding`, `background`, `color`, `font-size`

### `title` (제목 요소)

- **요소 타입**: `<div>`
- **설명**: 카드 제목, 인라인 블록 레이아웃, flex 비율, 텍스트 생략 등 제목 표시 스타일을 포함
- **주요 스타일 속성**: `font-size`, `font-weight`, `color`, `line-height`, `margin`

### `description` (설명 요소)

- **요소 타입**: `<div>`
- **설명**: 카드 설명, 설명 텍스트의 폰트 크기, 줄 높이 등 레이아웃 스타일을 포함
- **주요 스타일 속성**: `font-size`, `line-height`, `color`, `margin`

### `price` (가격 요소)

- **요소 타입**: `<div>`
- **설명**: 가격 요소, 가격 정보 표시 스타일
- **주요 스타일 속성**: `font-size`, `font-weight`, `color`, `margin`

## CSS Parts 사용 예제

```css
/* 카드 루트 요소 스타일링 */
tinto-card::part(card) {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 이미지 영역 스타일링 */
tinto-card::part(image-wrapper) {
  border-radius: 12px 12px 0 0;
  overflow: hidden;
}

/* 제목 스타일링 */
tinto-card::part(title) {
  font-weight: 600;
  color: #111827;
}

/* 배지 스타일링 */
tinto-card::part(badge) {
  background: #ef4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}
```

---

## A11y

- 클릭 가능한 카드는 적절한 키보드 접근성 제공
- 이미지 alt 텍스트 권장

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 72.8점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 32.9     | 15%      | 4.93      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **72.8** | **100%** | **72.8**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (disabled)

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

#### 사용성 (32.9점)

- API 직관성: 22%
- Props 개수: 18개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 72.8점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 32.9     | 15%      | 4.93      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **72.8** | **100%** | **72.8**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (disabled)

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

#### 사용성 (32.9점)

- API 직관성: 22%
- Props 개수: 18개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 72.8점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 32.9     | 15%      | 4.93      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **72.8** | **100%** | **72.8**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (disabled)

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

#### 사용성 (32.9점)

- API 직관성: 22%
- Props 개수: 18개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 72.8점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 32.9     | 15%      | 4.93      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **72.8** | **100%** | **72.8**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (disabled)

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

#### 사용성 (32.9점)

- API 직관성: 22%
- Props 개수: 18개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 72.8점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 32.9     | 15%      | 4.93      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **72.8** | **100%** | **72.8**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (disabled)

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

#### 사용성 (32.9점)

- API 직관성: 22%
- Props 개수: 18개
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
   "tinto-card 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
