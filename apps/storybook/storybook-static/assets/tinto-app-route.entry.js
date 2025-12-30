import { r as registerInstance, g as getElement, h } from './index-CgnYPz94.js';

const appRouteCss =
  ":host{display:block;width:100%;min-width:0;box-sizing:border-box;min-height:100vh;min-height:100dvh;--ta-safe-top:0px;--ta-safe-bottom:0px;--ta-safe-left:0px;--ta-safe-right:0px;--ta-vh:1vh}:host([safe-area]){--ta-safe-top:env(safe-area-inset-top);--ta-safe-bottom:env(safe-area-inset-bottom);--ta-safe-left:env(safe-area-inset-left);--ta-safe-right:env(safe-area-inset-right)}[part='root']{position:relative;display:flex;flex-direction:var(--ta-dir, column);flex-wrap:var(--ta-wrap, nowrap);justify-content:var(--ta-justify, flex-start);align-items:var(--ta-align, stretch);align-content:var(--ta-align-content, stretch);gap:var(--ta-gap, 0);row-gap:var(--ta-row-gap, var(--ta-gap, 0));column-gap:var(--ta-column-gap, var(--ta-gap, 0));--ta-pad-base:var(--ta-pad, 0);--ta-pad-inline-base:var(--ta-pad-inline, var(--ta-pad-base));--ta-pad-block-base:var(--ta-pad-block, var(--ta-pad-base));--ta-pad-inline-start-base:var(--ta-pad-inline-start, var(--ta-pad-inline-base));--ta-pad-inline-end-base:var(--ta-pad-inline-end, var(--ta-pad-inline-base));--ta-pad-block-start-base:var(--ta-pad-block-start, var(--ta-pad-block-base));--ta-pad-block-end-base:var(--ta-pad-block-end, var(--ta-pad-block-base));--ta-pad-inline-start-value:calc(var(--ta-pad-inline-start-base) + var(--ta-safe-left));--ta-pad-inline-end-value:calc(var(--ta-pad-inline-end-base) + var(--ta-safe-right));--ta-pad-block-start-value:calc(var(--ta-pad-block-start-base) + var(--ta-safe-top));--ta-pad-block-end-value:calc(var(--ta-pad-block-end-base) + var(--ta-safe-bottom));--ta-mar-base:var(--ta-mar, 0);--ta-mar-inline-base:var(--ta-mar-inline, var(--ta-mar-base));--ta-mar-block-base:var(--ta-mar-block, var(--ta-mar-base));--ta-mar-inline-start-value:var(--ta-mar-inline-start, var(--ta-mar-inline-base));--ta-mar-inline-end-value:var(--ta-mar-inline-end, var(--ta-mar-inline-base));--ta-mar-block-start-value:var(--ta-mar-block-start, var(--ta-mar-block-base));--ta-mar-block-end-value:var(--ta-mar-block-end, var(--ta-mar-block-base));width:var(--ta-width, 100%);max-width:var(--ta-max-w, none);min-height:var(--ta-min-h, auto);height:var(--ta-height, auto);box-sizing:border-box;margin-inline-start:var(--ta-mar-inline-start-value);margin-inline-end:var(--ta-mar-inline-end-value);margin-block-start:var(--ta-mar-block-start-value);margin-block-end:var(--ta-mar-block-end-value);padding-inline-start:var(--ta-pad-inline-start-value);padding-inline-end:var(--ta-pad-inline-end-value);padding-block-start:var(--ta-pad-block-start-value);padding-block-end:var(--ta-pad-block-end-value);color:var(--ta-color, inherit);background-color:var(--ta-bg, transparent);background-image:var(--ta-bg-img, none);background-size:var(--ta-bg-size, cover);background-position:var(--ta-bg-position, 50% 50%);background-repeat:var(--ta-bg-repeat, no-repeat);background-attachment:var(--ta-bg-attachment, scroll);background-blend-mode:var(--ta-bg-blend, normal);border-radius:var(--ta-radius, 0);border:var(--ta-border, none);box-shadow:var(--ta-shadow, none);backdrop-filter:var(--ta-backdrop-filter, none);font-family:var(--ta-font, inherit);font-size:var(--ta-font-size, inherit);font-weight:var(--ta-font-weight, inherit);line-height:var(--ta-line-height, inherit);letter-spacing:var(--ta-letter-spacing, normal);text-transform:var(--ta-text-transform, none);text-align:var(--ta-text-align, initial);overflow-x:var(--ta-overflow-x, var(--ta-overflow, visible));overflow-y:var(--ta-overflow-y, var(--ta-overflow, visible));scroll-behavior:var(--ta-scroll-behavior, auto);scroll-padding:var(--ta-scroll-padding, 0);scroll-padding-inline:var(--ta-scroll-padding-inline, var(--ta-scroll-padding, 0));scroll-padding-block:var(--ta-scroll-padding-block, var(--ta-scroll-padding, 0));scroll-snap-type:var(--ta-scroll-snap, none);isolation:isolate}:host([center]) [part='root']{margin-inline-start:auto;margin-inline-end:auto}[part='root']::before{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:var(--ta-overlay, transparent);opacity:var(--ta-overlay-opacity, 0);mix-blend-mode:var(--ta-overlay-blend, normal);z-index:0}:host([height-mode='dvh']) [part='root']{min-height:var(--ta-min-h, calc(var(--ta-vh, 1vh) * 100));min-height:var(--ta-min-h, 100dvh)}:host([height-mode='screen']) [part='root']{min-height:var(--ta-height, calc(var(--ta-vh, 1vh) * 100));min-height:var(--ta-height, 100dvh);height:var(--ta-height, calc(var(--ta-vh, 1vh) * 100));height:var(--ta-height, 100dvh)}::slotted(*){position:relative;z-index:1;margin:0;scroll-snap-align:var(--ta-snap-align, unset)}@media (max-width: 375px){[part='root']{padding-inline-start:calc(var(--ta-pad-inline-start-base, 0) + var(--ta-safe-left, 0));padding-inline-end:calc(var(--ta-pad-inline-end-base, 0) + var(--ta-safe-right, 0));padding-block-start:calc(var(--ta-pad-block-start-base, 0) + var(--ta-safe-top, 0));padding-block-end:calc(var(--ta-pad-block-end-base, 0) + var(--ta-safe-bottom, 0))}}@media (min-width: 768px){[part='root']{gap:var(--ta-gap-tablet, var(--ta-gap, 0))}}";

const TintoAppRoute = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /** Flex 레이아웃 */
  direction = 'column';
  wrap = 'nowrap';
  justify = 'flex-start';
  align = 'stretch';
  alignContent = 'stretch';
  gap;
  rowGap;
  columnGap;
  /** 크기/여백 */
  width = '100%';
  maxWidth;
  minHeight;
  height;
  center = false;
  /** 높이 제어 (기본값: screen - body 하위 최상단 래퍼이므로 전체 화면 차지) */
  heightMode = 'screen';
  /** 패딩 토큰 */
  padding;
  paddingInline;
  paddingBlock;
  paddingInlineStart;
  paddingInlineEnd;
  paddingBlockStart;
  paddingBlockEnd;
  /** 마진 토큰 */
  margin;
  marginInline;
  marginBlock;
  marginInlineStart;
  marginInlineEnd;
  marginBlockStart;
  marginBlockEnd;
  /** 시각/타이포 토큰 */
  background;
  color;
  radius;
  shadow;
  border;
  backdropFilter;
  font;
  fontSize;
  fontWeight;
  lineHeight;
  letterSpacing;
  textTransform;
  textAlign;
  /** 배경 이미지 */
  src;
  bgSize = 'cover';
  bgPosition = '50% 50%';
  bgRepeat = 'no-repeat';
  bgAttachment = 'scroll';
  bgBlend = 'normal';
  /** 오버레이 */
  overlay;
  overlayOpacity;
  overlayBlend;
  /** 스크롤/세이프에어리어 */
  safeArea = false;
  overflow;
  overflowX = 'visible';
  overflowY = 'visible';
  scrollBehavior = 'auto';
  scrollPadding;
  scrollPaddingInline;
  scrollPaddingBlock;
  scrollSnapType;
  snapAlign;
  updateVhVar = () => {
    try {
      const vh = window.innerHeight * 0.01;
      this.el.style.setProperty('--ta-vh', `${vh}px`);
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
  buildStyleVars() {
    const safeUrl = this.src ? this.src.replace(/"/g, '%22').replace(/\)/g, '%29') : undefined;
    const bgImg = safeUrl ? `url("${safeUrl}")` : undefined;
    const overlayOpacity = this.overlay ? String(this.overlayOpacity ?? 1) : undefined;
    const entries = [
      ['--ta-dir', this.direction],
      ['--ta-wrap', this.wrap],
      ['--ta-justify', this.justify],
      ['--ta-align', this.align],
      ['--ta-align-content', this.alignContent],
      ['--ta-gap', this.gap],
      ['--ta-row-gap', this.rowGap],
      ['--ta-column-gap', this.columnGap],
      ['--ta-width', this.width],
      ['--ta-max-w', this.maxWidth],
      ['--ta-min-h', this.minHeight],
      ['--ta-height', this.height],
      ['--ta-pad', this.padding],
      ['--ta-pad-inline', this.paddingInline],
      ['--ta-pad-block', this.paddingBlock],
      ['--ta-pad-inline-start', this.paddingInlineStart],
      ['--ta-pad-inline-end', this.paddingInlineEnd],
      ['--ta-pad-block-start', this.paddingBlockStart],
      ['--ta-pad-block-end', this.paddingBlockEnd],
      ['--ta-mar', this.margin],
      ['--ta-mar-inline', this.marginInline],
      ['--ta-mar-block', this.marginBlock],
      ['--ta-mar-inline-start', this.marginInlineStart],
      ['--ta-mar-inline-end', this.marginInlineEnd],
      ['--ta-mar-block-start', this.marginBlockStart],
      ['--ta-mar-block-end', this.marginBlockEnd],
      ['--ta-bg', this.background],
      ['--ta-color', this.color],
      ['--ta-radius', this.radius],
      ['--ta-shadow', this.shadow],
      ['--ta-border', this.border],
      ['--ta-backdrop-filter', this.backdropFilter],
      ['--ta-font', this.font],
      ['--ta-font-size', this.fontSize],
      ['--ta-font-weight', this.fontWeight],
      ['--ta-line-height', this.lineHeight],
      ['--ta-letter-spacing', this.letterSpacing],
      ['--ta-text-transform', this.textTransform],
      ['--ta-text-align', this.textAlign],
      ['--ta-bg-img', bgImg],
      ['--ta-bg-size', this.bgSize],
      ['--ta-bg-position', this.bgPosition],
      ['--ta-bg-repeat', this.bgRepeat],
      ['--ta-bg-attachment', this.bgAttachment],
      ['--ta-bg-blend', this.bgBlend],
      ['--ta-overlay', this.overlay],
      ['--ta-overlay-opacity', overlayOpacity],
      ['--ta-overlay-blend', this.overlayBlend],
      ['--ta-scroll-behavior', this.scrollBehavior],
      ['--ta-scroll-padding', this.scrollPadding],
      ['--ta-scroll-padding-inline', this.scrollPaddingInline],
      ['--ta-scroll-padding-block', this.scrollPaddingBlock],
      ['--ta-scroll-snap', this.scrollSnapType],
      ['--ta-snap-align', this.snapAlign],
      ['--ta-overflow', this.overflow],
      ['--ta-overflow-x', this.overflowX],
      ['--ta-overflow-y', this.overflowY],
    ];
    const vars = {};
    for (const [name, value] of entries) {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        vars[name] = String(value);
      }
    }
    return vars;
  }
  render() {
    const styleVars = this.buildStyleVars();
    const ariaLabel = this.el.getAttribute('aria-label') ?? undefined;
    const ariaLabelledby = this.el.getAttribute('aria-labelledby') ?? undefined;
    const ariaDescribedby = this.el.getAttribute('aria-describedby') ?? undefined;
    const role = this.el.getAttribute('role') ?? undefined;
    return h(
      'main',
      {
        key: 'd1cc73a7c382ac1ffa93b4f9a94f8c87cda05bf0',
        part: 'root',
        class: 'tinto-app-route',
        style: styleVars,
        role: role,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
      },
      h('slot', { key: '6a1d740653de3b7e2da1d1bcc33c9aef813a9fb7' }),
    );
  }
};
TintoAppRoute.style = appRouteCss;

export { TintoAppRoute as tinto_app_route };
//# sourceMappingURL=tinto-app-route.entry.js.map
