import { Component, h, Prop, Element } from '@stencil/core';
import type {
  AlignItems,
  FlexDirection,
  FlexWrap,
  Justify,
  HeightMode,
} from '../../types/common.types';
import type { BreakpointValue } from '../layout/layout.types';

/**
 * Layout Section 컴포넌트
 *
 * 페이지 내에서 구분되는 독립적인 콘텐츠 영역을 담당합니다.
 * Responsive하며, 한 화면에 보이는 섹션을 위한 최적화된 컴포넌트입니다.
 *
 * @example
 * ```html
 * <tinto-layout direction="column">
 *   <tinto-section padding={{ xs: '16px', md: '24px' }} max-width="1200px" center>
 *     Section 1
 *   </tinto-section>
 *   <tinto-section padding={{ xs: '16px', md: '24px' }} max-width="1200px" center>
 *     Section 2
 *   </tinto-section>
 * </tinto-layout>
 * ```
 */
@Component({
  tag: 'tinto-section',
  styleUrl: 'section.css',
  shadow: true,
})
export class TintoSection {
  @Element() el!: HTMLElement;

  /** Flex 레이아웃 (responsive 지원) */
  @Prop({ reflect: true }) direction: FlexDirection | BreakpointValue = 'column';
  @Prop({ reflect: true }) wrap: FlexWrap | BreakpointValue = 'nowrap';
  @Prop({ reflect: true }) justify: Justify | BreakpointValue = 'flex-start';
  @Prop({ reflect: true }) align: AlignItems | BreakpointValue = 'stretch';
  @Prop({ reflect: true }) gap?: string | BreakpointValue; // e.g. "12px", "1rem" or { xs: "8px", md: "16px" }

  /** 크기/여백/배경 등 토큰 (responsive 지원) */
  @Prop({ reflect: true, attribute: 'max-width' }) maxWidth?: string | BreakpointValue; // "1200px", "100%", "80ch"...
  @Prop({ reflect: true }) padding?: string | BreakpointValue; // "16px", "24px 12px"...
  @Prop({ reflect: true }) margin?: string | BreakpointValue; // "0 auto"...

  @Prop({ reflect: true }) background?: string; // color/gradient
  @Prop({ reflect: true }) color?: string;
  @Prop({ reflect: true }) radius?: string | BreakpointValue; // border-radius
  @Prop({ reflect: true }) shadow?: string; // box-shadow

  /** 가운데 정렬 (maxWidth 사용 시 margin-inline:auto) */
  @Prop({ reflect: true }) center?: boolean | BreakpointValue;

  /**
   * 높이 제어
   * - auto: 내용 높이
   * - dvh: 동적 뷰포트 기준 최소/정확 높이
   * - screen: 정확히 100dvh (기본값 - 한 섹션이 전체 뷰포트를 차지)
   */
  @Prop({ reflect: true }) heightMode: HeightMode = 'screen';

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

  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  private buildResponsiveVars(
    prop: string | BreakpointValue | undefined,
    prefix: string,
  ): Record<string, string> {
    if (!prop) return {};

    if (typeof prop === 'string') {
      return { [`--t-section-${prefix}`]: prop };
    }

    const vars: Record<string, string> = {};
    const breakpoints: Array<keyof BreakpointValue> = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-section-${prefix}-${bp}`] = prop[bp]!;
      }
    });

    return vars;
  }

  /** undefined/null/빈 문자열은 style에 넣지 않도록 클린업 */
  private buildStyleVars(): Record<string, string> {
    const maxWidthVars = this.buildResponsiveVars(this.maxWidth, 'max-width');
    const paddingVars = this.buildResponsiveVars(this.padding, 'padding');
    const marginVars = this.buildResponsiveVars(this.margin, 'margin');
    const radiusVars = this.buildResponsiveVars(this.radius, 'radius');
    const directionVars = this.buildResponsiveVars(this.direction as any, 'direction');
    const wrapVars = this.buildResponsiveVars(this.wrap as any, 'wrap');
    const justifyVars = this.buildResponsiveVars(this.justify as any, 'justify');
    const alignVars = this.buildResponsiveVars(this.align as any, 'align');
    const gapVars = this.buildResponsiveVars(this.gap, 'gap');

    const staticVars: Record<string, string | undefined> = {
      '--t-section-bg': this.background,
      '--t-section-color': this.color,
      '--t-section-shadow': this.shadow,
    };

    const vars: Record<string, string> = {};

    // Static vars
    for (const [k, v] of Object.entries(staticVars)) {
      if (v !== undefined && v !== null && String(v).trim() !== '') {
        vars[k] = String(v);
      }
    }

    // Responsive vars
    Object.assign(vars, maxWidthVars, paddingVars, marginVars, radiusVars);
    Object.assign(vars, directionVars, wrapVars, justifyVars, alignVars, gapVars);

    return vars;
  }

  render() {
    const styleVars = this.buildStyleVars();

    // host의 role/aria-* 패스스루
    const ariaLabel = this.el.getAttribute('aria-label') ?? undefined;
    const ariaLabelledby = this.el.getAttribute('aria-labelledby') ?? undefined;
    const ariaDescribedby = this.el.getAttribute('aria-describedby') ?? undefined;
    const role = (this.el.getAttribute('role') ?? 'region') as any;

    // 내부 스크롤 허용 시 키보드 스크롤 가능하게 tabIndex 부여
    const tabIndex = this.scrollable ? 0 : undefined;

    return (
      <section
        part="root"
        class="tinto-section"
        style={styleVars as any}
        role={role}
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
