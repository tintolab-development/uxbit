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
  CarouselVariant,
  CarouselSize,
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
  private isJumping = false; // 무한 루프 점프 중인지 확인
  private realIndex = 0; // 실제 슬라이드 인덱스 (loop 모드용)

  /* ============================ Props ============================ */

  /** 캐러셀 variant */
  @Prop({ reflect: true }) variant: CarouselVariant = 'default';

  /** 캐러셀 크기 */
  @Prop({ reflect: true }) size: CarouselSize = 'md';

  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled: boolean = false;

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

  /** 무한 루프 (부드러운 무한 스크롤 효과) */
  @Prop({ reflect: true }) loop: boolean = false;

  /** 한 번에 표시할 슬라이드 개수 */
  @Prop({ reflect: true, attribute: 'slides-per-view' }) slidesPerView: number = 1;

  /** 슬라이드 간격 */
  @Prop({ reflect: true, attribute: 'space-between' }) spaceBetween: string = '16px';

  /** 전환 효과 */
  @Prop({ reflect: true }) transition: TransitionType = 'slide';

  /** 전환 시간 (ms) */
  @Prop({ reflect: true, attribute: 'transition-duration' }) transitionDuration: number = 500;

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

  private handleResize = () => {
    // 리사이즈 시 슬라이드 위치 재계산
    this.updateContainerTransform();
  };

  /* ============================ Methods ============================ */

  /** 특정 슬라이드로 이동 */
  @Method()
  async goToSlide(index: number, emitEvent = true) {
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
  @Method()
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
  @Method()
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

    // loop 모드일 때 realIndex 초기화
    if (this.loop && this.totalSlides > 1) {
      this.realIndex = this.currentIndex;
    } else {
      // loop가 아니거나 슬라이드가 1개 이하면 realIndex를 currentIndex와 동일하게
      this.realIndex = this.currentIndex;
    }

    this.updateContainerTransform();
  }

  private updateContainerTransform() {
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
        const slideEl = slide as HTMLElement;
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

  private handleTouchStart = (e: TouchEvent) => {
    if (!this.touchEnabled || this.disabled) return;
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

  private updateDragTransform(offset: number) {
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

  private handleMouseDown = (e: MouseEvent) => {
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

    return (
      <div
        class={`tinto-carousel ${this.variant} ${this.size} ${this.disabled ? 'disabled' : ''}`}
        role="region"
        aria-label="Carousel"
        aria-live="polite"
        aria-atomic="true"
        tabindex={this.disabled ? -1 : 0}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={() => {
          if (this.autoplay && !this.disabled) this.stopAutoplay();
        }}
        onMouseLeave={() => {
          if (this.autoplay && !this.disabled) this.startAutoplay();
        }}
      >
        {/* 슬라이드 컨테이너 */}
        <div
          class="tc-container"
          ref={(el) => (this.containerEl = el)}
          role="group"
          aria-label={`Slide ${this.currentIndex + 1} of ${this.totalSlides}`}
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
              disabled={this.disabled || (!this.loop && this.currentIndex === 0)}
              aria-disabled={this.disabled || (!this.loop && this.currentIndex === 0)}
            >
              {this.navigationStyle === 'text' ? '‹' : '←'}
            </button>
            <button
              class="tc-nav-button tc-nav-next"
              aria-label="Next slide"
              onClick={() => this.next()}
              disabled={this.disabled || (!this.loop && this.currentIndex === this.totalSlides - 1)}
              aria-disabled={
                this.disabled || (!this.loop && this.currentIndex === this.totalSlides - 1)
              }
            >
              {this.navigationStyle === 'text' ? '›' : '→'}
            </button>
          </div>
        )}

        {/* 인디케이터 */}
        {this.showIndicator && this.totalSlides > 1 && (
          <div
            class={`tc-indicator tc-indicator-${this.indicatorType} tc-indicator-${this.indicatorPosition}`}
            role="tablist"
            aria-label="Slide indicators"
          >
            {Array.from({ length: this.totalSlides }).map((_, index) => (
              <button
                class={`tc-indicator-item ${index === this.currentIndex ? 'active' : ''}`}
                role="tab"
                aria-label={`Go to slide ${index + 1} of ${this.totalSlides}`}
                aria-selected={index === this.currentIndex}
                aria-controls={`slide-${index}`}
                tabindex={index === this.currentIndex ? 0 : -1}
                onClick={() => this.goToSlide(index)}
                disabled={this.disabled}
                aria-disabled={this.disabled}
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
