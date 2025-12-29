// modal.tsx
import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
  Method,
  Watch,
  State,
} from '@stencil/core';
import type { ModalSize, ModalCloseDetail } from './modal.types';

@Component({
  tag: 'tinto-modal',
  styleUrl: 'modal.css',
  shadow: true,
})
export class TintoModal {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 모달 열림 상태 */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /** 모달 크기 */
  @Prop({ reflect: true }) size: ModalSize = 'md';

  /** 닫기 버튼 표시 여부 */
  @Prop({ reflect: true }) showClose: boolean = true;

  /** 배경 클릭 시 닫기 여부 */
  @Prop({ reflect: true }) closeOnBackdrop: boolean = true;

  /** ESC 키로 닫기 여부 */
  @Prop({ reflect: true }) closeOnEscape: boolean = true;

  /** 포커스 트랩 활성화 여부 */
  @Prop({ reflect: true }) focusTrap: boolean = true;

  /** 자동 포커스 여부 (모달 열릴 때 첫 번째 포커스 가능한 요소에 포커스) */
  @Prop({ reflect: true }) autofocus: boolean = true;

  /** 모달 설명 ID (aria-describedby용) */
  @Prop({ reflect: true }) describedBy?: string;

  /* ============================ Events ============================ */

  /** 모달 열기 이벤트 */
  @Event() tintoOpen!: EventEmitter<void>;

  /** 모달 닫기 이벤트 */
  @Event() tintoClose!: EventEmitter<ModalCloseDetail>;

  /* ============================ State ============================ */

  @State() private previousActiveElement: HTMLElement | null = null;
  @State() private modalContainer?: HTMLElement;

  private focusableElements: HTMLElement[] = [];
  private firstFocusableElement?: HTMLElement;
  private lastFocusableElement?: HTMLElement;

  /* ============================ Methods ============================ */

  /** 모달 열기 */
  @Method()
  async openModal() {
    this.previousActiveElement = document.activeElement as HTMLElement;
    this.open = true;
    document.body.style.overflow = 'hidden';
    this.tintoOpen.emit();
  }

  /** 모달 닫기 */
  @Method()
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
  private getFocusableElements(): HTMLElement[] {
    if (!this.modalContainer) return [];

    const selector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return Array.from(this.modalContainer.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => !el.hasAttribute('disabled') && el.offsetParent !== null,
    );
  }

  /** 포커스 트랩 설정 */
  private setupFocusTrap() {
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
  private handleFocusTrap = (event: KeyboardEvent) => {
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

  private handleBackdropClick = (event: MouseEvent) => {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.closeModal();
      this.tintoClose.emit({ reason: 'backdrop' });
    }
  };

  private handleCloseClick = () => {
    this.closeModal();
    this.tintoClose.emit({ reason: 'close-button' });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
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

  @Watch('open')
  handleOpenChange(newValue: boolean) {
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

    const ariaProps: Record<string, string> = {
      'aria-labelledby': 'modal-title',
    };

    if (this.describedBy) {
      ariaProps['aria-describedby'] = this.describedBy;
    }

    return (
      <div
        class="modal-backdrop"
        part="backdrop"
        onClick={this.handleBackdropClick}
        role="dialog"
        aria-modal="true"
        {...ariaProps}
      >
        <div
          ref={(el) => (this.modalContainer = el)}
          class={`modal-container ${this.size}`}
          part="container"
          tabindex="-1"
        >
          {this.showClose && (
            <button
              class="modal-close"
              part="close"
              type="button"
              aria-label="닫기"
              onClick={this.handleCloseClick}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          )}

          <div class="modal-header" part="header">
            <slot name="header">
              <h2 id="modal-title" part="title">
                <slot name="title" />
              </h2>
            </slot>
          </div>

          <div class="modal-body" part="body">
            <slot />
          </div>

          <div class="modal-footer" part="footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    );
  }
}
