import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const siderCss =
  ":host {\n  display: block;\n  flex-shrink: 0;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n/* ===== Sider Root ===== */\n\n.tinto-sider {\n  display: flex;\n  flex-direction: column;\n  width: var(--t-sider-width, 200px);\n  background: var(--t-sider-bg, #001529);\n  box-sizing: border-box;\n  transition:\n    width 0.2s ease,\n    transform 0.2s ease;\n  z-index: var(--t-sider-z-index, 100);\n  overflow: hidden;\n}\n\n/* ===== Responsive Width ===== */\n\n:host {\n  --t-sider-width: var(--t-sider-width-xs, 200px);\n}\n\n@media (min-width: 640px) {\n  :host {\n    --t-sider-width: var(--t-sider-width-sm, var(--t-sider-width-xs, 200px));\n  }\n}\n\n@media (min-width: 768px) {\n  :host {\n    --t-sider-width: var(\n      --t-sider-width-md,\n      var(--t-sider-width-sm, var(--t-sider-width-xs, 200px))\n    );\n  }\n}\n\n@media (min-width: 1024px) {\n  :host {\n    --t-sider-width: var(\n      --t-sider-width-lg,\n      var(--t-sider-width-md, var(--t-sider-width-sm, var(--t-sider-width-xs, 200px)))\n    );\n  }\n}\n\n@media (min-width: 1280px) {\n  :host {\n    --t-sider-width: var(\n      --t-sider-width-xl,\n      var(\n        --t-sider-width-lg,\n        var(--t-sider-width-md, var(--t-sider-width-sm, var(--t-sider-width-xs, 200px)))\n      )\n    );\n  }\n}\n\n@media (min-width: 1536px) {\n  :host {\n    --t-sider-width: var(\n      --t-sider-width-2xl,\n      var(\n        --t-sider-width-xl,\n        var(\n          --t-sider-width-lg,\n          var(--t-sider-width-md, var(--t-sider-width-sm, var(--t-sider-width-xs, 200px)))\n        )\n      )\n    );\n  }\n}\n\n/* ===== Collapsed State ===== */\n\n.tinto-sider-collapsed {\n  width: var(--t-sider-collapsed-width, 80px) !important;\n}\n\n/* ===== Breakpoint-based Auto Hide ===== */\n\n/* xs: < 640px */\n:host([data-breakpoint='xs']) {\n  @media (max-width: 639px) {\n    display: none;\n  }\n}\n\n/* sm: < 768px */\n:host([data-breakpoint='sm']) {\n  @media (max-width: 767px) {\n    display: none;\n  }\n}\n\n/* md: < 1024px */\n:host([data-breakpoint='md']) {\n  @media (max-width: 1023px) {\n    display: none;\n  }\n}\n\n/* lg: < 1280px */\n:host([data-breakpoint='lg']) {\n  @media (max-width: 1279px) {\n    display: none;\n  }\n}\n\n/* xl: < 1536px */\n:host([data-breakpoint='xl']) {\n  @media (max-width: 1535px) {\n    display: none;\n  }\n}\n\n/* ===== Accessibility ===== */\n\n.tinto-sider:focus-visible {\n  outline: 2px solid var(--t-sider-focus, #6366f1);\n  outline-offset: 2px;\n}\n\n/* ===== High Contrast Mode ===== */\n\n@media (forced-colors: active) {\n  .tinto-sider {\n    border-right: 1px solid CanvasText;\n  }\n}\n";

const TintoSider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoCollapse = createEvent(this, 'tintoCollapse');
  }
  get el() {
    return getElement(this);
  }
  /**
   * 사이드바 너비
   * 문자열 또는 breakpoint별 객체
   * @default "200px"
   */
  width;
  /**
   * 접힘 상태
   * @default false
   */
  collapsed;
  /**
   * 접힘 가능 여부
   * @default false
   */
  collapsible;
  /**
   * 접힘 상태일 때 너비
   * @default "80px"
   */
  collapsedWidth;
  /**
   * 자동 숨김 breakpoint
   * 이 breakpoint 이하에서 사이드바가 자동으로 숨겨집니다.
   */
  breakpoint;
  /**
   * 배경색
   */
  background;
  /**
   * z-index 값
   * @default 100
   */
  zIndex;
  /**
   * 접힘 상태 변경 이벤트
   */
  tintoCollapse;
  handleCollapsedChange() {
    this.tintoCollapse.emit({ collapsed: this.collapsed ?? false });
  }
  /**
   * 접힘 상태 토글
   */
  async toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  /**
   * 접힘 상태 설정
   */
  async setCollapsed(collapsed) {
    this.collapsed = collapsed;
  }
  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  buildResponsiveVars(prop, prefix) {
    if (!prop) return {};
    if (typeof prop === 'string') {
      return { [`--t-sider-${prefix}`]: prop };
    }
    const vars = {};
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-sider-${prefix}-${bp}`] = prop[bp];
      }
    });
    return vars;
  }
  render() {
    const widthVars = this.buildResponsiveVars(this.width, 'width');
    const styleVars = {
      '--t-sider-z-index': String(this.zIndex ?? 100),
      '--t-sider-bg': this.background,
      '--t-sider-collapsed-width': this.collapsedWidth ?? '80px',
      ...widthVars,
    };
    return h(
      'aside',
      {
        key: 'c0470b8e43cb7261670cd5e78e725ad1a8ce4dd3',
        part: 'root',
        class: {
          'tinto-sider': true,
          'tinto-sider-collapsed': this.collapsed === true,
          'tinto-sider-collapsible': this.collapsible === true,
        },
        style: styleVars,
        role: 'complementary',
        'aria-label': 'Sidebar',
        'data-breakpoint': this.breakpoint,
      },
      h('slot', { key: '8025a617a6b1d8cf273c59bfd2d59a4018741ebd' }),
    );
  }
  static get watchers() {
    return {
      collapsed: ['handleCollapsedChange'],
    };
  }
};
TintoSider.style = siderCss;

export { TintoSider as tinto_sider };
//# sourceMappingURL=tinto-sider.entry.js.map
