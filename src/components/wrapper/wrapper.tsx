// wrapper.tsx
import { Component, h, Prop, Element } from '@stencil/core';
import { AlignItems, FlexDirection, FlexWrap, Justify, BgSize, BgRepeat, BgAttachment, BgBlend } from './wrapper.types';

@Component({
  tag: 'tinto-wrapper',
  styleUrl: 'wrapper.css',
  shadow: true,
})
export class TintoWrapper {
  @Element() el!: HTMLElement;

  /** Flex (모바일 기본) */
  @Prop({ reflect: true }) direction: FlexDirection = 'row';
  @Prop({ reflect: true }) wrap: FlexWrap = 'nowrap';
  @Prop({ reflect: true }) justify: Justify = 'flex-start';
  @Prop({ reflect: true }) align: AlignItems = 'stretch';
  @Prop({ reflect: true }) gap?: string; // ex) "24px", "1rem"

  /** Flex (데스크탑 오버라이드, >=1920px) */
  @Prop({ reflect: true }) directionDesktop?: FlexDirection;
  @Prop({ reflect: true }) wrapDesktop?: FlexWrap;
  @Prop({ reflect: true }) justifyDesktop?: Justify;
  @Prop({ reflect: true }) alignDesktop?: AlignItems;
  @Prop({ reflect: true }) gapDesktop?: string;

  /** Box / Visual */
  @Prop({ reflect: true }) padding?: string;
  @Prop({ reflect: true }) margin?: string;
  @Prop({ reflect: true }) radius?: string;
  @Prop({ reflect: true }) shadow?: string;
  @Prop({ reflect: true }) border?: string;
  @Prop({ reflect: true }) color?: string;

  /** 배경(색/그라디언트) + 배경 이미지 */
  @Prop({ reflect: true }) background?: string; // color/gradient → background-color 로 매핑
  @Prop({ reflect: true }) src?: string; // background-image url
  @Prop({ reflect: true, attribute: 'bg-size' }) bgSize?: BgSize = 'cover';
  @Prop({ reflect: true, attribute: 'bg-position' }) bgPosition?: string = '50% 50%';
  @Prop({ reflect: true, attribute: 'bg-repeat' }) bgRepeat?: BgRepeat = 'no-repeat';
  @Prop({ reflect: true, attribute: 'bg-attachment' }) bgAttachment?: BgAttachment = 'scroll';
  @Prop({ reflect: true, attribute: 'bg-blend' }) bgBlend?: BgBlend = 'normal';

  /** 오버레이 */
  @Prop({ reflect: true }) overlay?: string; // rgba/hex-with-alpha 권장
  @Prop({ reflect: true, attribute: 'overlay-opacity' }) overlayOpacity?: number;

  /** 부모를 덮는 모드 (absolute; inset:0) */
  @Prop({ reflect: true }) fill: boolean = false;

  render() {
    // CSS var 값 준비: url("…") 형태로 넣을 때 따옴표/괄호 안전화
    const safeUrl = this.src ? this.src.replace(/"/g, '%22').replace(/\)/g, '%29') : undefined;
    const bgImg = safeUrl ? `url("${safeUrl}")` : undefined;
    const ovOpacity = this.overlay ? String(this.overlayOpacity ?? 1) : '0';

    const styleVars: Record<string, string | undefined> = {
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

    return (
      <div part="root" class={{ 'tw-root': true, 'tw-fill': this.fill }} style={styleVars as any}>
        <div part="inner">
          <slot></slot>
        </div>
      </div>
    );
  }
}
