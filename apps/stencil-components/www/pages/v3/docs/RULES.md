# 개발 규칙 (Development Rules)

## HTML 구조 규칙

### 1. tinto-app-route 위치 규칙

**`tinto-app-route`는 항상 `body` 태그 하위의 최상단 래퍼여야 합니다.**

#### 단일 화면 앱 (올바른 예시):

```html
<body>
  <tinto-app-route direction="column" safe-area="true" min-height="100vh">
    <!-- 화면 내용 -->
  </tinto-app-route>
</body>
```

#### 싱글페이지 앱 (여러 화면 전환):

싱글페이지 앱에서 여러 화면을 전환하는 경우, 각 화면의 `tinto-app-route`는 해당 화면 컨테이너의 직접 자식이어야 합니다:

```html
<body>
  <!-- 화면 컨테이너 (선택적, 화면 전환용) -->
  <div id="app">
    <!-- 각 화면의 tinto-app-route는 화면 div의 직접 자식 -->
    <div id="home-screen" class="screen active">
      <tinto-app-route direction="column" safe-area="true" min-height="100vh">
        <!-- 화면 내용 -->
      </tinto-app-route>
    </div>

    <div id="search-screen" class="screen">
      <tinto-app-route direction="column" safe-area="true" min-height="100vh">
        <!-- 화면 내용 -->
      </tinto-app-route>
    </div>
  </div>
</body>
```

#### 잘못된 예시:

```html
<!-- ❌ tinto-app-route와 화면 div 사이에 다른 요소가 있음 -->
<body>
  <div id="app">
    <div id="home-screen" class="screen">
      <div class="wrapper">
        <tinto-app-route>...</tinto-app-route>
      </div>
    </div>
  </div>
</body>

<!-- ❌ 중첩된 구조 -->
<body>
  <div class="container">
    <div id="app">
      <tinto-app-route>...</tinto-app-route>
    </div>
  </div>
</body>
```

**핵심 규칙:**

- `tinto-app-route`는 항상 해당 화면/페이지의 최상단 래퍼여야 함
- `tinto-app-route`와 부모 요소 사이에 다른 레이아웃 요소가 있어서는 안 됨
- 화면 전환을 위한 wrapper div는 허용되지만, `tinto-app-route`는 화면 div의 직접 자식이어야 함

### 2. Custom Element 하드코딩 규칙

**모든 custom-element는 HTML에 직접 하드코딩되어야 합니다.**

#### 올바른 예시:

```html
<tinto-search-bar id="home-search-bar" placeholder="상품을 검색하세요" size="md"></tinto-search-bar>

<tinto-carousel id="home-carousel" autoplay="true" interval="5000"></tinto-carousel>

<tinto-navigation id="home-navigation" fixed="true" active-id="home"></tinto-navigation>
```

#### 잘못된 예시:

```javascript
// ❌ JavaScript로 동적 생성 금지
const searchBar = document.createElement('tinto-search-bar');
searchBar.placeholder = '상품을 검색하세요';
document.body.appendChild(searchBar);

// ❌ innerHTML로 동적 삽입 금지
container.innerHTML = '<tinto-search-bar></tinto-search-bar>';
```

**예외 사항:**

- 슬롯 콘텐츠(slotted content)는 JavaScript로 동적 생성 가능
- 예: `tinto-carousel`의 슬라이드 아이템은 JavaScript로 추가 가능

```javascript
// ✅ 슬롯 콘텐츠는 동적 생성 가능
const slide = document.createElement('div');
slide.setAttribute('slot', 'slide');
carousel.appendChild(slide);
```

### 3. 비즈니스 로직 분리 규칙

**모든 비즈니스 로직은 JavaScript 파일로 분리하여 import해서 제어해야 합니다.**

#### 올바른 예시:

**index.html:**

```html
<body>
  <tinto-app-route direction="column" safe-area="true" min-height="100vh">
    <tinto-search-bar id="home-search-bar" placeholder="상품을 검색하세요"></tinto-search-bar>
  </tinto-app-route>

  <script type="module" src="/pages/v3/app.js"></script>
</body>
```

**app.js:**

```javascript
// ✅ 비즈니스 로직은 별도 파일에서 관리
import { getHomeBanners, searchProducts } from './mock-data.js';

class App {
  constructor() {
    this.setupEventListeners();
    this.loadHomeScreen();
  }

  setupEventListeners() {
    const searchBar = document.getElementById('home-search-bar');
    searchBar?.addEventListener('tintoSearchClick', () => {
      this.navigateToSearch();
    });
  }

  async loadHomeScreen() {
    const response = await getHomeBanners();
    // 비즈니스 로직 처리
  }
}

new App();
```

#### 잘못된 예시:

```html
<!-- ❌ 인라인 스크립트에 비즈니스 로직 포함 -->
<body>
  <tinto-search-bar id="home-search-bar"></tinto-search-bar>

  <script>
    // ❌ HTML에 비즈니스 로직 포함 금지
    const searchBar = document.getElementById('home-search-bar');
    searchBar.addEventListener('tintoSearchClick', async () => {
      const response = await fetch('/api/banners');
      // ...
    });
  </script>
</body>
```

## 구조 요약

### 권장 구조:

```
body
└── tinto-app-route (최상단 래퍼)
    ├── tinto-section
    │   ├── tinto-search-bar (하드코딩)
    │   └── tinto-carousel (하드코딩)
    └── tinto-navigation (하드코딩)
└── <script type="module" src="app.js"> (비즈니스 로직)
```

### 파일 구조:

```
pages/v3/
├── index.html          # HTML 구조만 (custom-element 하드코딩)
├── app.js              # 비즈니스 로직 (import 사용)
└── mock-data.js        # 데이터 및 API 함수
```

## 체크리스트

HTML 파일 작성 시 확인사항:

- [ ] `tinto-app-route`가 `body`의 직접 자식인가?
- [ ] 모든 custom-element가 HTML에 하드코딩되어 있는가?
- [ ] 비즈니스 로직이 별도 JS 파일로 분리되어 있는가?
- [ ] 인라인 스크립트에 비즈니스 로직이 없는가?

## 예외 및 특수 케이스

### 1. 슬롯 콘텐츠

슬롯에 들어가는 콘텐츠는 JavaScript로 동적 생성 가능:

- `tinto-carousel`의 슬라이드 아이템
- `tinto-card`의 슬롯 콘텐츠
- `tinto-modal`의 모달 내용

### 2. 싱글페이지 앱 구조

여러 화면을 전환하는 싱글페이지 앱의 경우, 각 화면마다 `tinto-app-route`를 사용할 수 있습니다:

```html
<body>
  <!-- 화면 컨테이너 (선택적) -->
  <div id="app">
    <!-- 홈 화면 -->
    <div id="home-screen" class="screen active">
      <tinto-app-route direction="column" safe-area="true" min-height="100vh">
        <!-- 화면 내용 -->
      </tinto-app-route>
    </div>

    <!-- 검색 화면 -->
    <div id="search-screen" class="screen">
      <tinto-app-route direction="column" safe-area="true" min-height="100vh">
        <!-- 화면 내용 -->
      </tinto-app-route>
    </div>
  </div>

  <!-- 전역 컴포넌트 -->
  <tinto-modal id="product-modal"></tinto-modal>
  <tinto-toast id="toast"></tinto-toast>

  <!-- 비즈니스 로직 -->
  <script type="module" src="/pages/v3/app.js"></script>
</body>
```

**중요:** 각 화면의 `tinto-app-route`는 해당 화면 div의 직접 자식이어야 하며, 화면 div와 `tinto-app-route` 사이에 다른 요소가 있어서는 안 됩니다.

### 3. 전역 컴포넌트

모달, 토스트 등 전역으로 사용되는 컴포넌트는 body 직하위에 배치:

```html
<body>
  <div id="app">
    <!-- 화면들 -->
  </div>

  <!-- 전역 컴포넌트 -->
  <tinto-modal id="product-modal"></tinto-modal>
  <tinto-toast id="toast"></tinto-toast>
</body>
```

---

**마지막 업데이트**: 2025-12-29
