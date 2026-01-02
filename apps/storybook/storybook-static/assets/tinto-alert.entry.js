import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const alertCss =
  ':host{display:block;width:100%}:host([hidden]){display:none !important}.alert-container{position:relative;display:flex;align-items:flex-start;gap:var(--t-alert-gap, clamp(12px, 2.5vw, 16px));width:100%;padding:var(--t-alert-padding, clamp(12px, 2.5vw, 16px) clamp(16px, 3vw, 24px));border-radius:var(--t-alert-radius, clamp(8px, 2vw, 12px));box-shadow:var(--t-alert-shadow, 0 2px 8px rgba(0, 0, 0, 0.1));animation:alertFadeIn 0.3s ease}@keyframes alertFadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.alert-container.type-success{background:var(--t-alert-success-bg, #f0fdf4);border:var(--t-alert-success-border, 1px solid #86efac);color:var(--t-alert-success-color, #166534)}.alert-container.type-success .alert-icon{color:var(--t-alert-success-icon-color, #22c55e)}.alert-container.type-error{background:var(--t-alert-error-bg, #fef2f2);border:var(--t-alert-error-border, 1px solid #fca5a5);color:var(--t-alert-error-color, #991b1b)}.alert-container.type-error .alert-icon{color:var(--t-alert-error-icon-color, #ef4444)}.alert-container.type-warning{background:var(--t-alert-warning-bg, #fffbeb);border:var(--t-alert-warning-border, 1px solid #fde047);color:var(--t-alert-warning-color, #854d0e)}.alert-container.type-warning .alert-icon{color:var(--t-alert-warning-icon-color, #eab308)}.alert-container.type-info{background:var(--t-alert-info-bg, #eff6ff);border:var(--t-alert-info-border, 1px solid #93c5fd);color:var(--t-alert-info-color, #1e40af)}.alert-container.type-info .alert-icon{color:var(--t-alert-info-icon-color, #3b82f6)}.alert-container.variant-filled.type-success{background:var(--t-alert-success-icon-color, #22c55e);border:none;color:#ffffff}.alert-container.variant-filled.type-success .alert-icon{color:#ffffff}.alert-container.variant-filled.type-error{background:var(--t-alert-error-icon-color, #ef4444);border:none;color:#ffffff}.alert-container.variant-filled.type-error .alert-icon{color:#ffffff}.alert-container.variant-filled.type-warning{background:var(--t-alert-warning-icon-color, #eab308);border:none;color:#000000}.alert-container.variant-filled.type-warning .alert-icon{color:#000000}.alert-container.variant-filled.type-info{background:var(--t-alert-info-icon-color, #3b82f6);border:none;color:#ffffff}.alert-container.variant-filled.type-info .alert-icon{color:#ffffff}.alert-container.variant-outlined{background:transparent}.alert-container.variant-outlined.type-success{border-width:2px}.alert-container.variant-outlined.type-error{border-width:2px}.alert-container.variant-outlined.type-warning{border-width:2px}.alert-container.variant-outlined.type-info{border-width:2px}.alert-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--t-alert-icon-size, clamp(20px, 4vw, 24px));height:var(--t-alert-icon-size, clamp(20px, 4vw, 24px));margin:var(--t-alert-icon-margin, 0 clamp(12px, 2.5vw, 16px) 0 0);font-size:var(--t-alert-icon-size, clamp(20px, 4vw, 24px));font-weight:bold;line-height:1}.alert-content{flex:1;display:flex;flex-direction:column;gap:clamp(4px, 1vw, 8px);min-width:0}.alert-title{font-size:var(--t-alert-title-font-size, clamp(16px, 3vw, 18px));font-weight:var(--t-alert-title-font-weight, 600);margin:var(--t-alert-title-margin, 0 0 clamp(4px, 1vw, 8px) 0);line-height:1.4}.alert-message{font-size:var(--t-alert-content-font-size, clamp(14px, 2.5vw, 16px));line-height:var(--t-alert-content-line-height, 1.6);color:var(--t-alert-content-color, inherit)}.alert-actions{display:flex;align-items:center;gap:clamp(8px, 2vw, 12px);margin-top:clamp(8px, 2vw, 12px)}.alert-close{all:unset;box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--t-alert-close-size, clamp(32px, 6vw, 40px));height:var(--t-alert-close-size, clamp(32px, 6vw, 40px));min-width:var(--t-alert-close-min-size, 44px);min-height:var(--t-alert-close-min-size, 44px);background:transparent;color:var(--t-alert-close-color, #999999);border:none;border-radius:var(--t-alert-close-radius, 50%);font-size:clamp(20px, 4vw, 24px);line-height:1;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;transition:background-color 0.2s ease,\n    color 0.2s ease,\n    transform 0.1s ease;outline:none}.alert-close:focus-visible{outline:2px solid currentColor;outline-offset:2px}.alert-close:hover:not(:active){background:var(--t-alert-close-bg-hover, rgba(0, 0, 0, 0.05));color:var(--t-alert-close-color-hover, #333333)}.alert-close:active{transform:scale(0.95)}.alert-container.size-sm{padding:clamp(8px, 2vw, 12px) clamp(12px, 2.5vw, 16px)}.alert-container.size-sm .alert-icon{width:clamp(16px, 3vw, 20px);height:clamp(16px, 3vw, 20px);font-size:clamp(16px, 3vw, 20px)}.alert-container.size-sm .alert-title{font-size:clamp(14px, 2.5vw, 16px)}.alert-container.size-sm .alert-message{font-size:clamp(12px, 2vw, 14px)}.alert-container.size-lg{padding:clamp(16px, 3vw, 20px) clamp(20px, 3.5vw, 28px)}.alert-container.size-lg .alert-icon{width:clamp(24px, 5vw, 28px);height:clamp(24px, 5vw, 28px);font-size:clamp(24px, 5vw, 28px)}.alert-container.size-lg .alert-title{font-size:clamp(18px, 3.5vw, 20px)}.alert-container.size-lg .alert-message{font-size:clamp(16px, 3vw, 18px)}@media (max-width: 767px){.alert-container{padding:clamp(12px, 2.5vw, 14px) clamp(14px, 2.5vw, 18px);gap:clamp(10px, 2vw, 12px)}.alert-icon{width:clamp(18px, 3.5vw, 22px);height:clamp(18px, 3.5vw, 22px);font-size:clamp(18px, 3.5vw, 22px)}}@media (min-width: 1920px){.alert-container{padding:clamp(16px, 2vw, 20px) clamp(20px, 2.5vw, 24px)}.alert-title{font-size:clamp(17px, 1.5vw, 18px)}.alert-message{font-size:clamp(15px, 1.5vw, 16px)}}@media (prefers-reduced-motion: reduce){.alert-container{animation:none}.alert-close{transition:none}}';

const TintoAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoClose = createEvent(this, 'tintoClose');
    this.tintoAction = createEvent(this, 'tintoAction');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 알림 타입 */
  type = 'info';
  /** 알림 스타일 variant */
  variant = 'default';
  /** 알림 크기 */
  size = 'md';
  /** 닫기 버튼 표시 */
  closable = false;
  /** 자동 닫기 */
  autoClose = false;
  /** 자동 닫기 시간 (ms) */
  closeAfter = 5000;
  /** 아이콘 표시 */
  showIcon = true;
  /** 제목 (선택적) */
  alertTitle;
  /* ============================ Events ============================ */
  /** 닫기 이벤트 */
  tintoClose;
  /** 액션 버튼 클릭 이벤트 */
  tintoAction;
  /* ============================ State ============================ */
  isVisible = true;
  autoCloseTimer;
  /* ============================ Watchers ============================ */
  handleAutoCloseChange() {
    this.setupAutoClose();
  }
  /* ============================ Lifecycle ============================ */
  componentDidLoad() {
    this.setupAutoClose();
  }
  disconnectedCallback() {
    this.clearAutoClose();
  }
  /* ============================ Methods ============================ */
  /** 알림 닫기 */
  async close() {
    this.isVisible = false;
    this.clearAutoClose();
    this.tintoClose.emit();
  }
  /** 알림 표시 */
  async show() {
    this.isVisible = true;
    this.setupAutoClose();
  }
  /* ============================ Private Methods ============================ */
  /** 자동 닫기 설정 */
  setupAutoClose() {
    this.clearAutoClose();
    if (this.autoClose && this.isVisible && this.closeAfter > 0) {
      this.autoCloseTimer = window.setTimeout(() => {
        this.close();
      }, this.closeAfter);
    }
  }
  /** 자동 닫기 타이머 제거 */
  clearAutoClose() {
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
      this.autoCloseTimer = undefined;
    }
  }
  /** 닫기 버튼 클릭 핸들러 */
  handleClose = () => {
    this.close();
  };
  /** 아이콘 렌더링 */
  renderIcon() {
    if (!this.showIcon) return null;
    const iconMap = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ',
    };
    return h(
      'span',
      { class: 'alert-icon', part: 'icon', 'aria-hidden': 'true' },
      iconMap[this.type],
    );
  }
  /* ============================ Render ============================ */
  render() {
    if (!this.isVisible) {
      return null;
    }
    const role = this.type === 'error' ? 'alert' : 'status';
    const ariaLive = this.type === 'error' ? 'assertive' : 'polite';
    return h(
      'div',
      {
        class: {
          'alert-container': true,
          [`type-${this.type}`]: true,
          [`variant-${this.variant}`]: true,
          [`size-${this.size}`]: true,
        },
        part: 'root',
        role: role,
        'aria-live': ariaLive,
        'aria-atomic': 'true',
      },
      this.renderIcon(),
      h(
        'div',
        { class: 'alert-content', part: 'content' },
        this.alertTitle &&
          h(
            'div',
            { class: 'alert-title', part: 'title' },
            h('slot', { name: 'title' }, this.alertTitle),
          ),
        h('div', { class: 'alert-message', part: 'message' }, h('slot', null)),
        h('div', { class: 'alert-actions', part: 'actions' }, h('slot', { name: 'action' })),
      ),
      this.closable &&
        h(
          'button',
          {
            class: 'alert-close',
            part: 'close',
            onClick: this.handleClose,
            'aria-label': '\uB2EB\uAE30',
            type: 'button',
          },
          '\u00D7',
        ),
    );
  }
  static get watchers() {
    return {
      autoClose: ['handleAutoCloseChange'],
      closeAfter: ['handleAutoCloseChange'],
    };
  }
};
TintoAlert.style = alertCss;

export { TintoAlert as tinto_alert };
//# sourceMappingURL=tinto-alert.entry.js.map
