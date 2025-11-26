import { r as registerInstance, g as getElement, h, H as Host } from './index-3CssInHd.js';

const badgeCss =
  ":host{display:inline-block;font-family:system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    'Noto Sans KR',\n    'Apple SD Gothic Neo',\n    'Malgun Gothic',\n    sans-serif}:host([hidden]){display:none !important}.tinto-badge{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:0.25rem;padding:0.1rem 0.45rem;font-size:0.75rem;line-height:1.2;font-weight:500;border-radius:0.5rem;border-width:1px;border-style:solid;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis;transition:background-color 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease}.tinto-badge--sm{padding:0.05rem 0.35rem;font-size:0.7rem;border-radius:0.45rem}.tinto-badge--md{padding:0.12rem 0.55rem;font-size:0.78rem;border-radius:0.6rem}.tinto-badge--pill{border-radius:999px}.tinto-badge--neutral{--badge-color:#374151;--badge-bg:#e5e7eb;--badge-border:#d1d5db;--badge-soft-bg:#f3f4f6}.tinto-badge--primary{--badge-color:#1d4ed8;--badge-bg:#dbeafe;--badge-border:#bfdbfe;--badge-soft-bg:#eff6ff}.tinto-badge--success{--badge-color:#15803d;--badge-bg:#dcfce7;--badge-border:#bbf7d0;--badge-soft-bg:#ecfdf3}.tinto-badge--warning{--badge-color:#92400e;--badge-bg:#fef3c7;--badge-border:#fde68a;--badge-soft-bg:#fffbeb}.tinto-badge--danger{--badge-color:#b91c1c;--badge-bg:#fee2e2;--badge-border:#fecaca;--badge-soft-bg:#fef2f2}.tinto-badge--soft{background-color:var(--badge-soft-bg);color:var(--badge-color);border-color:transparent}.tinto-badge--outline{background-color:transparent;color:var(--badge-color);border-color:var(--badge-border)}.tinto-badge--soft.tinto-badge--outline{background-color:var(--badge-soft-bg);border-color:rgba(148, 163, 184, 0.4)}.tinto-badge:not(.tinto-badge--soft):not(.tinto-badge--outline){background-color:var(--badge-bg);color:var(--badge-color);border-color:var(--badge-border)}";

const TintoBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /**
   * 색상/의미 스타일
   */
  variant = 'neutral';
  /**
   * 사이즈
   */
  size = 'md';
  /**
   * pill 모양 여부 (full radius)
   */
  pill = true;
  /**
   * 소프트 톤 (배경 연한 스타일)
   */
  soft = true;
  /**
   * 아웃라인 모드 (배경 없음, border만)
   */
  outline = false;
  render() {
    const classes = {
      'tinto-badge': true,
      [`tinto-badge--${this.variant}`]: true,
      [`tinto-badge--${this.size}`]: true,
      'tinto-badge--pill': this.pill,
      'tinto-badge--soft': this.soft,
      'tinto-badge--outline': this.outline,
    };
    return h(
      Host,
      { key: 'd91162c97eb905c3324576cf687fae88d55831b7' },
      h(
        'span',
        { key: 'a490a555d8fe0d752a1fd20d3d01269b8dcacde8', class: classes },
        h('slot', { key: '4b97f6bd9bb886ca13ffcc8cf813275dc05961a8' }, 'Badge'),
      ),
    );
  }
};
TintoBadge.style = badgeCss;

export { TintoBadge as tinto_badge };
//# sourceMappingURL=tinto-badge.entry.js.map
