# tinto-section

모바일 퍼스트 flex 레이아웃 컨테이너 컴포넌트. 섹션 레이아웃을 제어하고, 1920px 이상에서도 모바일 값을 기본으로 유지합니다.

---

## 빠른 시작

```html
<!-- 기본 섹션 -->
<tinto-section padding="24px" gap="16px">
  <h1>제목</h1>
  <p>내용</p>
</tinto-section>

<!-- 가운데 정렬된 고정 폭 섹션 -->
<tinto-section center max-width="1200px" padding="32px">
  <h2>중앙 정렬 섹션</h2>
</tinto-section>

<!-- 풀 스크린 섹션 -->
<tinto-section height-mode="screen" scrollable padding="24px">
  <h1>풀 스크린 콘텐츠</h1>
</tinto-section>
```

---

## Props

### Flex 레이아웃 (모바일 기본)

| Prop        | Type                                                                                            | Default        | 설명                                    |
| ----------- | ----------------------------------------------------------------------------------------------- | -------------- | --------------------------------------- |
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'`                                        | `'column'`     | Flex 방향                               |
| `wrap`      | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                          | `'nowrap'`     | Flex wrap                               |
| `justify`   | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` | 주 축 정렬                              |
| `align`     | `'stretch' \| 'flex-start' \| 'center' \| 'flex-end' \| 'baseline'`                             | `'stretch'`    | 교차 축 정렬                            |
| `gap`       | `string`                                                                                        | -              | 아이템 간 간격 (예: `"12px"`, `"1rem"`) |

### Flex 레이아웃 (데스크톱 ≥1920px 오버라이드)

| Prop                | Type                                                                                            | Default | 설명                    |
| ------------------- | ----------------------------------------------------------------------------------------------- | ------- | ----------------------- |
| `direction-desktop` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'`                                        | -       | 데스크톱 Flex 방향      |
| `wrap-desktop`      | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                          | -       | 데스크톱 Flex wrap      |
| `justify-desktop`   | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | -       | 데스크톱 주 축 정렬     |
| `align-desktop`     | `'stretch' \| 'flex-start' \| 'center' \| 'flex-end' \| 'baseline'`                             | -       | 데스크톱 교차 축 정렬   |
| `gap-desktop`       | `string`                                                                                        | -       | 데스크톱 아이템 간 간격 |

> **참고**: 데스크톱 오버라이드 props를 지정하지 않으면, 1920px 이상에서도 모바일 설정이 그대로 사용됩니다.

### 박스/스타일

| Prop         | Type      | Default | 설명                                                           |
| ------------ | --------- | ------- | -------------------------------------------------------------- |
| `max-width`  | `string`  | -       | 섹션 최대 너비 (예: `"1200px"`, `"100%"`)                      |
| `padding`    | `string`  | -       | 안쪽 여백 (예: `"16px"`, `"24px 12px"`)                        |
| `margin`     | `string`  | -       | 바깥 여백 (예: `"0 auto"`)                                     |
| `background` | `string`  | -       | 배경 색/그라디언트                                             |
| `color`      | `string`  | -       | 기본 텍스트 색                                                 |
| `radius`     | `string`  | -       | border-radius                                                  |
| `shadow`     | `string`  | -       | box-shadow                                                     |
| `center`     | `boolean` | `false` | 가운데 정렬 (`max-width`와 함께 사용 시 `margin-inline: auto`) |

### 높이/스크롤

| Prop          | Type                          | Default  | 설명                                                                                     |
| ------------- | ----------------------------- | -------- | ---------------------------------------------------------------------------------------- |
| `height-mode` | `'auto' \| 'dvh' \| 'screen'` | `'auto'` | 높이 모드 (`auto`: 콘텐츠 높이, `dvh`: `min-height: 100dvh`, `screen`: `height: 100dvh`) |
| `scrollable`  | `boolean`                     | `false`  | 내부 스크롤 허용 (`height-mode`가 `dvh`/`screen`일 때)                                   |

---

## 사용 예시

### 모바일/데스크톱 동일 레이아웃

```html
<tinto-section padding="20px" gap="16px" direction="column" center>
  <tinto-typography variant="h1">UXBIT Demo Section</tinto-typography>
  <tinto-typography variant="p">
    이 섹션은 모바일/데스크톱에서 동일한 column 레이아웃을 유지합니다.
  </tinto-typography>
</tinto-section>
```

### 1920px 이상에서만 row 레이아웃으로 전환

```html
<tinto-section
  padding="24px"
  gap="16px"
  direction="column"
  direction-desktop="row"
  gap-desktop="32px"
  center
>
  <tinto-typography variant="h2">Responsive Section</tinto-typography>
  <tinto-image src="..." ratio="16:9" rounded="soft" width="100%"></tinto-image>
</tinto-section>
```

**동작**:

- 1919px 이하: 세로(column) 레이아웃
- 1920px 이상: 가로(row) 레이아웃으로 전환

### 풀 스크린 섹션 + 내부 스크롤

```html
<tinto-section height-mode="screen" scrollable padding="24px">
  <h1>긴 콘텐츠</h1>
  <!-- 이 안에서 overflow: auto -->
</tinto-section>
```

### 가운데 정렬된 고정 폭 섹션

```html
<tinto-section center max-width="1200px" padding="24px" gap="20px">
  <h2>중앙 정렬 콘텐츠</h2>
</tinto-section>
```

### 배경과 그림자

```html
<tinto-section
  background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  color="#fff"
  radius="24px"
  shadow="0 20px 45px rgba(0,0,0,0.12)"
  padding="40px"
>
  <h2>히어로 섹션</h2>
</tinto-section>
```

---

## CSS Parts

- `part="root"`: 섹션 루트 요소

```css
tinto-section::part(root) {
  background: #f9fafb;
}
```

---

## CSS 변수

내부에서 사용하는 주요 CSS 변수:

### 레이아웃/박스

- `--t-max-w`: 최대 너비
- `--t-pad`: 패딩
- `--t-mar`: 마진

### 비주얼

- `--t-bg`: 배경
- `--t-color`: 텍스트 색상
- `--t-radius`: border-radius
- `--t-shadow`: box-shadow

### Flex (모바일)

- `--t-dir`: flex-direction
- `--t-wrap`: flex-wrap
- `--t-justify`: justify-content
- `--t-align`: align-items
- `--t-gap`: gap

### Flex (데스크톱 ≥1920px)

- `--t-dir-desktop`: flex-direction
- `--t-wrap-desktop`: flex-wrap
- `--t-justify-desktop`: justify-content
- `--t-align-desktop`: align-items
- `--t-gap-desktop`: gap

> **참고**: 데스크톱 변수는 값이 정의된 경우에만 미디어쿼리 안에서 사용됩니다.

---

## 접근성

- ARIA 속성 패스스루: `aria-label`, `aria-labelledby`, `aria-describedby`, `role`
- 키보드 스크롤: `scrollable` 활성 시 `tabIndex=0`으로 키보드 포커스 가능

---

## FAQ

**Q: 1920px 이상에서 레이아웃이 갑자기 바뀌는 경우**  
A: 전역 CSS에서 `tinto-section::part(root)` 또는 `--t-*-desktop` 변수를 설정했는지 확인하세요. 필요하면 컴포넌트에 직접 `direction-desktop`, `gap-desktop` 등을 모바일과 동일 값으로 명시해서 고정하세요.

**Q: 풀 스크린 섹션에서 스크롤이 안 돼요**  
A: `height-mode="screen"` 또는 `height-mode="dvh"`와 함께 `scrollable` prop을 `true`로 설정하세요.

**Q: 가운데 정렬이 안 돼요**  
A: `center` prop과 함께 `max-width`를 설정해야 합니다.

---

## TL;DR

- 모바일 퍼스트 flex 레이아웃 컨테이너
- 1920px 이상에서도 모바일 값 기본 유지 (오버라이드 가능)
- 높이 모드와 스크롤 제어 지원
- 배경, 그림자, 반경 등 비주얼 스타일 지원
