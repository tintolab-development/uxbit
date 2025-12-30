# tinto-badge

배지 컴포넌트. 상태 표시, 알림 카운트, 라벨 표시 등에 사용됩니다. Variant/Size/Shape 기반 스타일링을 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 배지 -->
<tinto-badge label="New" />

<!-- 카운트 배지 -->
<tinto-badge count="5" />

<!-- 점 형태 배지 -->
<tinto-badge dot />

<!-- Primary variant, Large 사이즈 -->
<tinto-badge variant="primary" size="lg" label="Hot" />
```

---

## Props

### 시각/레이아웃

| Prop      | Type                                                                                   | Default     | 설명             |
| --------- | -------------------------------------------------------------------------------------- | ----------- | ---------------- |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 배지 스타일 변형 |
| `size`    | `'sm' \| 'md' \| 'lg'`                                                                 | `'md'`      | 배지 크기        |
| `shape`   | `'default' \| 'pill' \| 'dot'`                                                         | `'default'` | 배지 형태        |

### 내용

| Prop    | Type      | Default | 설명                               |
| ------- | --------- | ------- | ---------------------------------- |
| `label` | `string`  | -       | 배지 텍스트 (슬롯으로도 대체 가능) |
| `count` | `number`  | -       | 배지 값 (숫자 표시용)              |
| `max`   | `number`  | -       | 배지 최대값 (초과 시 "+99" 형식)   |
| `dot`   | `boolean` | `false` | 점 형태만 표시 (텍스트 없음)       |

---

## Slots

| Slot      | 설명                                 |
| --------- | ------------------------------------ |
| (default) | 배지 텍스트 (또는 `label` prop 사용) |

---

## 사용 예시

### Variant

```html
<tinto-badge variant="default" label="Default" />
<tinto-badge variant="primary" label="Primary" />
<tinto-badge variant="secondary" label="Secondary" />
<tinto-badge variant="success" label="Success" />
<tinto-badge variant="warning" label="Warning" />
<tinto-badge variant="error" label="Error" />
<tinto-badge variant="info" label="Info" />
```

### Size

```html
<tinto-badge size="sm" label="Small" />
<tinto-badge size="md" label="Medium" />
<tinto-badge size="lg" label="Large" />
```

### Shape

```html
<tinto-badge shape="default" label="Default" />
<tinto-badge shape="pill" label="Pill" />
<tinto-badge shape="dot" />
```

### Count

```html
<tinto-badge count="5" />
<tinto-badge count="99" max="99" />
<tinto-badge count="150" max="99" />
<!-- "99+" 표시 -->
```

---

## A11y

- `role="status"` 자동 설정
- `aria-label` 자동 설정 (label 또는 count 기반)
