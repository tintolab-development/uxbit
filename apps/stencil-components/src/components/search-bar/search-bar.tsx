// search-bar.tsx
import { Component, h, Element, Prop, Event, EventEmitter, State, Method } from '@stencil/core';
import type {
  SearchBarSize,
  SearchBarVariant,
  SearchResult,
  SearchSubmitDetail,
  SearchResultClickDetail,
} from './search-bar.types';

@Component({
  tag: 'tinto-search-bar',
  styleUrl: 'search-bar.css',
  shadow: true,
})
export class TintoSearchBar {
  @Element() el!: HTMLElement;

  /* ============================ Visual & Layout ============================ */

  /** 검색바 크기 */
  @Prop({ reflect: true }) size: SearchBarSize = 'md';

  /** 검색바 variant */
  @Prop({ reflect: true }) variant: SearchBarVariant = 'default';

  /** 플레이스홀더 텍스트 */
  @Prop({ reflect: true }) placeholder: string = '';

  /** 검색어 값 */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /* ============================ Behavior ============================ */

  /** 자동 포커스 여부 */
  @Prop({ reflect: true }) autofocus: boolean = false;

  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** 로딩 상태 */
  @Prop({ reflect: true }) loading: boolean = false;

  /** 디바운스 시간 (ms) */
  @Prop({ reflect: true }) debounce: number = 300;

  /** 자동 완성 활성화 최소 글자 수 */
  @Prop({ reflect: true }) minLength: number = 2;

  /** 최대 결과 개수 */
  @Prop({ reflect: true }) maxResults: number = 10;

  /** 자동 완성 결과 목록 */
  @Prop({ mutable: true }) results: SearchResult[] = [];

  /* ============================ Events ============================ */

  /** 검색어 입력 이벤트 (디바운스 후) */
  @Event() tintoInput!: EventEmitter<string>;

  /** 검색 제출 이벤트 (엔터 또는 검색 버튼 클릭) */
  @Event() tintoSubmit!: EventEmitter<SearchSubmitDetail>;

  /** 검색 결과 클릭 이벤트 */
  @Event() tintoResultClick!: EventEmitter<SearchResultClickDetail>;

  /* ============================ State ============================ */

  @State() private showResults: boolean = false;

  private inputElement?: HTMLInputElement;
  private debounceTimer?: number;

  /* ============================ Lifecycle ============================ */

  componentDidLoad() {
    if (this.autofocus && this.inputElement) {
      this.inputElement.focus();
    }
  }

  /* ============================ Handlers ============================ */

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const query = input.value.trim();

    this.value = query;

    // 디바운스 처리
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = window.setTimeout(() => {
      if (query.length >= this.minLength) {
        this.tintoInput.emit(query);
        this.showResults = this.results.length > 0;
      } else {
        this.showResults = false;
      }
    }, this.debounce);
  };

  private handleFocus = () => {
    if (this.value.length >= this.minLength && this.results.length > 0) {
      this.showResults = true;
    }
  };

  private handleBlur = () => {
    // 결과 클릭을 위해 약간의 지연
    setTimeout(() => {
      this.showResults = false;
    }, 200);
  };

  private handleSubmit = (event: Event) => {
    event.preventDefault();
    const query = this.value.trim();

    if (query.length === 0) return;

    this.tintoSubmit.emit({
      query,
      timestamp: Date.now(),
    });

    this.showResults = false;
  };

  private handleResultClick = (result: SearchResult) => {
    this.tintoResultClick.emit({
      result,
      query: this.value,
    });

    if (result.href) {
      window.location.href = result.href;
    }

    this.showResults = false;
    this.value = result.title;
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    } else if (event.key === 'Escape') {
      this.showResults = false;
      this.inputElement?.blur();
    }
  };

  /* ============================ Methods ============================ */

  /** 검색바 포커스 */
  @Method()
  async focusInput() {
    this.inputElement?.focus();
  }

  /** 검색바 값 초기화 */
  @Method()
  async clearValue() {
    this.value = '';
    this.showResults = false;
    this.inputElement?.focus();
  }

  /* ============================ Render ============================ */

  render() {
    return (
      <div class="search-bar-container">
        <form class="search-bar-form" onSubmit={this.handleSubmit} part="form">
          <div class="search-bar-input-wrapper" part="input-wrapper">
            {/* 검색 아이콘 */}
            <span class="search-icon" part="icon" aria-hidden="true">
              <slot name="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 19L14.65 14.65"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </slot>
            </span>

            {/* 입력 필드 */}
            <input
              ref={(el) => (this.inputElement = el)}
              class="search-bar-input"
              part="input"
              type="search"
              placeholder={this.placeholder}
              value={this.value}
              disabled={this.disabled}
              autocomplete="off"
              aria-label={this.placeholder}
              aria-expanded={this.showResults ? 'true' : 'false'}
              aria-haspopup="listbox"
              onInput={this.handleInput}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onKeyDown={this.handleKeyDown}
            />

            {/* 로딩 스피너 */}
            {this.loading && (
              <span class="loading-spinner" part="loading" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-dasharray="43.98"
                    stroke-dashoffset="10.99"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 8 8;360 8 8"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </span>
            )}

            {/* 클리어 버튼 */}
            {this.value.length > 0 && !this.loading && (
              <button
                type="button"
                class="clear-button"
                part="clear"
                aria-label="입력 지우기"
                onClick={() => this.clearValue()}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>

        {/* 자동 완성 결과 목록 */}
        {this.showResults && this.results.length > 0 && (
          <div class="search-results" part="results" role="listbox">
            {this.results.slice(0, this.maxResults).map((result) => (
              <button
                key={result.id}
                type="button"
                class="search-result-item"
                part="result-item"
                role="option"
                onClick={() => this.handleResultClick(result)}
              >
                {result.icon && (
                  <span class="result-icon" part="result-icon">
                    {result.icon}
                  </span>
                )}
                <div class="result-content" part="result-content">
                  <div class="result-title" part="result-title">
                    {result.title}
                  </div>
                  {result.description && (
                    <div class="result-description" part="result-description">
                      {result.description}
                    </div>
                  )}
                </div>
                <span class="result-arrow" part="result-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
