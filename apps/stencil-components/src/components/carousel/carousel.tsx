// carousel.tsx
import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Watch,
  State,
  Method,
} from '@stencil/core';
import type {
  NavigationPosition,
  NavigationStyle,
  IndicatorType,
  IndicatorPosition,
  TransitionType,
  NavigationDisplay,
  TintoCarouselSlideChangeDetail,
  TintoCarouselSlideStartDetail,
  TintoCarouselSlideEndDetail,
} from './carousel.types';

/**
 * <tinto-carousel>
 * - 터치/스와이프 슬라이드 지원
 * - 네비게이션 버튼 (옵션)
 * - 인디케이터 (옵션)
 * - 자동 재생 (옵션)
 * - 키보드 네비게이션 지원
 */
@Component({
  tag: 'tinto-carousel',
  styleUrl: 'carousel.css',
  shadow: true,
})
export class TintoCarousel {
  @Element() el!: HTMLElement;

  /* ============================ State ============================ */
  @State() currentIndex = 0;
  @State() totalSlides = 0;
  @State() isDragging = false;
  @State() startX = 0;
  @State() currentX = 0;
  @State() isAutoplayActive = false;

  private autoplayTimer?: number;
  private containerEl?: HTMLElement;
  private slideElements: HTMLElement[] = [];
  private touchStartX = 0;
  private touchCurrentX = 0;

  /* ============================ Props ============================ */

  /** 현재 슬라이드 인덱스 (0부터 시작) */
  @Prop({ reflect: true, mutable: true }) current: number = 0;

  /** 슬라이드 개수 (자동 감지 또는 수동 지정) */
  @Prop({ reflect: true, attribute: 'slide-count' }) slideCount?: number;

  /** 네비게이션 버튼 표시 */
  @Prop({ reflect: true, attribute: 'show-navigation' }) showNavigation: boolean = true;

  /** 네비게이션 버튼 위치 */
  @Prop({ reflect: true, attribute: 'navigation-position' })
  navigationPosition: NavigationPosition = 'overlay';

  /** 네비게이션 버튼 스타일 */
  @Prop({ reflect: true, attribute: 'navigation-style' }) navigationStyle: NavigationStyle =
    'circle';

  /** 네비게이션 버튼 표시 조건 */
  @Prop({ reflect: true, attribute: 'navigation-display' }) navigationDisplay: NavigationDisplay =
    'hover';

  /** 인디케이터 표시 */
  @Prop({ reflect: true, attribute: 'show-indicator' }) showIndicator: boolean = true;

  /** 인디케이터 타입 */
  @Prop({ reflect: true, attribute: 'indicator-type' }) indicatorType: IndicatorType = 'dot';

  /** 인디케이터 위치 */
  @Prop({ reflect: true, attribute: 'indicator-position' }) indicatorPosition: IndicatorPosition =
    'bottom';

  /** 자동 재생 */
  @Prop({ reflect: true }) autoplay: boolean = false;

  /** 자동 재생 간격 (ms) */
  @Prop({ reflect: true, attribute: 'autoplay-interval' }) autoplayInterval: number = 3000;

  /** 무한 루프 */
  @Prop({ reflect: true }) loop: boolean = false;

  /** 한 번에 표시할 슬라이드 개수 */
  @Prop({ reflect: true, attribute: 'slides-per-view' }) slidesPerView: number = 1;

  /** 슬라이드 간격 */
  @Prop({ reflect: true, attribute: 'space-between' }) spaceBetween: string = '16px';

  /** 전환 효과 */
  @Prop({ reflect: true }) transition: TransitionType = 'slide';

  /** 전환 시간 (ms) */
  @Prop({ reflect: true, attribute: 'transition-duration' }) transitionDuration: number = 300;

  /** 터치 활성화 */
  @Prop({ reflect: true, attribute: 'touch-enabled' }) touchEnabled: boolean = true;

  /** 스와이프 임계값 (px) */
  @Prop({ reflect: true, attribute: 'swipe-threshold' }) swipeThreshold: number = 50;

  /* ============================ Events ============================ */

  /** 슬라이드 변경 이벤트 */
  @Event({ eventName: 'tintoSlideChange' })
  tintoSlideChange!: EventEmitter<TintoCarouselSlideChangeDetail>;

  /** 슬라이드 시작 이벤트 */
  @Event({ eventName: 'tintoSlideStart' })
  tintoSlideStart!: EventEmitter<TintoCarouselSlideStartDetail>;

  /** 슬라이드 종료 이벤트 */
  @Event({ eventName: 'tintoSlideEnd' }) tintoSlideEnd!: EventEmitter<TintoCarouselSlideEndDetail>;

  /* ============================ Watch ============================ */

  @Watch('current')
  handleCurrentChange(newValue: number) {
    if (newValue !== this.currentIndex) {
      this.goToSlide(newValue, false);
    }
  }

  @Watch('autoplay')
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
  }

  disconnectedCallback() {
    this.stopAutoplay();
    window.removeEventListener('resize', this.handleResize);
  }

  private handleResize = () => {
    // 리사이즈 시 슬라이드 위치 재계산
    this.updateContainerTransform();
  };

  /* ============================ Methods ============================ */

  /** 특정 슬라이드로 이동 */
  @Method()
  async goToSlide(index: number, emitEvent = true) {
    if (index < 0 || index >= this.totalSlides) {
      if (this.loop) {
        index = index < 0 ? this.totalSlides - 1 : 0;
      } else {
        return;
      }
    }

    const previous = this.currentIndex;
    this.currentIndex = index;
    this.current = index;

    if (emitEvent) {
      this.tintoSlideChange.emit({
        current: index,
        previous,
        total: this.totalSlides,
      });
    }

    this.updateContainerTransform();
  }

  /** 다음 슬라이드 */
  @Method()
  async next() {
    const nextIndex = this.currentIndex + 1;
    if (nextIndex >= this.totalSlides && !this.loop) {
      return;
    }
    this.goToSlide(nextIndex >= this.totalSlides ? 0 : nextIndex);
  }

  /** 이전 슬라이드 */
  @Method()
  async prev() {
    const prevIndex = this.currentIndex - 1;
    if (prevIndex < 0 && !this.loop) {
      return;
    }
    this.goToSlide(prevIndex < 0 ? this.totalSlides - 1 : prevIndex);
  }

  /* ============================ Private Methods ============================ */

  private updateSlides() {
    const slot = this.el.shadowRoot?.querySelector('slot');
    if (!slot) return;

    const assignedNodes = slot.assignedNodes({ flatten: true });
    this.slideElements = assignedNodes.filter(
      (node) => node.nodeType === Node.ELEMENT_NODE,
    ) as HTMLElement[];

    if (this.slideCount) {
      this.totalSlides = this.slideCount;
    } else if (this.slideElements) {
      this.totalSlides = this.slideElements.length;
    }

    if (this.currentIndex >= this.totalSlides) {
      this.currentIndex = 0;
      this.current = 0;
    }

    this.updateContainerTransform();
  }

  private updateContainerTransform() {
    if (!this.containerEl) return;

    if (this.transition === 'fade') {
      this.containerEl.style.transform = 'none';
      this.slideElements.forEach((slide, index) => {
        (slide as HTMLElement).style.opacity = index === this.currentIndex ? '1' : '0';
      });
    } else {
      // slides-per-view가 1일 때는 간격 없이 정확한 계산
      if (this.slidesPerView === 1) {
        // 컨테이너 너비를 기준으로 정확한 픽셀 계산
        const containerWidth = this.containerEl.offsetWidth;
        const offset = -(this.currentIndex * containerWidth);
        this.containerEl.style.transform = `translateX(${offset}px)`;
      } else {
        const containerWidth = this.containerEl.offsetWidth;
        const slideWidthPx = containerWidth / this.slidesPerView;
        const gap = this.parseSpaceBetween();
        const totalGap = gap * this.currentIndex;
        const offset = -(this.currentIndex * slideWidthPx + totalGap);
        this.containerEl.style.transform = `translateX(${offset}px)`;
      }
    }
  }

  private parseSpaceBetween(): number {
    const value = this.spaceBetween.trim();
    if (value.endsWith('px')) {
      return parseFloat(value);
    }
    return 16; // 기본값
  }

  private startAutoplay() {
    this.stopAutoplay();
    if (this.autoplay && this.totalSlides > 1) {
      this.isAutoplayActive = true;
      this.autoplayTimer = window.setInterval(() => {
        this.next();
      }, this.autoplayInterval);
    }
  }

  private stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = undefined;
    }
    this.isAutoplayActive = false;
  }

  private setupKeyboardNavigation() {
    this.el.addEventListener('keydown', (e: KeyboardEvent) => {
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

  private handleTouchStart = (e: TouchEvent) => {
    if (!this.touchEnabled) return;
    this.touchStartX = e.touches[0].clientX;
    this.touchCurrentX = this.touchStartX;
    this.isDragging = true;
    this.stopAutoplay();
    this.tintoSlideStart.emit({ index: this.currentIndex });
  };

  private handleTouchMove = (e: TouchEvent) => {
    if (!this.isDragging || !this.touchEnabled) return;
    e.preventDefault();
    this.touchCurrentX = e.touches[0].clientX;
    const diff = this.touchCurrentX - this.touchStartX;
    this.updateDragTransform(diff);
  };

  private handleTouchEnd = () => {
    if (!this.isDragging) return;
    this.isDragging = false;

    const diff = this.touchCurrentX - this.touchStartX;
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff > 0) {
        this.prev();
      } else {
        this.next();
      }
    }

    this.updateContainerTransform();
    this.tintoSlideEnd.emit({ index: this.currentIndex });

    if (this.autoplay) {
      this.startAutoplay();
    }
  };

  private updateDragTransform(offset: number) {
    if (!this.containerEl) return;

    if (this.slidesPerView === 1) {
      const slideWidth = this.containerEl.offsetWidth;
      const baseOffset = -(this.currentIndex * slideWidth);
      this.containerEl.style.transform = `translateX(${baseOffset + offset}px)`;
    } else {
      const slideWidth = this.containerEl.offsetWidth / this.slidesPerView;
      const gap = this.parseSpaceBetween();
      const baseOffset = -(this.currentIndex * (slideWidth + gap));
      this.containerEl.style.transform = `translateX(${baseOffset + offset}px)`;
    }
    this.containerEl.style.transition = 'none';
  }

  /* ============================ Mouse Handlers ============================ */

  private handleMouseDown = (e: MouseEvent) => {
    if (!this.touchEnabled) return;
    this.startX = e.clientX;
    this.currentX = this.startX;
    this.isDragging = true;
    this.stopAutoplay();
    this.tintoSlideStart.emit({ index: this.currentIndex });
    this.el.addEventListener('mousemove', this.handleMouseMove);
    this.el.addEventListener('mouseup', this.handleMouseUp);
    this.el.addEventListener('mouseleave', this.handleMouseUp);
  };

  private handleMouseMove = (e: MouseEvent) => {
    if (!this.isDragging) return;
    e.preventDefault();
    this.currentX = e.clientX;
    const diff = this.currentX - this.startX;
    this.updateDragTransform(diff);
  };

  private handleMouseUp = () => {
    if (!this.isDragging) return;
    this.isDragging = false;

    const diff = this.currentX - this.startX;
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff > 0) {
        this.prev();
      } else {
        this.next();
      }
    }

    this.updateContainerTransform();
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

    return (
      <div
        class="tinto-carousel"
        role="region"
        aria-label="Carousel"
        tabindex="0"
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={() => {
          if (this.autoplay) this.stopAutoplay();
        }}
        onMouseLeave={() => {
          if (this.autoplay) this.startAutoplay();
        }}
      >
        {/* 슬라이드 컨테이너 */}
        <div
          class="tc-container"
          ref={(el) => (this.containerEl = el)}
          style={{
            '--tc-transition-duration': `${this.transitionDuration}ms`,
            '--tc-space-between': this.spaceBetween,
            '--tc-slides-per-view': String(this.slidesPerView),
          }}
        >
          <slot></slot>
        </div>

        {/* 네비게이션 버튼 */}
        {this.showNavigation && this.totalSlides > 1 && (
          <div class={`tc-navigation ${navigationClass}`}>
            <button
              class="tc-nav-button tc-nav-prev"
              aria-label="Previous slide"
              onClick={() => this.prev()}
              disabled={!this.loop && this.currentIndex === 0}
            >
              {this.navigationStyle === 'text' ? '‹' : '←'}
            </button>
            <button
              class="tc-nav-button tc-nav-next"
              aria-label="Next slide"
              onClick={() => this.next()}
              disabled={!this.loop && this.currentIndex === this.totalSlides - 1}
            >
              {this.navigationStyle === 'text' ? '›' : '→'}
            </button>
          </div>
        )}

        {/* 인디케이터 */}
        {this.showIndicator && this.totalSlides > 1 && (
          <div
            class={`tc-indicator tc-indicator-${this.indicatorType} tc-indicator-${this.indicatorPosition}`}
          >
            {Array.from({ length: this.totalSlides }).map((_, index) => (
              <button
                class={`tc-indicator-item ${index === this.currentIndex ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => this.goToSlide(index)}
              >
                {this.indicatorType === 'number' ? index + 1 : ''}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
