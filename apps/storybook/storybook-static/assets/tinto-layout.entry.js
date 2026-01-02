import { r as registerInstance, g as getElement, h } from './index-CgnYPz94.js';

const layoutCss =
  ":host{display:block;width:100%;max-width:100vw;overflow-x:hidden;box-sizing:border-box}:host([hidden]){display:none !important}.tinto-layout{display:flex;flex-direction:var(--t-layout-dir, column);width:100%;max-width:100%;min-height:var(--t-layout-height, auto);height:var(--t-layout-height, auto);gap:var(--t-layout-gap, 0);padding:var(--t-layout-padding, 0);box-sizing:border-box;overflow-x:hidden}:host{--t-layout-gap:var(--t-layout-gap-xs, 0)}@media (min-width: 640px){:host{--t-layout-gap:var(--t-layout-gap-sm, var(--t-layout-gap-xs, 0))}}@media (min-width: 768px){:host{--t-layout-gap:var(--t-layout-gap-md, var(--t-layout-gap-sm, var(--t-layout-gap-xs, 0)))}}@media (min-width: 1024px){:host{--t-layout-gap:var(\n      --t-layout-gap-lg,\n      var(--t-layout-gap-md, var(--t-layout-gap-sm, var(--t-layout-gap-xs, 0)))\n    )}}@media (min-width: 1280px){:host{--t-layout-gap:var(\n      --t-layout-gap-xl,\n      var(\n        --t-layout-gap-lg,\n        var(--t-layout-gap-md, var(--t-layout-gap-sm, var(--t-layout-gap-xs, 0)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-layout-gap:var(\n      --t-layout-gap-2xl,\n      var(\n        --t-layout-gap-xl,\n        var(\n          --t-layout-gap-lg,\n          var(--t-layout-gap-md, var(--t-layout-gap-sm, var(--t-layout-gap-xs, 0)))\n        )\n      )\n    )}}:host{--t-layout-padding:var(--t-layout-padding-xs, 0)}@media (min-width: 640px){:host{--t-layout-padding:var(--t-layout-padding-sm, var(--t-layout-padding-xs, 0))}}@media (min-width: 768px){:host{--t-layout-padding:var(\n      --t-layout-padding-md,\n      var(--t-layout-padding-sm, var(--t-layout-padding-xs, 0))\n    )}}@media (min-width: 1024px){:host{--t-layout-padding:var(\n      --t-layout-padding-lg,\n      var(--t-layout-padding-md, var(--t-layout-padding-sm, var(--t-layout-padding-xs, 0)))\n    )}}@media (min-width: 1280px){:host{--t-layout-padding:var(\n      --t-layout-padding-xl,\n      var(\n        --t-layout-padding-lg,\n        var(--t-layout-padding-md, var(--t-layout-padding-sm, var(--t-layout-padding-xs, 0)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-layout-padding:var(\n      --t-layout-padding-2xl,\n      var(\n        --t-layout-padding-xl,\n        var(\n          --t-layout-padding-lg,\n          var(--t-layout-padding-md, var(--t-layout-padding-sm, var(--t-layout-padding-xs, 0)))\n        )\n      )\n    )}}:host([height='100vh']) .tinto-layout{height:100vh}:host([height='100dvh']) .tinto-layout{height:100dvh}:host([height='auto']) .tinto-layout{height:auto;min-height:auto}:host([has-sider]) .tinto-layout{flex-direction:row}:host([has-sider][direction='column']) .tinto-layout{flex-direction:column}.tinto-layout:focus-visible{outline:2px solid var(--t-layout-focus, #6366f1);outline-offset:2px}@media (forced-colors: active){.tinto-layout{border:1px solid CanvasText}}";

const TintoLayout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /**
   * Flex 방향
   * @default 'column'
   */
  direction = 'column';
  /**
   * 자식 요소 간 간격
   * 문자열 또는 breakpoint별 객체
   * @example "24px" 또는 { xs: "16px", md: "24px", lg: "32px" }
   */
  gap;
  /**
   * 높이 모드
   * - auto: 내용에 맞춤
   * - 100vh: 뷰포트 높이
   * - 100dvh: 동적 뷰포트 높이 (모바일 대응)
   * @default 'auto'
   */
  height = 'auto';
  /**
   * Sider 포함 여부 (자동 감지되지만 명시적으로 지정 가능)
   */
  hasSider;
  /**
   * 패딩
   * 문자열 또는 breakpoint별 객체
   * @example "20px" 또는 { xs: "16px", md: "20px", lg: "24px" }
   */
  padding;
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
  observeChildren() {
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
  updateHasSider() {
    const hasSider = this.el.querySelector('tinto-sider') !== null;
    if (hasSider !== this.hasSider) {
      this.hasSider = hasSider;
      this.el.setAttribute('has-sider', hasSider ? 'true' : 'false');
    }
  }
  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  buildGapVars() {
    if (!this.gap) return {};
    if (typeof this.gap === 'string') {
      return { '--t-layout-gap': this.gap };
    }
    const vars = {};
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    breakpoints.forEach((bp) => {
      if (this.gap && typeof this.gap === 'object' && this.gap[bp]) {
        vars[`--t-layout-gap-${bp}`] = this.gap[bp];
      }
    });
    return vars;
  }
  /**
   * Breakpoint별 padding 값을 CSS 변수로 변환
   */
  buildPaddingVars() {
    if (!this.padding) return {};
    if (typeof this.padding === 'string') {
      return { '--t-layout-padding': this.padding };
    }
    const vars = {};
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    breakpoints.forEach((bp) => {
      if (this.padding && typeof this.padding === 'object' && this.padding[bp]) {
        vars[`--t-layout-padding-${bp}`] = this.padding[bp];
      }
    });
    return vars;
  }
  render() {
    const gapVars = this.buildGapVars();
    const paddingVars = this.buildPaddingVars();
    const heightVar = this.height === 'auto' ? 'auto' : this.height;
    const styleVars = {
      '--t-layout-dir': this.direction,
      '--t-layout-height': heightVar,
      ...gapVars,
      ...paddingVars,
    };
    return h(
      'section',
      {
        key: '25e54bbaa0f09e13cc61d0b00483dc0f1b29c83f',
        part: 'root',
        class: 'tinto-layout',
        style: styleVars,
        role: 'main',
      },
      h('slot', { key: '42fc69a611279b68c496f6977c6de50bb3e81e73' }),
    );
  }
  static get watchers() {
    return {
      hasSider: ['handleHasSiderChange'],
    };
  }
};
TintoLayout.style = layoutCss;

export { TintoLayout as tinto_layout };
//# sourceMappingURL=tinto-layout.entry.js.map
