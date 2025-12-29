# UXBIT 컴포넌트 개요

UXBIT Stencil 컴포넌트 라이브러리 전체 개요 및 사용 가이드.

---

## 📦 컴포넌트 목록

### 1. [tinto-button](./components/tinto-button.md)

버튼 컴포넌트. 링크/폼/토글/로딩 모드를 지원합니다.

**주요 기능:**

- Variant/Size 기반 스타일링
- 링크, 폼 제출, 토글 모드
- 로딩 상태 표시
- 타이포그래피 커스터마이징

**사용 시나리오:**

- CTA 버튼
- 폼 제출 버튼
- 토글 버튼
- 로딩 상태가 필요한 버튼

---

### 2. [tinto-image](./components/tinto-image.md)

고성능 이미지 컴포넌트. Lazy loading, placeholder, 애니메이션을 지원합니다.

**주요 기능:**

- Lazy loading (IntersectionObserver)
- Placeholder 지원
- 애니메이션 (spin, float, wobble, pulse)
- 링크/버튼 모드
- 반응형 이미지 (srcset/sizes)

**사용 시나리오:**

- 히어로 이미지
- 갤러리
- 로고/아이콘 (애니메이션)
- 썸네일 링크

---

### 3. [tinto-section](./components/tinto-section.md)

Flex 레이아웃 기반 섹션 컴포넌트.

**주요 기능:**

- Flex 레이아웃
- 높이 모드 (auto/dvh/screen)
- 중앙 정렬
- 스크롤 가능한 섹션

**사용 시나리오:**

- 콘텐츠 섹션
- 풀스크린 섹션
- 중앙 정렬 컨테이너

---

### 4. [tinto-typography](./components/tinto-typography.md)

타이포그래피 컴포넌트. 타이핑 애니메이션을 지원합니다.

**주요 기능:**

- 폰트 토큰 시스템
- 타이핑 애니메이션
- 링크 모드
- 시맨틱 태그 분리

**사용 시나리오:**

- 제목/본문
- 타이핑 효과가 필요한 텍스트
- 링크 텍스트

---

### 5. [tinto-wrapper](./components/tinto-wrapper.md)

Flex 레이아웃 래퍼. 배경 이미지, 오버레이, 데스크탑 오버라이드를 지원합니다.

**주요 기능:**

- Flex 레이아웃
- 배경 이미지
- 오버레이
- 데스크탑 오버라이드 (>=1920px)

**사용 시나리오:**

- 배경 이미지가 있는 섹션
- 오버레이가 필요한 영역
- 반응형 레이아웃

---

### 6. [tinto-app-route](./components/tinto-app-route.md)

고급 레이아웃 컴포넌트. Safe area, Scroll snap, 세밀한 제어를 지원합니다.

**주요 기능:**

- Flex 레이아웃
- Safe area 지원 (모바일 노치)
- Scroll snap
- 세밀한 패딩/마진 제어
- 배경 이미지 + 오버레이

**사용 시나리오:**

- 페이지 레이아웃
- 모바일 앱 스타일 페이지
- 스크롤 스냅이 필요한 페이지

---

## 🎨 디자인 토큰

### 폰트 패밀리

- `system`: 시스템 기본 폰트
- `pretendard`: Pretendard
- `paperlogy`: Paperlogy
- `clash-display`: Clash Display
- `climate-crisis`: Climate Crisis

### 폰트 크기

- `xs`: 0.75rem
- `sm`: 0.875rem
- `md`: 1rem
- `lg`: 1.125rem
- `xl`: 1.25rem
- `xxl`: 1.5rem

### 색상

컴포넌트별로 CSS 변수를 통해 커스터마이징 가능합니다.

---

## 🚀 빠른 시작

### 1. 설치

```bash
npm install @uxbit/stencil-components
```

### 2. 로더 등록

```javascript
import { defineCustomElements } from '@uxbit/stencil-components/loader';

defineCustomElements();
```

### 3. 사용

```html
<tinto-button variant="primary" size="lg"> 시작하기 </tinto-button>

<tinto-image src="hero.jpg" alt="히어로 이미지" ratio="16:9"> </tinto-image>

<tinto-section center max-width="1200px" padding="32px">
  <h1>콘텐츠</h1>
</tinto-section>
```

---

## 📚 컴포넌트 조합 예시

### 히어로 섹션

```html
<tinto-app-route
  height-mode="screen"
  src="hero-bg.jpg"
  overlay="rgba(0,0,0,0.5)"
  direction="column"
  justify="center"
  align="center"
  color="#fff"
  padding="48px"
>
  <tinto-typography variant="h1" font="clash-display" align="center"> 환영합니다 </tinto-typography>

  <tinto-typography variant="p" align="center" style="margin-top: 24px;">
    UXBIT으로 시작하세요
  </tinto-typography>

  <tinto-button variant="primary" size="lg" style="margin-top: 32px;"> 시작하기 </tinto-button>
</tinto-app-route>
```

### 카드 그리드

```html
<tinto-section direction="row" wrap="wrap" gap="24px" max-width="1200px" center padding="32px">
  <tinto-wrapper direction="column" padding="24px" radius="12px" shadow="0 4px 6px rgba(0,0,0,0.1)">
    <tinto-image src="card1.jpg" ratio="16:9" rounded="soft"></tinto-image>
    <tinto-typography variant="h3" style="margin-top: 16px;">카드 제목</tinto-typography>
    <tinto-typography variant="p" style="margin-top: 8px;">카드 내용</tinto-typography>
  </tinto-wrapper>

  <!-- 더 많은 카드... -->
</tinto-section>
```

### 이미지 갤러리

```html
<tinto-section direction="row" wrap="wrap" gap="16px" padding="24px">
  <tinto-image src="image1.jpg" ratio="1:1" rounded="soft" loading="lazy"> </tinto-image>
  <tinto-image src="image2.jpg" ratio="1:1" rounded="soft" loading="lazy"> </tinto-image>
  <!-- 더 많은 이미지... -->
</tinto-section>
```

---

## 🎯 컴포넌트 선택 가이드

### 레이아웃이 필요할 때

- **단순한 섹션**: `tinto-section`
- **배경 이미지/오버레이**: `tinto-wrapper`
- **고급 레이아웃 (Safe area, Scroll snap)**: `tinto-app-route`

### 이미지가 필요할 때

- **일반 이미지**: `tinto-image`
- **애니메이션이 필요한 이미지**: `tinto-image` (animation prop)
- **링크가 있는 이미지**: `tinto-image` (href prop)

### 텍스트가 필요할 때

- **일반 텍스트**: `tinto-typography`
- **타이핑 효과**: `tinto-typography` (rolling prop)
- **링크 텍스트**: `tinto-typography` (href prop)

### 버튼이 필요할 때

- **일반 버튼**: `tinto-button`
- **링크 버튼**: `tinto-button` (href prop)
- **폼 제출**: `tinto-button` (type="submit")
- **토글 버튼**: `tinto-button` (toggle prop)

---

## 🔧 커스터마이징

### CSS 변수

모든 컴포넌트는 CSS 변수를 통해 스타일을 커스터마이징할 수 있습니다.

```css
/* 전역 스타일 */
tinto-button {
  --t-button-bg: #0ea5e9;
  --t-button-fg: #ffffff;
}

tinto-image {
  --ti-radius: 16px;
}
```

### CSS Parts

`::part()` 선택자로 내부 요소 스타일링:

```css
tinto-button::part(button) {
  border-radius: 9999px;
}
```

---

## ♿ 접근성

모든 컴포넌트는 접근성을 고려하여 설계되었습니다:

- ✅ ARIA 속성 지원
- ✅ 키보드 포커스 지원
- ✅ 스크린 리더 대응
- ✅ `prefers-reduced-motion` 고려

---

## 📖 추가 문서

- [컴포넌트 검증 리포트](./COMPONENT_VALIDATION_REPORT.md)
- [개별 컴포넌트 문서](./components/)

---

## 🤝 기여

버그 리포트나 기능 제안은 이슈로 등록해주세요.

---

## 📄 라이선스

MIT
