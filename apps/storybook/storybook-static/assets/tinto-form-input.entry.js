import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const formInputCss =
  ":host{display:block;width:100%;font-family:system-ui,\n    -apple-system,\n    'Segoe UI',\n    Roboto,\n    'Noto Sans KR',\n    'Apple SD Gothic Neo',\n    'Malgun Gothic',\n    sans-serif}.form-input-wrapper{display:flex;flex-direction:column;gap:8px;width:100%}.form-input-wrapper.disabled{opacity:0.6;cursor:not-allowed}.form-input-label{display:block;font-weight:500;color:var(--t-input-label-color, #374151);font-size:14px;line-height:1.5}.form-input-wrapper.sm .form-input-label{font-size:12px}.form-input-wrapper.lg .form-input-label{font-size:16px}.required-mark{color:var(--t-input-required-color, #ef4444);margin-left:4px}.form-input-container{position:relative;display:flex;align-items:center;width:100%;min-width:0;border-radius:8px;transition:all 0.2s ease;overflow:hidden}.form-input-container.default{background-color:var(--t-input-default-bg, #ffffff);border:1px solid var(--t-input-default-border, #d1d5db)}.form-input-container.default.focused{border-color:var(--t-input-focus-border, #3b82f6);box-shadow:0 0 0 3px var(--t-input-focus-shadow, rgba(59, 130, 246, 0.1))}.form-input-container.outline{background-color:transparent;border:2px solid var(--t-input-outline-border, #d1d5db)}.form-input-container.outline.focused{border-color:var(--t-input-focus-border, #3b82f6)}.form-input-container.filled{background-color:var(--t-input-filled-bg, #f3f4f6);border:1px solid transparent}.form-input-container.filled.focused{background-color:var(--t-input-filled-focus-bg, #ffffff);border-color:var(--t-input-focus-border, #3b82f6);box-shadow:0 0 0 3px var(--t-input-focus-shadow, rgba(59, 130, 246, 0.1))}.form-input-container.underline{background-color:transparent;border:none;border-bottom:2px solid var(--t-input-underline-border, #d1d5db);border-radius:0}.form-input-container.underline.focused{border-bottom-color:var(--t-input-focus-border, #3b82f6)}.form-input-container.error{border-color:var(--t-input-error-border, #ef4444)}.form-input-container.error.focused{box-shadow:0 0 0 3px var(--t-input-error-shadow, rgba(239, 68, 68, 0.1))}.form-input-container.success{border-color:var(--t-input-success-border, #10b981)}.form-input-container.success.focused{box-shadow:0 0 0 3px var(--t-input-success-shadow, rgba(16, 185, 129, 0.1))}.form-input-container.warning{border-color:var(--t-input-warning-border, #f59e0b)}.form-input-container.warning.focused{box-shadow:0 0 0 3px var(--t-input-warning-shadow, rgba(245, 158, 11, 0.1))}.form-input{flex:1;min-width:0;width:100%;border:none;outline:none;background:transparent;color:var(--t-input-text-color, #111827);font-size:14px;line-height:1.5;padding:10px 12px}.form-input::placeholder{color:var(--t-input-placeholder-color, #9ca3af)}.form-input:disabled{cursor:not-allowed;opacity:0.6}.form-input:read-only{cursor:default}.form-input.sm{font-size:12px;padding:8px 10px}.form-input.lg{font-size:16px;padding:12px 16px}.form-input-icon-start,.form-input-icon-end{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--t-input-icon-color, #6b7280)}.form-input-icon-start{padding-left:12px}.form-input-icon-end{padding-right:12px}.form-input-wrapper.sm .form-input-icon-start{padding-left:10px}.form-input-wrapper.sm .form-input-icon-end{padding-right:10px}.form-input-wrapper.lg .form-input-icon-start{padding-left:16px}.form-input-wrapper.lg .form-input-icon-end{padding-right:16px}.password-toggle{background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;color:var(--t-input-icon-color, #6b7280);font-size:18px}.password-toggle:hover{opacity:0.7}.password-toggle:focus{outline:2px solid var(--t-input-focus-border, #3b82f6);outline-offset:2px;border-radius:4px}.form-input-message{font-size:12px;line-height:1.5;margin-top:-4px}.form-input-message.default{color:var(--t-input-helper-color, #6b7280)}.form-input-message.error{color:var(--t-input-error-color, #ef4444)}.form-input-message.success{color:var(--t-input-success-color, #10b981)}.form-input-message.warning{color:var(--t-input-warning-color, #f59e0b)}.form-input-wrapper.sm .form-input-message{font-size:11px}.form-input-wrapper.lg .form-input-message{font-size:14px}@media (max-width: 375px){.form-input-label{font-size:13px}.form-input{font-size:16px;padding:12px}.form-input.sm{font-size:16px;padding:10px}.form-input.lg{font-size:16px;padding:14px}.form-input-message{font-size:11px}.form-input-icon-start,.form-input-icon-end{width:20px;height:20px}}.form-input:focus-visible{outline:2px solid var(--t-input-focus-border, #3b82f6);outline-offset:2px}.password-toggle:focus-visible{outline:2px solid var(--t-input-focus-border, #3b82f6);outline-offset:2px}@media (prefers-reduced-motion: reduce){.form-input-container,.form-input,.password-toggle{transition:none}}@media (min-width: 768px){.form-input-label{font-size:15px}.form-input{font-size:15px}.form-input-message{font-size:13px}}";

const TintoFormInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoInput = createEvent(this, 'tintoInput');
    this.tintoFocus = createEvent(this, 'tintoFocus');
    this.tintoBlur = createEvent(this, 'tintoBlur');
    this.tintoEnter = createEvent(this, 'tintoEnter');
  }
  get el() {
    return getElement(this);
  }
  inputElement;
  /* ============================ Props ============================ */
  /** 입력 필드 타입 */
  type = 'text';
  /** 입력 필드 크기 */
  size = 'md';
  /** 입력 필드 variant */
  variant = 'default';
  /** 입력 필드 상태 */
  state = 'default';
  /** 입력 값 */
  value = '';
  /** 플레이스홀더 */
  placeholder;
  /** 필드 이름 (form 제출 시 사용) */
  name;
  /** 필수 입력 여부 */
  required = false;
  /** 비활성화 여부 */
  disabled = false;
  /** 읽기 전용 여부 */
  readonly = false;
  /** 자동 포커스 여부 */
  autofocus = false;
  /** 자동 완성 (HTML autocomplete 속성) */
  autocomplete;
  /** 최대 길이 */
  maxlength;
  /** 최소 길이 */
  minlength;
  /** 최소값 (number 타입일 때) */
  min;
  /** 최대값 (number 타입일 때) */
  max;
  /** 스텝 (number 타입일 때) */
  step;
  /** 패턴 (정규식, HTML pattern 속성) */
  pattern;
  /** 라벨 텍스트 */
  label;
  /** 도움말 텍스트 */
  helperText;
  /** 에러 메시지 */
  errorMessage;
  /** 성공 메시지 */
  successMessage;
  /** 왼쪽 아이콘 (슬롯) */
  iconStart;
  /** 오른쪽 아이콘 (슬롯) */
  iconEnd;
  /** 비밀번호 표시/숨김 토글 (password 타입일 때) */
  showPasswordToggle = false;
  /* ============================ State ============================ */
  showPassword = false;
  isFocused = false;
  /* ============================ Events ============================ */
  /** 입력 값 변경 이벤트 */
  tintoInput;
  /** 입력 필드 포커스 이벤트 */
  tintoFocus;
  /** 입력 필드 블러 이벤트 */
  tintoBlur;
  /** 엔터 키 입력 이벤트 */
  tintoEnter;
  /* ============================ Watch ============================ */
  handleValueChange(newValue) {
    if (this.inputElement && this.inputElement.value !== newValue) {
      this.inputElement.value = newValue;
    }
  }
  /* ============================ Methods ============================ */
  /** 입력 필드에 포커스 */
  async focusInput() {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }
  /** 입력 필드에서 포커스 제거 */
  async blurInput() {
    if (this.inputElement) {
      this.inputElement.blur();
    }
  }
  /** 입력 값 선택 */
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
  handleInput = (event) => {
    const input = event.target;
    this.value = input.value;
    this.tintoInput.emit({
      value: this.value,
      name: this.name,
      type: this.type,
    });
  };
  handleFocus = () => {
    this.isFocused = true;
    this.tintoFocus.emit({
      value: this.value,
      name: this.name,
    });
  };
  handleBlur = () => {
    this.isFocused = false;
    this.tintoBlur.emit({
      value: this.value,
      name: this.name,
    });
  };
  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.tintoEnter.emit({
        value: this.value,
        name: this.name,
        type: this.type,
      });
    }
  };
  handlePasswordToggle = () => {
    this.showPassword = !this.showPassword;
  };
  /* ============================ Render ============================ */
  getInputType() {
    if (this.type === 'password' && this.showPassword) {
      return 'text';
    }
    return this.type;
  }
  getMessage() {
    if (this.state === 'error' && this.errorMessage) {
      return this.errorMessage;
    }
    if (this.state === 'success' && this.successMessage) {
      return this.successMessage;
    }
    return this.helperText;
  }
  getMessageState() {
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
    return h(
      'div',
      {
        key: '1bb9bdd1e72385db258e1bdf4be48ff556b8a80f',
        class: `form-input-wrapper ${this.size} ${this.state} ${this.isFocused ? 'focused' : ''} ${this.disabled ? 'disabled' : ''}`,
        part: 'wrapper',
      },
      hasLabel &&
        h(
          'label',
          {
            key: '8772ffb4e9de7549b58e35ac66546c68a9151f70',
            class: 'form-input-label',
            part: 'label',
            htmlFor: this.name || `input-${this.el.id || 'default'}`,
          },
          h('slot', { key: 'f4653bee10a2f50421ff22ea598c25fd38d10cf9', name: 'label' }, this.label),
          this.required &&
            h(
              'span',
              {
                key: '54fcb49a06cfd25f9343220b37257ed245cf05df',
                class: 'required-mark',
                'aria-label': 'required',
              },
              '*',
            ),
        ),
      h(
        'div',
        {
          key: 'ab94f216fbaa76da7c38840859920b656c864268',
          class: `form-input-container ${this.variant} ${this.state}`,
          part: 'container',
        },
        hasIconStart &&
          h(
            'div',
            {
              key: '402ba6f164e291b32d4da0b3d6d400520f2e19b5',
              class: 'form-input-icon-start',
              part: 'icon-start',
            },
            h(
              'slot',
              { key: 'b2f2a60036344cf53c5382c9caf8246bef718911', name: 'icon-start' },
              this.iconStart,
            ),
          ),
        h('input', {
          key: 'd3827eccb5d2fd6ed45dcfcfd04fe8a68841820e',
          ref: (el) => (this.inputElement = el),
          type: this.getInputType(),
          class: `form-input ${this.size}`,
          part: 'input',
          id: this.name || `input-${this.el.id || 'default'}`,
          name: this.name,
          value: this.value,
          placeholder: this.placeholder,
          required: this.required,
          disabled: this.disabled,
          readonly: this.readonly,
          autocomplete: this.autocomplete,
          maxlength: this.maxlength,
          minlength: this.minlength,
          min: this.min,
          max: this.max,
          step: this.step,
          pattern: this.pattern,
          onInput: this.handleInput,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown,
          'aria-invalid': this.state === 'error' ? 'true' : 'false',
          'aria-required': this.required,
          'aria-describedby': hasMessage
            ? `${this.name || `input-${this.el.id || 'default'}`}-message`
            : undefined,
          'aria-label': !hasLabel && this.label ? this.label : undefined,
        }),
        hasIconEnd &&
          h(
            'div',
            {
              key: '17d78aa3c90c61b01e2b5f063018b2286d4e2442',
              class: 'form-input-icon-end',
              part: 'icon-end',
            },
            this.type === 'password' && this.showPasswordToggle
              ? h(
                  'button',
                  {
                    type: 'button',
                    class: 'password-toggle',
                    onClick: this.handlePasswordToggle,
                    'aria-label': this.showPassword ? '비밀번호 숨기기' : '비밀번호 보기',
                    tabIndex: -1,
                  },
                  this.showPassword ? '🙈' : '👁️',
                )
              : h('slot', { name: 'icon-end' }, this.iconEnd),
          ),
      ),
      hasMessage &&
        h(
          'div',
          {
            key: '333bd84f76b31f5b0bc38ddd7c924773fe3374ea',
            class: `form-input-message ${this.getMessageState()}`,
            part: 'message',
            id: `${this.name || `input-${this.el.id || 'default'}`}-message`,
            role: this.state === 'error' ? 'alert' : 'status',
            'aria-live': this.state === 'error' ? 'assertive' : 'polite',
          },
          this.getMessage(),
        ),
    );
  }
  static get watchers() {
    return {
      value: ['handleValueChange'],
    };
  }
};
TintoFormInput.style = formInputCss;

export { TintoFormInput as tinto_form_input };
//# sourceMappingURL=tinto-form-input.entry.js.map
