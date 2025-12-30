// sort.tsx
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
import type { SortOption, SortVariant, SortSize, SortChangeDetail } from './sort.types';

@Component({
  tag: 'tinto-sort',
  styleUrl: 'sort.css',
  shadow: true,
})
export class TintoSort {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 정렬 라벨 */
  @Prop({ reflect: true }) label?: string;

  /** 정렬 variant */
  @Prop({ reflect: true }) variant: SortVariant = 'default';

  /** 정렬 크기 */
  @Prop({ reflect: true }) size: SortSize = 'md';

  /** 정렬 옵션들 (JSON 문자열 또는 객체) */
  @Prop({ mutable: true }) options: SortOption[] | string = [];

  /** 선택된 정렬 값 */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /* ============================ State ============================ */

  @State() private isOpen: boolean = false;
  @State() private parsedOptions: SortOption[] = [];
  @State() private selectedDirection: 'asc' | 'desc' = 'asc';

  /* ============================ Events ============================ */

  /** 정렬 변경 이벤트 */
  @Event() tintoSortChange!: EventEmitter<SortChangeDetail>;

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
    this.setInitialValue();
  }

  /* ============================ Methods ============================ */

  private parseOptions() {
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

  private setInitialValue() {
    if (!this.value && this.parsedOptions.length > 0) {
      this.value = this.parsedOptions[0].value;
      this.selectedDirection = this.parsedOptions[0].direction || 'asc';
    }
  }

  private getSelectedOption(): SortOption | undefined {
    return this.parsedOptions.find((option) => option.value === this.value);
  }

  private handleOptionClick = (option: SortOption) => {
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

  private handleDirectionToggle = (event: Event) => {
    event.stopPropagation();
    if (this.disabled) return;

    this.selectedDirection = this.selectedDirection === 'asc' ? 'desc' : 'asc';
    this.emitChange();
  };

  private emitChange() {
    const selectedOption = this.getSelectedOption();
    if (!selectedOption) return;

    this.tintoSortChange.emit({
      value: this.value,
      direction: this.selectedDirection,
      option: selectedOption,
    });
  }

  @Listen('click', { target: 'document' })
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.el.contains(target) && this.isOpen) {
      this.isOpen = false;
    }
  }

  /* ============================ Render ============================ */

  private renderSelectVariant() {
    return (
      <select
        class={`sort-select ${this.size}`}
        part="select"
        disabled={this.disabled}
        aria-label={this.label || 'Sort'}
        onChange={(e) => {
          const target = e.target as HTMLSelectElement;
          this.value = target.value;
          const option = this.parsedOptions.find((opt) => opt.value === target.value);
          if (option) {
            this.selectedDirection = option.direction || 'asc';
          }
          this.emitChange();
        }}
      >
        {this.parsedOptions.map((option) => {
          const isSelected = this.value === option.value;
          return (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              selected={isSelected}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    );
  }

  private renderButtonVariant() {
    return (
      <div
        class={`sort-button-group ${this.size}`}
        part="button-group"
        role="group"
        aria-label={this.label || 'Sort'}
      >
        {this.parsedOptions.map((option) => {
          const isSelected = this.value === option.value;
          return (
            <button
              type="button"
              class={`sort-button ${isSelected ? 'selected' : ''} ${option.disabled || this.disabled ? 'disabled' : ''}`}
              part="button"
              disabled={option.disabled || this.disabled}
              onClick={() => this.handleOptionClick(option)}
            >
              {option.label}
              {isSelected && (
                <span class="sort-direction" onClick={this.handleDirectionToggle}>
                  {this.selectedDirection === 'asc' ? '↑' : '↓'}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  private renderDefaultVariant() {
    const selectedOption = this.getSelectedOption();
    const displayLabel = this.label || '정렬';

    return (
      <div class={`sort-container ${this.size}`}>
        <button
          type="button"
          class={`sort-trigger ${this.size} ${this.isOpen ? 'open' : ''} ${this.disabled ? 'disabled' : ''}`}
          part="trigger"
          disabled={this.disabled}
          aria-expanded={this.isOpen}
          aria-haspopup="listbox"
          aria-label={displayLabel}
          onClick={() => (this.isOpen = !this.isOpen)}
        >
          <span class="sort-label">{displayLabel}</span>
          {selectedOption && (
            <span class="sort-value">
              {selectedOption.label}
              <span class="sort-direction" onClick={this.handleDirectionToggle}>
                {this.selectedDirection === 'asc' ? '↑' : '↓'}
              </span>
            </span>
          )}
          <span class="sort-arrow">{this.isOpen ? '▲' : '▼'}</span>
        </button>

        {this.isOpen && (
          <div class="sort-dropdown" part="dropdown" role="listbox" aria-label="Sort options">
            <div class="sort-options" part="options">
              {this.parsedOptions.map((option) => {
                const isSelected = this.value === option.value;
                return (
                  <div
                    class={`sort-option ${isSelected ? 'selected' : ''} ${option.disabled || this.disabled ? 'disabled' : ''}`}
                    part="option"
                    onClick={() => this.handleOptionClick(option)}
                  >
                    <span class="sort-option-label">{option.label}</span>
                    {isSelected && (
                      <span class="sort-option-direction">
                        {this.selectedDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
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
}
