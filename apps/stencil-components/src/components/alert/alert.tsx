// alert.tsx
import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
  Method,
} from '@stencil/core';
import type { AlertType, AlertVariant, AlertSize } from './alert.types';

@Component({
  tag: 'tinto-alert',
  styleUrl: 'alert.css',
  shadow: true,
})
export class TintoAlert {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 알림 타입 */
  @Prop({ reflect: true }) type: AlertType = 'info';

  /** 알림 스타일 variant */
  @Prop({ reflect: true }) variant: AlertVariant = 'default';

  /** 알림 크기 */
  @Prop({ reflect: true }) size: AlertSize = 'md';

  /** 닫기 버튼 표시 */
  @Prop({ reflect: true }) closable: boolean = false;

  /** 자동 닫기 */
  @Prop({ reflect: true }) autoClose: boolean = false;

  /** 자동 닫기 시간 (ms) */
  @Prop({ reflect: true }) closeAfter: number = 5000;

  /** 아이콘 표시 */
  @Prop({ reflect: true }) showIcon: boolean = true;

  /** 제목 (선택적) */
  @Prop({ reflect: true, attribute: 'alert-title' }) alertTitle?: string;

  /* ============================ Events ============================ */

  /** 닫기 이벤트 */
  @Event() tintoClose!: EventEmitter<void>;

  /** 액션 버튼 클릭 이벤트 */
  @Event() tintoAction!: EventEmitter<{ action: string }>;

  /* ============================ State ============================ */

  @State() private isVisible: boolean = true;
  private autoCloseTimer?: number;

  /* ============================ Watchers ============================ */

  @Watch('autoClose')
  @Watch('closeAfter')
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
  @Method()
  async close() {
    this.isVisible = false;
    this.clearAutoClose();
    this.tintoClose.emit();
  }

  /** 알림 표시 */
  @Method()
  async show() {
    this.isVisible = true;
    this.setupAutoClose();
  }

  /* ============================ Private Methods ============================ */

  /** 자동 닫기 설정 */
  private setupAutoClose() {
    this.clearAutoClose();

    if (this.autoClose && this.isVisible && this.closeAfter > 0) {
      this.autoCloseTimer = window.setTimeout(() => {
        this.close();
      }, this.closeAfter);
    }
  }

  /** 자동 닫기 타이머 제거 */
  private clearAutoClose() {
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
      this.autoCloseTimer = undefined;
    }
  }

  /** 닫기 버튼 클릭 핸들러 */
  private handleClose = () => {
    this.close();
  };

  /** 아이콘 렌더링 */
  private renderIcon() {
    if (!this.showIcon) return null;

    const iconMap: Record<AlertType, string> = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ',
    };

    return (
      <span class="alert-icon" part="icon" aria-hidden="true">
        {iconMap[this.type]}
      </span>
    );
  }

  /* ============================ Render ============================ */

  render() {
    if (!this.isVisible) {
      return null;
    }

    const role = this.type === 'error' ? 'alert' : 'status';
    const ariaLive = this.type === 'error' ? 'assertive' : 'polite';

    return (
      <div
        class={{
          'alert-container': true,
          [`type-${this.type}`]: true,
          [`variant-${this.variant}`]: true,
          [`size-${this.size}`]: true,
        }}
        part="root"
        role={role}
        aria-live={ariaLive}
        aria-atomic="true"
      >
        {this.renderIcon()}

        <div class="alert-content" part="content">
          {this.alertTitle && (
            <div class="alert-title" part="title">
              <slot name="title">{this.alertTitle}</slot>
            </div>
          )}

          <div class="alert-message" part="message">
            <slot />
          </div>

          <div class="alert-actions" part="actions">
            <slot name="action" />
          </div>
        </div>

        {this.closable && (
          <button
            class="alert-close"
            part="close"
            onClick={this.handleClose}
            aria-label="닫기"
            type="button"
          >
            ×
          </button>
        )}
      </div>
    );
  }
}
