// form-input.tsx
import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
  State,
  Method,
  Watch,
} from '@stencil/core';
import type {
  FormInputType,
  FormInputSize,
  FormInputVariant,
  FormInputState,
  FormInputChangeDetail,
  FormInputFocusDetail,
} from './form-input.types';

@Component({
  tag: 'tinto-form-input',
  styleUrl: 'form-input.css',
  shadow: true,
})
export class TintoFormInput {
  @Element() el!: HTMLElement;

  private inputElement?: HTMLInputElement;

  /* ============================ Props ============================ */

  /** 입력 필드 타입 */
  @Prop({ reflect: true }) type: FormInputType = 'text';

  /** 입력 필드 크기 */
  @Prop({ reflect: true }) size: FormInputSize = 'md';

  /** 입력 필드 variant */
  @Prop({ reflect: true }) variant: FormInputVariant = 'default';

  /** 입력 필드 상태 */
  @Prop({ reflect: true }) state: FormInputState = 'default';

  /** 입력 값 */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /** 플레이스홀더 */
  @Prop({ reflect: true }) placeholder?: string;

  /** 필드 이름 (form 제출 시 사용) */
  @Prop({ reflect: true }) name?: string;

  /** 필수 입력 여부 */
  @Prop({ reflect: true }) required: boolean = false;

  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** 읽기 전용 여부 */
  @Prop({ reflect: true }) readonly: boolean = false;

  /** 자동 포커스 여부 */
  @Prop({ reflect: true }) autofocus: boolean = false;

  /** 자동 완성 (HTML autocomplete 속성) */
  @Prop({ reflect: true }) autocomplete?: string;

  /** 최대 길이 */
  @Prop({ reflect: true }) maxlength?: number;

  /** 최소 길이 */
  @Prop({ reflect: true }) minlength?: number;

  /** 최소값 (number 타입일 때) */
  @Prop({ reflect: true }) min?: number;

  /** 최대값 (number 타입일 때) */
  @Prop({ reflect: true }) max?: number;

  /** 스텝 (number 타입일 때) */
  @Prop({ reflect: true }) step?: number;

  /** 패턴 (정규식, HTML pattern 속성) */
  @Prop({ reflect: true }) pattern?: string;

  /** 라벨 텍스트 */
  @Prop({ reflect: true }) label?: string;

  /** 도움말 텍스트 */
  @Prop({ reflect: true }) helperText?: string;

  /** 에러 메시지 */
  @Prop({ reflect: true }) errorMessage?: string;

  /** 성공 메시지 */
  @Prop({ reflect: true }) successMessage?: string;

  /** 왼쪽 아이콘 (슬롯) */
  @Prop({ reflect: true }) iconStart?: string;

  /** 오른쪽 아이콘 (슬롯) */
  @Prop({ reflect: true }) iconEnd?: string;

  /** 비밀번호 표시/숨김 토글 (password 타입일 때) */
  @Prop({ reflect: true }) showPasswordToggle: boolean = false;

  /* ============================ State ============================ */

  @State() private showPassword: boolean = false;
  @State() private isFocused: boolean = false;

  /* ============================ Events ============================ */

  /** 입력 값 변경 이벤트 */
  @Event() tintoInput!: EventEmitter<FormInputChangeDetail>;

  /** 입력 필드 포커스 이벤트 */
  @Event() tintoFocus!: EventEmitter<FormInputFocusDetail>;

  /** 입력 필드 블러 이벤트 */
  @Event() tintoBlur!: EventEmitter<FormInputFocusDetail>;

  /** 엔터 키 입력 이벤트 */
  @Event() tintoEnter!: EventEmitter<FormInputChangeDetail>;

  /* ============================ Watch ============================ */

  @Watch('value')
  handleValueChange(newValue: string) {
    if (this.inputElement && this.inputElement.value !== newValue) {
      this.inputElement.value = newValue;
    }
  }

  /* ============================ Methods ============================ */

  /** 입력 필드에 포커스 */
  @Method()
  async focusInput() {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }

  /** 입력 필드에서 포커스 제거 */
  @Method()
  async blurInput() {
    if (this.inputElement) {
      this.inputElement.blur();
    }
  }

  /** 입력 값 선택 */
  @Method()
  async selectInput() {
    if (this.inputElement) {
      this.inputElement.select();
    }
  }

  /* ============================ Lifecycle ============================ */

  componentDidLoad() {
    if (this.autofocus && this.inputElement) {
      this.inputElement.focus();
    }
  }

  /* ============================ Handlers ============================ */

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;

    this.tintoInput.emit({
      value: this.value,
      name: this.name,
      type: this.type,
    });
  };

  private handleFocus = () => {
    this.isFocused = true;
    this.tintoFocus.emit({
      value: this.value,
      name: this.name,
    });
  };

  private handleBlur = () => {
    this.isFocused = false;
    this.tintoBlur.emit({
      value: this.value,
      name: this.name,
    });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.tintoEnter.emit({
        value: this.value,
        name: this.name,
        type: this.type,
      });
    }
  };

  private handlePasswordToggle = () => {
    this.showPassword = !this.showPassword;
  };

  /* ============================ Render ============================ */

  private getInputType(): string {
    if (this.type === 'password' && this.showPassword) {
      return 'text';
    }
    return this.type;
  }

  private getMessage(): string | undefined {
    if (this.state === 'error' && this.errorMessage) {
      return this.errorMessage;
    }
    if (this.state === 'success' && this.successMessage) {
      return this.successMessage;
    }
    return this.helperText;
  }

  private getMessageState(): FormInputState {
    if (this.state === 'error' && this.errorMessage) {
      return 'error';
    }
    if (this.state === 'success' && this.successMessage) {
      return 'success';
    }
    return 'default';
  }

  render() {
    const hasLabel = !!this.label || !!this.el.querySelector('[slot="label"]');
    const hasMessage = !!this.getMessage();
    const hasIconStart = !!this.iconStart || !!this.el.querySelector('[slot="icon-start"]');
    const hasIconEnd =
      !!this.iconEnd ||
      !!this.el.querySelector('[slot="icon-end"]') ||
      (this.type === 'password' && this.showPasswordToggle);

    return (
      <div
        class={`form-input-wrapper ${this.size} ${this.state} ${this.isFocused ? 'focused' : ''} ${this.disabled ? 'disabled' : ''}`}
        part="wrapper"
      >
        {/* 라벨 */}
        {hasLabel && (
          <label class="form-input-label" part="label" htmlFor={this.name}>
            <slot name="label">{this.label}</slot>
            {this.required && (
              <span class="required-mark" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        {/* 입력 필드 컨테이너 */}
        <div class={`form-input-container ${this.variant} ${this.state}`} part="container">
          {/* 왼쪽 아이콘 */}
          {hasIconStart && (
            <div class="form-input-icon-start" part="icon-start">
              <slot name="icon-start">{this.iconStart}</slot>
            </div>
          )}

          {/* 입력 필드 */}
          <input
            ref={(el) => (this.inputElement = el)}
            type={this.getInputType()}
            class={`form-input ${this.size}`}
            part="input"
            id={this.name}
            name={this.name}
            value={this.value}
            placeholder={this.placeholder}
            required={this.required}
            disabled={this.disabled}
            readonly={this.readonly}
            autocomplete={this.autocomplete}
            maxlength={this.maxlength}
            minlength={this.minlength}
            min={this.min}
            max={this.max}
            step={this.step}
            pattern={this.pattern}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyDown}
            aria-invalid={this.state === 'error' ? 'true' : 'false'}
            aria-describedby={hasMessage ? `${this.name}-message` : undefined}
          />

          {/* 오른쪽 아이콘 */}
          {hasIconEnd && (
            <div class="form-input-icon-end" part="icon-end">
              {this.type === 'password' && this.showPasswordToggle ? (
                <button
                  type="button"
                  class="password-toggle"
                  onClick={this.handlePasswordToggle}
                  aria-label={this.showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                  tabIndex={-1}
                >
                  {this.showPassword ? '🙈' : '👁️'}
                </button>
              ) : (
                <slot name="icon-end">{this.iconEnd}</slot>
              )}
            </div>
          )}
        </div>

        {/* 메시지 (도움말/에러/성공) */}
        {hasMessage && (
          <div
            class={`form-input-message ${this.getMessageState()}`}
            part="message"
            id={`${this.name}-message`}
          >
            {this.getMessage()}
          </div>
        )}
      </div>
    );
  }
}
