import { Component, h, Prop, Element } from '@stencil/core';
import type { BreakpointValue } from '../layout.types';

/**
 * Layout Footer 컴포넌트
 *
 * 페이지 하단 푸터 영역을 담당합니다.
 *
 * @example
 * ```html
 * <tinto-footer>Footer Content</tinto-footer>
 * ```
 */
@Component({
  tag: 'tinto-footer',
  styleUrl: 'footer.css',
  shadow: true,
})
export class TintoFooter {
  @Element() el!: HTMLElement;

  /**
   * 푸터 높이
   * 문자열 또는 breakpoint별 객체
   * @default "auto"
   */
  @Prop({ reflect: true }) height?: string | BreakpointValue;

  /**
   * 배경색
   */
  @Prop({ reflect: true }) background?: string;

  /**
   * 패딩
   * 문자열 또는 breakpoint별 객체
   */
  @Prop({ reflect: true }) padding?: string | BreakpointValue;

  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  private buildResponsiveVars(
    prop: string | BreakpointValue | undefined,
    prefix: string,
  ): Record<string, string> {
    if (!prop) return {};

    if (typeof prop === 'string') {
      return { [`--t-footer-${prefix}`]: prop };
    }

    const vars: Record<string, string> = {};
    const breakpoints: Array<keyof BreakpointValue> = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-footer-${prefix}-${bp}`] = prop[bp]!;
      }
    });

    return vars;
  }

  render() {
    const heightVars = this.buildResponsiveVars(this.height, 'height');
    const paddingVars = this.buildResponsiveVars(this.padding, 'padding');

    const styleVars: Record<string, string> = {
      '--t-footer-bg': this.background,
      ...heightVars,
      ...paddingVars,
    };

    return (
      <footer part="root" class="tinto-footer" style={styleVars as any} role="contentinfo">
        <slot></slot>
      </footer>
    );
  }
}
