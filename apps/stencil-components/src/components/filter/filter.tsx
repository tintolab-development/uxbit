// filter.tsx
import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
  Listen,
} from '@stencil/core';
import type {
  FilterOption,
  FilterType,
  FilterVariant,
  FilterSize,
  FilterChangeDetail,
} from './filter.types';

@Component({
  tag: 'tinto-filter',
  styleUrl: 'filter.css',
  shadow: true,
})
export class TintoFilter {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 필터 ID (고유 식별자) */
  @Prop({ reflect: true }) filterId: string = '';

  /** 필터 라벨 */
  @Prop({ reflect: true }) label?: string;

  /** 필터 타입 */
  @Prop({ reflect: true }) type: FilterType = 'multiple';

  /** 필터 variant */
  @Prop({ reflect: true }) variant: FilterVariant = 'default';

  /** 필터 크기 */
  @Prop({ reflect: true }) size: FilterSize = 'md';

  /** 필터 옵션들 (JSON 문자열 또는 객체) */
  @Prop({ mutable: true }) options: FilterOption[] | string = [];

  /** 선택된 값들 (단일 선택 시 하나의 값) */
  @Prop({ reflect: true, mutable: true }) value: string | string[] = [];

  /** 플레이스홀더 (검색 필터용) */
  @Prop({ reflect: true }) placeholder?: string;

  /** 검색 가능 여부 */
  @Prop({ reflect: true }) searchable: boolean = false;

  /** 필터 초기화 버튼 표시 여부 */
  @Prop({ reflect: true }) showClear: boolean = true;

  /** 최대 선택 개수 (multiple 타입일 때) */
  @Prop({ reflect: true }) maxSelection?: number;

  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /* ============================ State ============================ */

  @State() private searchQuery: string = '';
  @State() private isOpen: boolean = false;
  @State() private parsedOptions: FilterOption[] = [];

  /* ============================ Events ============================ */

  /** 필터 값 변경 이벤트 */
  @Event() tintoFilterChange!: EventEmitter<FilterChangeDetail>;

  /** 필터 초기화 이벤트 */
  @Event() tintoFilterClear!: EventEmitter<{ filterId: string }>;

  /* ============================ Watch ============================ */

  @Watch('options')
  handleOptionsChange() {
    this.parseOptions();
  }

  @Watch('value')
  handleValueChange() {
    this.emitChange();
  }

  /* ============================ Lifecycle ============================ */

  componentWillLoad() {
    this.parseOptions();
  }

  @Listen('click', { target: 'document' })
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.el.contains(target) && this.isOpen) {
      this.isOpen = false;
    }
  }

  /* ============================ Methods ============================ */

  private parseOptions() {
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

  private getSelectedValues(): string[] {
    if (Array.isArray(this.value)) {
      return this.value;
    }
    return this.value ? [this.value] : [];
  }

  private isOptionSelected(optionValue: string): boolean {
    const selected = this.getSelectedValues();
    return selected.includes(optionValue);
  }

  private getFilteredOptions(): FilterOption[] {
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

  private handleOptionClick = (option: FilterOption) => {
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

  private handleClear = () => {
    this.value = this.type === 'single' ? '' : [];
    this.searchQuery = '';
    this.tintoFilterClear.emit({ filterId: this.filterId });
    this.emitChange();
  };

  private handleSearch = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
  };

  private emitChange() {
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

  private renderButtonVariant() {
    const selectedValues = this.getSelectedValues();
    const selectedCount = selectedValues.length;

    return (
      <div class={`filter-button-group ${this.size}`} part="button-group">
        {this.parsedOptions.map((option) => {
          const isSelected = this.isOptionSelected(option.value);
          return (
            <button
              type="button"
              class={`filter-button ${isSelected ? 'selected' : ''} ${option.disabled || this.disabled ? 'disabled' : ''}`}
              part="button"
              disabled={option.disabled || this.disabled}
              onClick={() => this.handleOptionClick(option)}
            >
              {option.icon && <span class="filter-icon">{option.icon}</span>}
              <span>{option.label}</span>
              {option.count !== undefined && (
                <tinto-badge variant="secondary" size="sm" count={option.count} />
              )}
            </button>
          );
        })}
        {this.showClear && selectedCount > 0 && (
          <button
            type="button"
            class="filter-clear-button"
            part="clear-button"
            onClick={this.handleClear}
          >
            초기화
          </button>
        )}
      </div>
    );
  }

  private renderDefaultVariant() {
    const selectedValues = this.getSelectedValues();
    const selectedCount = selectedValues.length;
    const filteredOptions = this.getFilteredOptions();
    const displayLabel = this.label || '필터';

    return (
      <div class={`filter-container ${this.size}`}>
        <button
          type="button"
          class={`filter-trigger ${this.size} ${this.isOpen ? 'open' : ''} ${this.disabled ? 'disabled' : ''}`}
          part="trigger"
          disabled={this.disabled}
          aria-expanded={this.isOpen}
          aria-haspopup="listbox"
          aria-label={displayLabel}
          onClick={() => (this.isOpen = !this.isOpen)}
        >
          <span class="filter-label">{displayLabel}</span>
          {selectedCount > 0 && <tinto-badge variant="primary" size="sm" count={selectedCount} />}
          <span class="filter-arrow">{this.isOpen ? '▲' : '▼'}</span>
        </button>

        {this.isOpen && (
          <div class="filter-dropdown" part="dropdown" role="listbox" aria-label="Filter options">
            {this.searchable && (
              <div class="filter-search" part="search">
                <input
                  type="search"
                  class="filter-search-input"
                  placeholder={this.placeholder || '검색...'}
                  value={this.searchQuery}
                  onInput={this.handleSearch}
                />
              </div>
            )}

            <div class="filter-options" part="options">
              {filteredOptions.length === 0 ? (
                <div class="filter-empty">옵션이 없습니다</div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = this.isOptionSelected(option.value);
                  return (
                    <div
                      class={`filter-option ${isSelected ? 'selected' : ''} ${option.disabled || this.disabled ? 'disabled' : ''}`}
                      part="option"
                      onClick={() => this.handleOptionClick(option)}
                    >
                      {this.variant === 'checkbox' && (
                        <input
                          type="checkbox"
                          checked={isSelected}
                          disabled={option.disabled || this.disabled}
                          onChange={() => {}}
                        />
                      )}
                      {this.variant === 'radio' && (
                        <input
                          type="radio"
                          checked={isSelected}
                          disabled={option.disabled || this.disabled}
                          onChange={() => {}}
                        />
                      )}
                      {option.icon && <span class="filter-icon">{option.icon}</span>}
                      <span class="filter-option-label">{option.label}</span>
                      {option.description && (
                        <span class="filter-option-description">{option.description}</span>
                      )}
                      {option.count !== undefined && (
                        <tinto-badge variant="secondary" size="sm" count={option.count} />
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {this.showClear && selectedCount > 0 && (
              <div class="filter-footer" part="footer">
                <button
                  type="button"
                  class="filter-clear-button"
                  part="clear-button"
                  onClick={this.handleClear}
                >
                  초기화
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  render() {
    if (this.variant === 'button') {
      return this.renderButtonVariant();
    }
    return this.renderDefaultVariant();
  }
}
