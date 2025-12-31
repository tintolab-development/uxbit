# tinto-content

페이지 메인 콘텐츠 영역을 담당하는 컴포넌트입니다. 기본 padding은 0이며, 하위 요소의 크기에 맞춰 자동으로 조정됩니다.

---

## 빠른 시작

```html
<!-- 기본 콘텐츠 (padding: 0, 하위 요소 크기에 맞춤) -->
<tinto-content>Main Content</tinto-content>

<!-- Padding이 필요한 경우 -->
<tinto-content padding="24px">Main Content</tinto-content>

<!-- 가운데 정렬된 콘텐츠 -->
<tinto-content max-width="1200px" center> Content </tinto-content>
```

---

## Breakpoint 시스템

모든 props는 다음 breakpoint를 지원합니다:

| Breakpoint | 크기      | 설명         |
| ---------- | --------- | ------------ |
| `xs`       | < 640px   | 모바일       |
| `sm`       | >= 640px  | 태블릿       |
| `md`       | >= 768px  | 데스크탑     |
| `lg`       | >= 1024px | 큰 데스크탑  |
| `xl`       | >= 1280px | XL 데스크탑  |
| `2xl`      | >= 1536px | 2XL 데스크탑 |

---

## Props

| Prop         | Type                        | Default | 설명                         |
| ------------ | --------------------------- | ------- | ---------------------------- |
| `padding`    | `string \| BreakpointValue` | `'0'`   | 패딩 (하위 요소 크기에 맞춤) |
| `max-width`  | `string \| BreakpointValue` | -       | 최대 너비                    |
| `center`     | `boolean`                   | `false` | 가운데 정렬 여부             |
| `background` | `string`                    | -       | 배경색                       |

### BreakpointValue 타입

```typescript
type BreakpointValue = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
};
```

---

## 사용 예시

### 기본 사용

```html
<!-- 기본 콘텐츠 (padding: 0) -->
<tinto-content>
  <h1>제목</h1>
  <p>내용</p>
</tinto-content>
```

### Padding 적용

```html
<!-- 고정 padding -->
<tinto-content padding="24px">
  <h1>제목</h1>
  <p>내용</p>
</tinto-content>

<!-- Responsive padding -->
<tinto-content padding={{ xs: '16px', md: '24px', lg: '32px' }}>
  <h1>제목</h1>
  <p>내용</p>
</tinto-content>
```

### 가운데 정렬

```html
<!-- 최대 너비 제한 및 가운데 정렬 -->
<tinto-content max-width="1200px" center>
  <h1>제목</h1>
  <p>내용</p>
</tinto-content>

<!-- Responsive 최대 너비 -->
<tinto-content
  max-width={{ xs: '100%', md: '768px', lg: '1200px' }}
  center
>
  <h1>제목</h1>
  <p>내용</p>
</tinto-content>
```

### tinto-section과 함께 사용

```html
<tinto-section gap="8px" padding="16px">
  <tinto-content>
    <h1>첫 번째 콘텐츠</h1>
    <p>padding: 0 (기본값)</p>
  </tinto-content>
  <tinto-content>
    <h2>두 번째 콘텐츠</h2>
    <p>tinto-section의 gap으로 간격 제어</p>
  </tinto-content>
  <tinto-content padding="16px" background="#f0f2f5">
    <h2>세 번째 콘텐츠</h2>
    <p>명시적 padding과 background 적용</p>
  </tinto-content>
</tinto-section>
```

### tinto-layout과 함께 사용

```html
<tinto-layout direction="column" padding="20px">
  <tinto-header>Header</tinto-header>
  <tinto-content padding="24px" max-width="1200px" center>
    <h1>Main Content</h1>
    <p>This is the main content area.</p>
  </tinto-content>
  <tinto-footer>Footer</tinto-footer>
</tinto-layout>
```

---

## 주요 특징

### 1. 기본 padding: 0

`tinto-content`의 기본 padding은 `0`입니다. 이는 하위 요소의 크기에 정확히 맞춰지도록 하기 위함입니다.

```html
<!-- padding 없음 (기본값) -->
<tinto-content>
  <div>이 div의 크기만큼만 content가 차지</div>
</tinto-content>

<!-- padding 필요 시 명시적으로 설정 -->
<tinto-content padding="24px">
  <div>내용</div>
</tinto-content>
```

### 2. 콘텐츠 크기에 맞춤

`tinto-content`는 콘텐츠 크기에 맞춰 자동으로 조정됩니다. 불필요한 공간을 차지하지 않습니다.

```html
<!-- 콘텐츠 크기만큼만 차지 -->
<tinto-section gap="8px">
  <tinto-content>
    <h1>짧은 제목</h1>
  </tinto-content>
  <tinto-content>
    <p>긴 내용...</p>
  </tinto-content>
</tinto-section>
```

### 3. Responsive 지원

모든 props는 breakpoint별로 다른 값을 설정할 수 있습니다.

```html
<tinto-content
  padding={{ xs: '16px', md: '24px', lg: '32px' }}
  max-width={{ xs: '100%', md: '768px', lg: '1200px' }}
  center
>
  Responsive Content
</tinto-content>
```

---

## Semantic Parts

`::part()` 선택자를 통해 스타일링할 수 있습니다.

- `root`: 콘텐츠 루트 요소

```css
tinto-content::part(root) {
  border: 1px solid #ccc;
  border-radius: 8px;
}
```

---

## CSS 변수

컴포넌트 내부에서 사용하는 CSS 변수:

```css
tinto-content {
  --t-content-padding: 0; /* 기본값 0 (하위 요소 크기에 맞춤) */
  --t-content-max-width: none;
  --t-content-bg: transparent;
}
```

### Responsive CSS 변수

```css
tinto-content {
  --t-content-padding-xs: 16px;
  --t-content-padding-sm: 24px;
  --t-content-padding-md: 32px;
  /* ... */
}
```

---

## 접근성

- ✅ `role="main"` 자동 설정
- ✅ 시맨틱 HTML 요소 사용 (`<main>`)
- ✅ 키보드 접근성 지원
- ✅ High Contrast 모드 지원

---

## 문제 해결

### Q: 콘텐츠가 예상보다 큰 영역을 차지해요

A: `tinto-content`는 기본적으로 콘텐츠 크기에 맞춰집니다. 만약 큰 영역을 차지한다면:

1. `tinto-section`의 `min-height: 100vh` 확인
2. `tinto-section`의 `justify="center"` 제거
3. `tinto-content`에 불필요한 `flex: 1`이 있는지 확인

### Q: padding을 적용했는데 여전히 0이에요

A: `padding` prop을 명시적으로 설정했는지 확인하세요:

```html
<!-- ✅ 올바른 사용 -->
<tinto-content padding="24px">Content</tinto-content>

<!-- ❌ 잘못된 사용 (기본값 0) -->
<tinto-content>Content</tinto-content>
```

### Q: 여러 content 사이의 간격을 조절하고 싶어요

A: `tinto-section`의 `gap` prop을 사용하세요:

```html
<tinto-section gap="16px">
  <tinto-content>Content 1</tinto-content>
  <tinto-content>Content 2</tinto-content>
</tinto-section>
```

---

## 고급 사용법

### 동적 스타일 변경

```javascript
const content = document.querySelector('tinto-content');
content.padding = '32px';
content.maxWidth = '1400px';
content.center = true;
```

### CSS 변수로 커스터마이징

```css
tinto-content {
  --t-content-padding: clamp(16px, 4vw, 48px);
  --t-content-max-width: 1200px;
  --t-content-bg: #f0f2f5;
}
```

---

## TL;DR

- ✅ 기본 padding: 0 (하위 요소 크기에 맞춤)
- ✅ 콘텐츠 크기에 맞춰 자동 조정
- ✅ 완전한 responsive 지원 (6개 breakpoint)
- ✅ CSS 변수 기반 커스터마이징
- ✅ 접근성 기본 탑재
- ✅ `tinto-section`과 함께 사용 시 `gap`으로 간격 제어

---

## 관련 컴포넌트

- [`tinto-layout`](./tinto-layout.md): 레이아웃 최상위 컨테이너
- [`tinto-section`](./tinto-section.md): 독립적인 콘텐츠 영역
- [`tinto-header`](./tinto-layout.md#tinto-header): 페이지 상단 헤더
- [`tinto-footer`](./tinto-layout.md#tinto-footer): 페이지 하단 푸터
