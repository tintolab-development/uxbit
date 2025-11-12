// section.tsx
import { Component, h, Prop, Element } from '@stencil/core';
import { AlignItems, FlexDirection, FlexWrap, Justify, HeightMode } from './section.types';

@Component({
  tag: 'tinto-section',
  styleUrl: 'section.css',
  shadow: true,
})
export class TintoSection {
  @Element() el!: HTMLElement;

  /** Flex 레이아웃 기본값(모바일 우선) */
  @Prop({ reflect: true }) direction: FlexDirection = 'column';
  @Prop({ reflect: true }) wrap: FlexWrap = 'nowrap';
  @Prop({ reflect: true }) justify: Justify = 'flex-start';
  @Prop({ reflect: true }) align: AlignItems = 'stretch';
  @Prop({ reflect: true }) gap?: string; // e.g. 12px, 1rem

  /** 데스크탑(>=1920px) 오버라이드 (지정 없으면 모바일 설정 유지) */
  @Prop({ reflect: true }) directionDesktop?: FlexDirection;
  @Prop({ reflect: true }) wrapDesktop?: FlexWrap;
  @Prop({ reflect: true }) justifyDesktop?: Justify;
  @Prop({ reflect: true }) alignDesktop?: AlignItems;
  @Prop({ reflect: true }) gapDesktop?: string;

  /** 크기/여백/배경 등 토큰 */
  @Prop({ reflect: true }) maxWidth?: string; // 1200px, 100%, 80ch...
  @Prop({ reflect: true }) padding?: string; // 16px, 24px 12px...
  @Prop({ reflect: true }) margin?: string; // 0 auto...

  @Prop({ reflect: true }) background?: string; // color/gradient
  @Prop({ reflect: true }) color?: string;
  @Prop({ reflect: true }) radius?: string; // border-radius
  @Prop({ reflect: true }) shadow?: string; // box-shadow

  /** 가운데 정렬 (maxWidth 사용 시 margin-inline:auto) */
  @Prop({ reflect: true }) center: boolean = false;

  /**
   * 높이 제어
   * - auto: 내용 높이(기본)
   * - dvh: 동적 뷰포트 기준 최소/정확 높이
   * - screen: 정확히 100dvh
   */
  @Prop({ reflect: true }) heightMode: HeightMode = 'auto';

  /** heightMode가 dvh/screen일 때 내부 스크롤 허용 */
  @Prop({ reflect: true }) scrollable: boolean = false;

  /** (구형 iOS 대비) window.innerHeight 기반 fallback용 --t-vh 변수 업데이트 */
  private updateVhVar = () => {
    try {
      const vh = window.innerHeight * 0.01;
      this.el.style.setProperty('--t-vh', `${vh}px`);
    } catch {
      /* noop */
    }
  };

  componentDidLoad() {
    this.updateVhVar();
    window.addEventListener('resize', this.updateVhVar, { passive: true });
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateVhVar);
  }

  render() {
    // CSS 변수로 주입해서 미디어쿼리에서 오버라이드
    const styleVars: Record<string, string | undefined> = {
      '--t-max-w': this.maxWidth,
      '--t-pad': this.padding,
      '--t-mar': this.margin,

      '--t-bg': this.background,
      '--t-color': this.color,
      '--t-radius': this.radius,
      '--t-shadow': this.shadow,

      // Flex (모바일)
      '--t-dir': this.direction,
      '--t-wrap': this.wrap,
      '--t-justify': this.justify,
      '--t-align': this.align,
      '--t-gap': this.gap,

      // Flex (데스크탑 오버라이드, 1920+)
      '--t-dir-desktop': this.directionDesktop,
      '--t-wrap-desktop': this.wrapDesktop,
      '--t-justify-desktop': this.justifyDesktop,
      '--t-align-desktop': this.alignDesktop,
      '--t-gap-desktop': this.gapDesktop,
    };

    // host의 role/aria-* 패스스루
    const ariaLabel = this.el.getAttribute('aria-label') ?? undefined;
    const ariaLabelledby = this.el.getAttribute('aria-labelledby') ?? undefined;
    const ariaDescribedby = this.el.getAttribute('aria-describedby') ?? undefined;
    const role = this.el.getAttribute('role') ?? undefined;

    // 내부 스크롤 허용 시 키보드 스크롤 가능하게 tabIndex 부여
    const tabIndex = this.scrollable ? 0 : undefined;

    return (
      <section
        part="root"
        class="tinto-section"
        style={styleVars as any}
        role={role as any}
        aria-label={ariaLabel as any}
        aria-labelledby={ariaLabelledby as any}
        aria-describedby={ariaDescribedby as any}
        tabIndex={tabIndex as any}
      >
        <slot></slot>
      </section>
    );
  }
}
