# tinto-loading

로딩 컴포넌트. 비동기 작업 진행 중임을 표시합니다. Spinner, Dots, Pulse 등 다양한 variant를 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 로딩 -->
<tinto-loading />

<!-- 오버레이 모드 -->
<tinto-loading overlay text="로딩 중..." />

<!-- Dots variant -->
<tinto-loading variant="dots" />

<!-- Large 사이즈 -->
<tinto-loading size="lg" text="처리 중..." />
```

---

## Props

| Prop      | Type                             | Default     | 설명                               |
| --------- | -------------------------------- | ----------- | ---------------------------------- |
| `size`    | `'sm' \| 'md' \| 'lg'`           | `'md'`      | 로딩 크기                          |
| `variant` | `'spinner' \| 'dots' \| 'pulse'` | `'spinner'` | 로딩 variant                       |
| `overlay` | `boolean`                        | `false`     | 오버레이 모드 (전체 화면 오버레이) |
| `text`    | `string`                         | -           | 로딩 텍스트                        |

---

## Slots

| Slot      | 설명                                |
| --------- | ----------------------------------- |
| (default) | 로딩 텍스트 (또는 `text` prop 사용) |

---

## 사용 예시

### Variant

```html
<tinto-loading variant="spinner" />
<tinto-loading variant="dots" />
<tinto-loading variant="pulse" />
```

### Size

```html
<tinto-loading size="sm" />
<tinto-loading size="md" />
<tinto-loading size="lg" />
```

### 오버레이 모드

```html
<tinto-loading overlay text="로딩 중..." />
```

### 텍스트 포함

```html
<tinto-loading text="데이터를 불러오는 중..." /> <tinto-loading variant="dots" text="처리 중..." />
```

---

## A11y

- `role="status"` 자동 설정
- `aria-live="polite"` 자동 설정
- 스크린 리더 사용자에게 로딩 상태 알림
