import { Component, Prop, Element, h, Host } from '@stencil/core';

export type TintoBadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
export type TintoBadgeSize = 'sm' | 'md';

@Component({
  tag: 'tinto-badge',
  styleUrl: 'badge.css',
  shadow: true,
})
export class TintoBadge {
  @Element() el!: HTMLElement;

  /**
   * 색상/의미 스타일
   */
  @Prop({ reflect: true }) variant: TintoBadgeVariant = 'neutral';

  /**
   * 사이즈
   */
  @Prop({ reflect: true }) size: TintoBadgeSize = 'md';

  /**
   * pill 모양 여부 (full radius)
   */
  @Prop({ reflect: true }) pill: boolean = true;

  /**
   * 소프트 톤 (배경 연한 스타일)
   */
  @Prop({ reflect: true }) soft: boolean = true;

  /**
   * 아웃라인 모드 (배경 없음, border만)
   */
  @Prop({ reflect: true }) outline: boolean = false;

  render() {
    const classes = {
      'tinto-badge': true,
      [`tinto-badge--${this.variant}`]: true,
      [`tinto-badge--${this.size}`]: true,
      'tinto-badge--pill': this.pill,
      'tinto-badge--soft': this.soft,
      'tinto-badge--outline': this.outline,
    };

    return (
      <Host>
        <span class={classes}>
          <slot>Badge</slot>
        </span>
      </Host>
    );
  }
}
