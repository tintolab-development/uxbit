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
// wrapper.tsx
import { Component, h, Prop, Element } from '@stencil/core';
let TintoWrapper = class TintoWrapper {
  el;
  /** Flex (모바일 기본) */
  direction = 'row';
  wrap = 'nowrap';
  justify = 'flex-start';
  align = 'stretch';
  gap; // ex) "24px", "1rem"
  /** Flex (데스크탑 오버라이드, >=1920px) */
  directionDesktop;
  wrapDesktop;
  justifyDesktop;
  alignDesktop;
  gapDesktop;
  /** Box / Visual */
  padding;
  margin;
  radius;
  shadow;
  border;
  color;
  /** 배경(색/그라디언트) + 배경 이미지 */
  background; // color/gradient → background-color 로 매핑
  src; // background-image url
  bgSize = 'cover';
  bgPosition = '50% 50%';
  bgRepeat = 'no-repeat';
  bgAttachment = 'scroll';
  bgBlend = 'normal';
  /** 오버레이 */
  overlay; // rgba/hex-with-alpha 권장
  overlayOpacity;
  /** 부모를 덮는 모드 (absolute; inset:0) */
  fill = false;
  render() {
    // CSS var 값 준비: url("…") 형태로 넣을 때 따옴표/괄호 안전화
    const safeUrl = this.src ? this.src.replace(/"/g, '%22').replace(/\)/g, '%29') : undefined;
    const bgImg = safeUrl ? `url("${safeUrl}")` : undefined;
    const ovOpacity = this.overlay ? String(this.overlayOpacity ?? 1) : '0';
    const styleVars = {
      // Flex (mobile)
      '--tw-dir': this.direction,
      '--tw-wrap': this.wrap,
      '--tw-justify': this.justify,
      '--tw-align': this.align,
      '--tw-gap': this.gap,
      // Flex (desktop overrides, 1920+)
      '--tw-dir-desktop': this.directionDesktop,
      '--tw-wrap-desktop': this.wrapDesktop,
      '--tw-justify-desktop': this.justifyDesktop,
      '--tw-align-desktop': this.alignDesktop,
      '--tw-gap-desktop': this.gapDesktop,
      // Box
      '--tw-pad': this.padding,
      '--tw-mar': this.margin,
      '--tw-radius': this.radius,
      '--tw-shadow': this.shadow,
      '--tw-border': this.border,
      '--tw-color': this.color,
      // Background
      '--tw-bg': this.background,
      '--tw-bg-img': bgImg,
      '--tw-bg-size': this.bgSize,
      '--tw-bg-pos': this.bgPosition,
      '--tw-bg-repeat': this.bgRepeat,
      '--tw-bg-attach': this.bgAttachment,
      '--tw-bg-blend': this.bgBlend,
      // Overlay
      '--tw-overlay': this.overlay,
      '--tw-overlay-opacity': ovOpacity,
    };
    return h(
      'div',
      { part: 'root', class: { 'tw-root': true, 'tw-fill': this.fill }, style: styleVars },
      h('div', { part: 'inner' }, h('slot', null)),
    );
  }
};
__decorate([Element()], TintoWrapper.prototype, 'el', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'direction', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'wrap', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'justify', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'align', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'gap', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'directionDesktop', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'wrapDesktop', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'justifyDesktop', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'alignDesktop', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'gapDesktop', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'padding', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'margin', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'radius', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'shadow', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'border', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'color', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'background', void 0);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'src', void 0);
__decorate(
  [Prop({ reflect: true, attribute: 'bg-size' })],
  TintoWrapper.prototype,
  'bgSize',
  void 0,
);
__decorate(
  [Prop({ reflect: true, attribute: 'bg-position' })],
  TintoWrapper.prototype,
  'bgPosition',
  void 0,
);
__decorate(
  [Prop({ reflect: true, attribute: 'bg-repeat' })],
  TintoWrapper.prototype,
  'bgRepeat',
  void 0,
);
__decorate(
  [Prop({ reflect: true, attribute: 'bg-attachment' })],
  TintoWrapper.prototype,
  'bgAttachment',
  void 0,
);
__decorate(
  [Prop({ reflect: true, attribute: 'bg-blend' })],
  TintoWrapper.prototype,
  'bgBlend',
  void 0,
);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'overlay', void 0);
__decorate(
  [Prop({ reflect: true, attribute: 'overlay-opacity' })],
  TintoWrapper.prototype,
  'overlayOpacity',
  void 0,
);
__decorate([Prop({ reflect: true })], TintoWrapper.prototype, 'fill', void 0);
TintoWrapper = __decorate(
  [
    Component({
      tag: 'tinto-wrapper',
      styleUrl: 'wrapper.css',
      shadow: true,
    }),
  ],
  TintoWrapper,
);
export { TintoWrapper };
