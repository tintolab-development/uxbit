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

---

## A11y

- 키보드 접근성 지원
- ARIA 속성 자동 설정
