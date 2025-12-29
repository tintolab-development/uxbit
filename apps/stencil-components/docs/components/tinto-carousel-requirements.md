# tinto-carousel 컴포넌트 요구사항 정의서

**작성일**: 2024년  
**상태**: 기획/디자인 협의 필요  
**목적**: 터치 슬라이드가 가능한 Carousel 컴포넌트 개발

---

## 📋 컴포넌트 개요

### 기본 개념

- **컴포넌트명**: `tinto-carousel`
- **용도**: 이미지, 카드, 콘텐츠를 슬라이드 형태로 표시
- **주요 기능**: 터치/스와이프 슬라이드, 네비게이션 버튼 (옵션)

### 기존 컴포넌트 구조 준수

- Stencil.js 기반 Web Component
- Shadow DOM 사용
- TypeScript 타입 안정성
- CSS 변수 기반 스타일링
- 반응형 디자인 (모바일 퍼스트)

---

## 🎯 핵심 요구사항

### 필수 기능 (Must Have)

1. **터치/스와이프 슬라이드**
   - 모바일에서 터치로 좌우 슬라이드
   - 데스크탑에서 마우스 드래그 지원
   - 부드러운 애니메이션 전환

2. **슬롯 기반 콘텐츠**
   - `<tinto-carousel>` 내부에 슬라이드 아이템 배치
   - 각 아이템은 독립적인 콘텐츠 (이미지, 카드, 텍스트 등)

3. **반응형 동작**
   - 모바일: 한 번에 1개 슬라이드
   - 데스크탑: 옵션으로 여러 개 표시 가능

4. **접근성 (A11y)**
   - 키보드 네비게이션 (좌우 화살표)
   - ARIA 속성 (role, aria-label)
   - 스크린 리더 지원

### 선택 기능 (Should Have)

1. **네비게이션 버튼** (옵션)
   - 이전/다음 버튼 표시 여부
   - 버튼 위치 커스터마이징
   - 버튼 스타일 커스터마이징

2. **인디케이터** (옵션)
   - 현재 슬라이드 위치 표시 (점/바)
   - 클릭으로 특정 슬라이드 이동

3. **자동 재생** (옵션)
   - 일정 시간마다 자동 슬라이드
   - 호버 시 일시정지

4. **무한 루프** (옵션)
   - 마지막 슬라이드에서 첫 슬라이드로 순환

---

## 📐 디자인 요구사항 (디자이너 협의 필요)

### 1. 레이아웃

**질문 1**: 슬라이드 표시 방식

- [ ] 한 번에 1개만 표시 (기본)
- [ ] 한 번에 여러 개 표시 (2개, 3개 등)
- [ ] 부분 표시 (다음 슬라이드 일부 보이기)

**질문 2**: 슬라이드 간격

- [ ] 간격 없음 (0)
- [ ] 작은 간격 (8px, 16px)
- [ ] 큰 간격 (24px, 32px)
- [ ] 커스터마이징 가능

### 2. 네비게이션 버튼

**질문 3**: 버튼 위치

- [ ] 좌우 양쪽 (기본)
- [ ] 슬라이드 위에 오버레이
- [ ] 슬라이드 아래
- [ ] 커스터마이징 가능

**질문 4**: 버튼 스타일

- [ ] 원형 아이콘 버튼
- [ ] 화살표 아이콘
- [ ] 텍스트 버튼 (이전/다음)
- [ ] 커스터마이징 가능

**질문 5**: 버튼 표시 조건

- [ ] 항상 표시
- [ ] 호버 시에만 표시
- [ ] 첫/마지막 슬라이드에서 숨김
- [ ] 무한 루프일 때 항상 표시

### 3. 인디케이터

**질문 6**: 인디케이터 타입

- [ ] 점 (dot) 형태
- [ ] 바 (bar) 형태
- [ ] 숫자 (1/5 형태)
- [ ] 커스터마이징 가능

**질문 7**: 인디케이터 위치

- [ ] 슬라이드 아래 중앙
- [ ] 슬라이드 위 오버레이
- [ ] 좌우 양쪽
- [ ] 커스터마이징 가능

### 4. 애니메이션

**질문 8**: 전환 효과

- [ ] 슬라이드 (기본)
- [ ] 페이드
- [ ] 커스터마이징 가능

**질문 9**: 전환 속도

- [ ] 빠름 (200ms)
- [ ] 보통 (300ms)
- [ ] 느림 (500ms)
- [ ] 커스터마이징 가능

### 5. 반응형

**질문 10**: 데스크탑 동작

- [ ] 모바일과 동일 (1개씩)
- [ ] 여러 개 표시 (2개, 3개)
- [ ] 브레이크포인트별 다르게

---

## 🔧 기술적 요구사항 (개발자 협의 필요)

### Props 설계

```typescript
// 필수 Props
- slides?: number; // 슬라이드 개수 (자동 감지 또는 수동 지정)
- current?: number; // 현재 슬라이드 인덱스

// 네비게이션 Props
- showNavigation?: boolean; // 네비게이션 버튼 표시
- navigationPosition?: 'inside' | 'outside' | 'overlay';
- navigationStyle?: 'circle' | 'arrow' | 'text';

// 인디케이터 Props
- showIndicator?: boolean; // 인디케이터 표시
- indicatorType?: 'dot' | 'bar' | 'number';
- indicatorPosition?: 'bottom' | 'top' | 'left' | 'right';

// 동작 Props
- autoplay?: boolean; // 자동 재생
- autoplayInterval?: number; // 자동 재생 간격 (ms)
- loop?: boolean; // 무한 루프
- slidesPerView?: number; // 한 번에 표시할 슬라이드 개수
- spaceBetween?: string; // 슬라이드 간격

// 애니메이션 Props
- transition?: 'slide' | 'fade';
- transitionDuration?: number; // 전환 시간 (ms)

// 터치 Props
- touchEnabled?: boolean; // 터치 활성화
- swipeThreshold?: number; // 스와이프 임계값 (px)
```

### 이벤트

```typescript
// 커스텀 이벤트
- tintoSlideChange: { current: number, previous: number }
- tintoSlideStart: { index: number }
- tintoSlideEnd: { index: number }
```

### CSS 변수 (스타일 커스터마이징)

```css
--tc-slide-gap: 0;
--tc-nav-button-size: 44px;
--tc-nav-button-color: #fff;
--tc-indicator-size: 8px;
--tc-indicator-color: rgba(255, 255, 255, 0.5);
--tc-indicator-active-color: #fff;
--tc-transition-duration: 300ms;
```

### 접근성

- `role="region"` 및 `aria-label` 속성
- 키보드 네비게이션 (좌우 화살표, Home, End)
- `aria-live="polite"` (슬라이드 변경 시)
- 포커스 관리

---

## 📝 사용 예시 (예상)

### 기본 사용

```html
<tinto-carousel>
  <tinto-image src="image1.jpg"></tinto-image>
  <tinto-image src="image2.jpg"></tinto-image>
  <tinto-image src="image3.jpg"></tinto-image>
</tinto-carousel>
```

### 네비게이션 버튼 포함

```html
<tinto-carousel show-navigation navigation-position="overlay" show-indicator indicator-type="dot">
  <tinto-wrapper>Slide 1</tinto-wrapper>
  <tinto-wrapper>Slide 2</tinto-wrapper>
  <tinto-wrapper>Slide 3</tinto-wrapper>
</tinto-carousel>
```

### 자동 재생

```html
<tinto-carousel autoplay autoplay-interval="3000" loop show-indicator>
  <!-- slides -->
</tinto-carousel>
```

---

## ❓ 협의 필요 사항

### 기획자 협의

1. **사용 시나리오**
   - 어떤 콘텐츠에 사용할 예정인가?
   - 이미지 갤러리? 제품 카드? 배너?

2. **우선순위**
   - 필수 기능 vs 선택 기능
   - MVP 범위

3. **성능 요구사항**
   - 최대 슬라이드 개수
   - 이미지 로딩 전략

### 디자이너 협의

1. **시각적 디자인**
   - 버튼 스타일
   - 인디케이터 디자인
   - 애니메이션 효과

2. **레이아웃**
   - 슬라이드 표시 방식
   - 간격 및 여백

3. **반응형**
   - 모바일/데스크탑 차이점

---

## ✅ 다음 단계

1. **기획자/디자이너 리뷰**
   - 위 질문들에 대한 답변 수집
   - 디자인 시안 확인

2. **요구사항 확정**
   - 최종 Props 목록 확정
   - 이벤트 정의 확정

3. **개발 시작**
   - 컴포넌트 구조 설계
   - 구현 시작

---

**작성자**: 개발팀  
**리뷰 필요**: 기획자, 디자이너  
**승인 필요**: PM
