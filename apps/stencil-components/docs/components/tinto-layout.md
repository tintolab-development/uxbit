# tinto-layout

Ant Design 스타일의 Layout 시스템. Header, Content, Footer, Sider를 포함할 수 있으며, 모든 컴포넌트는 responsive합니다.

---

## 빠른 시작

```html
<!-- 기본 레이아웃 -->
<tinto-layout>
  <tinto-header>Header</tinto-header>
  <tinto-content>Content</tinto-content>
  <tinto-footer>Footer</tinto-footer>
</tinto-layout>

<!-- 사이드바 포함 -->
<tinto-layout>
  <tinto-header>Header</tinto-header>
  <tinto-layout direction="row">
    <tinto-sider>Sidebar</tinto-sider>
    <tinto-content>Content</tinto-content>
  </tinto-layout>
  <tinto-footer>Footer</tinto-footer>
</tinto-layout>
```

---

## Breakpoint 시스템

모든 Layout 컴포넌트는 다음 breakpoint를 지원합니다:

| Breakpoint | 크기      | 설명         |
| ---------- | --------- | ------------ |
| `xs`       | < 640px   | 모바일       |
| `sm`       | >= 640px  | 태블릿       |
| `md`       | >= 768px  | 데스크탑     |
| `lg`       | >= 1024px | 큰 데스크탑  |
| `xl`       | >= 1280px | XL 데스크탑  |
| `2xl`      | >= 1536px | 2XL 데스크탑 |

---

## tinto-layout

레이아웃의 최상위 컨테이너입니다.

### Props

| Prop        | Type                            | Default    | 설명              |
| ----------- | ------------------------------- | ---------- | ----------------- |
| `direction` | `'row' \| 'column'`             | `'column'` | Flex 방향         |
| `gap`       | `string \| BreakpointValue`     | `'0'`      | 자식 요소 간 간격 |
| `padding`   | `string \| BreakpointValue`     | `'0'`      | 패딩              |
| `height`    | `'auto' \| '100vh' \| '100dvh'` | `'auto'`   | 높이 모드         |

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

### 사용 예시

```html
<!-- 기본 사용 -->
<tinto-layout>
  <tinto-header>Header</tinto-header>
  <tinto-content>Content</tinto-content>
</tinto-layout>

<!-- Responsive gap -->
<tinto-layout gap={{ xs: '0', md: '16px', lg: '24px' }}>
  <tinto-header>Header</tinto-header>
  <tinto-content>Content</tinto-content>
</tinto-layout>

<!-- Padding -->
<tinto-layout padding="20px">
  <tinto-header>Header</tinto-header>
  <tinto-content>Content</tinto-content>
</tinto-layout>

<!-- Responsive padding -->
<tinto-layout padding={{ xs: '16px', md: '20px', lg: '24px' }}>
  <tinto-header>Header</tinto-header>
  <tinto-content>Content</tinto-content>
</tinto-layout>

<!-- Full height -->
<tinto-layout height="100dvh">
  <tinto-header>Header</tinto-header>
  <tinto-content>Content</tinto-content>
</tinto-layout>
```

---

## tinto-header

페이지 상단 헤더 영역입니다.

### Props

| Prop         | Type                        | Default  | 설명           |
| ------------ | --------------------------- | -------- | -------------- |
| `height`     | `string \| BreakpointValue` | `'64px'` | 헤더 높이      |
| `fixed`      | `boolean`                   | `false`  | 고정 헤더 여부 |
| `z-index`    | `number`                    | `1000`   | z-index 값     |
| `background` | `string`                    | -        | 배경색         |
| `padding`    | `string \| BreakpointValue` | -        | 패딩           |

### 사용 예시

```html
<!-- 기본 헤더 -->
<tinto-header>Header Content</tinto-header>

<!-- 고정 헤더 -->
<tinto-header fixed height="64px" background="#001529">
  <div style="color: #fff; padding: 0 24px;">Header</div>
</tinto-header>

<!-- Responsive 헤더 -->
<tinto-header
  height={{ xs: '56px', md: '64px', lg: '72px' }}
  padding={{ xs: '0 16px', md: '0 24px' }}
>
  Header
</tinto-header>
```

---

## tinto-content

페이지 메인 콘텐츠 영역입니다.

### Props

| Prop         | Type                        | Default | 설명                         |
| ------------ | --------------------------- | ------- | ---------------------------- |
| `padding`    | `string \| BreakpointValue` | `'0'`   | 패딩 (하위 요소 크기에 맞춤) |
| `max-width`  | `string \| BreakpointValue` | -       | 최대 너비                    |
| `center`     | `boolean`                   | `false` | 가운데 정렬 여부             |
| `background` | `string`                    | -       | 배경색                       |

### 사용 예시

```html
<!-- 기본 콘텐츠 (padding: 0, 하위 요소 크기에 맞춤) -->
<tinto-content>Main Content</tinto-content>

<!-- Padding이 필요한 경우 -->
<tinto-content padding="24px">Main Content</tinto-content>

<!-- 가운데 정렬된 콘텐츠 -->
<tinto-content max-width="1200px" center>
  Content
</tinto-content>

<!-- Responsive 콘텐츠 -->
<tinto-content
  padding={{ xs: '16px', md: '24px', lg: '32px' }}
  max-width={{ xs: '100%', md: '768px', lg: '1200px' }}
  center
>
  Content
</tinto-content>
```

---

## tinto-footer

페이지 하단 푸터 영역입니다.

### Props

| Prop         | Type                        | Default  | 설명      |
| ------------ | --------------------------- | -------- | --------- |
| `height`     | `string \| BreakpointValue` | `'auto'` | 푸터 높이 |
| `background` | `string`                    | -        | 배경색    |
| `padding`    | `string \| BreakpointValue` | -        | 패딩      |

### 사용 예시

```html
<!-- 기본 푸터 -->
<tinto-footer>Footer Content</tinto-footer>

<!-- Responsive 푸터 -->
<tinto-footer
  height="auto"
  background="#f5f5f5"
  padding={{ xs: '16px', md: '24px' }}
>
  Footer
</tinto-footer>
```

---

## tinto-sider

사이드바 영역입니다.

### Props

| Prop              | Type                        | Default   | 설명                 |
| ----------------- | --------------------------- | --------- | -------------------- |
| `width`           | `string \| BreakpointValue` | `'200px'` | 사이드바 너비        |
| `collapsed`       | `boolean`                   | `false`   | 접힘 상태            |
| `collapsible`     | `boolean`                   | `false`   | 접힘 가능 여부       |
| `collapsed-width` | `string`                    | `'80px'`  | 접힘 상태일 때 너비  |
| `breakpoint`      | `Breakpoint`                | -         | 자동 숨김 breakpoint |
| `background`      | `string`                    | -         | 배경색               |
| `z-index`         | `number`                    | `100`     | z-index 값           |

### Events

| 이벤트          | Payload                  | 설명                  |
| --------------- | ------------------------ | --------------------- |
| `tintoCollapse` | `{ collapsed: boolean }` | 접힘 상태 변경 이벤트 |

### Methods

| Method                             | 설명           |
| ---------------------------------- | -------------- |
| `toggleCollapse()`                 | 접힘 상태 토글 |
| `setCollapsed(collapsed: boolean)` | 접힘 상태 설정 |

### 사용 예시

```html
<!-- 기본 사이드바 -->
<tinto-sider>Sidebar Content</tinto-sider>

<!-- 접힘 가능한 사이드바 -->
<tinto-sider collapsible collapsed={false}>
  <button onclick="this.closest('tinto-sider').toggleCollapse()">
    Toggle
  </button>
  Sidebar
</tinto-sider>

<!-- Responsive 사이드바 (md 이하에서 자동 숨김) -->
<tinto-sider
  width={{ xs: '0', md: '200px', lg: '240px' }}
  breakpoint="md"
>
  Sidebar
</tinto-sider>
```

---

## 완전한 예시

```html
<tinto-layout direction="column" height="100dvh">
  <!-- 고정 헤더 -->
  <tinto-header
    height={{ xs: '56px', md: '64px' }}
    fixed
    background="#001529"
  >
    <div style="color: #fff; padding: 0 24px;">Header</div>
  </tinto-header>

  <!-- 메인 레이아웃 (가로) -->
  <tinto-layout direction="row">
    <!-- 사이드바 (모바일에서 숨김) -->
    <tinto-sider
      width={{ xs: '0', md: '200px' }}
      breakpoint="md"
      background="#001529"
    >
      <div style="color: #fff; padding: 16px;">
        <h3>Sidebar</h3>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
        </ul>
      </div>
    </tinto-sider>

    <!-- 콘텐츠 -->
    <tinto-content
      padding={{ xs: '16px', md: '24px' }}
      max-width={{ xs: '100%', md: '1200px' }}
      center
    >
      <h1>Main Content</h1>
      <p>This is the main content area.</p>
    </tinto-content>
  </tinto-layout>

  <!-- 푸터 -->
  <tinto-footer
    background="#f5f5f5"
    padding={{ xs: '16px', md: '24px' }}
  >
    <div>Footer</div>
  </tinto-footer>
</tinto-layout>
```

---

## Semantic Parts

각 컴포넌트는 `::part()` 선택자를 통해 스타일링할 수 있습니다.

### tinto-layout

- `root`: 루트 요소

### tinto-header

- `root`: 헤더 요소

### tinto-content

- `root`: 콘텐츠 요소

### tinto-footer

- `root`: 푸터 요소

### tinto-sider

- `root`: 사이드바 요소

---

## CSS 변수

모든 컴포넌트는 CSS 변수를 통해 커스터마이징할 수 있습니다.

```css
tinto-layout {
  --t-layout-gap: 24px;
  --t-layout-padding: 0; /* 기본값 0 */
}

tinto-header {
  --t-header-height: 64px;
  --t-header-bg: #001529;
  --t-header-padding: 0 24px;
}

tinto-content {
  --t-content-padding: 0; /* 기본값 0 (하위 요소 크기에 맞춤) */
  --t-content-max-width: 1200px;
  --t-content-bg: #f0f2f5;
}

tinto-footer {
  --t-footer-height: auto;
  --t-footer-bg: #f5f5f5;
  --t-footer-padding: 24px;
}

tinto-sider {
  --t-sider-width: 200px;
  --t-sider-bg: #001529;
  --t-sider-collapsed-width: 80px;
}
```

---

## 접근성

- 모든 컴포넌트는 적절한 semantic HTML 요소 사용 (`<header>`, `<main>`, `<footer>`, `<aside>`)
- ARIA 속성 자동 설정
- 키보드 접근성 지원
- High Contrast 모드 지원

---

## 기존 컴포넌트와의 차이점

### app-route, wrapper, section과 비교

| 특징       | 기존 컴포넌트     | Layout 컴포넌트        |
| ---------- | ----------------- | ---------------------- |
| Props 수   | ~60개 (app-route) | ~5개 (각 컴포넌트)     |
| 역할       | 불명확            | 명확한 역할 분리       |
| Responsive | 제한적            | 완전한 responsive 지원 |
| 사용성     | 낮음              | 높음                   |
| 유지보수성 | 낮음              | 높음                   |

### 마이그레이션 가이드

기존 `app-route`, `wrapper`, `section` 사용 코드를 Layout 컴포넌트로 마이그레이션하는 것을 권장합니다.

```html
<!-- 기존 방식 -->
<tinto-app-route direction="column" gap="24px" padding="16px">
  <tinto-section>Content</tinto-section>
</tinto-app-route>

<!-- 새로운 방식 -->
<tinto-layout direction="column" gap="24px">
  <tinto-content padding="16px">Content</tinto-content>
</tinto-layout>
```

---

## TL;DR

- ✅ Ant Design 스타일의 명확한 역할 분리
- ✅ 최소한의 Props (각 컴포넌트 ~5개)
- ✅ 완전한 responsive 지원 (6개 breakpoint)
- ✅ CSS 변수 기반 커스터마이징
- ✅ 접근성 기본 탑재
- ✅ 사용성과 유지보수성 향상
