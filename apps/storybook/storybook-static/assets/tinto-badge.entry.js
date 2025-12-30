import { r as registerInstance, g as getElement, h } from './index-CgnYPz94.js';

const badgeCss =
  ':host{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}.badge{display:inline-flex;align-items:center;justify-content:center;font-weight:500;line-height:1;white-space:nowrap;border-radius:4px;box-sizing:border-box}.badge.default{background-color:var(--t-badge-default-bg, #f3f4f6);color:var(--t-badge-default-color, #374151)}.badge.primary{background-color:var(--t-badge-primary-bg, #3b82f6);color:var(--t-badge-primary-color, #ffffff)}.badge.secondary{background-color:var(--t-badge-secondary-bg, #6b7280);color:var(--t-badge-secondary-color, #ffffff)}.badge.success{background-color:var(--t-badge-success-bg, #10b981);color:var(--t-badge-success-color, #ffffff)}.badge.warning{background-color:var(--t-badge-warning-bg, #f59e0b);color:var(--t-badge-warning-color, #ffffff)}.badge.error{background-color:var(--t-badge-error-bg, #ef4444);color:var(--t-badge-error-color, #ffffff)}.badge.info{background-color:var(--t-badge-info-bg, #3b82f6);color:var(--t-badge-info-color, #ffffff)}.badge.sm{font-size:11px;padding:2px 6px;min-height:18px}.badge.md{font-size:12px;padding:4px 8px;min-height:20px}.badge.lg{font-size:14px;padding:6px 12px;min-height:24px}.badge.pill{border-radius:9999px}.badge.dot{width:8px;height:8px;padding:0;min-width:8px;min-height:8px;border-radius:50%}.badge.sm.dot{width:6px;height:6px;min-width:6px;min-height:6px}.badge.lg.dot{width:10px;height:10px;min-width:10px;min-height:10px}.badge:focus-visible{outline:2px solid var(--t-badge-focus-color, #005fcc);outline-offset:2px}@media (prefers-reduced-motion: reduce){.badge{transition:none}}@media (max-width: 375px){.badge.sm{font-size:10px;padding:2px 5px;min-height:16px}.badge.md{font-size:11px;padding:3px 7px;min-height:18px}.badge.lg{font-size:13px;padding:5px 10px;min-height:22px}}@media (min-width: 768px){.badge.sm{font-size:12px;padding:3px 7px;min-height:20px}.badge.md{font-size:13px;padding:5px 9px;min-height:22px}.badge.lg{font-size:15px;padding:7px 14px;min-height:26px}}';

const TintoBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 배지 variant */
  variant = 'default';
  /** 배지 크기 */
  size = 'md';
  /** 배지 형태 */
  shape = 'default';
  /** 배지 텍스트 (슬롯으로도 대체 가능) */
  label;
  /** 배지 최대값 (숫자 표시 시, 초과 시 "+99" 형식) */
  max;
  /** 배지 값 (숫자 표시용) */
  count;
  /** 점 형태만 표시 (텍스트 없음) */
  dot = false;
  /** 비활성화 여부 */
  disabled = false;
  /* ============================ Render ============================ */
  formatCount = (count, max) => {
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
      return h(
        'span',
        {
          class: `badge dot ${this.variant} ${this.size} ${this.disabled ? 'disabled' : ''}`,
          part: 'badge',
          role: 'status',
          'aria-label': this.label || displayCount || 'Badge',
          'aria-disabled': this.disabled,
        },
        h('slot', null),
      );
    }
    const hasContent = displayCount !== null || this.label || this.el.querySelector('[slot]');
    if (!hasContent) {
      return null;
    }
    return h(
      'span',
      {
        class: `badge ${this.variant} ${this.size} ${this.shape} ${this.disabled ? 'disabled' : ''}`,
        part: 'badge',
        role: 'status',
        'aria-label': this.label || displayCount || 'Badge',
        'aria-disabled': this.disabled,
      },
      h('slot', null, displayCount !== null ? displayCount : this.label),
    );
  }
};
TintoBadge.style = badgeCss;

export { TintoBadge as tinto_badge };
//# sourceMappingURL=tinto-badge.entry.js.map
