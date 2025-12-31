import { Component, h, Prop, Element } from '@stencil/core';
import type { BreakpointValue } from '../layout/layout.types';

/**
 * Layout Content 컴포넌트
 *
 * 페이지 메인 콘텐츠 영역을 담당합니다.
 *
 * @example
 * ```html
 * <tinto-content>Main Content</tinto-content>
 * ```
 */
@Component({
  tag: 'tinto-content',
  styleUrl: 'content.css',
  shadow: true,
})
export class TintoContent {
  @Element() el!: HTMLElement;

  /**
   * 패딩
   * 문자열 또는 breakpoint별 객체
   * @default "0" (하위 요소 크기에 맞춤)
   */
  @Prop({ reflect: true }) padding?: string | BreakpointValue;

  /**
   * 최대 너비
   * 문자열 또는 breakpoint별 객체
   */
  @Prop({ reflect: true, attribute: 'max-width' }) maxWidth?: string | BreakpointValue;

  /**
   * 가운데 정렬 여부
   * @default false
   */
  @Prop({ reflect: true }) center?: boolean;

  /**
   * 배경색
   */
  @Prop({ reflect: true }) background?: string;

  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  private buildResponsiveVars(
    prop: string | BreakpointValue | undefined,
    prefix: string,
  ): Record<string, string> {
    if (!prop) return {};

    if (typeof prop === 'string') {
      return { [`--t-content-${prefix}`]: prop };
    }

    const vars: Record<string, string> = {};
    const breakpoints: Array<keyof BreakpointValue> = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-content-${prefix}-${bp}`] = prop[bp]!;
      }
    });

    return vars;
  }

  render() {
    const paddingVars = this.buildResponsiveVars(this.padding, 'padding');
    const maxWidthVars = this.buildResponsiveVars(this.maxWidth, 'max-width');

    const styleVars: Record<string, string> = {
      '--t-content-bg': this.background,
      ...paddingVars,
      ...maxWidthVars,
    };

    return (
      <main
        part="root"
        class={{
          'tinto-content': true,
          'tinto-content-center': this.center === true,
        }}
        style={styleVars as any}
        role="main"
      >
        <slot></slot>
      </main>
    );
  }
}
