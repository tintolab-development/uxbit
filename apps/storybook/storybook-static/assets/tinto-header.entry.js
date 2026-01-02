import { r as registerInstance, g as getElement, h } from './index-CgnYPz94.js';

const headerCss =
  ':host{display:block;width:100%}:host([hidden]){display:none !important}.tinto-header{display:flex;align-items:center;width:100%;background:var(--t-header-bg, #fff);padding:var(--t-header-padding, 0 24px);height:var(--t-header-height, 64px);box-sizing:border-box;z-index:var(--t-header-z-index, 1000)}:host{--t-header-height:var(--t-header-height-xs, 64px)}@media (min-width: 640px){:host{--t-header-height:var(--t-header-height-sm, var(--t-header-height-xs, 64px))}}@media (min-width: 768px){:host{--t-header-height:var(\n      --t-header-height-md,\n      var(--t-header-height-sm, var(--t-header-height-xs, 64px))\n    )}}@media (min-width: 1024px){:host{--t-header-height:var(\n      --t-header-height-lg,\n      var(--t-header-height-md, var(--t-header-height-sm, var(--t-header-height-xs, 64px)))\n    )}}@media (min-width: 1280px){:host{--t-header-height:var(\n      --t-header-height-xl,\n      var(\n        --t-header-height-lg,\n        var(--t-header-height-md, var(--t-header-height-sm, var(--t-header-height-xs, 64px)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-header-height:var(\n      --t-header-height-2xl,\n      var(\n        --t-header-height-xl,\n        var(\n          --t-header-height-lg,\n          var(--t-header-height-md, var(--t-header-height-sm, var(--t-header-height-xs, 64px)))\n        )\n      )\n    )}}:host{--t-header-padding:var(--t-header-padding-xs, 0 16px)}@media (min-width: 640px){:host{--t-header-padding:var(--t-header-padding-sm, var(--t-header-padding-xs, 0 16px))}}@media (min-width: 768px){:host{--t-header-padding:var(\n      --t-header-padding-md,\n      var(--t-header-padding-sm, var(--t-header-padding-xs, 0 16px))\n    )}}@media (min-width: 1024px){:host{--t-header-padding:var(\n      --t-header-padding-lg,\n      var(--t-header-padding-md, var(--t-header-padding-sm, var(--t-header-padding-xs, 0 16px)))\n    )}}@media (min-width: 1280px){:host{--t-header-padding:var(\n      --t-header-padding-xl,\n      var(\n        --t-header-padding-lg,\n        var(--t-header-padding-md, var(--t-header-padding-sm, var(--t-header-padding-xs, 0 16px)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-header-padding:var(\n      --t-header-padding-2xl,\n      var(\n        --t-header-padding-xl,\n        var(\n          --t-header-padding-lg,\n          var(--t-header-padding-md, var(--t-header-padding-sm, var(--t-header-padding-xs, 0 16px)))\n        )\n      )\n    )}}.tinto-header-fixed{position:fixed;top:0;left:0;right:0}:host([fixed]){position:fixed;top:0;left:0;right:0;z-index:var(--t-header-z-index, 1000)}.tinto-header:focus-visible{outline:2px solid var(--t-header-focus, #6366f1);outline-offset:2px}@media (forced-colors: active){.tinto-header{border-bottom:1px solid CanvasText}}';

const TintoHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /**
   * 헤더 높이
   * 문자열 또는 breakpoint별 객체
   * @default "64px"
   */
  height;
  /**
   * 고정 헤더 여부
   * @default false
   */
  fixed;
  /**
   * z-index 값
   * @default 1000
   */
  zIndex;
  /**
   * 배경색
   */
  background;
  /**
   * 패딩
   * 문자열 또는 breakpoint별 객체
   */
  padding;
  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  buildResponsiveVars(prop, prefix) {
    if (!prop) return {};
    if (typeof prop === 'string') {
      return { [`--t-header-${prefix}`]: prop };
    }
    const vars = {};
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-header-${prefix}-${bp}`] = prop[bp];
      }
    });
    return vars;
  }
  render() {
    const heightVars = this.buildResponsiveVars(this.height, 'height');
    const paddingVars = this.buildResponsiveVars(this.padding, 'padding');
    const styleVars = {
      '--t-header-z-index': String(this.zIndex ?? 1000),
      '--t-header-bg': this.background,
      ...heightVars,
      ...paddingVars,
    };
    return h(
      'header',
      {
        key: '5e36261805cd210eb256664bb5d1beea5e8660cc',
        part: 'root',
        class: {
          'tinto-header': true,
          'tinto-header-fixed': this.fixed === true,
        },
        style: styleVars,
        role: 'banner',
      },
      h('slot', { key: '121eb589edeecd80abda3e1165e81475d67b53ff' }),
    );
  }
};
TintoHeader.style = headerCss;

export { TintoHeader as tinto_header };
//# sourceMappingURL=tinto-header.entry.js.map
