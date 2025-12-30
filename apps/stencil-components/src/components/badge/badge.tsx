// badge.tsx
import { Component, h, Prop, Element } from '@stencil/core';
import type { BadgeVariant, BadgeSize, BadgeShape } from './badge.types';

@Component({
  tag: 'tinto-badge',
  styleUrl: 'badge.css',
  shadow: true,
})
export class TintoBadge {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 배지 variant */
  @Prop({ reflect: true }) variant: BadgeVariant = 'default';

  /** 배지 크기 */
  @Prop({ reflect: true }) size: BadgeSize = 'md';

  /** 배지 형태 */
  @Prop({ reflect: true }) shape: BadgeShape = 'default';

  /** 배지 텍스트 (슬롯으로도 대체 가능) */
  @Prop({ reflect: true }) label?: string;

  /** 배지 최대값 (숫자 표시 시, 초과 시 "+99" 형식) */
  @Prop({ reflect: true }) max?: number;

  /** 배지 값 (숫자 표시용) */
  @Prop({ reflect: true }) count?: number;

  /** 점 형태만 표시 (텍스트 없음) */
  @Prop({ reflect: true }) dot: boolean = false;

  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /* ============================ Render ============================ */

  private formatCount = (count?: number, max?: number): string => {
    if (count === undefined || count === null) return '';
    if (max !== undefined && count > max) {
      return `${max}+`;
    }
    return count.toString();
  };

  render() {
    const displayCount = this.count !== undefined ? this.formatCount(this.count, this.max) : null;
    const showDot = this.dot || this.shape === 'dot';

    if (showDot) {
      return (
        <span
          class={`badge dot ${this.variant} ${this.size} ${this.disabled ? 'disabled' : ''}`}
          part="badge"
          role="status"
          aria-label={this.label || displayCount || 'Badge'}
          aria-disabled={this.disabled}
        >
          <slot />
        </span>
      );
    }

    const hasContent = displayCount !== null || this.label || this.el.querySelector('[slot]');
    if (!hasContent) {
      return null;
    }

    return (
      <span
        class={`badge ${this.variant} ${this.size} ${this.shape} ${this.disabled ? 'disabled' : ''}`}
        part="badge"
        role="status"
        aria-label={this.label || displayCount || 'Badge'}
        aria-disabled={this.disabled}
      >
        <slot>{displayCount !== null ? displayCount : this.label}</slot>
      </span>
    );
  }
}
