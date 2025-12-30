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

## A11y

- 클릭 가능한 카드는 적절한 키보드 접근성 제공
- 이미지 alt 텍스트 권장

---

## 품질 평가

> 💡 **참고**: MCP 서버의 `evaluate_component_quality` 도구를 사용하여 평가 결과를 생성하세요.  
> 평가 후 이 섹션을 실제 결과로 업데이트하세요.

### 평가 결과

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
