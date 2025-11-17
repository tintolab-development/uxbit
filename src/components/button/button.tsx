import { Component, h, Prop, Element, Event, EventEmitter, Host, Watch } from '@stencil/core';
import type {
  ButtonVariant,
  ButtonSize,
  ButtonNativeType,
  ButtonTextFamilyToken,
  ButtonTextSizeToken,
  ButtonTextWeightToken,
  ButtonClickDetail,
  ButtonToggleDetail,
  ButtonLabelChangeDetail,
} from './button.types';

const FAMILY_MAP: Record<ButtonTextFamilyToken, string> = {
  paperlogy:
    '"Paperlogy", Pretendard, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  'clash-display':
    '"Clash Display", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  'climate-crisis':
    '"Climate Crisis", Pretendard, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  pretendard:
    'Pretendard, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  system:
    'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
};

const SIZE_MAP: Record<ButtonTextSizeToken, string> = {
  sm: '16px',
  md: '20px',
  lg: '40px',
  xl: '64px',
};

const WEIGHT_MAP: Record<ButtonTextWeightToken, string> = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
};

@Component({
  tag: 'tinto-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class TintoButton {
  @Element() el!: HTMLElement;

  // ===== Visual / Layout tokens =====
  @Prop({ reflect: true }) variant: ButtonVariant = 'primary';
  @Prop({ reflect: true }) size: ButtonSize = 'md';

  @Prop({ reflect: true }) pill = false;
  @Prop({ reflect: true }) block = false;
  @Prop({ reflect: true }) elevated = false;
  @Prop({ reflect: true }) outline = false;

  /** border-radius 토큰(숫자만 넣으면 px 처리) */
  @Prop({ reflect: true }) radius?: string;

  // ===== State / Behavior =====
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) loading = false;

  @Prop({ reflect: true }) toggle = false;
  @Prop({ reflect: true, mutable: true }) pressed = false;

  /** form 동작 (내부 button 은 항상 type="button" 이고, 여기 값 기준으로 form 요청) */
  @Prop({ reflect: true }) type: ButtonNativeType = 'button';

  /** 링크 모드일 때 이동할 href */
  @Prop({ reflect: true }) href?: string;

  /** 링크 타겟 (href 지정 시) */
  @Prop({ reflect: true }) target?: '_self' | '_blank' | '_parent' | '_top';

  /** 텍스트 라벨(슬롯 대신 사용 가능) */
  @Prop({ reflect: true }) label?: string;

  /** 라벨 편집 모드 (true 일 때 contenteditable) */
  @Prop({ reflect: true }) editable = false;

  // ===== Typography tokens =====
  @Prop({ reflect: true, attribute: 'text-family' })
  textFamily?: ButtonTextFamilyToken | string;

  @Prop({ reflect: true, attribute: 'text-size' })
  textSize?: ButtonTextSizeToken | string;

  @Prop({ reflect: true, attribute: 'text-weight' })
  textWeight?: ButtonTextWeightToken | string;

  @Prop({ reflect: true, attribute: 'text-color' })
  textColor?: string;

  // ===== Events =====
  @Event() tintoClick!: EventEmitter<ButtonClickDetail>;
  @Event() tintoToggle!: EventEmitter<ButtonToggleDetail>;
  @Event() labelChange!: EventEmitter<ButtonLabelChangeDetail>;

  private labelEl?: HTMLSpanElement;

  // ===== Lifecycle =====
  componentWillLoad(): void {
    this.applyStyleTokens();
  }

  @Watch('textFamily')
  @Watch('textSize')
  @Watch('textWeight')
  @Watch('textColor')
  @Watch('radius')
  protected handleStyleTokenChange(): void {
    this.applyStyleTokens();
  }

  private applyStyleTokens(): void {
    const style = this.el.style;

    // font-family
    if (this.textFamily) {
      style.setProperty('--t-button-label-ff', this.resolveFamily(this.textFamily));
    } else {
      style.removeProperty('--t-button-label-ff');
    }

    // font-size
    if (this.textSize) {
      const key = this.textSize.toString().trim().toLowerCase();
      const mapped = (SIZE_MAP as Record<string, string>)[key] ?? this.textSize.toString();
      style.setProperty('--t-button-label-fs', mapped);
    } else {
      style.removeProperty('--t-button-label-fs');
    }

    // font-weight
    if (this.textWeight) {
      const key = this.textWeight.toString().trim().toLowerCase();
      const mapped = (WEIGHT_MAP as Record<string, string>)[key] ?? this.textWeight.toString();
      style.setProperty('--t-button-label-fw', mapped);
    } else {
      style.removeProperty('--t-button-label-fw');
    }

    // font-color
    if (this.textColor) {
      style.setProperty('--t-button-label-color', this.textColor);
    } else {
      style.removeProperty('--t-button-label-color');
    }

    // radius → px 처리
    if (this.radius != null && this.radius.trim() !== '') {
      const trimmed = this.radius.trim();
      const value = /^\d+(\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed;
      style.setProperty('--t-button-radius', value);
    } else {
      style.removeProperty('--t-button-radius');
    }
  }

  private resolveFamily(token: ButtonTextFamilyToken | string): string {
    const key = token.toString().toLowerCase().trim();
    if ((FAMILY_MAP as Record<string, string>)[key]) {
      return (FAMILY_MAP as Record<string, string>)[key];
    }

    if (key === 'clash' || key === 'clashdisplay') {
      return FAMILY_MAP['clash-display'];
    }
    if (key === 'climate' || key === 'climatecrisis') {
      return FAMILY_MAP['climate-crisis'];
    }
    if (key === 'paper') {
      return FAMILY_MAP.paperlogy;
    }
    if (key === 'pretendard') {
      return FAMILY_MAP.pretendard;
    }

    return FAMILY_MAP.system;
  }

  // ===== Handlers =====
  private handleClick = (event: MouseEvent): void => {
    if (this.disabled || this.loading || this.editable) {
      event.preventDefault();
      return;
    }

    // toggle 모드
    if (this.toggle) {
      this.pressed = !this.pressed;
      this.tintoToggle.emit({ pressed: this.pressed });
    }

    // 링크 모드
    if (this.href) {
      const target = this.target ?? '_self';
      window.open(this.href, target);
    }

    // form 모드
    if (!this.href && this.type) {
      const form = this.el.closest('form') as HTMLFormElement | null;
      const lower = this.type.toLowerCase() as ButtonNativeType;
      if (form) {
        if (lower === 'submit') {
          if (typeof form.requestSubmit === 'function') {
            form.requestSubmit();
          } else {
            form.submit();
          }
        } else if (lower === 'reset') {
          form.reset();
        }
      }
    }

    this.tintoClick.emit({ originalEvent: event });
  };

  private handleLabelInput = (): void => {
    if (!this.editable || !this.labelEl) {
      return;
    }
    const value = this.labelEl.textContent ?? '';
    this.label = value;
    this.labelChange.emit({ value });
  };

  private resolveLabel(): string {
    if (this.label && this.label.trim().length > 0) {
      return this.label.trim();
    }
    return '';
  }

  // ===== Render =====
  render() {
    const ariaBusy = this.loading ? 'true' : 'false';
    const ariaDisabled = this.disabled ? 'true' : 'false';
    const ariaPressed =
      this.toggle && !this.disabled ? (this.pressed ? 'true' : 'false') : undefined;

    const labelText = this.resolveLabel();

    return (
      <Host aria-busy={ariaBusy} aria-disabled={ariaDisabled} aria-pressed={ariaPressed}>
        <button
          class="tinto-button"
          part="button"
          type="button"
          disabled={this.disabled}
          aria-busy={ariaBusy}
          aria-pressed={ariaPressed}
          onClick={this.handleClick}
        >
          <span class="spinner" part="spinner" aria-hidden={this.loading ? 'false' : 'true'}></span>

          <span class="prefix" part="prefix">
            <slot name="prefix" />
          </span>

          <span class="content" part="label">
            <span
              class="label"
              ref={(el) => {
                this.labelEl = el ?? undefined;
              }}
              contentEditable={this.editable ? 'true' : 'false'}
              spellcheck={this.editable ? false : undefined}
              role={this.editable ? 'textbox' : undefined}
              aria-multiline={this.editable ? 'false' : undefined}
              onInput={this.handleLabelInput}
            >
              {labelText || <slot />}
            </span>
          </span>

          <span class="suffix" part="suffix">
            <slot name="suffix" />
          </span>
        </button>
      </Host>
    );
  }
}
