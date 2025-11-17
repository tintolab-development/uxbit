var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
  };
import { Component, h, Prop, Element } from '@stencil/core';
let TintoSection = class TintoSection {
  el;
  /** Flex 레이아웃 기본값(모바일 우선, 모든 해상도에 동일 적용) */
  direction = 'column';
  wrap = 'nowrap';
  justify = 'flex-start';
  align = 'stretch';
  gap; // e.g. "12px", "1rem"
  /** 크기/여백/배경 등 토큰 */
  maxWidth; // "1200px", "100%", "80ch"...
  padding; // "16px", "24px 12px"...
  margin; // "0 auto"...
  background; // color/gradient
  color;
  radius; // border-radius
  shadow; // box-shadow
  /** 가운데 정렬 (maxWidth 사용 시 margin-inline:auto) */
  center = false;
  /**
   * 높이 제어
   * - auto: 내용 높이(기본)
   * - dvh: 동적 뷰포트 기준 최소/정확 높이
   * - screen: 정확히 100dvh
   */
  heightMode = 'auto';
  /** heightMode가 dvh/screen일 때 내부 스크롤 허용 */
  scrollable = false;
  /** (구형 iOS 대비) window.innerHeight 기반 fallback용 --t-vh 변수 업데이트 */
  updateVhVar = () => {
    try {
      const vh = window.innerHeight * 0.01;
      this.el.style.setProperty('--t-vh', `${vh}px`);
    } catch {
      /* noop */
    }
  };
  componentDidLoad() {
    this.updateVhVar();
    window.addEventListener('resize', this.updateVhVar, { passive: true });
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this.updateVhVar);
  }
  /** undefined/null/빈 문자열은 style에 넣지 않도록 클린업 */
  buildStyleVars() {
    const entries = [
      ['--t-max-w', this.maxWidth],
      ['--t-pad', this.padding],
      ['--t-mar', this.margin],
      ['--t-bg', this.background],
      ['--t-color', this.color],
      ['--t-radius', this.radius],
      ['--t-shadow', this.shadow],
      // Flex (모든 해상도 동일)
      ['--t-dir', this.direction],
      ['--t-wrap', this.wrap],
      ['--t-justify', this.justify],
      ['--t-align', this.align],
      ['--t-gap', this.gap],
    ];
    const vars = {};
    for (const [k, v] of entries) {
      if (v !== undefined && v !== null && String(v).trim() !== '') {
        vars[k] = String(v);
      }
    }
    return vars;
  }
  render() {
    const styleVars = this.buildStyleVars();
    // host의 role/aria-* 패스스루
    const ariaLabel = this.el.getAttribute('aria-label') ?? undefined;
    const ariaLabelledby = this.el.getAttribute('aria-labelledby') ?? undefined;
    const ariaDescribedby = this.el.getAttribute('aria-describedby') ?? undefined;
    const role = this.el.getAttribute('role') ?? undefined;
    // 내부 스크롤 허용 시 키보드 스크롤 가능하게 tabIndex 부여
    const tabIndex = this.scrollable ? 0 : undefined;
    return h(
      'section',
      {
        part: 'root',
        class: 'tinto-section',
        style: styleVars,
        role: role,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
        tabIndex: tabIndex,
      },
      h('slot', null),
    );
  }
};
__decorate([Element()], TintoSection.prototype, 'el', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'direction', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'wrap', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'justify', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'align', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'gap', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'maxWidth', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'padding', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'margin', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'background', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'color', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'radius', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'shadow', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'center', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'heightMode', void 0);
__decorate([Prop({ reflect: true })], TintoSection.prototype, 'scrollable', void 0);
TintoSection = __decorate(
  [
    Component({
      tag: 'tinto-section',
      styleUrl: 'section.css',
      shadow: true,
    }),
  ],
  TintoSection,
);
export { TintoSection };
