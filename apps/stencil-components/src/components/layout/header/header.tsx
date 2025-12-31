import { Component, h, Prop, Element } from '@stencil/core';
import type { BreakpointValue } from '../layout.types';

/**
 * Layout Header 컴포넌트
 *
 * 페이지 상단 헤더 영역을 담당합니다.
 *
 * @example
 * ```html
 * <tinto-header>Header Content</tinto-header>
 * ```
 */
@Component({
  tag: 'tinto-header',
  styleUrl: 'header.css',
  shadow: true,
})
export class TintoHeader {
  @Element() el!: HTMLElement;

  /**
   * 헤더 높이
   * 문자열 또는 breakpoint별 객체
   * @default "64px"
   */
  @Prop({ reflect: true }) height?: string | BreakpointValue;

  /**
   * 고정 헤더 여부
   * @default false
   */
  @Prop({ reflect: true }) fixed?: boolean;

  /**
   * z-index 값
   * @default 1000
   */
  @Prop({ reflect: true, attribute: 'z-index' }) zIndex?: number;

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
      return { [`--t-header-${prefix}`]: prop };
    }

    const vars: Record<string, string> = {};
    const breakpoints: Array<keyof BreakpointValue> = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-header-${prefix}-${bp}`] = prop[bp]!;
      }
    });

    return vars;
  }

  render() {
    const heightVars = this.buildResponsiveVars(this.height, 'height');
    const paddingVars = this.buildResponsiveVars(this.padding, 'padding');

    const styleVars: Record<string, string> = {
      '--t-header-z-index': String(this.zIndex ?? 1000),
      '--t-header-bg': this.background,
      ...heightVars,
      ...paddingVars,
    };

    return (
      <header
        part="root"
        class={{
          'tinto-header': true,
          'tinto-header-fixed': this.fixed === true,
        }}
        style={styleVars as any}
        role="banner"
      >
        <slot></slot>
      </header>
    );
  }
}
