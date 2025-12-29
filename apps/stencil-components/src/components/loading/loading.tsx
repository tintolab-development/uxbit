// loading.tsx
import { Component, h, Prop } from '@stencil/core';
import type { LoadingSize, LoadingVariant } from './loading.types';

@Component({
  tag: 'tinto-loading',
  styleUrl: 'loading.css',
  shadow: true,
})
export class TintoLoading {
  /* ============================ Props ============================ */

  /** 로딩 크기 */
  @Prop({ reflect: true }) size: LoadingSize = 'md';

  /** 로딩 variant */
  @Prop({ reflect: true }) variant: LoadingVariant = 'spinner';

  /** 오버레이 모드 (전체 화면 오버레이) */
  @Prop({ reflect: true }) overlay: boolean = false;

  /** 로딩 텍스트 */
  @Prop({ reflect: true }) text?: string;

  /* ============================ Render ============================ */

  render() {
    return (
      <div
        class={`loading ${this.overlay ? 'overlay' : ''}`}
        part="loading"
        role="status"
        aria-live="polite"
      >
        {this.variant === 'spinner' && (
          <div class="spinner" part="spinner">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="62.83"
                stroke-dashoffset="15.71"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 12 12;360 12 12"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        )}

        {this.variant === 'dots' && (
          <div class="dots" part="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {this.variant === 'pulse' && (
          <div class="pulse" part="pulse">
            <span></span>
          </div>
        )}

        {this.text && (
          <div class="loading-text" part="text">
            {this.text}
          </div>
        )}
      </div>
    );
  }
}
