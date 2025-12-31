# Layout 컴포넌트 마이그레이션 가이드

## ⚠️ 중요 공지

**`tinto-app-route`와 `tinto-wrapper`는 deprecated되었고 삭제되었습니다.**

새로운 `tinto-layout` 시스템을 사용하세요:

- ✅ 더 명확한 역할 분리
- ✅ 최소한의 Props (60개 → 5개)
- ✅ 완전한 responsive 지원
- ✅ 더 나은 사용성과 유지보수성

---

## 컴포넌트 대체 가능성 분석

### 1. **tinto-app-route** → **tinto-layout** ✅ **완전 대체 가능**

#### 역할 비교

| 기능                     | app-route       | layout      | 대체 가능성   |
| ------------------------ | --------------- | ----------- | ------------- |
| 페이지 레벨 컨테이너     | ✅              | ✅          | ✅            |
| Flex 레이아웃            | ✅              | ✅          | ✅            |
| 높이 제어 (100vh/100dvh) | ✅ (heightMode) | ✅ (height) | ✅            |
| Gap 제어                 | ✅              | ✅          | ✅            |
| 배경/오버레이            | ✅              | ❌          | ⚠️ CSS로 처리 |
| Safe Area                | ✅              | ❌          | ⚠️ CSS로 처리 |
| Scroll snap              | ✅              | ❌          | ⚠️ CSS로 처리 |

#### 마이그레이션 예시

```html
<!-- ❌ 기존: app-route -->
<tinto-app-route
  direction="column"
  gap="4rem"
  height-mode="screen"
  padding-block="clamp(3rem, 6vw, 6rem)"
  padding-inline="clamp(1.5rem, 5vw, 4.5rem)"
  background="linear-gradient(135deg, #020617 0%, #0f172a 65%)"
  safe-area
>
  <tinto-section>Section 1</tinto-section>
  <tinto-section>Section 2</tinto-section>
</tinto-app-route>

<!-- ✅ 새로운: layout -->
<tinto-layout
  direction="column"
  gap="4rem"
  height="100dvh"
  style="
    padding-block: clamp(3rem, 6vw, 6rem);
    padding-inline: clamp(1.5rem, 5vw, 4.5rem);
    padding-inline: calc(clamp(1.5rem, 5vw, 4.5rem) + env(safe-area-inset-left)) 
                    calc(clamp(1.5rem, 5vw, 4.5rem) + env(safe-area-inset-right));
    background: linear-gradient(135deg, #020617 0%, #0f172a 65%);
  "
>
  <tinto-content>Section 1</tinto-content>
  <tinto-content>Section 2</tinto-content>
</tinto-layout>
```

**Props 매핑**:

- `direction` → `direction` (동일)
- `gap` → `gap` (동일)
- `height-mode="screen"` → `height="100dvh"`
- `height-mode="dvh"` → `height="100dvh"`
- `height-mode="auto"` → `height="auto"`
- `padding-*` → CSS `style` 속성 또는 상위 컨테이너에서 처리
- `background` → CSS `style` 속성
- `safe-area` → CSS `env(safe-area-inset-*)` 사용

---

### 2. **tinto-section** → **tinto-content** ✅ **대부분 대체 가능**

#### 역할 비교

| 기능                    | section | content | 대체 가능성             |
| ----------------------- | ------- | ------- | ----------------------- |
| 콘텐츠 컨테이너         | ✅      | ✅      | ✅                      |
| Flex 레이아웃           | ✅      | ❌      | ⚠️ Layout으로 처리      |
| maxWidth + center       | ✅      | ✅      | ✅                      |
| Padding                 | ✅      | ✅      | ✅                      |
| heightMode (screen/dvh) | ✅      | ❌      | ⚠️ Layout height로 처리 |
| scrollable              | ✅      | ❌      | ⚠️ CSS로 처리           |

#### 마이그레이션 예시

```html
<!-- ❌ 기존: section -->
<tinto-section
  direction="column"
  gap="1.5rem"
  max-width="1200px"
  center
  padding="3rem"
  height-mode="screen"
  scrollable
  background="rgba(15, 23, 42, 0.92)"
>
  Content
</tinto-section>

<!-- ✅ 새로운: content + layout -->
<tinto-layout direction="column" gap="1.5rem" height="100dvh">
  <tinto-content
    max-width="1200px"
    center
    padding="3rem"
    background="rgba(15, 23, 42, 0.92)"
    style="overflow-y: auto;"
  >
    Content
  </tinto-content>
</tinto-layout>
```

**Props 매핑**:

- `max-width` → `max-width` (동일)
- `center` → `center` (동일)
- `padding` → `padding` (동일)
- `background` → `background` (동일)
- `direction` → 상위 `tinto-layout`의 `direction`
- `gap` → 상위 `tinto-layout`의 `gap`
- `height-mode="screen"` → 상위 `tinto-layout`의 `height="100dvh"`
- `scrollable` → CSS `overflow-y: auto`

---

### 3. **tinto-wrapper** → **tinto-layout** ⚠️ **부분 대체 가능**

#### 역할 비교

| 기능                     | wrapper | layout | 대체 가능성 |
| ------------------------ | ------- | ------ | ----------- |
| 중간 레벨 래퍼           | ✅      | ✅     | ✅          |
| Flex 레이아웃            | ✅      | ✅     | ✅          |
| 반응형 (모바일/데스크탑) | ✅      | ✅     | ✅          |
| 배경 이미지              | ✅      | ❌     | ❌          |
| 오버레이                 | ✅      | ❌     | ❌          |
| fill 모드                | ✅      | ❌     | ❌          |

#### 마이그레이션 예시

**Case 1: 단순 레이아웃만 필요한 경우**

```html
<!-- ❌ 기존: wrapper -->
<tinto-wrapper direction="row" gap="2rem" padding="2.5rem"> Content </tinto-wrapper>

<!-- ✅ 새로운: layout -->
<tinto-layout direction="row" gap="2rem" style="padding: 2.5rem;">
  <tinto-content>Content</tinto-content>
</tinto-layout>
```

**Case 2: 배경/오버레이가 필요한 경우**

```html
<!-- ❌ 기존: wrapper -->
<tinto-wrapper
  direction="row"
  gap="2rem"
  padding="2.5rem"
  background="linear-gradient(...)"
  src="image.jpg"
  overlay="rgba(0,0,0,0.5)"
>
  Content
</tinto-wrapper>

<!-- ✅ 새로운: layout + CSS -->
<tinto-layout
  direction="row"
  gap="2rem"
  style="
    padding: 2.5rem;
    background: linear-gradient(...);
    background-image: url(image.jpg);
    position: relative;
  "
>
  <div
    style="
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    pointer-events: none;
  "
  ></div>
  <tinto-content>Content</tinto-content>
</tinto-layout>
```

**권장 사항**:

- 배경/오버레이가 자주 필요하면 CSS로 처리하거나 `wrapper` 유지
- 단순 레이아웃만 필요하면 `layout`으로 대체

---

## 완전한 마이그레이션 예시

### 예시 1: 기본 페이지 레이아웃

```html
<!-- ❌ 기존 -->
<tinto-app-route
  direction="column"
  gap="4rem"
  height-mode="screen"
  padding-block="clamp(3rem, 6vw, 6rem)"
  padding-inline="clamp(1.5rem, 5vw, 4.5rem)"
>
  <tinto-section direction="column" gap="1.5rem" padding="3rem" max-width="1200px" center>
    Hero Section
  </tinto-section>

  <tinto-section direction="column" gap="1.5rem" padding="3rem" max-width="1200px" center>
    Content Section
  </tinto-section>
</tinto-app-route>

<!-- ✅ 새로운 -->
<tinto-layout
  direction="column"
  gap="4rem"
  height="100dvh"
  style="
    padding-block: clamp(3rem, 6vw, 6rem);
    padding-inline: clamp(1.5rem, 5vw, 4.5rem);
  "
>
  <tinto-content padding="3rem" max-width="1200px" center>
    <tinto-layout direction="column" gap="1.5rem"> Hero Section </tinto-layout>
  </tinto-content>

  <tinto-content padding="3rem" max-width="1200px" center>
    <tinto-layout direction="column" gap="1.5rem"> Content Section </tinto-layout>
  </tinto-content>
</tinto-layout>
```

### 예시 2: Header + Content + Footer 레이아웃

```html
<!-- ❌ 기존 -->
<tinto-app-route direction="column" height-mode="screen">
  <tinto-section padding="0" height-mode="auto"> Header </tinto-section>
  <tinto-section padding="24px" max-width="1200px" center> Content </tinto-section>
  <tinto-section padding="16px" height-mode="auto"> Footer </tinto-section>
</tinto-app-route>

<!-- ✅ 새로운 -->
<tinto-layout direction="column" height="100dvh">
  <tinto-header padding="0"> Header </tinto-header>
  <tinto-content padding="24px" max-width="1200px" center> Content </tinto-content>
  <tinto-footer padding="16px"> Footer </tinto-footer>
</tinto-layout>
```

### 예시 3: 사이드바 포함 레이아웃

```html
<!-- ❌ 기존 -->
<tinto-app-route direction="column" height-mode="screen">
  <tinto-section padding="0" height-mode="auto"> Header </tinto-section>
  <tinto-app-route direction="row" height-mode="auto">
    <tinto-section width="200px" padding="16px" height-mode="auto"> Sidebar </tinto-section>
    <tinto-section padding="24px" max-width="1200px" center> Content </tinto-section>
  </tinto-app-route>
</tinto-app-route>

<!-- ✅ 새로운 -->
<tinto-layout direction="column" height="100dvh">
  <tinto-header padding="0"> Header </tinto-header>
  <tinto-layout direction="row">
    <tinto-sider width="200px" padding="16px"> Sidebar </tinto-sider>
    <tinto-content padding="24px" max-width="1200px" center> Content </tinto-content>
  </tinto-layout>
</tinto-layout>
```

---

## Props 매핑 참조표

### app-route → layout

| app-route              | layout                       | 비고 |
| ---------------------- | ---------------------------- | ---- |
| `direction`            | `direction`                  | 동일 |
| `gap`                  | `gap`                        | 동일 |
| `height-mode="screen"` | `height="100dvh"`            |      |
| `height-mode="dvh"`    | `height="100dvh"`            |      |
| `height-mode="auto"`   | `height="auto"`              |      |
| `padding-*`            | CSS `style`                  |      |
| `background`           | CSS `style`                  |      |
| `safe-area`            | CSS `env(safe-area-inset-*)` |      |

### section → content

| section       | content                     | 비고 |
| ------------- | --------------------------- | ---- |
| `max-width`   | `max-width`                 | 동일 |
| `center`      | `center`                    | 동일 |
| `padding`     | `padding`                   | 동일 |
| `background`  | `background`                | 동일 |
| `direction`   | 상위 `layout`의 `direction` |      |
| `gap`         | 상위 `layout`의 `gap`       |      |
| `height-mode` | 상위 `layout`의 `height`    |      |
| `scrollable`  | CSS `overflow-y: auto`      |      |

---

## 마이그레이션 체크리스트

### app-route 마이그레이션

- [ ] `tinto-app-route` → `tinto-layout` 변경
- [ ] `height-mode` → `height` 변경
- [ ] `padding-*` props → CSS `style`로 이동
- [ ] `background` prop → CSS `style`로 이동
- [ ] `safe-area` → CSS `env(safe-area-inset-*)` 사용
- [ ] 내부 `tinto-section` → `tinto-content` 변경

### section 마이그레이션

- [ ] `tinto-section` → `tinto-content` 변경
- [ ] `direction`, `gap` → 상위에 `tinto-layout` 추가
- [ ] `height-mode` → 상위 `layout`의 `height`로 처리
- [ ] `scrollable` → CSS `overflow-y: auto` 추가

---

## FAQ

### Q: app-route의 모든 기능을 layout으로 대체할 수 있나요?

A: 대부분 가능합니다. 배경/오버레이/Safe Area는 CSS로 처리하거나 상위 컨테이너에서 처리하세요.

### Q: section의 height-mode="screen" 기능은 어떻게 대체하나요?

A: 상위 `tinto-layout`의 `height="100dvh"`를 사용하세요.

### Q: wrapper는 언제 유지해야 하나요?

A: 배경 이미지나 오버레이 기능이 자주 필요한 경우 wrapper를 유지하되, props는 최소화하여 재설계하는 것을 권장합니다.

### Q: 마이그레이션 시 기존 코드가 깨지나요?

A: 컴포넌트는 deprecated되었지만 여전히 작동합니다. 점진적으로 마이그레이션하세요.

---

## 지원

마이그레이션 중 문제가 발생하면 이슈를 등록하거나 문서를 참고하세요.
