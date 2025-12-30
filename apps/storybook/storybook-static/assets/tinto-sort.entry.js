import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const sortCss =
  ":host{display:inline-block;position:relative;font-family:system-ui,\n    -apple-system,\n    'Segoe UI',\n    Roboto,\n    'Noto Sans KR',\n    'Apple SD Gothic Neo',\n    'Malgun Gothic',\n    sans-serif}.sort-container{position:relative;display:inline-block}.sort-trigger{display:flex;align-items:center;gap:8px;padding:8px 12px;background-color:var(--t-sort-bg, #ffffff);border:1px solid var(--t-sort-border, #d1d5db);border-radius:8px;cursor:pointer;font-size:14px;color:var(--t-sort-text-color, #374151);transition:all 0.2s ease;min-height:36px}.sort-trigger:hover:not(.disabled){border-color:var(--t-sort-hover-border, #9ca3af)}.sort-trigger.open:not(.disabled){border-color:var(--t-sort-active-border, #3b82f6);box-shadow:0 0 0 3px var(--t-sort-focus-shadow, rgba(59, 130, 246, 0.1))}.sort-trigger.disabled{opacity:0.6;cursor:not-allowed}.sort-label{color:var(--t-sort-label-color, #6b7280)}.sort-value{flex:1;display:flex;align-items:center;gap:4px;text-align:left}.sort-direction{font-size:12px;cursor:pointer;padding:2px;transition:transform 0.2s ease}.sort-direction:hover{opacity:0.7}.sort-arrow{font-size:10px;transition:transform 0.2s ease}.sort-dropdown{position:absolute;top:calc(100% + 4px);left:0;min-width:150px;background-color:var(--t-sort-dropdown-bg, #ffffff);border:1px solid var(--t-sort-dropdown-border, #d1d5db);border-radius:8px;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);z-index:1000;overflow:hidden}.sort-options{padding:4px}.sort-option{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 12px;cursor:pointer;border-radius:6px;font-size:14px;color:var(--t-sort-option-text-color, #374151);transition:background-color 0.15s ease}.sort-option:hover:not(.disabled){background-color:var(--t-sort-option-hover-bg, #f3f4f6)}.sort-option.selected{background-color:var(--t-sort-option-selected-bg, #eff6ff);color:var(--t-sort-option-selected-color, #1e40af)}.sort-option.disabled{opacity:0.5;cursor:not-allowed}.sort-option-label{flex:1;text-align:left}.sort-option-direction{font-size:12px;color:var(--t-sort-direction-color, #3b82f6)}.sort-select{padding:8px 12px;background-color:var(--t-sort-select-bg, #ffffff);border:1px solid var(--t-sort-select-border, #d1d5db);border-radius:8px;font-size:14px;color:var(--t-sort-select-text-color, #374151);cursor:pointer;outline:none;min-width:150px}.sort-select:hover:not(:disabled){border-color:var(--t-sort-select-hover-border, #9ca3af)}.sort-select:focus{border-color:var(--t-sort-select-focus-border, #3b82f6);box-shadow:0 0 0 3px var(--t-sort-focus-shadow, rgba(59, 130, 246, 0.1))}.sort-select:disabled{opacity:0.6;cursor:not-allowed}.sort-button-group{display:flex;flex-wrap:wrap;gap:8px}.sort-button{display:flex;align-items:center;gap:6px;padding:8px 16px;background-color:var(--t-sort-button-bg, #ffffff);border:1px solid var(--t-sort-button-border, #d1d5db);border-radius:8px;cursor:pointer;font-size:14px;color:var(--t-sort-button-text-color, #374151);transition:all 0.15s ease}.sort-button:hover:not(.disabled){border-color:var(--t-sort-button-hover-border, #9ca3af);background-color:var(--t-sort-button-hover-bg, #f9fafb)}.sort-button.selected{background-color:var(--t-sort-button-selected-bg, #3b82f6);border-color:var(--t-sort-button-selected-border, #3b82f6);color:var(--t-sort-button-selected-color, #ffffff)}.sort-button.selected .sort-direction{color:var(--t-sort-button-selected-color, #ffffff)}.sort-button.disabled{opacity:0.5;cursor:not-allowed}@media (max-width: 375px){.sort-trigger{min-height:44px;padding:10px 14px;font-size:14px}.sort-dropdown{min-width:calc(100vw - 32px);max-width:calc(100vw - 32px)}.sort-option{min-height:44px;padding:10px 14px}.sort-select{min-width:calc(100vw - 32px);min-height:44px;padding:10px 14px}.sort-button{min-height:44px;padding:10px 14px;font-size:14px}}@media (min-width: 768px){.sort-trigger{min-height:40px}.sort-dropdown{min-width:200px}.sort-select{min-width:180px}}.sort-trigger:focus-visible,.sort-option:focus-visible,.sort-button:focus-visible,.sort-select:focus-visible{outline:2px solid var(--t-sort-focus-color, #005fcc);outline-offset:2px}@media (prefers-reduced-motion: reduce){.sort-trigger,.sort-arrow,.sort-direction,.sort-option,.sort-button{transition:none}}";

const TintoSort = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoSortChange = createEvent(this, 'tintoSortChange');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 정렬 라벨 */
  label;
  /** 정렬 variant */
  variant = 'default';
  /** 정렬 크기 */
  size = 'md';
  /** 정렬 옵션들 (JSON 문자열 또는 객체) */
  options = [];
  /** 선택된 정렬 값 */
  value = '';
  /** 비활성화 여부 */
  disabled = false;
  /* ============================ State ============================ */
  isOpen = false;
  parsedOptions = [];
  selectedDirection = 'asc';
  /* ============================ Events ============================ */
  /** 정렬 변경 이벤트 */
  tintoSortChange;
  /* ============================ Watch ============================ */
  handleOptionsChange() {
    this.parseOptions();
  }
  handleValueChange() {
    this.emitChange();
  }
  /* ============================ Lifecycle ============================ */
  componentWillLoad() {
    this.parseOptions();
    this.setInitialValue();
  }
  /* ============================ Methods ============================ */
  parseOptions() {
    if (typeof this.options === 'string') {
      try {
        this.parsedOptions = JSON.parse(this.options);
      } catch (e) {
        console.warn('[tinto-sort] Invalid options JSON:', e);
        this.parsedOptions = [];
      }
    } else {
      this.parsedOptions = this.options || [];
    }
  }
  setInitialValue() {
    if (!this.value && this.parsedOptions.length > 0) {
      this.value = this.parsedOptions[0].value;
      this.selectedDirection = this.parsedOptions[0].direction || 'asc';
    }
  }
  getSelectedOption() {
    return this.parsedOptions.find((option) => option.value === this.value);
  }
  handleOptionClick = (option) => {
    if (option.disabled || this.disabled) return;
    if (this.value === option.value) {
      // 같은 옵션이면 방향 토글
      this.selectedDirection = this.selectedDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // 다른 옵션이면 선택 및 기본 방향 설정
      this.value = option.value;
      this.selectedDirection = option.direction || 'asc';
    }
    this.isOpen = false;
    this.emitChange();
  };
  handleDirectionToggle = (event) => {
    event.stopPropagation();
    if (this.disabled) return;
    this.selectedDirection = this.selectedDirection === 'asc' ? 'desc' : 'asc';
    this.emitChange();
  };
  emitChange() {
    const selectedOption = this.getSelectedOption();
    if (!selectedOption) return;
    this.tintoSortChange.emit({
      value: this.value,
      direction: this.selectedDirection,
      option: selectedOption,
    });
  }
  handleDocumentClick(event) {
    const target = event.target;
    if (!this.el.contains(target) && this.isOpen) {
      this.isOpen = false;
    }
  }
  /* ============================ Render ============================ */
  renderSelectVariant() {
    return h(
      'select',
      {
        class: `sort-select ${this.size}`,
        part: 'select',
        disabled: this.disabled,
        'aria-label': this.label || 'Sort',
        onChange: (e) => {
          const target = e.target;
          this.value = target.value;
          const option = this.parsedOptions.find((opt) => opt.value === target.value);
          if (option) {
            this.selectedDirection = option.direction || 'asc';
          }
          this.emitChange();
        },
      },
      this.parsedOptions.map((option) => {
        const isSelected = this.value === option.value;
        return h(
          'option',
          {
            key: option.value,
            value: option.value,
            disabled: option.disabled,
            selected: isSelected,
          },
          option.label,
        );
      }),
    );
  }
  renderButtonVariant() {
    return h(
      'div',
      {
        class: `sort-button-group ${this.size}`,
        part: 'button-group',
        role: 'group',
        'aria-label': this.label || 'Sort',
      },
      this.parsedOptions.map((option) => {
        const isSelected = this.value === option.value;
        return h(
          'button',
          {
            type: 'button',
            class: `sort-button ${isSelected ? 'selected' : ''} ${option.disabled || this.disabled ? 'disabled' : ''}`,
            part: 'button',
            disabled: option.disabled || this.disabled,
            onClick: () => this.handleOptionClick(option),
          },
          option.label,
          isSelected &&
            h(
              'span',
              { class: 'sort-direction', onClick: this.handleDirectionToggle },
              this.selectedDirection === 'asc' ? '↑' : '↓',
            ),
        );
      }),
    );
  }
  renderDefaultVariant() {
    const selectedOption = this.getSelectedOption();
    const displayLabel = this.label || '정렬';
    return h(
      'div',
      { class: `sort-container ${this.size}` },
      h(
        'button',
        {
          type: 'button',
          class: `sort-trigger ${this.size} ${this.isOpen ? 'open' : ''} ${this.disabled ? 'disabled' : ''}`,
          part: 'trigger',
          disabled: this.disabled,
          'aria-expanded': this.isOpen,
          'aria-haspopup': 'listbox',
          'aria-label': displayLabel,
          onClick: () => (this.isOpen = !this.isOpen),
        },
        h('span', { class: 'sort-label' }, displayLabel),
        selectedOption &&
          h(
            'span',
            { class: 'sort-value' },
            selectedOption.label,
            h(
              'span',
              { class: 'sort-direction', onClick: this.handleDirectionToggle },
              this.selectedDirection === 'asc' ? '↑' : '↓',
            ),
          ),
        h('span', { class: 'sort-arrow' }, this.isOpen ? '▲' : '▼'),
      ),
      this.isOpen &&
        h(
          'div',
          {
            class: 'sort-dropdown',
            part: 'dropdown',
            role: 'listbox',
            'aria-label': 'Sort options',
          },
          h(
            'div',
            { class: 'sort-options', part: 'options' },
            this.parsedOptions.map((option) => {
              const isSelected = this.value === option.value;
              return h(
                'div',
                {
                  class: `sort-option ${isSelected ? 'selected' : ''} ${option.disabled || this.disabled ? 'disabled' : ''}`,
                  part: 'option',
                  onClick: () => this.handleOptionClick(option),
                },
                h('span', { class: 'sort-option-label' }, option.label),
                isSelected &&
                  h(
                    'span',
                    { class: 'sort-option-direction' },
                    this.selectedDirection === 'asc' ? '↑' : '↓',
                  ),
              );
            }),
          ),
        ),
    );
  }
  render() {
    if (this.variant === 'select') {
      return this.renderSelectVariant();
    }
    if (this.variant === 'button') {
      return this.renderButtonVariant();
    }
    return this.renderDefaultVariant();
  }
  static get watchers() {
    return {
      options: ['handleOptionsChange'],
      value: ['handleValueChange'],
    };
  }
};
TintoSort.style = sortCss;

export { TintoSort as tinto_sort };
//# sourceMappingURL=tinto-sort.entry.js.map
