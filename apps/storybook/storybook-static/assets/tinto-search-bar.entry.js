import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const searchBarCss =
  ":host{display:block;position:relative;width:100%}:host([hidden]){display:none !important}.search-bar-container{position:relative;width:100%}.search-bar-form{width:100%}.search-bar-input-wrapper{position:relative;display:flex;align-items:center;gap:8px;width:100%;min-height:44px;padding:8px 12px;background:var(--t-search-bg, #ffffff);border:var(--t-search-border, 1px solid #e0e0e0);border-radius:var(--t-search-radius, 12px);transition:border-color 0.2s ease,\n    box-shadow 0.2s ease}.search-bar-input-wrapper>.search-icon{margin-right:0}.search-bar-input-wrapper>.search-bar-input{margin:0}:host([variant='outline']) .search-bar-input-wrapper{background:transparent;border:var(--t-search-border, 2px solid #e0e0e0)}:host([variant='filled']) .search-bar-input-wrapper{background:var(--t-search-bg, #f5f5f5);border:none}:host([size='sm']) .search-bar-input-wrapper{min-height:40px;padding:6px 10px;font-size:14px}:host([size='lg']) .search-bar-input-wrapper{min-height:52px;padding:12px 16px;font-size:18px}.search-bar-input-wrapper:focus-within{border-color:var(--t-search-focus-border, #007bff);box-shadow:var(--t-search-focus-shadow, 0 0 0 3px rgba(0, 123, 255, 0.1))}.search-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:20px;height:20px;color:var(--t-search-icon-color, #666)}:host([size='sm']) .search-icon{width:18px;height:18px}:host([size='lg']) .search-icon{width:24px;height:24px}.search-bar-input{flex:1;border:none;outline:none;background:transparent;font-size:inherit;font-family:inherit;color:var(--t-search-text-color, #333);min-width:0}.search-bar-input::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none;display:none}.search-bar-input::-webkit-search-decoration{-webkit-appearance:none}.search-bar-input[type='search']::-ms-clear{display:none;width:0;height:0}.search-bar-input[type='search']::-ms-reveal{display:none;width:0;height:0}.search-bar-input::placeholder{color:var(--t-search-placeholder-color, #999)}.search-bar-input:disabled{opacity:0.6;cursor:not-allowed}.loading-spinner{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:16px;height:16px;color:var(--t-search-loading-color, #666);animation:spin 1s linear infinite}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.clear-button{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:24px;height:24px;min-width:24px;min-height:24px;padding:0;margin-left:4px;border:none;background:transparent;color:var(--t-search-clear-color, #999);cursor:pointer;border-radius:50%;transition:background-color 0.2s ease,\n    color 0.2s ease}.clear-button:hover{background:var(--t-search-clear-hover-bg, #f0f0f0);color:var(--t-search-clear-hover-color, #333)}.clear-button:active{background:var(--t-search-clear-active-bg, #e0e0e0)}.search-results{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:1000;max-height:400px;overflow-y:auto;background:var(--t-search-results-bg, #ffffff);border:var(--t-search-results-border, 1px solid #e0e0e0);border-radius:var(--t-search-results-radius, 12px);box-shadow:var(--t-search-results-shadow, 0 4px 12px rgba(0, 0, 0, 0.1));margin-top:4px}.search-result-item{display:flex;align-items:center;gap:12px;width:100%;min-height:44px;padding:12px 16px;border:none;background:transparent;text-align:left;cursor:pointer;transition:background-color 0.2s ease}.search-result-item:hover,.search-result-item:focus{background:var(--t-search-result-hover-bg, #f5f5f5);outline:none}.search-result-item:active{background:var(--t-search-result-active-bg, #e8e8e8)}.search-result-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.search-result-item:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.result-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:24px;height:24px;color:var(--t-search-result-icon-color, #666)}.result-content{flex:1;min-width:0}.result-title{font-size:16px;font-weight:500;color:var(--t-search-result-title-color, #333);margin-bottom:4px}.result-description{font-size:14px;color:var(--t-search-result-desc-color, #666);line-height:1.4}.result-arrow{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:20px;height:20px;color:var(--t-search-result-arrow-color, #999);font-size:18px}@media (max-width: 375px){.search-bar-input-wrapper{min-height:40px;padding:6px 10px;font-size:14px}.search-icon{width:18px;height:18px}.search-bar-input{font-size:14px}}@media (min-width: 768px){.search-bar-input-wrapper{min-height:48px;padding:10px 14px;font-size:16px}.search-icon{width:22px;height:22px}}@media (min-width: 1024px){.search-bar-input-wrapper{min-height:52px;padding:12px 16px}}@media (min-width: 1920px){.search-bar-input-wrapper{padding:var(--t-search-py-desktop, 10px 14px);border-radius:var(--t-search-radius-desktop, 14px)}:host([size='lg']) .search-bar-input-wrapper{min-height:var(--t-search-height-lg-desktop, 56px);padding:var(--t-search-py-lg-desktop, 14px 18px)}}";

const TintoSearchBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoInput = createEvent(this, 'tintoInput');
    this.tintoSubmit = createEvent(this, 'tintoSubmit');
    this.tintoResultClick = createEvent(this, 'tintoResultClick');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Visual & Layout ============================ */
  /** 검색바 크기 */
  size = 'md';
  /** 검색바 variant */
  variant = 'default';
  /** 플레이스홀더 텍스트 */
  placeholder = '';
  /** 검색어 값 */
  value = '';
  /* ============================ Behavior ============================ */
  /** 자동 포커스 여부 */
  autofocus = false;
  /** 비활성화 여부 */
  disabled = false;
  /** 로딩 상태 */
  loading = false;
  /** 디바운스 시간 (ms) */
  debounce = 300;
  /** 자동 완성 활성화 최소 글자 수 */
  minLength = 2;
  /** 최대 결과 개수 */
  maxResults = 10;
  /** 자동 완성 결과 목록 */
  results = [];
  /* ============================ Events ============================ */
  /** 검색어 입력 이벤트 (디바운스 후) */
  tintoInput;
  /** 검색 제출 이벤트 (엔터 또는 검색 버튼 클릭) */
  tintoSubmit;
  /** 검색 결과 클릭 이벤트 */
  tintoResultClick;
  /* ============================ State ============================ */
  showResults = false;
  inputElement;
  debounceTimer;
  /* ============================ Lifecycle ============================ */
  componentDidLoad() {
    if (this.autofocus && this.inputElement) {
      this.inputElement.focus();
    }
  }
  /* ============================ Handlers ============================ */
  handleInput = (event) => {
    const input = event.target;
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
  handleFocus = () => {
    if (this.value.length >= this.minLength && this.results.length > 0) {
      this.showResults = true;
    }
  };
  handleBlur = () => {
    // 결과 클릭을 위해 약간의 지연
    setTimeout(() => {
      this.showResults = false;
    }, 200);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const query = this.value.trim();
    if (query.length === 0) return;
    this.tintoSubmit.emit({
      query,
      timestamp: Date.now(),
    });
    this.showResults = false;
  };
  handleResultClick = (result) => {
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
  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    } else if (event.key === 'Escape') {
      this.showResults = false;
      this.inputElement?.blur();
    }
  };
  /* ============================ Methods ============================ */
  /** 검색바 포커스 */
  async focusInput() {
    this.inputElement?.focus();
  }
  /** 검색바 값 초기화 */
  async clearValue() {
    this.value = '';
    this.showResults = false;
    this.inputElement?.focus();
  }
  /* ============================ Render ============================ */
  render() {
    return h(
      'div',
      { key: 'b25b9cb4b4a2baae284a482bcd2915ddcf1552f8', class: 'search-bar-container' },
      h(
        'form',
        {
          key: 'bebbf766af3c2d234d912942caba58bec3a735ba',
          class: 'search-bar-form',
          onSubmit: this.handleSubmit,
          part: 'form',
        },
        h(
          'div',
          {
            key: '6979e7eb0c9f7453bd254087c024c4c6ffd642cf',
            class: 'search-bar-input-wrapper',
            part: 'input-wrapper',
          },
          h(
            'span',
            {
              key: 'fdbf50c01902da42b79ca83468bab931579c57d4',
              class: 'search-icon',
              part: 'icon',
              'aria-hidden': 'true',
            },
            h(
              'slot',
              { key: '99aa54244c684950f5e473911ad8cbe2fb15aad7', name: 'icon' },
              h(
                'svg',
                {
                  key: 'e52e222e9621f05b07a6cbc14c741713eb0ecb42',
                  width: '20',
                  height: '20',
                  viewBox: '0 0 20 20',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                h('path', {
                  key: '18c757505d9911f206a7f82edfe9865fa8695fd4',
                  d: 'M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                }),
                h('path', {
                  key: 'dbdbf62bb1e02446111ef69fde63766a0fa4a6a2',
                  d: 'M19 19L14.65 14.65',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                }),
              ),
            ),
          ),
          h('input', {
            key: '49411fbf98f86ca5a839f6d3eb15dec50168c8db',
            ref: (el) => (this.inputElement = el),
            class: 'search-bar-input',
            part: 'input',
            type: 'search',
            placeholder: this.placeholder,
            value: this.value,
            disabled: this.disabled,
            autocomplete: 'off',
            'aria-label': this.placeholder,
            'aria-expanded': this.showResults ? 'true' : 'false',
            'aria-haspopup': 'listbox',
            onInput: this.handleInput,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onKeyDown: this.handleKeyDown,
          }),
          this.loading &&
            h(
              'span',
              {
                key: '94831ca0f4694cdfdfce5c49bfb948d74e8255f7',
                class: 'loading-spinner',
                part: 'loading',
                'aria-hidden': 'true',
              },
              h(
                'svg',
                {
                  key: '6c44171eac91e5f81d81c4a359536027cfc975df',
                  width: '16',
                  height: '16',
                  viewBox: '0 0 16 16',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                h(
                  'circle',
                  {
                    key: '59c5c7cac316c13a663c0f5e8418d5b006fa939e',
                    cx: '8',
                    cy: '8',
                    r: '7',
                    stroke: 'currentColor',
                    'stroke-width': '2',
                    'stroke-linecap': 'round',
                    'stroke-dasharray': '43.98',
                    'stroke-dashoffset': '10.99',
                  },
                  h('animateTransform', {
                    key: '60ba6248a9cc4e906063b5360334af00c2148eb0',
                    attributeName: 'transform',
                    type: 'rotate',
                    values: '0 8 8;360 8 8',
                    dur: '1s',
                    repeatCount: 'indefinite',
                  }),
                ),
              ),
            ),
          this.value.length > 0 &&
            !this.loading &&
            h(
              'button',
              {
                key: '08cc16570e8227094e0c9e84b42320137bb46354',
                type: 'button',
                class: 'clear-button',
                part: 'clear',
                'aria-label': '\uC785\uB825 \uC9C0\uC6B0\uAE30',
                onClick: () => this.clearValue(),
              },
              h(
                'svg',
                {
                  key: '11e97d31d3cd69e505f4c0313e52ecb17d3dc045',
                  width: '16',
                  height: '16',
                  viewBox: '0 0 16 16',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                h('path', {
                  key: 'd988fdfb74371c75aba54cb3ffa0d934f0d454f9',
                  d: 'M12 4L4 12M4 4L12 12',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                }),
              ),
            ),
        ),
      ),
      this.showResults &&
        this.results.length > 0 &&
        h(
          'div',
          {
            key: '5ccfcb475ea2461776d05dbac50b87a29ebc5631',
            class: 'search-results',
            part: 'results',
            role: 'listbox',
          },
          this.results
            .slice(0, this.maxResults)
            .map((result) =>
              h(
                'button',
                {
                  key: result.id,
                  type: 'button',
                  class: 'search-result-item',
                  part: 'result-item',
                  role: 'option',
                  onClick: () => this.handleResultClick(result),
                },
                result.icon &&
                  h('span', { class: 'result-icon', part: 'result-icon' }, result.icon),
                h(
                  'div',
                  { class: 'result-content', part: 'result-content' },
                  h('div', { class: 'result-title', part: 'result-title' }, result.title),
                  result.description &&
                    h(
                      'div',
                      { class: 'result-description', part: 'result-description' },
                      result.description,
                    ),
                ),
                h(
                  'span',
                  { class: 'result-arrow', part: 'result-arrow', 'aria-hidden': 'true' },
                  '\u2192',
                ),
              ),
            ),
        ),
    );
  }
};
TintoSearchBar.style = searchBarCss;

export { TintoSearchBar as tinto_search_bar };
//# sourceMappingURL=tinto-search-bar.entry.js.map
