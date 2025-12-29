import { Component, Element, h, Prop } from '@stencil/core';
import type {
  AlignContent,
  AlignItems,
  BgAttachment,
  BgBlend,
  BgRepeat,
  BgSize,
  FlexDirection,
  FlexWrap,
  HeightMode,
  Justify,
  OverflowMode,
  ScrollBehavior,
  ScrollSnapType,
  SnapAlign,
  TextAlign,
  TextTransform,
} from '../../types/common.types';

@Component({
  tag: 'tinto-app-route',
  styleUrl: 'app-route.css',
  shadow: true,
})
export class TintoAppRoute {
  @Element() el!: HTMLElement;

  /** Flex 레이아웃 */
  @Prop({ reflect: true }) direction: FlexDirection = 'column';
  @Prop({ reflect: true }) wrap: FlexWrap = 'nowrap';
  @Prop({ reflect: true }) justify: Justify = 'flex-start';
  @Prop({ reflect: true }) align: AlignItems = 'stretch';
  @Prop({ reflect: true, attribute: 'align-content' }) alignContent: AlignContent = 'stretch';
  @Prop({ reflect: true }) gap?: string;
  @Prop({ reflect: true, attribute: 'row-gap' }) rowGap?: string;
  @Prop({ reflect: true, attribute: 'column-gap' }) columnGap?: string;

  /** 크기/여백 */
  @Prop({ reflect: true }) width: string = '100%';
  @Prop({ reflect: true, attribute: 'max-width' }) maxWidth?: string;
  @Prop({ reflect: true, attribute: 'min-height' }) minHeight?: string;
  @Prop({ reflect: true }) height?: string;
  @Prop({ reflect: true }) center: boolean = false;
  @Prop({ reflect: true, attribute: 'height-mode' }) heightMode: HeightMode = 'auto';

  /** 패딩 토큰 */
  @Prop({ reflect: true }) padding?: string;
  @Prop({ reflect: true, attribute: 'padding-inline' }) paddingInline?: string;
  @Prop({ reflect: true, attribute: 'padding-block' }) paddingBlock?: string;
  @Prop({ reflect: true, attribute: 'padding-inline-start' }) paddingInlineStart?: string;
  @Prop({ reflect: true, attribute: 'padding-inline-end' }) paddingInlineEnd?: string;
  @Prop({ reflect: true, attribute: 'padding-block-start' }) paddingBlockStart?: string;
  @Prop({ reflect: true, attribute: 'padding-block-end' }) paddingBlockEnd?: string;

  /** 마진 토큰 */
  @Prop({ reflect: true }) margin?: string;
  @Prop({ reflect: true, attribute: 'margin-inline' }) marginInline?: string;
  @Prop({ reflect: true, attribute: 'margin-block' }) marginBlock?: string;
  @Prop({ reflect: true, attribute: 'margin-inline-start' }) marginInlineStart?: string;
  @Prop({ reflect: true, attribute: 'margin-inline-end' }) marginInlineEnd?: string;
  @Prop({ reflect: true, attribute: 'margin-block-start' }) marginBlockStart?: string;
  @Prop({ reflect: true, attribute: 'margin-block-end' }) marginBlockEnd?: string;

  /** 시각/타이포 토큰 */
  @Prop({ reflect: true }) background?: string;
  @Prop({ reflect: true }) color?: string;
  @Prop({ reflect: true }) radius?: string;
  @Prop({ reflect: true }) shadow?: string;
  @Prop({ reflect: true }) border?: string;
  @Prop({ reflect: true, attribute: 'backdrop-filter' }) backdropFilter?: string;

  @Prop({ reflect: true }) font?: string;
  @Prop({ reflect: true, attribute: 'font-size' }) fontSize?: string;
  @Prop({ reflect: true, attribute: 'font-weight' }) fontWeight?: string;
  @Prop({ reflect: true, attribute: 'line-height' }) lineHeight?: string;
  @Prop({ reflect: true, attribute: 'letter-spacing' }) letterSpacing?: string;
  @Prop({ reflect: true, attribute: 'text-transform' }) textTransform?: TextTransform;
  @Prop({ reflect: true, attribute: 'text-align' }) textAlign?: TextAlign;

  /** 배경 이미지 */
  @Prop({ reflect: true }) src?: string;
  @Prop({ reflect: true, attribute: 'bg-size' }) bgSize: BgSize = 'cover';
  @Prop({ reflect: true, attribute: 'bg-position' }) bgPosition: string = '50% 50%';
  @Prop({ reflect: true, attribute: 'bg-repeat' }) bgRepeat: BgRepeat = 'no-repeat';
  @Prop({ reflect: true, attribute: 'bg-attachment' }) bgAttachment: BgAttachment = 'scroll';
  @Prop({ reflect: true, attribute: 'bg-blend' }) bgBlend: BgBlend = 'normal';

  /** 오버레이 */
  @Prop({ reflect: true }) overlay?: string;
  @Prop({ reflect: true, attribute: 'overlay-opacity' }) overlayOpacity?: number;
  @Prop({ reflect: true, attribute: 'overlay-blend' }) overlayBlend?: string;

  /** 스크롤/세이프에어리어 */
  @Prop({ reflect: true, attribute: 'safe-area' }) safeArea: boolean = false;
  @Prop({ reflect: true }) overflow?: OverflowMode;
  @Prop({ reflect: true, attribute: 'overflow-x' }) overflowX: OverflowMode = 'visible';
  @Prop({ reflect: true, attribute: 'overflow-y' }) overflowY: OverflowMode = 'visible';
  @Prop({ reflect: true, attribute: 'scroll-behavior' }) scrollBehavior: ScrollBehavior = 'auto';
  @Prop({ reflect: true, attribute: 'scroll-padding' }) scrollPadding?: string;
  @Prop({ reflect: true, attribute: 'scroll-padding-inline' }) scrollPaddingInline?: string;
  @Prop({ reflect: true, attribute: 'scroll-padding-block' }) scrollPaddingBlock?: string;
  @Prop({ reflect: true, attribute: 'scroll-snap-type' }) scrollSnapType?: ScrollSnapType;
  @Prop({ reflect: true, attribute: 'snap-align' }) snapAlign?: SnapAlign;

  private updateVhVar = () => {
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

  private buildStyleVars(): Record<string, string> {
    const safeUrl = this.src ? this.src.replace(/"/g, '%22').replace(/\)/g, '%29') : undefined;
    const bgImg = safeUrl ? `url("${safeUrl}")` : undefined;
    const overlayOpacity = this.overlay ? String(this.overlayOpacity ?? 1) : undefined;

    const entries: Array<[string, string | undefined]> = [
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

    const vars: Record<string, string> = {};
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

    return (
      <main
        part="root"
        class="tinto-app-route"
        style={styleVars as any}
        role={role as any}
        aria-label={ariaLabel as any}
        aria-labelledby={ariaLabelledby as any}
        aria-describedby={ariaDescribedby as any}
      >
        <slot></slot>
      </main>
    );
  }
}
