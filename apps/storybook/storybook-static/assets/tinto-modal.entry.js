import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const modalCss =
  ':host{display:block;box-sizing:border-box}:host([hidden]){display:none !important}.modal-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:var(--t-modal-backdrop-padding, clamp(12px, 2vw, 20px));background:var(--t-modal-backdrop-bg, rgba(0, 0, 0, 0.5));backdrop-filter:var(--t-modal-backdrop-blur, blur(4px));animation:fadeIn 0.2s ease;padding-top:max(\n    var(--t-modal-backdrop-padding, clamp(12px, 2vw, 20px)),\n    env(safe-area-inset-top)\n  );padding-bottom:max(\n    var(--t-modal-backdrop-padding, clamp(12px, 2vw, 20px)),\n    env(safe-area-inset-bottom)\n  );padding-left:max(\n    var(--t-modal-backdrop-padding, clamp(12px, 2vw, 20px)),\n    env(safe-area-inset-left)\n  );padding-right:max(\n    var(--t-modal-backdrop-padding, clamp(12px, 2vw, 20px)),\n    env(safe-area-inset-right)\n  )}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.modal-container{position:relative;display:flex;flex-direction:column;width:100%;max-width:var(--t-modal-max-width, 90vw);max-height:var(--t-modal-max-height, 90vh);background:var(--t-modal-bg, #ffffff);border-radius:var(--t-modal-radius, clamp(12px, 2vw, 16px));box-shadow:var(--t-modal-shadow, 0 8px 32px rgba(0, 0, 0, 0.2));animation:slideUp 0.3s ease;overflow:hidden;outline:none;box-sizing:border-box}.modal-close:focus-visible{outline:2px solid var(--t-modal-focus-color, #005fcc);outline-offset:2px;outline-width:var(--t-modal-focus-width, 2px)}.modal-container:focus-visible{outline:2px solid var(--t-modal-focus-color, #005fcc);outline-offset:2px}@media (prefers-reduced-motion: reduce){.modal-backdrop,.modal-container{animation:none}.modal-close{transition:none}.modal-container.bottom-sheet{animation:none}}@keyframes slideUp{from{transform:translateY(clamp(10px, 2vw, 20px));opacity:0}to{transform:translateY(0);opacity:1}}.modal-container.sm{width:100%;max-width:var(--t-modal-sm-width, min(400px, 90vw))}.modal-container.md{width:100%;max-width:var(--t-modal-md-width, min(600px, 90vw))}.modal-container.lg{width:100%;max-width:var(--t-modal-lg-width, min(800px, 90vw))}.modal-container.full{width:var(--t-modal-full-width, 95vw);height:var(--t-modal-full-height, 95vh);max-width:100%;max-height:100%}.modal-container.bottom-sheet{position:fixed;bottom:0;left:0;right:0;top:auto;width:100%;max-width:100%;max-height:var(--t-modal-bottom-sheet-height, 90vh);border-radius:var(\n    --t-modal-bottom-sheet-radius,\n    clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px) 0 0\n  );animation:slideUpFromBottom 0.3s ease;margin:0;padding-bottom:env(safe-area-inset-bottom)}@keyframes slideUpFromBottom{from{transform:translateY(100%)}to{transform:translateY(0)}}.modal-close{position:absolute;top:var(--t-modal-close-top, clamp(8px, 1.5vw, 12px));right:var(--t-modal-close-right, clamp(8px, 1.5vw, 12px));z-index:1;display:flex;align-items:center;justify-content:center;width:clamp(44px, 6vw, 48px);height:clamp(44px, 6vw, 48px);min-width:44px;min-height:44px;padding:0;border:none;background:transparent;color:var(--t-modal-close-color, #666);cursor:pointer;border-radius:50%;transition:background-color 0.2s ease,\n    color 0.2s ease,\n    transform 0.2s ease;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.modal-close:hover{background:var(--t-modal-close-hover-bg, #f0f0f0);color:var(--t-modal-close-hover-color, #333)}.modal-close:active,.modal-close:focus-visible{background:var(--t-modal-close-active-bg, #e0e0e0);transform:scale(0.95)}@media (hover: none){.modal-close:hover{background:transparent;color:var(--t-modal-close-color, #666)}}.modal-header{padding:var(--t-modal-header-padding, clamp(16px, 3vw, 20px) clamp(20px, 4vw, 24px));border-bottom:var(--t-modal-header-border, 1px solid #e0e0e0);flex-shrink:0}.modal-header h2{margin:0;font-size:var(--t-modal-title-size, clamp(18px, 4vw, 20px));font-weight:var(--t-modal-title-weight, 600);line-height:var(--t-modal-title-line-height, 1.4);color:var(--t-modal-title-color, #333)}.modal-body{flex:1;padding:var(--t-modal-body-padding, clamp(16px, 3vw, 24px));overflow-y:auto;overflow-x:hidden;color:var(--t-modal-body-color, #333);font-size:var(--t-modal-body-size, clamp(14px, 2.5vw, 16px));line-height:var(--t-modal-body-line-height, 1.6);scrollbar-width:thin;scrollbar-color:var(--t-modal-scrollbar-color, rgba(0, 0, 0, 0.2)) transparent}.modal-body::-webkit-scrollbar{width:6px}.modal-body::-webkit-scrollbar-track{background:transparent}.modal-body::-webkit-scrollbar-thumb{background:var(--t-modal-scrollbar-thumb, rgba(0, 0, 0, 0.2));border-radius:3px}.modal-body::-webkit-scrollbar-thumb:hover{background:var(--t-modal-scrollbar-thumb-hover, rgba(0, 0, 0, 0.3))}.modal-footer{padding:var(--t-modal-footer-padding, clamp(12px, 2.5vw, 16px) clamp(20px, 4vw, 24px));border-top:var(--t-modal-footer-border, 1px solid #e0e0e0);display:flex;gap:var(--t-modal-footer-gap, clamp(8px, 1.5vw, 12px));justify-content:flex-end;flex-wrap:wrap;flex-shrink:0}@media (max-width: 767px){.modal-backdrop{align-items:flex-end;padding:0;padding-bottom:env(safe-area-inset-bottom)}.modal-container:not(.full){width:100%;max-width:100%;max-height:90vh;border-radius:clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px) 0 0;margin:0}.modal-container.centered{align-self:center;border-radius:clamp(12px, 2vw, 16px);max-height:85vh}}@media (min-width: 768px) and (max-width: 1919px){.modal-backdrop{padding:var(--t-modal-backdrop-padding-tablet, clamp(16px, 2vw, 24px))}.modal-container{max-width:95vw}}@media (min-width: 1920px){.modal-backdrop{padding:var(--t-modal-backdrop-padding-desktop, 24px)}.modal-container{border-radius:var(--t-modal-radius-desktop, clamp(16px, 1.5vw, 20px));box-shadow:var(--t-modal-shadow-desktop, 0 12px 48px rgba(0, 0, 0, 0.25))}.modal-container.sm{max-width:var(--t-modal-sm-width-desktop, 450px)}.modal-container.md{max-width:var(--t-modal-md-width-desktop, 650px)}.modal-container.lg{max-width:var(--t-modal-lg-width-desktop, 900px)}.modal-header{padding:var(--t-modal-header-padding-desktop, clamp(20px, 2vw, 24px) clamp(24px, 2.5vw, 28px))}.modal-header h2{font-size:var(--t-modal-title-size-desktop, clamp(20px, 2vw, 22px))}.modal-body{padding:var(--t-modal-body-padding-desktop, clamp(24px, 2.5vw, 28px));font-size:var(--t-modal-body-size-desktop, clamp(15px, 1.5vw, 16px))}.modal-footer{padding:var(--t-modal-footer-padding-desktop, clamp(16px, 2vw, 20px) clamp(24px, 2.5vw, 28px));gap:var(--t-modal-footer-gap-desktop, 16px)}}';

const TintoModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoOpen = createEvent(this, 'tintoOpen');
    this.tintoClose = createEvent(this, 'tintoClose');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 모달 열림 상태 */
  open = false;
  /** 모달 크기 */
  size = 'md';
  /** 모달 variant */
  variant = 'default';
  /** 닫기 버튼 표시 여부 */
  showClose = true;
  /** 배경 클릭 시 닫기 여부 */
  closeOnBackdrop = true;
  /** ESC 키로 닫기 여부 */
  closeOnEscape = true;
  /** 포커스 트랩 활성화 여부 */
  focusTrap = true;
  /** 자동 포커스 여부 (모달 열릴 때 첫 번째 포커스 가능한 요소에 포커스) */
  autofocus = true;
  /** 모달 설명 ID (aria-describedby용) */
  describedBy;
  /** 비활성화 여부 */
  disabled = false;
  /** 로딩 상태 */
  loading = false;
  /* ============================ Events ============================ */
  /** 모달 열기 이벤트 */
  tintoOpen;
  /** 모달 닫기 이벤트 */
  tintoClose;
  /* ============================ State ============================ */
  previousActiveElement = null;
  modalContainer;
  focusableElements = [];
  firstFocusableElement;
  lastFocusableElement;
  /* ============================ Methods ============================ */
  /** 모달 열기 */
  async openModal() {
    this.previousActiveElement = document.activeElement;
    this.open = true;
    document.body.style.overflow = 'hidden';
    this.tintoOpen.emit();
  }
  /** 모달 닫기 */
  async closeModal() {
    this.open = false;
    document.body.style.overflow = '';
    // 이전 포커스 위치로 복원
    if (this.previousActiveElement && typeof this.previousActiveElement.focus === 'function') {
      setTimeout(() => {
        this.previousActiveElement?.focus();
      }, 0);
    }
  }
  /** 포커스 가능한 요소들 찾기 */
  getFocusableElements() {
    if (!this.modalContainer) return [];
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');
    return Array.from(this.modalContainer.querySelectorAll(selector)).filter(
      (el) => !el.hasAttribute('disabled') && el.offsetParent !== null,
    );
  }
  /** 포커스 트랩 설정 */
  setupFocusTrap() {
    if (!this.focusTrap || !this.modalContainer) return;
    this.focusableElements = this.getFocusableElements();
    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    // 첫 번째 요소에 포커스
    if (this.autofocus && this.firstFocusableElement) {
      setTimeout(() => {
        this.firstFocusableElement?.focus();
      }, 100);
    }
  }
  /** 포커스 트랩 핸들러 */
  handleFocusTrap = (event) => {
    if (!this.focusTrap || !this.open || event.key !== 'Tab') return;
    if (this.focusableElements.length === 0) {
      event.preventDefault();
      return;
    }
    // Shift + Tab (역방향)
    if (event.shiftKey) {
      if (document.activeElement === this.firstFocusableElement) {
        event.preventDefault();
        this.lastFocusableElement?.focus();
      }
    } else {
      // Tab (정방향)
      if (document.activeElement === this.lastFocusableElement) {
        event.preventDefault();
        this.firstFocusableElement?.focus();
      }
    }
  };
  /* ============================ Handlers ============================ */
  handleBackdropClick = (event) => {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.closeModal();
      this.tintoClose.emit({ reason: 'backdrop' });
    }
  };
  handleCloseClick = () => {
    this.closeModal();
    this.tintoClose.emit({ reason: 'close-button' });
  };
  handleKeyDown = (event) => {
    if (this.closeOnEscape && event.key === 'Escape' && this.open) {
      this.closeModal();
      this.tintoClose.emit({ reason: 'escape' });
    }
  };
  /* ============================ Lifecycle ============================ */
  componentDidLoad() {
    document.addEventListener('keydown', this.handleKeyDown);
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.setupFocusTrap();
    }
  }
  componentDidUpdate() {
    if (this.open) {
      this.setupFocusTrap();
    }
  }
  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keydown', this.handleFocusTrap);
    document.body.style.overflow = '';
  }
  handleOpenChange(newValue) {
    if (newValue) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', this.handleFocusTrap);
      setTimeout(() => {
        this.setupFocusTrap();
      }, 0);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', this.handleFocusTrap);
      // 이전 포커스 복원
      if (this.previousActiveElement && typeof this.previousActiveElement.focus === 'function') {
        setTimeout(() => {
          this.previousActiveElement?.focus();
        }, 0);
      }
    }
  }
  /* ============================ Render ============================ */
  render() {
    if (!this.open) return null;
    const ariaProps = {
      'aria-labelledby': 'modal-title',
    };
    if (this.describedBy) {
      ariaProps['aria-describedby'] = this.describedBy;
    }
    return h(
      'div',
      {
        class: 'modal-backdrop',
        part: 'backdrop',
        onClick: this.handleBackdropClick,
        role: 'dialog',
        'aria-modal': 'true',
        ...ariaProps,
      },
      h(
        'div',
        {
          ref: (el) => (this.modalContainer = el),
          class: `modal-container ${this.size} ${this.variant}`,
          part: 'container',
          tabindex: '-1',
        },
        this.showClose &&
          h(
            'button',
            {
              class: 'modal-close',
              part: 'close',
              type: 'button',
              'aria-label': '\uB2EB\uAE30',
              onClick: this.handleCloseClick,
            },
            h(
              'svg',
              {
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              h('path', {
                d: 'M18 6L6 18M6 6L18 18',
                stroke: 'currentColor',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
              }),
            ),
          ),
        h(
          'div',
          { class: 'modal-header', part: 'header' },
          h(
            'slot',
            { name: 'header' },
            h('h2', { id: 'modal-title', part: 'title' }, h('slot', { name: 'title' })),
          ),
        ),
        h('div', { class: 'modal-body', part: 'body' }, h('slot', null)),
        h('div', { class: 'modal-footer', part: 'footer' }, h('slot', { name: 'footer' })),
      ),
    );
  }
  static get watchers() {
    return {
      open: ['handleOpenChange'],
    };
  }
};
TintoModal.style = modalCss;

export { TintoModal as tinto_modal };
//# sourceMappingURL=tinto-modal.entry.js.map
