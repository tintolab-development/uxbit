# Slot과 Overlay 개념 상세 설명

**작성일**: 2025-11-18  
**프로젝트**: uxbit (Stencil Web Components)

---

## 📋 목차

1. [Slot 기본 개념](#slot-기본-개념)
2. [Slot의 종류](#slot의-종류)
3. [Overlay 개념](#overlay-개념)
4. [실제 사용 예제](#실제-사용-예제)
5. [Shadow DOM과의 관계](#shadow-dom과의-관계)

---

## Slot 기본 개념

### Slot이란?

**Slot**은 Web Components의 Shadow DOM에서 **외부에서 컨텐츠를 주입할 수 있는 "구멍"**입니다. 컴포넌트 내부 구조는 캡슐화되어 있지만, 특정 위치에 외부 컨텐츠를 삽입할 수 있게 해줍니다.

### 왜 Slot이 필요한가?

1. **컴포넌트 재사용성**: 같은 구조를 유지하면서 다양한 컨텐츠를 넣을 수 있음
2. **컴포넌트 확장성**: 사용자가 원하는 컨텐츠를 자유롭게 추가 가능
3. **Shadow DOM 캡슐화**: 내부 구조는 숨기면서 필요한 부분만 외부에서 제어 가능

---

## Slot의 종류

### 1. 기본 Slot (Default Slot)

**이름 없는 slot**으로, 컴포넌트 태그 사이에 넣은 모든 컨텐츠가 들어갑니다.

```tsx
// 컴포넌트 내부
<slot></slot>

// 사용 예시
<tinto-section>
  <p>이 텍스트가 slot에 들어갑니다</p>
  <div>여러 요소도 가능합니다</div>
</tinto-section>
```

**실제 코드 예시** (`tinto-section`):

```tsx
// src/components/section/section.tsx
render() {
  return (
    <section part="root" class="tinto-section">
      <slot></slot>  {/* 여기에 외부 컨텐츠가 들어감 */}
    </section>
  );
}
```

### 2. Named Slot (이름 있는 Slot)

**특정 이름을 가진 slot**으로, `slot="이름"` 속성을 가진 요소만 해당 위치에 들어갑니다.

```tsx
// 컴포넌트 내부
<slot name="prefix"></slot>
<slot></slot>  {/* 기본 컨텐츠 */}
<slot name="suffix"></slot>

// 사용 예시
<tinto-button>
  <span slot="prefix">🔥</span>
  클릭하세요
  <span slot="suffix">→</span>
</tinto-button>
```

**실제 코드 예시** (`tinto-button`):

```tsx
// src/components/button/button.tsx
render() {
  return (
    <button class="tinto-button">
      <span class="prefix" part="prefix">
        <slot name="prefix" />  {/* slot="prefix" 요소가 여기 들어감 */}
      </span>

      <span class="content" part="label">
        <span class="label">
          {labelText || <slot />}  {/* 기본 컨텐츠 */}
        </span>
      </span>

      <span class="suffix" part="suffix">
        <slot name="suffix" />  {/* slot="suffix" 요소가 여기 들어감 */}
      </span>
    </button>
  );
}
```

### 3. Overlay Slot (오버레이 슬롯)

**이미지나 컨테이너 위에 배치되는 특수한 slot**입니다. 주로 이미지 위에 텍스트, 버튼, 배지 등을 올릴 때 사용합니다.

**실제 코드 예시** (`tinto-image`):

```tsx
// src/components/image/image.tsx
render() {
  const frame = (
    <div part="frame" class="ti-frame">
      <span part="spacer"></span>
      <div part="layer">
        <img part="placeholder" />
        <img part="img" />
      </div>
      <slot name="overlay"></slot>  {/* 이미지 위에 배치되는 컨텐츠 */}
    </div>
  );
  // ...
}
```

**CSS 스타일링**:

```css
/* src/components/image/image.css */
/* slot overlay content fills frame area by default */
::slotted([slot='overlay']) {
  position: absolute;
  inset: 0; /* 전체 영역을 덮음 */
}
```

**사용 예시**:

```tsx
<tinto-image src="https://example.com/image.jpg" ratio="16:9" width="300px">
  {/* overlay slot에 들어가는 컨텐츠 */}
  <div
    slot="overlay"
    style={{
      position: 'absolute',
      right: '1rem',
      bottom: '1rem',
      padding: '0.25rem 0.5rem',
      background: 'rgba(0, 0, 0, 0.6)',
      color: '#fff',
      borderRadius: '999px',
    }}
  >
    NEW
  </div>
</tinto-image>
```

---

## Overlay 개념

프로젝트에서 **Overlay**는 두 가지 의미로 사용됩니다:

### 1. CSS Overlay (배경 오버레이) - `tinto-wrapper`

**배경 이미지나 색상 위에 반투명 레이어를 추가**하는 기능입니다. 주로 이미지 위에 텍스트 가독성을 높이거나 시각적 효과를 주기 위해 사용합니다.

**실제 코드 예시** (`tinto-wrapper`):

```tsx
// src/components/wrapper/wrapper.tsx
@Prop({ reflect: true }) overlay?: string; // rgba/hex-with-alpha 권장
@Prop({ reflect: true, attribute: 'overlay-opacity' }) overlayOpacity?: number;

render() {
  const styleVars = {
    '--tw-overlay': this.overlay,
    '--tw-overlay-opacity': this.overlayOpacity ?? 1,
  };

  return (
    <div part="root" style={styleVars}>
      <div part="inner">
        <slot></slot>
      </div>
    </div>
  );
}
```

**CSS 구현**:

```css
/* src/components/wrapper/wrapper.css */
.tw-root::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: var(--tw-overlay, transparent);
  opacity: var(--tw-overlay-opacity, 0);
}
```

**사용 예시**:

```html
<tinto-wrapper src="https://example.com/bg.jpg" overlay="rgba(0, 0, 0, 0.5)" overlay-opacity="0.8">
  <h1>오버레이 위의 텍스트</h1>
</tinto-wrapper>
```

**시각적 구조**:

```
┌─────────────────────────┐
│  배경 이미지 (src)        │
│  ┌───────────────────┐  │
│  │ Overlay 레이어     │  │ ← overlay prop으로 추가
│  │ (반투명 색상)       │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Slot 컨텐츠        │  │ ← <slot></slot>
│  │ (텍스트, 버튼 등)   │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

### 2. Slot Overlay (슬롯 오버레이) - `tinto-image`

**이미지 위에 배치되는 슬롯 컨텐츠**입니다. 이미지와 독립적으로 배치되며, 사용자가 원하는 컨텐츠를 자유롭게 추가할 수 있습니다.

**차이점**:

| 구분       | CSS Overlay (wrapper) | Slot Overlay (image)  |
| ---------- | --------------------- | --------------------- |
| **위치**   | CSS로 자동 배치       | Slot으로 수동 배치    |
| **컨텐츠** | 색상/그라디언트만     | 자유로운 HTML 요소    |
| **제어**   | Props로 제어          | Slot 컨텐츠로 제어    |
| **용도**   | 배경 효과             | 배지, 버튼, 텍스트 등 |

---

## 실제 사용 예제

### 예제 1: Button의 Named Slots

```tsx
// Storybook 예제
<tinto-button label="다운로드">
  <span slot="prefix">📥</span>
  <span slot="suffix">→</span>
</tinto-button>
```

**렌더링 결과**:

```
┌─────────────────────┐
│ [📥] 다운로드 [→]   │
└─────────────────────┘
  ↑      ↑      ↑
prefix  label  suffix
```

### 예제 2: Image의 Overlay Slot

```tsx
// Storybook 예제
<tinto-image src="https://picsum.photos/800/450" ratio="16:9" width="300px">
  <div
    slot="overlay"
    style={{
      position: 'absolute',
      right: '1rem',
      bottom: '1rem',
      background: 'rgba(0, 0, 0, 0.6)',
      color: '#fff',
      padding: '0.5rem',
      borderRadius: '8px',
    }}
  >
    <span>NEW</span>
    <button>구매하기</button>
  </div>
</tinto-image>
```

**렌더링 결과**:

```
┌──────────────────────┐
│                      │
│     이미지 영역       │
│                      │
│              ┌─────┐ │
│              │ NEW │ │ ← overlay slot
│              │구매 │ │
│              └─────┘ │
└──────────────────────┘
```

### 예제 3: Wrapper의 CSS Overlay

```tsx
<tinto-wrapper
  src="https://example.com/hero-bg.jpg"
  bg-size="cover"
  overlay="linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
  overlay-opacity="1"
  padding="4rem 2rem"
>
  <tinto-typography variant="h1" color="#fff">
    Hero Title
  </tinto-typography>
  <tinto-button variant="primary">시작하기</tinto-button>
</tinto-wrapper>
```

**렌더링 결과**:

```
┌─────────────────────────┐
│  배경 이미지              │
│  ┌───────────────────┐  │
│  │ 그라디언트 오버레이  │  │ ← CSS overlay
│  │                     │  │
│  │  Hero Title         │  │ ← Slot 컨텐츠
│  │  [시작하기]         │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## Shadow DOM과의 관계

### Shadow DOM 캡슐화

Web Components는 **Shadow DOM**을 사용하여 스타일과 구조를 캡슐화합니다. Slot은 이 캡슐화된 영역에 외부 컨텐츠를 주입하는 유일한 방법입니다.

```
┌─────────────────────────────────┐
│  Light DOM (외부)                │
│  <tinto-button>                  │
│    <span slot="prefix">🔥</span> │ ← 외부 컨텐츠
│  </tinto-button>                 │
└─────────────────────────────────┘
           │
           │ Slot을 통해 주입
           ▼
┌─────────────────────────────────┐
│  Shadow DOM (내부, 캡슐화됨)      │
│  ┌───────────────────────────┐  │
│  │ <button>                  │  │
│  │   <slot name="prefix">    │  │ ← 🔥가 여기 들어감
│  │   <slot>                  │  │
│  │   <slot name="suffix">    │  │
│  │ </button>                 │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Slot의 동작 원리

1. **외부 컨텐츠**는 Light DOM에 존재
2. **Slot 요소**는 Shadow DOM에 존재
3. **렌더링 시** 외부 컨텐츠가 Slot 위치에 **프로젝션(projection)**됨
4. **스타일**은 Shadow DOM의 CSS가 적용되지만, Slot 컨텐츠는 외부 스타일도 적용 가능

---

## 주요 특징 정리

### Slot의 특징

1. ✅ **컨텐츠 주입**: 외부에서 컴포넌트 내부에 컨텐츠 주입 가능
2. ✅ **다중 슬롯**: 여러 개의 named slot 사용 가능
3. ✅ **기본 컨텐츠**: Slot에 컨텐츠가 없을 때 표시할 기본값 설정 가능
4. ✅ **스타일 제어**: `::slotted()` 선택자로 Slot 컨텐츠 스타일링 가능

### Overlay의 특징

1. **CSS Overlay** (wrapper):
   - Props로 간단하게 제어
   - 색상/그라디언트만 가능
   - 자동으로 배경 위에 배치

2. **Slot Overlay** (image):
   - 자유로운 HTML 컨텐츠 가능
   - 위치와 스타일 완전 제어
   - 복잡한 UI 요소 배치 가능

---

## 실전 팁

### 1. Slot 컨텐츠 스타일링

```css
/* 컴포넌트 내부 CSS */
::slotted([slot='overlay']) {
  position: absolute;
  inset: 0;
  z-index: 10;
}

/* 특정 요소만 선택 */
::slotted([slot='overlay'] button) {
  background: #000;
  color: #fff;
}
```

### 2. Slot 기본값 설정

```tsx
<slot name="prefix">
  {/* 기본값: prefix가 없을 때 표시 */}
  <span>기본 아이콘</span>
</slot>
```

### 3. Overlay와 Slot 조합

```tsx
<tinto-wrapper
  src="bg.jpg"
  overlay="rgba(0,0,0,0.5)"  {/* CSS Overlay */}
>
  <tinto-image src="hero.jpg">
    <div slot="overlay">      {/* Slot Overlay */}
      <h1>Title</h1>
    </div>
  </tinto-image>
</tinto-wrapper>
```

---

## 결론

- **Slot**: 외부 컨텐츠를 컴포넌트 내부에 주입하는 메커니즘
- **Overlay**:
  - CSS Overlay: 배경 위 반투명 레이어 (wrapper)
  - Slot Overlay: 이미지 위 자유로운 컨텐츠 (image)

두 개념을 적절히 조합하면 **유연하고 재사용 가능한 컴포넌트**를 만들 수 있습니다.

---

**작성**: AI Assistant  
**최종 업데이트**: 2025-11-18
