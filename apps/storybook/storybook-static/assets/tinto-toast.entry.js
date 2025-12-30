import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const toastCss =
  ':host{display:block;position:fixed;z-index:10001}:host([hidden]){display:none !important}.toast{display:flex;align-items:center;gap:12px;min-width:300px;max-width:500px;padding:12px 16px;background:var(--t-toast-bg, #ffffff);border-radius:var(--t-toast-radius, 8px);box-shadow:var(--t-toast-shadow, 0 4px 12px rgba(0, 0, 0, 0.15));animation:slideIn 0.3s ease}@keyframes slideIn{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}.toast.top-left{top:20px;left:20px}.toast.top-center{top:20px;left:50%;transform:translateX(-50%)}.toast.top-right{top:20px;right:20px}.toast.bottom-left{bottom:20px;left:20px}.toast.bottom-center{bottom:20px;left:50%;transform:translateX(-50%)}.toast.bottom-right{bottom:20px;right:20px}.toast.sm{min-width:250px;max-width:400px;padding:8px 12px;font-size:12px}.toast.sm .toast-icon{width:16px;height:16px;font-size:14px}.toast.sm .toast-message{font-size:12px}.toast.md{min-width:300px;max-width:500px;padding:12px 16px;font-size:14px}.toast.lg{min-width:350px;max-width:600px;padding:16px 20px;font-size:16px}.toast.lg .toast-icon{width:24px;height:24px;font-size:18px}.toast.lg .toast-message{font-size:16px}.toast.success{background:var(--t-toast-success-bg, #d4edda);color:var(--t-toast-success-color, #155724);border-left:4px solid var(--t-toast-success-border, #28a745)}.toast.error{background:var(--t-toast-error-bg, #f8d7da);color:var(--t-toast-error-color, #721c24);border-left:4px solid var(--t-toast-error-border, #dc3545)}.toast.warning{background:var(--t-toast-warning-bg, #fff3cd);color:var(--t-toast-warning-color, #856404);border-left:4px solid var(--t-toast-warning-border, #ffc107)}.toast.info{background:var(--t-toast-info-bg, #d1ecf1);color:var(--t-toast-info-color, #0c5460);border-left:4px solid var(--t-toast-info-border, #17a2b8)}.toast-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:20px;height:20px;font-size:16px;font-weight:bold}.toast-message{flex:1;font-size:14px;line-height:1.4}.toast-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:20px;height:20px;min-width:44px;min-height:44px;padding:0;border:none;background:transparent;color:currentColor;cursor:pointer;opacity:0.7;transition:opacity 0.2s ease}.toast-close:hover{opacity:1}.toast-close:focus-visible{outline:2px solid var(--t-toast-focus-color, #005fcc);outline-offset:2px;border-radius:4px}@media (prefers-reduced-motion: reduce){.toast{animation:none}.toast-close{transition:none}}@media (max-width: 375px){.toast{min-width:280px;max-width:calc(100vw - 32px);padding:10px 14px;font-size:13px}.toast.top-left,.toast.top-right,.toast.bottom-left,.toast.bottom-right{left:16px;right:16px;transform:none}.toast.top-center,.toast.bottom-center{left:16px;right:16px;transform:none}.toast-icon{width:18px;height:18px;font-size:14px}.toast-message{font-size:13px}.toast-close{width:18px;height:18px;min-width:44px;min-height:44px}}@media (min-width: 376px) and (max-width: 767px){.toast{min-width:300px;max-width:calc(100vw - 40px)}.toast.top-left,.toast.bottom-left{left:20px}.toast.top-right,.toast.bottom-right{right:20px}}@media (min-width: 768px){.toast{min-width:320px;max-width:500px}}@media (min-width: 1920px){.toast{padding:var(--t-toast-py-desktop, 14px 18px);border-radius:var(--t-toast-radius-desktop, 10px)}.toast-message{font-size:var(--t-toast-message-size-desktop, 15px)}}';

const TintoToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoClose = createEvent(this, 'tintoClose');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 토스트 메시지 */
  message;
  /** 토스트 variant */
  variant = 'info';
  /** 토스트 크기 */
  size = 'md';
  /** 표시 여부 */
  open = false;
  /** 자동 닫기 시간 (ms, 0이면 자동 닫기 안 함) */
  duration = 3000;
  /** 토스트 위치 */
  position = 'bottom-center';
  /** 닫기 버튼 표시 여부 */
  showClose = true;
  /** 비활성화 여부 */
  disabled = false;
  /* ============================ Events ============================ */
  /** 토스트 닫기 이벤트 */
  tintoClose;
  /* ============================ State ============================ */
  timeoutId;
  /* ============================ Methods ============================ */
  /** 토스트 표시 */
  async show() {
    this.open = true;
    if (this.duration > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.hide();
      }, this.duration);
    }
  }
  /** 토스트 숨기기 */
  async hide() {
    this.open = false;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
    this.tintoClose.emit();
  }
  /* ============================ Lifecycle ============================ */
  componentWillLoad() {
    if (this.open && this.duration > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.hide();
      }, this.duration);
    }
  }
  disconnectedCallback() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  /* ============================ Handlers ============================ */
  handleClose = () => {
    if (this.disabled) return;
    this.hide();
  };
  /* ============================ Render ============================ */
  getIcon() {
    switch (this.variant) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  }
  render() {
    if (!this.open) return null;
    return h(
      'div',
      {
        class: `toast ${this.variant} ${this.size} ${this.position} ${this.disabled ? 'disabled' : ''}`,
        part: 'toast',
        role: 'alert',
        'aria-disabled': this.disabled,
      },
      h('span', { class: 'toast-icon', part: 'icon' }, this.getIcon()),
      h('span', { class: 'toast-message', part: 'message' }, this.message),
      this.showClose &&
        h(
          'button',
          {
            class: 'toast-close',
            part: 'close',
            type: 'button',
            'aria-label': '\uB2EB\uAE30',
            onClick: this.handleClose,
          },
          h(
            'svg',
            {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            h('path', {
              d: 'M12 4L4 12M4 4L12 12',
              stroke: 'currentColor',
              'stroke-width': '2',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
            }),
          ),
        ),
    );
  }
};
TintoToast.style = toastCss;

export { TintoToast as tinto_toast };
//# sourceMappingURL=tinto-toast.entry.js.map
