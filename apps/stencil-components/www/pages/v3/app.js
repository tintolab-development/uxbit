/* eslint-env browser */
// 싱글페이지 라우팅 및 상태 관리 (비즈니스 로직만)
import {
  getHomeBanners,
  getPopularProducts,
  searchProducts,
  getBannerDetail,
  getProductDetail,
  trackEvent,
} from './mock-data.js';

// 화면 상태
const SCREENS = {
  HOME: 'HOME_001',
  SEARCH: 'SEARCH_002',
  BANNER_DETAIL: 'PROMO_BANNER_003',
  ERROR_404: 'ERROR_404_004',
};

class App {
  constructor() {
    this.currentScreen = SCREENS.HOME;
    this.state = {
      banners: [],
      popularProducts: [],
      searchQuery: '',
      searchResults: [],
      selectedBanner: null,
      selectedProduct: null,
      isLoading: false,
      error: null,
    };

    // DOM 요소 참조
    this.elements = {
      // 화면
      homeScreen: document.getElementById('home-screen'),
      searchScreen: document.getElementById('search-screen'),
      bannerDetailScreen: document.getElementById('banner-detail-screen'),
      errorScreen: document.getElementById('error-screen'),

      // 홈 화면
      homeSearchBar: document.getElementById('home-search-bar'),
      homeLoading: document.getElementById('home-loading'),
      homeCarousel: document.getElementById('home-carousel'),
      popularProducts: document.getElementById('popular-products'),

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

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadHomeScreen();
  }

  setupEventListeners() {
    // 홈 화면 검색바 클릭
    this.elements.homeSearchBar?.addEventListener('tintoSearchClick', () => {
      this.navigateToSearch();
    });

    // 검색 입력
    this.elements.searchInput?.addEventListener('tintoInput', (e) => {
      this.handleSearchInput(e.detail.value);
    });

    // 검색 제출
    this.elements.searchInput?.addEventListener('tintoSubmit', (e) => {
      this.handleSearchSubmit(e.detail.value);
    });

    // 배너 뒤로가기
    this.elements.bannerBackBtn?.addEventListener('click', () => {
      this.handleBack();
    });

    // 에러 화면 홈으로 가기
    this.elements.errorHomeBtn?.addEventListener('click', () => {
      this.handleBack();
    });

    // 모달 닫기
    this.elements.productModal?.addEventListener('tintoClose', () => {
      this.closeModal();
    });
  }

  // 화면 전환
  showScreen(screenId) {
    // 모든 화면 숨기기
    Object.values(this.elements)
      .filter((el) => el?.classList?.contains('screen'))
      .forEach((screen) => screen?.classList.remove('active'));

    // 선택된 화면 표시
    const screens = {
      [SCREENS.HOME]: this.elements.homeScreen,
      [SCREENS.SEARCH]: this.elements.searchScreen,
      [SCREENS.BANNER_DETAIL]: this.elements.bannerDetailScreen,
      [SCREENS.ERROR_404]: this.elements.errorScreen,
    };

    const targetScreen = screens[screenId];
    if (targetScreen) {
      targetScreen.classList.add('active');
    }
  }

  // 홈 화면 업데이트
  updateHomeScreen() {
    // 로딩 상태
    if (this.elements.homeLoading) {
      if (this.state.isLoading) {
        this.elements.homeLoading.removeAttribute('hidden');
      } else {
        this.elements.homeLoading.setAttribute('hidden', '');
      }
    }

    // 배너 데이터
    if (this.elements.homeCarousel && this.state.banners.length > 0 && !this.state.isLoading) {
      // 기존 슬라이드 제거
      const existingSlides = Array.from(this.elements.homeCarousel.children).filter(
        (child) => child.getAttribute('slot') === 'slide',
      );
      existingSlides.forEach((slide) => slide.remove());

      // 새 슬라이드 추가
      this.state.banners.forEach((banner) => {
        const slide = document.createElement('div');
        slide.setAttribute('slot', 'slide');
        slide.style.cursor = 'pointer';
        slide.style.width = '100%';
        slide.style.display = 'block';

        const img = document.createElement('tinto-image');
        img.src = banner.image;
        img.alt = banner.title;
        img.ratio = '16:9';
        img.fit = 'cover';
        img.style.width = '100%';
        img.style.display = 'block';

        slide.appendChild(img);
        slide.addEventListener('click', () => {
          this.handleBannerClick(banner.id);
        });

        this.elements.homeCarousel.appendChild(slide);
      });
    }

    // 인기 상품 표시
    if (this.elements.popularProducts && this.state.popularProducts.length > 0) {
      this.elements.popularProducts.innerHTML = '';

      this.state.popularProducts.forEach((product) => {
        const card = document.createElement('tinto-card');
        card.style.cursor = 'pointer';
        card.style.background = '#FFFFFF';
        card.style.borderRadius = '8px';
        card.style.overflow = 'hidden';

        // 이미지
        const img = document.createElement('tinto-image');
        img.slot = 'image';
        img.src = product.image;
        img.alt = product.title;
        img.ratio = '1:1';
        img.fit = 'cover';

        // 제목
        const title = document.createElement('tinto-typography');
        title.slot = 'title';
        title.variant = 'h3';
        title.fontSize = 'sm';
        title.fontWeight = '600';
        title.textContent = product.title;
        title.style.marginTop = '8px';
        title.style.marginBottom = '4px';
        title.style.padding = '0 8px';

        // 가격
        const priceSection = document.createElement('div');
        priceSection.slot = 'description';
        priceSection.style.padding = '0 8px 8px';
        priceSection.style.display = 'flex';
        priceSection.style.flexDirection = 'column';
        priceSection.style.gap = '4px';

        if (product.discountPrice) {
          // 원가 (취소선)
          const originalPrice = document.createElement('tinto-typography');
          originalPrice.variant = 'span';
          originalPrice.fontSize = 'xs';
          originalPrice.color = '#999';
          originalPrice.style.textDecoration = 'line-through';
          originalPrice.textContent = `${product.price.toLocaleString()}원`;

          // 할인가
          const discountPrice = document.createElement('tinto-typography');
          discountPrice.variant = 'span';
          discountPrice.fontSize = 'sm';
          discountPrice.fontWeight = '700';
          discountPrice.color = '#e74c3c';
          discountPrice.textContent = `${product.discountPrice.toLocaleString()}원`;

          priceSection.appendChild(originalPrice);
          priceSection.appendChild(discountPrice);
        } else {
          const price = document.createElement('tinto-typography');
          price.variant = 'span';
          price.fontSize = 'sm';
          price.fontWeight = '700';
          price.textContent = `${product.price.toLocaleString()}원`;

          priceSection.appendChild(price);
        }

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(priceSection);

        card.addEventListener('click', () => {
          this.handleProductClick(product.id);
        });

        this.elements.popularProducts.appendChild(card);
      });
    }
  }

  // 검색 화면 업데이트
  updateSearchScreen() {
    // 로딩 상태
    if (this.elements.searchLoading) {
      if (this.state.isLoading) {
        this.elements.searchLoading.removeAttribute('hidden');
      } else {
        this.elements.searchLoading.setAttribute('hidden', '');
      }
    }

    // 검색 결과
    if (this.elements.searchResults) {
      this.elements.searchResults.innerHTML = '';

      if (this.state.searchResults.length > 0) {
        this.state.searchResults.forEach((product) => {
          const card = document.createElement('tinto-card');
          card.style.cursor = 'pointer';
          card.style.marginBottom = '12px';

          // 이미지
          const img = document.createElement('tinto-image');
          img.slot = 'image';
          img.src = product.image;
          img.alt = product.title;
          img.ratio = '1:1';
          img.fit = 'cover';

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
            this.handleProductClick(product.id);
          });

          this.elements.searchResults.appendChild(card);
        });

        if (this.elements.searchEmpty) {
          this.elements.searchEmpty.style.display = 'none';
        }
      } else if (!this.state.isLoading && this.state.searchQuery.length >= 2) {
        if (this.elements.searchEmpty) {
          this.elements.searchEmpty.style.display = 'block';
        }
      }
    }
  }

  // 배너 상세 화면 업데이트
  updateBannerDetailScreen() {
    if (!this.state.selectedBanner) return;

    const banner = this.state.selectedBanner;

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
        this.handleCTAClick({
          bannerId: banner.id,
          type: banner.type,
          link: banner.ctaLink,
        });
      };
    }
  }

  // 상품 상세 모달 표시
  showProductModal(product) {
    if (!this.elements.productModal || !this.elements.productDetailContent) return;

    // 상품 상세 내용 구성
    this.elements.productDetailContent.innerHTML = '';

    // 이미지
    const img = document.createElement('tinto-image');
    img.src = product.images[0];
    img.alt = product.title;
    img.ratio = '4:3';
    img.fit = 'cover';
    img.style.width = '100%';
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

  // 토스트 메시지 표시
  showToast(message, type = 'info') {
    if (this.elements.toast) {
      this.elements.toast.message = message;
      this.elements.toast.type = type;
      this.elements.toast.show();
    }
  }

  // UI 업데이트
  updateUI() {
    // 화면 전환
    this.showScreen(this.currentScreen);

    // 화면별 UI 업데이트
    switch (this.currentScreen) {
      case SCREENS.HOME:
        this.updateHomeScreen();
        break;
      case SCREENS.SEARCH:
        this.updateSearchScreen();
        break;
      case SCREENS.BANNER_DETAIL:
        this.updateBannerDetailScreen();
        break;
      case SCREENS.ERROR_404:
        // 에러 화면은 정적이므로 업데이트 불필요
        break;
    }
  }

  // 비즈니스 로직 메서드들
  async loadHomeScreen() {
    this.currentScreen = SCREENS.HOME;
    this.state.isLoading = true;
    this.updateUI();

    trackEvent('home_view');

    try {
      // 배너와 인기 상품 병렬 로드
      const [bannersResponse, productsResponse] = await Promise.all([
        getHomeBanners(),
        getPopularProducts(),
      ]);

      if (bannersResponse.success) {
        this.state.banners = bannersResponse.data;
      }

      if (productsResponse.success) {
        this.state.popularProducts = productsResponse.data;
      }

      this.state.error = null;
    } catch (error) {
      this.state.error = error.message;
      this.showToast('데이터를 불러올 수 없습니다.', 'error');
    } finally {
      this.state.isLoading = false;
      this.updateUI();
    }
  }

  navigateToSearch() {
    this.currentScreen = SCREENS.SEARCH;
    this.state.searchQuery = '';
    this.state.searchResults = [];
    trackEvent('search_bar_click');
    this.updateUI();
  }

  async handleSearchInput(query) {
    if (query.length < 2) {
      this.state.searchResults = [];
      this.updateUI();
      return;
    }

    this.state.searchQuery = query;
    trackEvent('search_input', { query_length: query.length });

    try {
      const response = await searchProducts(query);
      if (response.success) {
        this.state.searchResults = response.data;
      }
    } catch (error) {
      this.state.error = error.message;
    }

    this.updateUI();
  }

  async handleSearchSubmit(query) {
    this.state.searchQuery = query;
    this.state.isLoading = true;
    this.updateUI();

    trackEvent('search_submit', { query });

    try {
      const response = await searchProducts(query);
      if (response.success) {
        this.state.searchResults = response.data;
        trackEvent('search_submit', {
          query,
          result_count: response.data.length,
        });

        if (response.data.length === 0) {
          trackEvent('search_no_result', { query });
        }
      }
    } catch (error) {
      this.state.error = error.message;
      this.showToast('검색 중 오류가 발생했습니다.', 'error');
    } finally {
      this.state.isLoading = false;
      this.updateUI();
    }
  }

  async handleProductClick(productId) {
    trackEvent('search_result_click', { product_id: productId, query: this.state.searchQuery });

    try {
      const response = await getProductDetail(productId);
      if (response.success) {
        this.state.selectedProduct = response.data;
        trackEvent('product_detail_view', { product_id: productId });
        this.showProductModal(response.data);
      }
    } catch (error) {
      this.state.error = error.message;
      this.showToast('상품 정보를 불러올 수 없습니다.', 'error');
    }
  }

  async handleBannerClick(bannerId) {
    trackEvent('banner_click', { banner_id: bannerId });

    try {
      const response = await getBannerDetail(bannerId);
      if (response.success) {
        this.state.selectedBanner = response.data;
        this.currentScreen = SCREENS.BANNER_DETAIL;
        trackEvent('banner_detail_view', { banner_id: bannerId });
        this.updateUI();
      } else {
        this.navigateToError();
      }
    } catch {
      this.navigateToError();
    }
  }

  handleCTAClick(detail) {
    const { bannerId, type, link } = detail;
    trackEvent('banner_cta_click', { banner_id: bannerId, cta_type: type });

    if (type === 'external') {
      window.open(link, '_blank');
    } else {
      // 내부 링크 처리 (현재는 홈으로 이동)
      this.loadHomeScreen();
    }
  }

  handleBack() {
    if (this.currentScreen === SCREENS.SEARCH) {
      this.loadHomeScreen();
    } else if (this.currentScreen === SCREENS.BANNER_DETAIL) {
      trackEvent('banner_back_click');
      this.loadHomeScreen();
    }
  }

  closeModal() {
    this.state.selectedProduct = null;
    if (this.elements.productModal) {
      this.elements.productModal.open = false;
    }
  }

  navigateToError() {
    this.currentScreen = SCREENS.ERROR_404;
    trackEvent('error_404', { path: window.location.pathname });
    this.updateUI();
  }
}

// 앱 초기화
let appInstance = null;

function initApp() {
  if (!appInstance) {
    appInstance = new App();
  }
  return appInstance;
}

// DOM 로드 후 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

export default appInstance;
