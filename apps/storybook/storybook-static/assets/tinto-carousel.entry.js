import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const carouselCss =
  ":host{display:block;position:relative;width:100%;box-sizing:border-box;overflow:hidden;touch-action:pan-y pinch-zoom;-webkit-tap-highlight-color:transparent}:host([hidden]){display:none}.tc-container{display:flex;width:100%;transition:transform var(--tc-transition-duration, 500ms) cubic-bezier(0.4, 0, 0.2, 1);will-change:transform;align-items:stretch;margin:0;padding:0;transform:translateZ(0);backface-visibility:hidden;perspective:1000px}::slotted(*){flex:0 0 calc(100% / var(--tc-slides-per-view, 1));min-width:0;box-sizing:border-box;width:calc(100% / var(--tc-slides-per-view, 1));max-width:calc(100% / var(--tc-slides-per-view, 1));transition:opacity var(--tc-transition-duration, 500ms) cubic-bezier(0.4, 0, 0.2, 1);margin:0;padding:0;transform:translateZ(0);backface-visibility:hidden}:host([space-between]:not([space-between='0']):not([space-between='0px'])) ::slotted(*){margin-right:var(--tc-space-between, 16px)}:host([space-between]:not([space-between='0']):not([space-between='0px'])) ::slotted(*:last-child){margin-right:0}:host([slides-per-view='1']) ::slotted(*){width:100%;flex:0 0 100%;max-width:100%;margin-right:0 !important}:host([transition='fade']) .tc-container{transform:translate3d(0, 0, 0) !important}:host([transition='fade']) ::slotted(*){position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:none;transition:opacity var(--tc-transition-duration, 500ms) cubic-bezier(0.4, 0, 0.2, 1)}:host([transition='fade']) ::slotted(*:nth-child(n)){position:relative}.tc-navigation{position:absolute;z-index:10;display:flex;gap:0.5rem;pointer-events:none}.tc-nav-overlay{top:50%;left:0;right:0;transform:translateY(-50%);justify-content:space-between;padding:0 1rem}.tc-nav-inside{top:1rem;left:1rem;right:1rem;justify-content:space-between}.tc-nav-outside{top:50%;transform:translateY(-50%);flex-direction:column;gap:1rem}.tc-nav-outside.tc-nav-prev{left:-3rem}.tc-nav-outside.tc-nav-next{right:-3rem}.tc-nav-button{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;width:var(--tc-nav-button-size, 44px);height:var(--tc-nav-button-size, 44px);min-width:44px;min-height:44px;border-radius:50%;background:var(--tc-nav-button-bg, rgba(0, 0, 0, 0.5));color:var(--tc-nav-button-color, #ffffff);font-size:1.25rem;cursor:pointer;pointer-events:auto;transition:background-color 0.2s ease,\n    transform 0.2s ease;-webkit-tap-highlight-color:transparent;user-select:none}.tc-nav-button:hover:not(:disabled){background:var(--tc-nav-button-bg-hover, rgba(0, 0, 0, 0.7));transform:scale(1.1)}.tc-nav-button:active:not(:disabled){transform:scale(0.95)}.tc-nav-button:disabled{opacity:0.3;cursor:not-allowed}.tc-nav-button{border-radius:50%}.tc-navigation[class*='navigation-style=\"arrow\"] .tc-nav-button{background:transparent;border:2px solid var(--tc-nav-button-color, #ffffff)}.tc-navigation[class*='navigation-style=\"text\"] .tc-nav-button{background:transparent;font-size:2rem;font-weight:700}.tc-nav-hover .tc-navigation{opacity:0;transition:opacity 0.3s ease}.tc-nav-hover:hover .tc-navigation{opacity:1}.tc-nav-always .tc-navigation{opacity:1}.tc-nav-auto .tc-nav-button:disabled{display:none}.tc-indicator{position:absolute;z-index:10;display:flex;gap:0.5rem;pointer-events:none}.tc-indicator-bottom{bottom:1rem;left:50%;transform:translateX(-50%);flex-direction:row}.tc-indicator-top{top:1rem;left:50%;transform:translateX(-50%);flex-direction:row}.tc-indicator-left{left:1rem;top:50%;transform:translateY(-50%);flex-direction:column}.tc-indicator-right{right:1rem;top:50%;transform:translateY(-50%);flex-direction:column}.tc-indicator-item{all:unset;box-sizing:border-box;cursor:pointer;pointer-events:auto;transition:all 0.2s ease;-webkit-tap-highlight-color:transparent}.tc-indicator-dot .tc-indicator-item{width:var(--tc-indicator-size, 8px);height:var(--tc-indicator-size, 8px);border-radius:50%;background:var(--tc-indicator-color, rgba(255, 255, 255, 0.5))}.tc-indicator-dot .tc-indicator-item.active{background:var(--tc-indicator-active-color, #ffffff);transform:scale(1.2)}.tc-indicator-bar .tc-indicator-item{width:var(--tc-indicator-size, 24px);height:3px;border-radius:2px;background:var(--tc-indicator-color, rgba(255, 255, 255, 0.5))}.tc-indicator-bar .tc-indicator-item.active{background:var(--tc-indicator-active-color, #ffffff);width:calc(var(--tc-indicator-size, 24px) * 1.5)}.tc-indicator-number .tc-indicator-item{min-width:2rem;height:2rem;padding:0 0.5rem;border-radius:4px;background:var(--tc-indicator-color, rgba(255, 255, 255, 0.5));color:var(--tc-indicator-text-color, #ffffff);font-size:0.875rem;font-weight:600;display:inline-flex;align-items:center;justify-content:center}.tc-indicator-number .tc-indicator-item.active{background:var(--tc-indicator-active-color, #ffffff);color:var(--tc-indicator-active-text-color, #000000)}.tc-nav-button:focus-visible,.tc-indicator-item:focus-visible{outline:2px solid var(--tc-focus-color, #005fcc);outline-offset:2px}@media (hover: none) and (pointer: coarse){.tc-nav-button{-webkit-tap-highlight-color:rgba(0, 0, 0, 0.1)}.tc-nav-button:active{transform:scale(0.9)}.tc-nav-hover .tc-navigation{opacity:1}}@media (prefers-reduced-motion: reduce){.tc-container,::slotted(*){transition:none}.tc-nav-button,.tc-indicator-item{transition:none}}@media (hover: hover) and (pointer: fine){.tc-nav-button:hover:not(:disabled){background:var(--tc-nav-button-bg-hover, rgba(0, 0, 0, 0.7))}}";

const TintoCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoSlideChange = createEvent(this, 'tintoSlideChange');
    this.tintoSlideStart = createEvent(this, 'tintoSlideStart');
    this.tintoSlideEnd = createEvent(this, 'tintoSlideEnd');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ State ============================ */
  currentIndex = 0;
  totalSlides = 0;
  isDragging = false;
  startX = 0;
  currentX = 0;
  isAutoplayActive = false;
  autoplayTimer;
  containerEl;
  slideElements = [];
  touchStartX = 0;
  touchCurrentX = 0;
  isJumping = false; // 무한 루프 점프 중인지 확인
  realIndex = 0; // 실제 슬라이드 인덱스 (loop 모드용)
  /* ============================ Props ============================ */
  /** 캐러셀 variant */
  variant = 'default';
  /** 캐러셀 크기 */
  size = 'md';
  /** 비활성화 여부 */
  disabled = false;
  /** 현재 슬라이드 인덱스 (0부터 시작) */
  current = 0;
  /** 슬라이드 개수 (자동 감지 또는 수동 지정) */
  slideCount;
  /** 네비게이션 버튼 표시 */
  showNavigation = true;
  /** 네비게이션 버튼 위치 */
  navigationPosition = 'overlay';
  /** 네비게이션 버튼 스타일 */
  navigationStyle = 'circle';
  /** 네비게이션 버튼 표시 조건 */
  navigationDisplay = 'hover';
  /** 인디케이터 표시 */
  showIndicator = true;
  /** 인디케이터 타입 */
  indicatorType = 'dot';
  /** 인디케이터 위치 */
  indicatorPosition = 'bottom';
  /** 자동 재생 */
  autoplay = false;
  /** 자동 재생 간격 (ms) */
  autoplayInterval = 3000;
  /** 무한 루프 (부드러운 무한 스크롤 효과) */
  loop = false;
  /** 한 번에 표시할 슬라이드 개수 */
  slidesPerView = 1;
  /** 슬라이드 간격 */
  spaceBetween = '16px';
  /** 전환 효과 */
  transition = 'slide';
  /** 전환 시간 (ms) */
  transitionDuration = 500;
  /** 터치 활성화 */
  touchEnabled = true;
  /** 스와이프 임계값 (px) */
  swipeThreshold = 50;
  /* ============================ Events ============================ */
  /** 슬라이드 변경 이벤트 */
  tintoSlideChange;
  /** 슬라이드 시작 이벤트 */
  tintoSlideStart;
  /** 슬라이드 종료 이벤트 */
  tintoSlideEnd;
  /* ============================ Watch ============================ */
  handleCurrentChange(newValue) {
    if (newValue !== this.currentIndex) {
      this.goToSlide(newValue, false);
    }
  }
  handleAutoplayChange() {
    if (this.autoplay) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }
  /* ============================ Lifecycle ============================ */
  componentDidLoad() {
    this.updateSlides();
    this.setupKeyboardNavigation();
    if (this.autoplay) {
      this.startAutoplay();
    }
    // 리사이즈 이벤트 리스너 추가 (슬라이드 정렬 유지)
    window.addEventListener('resize', this.handleResize);
    // loop 모드일 때 초기 위치 설정 (updateSlides 후에 실행되므로 totalSlides가 설정됨)
    if (this.loop && this.totalSlides > 1) {
      this.realIndex = this.currentIndex;
    } else {
      // loop가 아니거나 슬라이드가 1개 이하면 realIndex를 currentIndex와 동일하게
      this.realIndex = this.currentIndex;
    }
  }
  disconnectedCallback() {
    this.stopAutoplay();
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    // 리사이즈 시 슬라이드 위치 재계산
    this.updateContainerTransform();
  };
  /* ============================ Methods ============================ */
  /** 특정 슬라이드로 이동 */
  async goToSlide(index, emitEvent = true) {
    if (this.disabled) return;
    let targetIndex = index;
    const previous = this.currentIndex;
    if (this.loop && this.totalSlides > 1) {
      // 무한 루프 모드: 인덱스를 래핑
      if (index < 0) {
        targetIndex = this.totalSlides - 1;
      } else if (index >= this.totalSlides) {
        targetIndex = 0;
      }
      this.realIndex = targetIndex;
    } else {
      // 일반 모드
      if (index < 0 || index >= this.totalSlides) {
        if (this.loop) {
          targetIndex = index < 0 ? this.totalSlides - 1 : 0;
        } else {
          return;
        }
      }
    }
    this.currentIndex = targetIndex;
    this.current = targetIndex;
    if (emitEvent) {
      this.tintoSlideChange.emit({
        current: targetIndex,
        previous,
        total: this.totalSlides,
      });
    }
    this.updateContainerTransform();
  }
  /** 다음 슬라이드 */
  async next() {
    if (this.loop && this.totalSlides > 1) {
      // 무한 루프 모드: 항상 다음으로 이동
      const nextIndex = this.currentIndex + 1;
      this.goToSlide(nextIndex);
    } else {
      const nextIndex = this.currentIndex + 1;
      if (nextIndex >= this.totalSlides && !this.loop) {
        return;
      }
      this.goToSlide(nextIndex >= this.totalSlides ? 0 : nextIndex);
    }
  }
  /** 이전 슬라이드 */
  async prev() {
    if (this.loop && this.totalSlides > 1) {
      // 무한 루프 모드: 항상 이전으로 이동
      const prevIndex = this.currentIndex - 1;
      this.goToSlide(prevIndex);
    } else {
      const prevIndex = this.currentIndex - 1;
      if (prevIndex < 0 && !this.loop) {
        return;
      }
      this.goToSlide(prevIndex < 0 ? this.totalSlides - 1 : prevIndex);
    }
  }
  /* ============================ Private Methods ============================ */
  updateSlides() {
    const slot = this.el.shadowRoot?.querySelector('slot');
    if (!slot) return;
    const assignedNodes = slot.assignedNodes({ flatten: true });
    this.slideElements = assignedNodes.filter((node) => node.nodeType === Node.ELEMENT_NODE);
    if (this.slideCount) {
      this.totalSlides = this.slideCount;
    } else if (this.slideElements) {
      this.totalSlides = this.slideElements.length;
    }
    if (this.currentIndex >= this.totalSlides) {
      this.currentIndex = 0;
      this.current = 0;
    }
    // loop 모드일 때 realIndex 초기화
    if (this.loop && this.totalSlides > 1) {
      this.realIndex = this.currentIndex;
    } else {
      // loop가 아니거나 슬라이드가 1개 이하면 realIndex를 currentIndex와 동일하게
      this.realIndex = this.currentIndex;
    }
    this.updateContainerTransform();
  }
  updateContainerTransform() {
    if (!this.containerEl) return;
    // totalSlides가 0이면 아무것도 하지 않음
    if (this.totalSlides === 0) {
      this.containerEl.style.transform = 'translate3d(0, 0, 0)';
      return;
    }
    // 점프 중이 아닐 때만 transition 활성화
    // 드래그 중이 아니고 점프 중이 아닐 때만 transition 적용
    if (!this.isDragging && !this.isJumping) {
      this.containerEl.style.transition = `transform ${this.transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    } else {
      this.containerEl.style.transition = 'none';
    }
    if (this.transition === 'fade') {
      this.containerEl.style.transform = 'translate3d(0, 0, 0)';
      this.slideElements.forEach((slide, index) => {
        const slideEl = slide;
        const displayIndex = this.loop && this.totalSlides > 1 ? this.realIndex : this.currentIndex;
        if (index === displayIndex) {
          slideEl.style.opacity = '1';
          slideEl.style.pointerEvents = 'auto';
        } else {
          slideEl.style.opacity = '0';
          slideEl.style.pointerEvents = 'none';
        }
      });
    } else {
      // slides-per-view가 1일 때는 간격 없이 정확한 계산
      if (this.slidesPerView === 1) {
        const containerWidth = this.containerEl.offsetWidth;
        // loop 모드일 때는 realIndex 사용 (totalSlides > 1일 때만)
        const displayIndex = this.loop && this.totalSlides > 1 ? this.realIndex : this.currentIndex;
        // 인덱스가 범위를 벗어나지 않도록 보장
        const safeIndex = Math.max(0, Math.min(displayIndex, Math.max(0, this.totalSlides - 1)));
        const offset = -(safeIndex * containerWidth);
        this.containerEl.style.transform = `translate3d(${offset}px, 0, 0)`;
      } else {
        const containerWidth = this.containerEl.offsetWidth;
        const slideWidthPx = containerWidth / this.slidesPerView;
        const gap = this.parseSpaceBetween();
        const displayIndex = this.loop && this.totalSlides > 1 ? this.realIndex : this.currentIndex;
        // 인덱스가 범위를 벗어나지 않도록 보장
        const safeIndex = Math.max(0, Math.min(displayIndex, Math.max(0, this.totalSlides - 1)));
        const totalGap = gap * safeIndex;
        const offset = -(safeIndex * slideWidthPx + totalGap);
        this.containerEl.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
    }
    // 점프 완료 후 플래그 리셋
    if (this.isJumping) {
      setTimeout(() => {
        this.isJumping = false;
      }, 50);
    }
  }
  parseSpaceBetween() {
    const value = this.spaceBetween.trim();
    if (value.endsWith('px')) {
      return parseFloat(value);
    }
    return 16; // 기본값
  }
  startAutoplay() {
    this.stopAutoplay();
    if (this.autoplay && this.totalSlides > 1) {
      this.isAutoplayActive = true;
      this.autoplayTimer = window.setInterval(() => {
        this.next();
      }, this.autoplayInterval);
    }
  }
  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = undefined;
    }
    this.isAutoplayActive = false;
  }
  setupKeyboardNavigation() {
    this.el.addEventListener('keydown', (e) => {
      if (this.disabled) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        this.goToSlide(this.totalSlides - 1);
      }
    });
  }
  /* ============================ Touch Handlers ============================ */
  handleTouchStart = (e) => {
    if (!this.touchEnabled || this.disabled) return;
    this.touchStartX = e.touches[0].clientX;
    this.touchCurrentX = this.touchStartX;
    this.isDragging = true;
    this.stopAutoplay();
    this.tintoSlideStart.emit({ index: this.currentIndex });
  };
  handleTouchMove = (e) => {
    if (!this.isDragging || !this.touchEnabled) return;
    e.preventDefault();
    this.touchCurrentX = e.touches[0].clientX;
    const diff = this.touchCurrentX - this.touchStartX;
    this.updateDragTransform(diff);
  };
  handleTouchEnd = () => {
    if (!this.isDragging) return;
    this.isDragging = false;
    const diff = this.touchCurrentX - this.touchStartX;
    // loop가 false일 때 경계 체크
    if (!this.loop) {
      // 첫 번째 슬라이드에서 오른쪽으로 스와이프 시도
      if (this.currentIndex === 0 && diff > 0) {
        // 현재 위치로 부드럽게 복귀
        this.updateContainerTransform();
        this.tintoSlideEnd.emit({ index: this.currentIndex });
        if (this.autoplay) {
          this.startAutoplay();
        }
        return;
      }
      // 마지막 슬라이드에서 왼쪽으로 스와이프 시도
      if (this.currentIndex === this.totalSlides - 1 && diff < 0) {
        // 현재 위치로 부드럽게 복귀
        this.updateContainerTransform();
        this.tintoSlideEnd.emit({ index: this.currentIndex });
        if (this.autoplay) {
          this.startAutoplay();
        }
        return;
      }
    }
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff > 0) {
        this.prev();
      } else {
        this.next();
      }
    } else {
      // 임계값 미만이면 현재 위치로 부드럽게 복귀
      this.updateContainerTransform();
    }
    this.tintoSlideEnd.emit({ index: this.currentIndex });
    if (this.autoplay) {
      this.startAutoplay();
    }
  };
  updateDragTransform(offset) {
    if (!this.containerEl || this.totalSlides === 0) return;
    const displayIndex = this.loop && this.totalSlides > 1 ? this.realIndex : this.currentIndex;
    let dragOffset = offset;
    // loop가 false일 때 경계에서 드래그 제한
    if (!this.loop && this.totalSlides > 0) {
      // 첫 번째 슬라이드에서 오른쪽으로 드래그 제한
      if (this.currentIndex === 0 && offset > 0) {
        // 저항 효과: 드래그 거리의 30%만 적용
        dragOffset = offset * 0.3;
      }
      // 마지막 슬라이드에서 왼쪽으로 드래그 제한
      else if (this.currentIndex === this.totalSlides - 1 && offset < 0) {
        // 저항 효과: 드래그 거리의 30%만 적용
        dragOffset = offset * 0.3;
      }
    }
    if (this.slidesPerView === 1) {
      const slideWidth = this.containerEl.offsetWidth;
      const baseOffset = -(displayIndex * slideWidth);
      this.containerEl.style.transform = `translate3d(${baseOffset + dragOffset}px, 0, 0)`;
    } else {
      const slideWidth = this.containerEl.offsetWidth / this.slidesPerView;
      const gap = this.parseSpaceBetween();
      const baseOffset = -(displayIndex * (slideWidth + gap));
      this.containerEl.style.transform = `translate3d(${baseOffset + dragOffset}px, 0, 0)`;
    }
    // 드래그 중에는 transition 비활성화
    this.containerEl.style.transition = 'none';
  }
  /* ============================ Mouse Handlers ============================ */
  handleMouseDown = (e) => {
    if (!this.touchEnabled || this.disabled) return;
    this.startX = e.clientX;
    this.currentX = this.startX;
    this.isDragging = true;
    this.stopAutoplay();
    this.tintoSlideStart.emit({ index: this.currentIndex });
    this.el.addEventListener('mousemove', this.handleMouseMove);
    this.el.addEventListener('mouseup', this.handleMouseUp);
    this.el.addEventListener('mouseleave', this.handleMouseUp);
  };
  handleMouseMove = (e) => {
    if (!this.isDragging) return;
    e.preventDefault();
    this.currentX = e.clientX;
    const diff = this.currentX - this.startX;
    this.updateDragTransform(diff);
  };
  handleMouseUp = () => {
    if (!this.isDragging) return;
    this.isDragging = false;
    const diff = this.currentX - this.startX;
    // loop가 false일 때 경계 체크
    if (!this.loop) {
      // 첫 번째 슬라이드에서 오른쪽으로 드래그 시도
      if (this.currentIndex === 0 && diff > 0) {
        // 현재 위치로 부드럽게 복귀
        this.updateContainerTransform();
        this.tintoSlideEnd.emit({ index: this.currentIndex });
        this.el.removeEventListener('mousemove', this.handleMouseMove);
        this.el.removeEventListener('mouseup', this.handleMouseUp);
        this.el.removeEventListener('mouseleave', this.handleMouseUp);
        if (this.autoplay) {
          this.startAutoplay();
        }
        return;
      }
      // 마지막 슬라이드에서 왼쪽으로 드래그 시도
      if (this.currentIndex === this.totalSlides - 1 && diff < 0) {
        // 현재 위치로 부드럽게 복귀
        this.updateContainerTransform();
        this.tintoSlideEnd.emit({ index: this.currentIndex });
        this.el.removeEventListener('mousemove', this.handleMouseMove);
        this.el.removeEventListener('mouseup', this.handleMouseUp);
        this.el.removeEventListener('mouseleave', this.handleMouseUp);
        if (this.autoplay) {
          this.startAutoplay();
        }
        return;
      }
    }
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff > 0) {
        this.prev();
      } else {
        this.next();
      }
    } else {
      // 임계값 미만이면 현재 위치로 부드럽게 복귀
      this.updateContainerTransform();
    }
    this.tintoSlideEnd.emit({ index: this.currentIndex });
    this.el.removeEventListener('mousemove', this.handleMouseMove);
    this.el.removeEventListener('mouseup', this.handleMouseUp);
    this.el.removeEventListener('mouseleave', this.handleMouseUp);
    if (this.autoplay) {
      this.startAutoplay();
    }
  };
  /* ============================ Render ============================ */
  render() {
    const navigationClass = {
      'tc-nav-overlay': this.navigationPosition === 'overlay',
      'tc-nav-inside': this.navigationPosition === 'inside',
      'tc-nav-outside': this.navigationPosition === 'outside',
      'tc-nav-always': this.navigationDisplay === 'always',
      'tc-nav-hover': this.navigationDisplay === 'hover',
      'tc-nav-auto': this.navigationDisplay === 'auto',
    };
    return h(
      'div',
      {
        key: '5b733cbdd4da4b2f94df3f1481bd1015eae9d2a9',
        class: `tinto-carousel ${this.variant} ${this.size} ${this.disabled ? 'disabled' : ''}`,
        role: 'region',
        'aria-label': 'Carousel',
        'aria-live': 'polite',
        'aria-atomic': 'true',
        tabindex: this.disabled ? -1 : 0,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onMouseDown: this.handleMouseDown,
        onMouseEnter: () => {
          if (this.autoplay && !this.disabled) this.stopAutoplay();
        },
        onMouseLeave: () => {
          if (this.autoplay && !this.disabled) this.startAutoplay();
        },
      },
      h(
        'div',
        {
          key: '07916a197a58acb37bd721f98b87432793f231a6',
          class: 'tc-container',
          ref: (el) => (this.containerEl = el),
          role: 'group',
          'aria-label': `Slide ${this.currentIndex + 1} of ${this.totalSlides}`,
          style: {
            '--tc-transition-duration': `${this.transitionDuration}ms`,
            '--tc-space-between': this.spaceBetween,
            '--tc-slides-per-view': String(this.slidesPerView),
          },
        },
        h('slot', { key: 'cf768d35e1e919b56f271c7f8c53e321e4a2dd97' }),
      ),
      this.showNavigation &&
        this.totalSlides > 1 &&
        h(
          'div',
          {
            key: 'aa99bdc9874927a90e0f40650028edd1f647e596',
            class: `tc-navigation ${navigationClass}`,
          },
          h(
            'button',
            {
              key: '0676e797a82df7de8e1c19d86db583b777da01d1',
              class: 'tc-nav-button tc-nav-prev',
              'aria-label': 'Previous slide',
              onClick: () => this.prev(),
              disabled: this.disabled || (!this.loop && this.currentIndex === 0),
              'aria-disabled': this.disabled || (!this.loop && this.currentIndex === 0),
            },
            this.navigationStyle === 'text' ? '‹' : '←',
          ),
          h(
            'button',
            {
              key: '2060a1fb57cc520c0106f2984d1d92b8189857cf',
              class: 'tc-nav-button tc-nav-next',
              'aria-label': 'Next slide',
              onClick: () => this.next(),
              disabled: this.disabled || (!this.loop && this.currentIndex === this.totalSlides - 1),
              'aria-disabled':
                this.disabled || (!this.loop && this.currentIndex === this.totalSlides - 1),
            },
            this.navigationStyle === 'text' ? '›' : '→',
          ),
        ),
      this.showIndicator &&
        this.totalSlides > 1 &&
        h(
          'div',
          {
            key: '1ffd8fb70c82ae18fa693f66566dc47636b328c9',
            class: `tc-indicator tc-indicator-${this.indicatorType} tc-indicator-${this.indicatorPosition}`,
            role: 'tablist',
            'aria-label': 'Slide indicators',
          },
          Array.from({ length: this.totalSlides }).map((_, index) =>
            h(
              'button',
              {
                class: `tc-indicator-item ${index === this.currentIndex ? 'active' : ''}`,
                role: 'tab',
                'aria-label': `Go to slide ${index + 1} of ${this.totalSlides}`,
                'aria-selected': index === this.currentIndex,
                'aria-controls': `slide-${index}`,
                tabindex: index === this.currentIndex ? 0 : -1,
                onClick: () => this.goToSlide(index),
                disabled: this.disabled,
                'aria-disabled': this.disabled,
              },
              this.indicatorType === 'number' ? index + 1 : '',
            ),
          ),
        ),
    );
  }
  static get watchers() {
    return {
      current: ['handleCurrentChange'],
      autoplay: ['handleAutoplayChange'],
    };
  }
};
TintoCarousel.style = carouselCss;

export { TintoCarousel as tinto_carousel };
//# sourceMappingURL=tinto-carousel.entry.js.map
