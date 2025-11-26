import { Component, h, Prop, Element, Event, EventEmitter, Host, Watch } from '@stencil/core';
import type {
  ButtonVariant,
  ButtonSize,
  ButtonNativeType,
  ButtonTextFamilyToken,
  ButtonTextSizeToken,
  ButtonTextWeightToken,
  ButtonToggleDetail,
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
  @Element() hostEl!: HTMLElement;

  // ===== Visual / Layout tokens =====
  /** 색/스타일 프리셋 (primary / secondary / ghost 등) */
  @Prop({ reflect: true }) variant: ButtonVariant = 'primary';

  /** 버튼 크기(primitives에 연결되는 토큰) */
  @Prop({ reflect: true }) size: ButtonSize = 'md';

  /** pill 형태 (완전 라운드) */
  @Prop({ reflect: true }) pill = false;

  /** 가로 전체폭 사용 여부 */
  @Prop({ reflect: true }) block = false;

  /** 살짝 떠 있는 느낌의 그림자 사용 여부 */
  @Prop({ reflect: true }) elevated = false;

  /** outline 스타일 여부 (filled 대신 테두리) */
  @Prop({ reflect: true }) outline = false;

  /** border-radius 토큰(숫자만 넣으면 px 처리) */
  @Prop({ reflect: true }) radius?: string;

  // ===== State / Behavior =====
  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled = false;

  /** 로딩 상태 (스피너 표시 + 클릭 막기) */
  @Prop({ reflect: true }) loading = false;

  /** 토글 버튼 모드 (pressed 토글) */
  @Prop({ reflect: true }) toggle = false;

  /** 토글 상태 (toggle=true 일 때 사용, mutable) */
  @Prop({ reflect: true, mutable: true }) pressed = false;

  /**
   * form 동작 타입
   * - "button": 기본 (아무 것도 안 함)
   * - "submit": 조상 form submit
   * - "reset": 조상 form reset
   */
  @Prop({ reflect: true }) type: ButtonNativeType = 'button';

  /** 링크 모드일 때 이동할 href */
  @Prop({ reflect: true }) href?: string;

  /** 링크 타겟 (href 지정 시) */
  @Prop({ reflect: true }) target?: '_self' | '_blank' | '_parent' | '_top';

  /** 텍스트 라벨(슬롯 대신 사용 가능) */
  @Prop({ reflect: true }) label?: string;

  // ===== Typography tokens =====
  /** 라벨 폰트 패밀리 토큰 */
  @Prop({ reflect: true, attribute: 'text-family' })
  textFamily?: ButtonTextFamilyToken | string;

  /** 라벨 폰트 크기 토큰 또는 raw 값 (ex. "18px") */
  @Prop({ reflect: true, attribute: 'text-size' })
  textSize?: ButtonTextSizeToken | string;

  /** 라벨 폰트 두께 토큰 또는 raw 값 */
  @Prop({ reflect: true, attribute: 'text-weight' })
  textWeight?: ButtonTextWeightToken | string;

  /** 라벨 폰트 컬러 */
  @Prop({ reflect: true, attribute: 'text-color' })
  textColor?: string;

  // ===== Events =====
  /** 토글 상태 변경 이벤트 (pressed 값 전달) */
  @Event() tintoToggle!: EventEmitter<ButtonToggleDetail>;

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

  // ===== Style token → CSS Custom Properties =====
  private applyStyleTokens(): void {
    const style = this.hostEl.style;

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

  // ===== ARIA helpers =====
  private get ariaBusy(): 'true' | undefined {
    return this.loading ? 'true' : undefined;
  }

  private get ariaDisabled(): 'true' | undefined {
    return this.disabled ? 'true' : undefined;
  }

  private get ariaPressed(): 'true' | 'false' | undefined {
    if (!this.toggle || this.disabled) return undefined;
    return this.pressed ? 'true' : 'false';
  }

  private resolveLabel(): string {
    if (this.label && this.label.trim().length > 0) {
      return this.label.trim();
    }
    return '';
  }

  // ===== Handlers =====
  private handleClick = (event: MouseEvent): void => {
    if (this.disabled || this.loading) {
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

    // form 모드 (href 없을 때만)
    if (!this.href && this.type) {
      const lower = this.type.toLowerCase() as ButtonNativeType;
      const form = this.hostEl.closest('form') as HTMLFormElement | null;
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

    // 커스텀 tintoClick 이벤트는 제거
    // 스토리북 / 외부에서는 그냥 onClick 으로 native click 사용
  };

  // ===== Render =====
  render() {
    const labelText = this.resolveLabel();

    // 호스트의 aria-* 패스스루
    const hostAriaLabel = this.hostEl.getAttribute('aria-label');
    const hostAriaDescribedby = this.hostEl.getAttribute('aria-describedby');
    const a11yProps: Record<string, any> = {};
    if (hostAriaLabel) a11yProps['aria-label'] = hostAriaLabel;
    if (hostAriaDescribedby) a11yProps['aria-describedby'] = hostAriaDescribedby;

    return (
      <Host
        aria-busy={this.ariaBusy}
        aria-disabled={this.ariaDisabled}
        aria-pressed={this.ariaPressed}
      >
        <button
          class="tinto-button"
          part="button"
          type="button"
          disabled={this.disabled}
          aria-busy={this.ariaBusy}
          aria-pressed={this.ariaPressed}
          onClick={this.handleClick}
          {...a11yProps}
        >
          {/* 로딩 스피너 */}
          <span class="spinner" part="spinner" aria-hidden={this.loading ? 'false' : 'true'}></span>

          {/* prefix 슬롯 (아이콘 등) */}
          <span class="prefix" part="prefix">
            <slot name="prefix" />
          </span>

          {/* 라벨 / 기본 슬롯 */}
          <span class="content" part="label">
            <span class="label">{labelText || <slot />}</span>
          </span>

          {/* suffix 슬롯 */}
          <span class="suffix" part="suffix">
            <slot name="suffix" />
          </span>
        </button>
      </Host>
    );
  }
}
