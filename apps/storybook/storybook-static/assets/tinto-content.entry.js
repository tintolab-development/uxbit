import { r as registerInstance, g as getElement, h } from './index-CgnYPz94.js';

const contentCss =
  ':host{display:block;width:100%;max-width:100%;min-height:0;overflow-x:hidden;box-sizing:border-box}:host([hidden]){display:none !important}.tinto-content{display:block;width:100%;max-width:100%;padding:var(--t-content-padding, 0);background:var(--t-content-bg, transparent);box-sizing:border-box;overflow-y:auto;overflow-x:hidden;min-width:0;min-height:0;}:host{--t-content-padding:var(--t-content-padding-xs, 0);}@media (min-width: 640px){:host{--t-content-padding:var(--t-content-padding-sm, var(--t-content-padding-xs, 0))}}@media (min-width: 768px){:host{--t-content-padding:var(\n      --t-content-padding-md,\n      var(--t-content-padding-sm, var(--t-content-padding-xs, 0))\n    )}}@media (min-width: 1024px){:host{--t-content-padding:var(\n      --t-content-padding-lg,\n      var(--t-content-padding-md, var(--t-content-padding-sm, var(--t-content-padding-xs, 0)))\n    )}}@media (min-width: 1280px){:host{--t-content-padding:var(\n      --t-content-padding-xl,\n      var(\n        --t-content-padding-lg,\n        var(--t-content-padding-md, var(--t-content-padding-sm, var(--t-content-padding-xs, 0)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-content-padding:var(\n      --t-content-padding-2xl,\n      var(\n        --t-content-padding-xl,\n        var(\n          --t-content-padding-lg,\n          var(--t-content-padding-md, var(--t-content-padding-sm, var(--t-content-padding-xs, 0)))\n        )\n      )\n    )}}:host{--t-content-max-width:var(--t-content-max-width-xs, none)}@media (min-width: 640px){:host{--t-content-max-width:var(--t-content-max-width-sm, var(--t-content-max-width-xs, none))}}@media (min-width: 768px){:host{--t-content-max-width:var(\n      --t-content-max-width-md,\n      var(--t-content-max-width-sm, var(--t-content-max-width-xs, none))\n    )}}@media (min-width: 1024px){:host{--t-content-max-width:var(\n      --t-content-max-width-lg,\n      var(\n        --t-content-max-width-md,\n        var(--t-content-max-width-sm, var(--t-content-max-width-xs, none))\n      )\n    )}}@media (min-width: 1280px){:host{--t-content-max-width:var(\n      --t-content-max-width-xl,\n      var(\n        --t-content-max-width-lg,\n        var(\n          --t-content-max-width-md,\n          var(--t-content-max-width-sm, var(--t-content-max-width-xs, none))\n        )\n      )\n    )}}@media (min-width: 1536px){:host{--t-content-max-width:var(\n      --t-content-max-width-2xl,\n      var(\n        --t-content-max-width-xl,\n        var(\n          --t-content-max-width-lg,\n          var(\n            --t-content-max-width-md,\n            var(--t-content-max-width-sm, var(--t-content-max-width-xs, none))\n          )\n        )\n      )\n    )}}.tinto-content{max-width:var(--t-content-max-width, none)}.tinto-content-center{margin-left:auto;margin-right:auto}.tinto-content:focus-visible{outline:2px solid var(--t-content-focus, #6366f1);outline-offset:2px}@media (forced-colors: active){.tinto-content{border:1px solid CanvasText}}';

const TintoContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /**
   * 패딩
   * 문자열 또는 breakpoint별 객체
   * @default "0" (하위 요소 크기에 맞춤)
   */
  padding;
  /**
   * 최대 너비
   * 문자열 또는 breakpoint별 객체
   */
  maxWidth;
  /**
   * 가운데 정렬 여부
   * @default false
   */
  center;
  /**
   * 배경색
   */
  background;
  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  buildResponsiveVars(prop, prefix) {
    if (!prop) return {};
    if (typeof prop === 'string') {
      return { [`--t-content-${prefix}`]: prop };
    }
    const vars = {};
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-content-${prefix}-${bp}`] = prop[bp];
      }
    });
    return vars;
  }
  render() {
    const paddingVars = this.buildResponsiveVars(this.padding, 'padding');
    const maxWidthVars = this.buildResponsiveVars(this.maxWidth, 'max-width');
    const styleVars = {
      '--t-content-bg': this.background,
      ...paddingVars,
      ...maxWidthVars,
    };
    return h(
      'main',
      {
        key: 'd3a050de941e6d570540002d6fc3270d540f90ac',
        part: 'root',
        class: {
          'tinto-content': true,
          'tinto-content-center': this.center === true,
        },
        style: styleVars,
        role: 'main',
      },
      h('slot', { key: '90657c52e89ce0c1013f897d9a7434b5e8ab2a2b' }),
    );
  }
};
TintoContent.style = contentCss;

export { TintoContent as tinto_content };
//# sourceMappingURL=tinto-content.entry.js.map
