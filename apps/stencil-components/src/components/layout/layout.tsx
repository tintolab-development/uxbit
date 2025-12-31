import { Component, h, Prop, Element, Watch } from '@stencil/core';
import type { FlexDirection } from '../../types/common.types';
import type { BreakpointValue } from './layout.types';

/**
 * Layout 루트 컴포넌트
 *
 * Ant Design 스타일의 Layout 시스템의 최상위 컨테이너입니다.
 * Header, Content, Footer, Sider를 포함할 수 있습니다.
 *
 * @example
 * ```html
 * <tinto-layout>
 *   <tinto-header>Header</tinto-header>
 *   <tinto-content>Content</tinto-content>
 *   <tinto-footer>Footer</tinto-footer>
 * </tinto-layout>
 * ```
 */
@Component({
  tag: 'tinto-layout',
  styleUrl: 'layout.css',
  shadow: true,
})
export class TintoLayout {
  @Element() el!: HTMLElement;

  /**
   * Flex 방향
   * @default 'column'
   */
  @Prop({ reflect: true }) direction: FlexDirection = 'column';

  /**
   * 자식 요소 간 간격
   * 문자열 또는 breakpoint별 객체
   * @example "24px" 또는 { xs: "16px", md: "24px", lg: "32px" }
   */
  @Prop({ reflect: true }) gap?: string | BreakpointValue;

  /**
   * 높이 모드
   * - auto: 내용에 맞춤
   * - 100vh: 뷰포트 높이
   * - 100dvh: 동적 뷰포트 높이 (모바일 대응)
   * @default 'auto'
   */
  @Prop({ reflect: true }) height: 'auto' | '100vh' | '100dvh' = 'auto';

  /**
   * Sider 포함 여부 (자동 감지되지만 명시적으로 지정 가능)
   */
  @Prop({ reflect: true, attribute: 'has-sider' }) hasSider?: boolean;

  /**
   * 패딩
   * 문자열 또는 breakpoint별 객체
   * @example "20px" 또는 { xs: "16px", md: "20px", lg: "24px" }
   */
  @Prop({ reflect: true }) padding?: string | BreakpointValue;

  @Watch('hasSider')
  handleHasSiderChange() {
    this.updateHasSider();
  }

  componentDidLoad() {
    this.updateHasSider();
    this.observeChildren();
  }

  /**
   * 자식 요소에서 Sider 감지
   */
  private observeChildren() {
    const observer = new MutationObserver(() => {
      this.updateHasSider();
    });

    observer.observe(this.el, {
      childList: true,
      subtree: true,
    });

    // 초기 체크
    this.updateHasSider();
  }

  /**
   * hasSider 상태 업데이트
   */
  private updateHasSider() {
    const hasSider = this.el.querySelector('tinto-sider') !== null;
    if (hasSider !== this.hasSider) {
      this.hasSider = hasSider;
      this.el.setAttribute('has-sider', hasSider ? 'true' : 'false');
    }
  }

  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  private buildGapVars(): Record<string, string> {
    if (!this.gap) return {};

    if (typeof this.gap === 'string') {
      return { '--t-layout-gap': this.gap };
    }

    const vars: Record<string, string> = {};
    const breakpoints: Array<keyof BreakpointValue> = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

    breakpoints.forEach((bp) => {
      if (this.gap && typeof this.gap === 'object' && this.gap[bp]) {
        vars[`--t-layout-gap-${bp}`] = this.gap[bp]!;
      }
    });

    return vars;
  }

  /**
   * Breakpoint별 padding 값을 CSS 변수로 변환
   */
  private buildPaddingVars(): Record<string, string> {
    if (!this.padding) return {};

    if (typeof this.padding === 'string') {
      return { '--t-layout-padding': this.padding };
    }

    const vars: Record<string, string> = {};
    const breakpoints: Array<keyof BreakpointValue> = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

    breakpoints.forEach((bp) => {
      if (this.padding && typeof this.padding === 'object' && this.padding[bp]) {
        vars[`--t-layout-padding-${bp}`] = this.padding[bp]!;
      }
    });

    return vars;
  }

  render() {
    const gapVars = this.buildGapVars();
    const paddingVars = this.buildPaddingVars();
    const heightVar = this.height === 'auto' ? 'auto' : this.height;

    const styleVars: Record<string, string> = {
      '--t-layout-dir': this.direction,
      '--t-layout-height': heightVar,
      ...gapVars,
      ...paddingVars,
    };

    return (
      <section part="root" class="tinto-layout" style={styleVars as any} role="main">
        <slot></slot>
      </section>
    );
  }
}
