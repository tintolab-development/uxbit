import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const filterCss =
  ":host{display:inline-block;position:relative;font-family:system-ui,\n    -apple-system,\n    'Segoe UI',\n    Roboto,\n    'Noto Sans KR',\n    'Apple SD Gothic Neo',\n    'Malgun Gothic',\n    sans-serif}.filter-container{position:relative;display:inline-block}.filter-trigger{display:flex;align-items:center;gap:8px;padding:8px 12px;background-color:var(--t-filter-bg, #ffffff);border:1px solid var(--t-filter-border, #d1d5db);border-radius:8px;cursor:pointer;font-size:14px;color:var(--t-filter-text-color, #374151);transition:all 0.2s ease;min-height:36px}.filter-trigger:hover:not(.disabled){border-color:var(--t-filter-hover-border, #9ca3af)}.filter-trigger.open:not(.disabled){border-color:var(--t-filter-active-border, #3b82f6);box-shadow:0 0 0 3px var(--t-filter-focus-shadow, rgba(59, 130, 246, 0.1))}.filter-trigger.disabled{opacity:0.6;cursor:not-allowed}.filter-label{flex:1;text-align:left}.filter-arrow{font-size:10px;transition:transform 0.2s ease}.filter-dropdown{position:absolute;top:calc(100% + 4px);left:0;min-width:200px;max-width:300px;background-color:var(--t-filter-dropdown-bg, #ffffff);border:1px solid var(--t-filter-dropdown-border, #d1d5db);border-radius:8px;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);z-index:1000;max-height:300px;overflow:hidden;display:flex;flex-direction:column}.filter-search{padding:12px;border-bottom:1px solid var(--t-filter-dropdown-border, #e5e7eb)}.filter-search-input{width:100%;padding:8px 12px;border:1px solid var(--t-filter-search-border, #d1d5db);border-radius:6px;font-size:14px;outline:none}.filter-search-input:focus{border-color:var(--t-filter-focus-border, #3b82f6);box-shadow:0 0 0 3px var(--t-filter-focus-shadow, rgba(59, 130, 246, 0.1))}.filter-options{max-height:240px;overflow-y:auto;padding:4px}.filter-option{display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;border-radius:6px;font-size:14px;color:var(--t-filter-option-text-color, #374151);transition:background-color 0.15s ease}.filter-option:hover:not(.disabled){background-color:var(--t-filter-option-hover-bg, #f3f4f6)}.filter-option.selected{background-color:var(--t-filter-option-selected-bg, #eff6ff);color:var(--t-filter-option-selected-color, #1e40af)}.filter-option.disabled{opacity:0.5;cursor:not-allowed}.filter-option input[type='checkbox'],.filter-option input[type='radio']{margin:0;cursor:pointer}.filter-option-label{flex:1;text-align:left}.filter-option-description{font-size:12px;color:var(--t-filter-option-description-color, #6b7280)}.filter-icon{font-size:16px;display:flex;align-items:center;justify-content:center}.filter-empty{padding:24px;text-align:center;color:var(--t-filter-empty-color, #9ca3af);font-size:14px}.filter-footer{padding:8px 12px;border-top:1px solid var(--t-filter-dropdown-border, #e5e7eb);display:flex;justify-content:flex-end}.filter-clear-button{padding:6px 12px;background:transparent;border:1px solid var(--t-filter-clear-border, #d1d5db);border-radius:6px;cursor:pointer;font-size:12px;color:var(--t-filter-clear-color, #6b7280);transition:all 0.15s ease}.filter-clear-button:hover{background-color:var(--t-filter-clear-hover-bg, #f3f4f6);border-color:var(--t-filter-clear-hover-border, #9ca3af)}.filter-button-group{display:flex;flex-wrap:wrap;gap:8px}.filter-button{display:flex;align-items:center;gap:6px;padding:8px 16px;background-color:var(--t-filter-button-bg, #ffffff);border:1px solid var(--t-filter-button-border, #d1d5db);border-radius:8px;cursor:pointer;font-size:14px;color:var(--t-filter-button-text-color, #374151);transition:all 0.15s ease}.filter-button:hover:not(.disabled){border-color:var(--t-filter-button-hover-border, #9ca3af);background-color:var(--t-filter-button-hover-bg, #f9fafb)}.filter-button.selected{background-color:var(--t-filter-button-selected-bg, #3b82f6);border-color:var(--t-filter-button-selected-border, #3b82f6);color:var(--t-filter-button-selected-color, #ffffff)}.filter-button.disabled{opacity:0.5;cursor:not-allowed}@media (max-width: 375px){.filter-trigger{min-height:44px;padding:10px 14px;font-size:14px}.filter-dropdown{min-width:calc(100vw - 32px);max-width:calc(100vw - 32px)}.filter-button{min-height:44px;padding:10px 14px;font-size:14px}.filter-option{min-height:44px;padding:10px 14px}}@media (min-width: 768px){.filter-trigger{min-height:40px}.filter-dropdown{min-width:250px;max-width:350px}}.filter-trigger:focus-visible,.filter-option:focus-visible,.filter-button:focus-visible,.filter-clear-button:focus-visible{outline:2px solid var(--t-filter-focus-color, #005fcc);outline-offset:2px}.filter-search-input:focus-visible{outline:2px solid var(--t-filter-focus-border, #3b82f6);outline-offset:2px}@media (prefers-reduced-motion: reduce){.filter-trigger,.filter-arrow,.filter-option,.filter-button,.filter-clear-button{transition:none}}";

const TintoFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoFilterChange = createEvent(this, 'tintoFilterChange');
    this.tintoFilterClear = createEvent(this, 'tintoFilterClear');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 필터 ID (고유 식별자) */
  filterId = '';
  /** 필터 라벨 */
  label;
  /** 필터 타입 */
  type = 'multiple';
  /** 필터 variant */
  variant = 'default';
  /** 필터 크기 */
  size = 'md';
  /** 필터 옵션들 (JSON 문자열 또는 객체) */
  options = [];
  /** 선택된 값들 (단일 선택 시 하나의 값) */
  value = [];
  /** 플레이스홀더 (검색 필터용) */
  placeholder;
  /** 검색 가능 여부 */
  searchable = false;
  /** 필터 초기화 버튼 표시 여부 */
  showClear = true;
  /** 최대 선택 개수 (multiple 타입일 때) */
  maxSelection;
  /** 비활성화 여부 */
  disabled = false;
  /* ============================ State ============================ */
  searchQuery = '';
  isOpen = false;
  parsedOptions = [];
  /* ============================ Events ============================ */
  /** 필터 값 변경 이벤트 */
  tintoFilterChange;
  /** 필터 초기화 이벤트 */
  tintoFilterClear;
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
  }
  handleDocumentClick(event) {
    const target = event.target;
    if (!this.el.contains(target) && this.isOpen) {
      this.isOpen = false;
    }
  }
  /* ============================ Methods ============================ */
  parseOptions() {
    if (typeof this.options === 'string') {
      try {
        this.parsedOptions = JSON.parse(this.options);
      } catch (e) {
        console.warn('[tinto-filter] Invalid options JSON:', e);
        this.parsedOptions = [];
      }
    } else {
      this.parsedOptions = this.options || [];
    }
  }
  getSelectedValues() {
    if (Array.isArray(this.value)) {
      return this.value;
    }
    return this.value ? [this.value] : [];
  }
  isOptionSelected(optionValue) {
    const selected = this.getSelectedValues();
    return selected.includes(optionValue);
  }
  getFilteredOptions() {
    if (!this.searchQuery) {
      return this.parsedOptions;
    }
    const query = this.searchQuery.toLowerCase();
    return this.parsedOptions.filter(
      (option) =>
        option.label.toLowerCase().includes(query) ||
        option.description?.toLowerCase().includes(query),
    );
  }
  handleOptionClick = (option) => {
    if (option.disabled || this.disabled) return;
    if (this.type === 'single') {
      this.value = option.value;
      this.isOpen = false;
    } else {
      const selected = this.getSelectedValues();
      const index = selected.indexOf(option.value);
      if (index > -1) {
        // 이미 선택된 경우 제거
        selected.splice(index, 1);
      } else {
        // 최대 선택 개수 체크
        if (this.maxSelection && selected.length >= this.maxSelection) {
          return;
        }
        selected.push(option.value);
      }
      this.value = selected;
    }
    this.emitChange();
  };
  handleClear = () => {
    this.value = this.type === 'single' ? '' : [];
    this.searchQuery = '';
    this.tintoFilterClear.emit({ filterId: this.filterId });
    this.emitChange();
  };
  handleSearch = (event) => {
    const input = event.target;
    this.searchQuery = input.value;
  };
  emitChange() {
    const selectedValues = this.getSelectedValues();
    const selectedOptions = this.parsedOptions.filter((option) =>
      selectedValues.includes(option.value),
    );
    this.tintoFilterChange.emit({
      filterId: this.filterId,
      values: selectedValues,
      options: selectedOptions,
    });
  }
  /* ============================ Render ============================ */
  renderButtonVariant() {
    const selectedValues = this.getSelectedValues();
    const selectedCount = selectedValues.length;
    return h(
      'div',
      { class: `filter-button-group ${this.size}`, part: 'button-group' },
      this.parsedOptions.map((option) => {
        const isSelected = this.isOptionSelected(option.value);
        return h(
          'button',
          {
            type: 'button',
            class: `filter-button ${isSelected ? 'selected' : ''} ${option.disabled || this.disabled ? 'disabled' : ''}`,
            part: 'button',
            disabled: option.disabled || this.disabled,
            onClick: () => this.handleOptionClick(option),
          },
          option.icon && h('span', { class: 'filter-icon' }, option.icon),
          h('span', null, option.label),
          option.count !== undefined &&
            h('tinto-badge', { variant: 'secondary', size: 'sm', count: option.count }),
        );
      }),
      this.showClear &&
        selectedCount > 0 &&
        h(
          'button',
          {
            type: 'button',
            class: 'filter-clear-button',
            part: 'clear-button',
            onClick: this.handleClear,
          },
          '\uCD08\uAE30\uD654',
        ),
    );
  }
  renderDefaultVariant() {
    const selectedValues = this.getSelectedValues();
    const selectedCount = selectedValues.length;
    const filteredOptions = this.getFilteredOptions();
    const displayLabel = this.label || '필터';
    return h(
      'div',
      { class: `filter-container ${this.size}` },
      h(
        'button',
        {
          type: 'button',
          class: `filter-trigger ${this.size} ${this.isOpen ? 'open' : ''} ${this.disabled ? 'disabled' : ''}`,
          part: 'trigger',
          disabled: this.disabled,
          'aria-expanded': this.isOpen,
          'aria-haspopup': 'listbox',
          'aria-label': displayLabel,
          onClick: () => (this.isOpen = !this.isOpen),
        },
        h('span', { class: 'filter-label' }, displayLabel),
        selectedCount > 0 &&
          h('tinto-badge', { variant: 'primary', size: 'sm', count: selectedCount }),
        h('span', { class: 'filter-arrow' }, this.isOpen ? '▲' : '▼'),
      ),
      this.isOpen &&
        h(
          'div',
          {
            class: 'filter-dropdown',
            part: 'dropdown',
            role: 'listbox',
            'aria-label': 'Filter options',
          },
          this.searchable &&
            h(
              'div',
              { class: 'filter-search', part: 'search' },
              h('input', {
                type: 'search',
                class: 'filter-search-input',
                placeholder: this.placeholder || '검색...',
                value: this.searchQuery,
                onInput: this.handleSearch,
              }),
            ),
          h(
            'div',
            { class: 'filter-options', part: 'options' },
            filteredOptions.length === 0
              ? h('div', { class: 'filter-empty' }, '\uC635\uC158\uC774 \uC5C6\uC2B5\uB2C8\uB2E4')
              : filteredOptions.map((option) => {
                  const isSelected = this.isOptionSelected(option.value);
                  return h(
                    'div',
                    {
                      class: `filter-option ${isSelected ? 'selected' : ''} ${option.disabled || this.disabled ? 'disabled' : ''}`,
                      part: 'option',
                      onClick: () => this.handleOptionClick(option),
                    },
                    this.variant === 'checkbox' &&
                      h('input', {
                        type: 'checkbox',
                        checked: isSelected,
                        disabled: option.disabled || this.disabled,
                        onChange: () => {},
                      }),
                    this.variant === 'radio' &&
                      h('input', {
                        type: 'radio',
                        checked: isSelected,
                        disabled: option.disabled || this.disabled,
                        onChange: () => {},
                      }),
                    option.icon && h('span', { class: 'filter-icon' }, option.icon),
                    h('span', { class: 'filter-option-label' }, option.label),
                    option.description &&
                      h('span', { class: 'filter-option-description' }, option.description),
                    option.count !== undefined &&
                      h('tinto-badge', { variant: 'secondary', size: 'sm', count: option.count }),
                  );
                }),
          ),
          this.showClear &&
            selectedCount > 0 &&
            h(
              'div',
              { class: 'filter-footer', part: 'footer' },
              h(
                'button',
                {
                  type: 'button',
                  class: 'filter-clear-button',
                  part: 'clear-button',
                  onClick: this.handleClear,
                },
                '\uCD08\uAE30\uD654',
              ),
            ),
        ),
    );
  }
  render() {
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
TintoFilter.style = filterCss;

export { TintoFilter as tinto_filter };
//# sourceMappingURL=tinto-filter.entry.js.map
