import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const modalCss =
  ':host{display:block}:host([hidden]){display:none !important}.modal-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;background:var(--t-modal-backdrop-bg, rgba(0, 0, 0, 0.5));backdrop-filter:blur(4px);animation:fadeIn 0.2s ease}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.modal-container{position:relative;display:flex;flex-direction:column;max-width:90vw;max-height:90vh;background:var(--t-modal-bg, #ffffff);border-radius:var(--t-modal-radius, 16px);box-shadow:var(--t-modal-shadow, 0 8px 32px rgba(0, 0, 0, 0.2));animation:slideUp 0.3s ease;overflow:hidden;outline:none}.modal-close:focus-visible{outline:2px solid var(--t-modal-focus-color, #005fcc);outline-offset:2px}@media (prefers-reduced-motion: reduce){.modal-backdrop,.modal-container{animation:none}.modal-close{transition:none}}@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}.modal-container.sm{width:400px}.modal-container.md{width:600px}.modal-container.lg{width:800px}.modal-container.full{width:95vw;height:95vh}.modal-close{position:absolute;top:12px;right:12px;z-index:1;display:flex;align-items:center;justify-content:center;width:32px;height:32px;min-width:44px;min-height:44px;padding:0;border:none;background:transparent;color:var(--t-modal-close-color, #666);cursor:pointer;border-radius:50%;transition:background-color 0.2s ease,\n    color 0.2s ease}.modal-close:hover{background:var(--t-modal-close-hover-bg, #f0f0f0);color:var(--t-modal-close-hover-color, #333)}.modal-close:active{background:var(--t-modal-close-active-bg, #e0e0e0)}.modal-header{padding:20px 24px;border-bottom:var(--t-modal-header-border, 1px solid #e0e0e0)}.modal-header h2{margin:0;font-size:20px;font-weight:600;color:var(--t-modal-title-color, #333)}.modal-body{flex:1;padding:24px;overflow-y:auto;color:var(--t-modal-body-color, #333)}.modal-footer{padding:16px 24px;border-top:var(--t-modal-footer-border, 1px solid #e0e0e0);display:flex;gap:12px;justify-content:flex-end}@media (max-width: 375px){.modal-backdrop{padding:12px}.modal-container{max-width:100%;max-height:95vh;border-radius:12px}.modal-container.sm,.modal-container.md,.modal-container.lg{width:100%}.modal-header{padding:16px}.modal-header h2{font-size:18px}.modal-body{padding:16px;font-size:14px}.modal-footer{padding:12px 16px;gap:8px}.modal-close{top:8px;right:8px;width:36px;height:36px}}@media (min-width: 376px) and (max-width: 767px){.modal-backdrop{padding:16px}.modal-container{max-width:95vw}.modal-container.sm{width:90vw}.modal-container.md{width:95vw}.modal-container.lg{width:95vw}}@media (min-width: 768px){.modal-container.sm{width:400px}.modal-container.md{width:600px}.modal-container.lg{width:800px}}@media (min-width: 1920px){.modal-container{border-radius:var(--t-modal-radius-desktop, 18px)}.modal-header{padding:var(--t-modal-header-py-desktop, 24px 28px)}.modal-body{padding:var(--t-modal-body-py-desktop, 28px)}}';

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
          class: `modal-container ${this.size}`,
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
