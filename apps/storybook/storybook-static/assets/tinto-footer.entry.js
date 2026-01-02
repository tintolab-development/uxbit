import { r as registerInstance, g as getElement, h } from './index-CgnYPz94.js';

const footerCss =
  ':host{display:block;width:100%}:host([hidden]){display:none !important}.tinto-footer{display:flex;align-items:center;width:100%;background:var(--t-footer-bg, #f5f5f5);padding:var(--t-footer-padding, 24px);height:var(--t-footer-height, auto);min-height:var(--t-footer-height, auto);box-sizing:border-box}:host{--t-footer-height:var(--t-footer-height-xs, auto)}@media (min-width: 640px){:host{--t-footer-height:var(--t-footer-height-sm, var(--t-footer-height-xs, auto))}}@media (min-width: 768px){:host{--t-footer-height:var(\n      --t-footer-height-md,\n      var(--t-footer-height-sm, var(--t-footer-height-xs, auto))\n    )}}@media (min-width: 1024px){:host{--t-footer-height:var(\n      --t-footer-height-lg,\n      var(--t-footer-height-md, var(--t-footer-height-sm, var(--t-footer-height-xs, auto)))\n    )}}@media (min-width: 1280px){:host{--t-footer-height:var(\n      --t-footer-height-xl,\n      var(\n        --t-footer-height-lg,\n        var(--t-footer-height-md, var(--t-footer-height-sm, var(--t-footer-height-xs, auto)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-footer-height:var(\n      --t-footer-height-2xl,\n      var(\n        --t-footer-height-xl,\n        var(\n          --t-footer-height-lg,\n          var(--t-footer-height-md, var(--t-footer-height-sm, var(--t-footer-height-xs, auto)))\n        )\n      )\n    )}}:host{--t-footer-padding:var(--t-footer-padding-xs, 16px)}@media (min-width: 640px){:host{--t-footer-padding:var(--t-footer-padding-sm, var(--t-footer-padding-xs, 16px))}}@media (min-width: 768px){:host{--t-footer-padding:var(\n      --t-footer-padding-md,\n      var(--t-footer-padding-sm, var(--t-footer-padding-xs, 16px))\n    )}}@media (min-width: 1024px){:host{--t-footer-padding:var(\n      --t-footer-padding-lg,\n      var(--t-footer-padding-md, var(--t-footer-padding-sm, var(--t-footer-padding-xs, 16px)))\n    )}}@media (min-width: 1280px){:host{--t-footer-padding:var(\n      --t-footer-padding-xl,\n      var(\n        --t-footer-padding-lg,\n        var(--t-footer-padding-md, var(--t-footer-padding-sm, var(--t-footer-padding-xs, 16px)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-footer-padding:var(\n      --t-footer-padding-2xl,\n      var(\n        --t-footer-padding-xl,\n        var(\n          --t-footer-padding-lg,\n          var(--t-footer-padding-md, var(--t-footer-padding-sm, var(--t-footer-padding-xs, 16px)))\n        )\n      )\n    )}}.tinto-footer:focus-visible{outline:2px solid var(--t-footer-focus, #6366f1);outline-offset:2px}@media (forced-colors: active){.tinto-footer{border-top:1px solid CanvasText}}';

const TintoFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /**
   * 푸터 높이
   * 문자열 또는 breakpoint별 객체
   * @default "auto"
   */
  height;
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
      return { [`--t-footer-${prefix}`]: prop };
    }
    const vars = {};
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-footer-${prefix}-${bp}`] = prop[bp];
      }
    });
    return vars;
  }
  render() {
    const heightVars = this.buildResponsiveVars(this.height, 'height');
    const paddingVars = this.buildResponsiveVars(this.padding, 'padding');
    const styleVars = {
      '--t-footer-bg': this.background,
      ...heightVars,
      ...paddingVars,
    };
    return h(
      'footer',
      {
        key: '41641cc7801d741d91691a3c84ddcfe4a1c8e49c',
        part: 'root',
        class: 'tinto-footer',
        style: styleVars,
        role: 'contentinfo',
      },
      h('slot', { key: 'ded84375fcf3ba0201e49feb47346de4cc464b12' }),
    );
  }
};
TintoFooter.style = footerCss;

export { TintoFooter as tinto_footer };
//# sourceMappingURL=tinto-footer.entry.js.map
