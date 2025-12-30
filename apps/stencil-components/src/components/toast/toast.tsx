// toast.tsx
import { Component, h, Element, Prop, Event, EventEmitter, Method, State } from '@stencil/core';
import type { ToastVariant, ToastSize, ToastPosition } from './toast.types';

@Component({
  tag: 'tinto-toast',
  styleUrl: 'toast.css',
  shadow: true,
})
export class TintoToast {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 토스트 메시지 */
  @Prop({ reflect: true }) message!: string;

  /** 토스트 variant */
  @Prop({ reflect: true }) variant: ToastVariant = 'info';

  /** 토스트 크기 */
  @Prop({ reflect: true }) size: ToastSize = 'md';

  /** 표시 여부 */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /** 자동 닫기 시간 (ms, 0이면 자동 닫기 안 함) */
  @Prop({ reflect: true }) duration: number = 3000;

  /** 토스트 위치 */
  @Prop({ reflect: true }) position: ToastPosition = 'bottom-center';

  /** 닫기 버튼 표시 여부 */
  @Prop({ reflect: true }) showClose: boolean = true;

  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /* ============================ Events ============================ */

  /** 토스트 닫기 이벤트 */
  @Event() tintoClose!: EventEmitter<void>;

  /* ============================ State ============================ */

  @State() private timeoutId?: number;

  /* ============================ Methods ============================ */

  /** 토스트 표시 */
  @Method()
  async show() {
    this.open = true;
    if (this.duration > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.hide();
      }, this.duration);
    }
  }

  /** 토스트 숨기기 */
  @Method()
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

  private handleClose = () => {
    if (this.disabled) return;
    this.hide();
  };

  /* ============================ Render ============================ */

  private getIcon() {
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

    return (
      <div
        class={`toast ${this.variant} ${this.size} ${this.position} ${this.disabled ? 'disabled' : ''}`}
        part="toast"
        role="alert"
        aria-disabled={this.disabled}
      >
        <span class="toast-icon" part="icon">
          {this.getIcon()}
        </span>
        <span class="toast-message" part="message">
          {this.message}
        </span>
        {this.showClose && (
          <button
            class="toast-close"
            part="close"
            type="button"
            aria-label="닫기"
            onClick={this.handleClose}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
}
