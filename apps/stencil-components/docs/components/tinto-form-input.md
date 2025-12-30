# tinto-form-input

폼 입력 필드 컴포넌트. 다양한 입력 타입(text, email, password, number 등)을 지원하며, 상태 표시(error, success, warning) 기능을 제공합니다.

---

## 빠른 시작

```html
<!-- 기본 입력 필드 -->
<tinto-form-input name="username" placeholder="사용자명을 입력하세요" />

<!-- 이메일 입력 필드 -->
<tinto-form-input type="email" name="email" placeholder="이메일을 입력하세요" required />

<!-- 에러 상태 -->
<tinto-form-input
  name="password"
  type="password"
  state="error"
  placeholder="비밀번호를 입력하세요"
/>
```

---

## Props

### 기본 Props

| Prop           | Type                                                                                         | Default     | 설명                               |
| -------------- | -------------------------------------------------------------------------------------------- | ----------- | ---------------------------------- |
| `type`         | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search' \| 'date' \| ...` | `'text'`    | 입력 필드 타입                     |
| `size`         | `'sm' \| 'md' \| 'lg'`                                                                       | `'md'`      | 입력 필드 크기                     |
| `variant`      | `'default' \| 'outline' \| 'filled' \| 'underline'`                                          | `'default'` | 입력 필드 variant                  |
| `state`        | `'default' \| 'error' \| 'success' \| 'warning'`                                             | `'default'` | 입력 필드 상태                     |
| `value`        | `string`                                                                                     | `''`        | 입력 값                            |
| `placeholder`  | `string`                                                                                     | -           | 플레이스홀더                       |
| `name`         | `string`                                                                                     | -           | 필드 이름 (form 제출 시 사용)      |
| `required`     | `boolean`                                                                                    | `false`     | 필수 입력 여부                     |
| `disabled`     | `boolean`                                                                                    | `false`     | 비활성화 여부                      |
| `readonly`     | `boolean`                                                                                    | `false`     | 읽기 전용 여부                     |
| `autofocus`    | `boolean`                                                                                    | `false`     | 자동 포커스 여부                   |
| `autocomplete` | `string`                                                                                     | -           | 자동 완성 (HTML autocomplete 속성) |
| `maxlength`    | `number`                                                                                     | -           | 최대 길이                          |
| `minlength`    | `number`                                                                                     | -           | 최소 길이                          |
| `min`          | `number`                                                                                     | -           | 최소값 (number 타입일 때)          |
| `max`          | `number`                                                                                     | -           | 최대값 (number 타입일 때)          |

---

## Slots

| Slot     | 설명               |
| -------- | ------------------ |
| `prefix` | 선행 아이콘/텍스트 |
| `suffix` | 후행 아이콘/텍스트 |

---

## Events

| 이벤트       | Payload                 | 설명                |
| ------------ | ----------------------- | ------------------- |
| `tintoInput` | `FormInputChangeDetail` | 입력 값 변경 이벤트 |
| `tintoFocus` | `FormInputFocusDetail`  | 포커스 이벤트       |
| `tintoBlur`  | `FormInputFocusDetail`  | 블러 이벤트         |

---

## Methods

| Method    | 설명                      |
| --------- | ------------------------- |
| `focus()` | 입력 필드에 포커스 설정   |
| `blur()`  | 입력 필드에서 포커스 제거 |

---

## 사용 예시

### Variant

```html
<tinto-form-input variant="default" placeholder="Default" />
<tinto-form-input variant="outline" placeholder="Outline" />
<tinto-form-input variant="filled" placeholder="Filled" />
<tinto-form-input variant="underline" placeholder="Underline" />
```

### Size

```html
<tinto-form-input size="sm" placeholder="Small" />
<tinto-form-input size="md" placeholder="Medium" />
<tinto-form-input size="lg" placeholder="Large" />
```

### State

```html
<tinto-form-input state="default" placeholder="Default" />
<tinto-form-input state="error" placeholder="Error" />
<tinto-form-input state="success" placeholder="Success" />
<tinto-form-input state="warning" placeholder="Warning" />
```

### 다양한 타입

```html
<tinto-form-input type="text" placeholder="텍스트" />
<tinto-form-input type="email" placeholder="이메일" />
<tinto-form-input type="password" placeholder="비밀번호" />
<tinto-form-input type="number" placeholder="숫자" />
<tinto-form-input type="tel" placeholder="전화번호" />
<tinto-form-input type="date" />
<tinto-form-input type="time" />
```

---

## A11y

- 적절한 ARIA 속성 자동 설정
- 키보드 접근성 지원
- 상태에 따른 접근성 피드백 제공
