/* eslint-env browser */
// UI 컨트롤러 - 화면 전환 및 UI 업데이트
import app from './app.js';

class UIController {
  constructor() {
    this.screens = {
      HOME_001: document.getElementById('home-screen'),
      SEARCH_002: document.getElementById('search-screen'),
      PROMO_BANNER_003: document.getElementById('banner-detail-screen'),
      ERROR_404_004: document.getElementById('error-screen'),
    };

    this.elements = {
      // 홈 화면
      homeSearchBar: document.getElementById('home-search-bar'),
      homeCarousel: document.getElementById('home-carousel'),
      homeLoading: document.getElementById('home-loading'),

      // 검색 화면
      searchInput: document.getElementById('search-input'),
      searchLoading: document.getElementById('search-loading'),
      searchResults: document.getElementById('search-results'),
      searchEmpty: document.getElementById('search-empty'),

      // 배너 상세
      bannerBackBtn: document.getElementById('banner-back-btn'),
      bannerDetailImage: document.getElementById('banner-detail-image'),
      bannerDetailTitle: document.getElementById('banner-detail-title'),
      bannerDetailDescription: document.getElementById('banner-detail-description'),
      bannerCtaBtn: document.getElementById('banner-cta-btn'),

      // 에러 화면
      errorHomeBtn: document.getElementById('error-home-btn'),

      // 모달
      productModal: document.getElementById('product-modal'),
      productDetailContent: document.getElementById('product-detail-content'),

      // 토스트
      toast: document.getElementById('toast'),
    };

    this.setupEventListeners();
    this.setupScreenChangeListener();
  }

  setupEventListeners() {
    // 홈 화면 검색바 클릭
    this.elements.homeSearchBar?.addEventListener('tintoSearchClick', () => {
      document.dispatchEvent(new CustomEvent('searchBarClick'));
    });

    // 검색 입력
    this.elements.searchInput?.addEventListener('tintoInput', (e) => {
      document.dispatchEvent(
        new CustomEvent('searchInput', {
          detail: { query: e.detail.value },
        }),
      );
    });

    // 검색 제출
    this.elements.searchInput?.addEventListener('tintoSubmit', (e) => {
      document.dispatchEvent(
        new CustomEvent('searchSubmit', {
          detail: { query: e.detail.value },
        }),
      );
    });

    // 배너 뒤로가기
    this.elements.bannerBackBtn?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('backClick'));
    });

    // 에러 화면 홈으로 가기
    this.elements.errorHomeBtn?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('backClick'));
    });

    // 모달 닫기
    this.elements.productModal?.addEventListener('tintoClose', () => {
      document.dispatchEvent(new CustomEvent('modalClose'));
    });
  }

  setupScreenChangeListener() {
    document.addEventListener('screenChange', (e) => {
      const { screen, state } = e.detail;
      this.showScreen(screen);
      this.updateUI(screen, state);
    });
  }

  showScreen(screenId) {
    // 모든 화면 숨기기
    Object.values(this.screens).forEach((screen) => {
      if (screen) {
        screen.classList.remove('active');
      }
    });

    // 선택된 화면 표시
    const targetScreen = this.screens[screenId];
    if (targetScreen) {
      targetScreen.classList.add('active');
    }
  }

  updateUI(screen, state) {
    switch (screen) {
      case 'HOME_001':
        this.updateHomeScreen(state);
        break;
      case 'SEARCH_002':
        this.updateSearchScreen(state);
        break;
      case 'PROMO_BANNER_003':
        this.updateBannerDetailScreen(state);
        break;
      case 'ERROR_404_004':
        // 에러 화면은 정적이므로 업데이트 불필요
        break;
    }
  }

  updateHomeScreen(state) {
    // 로딩 상태
    if (this.elements.homeLoading) {
      this.elements.homeLoading.visible = state.isLoading;
    }

    // 배너 데이터
    if (this.elements.homeCarousel && state.banners.length > 0 && !state.isLoading) {
      // 기존 슬라이드 제거
      const existingSlides = Array.from(this.elements.homeCarousel.children).filter(
        (child) => child.getAttribute('slot') === 'slide',
      );
      existingSlides.forEach((slide) => slide.remove());

      // 새 슬라이드 추가
      state.banners.forEach((banner) => {
        const slide = document.createElement('div');
        slide.setAttribute('slot', 'slide');
        slide.style.cursor = 'pointer';
        slide.style.width = '100%';
        slide.style.display = 'block';

        const img = document.createElement('tinto-image');
        img.src = banner.image;
        img.alt = banner.title;
        img.style.width = '100%';
        img.style.aspectRatio = '16/9';
        img.style.objectFit = 'cover';
        img.style.display = 'block';

        slide.appendChild(img);
        slide.addEventListener('click', () => {
          document.dispatchEvent(
            new CustomEvent('bannerClick', {
              detail: { bannerId: banner.id },
            }),
          );
        });

        this.elements.homeCarousel.appendChild(slide);
      });
    }
  }

  updateSearchScreen(state) {
    // 로딩 상태
    if (this.elements.searchLoading) {
      this.elements.searchLoading.visible = state.isLoading;
    }

    // 검색 결과
    if (this.elements.searchResults) {
      this.elements.searchResults.innerHTML = '';

      if (state.searchResults.length > 0) {
        state.searchResults.forEach((product) => {
          const card = document.createElement('tinto-card');
          card.style.cursor = 'pointer';
          card.style.marginBottom = '12px';

          // 이미지
          const img = document.createElement('tinto-image');
          img.slot = 'image';
          img.src = product.image;
          img.alt = product.title;
          img.style.width = '100%';
          img.style.aspectRatio = '1/1';
          img.style.objectFit = 'cover';

          // 제목
          const title = document.createElement('tinto-typography');
          title.slot = 'title';
          title.variant = 'h3';
          title.fontSize = 'md';
          title.textContent = product.title;

          // 설명
          const description = document.createElement('tinto-typography');
          description.slot = 'description';
          description.variant = 'p';
          description.fontSize = 'sm';
          description.color = '#666';
          description.textContent = product.description;

          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(description);

          card.addEventListener('click', () => {
            document.dispatchEvent(
              new CustomEvent('searchResultClick', {
                detail: { productId: product.id },
              }),
            );
          });

          this.elements.searchResults.appendChild(card);
        });

        if (this.elements.searchEmpty) {
          this.elements.searchEmpty.style.display = 'none';
        }
      } else if (!state.isLoading && state.searchQuery.length >= 2) {
        if (this.elements.searchEmpty) {
          this.elements.searchEmpty.style.display = 'block';
        }
      }
    }
  }

  updateBannerDetailScreen(state) {
    if (!state.selectedBanner) return;

    const banner = state.selectedBanner;

    // 이미지
    if (this.elements.bannerDetailImage) {
      this.elements.bannerDetailImage.src = banner.image;
      this.elements.bannerDetailImage.alt = banner.title;
    }

    // 제목
    if (this.elements.bannerDetailTitle) {
      this.elements.bannerDetailTitle.textContent = banner.title;
    }

    // 설명
    if (this.elements.bannerDetailDescription) {
      this.elements.bannerDetailDescription.textContent = banner.description;
    }

    // CTA 버튼
    if (this.elements.bannerCtaBtn) {
      this.elements.bannerCtaBtn.textContent = banner.ctaText;
      this.elements.bannerCtaBtn.onclick = () => {
        document.dispatchEvent(
          new CustomEvent('ctaClick', {
            detail: {
              bannerId: banner.id,
              type: banner.type,
              link: banner.ctaLink,
            },
          }),
        );
      };
    }
  }

  showProductModal(product) {
    if (!this.elements.productModal || !this.elements.productDetailContent) return;

    // 상품 상세 내용 구성
    this.elements.productDetailContent.innerHTML = '';

    // 이미지
    const img = document.createElement('tinto-image');
    img.src = product.images[0];
    img.alt = product.title;
    img.style.width = '100%';
    img.style.aspectRatio = '4/3';
    img.style.objectFit = 'cover';
    img.style.marginBottom = '16px';

    // 제목
    const title = document.createElement('tinto-typography');
    title.variant = 'h2';
    title.fontSize = 'lg';
    title.fontWeight = '700';
    title.textContent = product.title;
    title.style.marginBottom = '12px';

    // 설명
    const description = document.createElement('tinto-typography');
    description.variant = 'p';
    description.fontSize = 'md';
    description.color = '#666';
    description.textContent = product.description;
    description.style.marginBottom = '16px';

    // 가격
    const priceSection = document.createElement('tinto-section');
    priceSection.direction = 'row';
    priceSection.align = 'center';
    priceSection.gap = '8px';
    priceSection.style.marginBottom = '16px';

    if (product.discountPrice) {
      // 원가 (취소선)
      const originalPrice = document.createElement('tinto-typography');
      originalPrice.variant = 'span';
      originalPrice.fontSize = 'sm';
      originalPrice.color = '#999';
      originalPrice.style.textDecoration = 'line-through';
      originalPrice.textContent = `${product.price.toLocaleString()}원`;

      // 할인가
      const discountPrice = document.createElement('tinto-typography');
      discountPrice.variant = 'span';
      discountPrice.fontSize = 'lg';
      discountPrice.fontWeight = '700';
      discountPrice.color = '#e74c3c';
      discountPrice.textContent = `${product.discountPrice.toLocaleString()}원`;

      priceSection.appendChild(originalPrice);
      priceSection.appendChild(discountPrice);
    } else {
      const price = document.createElement('tinto-typography');
      price.variant = 'span';
      price.fontSize = 'lg';
      price.fontWeight = '700';
      price.textContent = `${product.price.toLocaleString()}원`;

      priceSection.appendChild(price);
    }

    this.elements.productDetailContent.appendChild(img);
    this.elements.productDetailContent.appendChild(title);
    this.elements.productDetailContent.appendChild(description);
    this.elements.productDetailContent.appendChild(priceSection);

    // 모달 표시
    this.elements.productModal.open = true;
  }

  showToast(message, type = 'info') {
    if (this.elements.toast) {
      this.elements.toast.message = message;
      this.elements.toast.type = type;
      this.elements.toast.show();
    }
  }
}

// UI 컨트롤러 초기화
let uiController;
document.addEventListener('DOMContentLoaded', () => {
  uiController = new UIController();

  // 상품 상세 모달 표시 이벤트 리스너
  document.addEventListener('productDetailReady', (e) => {
    uiController.showProductModal(e.detail.product);
  });

  // 토스트 메시지 표시 이벤트 리스너
  document.addEventListener('showToast', (e) => {
    uiController.showToast(e.detail.message, e.detail.type);
  });
});

export default uiController;
