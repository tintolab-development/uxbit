# tinto-section 엘리먼트 가이드

## 1. 개요

- `tinto-section`은 **모바일 퍼스트 flex 레이아웃 컨테이너**입니다.
- 내부에 들어가는 콘텐츠를 감싸고, `direction`, `gap`, `padding` 같은 속성으로 섹션 레이아웃을 제어합니다.
- 1920px 이상에서도 `*-desktop` 속성을 따로 지정하지 않으면 **모바일 값이 그대로 유지**되도록 설계되어 있습니다.
- Shadow DOM 기반이며, `part="root"`로 외부 스타일 오버라이드가 가능합니다.

---

## 2. 주요 Props

> 값이 `reflect: true`라서 HTML 속성으로 직접 제어 가능합니다.

### 레이아웃 관련

- `direction` (기본: `"column"`)
  - flex 방향 (`row`, `row-reverse`, `column`, `column-reverse`)
- `wrap` (기본: `"nowrap"`)
  - flex-wrap (`nowrap`, `wrap`, `wrap-reverse`)
- `justify` (기본: `"flex-start"`)
  - main-axis 정렬 (`flex-start`, `center`, `flex-end`, `space-between`, …)
- `align` (기본: `"stretch"`)
  - cross-axis 정렬 (`stretch`, `flex-start`, `center`, `flex-end`, `baseline`)
- `gap`
  - 아이템 간 간격 (`12px`, `1rem` 등)

### 데스크톱(≥1920px) 전용 오버라이드

- `direction-desktop`
- `wrap-desktop`
- `justify-desktop`
- `align-desktop`
- `gap-desktop`

> 이 값들을 **지정하지 않으면**, 1920px 이상에서도 모바일 설정이 그대로 사용됩니다.

### 박스/스타일 관련

- `max-width`
  - 섹션 최대 너비 (`1200px`, `100%` 등)
- `padding`
  - 안쪽 여백
- `margin`
  - 바깥 여백 (`0 auto` 등)
- `background`
  - 배경 색/그라디언트
- `color`
  - 기본 텍스트 색
- `radius`
  - `border-radius`
- `shadow`
  - `box-shadow`
- `center` (boolean, 기본: `false`)
  - `max-width`와 함께 사용 시, `margin-inline: auto`로 가운데 정렬

### 높이/스크롤 관련

- `height-mode` (`"auto" | "dvh" | "screen"`, 기본: `"auto"`)
  - `auto`: 콘텐츠 높이
  - `dvh`: `min-height: 100dvh` (뷰포트 기준, iOS 폴백 포함)
  - `screen`: `height: 100dvh` (풀 스크린 섹션)
- `scrollable` (boolean, 기본: `false`)
  - `height-mode`가 `dvh`/`screen`일 때 내부 스크롤 허용 + `tabIndex=0`으로 키보드 포커스 가능

---

## 3. CSS 변수 요약

내부 `[part="root"]`에서 사용하는 주요 CSS 변수:

- 레이아웃/박스
  - `--t-max-w` : 최대 너비
  - `--t-pad` : 패딩
  - `--t-mar` : 마진
- 비주얼
  - `--t-bg` : 배경
  - `--t-color` : 텍스트 색상
  - `--t-radius` : border-radius
  - `--t-shadow` : box-shadow
- flex(모바일)
  - `--t-dir` / `--t-wrap` / `--t-justify` / `--t-align` / `--t-gap`
- flex(데스크톱 ≥1920px)
  - `--t-dir-desktop` / `--t-wrap-desktop` / `--t-justify-desktop` / `--t-align-desktop` / `--t-gap-desktop`  
    → **값이 정의된 경우에만** 미디어쿼리 안에서 사용됨

---

## 4. 간단 사용법 HTML

### 4-1. 모바일/데스크톱 동일 레이아웃

```html
<tinto-section padding="20px" gap="16px" direction="column" center>
  <tinto-typography variant="h1" font="pretendard" font-size="xl" color="#111827" weight="700"> UXBIT Demo Section </tinto-typography>

  <tinto-typography variant="p" color="#4b5563" align="justify"> 이 섹션은 tinto-section을 사용해 모바일/데스크톱에서 동일한 column 레이아웃을 유지합니다. </tinto-typography>

  <tinto-wrapper direction="row" gap="24px" padding="24px" radius="16px" shadow="0 8px 24px rgba(0,0,0,.12)">
    <tinto-typography variant="h2" weight="700">카드 A</tinto-typography>
    <tinto-typography variant="p">간단한 설명 텍스트</tinto-typography>
  </tinto-wrapper>

  <tinto-typography variant="p" color="#6b7280" font-size="sm"> © 2025 TintoLab / UXBIT — All rights reserved. </tinto-typography>
</tinto-section>
```

### 4-2. 1920px 이상에서만 row 레이아웃으로 전환

```html
<tinto-section padding="24px" gap="16px" direction="column" direction-desktop="row" gap-desktop="32px" center>
  <tinto-typography variant="h2" weight="700">Responsive Section</tinto-typography>

  <tinto-image src="https://picsum.photos/id/1025/1200/800" ratio="16:9" rounded="soft" width="100%"> </tinto-image>
  >
</tinto-section>
```

1919px 이하: 세로(column) 레이아웃

1920px 이상: direction-desktop="row" 로 가로(row) 레이아웃으로 변경

### 5. 자주 겪는 이슈 & 팁

1920px 이상에서 레이아웃이 갑자기 바뀌는 경우

전역 CSS에서 tinto-section::part(root) 또는 --t-\*-desktop 변수를 설정했는지 확인

필요한 경우, 컴포넌트에 직접 direction-desktop, gap-desktop 등을 모바일과 동일 값으로 명시해서 고정

풀 스크린 섹션 + 내부 스크롤이 필요한 경우

```html
<tinto-section height-mode="screen" scrollable padding="24px">
  <!-- 이 안에서 overflow: auto -->
</tinto-section>

가운데 정렬된 고정 폭 섹션

<tinto-section center max-width="1200px" padding="24px" gap="20px"> ... </tinto-section>
```
