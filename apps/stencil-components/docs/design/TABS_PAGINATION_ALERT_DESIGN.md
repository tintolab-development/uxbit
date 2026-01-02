# Tabs, Pagination, Alert 디자인 가이드

> **디자이너**: UXBIT 디자인 시스템  
> **작성일**: 2025년

---

## 1. Tabs 디자인 토큰

### 1.1 CSS 변수 정의

```css
/* Tabs Root */
--t-tabs-bg: transparent;
--t-tabs-border: 1px solid #e0e0e0;
--t-tabs-radius: 0;

/* Tabs Container */
--t-tabs-container-padding: clamp(8px, 1.5vw, 12px);
--t-tabs-container-gap: clamp(4px, 1vw, 8px);

/* Tab Item */
--t-tab-bg: transparent;
--t-tab-bg-active: #f5f5f5;
--t-tab-bg-hover: #fafafa;
--t-tab-color: #666666;
--t-tab-color-active: #111827;
--t-tab-color-hover: #333333;
--t-tab-padding: clamp(12px, 2.5vw, 16px) clamp(16px, 3vw, 24px);
--t-tab-radius: clamp(6px, 1.5vw, 8px);
--t-tab-font-size: clamp(14px, 2.5vw, 16px);
--t-tab-font-weight: 500;
--t-tab-font-weight-active: 600;
--t-tab-min-height: 44px; /* 터치 타겟 */

/* Tab Underline (variant="underline") */
--t-tab-underline-height: 2px;
--t-tab-underline-color: #111827;
--t-tab-underline-active-color: #005fcc;

/* Tab Pills (variant="pills") */
--t-tab-pills-radius: clamp(20px, 4vw, 24px);
--t-tab-pills-bg-active: #111827;
--t-tab-pills-color-active: #ffffff;

/* Tab Panel */
--t-tab-panel-padding: clamp(16px, 3vw, 24px);
--t-tab-panel-bg: transparent;
```

### 1.2 Variant 스타일

#### default

- 배경색 변화 없음
- 활성 탭만 배경색 변경
- 부드러운 전환 애니메이션

#### underline

- 하단 밑줄로 활성 상태 표시
- 밑줄 애니메이션 (슬라이드 효과)
- 깔끔한 미니멀 스타일

#### pills

- 둥근 모서리 (pill 형태)
- 활성 탭은 배경색 채움
- 모바일 친화적

#### enclosed

- 탭 영역 전체 배경
- 카드 스타일
- 명확한 구분

### 1.3 반응형 디자인

**모바일 (< 768px)**:

- 가로 스크롤 가능
- 탭 최소 너비: 80px
- 폰트 크기: clamp(14px, 2.5vw, 16px)
- 패딩: clamp(12px, 2.5vw, 16px)

**데스크탑 (>= 1920px)**:

- 전체 너비 또는 고정 너비
- 폰트 크기: clamp(16px, 1.5vw, 18px)
- 패딩: clamp(16px, 2vw, 20px)

---

## 2. Pagination 디자인 토큰

### 2.1 CSS 변수 정의

```css
/* Pagination Root */
--t-pagination-bg: transparent;
--t-pagination-gap: clamp(4px, 1vw, 8px);
--t-pagination-align: flex-start;

/* Page Button */
--t-pagination-button-bg: #ffffff;
--t-pagination-button-bg-hover: #f5f5f5;
--t-pagination-button-bg-active: #111827;
--t-pagination-button-color: #333333;
--t-pagination-button-color-hover: #111827;
--t-pagination-button-color-active: #ffffff;
--t-pagination-button-border: 1px solid #e0e0e0;
--t-pagination-button-border-active: 1px solid #111827;
--t-pagination-button-radius: clamp(6px, 1.5vw, 8px);
--t-pagination-button-padding: clamp(8px, 2vw, 12px) clamp(12px, 2.5vw, 16px);
--t-pagination-button-min-size: 44px; /* 터치 타겟 */
--t-pagination-button-font-size: clamp(14px, 2.5vw, 16px);

/* Navigation Buttons (Prev/Next) */
--t-pagination-nav-icon-size: clamp(16px, 3vw, 20px);

/* Ellipsis */
--t-pagination-ellipsis-color: #999999;
--t-pagination-ellipsis-padding: clamp(8px, 2vw, 12px);

/* Total Text */
--t-pagination-total-color: #666666;
--t-pagination-total-font-size: clamp(14px, 2.5vw, 16px);
--t-pagination-total-margin: 0 clamp(12px, 2.5vw, 16px);
```

### 2.2 Variant 스타일

#### default

- 페이지 번호 버튼 표시
- 이전/다음, 첫/마지막 버튼
- 총 페이지 수 표시 (선택적)

#### simple

- 이전/다음 버튼만
- 모바일 최적화
- 간단한 인터페이스

#### compact

- 페이지 번호 축소
- Ellipsis 사용
- 공간 효율적

### 2.3 반응형

**모바일 (< 768px)**:

- simple variant 권장
- 버튼 크기: 최소 44x44px
- 간격: clamp(4px, 1vw, 8px)

**데스크탑 (>= 1920px)**:

- 전체 페이지 번호 표시
- 페이지 크기 선택기
- 빠른 이동 입력 필드

---

## 3. Alert 디자인 토큰

### 3.1 CSS 변수 정의

```css
/* Alert Root */
--t-alert-bg: #ffffff;
--t-alert-border: 1px solid #e0e0e0;
--t-alert-radius: clamp(8px, 2vw, 12px);
--t-alert-padding: clamp(12px, 2.5vw, 16px) clamp(16px, 3vw, 24px);
--t-alert-gap: clamp(12px, 2.5vw, 16px);
--t-alert-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Alert Types */
/* Success */
--t-alert-success-bg: #f0fdf4;
--t-alert-success-border: 1px solid #86efac;
--t-alert-success-color: #166534;
--t-alert-success-icon-color: #22c55e;

/* Error */
--t-alert-error-bg: #fef2f2;
--t-alert-error-border: 1px solid #fca5a5;
--t-alert-error-color: #991b1b;
--t-alert-error-icon-color: #ef4444;

/* Warning */
--t-alert-warning-bg: #fffbeb;
--t-alert-warning-border: 1px solid #fde047;
--t-alert-warning-color: #854d0e;
--t-alert-warning-icon-color: #eab308;

/* Info */
--t-alert-info-bg: #eff6ff;
--t-alert-info-border: 1px solid #93c5fd;
--t-alert-info-color: #1e40af;
--t-alert-info-icon-color: #3b82f6;

/* Alert Icon */
--t-alert-icon-size: clamp(20px, 4vw, 24px);
--t-alert-icon-margin: 0 clamp(12px, 2.5vw, 16px) 0 0;

/* Alert Title */
--t-alert-title-font-size: clamp(16px, 3vw, 18px);
--t-alert-title-font-weight: 600;
--t-alert-title-margin: 0 0 clamp(4px, 1vw, 8px) 0;

/* Alert Content */
--t-alert-content-font-size: clamp(14px, 2.5vw, 16px);
--t-alert-content-line-height: 1.6;
--t-alert-content-color: inherit;

/* Alert Close Button */
--t-alert-close-size: clamp(32px, 6vw, 40px);
--t-alert-close-min-size: 44px; /* 터치 타겟 */
--t-alert-close-color: #999999;
--t-alert-close-color-hover: #333333;
--t-alert-close-bg-hover: rgba(0, 0, 0, 0.05);
--t-alert-close-radius: 50%;
```

### 3.2 Variant 스타일

#### default

- 배경색 + 테두리
- 아이콘 + 텍스트
- 부드러운 색상

#### filled

- 배경색 채움
- 높은 대비
- 강조 필요 시

#### outlined

- 테두리만
- 배경 투명
- 미니멀 스타일

### 3.3 반응형 디자인

**모바일 (< 768px)**:

- 전체 너비
- 패딩: clamp(12px, 2.5vw, 16px)
- 폰트 크기: clamp(14px, 2.5vw, 16px)
- 닫기 버튼: 최소 44x44px

**데스크탑 (>= 1920px)**:

- 최대 너비 제한 (선택적)
- 패딩: clamp(16px, 2vw, 20px)
- 폰트 크기: clamp(15px, 1.5vw, 16px)

---

## 4. 공통 디자인 원칙

### 4.1 색상 대비

- 모든 텍스트는 WCAG AA 이상 (4.5:1)
- 배경과 텍스트 명확한 대비
- 포커스 상태 명확히 표시

### 4.2 애니메이션

- `prefers-reduced-motion` 지원
- 전환 시간: 0.2s ~ 0.3s
- 부드러운 easing (ease, ease-in-out)

### 4.3 터치 타겟

- 모든 인터랙티브 요소: 최소 44x44px
- 모바일에서 hover 대신 active 사용
- 터치 피드백 제공

---

**다음 단계**: 시니어 개발자가 디자인 토큰을 기반으로 구현 시작
