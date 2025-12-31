import { Component, h, Prop, Element, Event, EventEmitter, Watch, Method } from '@stencil/core';
import type { BreakpointValue, Breakpoint } from '../layout.types';

/**
 * Layout Sider 컴포넌트
 *
 * 사이드바 영역을 담당합니다.
 * 반응형으로 특정 breakpoint 이하에서 자동 숨김 가능합니다.
 *
 * @example
 * ```html
 * <tinto-sider>Sidebar Content</tinto-sider>
 * ```
 */
@Component({
  tag: 'tinto-sider',
  styleUrl: 'sider.css',
  shadow: true,
})
export class TintoSider {
  @Element() el!: HTMLElement;

  /**
   * 사이드바 너비
   * 문자열 또는 breakpoint별 객체
   * @default "200px"
   */
  @Prop({ reflect: true }) width?: string | BreakpointValue;

  /**
   * 접힘 상태
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) collapsed?: boolean;

  /**
   * 접힘 가능 여부
   * @default false
   */
  @Prop({ reflect: true }) collapsible?: boolean;

  /**
   * 접힘 상태일 때 너비
   * @default "80px"
   */
  @Prop({ reflect: true, attribute: 'collapsed-width' }) collapsedWidth?: string;

  /**
   * 자동 숨김 breakpoint
   * 이 breakpoint 이하에서 사이드바가 자동으로 숨겨집니다.
   */
  @Prop({ reflect: true }) breakpoint?: Breakpoint;

  /**
   * 배경색
   */
  @Prop({ reflect: true }) background?: string;

  /**
   * z-index 값
   * @default 100
   */
  @Prop({ reflect: true, attribute: 'z-index' }) zIndex?: number;

  /**
   * 접힘 상태 변경 이벤트
   */
  @Event() tintoCollapse!: EventEmitter<{ collapsed: boolean }>;

  @Watch('collapsed')
  handleCollapsedChange() {
    this.tintoCollapse.emit({ collapsed: this.collapsed ?? false });
  }

  /**
   * 접힘 상태 토글
   */
  @Method()
  async toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  /**
   * 접힘 상태 설정
   */
  @Method()
  async setCollapsed(collapsed: boolean) {
    this.collapsed = collapsed;
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
      return { [`--t-sider-${prefix}`]: prop };
    }

    const vars: Record<string, string> = {};
    const breakpoints: Array<keyof BreakpointValue> = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-sider-${prefix}-${bp}`] = prop[bp]!;
      }
    });

    return vars;
  }

  render() {
    const widthVars = this.buildResponsiveVars(this.width, 'width');

    const styleVars: Record<string, string> = {
      '--t-sider-z-index': String(this.zIndex ?? 100),
      '--t-sider-bg': this.background,
      '--t-sider-collapsed-width': this.collapsedWidth ?? '80px',
      ...widthVars,
    };

    return (
      <aside
        part="root"
        class={{
          'tinto-sider': true,
          'tinto-sider-collapsed': this.collapsed === true,
          'tinto-sider-collapsible': this.collapsible === true,
        }}
        style={styleVars as any}
        role="complementary"
        aria-label="Sidebar"
        data-breakpoint={this.breakpoint}
      >
        <slot></slot>
      </aside>
    );
  }
}
