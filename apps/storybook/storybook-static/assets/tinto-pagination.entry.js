import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const paginationCss =
  ':host{display:block;width:100%}:host([hidden]){display:none !important}.pagination-container{display:flex;align-items:center;gap:var(--t-pagination-gap, clamp(4px, 1vw, 8px));width:100%;background:var(--t-pagination-bg, transparent)}.pagination-container.align-center{justify-content:center}.pagination-container.align-end{justify-content:flex-end}.pagination-container.disabled{opacity:0.6;pointer-events:none}.pagination-total{color:var(--t-pagination-total-color, #666666);font-size:var(--t-pagination-total-font-size, clamp(14px, 2.5vw, 16px));margin:var(--t-pagination-total-margin, 0 clamp(12px, 2.5vw, 16px) 0 0);white-space:nowrap}.pagination-nav{display:flex;align-items:center;gap:var(--t-pagination-gap, clamp(4px, 1vw, 8px))}.pagination-button{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;min-width:var(--t-pagination-button-min-size, 44px);min-height:var(--t-pagination-button-min-size, 44px);padding:var(--t-pagination-button-padding, clamp(8px, 2vw, 12px) clamp(12px, 2.5vw, 16px));background:var(--t-pagination-button-bg, #ffffff);color:var(--t-pagination-button-color, #333333);border:var(--t-pagination-button-border, 1px solid #e0e0e0);border-radius:var(--t-pagination-button-radius, clamp(6px, 1.5vw, 8px));font-size:var(--t-pagination-button-font-size, clamp(14px, 2.5vw, 16px));font-weight:500;line-height:1;white-space:nowrap;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;transition:background-color 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.1s ease;outline:none}.pagination-button:focus-visible{outline:2px solid var(--t-pagination-button-color-active, #111827);outline-offset:2px}.pagination-button:hover:not(:disabled):not(:active){background:var(--t-pagination-button-bg-hover, #f5f5f5);color:var(--t-pagination-button-color-hover, #111827);border-color:var(--t-pagination-button-color-hover, #111827)}.pagination-button:active:not(:disabled){transform:scale(0.98)}.pagination-button:disabled{opacity:0.5;cursor:not-allowed;pointer-events:none}.pagination-button.active{background:var(--t-pagination-button-bg-active, #111827);color:var(--t-pagination-button-color-active, #ffffff);border-color:var(--t-pagination-button-border-active, #111827);font-weight:600}.pagination-button-first,.pagination-button-prev,.pagination-button-next,.pagination-button-last{font-size:var(--t-pagination-nav-icon-size, clamp(16px, 3vw, 20px));line-height:1}.pagination-pages{display:flex;align-items:center;gap:var(--t-pagination-gap, clamp(4px, 1vw, 8px))}.pagination-ellipsis{display:inline-flex;align-items:center;justify-content:center;min-width:var(--t-pagination-button-min-size, 44px);min-height:var(--t-pagination-button-min-size, 44px);padding:var(--t-pagination-ellipsis-padding, clamp(8px, 2vw, 12px));color:var(--t-pagination-ellipsis-color, #999999);font-size:var(--t-pagination-button-font-size, clamp(14px, 2.5vw, 16px))}.pagination-container.variant-simple .pagination-nav{gap:clamp(8px, 2vw, 12px)}.pagination-info{display:inline-flex;align-items:center;min-height:var(--t-pagination-button-min-size, 44px);padding:0 clamp(12px, 2.5vw, 16px);color:var(--t-pagination-button-color, #333333);font-size:var(--t-pagination-button-font-size, clamp(14px, 2.5vw, 16px));font-weight:500}.pagination-container.size-sm .pagination-button{min-width:36px;min-height:36px;padding:clamp(6px, 1.5vw, 8px) clamp(10px, 2vw, 12px);font-size:clamp(12px, 2vw, 14px)}.pagination-container.size-lg .pagination-button{min-width:52px;min-height:52px;padding:clamp(10px, 2.5vw, 14px) clamp(14px, 3vw, 20px);font-size:clamp(16px, 3vw, 18px)}.pagination-size-changer{display:flex;align-items:center;margin-left:clamp(8px, 2vw, 12px)}.pagination-select{padding:clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 16px);min-height:var(--t-pagination-button-min-size, 44px);border:var(--t-pagination-button-border, 1px solid #e0e0e0);border-radius:var(--t-pagination-button-radius, clamp(6px, 1.5vw, 8px));background:var(--t-pagination-button-bg, #ffffff);color:var(--t-pagination-button-color, #333333);font-size:var(--t-pagination-button-font-size, clamp(14px, 2.5vw, 16px));cursor:pointer;outline:none;transition:border-color 0.2s ease}.pagination-select:focus{border-color:var(--t-pagination-button-color-active, #111827)}.pagination-select:disabled{opacity:0.5;cursor:not-allowed}.pagination-quick-jumper{display:flex;align-items:center;gap:clamp(4px, 1vw, 8px);margin-left:clamp(8px, 2vw, 12px)}.pagination-quick-jumper>span{color:var(--t-pagination-button-color, #333333);font-size:var(--t-pagination-button-font-size, clamp(14px, 2.5vw, 16px));white-space:nowrap}.pagination-input{width:clamp(60px, 12vw, 80px);min-height:var(--t-pagination-button-min-size, 44px);padding:clamp(6px, 1.5vw, 8px) clamp(8px, 1.5vw, 12px);border:var(--t-pagination-button-border, 1px solid #e0e0e0);border-radius:var(--t-pagination-button-radius, clamp(6px, 1.5vw, 8px));background:var(--t-pagination-button-bg, #ffffff);color:var(--t-pagination-button-color, #333333);font-size:var(--t-pagination-button-font-size, clamp(14px, 2.5vw, 16px));text-align:center;outline:none;transition:border-color 0.2s ease}.pagination-input:focus{border-color:var(--t-pagination-button-color-active, #111827)}.pagination-input:disabled{opacity:0.5;cursor:not-allowed}.pagination-button-jump{min-width:auto;padding:clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 16px)}@media (max-width: 767px){.pagination-container{flex-wrap:wrap;gap:clamp(4px, 1vw, 6px)}.pagination-nav{gap:clamp(4px, 1vw, 6px)}.pagination-total{width:100%;margin-bottom:clamp(8px, 2vw, 12px)}.pagination-size-changer,.pagination-quick-jumper{width:100%;margin-left:0;margin-top:clamp(8px, 2vw, 12px)}}@media (min-width: 1920px){.pagination-container{gap:8px}.pagination-button{padding:12px 16px;font-size:clamp(16px, 1.5vw, 18px)}}@media (prefers-reduced-motion: reduce){.pagination-button,.pagination-select,.pagination-input{transition:none}}';

const TintoPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoChange = createEvent(this, 'tintoChange');
    this.tintoPageSizeChange = createEvent(this, 'tintoPageSizeChange');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 페이지네이션 스타일 variant */
  variant = 'default';
  /** 페이지네이션 크기 */
  size = 'md';
  /** 정렬 */
  align = 'start';
  /** 현재 페이지 (1부터 시작) */
  current = 1;
  /** 총 페이지 수 */
  total = 1;
  /** 페이지 크기 (선택적) */
  pageSize;
  /** 페이지 크기 선택기 표시 */
  showSizeChanger = false;
  /** 빠른 이동 입력 필드 표시 */
  showQuickJumper = false;
  /** 총 항목 수 표시 */
  showTotal = false;
  /** 총 항목 수 (showTotal일 때 사용) */
  totalItems;
  /** 비활성화 */
  disabled = false;
  /* ============================ Events ============================ */
  /** 페이지 변경 이벤트 */
  tintoChange;
  /** 페이지 크기 변경 이벤트 */
  tintoPageSizeChange;
  /* ============================ State ============================ */
  quickJumperValue = '';
  /* ============================ Watchers ============================ */
  validateCurrent(newValue) {
    if (newValue < 1) {
      this.current = 1;
    } else if (newValue > this.total) {
      this.current = this.total;
    }
  }
  validateTotal(newValue) {
    if (newValue < 1) {
      this.total = 1;
    }
    if (this.current > newValue) {
      this.current = newValue;
    }
  }
  /* ============================ Methods ============================ */
  /** 특정 페이지로 이동 */
  async goToPage(page) {
    if (page >= 1 && page <= this.total && page !== this.current) {
      this.current = page;
      this.tintoChange.emit({ page, pageSize: this.pageSize });
    }
  }
  /* ============================ Private Methods ============================ */
  /** 페이지 번호 배열 생성 */
  getPageNumbers() {
    if (this.variant === 'simple') {
      return [];
    }
    const pages = [];
    const total = this.total;
    const current = this.current;
    if (total <= 7) {
      // 7개 이하면 모두 표시
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // 첫 페이지
      pages.push(1);
      if (current <= 4) {
        // 현재 페이지가 앞쪽에 있으면
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(total);
      } else if (current >= total - 3) {
        // 현재 페이지가 뒤쪽에 있으면
        pages.push('ellipsis');
        for (let i = total - 4; i <= total; i++) {
          pages.push(i);
        }
      } else {
        // 현재 페이지가 중간에 있으면
        pages.push('ellipsis');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(total);
      }
    }
    return pages;
  }
  /** 이전 페이지로 이동 */
  handlePrev = () => {
    if (this.current > 1 && !this.disabled) {
      this.goToPage(this.current - 1);
    }
  };
  /** 다음 페이지로 이동 */
  handleNext = () => {
    if (this.current < this.total && !this.disabled) {
      this.goToPage(this.current + 1);
    }
  };
  /** 첫 페이지로 이동 */
  handleFirst = () => {
    if (this.current !== 1 && !this.disabled) {
      this.goToPage(1);
    }
  };
  /** 마지막 페이지로 이동 */
  handleLast = () => {
    if (this.current !== this.total && !this.disabled) {
      this.goToPage(this.total);
    }
  };
  /** 페이지 번호 클릭 */
  handlePageClick = (page) => {
    if (!this.disabled) {
      this.goToPage(page);
    }
  };
  /** 페이지 크기 변경 */
  handlePageSizeChange = (event) => {
    const select = event.target;
    const newPageSize = parseInt(select.value, 10);
    this.tintoPageSizeChange.emit({ pageSize: newPageSize });
  };
  /** 빠른 이동 처리 */
  handleQuickJumper = () => {
    const page = parseInt(this.quickJumperValue, 10);
    if (page >= 1 && page <= this.total) {
      this.goToPage(page);
      this.quickJumperValue = '';
    }
  };
  handleQuickJumperKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleQuickJumper();
    }
  };
  /* ============================ Render ============================ */
  render() {
    const pageNumbers = this.getPageNumbers();
    const isFirstPage = this.current === 1;
    const isLastPage = this.current === this.total;
    return h(
      'div',
      {
        key: '7dd86f69d53f3bb2d361208332e448482e696dbd',
        class: {
          'pagination-container': true,
          [`variant-${this.variant}`]: true,
          [`size-${this.size}`]: true,
          [`align-${this.align}`]: true,
          disabled: this.disabled,
        },
        part: 'root',
      },
      this.showTotal &&
        this.totalItems !== undefined &&
        h(
          'span',
          {
            key: '70e1ba0a53da044c3290efa84298ffa417b3c88c',
            class: 'pagination-total',
            part: 'total',
          },
          '\uCD1D ',
          this.totalItems.toLocaleString(),
          '\uAC1C',
        ),
      h(
        'nav',
        {
          key: 'd961d7771399e524f100d6d879f142ae4ab0b3d0',
          class: 'pagination-nav',
          part: 'nav',
          role: 'navigation',
          'aria-label': '\uD398\uC774\uC9C0\uB124\uC774\uC158',
        },
        this.variant !== 'simple' &&
          h(
            'button',
            {
              key: 'a1499bdedde3747b98d798888a718e8daf819205',
              class: 'pagination-button pagination-button-first',
              part: 'button-first',
              disabled: isFirstPage || this.disabled,
              onClick: this.handleFirst,
              'aria-label': '\uCCAB \uD398\uC774\uC9C0',
            },
            '\u00AB',
          ),
        h(
          'button',
          {
            key: '52aba3f3594d0d8ed308a7b51c4d592c2e276dd2',
            class: 'pagination-button pagination-button-prev',
            part: 'button-prev',
            disabled: isFirstPage || this.disabled,
            onClick: this.handlePrev,
            'aria-label': '\uC774\uC804 \uD398\uC774\uC9C0',
          },
          '\u2039',
        ),
        this.variant === 'simple'
          ? h('span', { class: 'pagination-info', part: 'info' }, this.current, ' / ', this.total)
          : h(
              'div',
              { class: 'pagination-pages', part: 'pages' },
              pageNumbers.map((page, index) => {
                if (page === 'ellipsis') {
                  return h(
                    'span',
                    { key: `ellipsis-${index}`, class: 'pagination-ellipsis', part: 'ellipsis' },
                    '...',
                  );
                }
                const isActive = page === this.current;
                return h(
                  'button',
                  {
                    key: page,
                    class: {
                      'pagination-button': true,
                      'pagination-button-page': true,
                      active: isActive,
                    },
                    part: `button-page button-page-${page}`,
                    disabled: this.disabled,
                    'aria-label': `페이지 ${page}`,
                    'aria-current': isActive ? 'page' : undefined,
                    onClick: () => this.handlePageClick(page),
                  },
                  page,
                );
              }),
            ),
        h(
          'button',
          {
            key: '9b6688d2b3c13d19cae1b70a92fa2ea1652bcd95',
            class: 'pagination-button pagination-button-next',
            part: 'button-next',
            disabled: isLastPage || this.disabled,
            onClick: this.handleNext,
            'aria-label': '\uB2E4\uC74C \uD398\uC774\uC9C0',
          },
          '\u203A',
        ),
        this.variant !== 'simple' &&
          h(
            'button',
            {
              key: '0e2c46941dd567e7c9f79b7087a9a428231ec27c',
              class: 'pagination-button pagination-button-last',
              part: 'button-last',
              disabled: isLastPage || this.disabled,
              onClick: this.handleLast,
              'aria-label': '\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0',
            },
            '\u00BB',
          ),
      ),
      this.showSizeChanger &&
        this.pageSize &&
        h(
          'div',
          {
            key: 'af3003d39a6af902c5f5813fd2c51eb9476f82c0',
            class: 'pagination-size-changer',
            part: 'size-changer',
          },
          h(
            'select',
            {
              key: '5eade140d91cfd91a198b266d54766b02f7a0f2d',
              class: 'pagination-select',
              part: 'select',
              disabled: this.disabled,
              onChange: this.handlePageSizeChange,
              'aria-label': '\uD398\uC774\uC9C0 \uD06C\uAE30 \uC120\uD0DD',
            },
            h(
              'option',
              {
                key: 'f8f3904f1d30244ae0c119cea00e168ef99b0aac',
                value: '10',
                selected: this.pageSize === 10,
              },
              '10\uAC1C / \uD398\uC774\uC9C0',
            ),
            h(
              'option',
              {
                key: 'b47eeadf6a994f0790a0dc0c7fba4785fdbcbd3c',
                value: '20',
                selected: this.pageSize === 20,
              },
              '20\uAC1C / \uD398\uC774\uC9C0',
            ),
            h(
              'option',
              {
                key: '0c391f59f924be4d2190b2313e2ad09fa0dbd6fa',
                value: '50',
                selected: this.pageSize === 50,
              },
              '50\uAC1C / \uD398\uC774\uC9C0',
            ),
            h(
              'option',
              {
                key: '2fc7208982a2ceb1a429e9839e4111e14b10f2d1',
                value: '100',
                selected: this.pageSize === 100,
              },
              '100\uAC1C / \uD398\uC774\uC9C0',
            ),
          ),
        ),
      this.showQuickJumper &&
        h(
          'div',
          {
            key: 'b2fa963a131fb7335863d45f18e95e7bf2192212',
            class: 'pagination-quick-jumper',
            part: 'quick-jumper',
          },
          h('span', { key: 'd53c698d2095315ae862cf965b2d20d6c225bc10' }, '\uC774\uB3D9'),
          h('input', {
            key: '333a1308496081385784102a0c17858751ac05c6',
            class: 'pagination-input',
            part: 'input',
            type: 'number',
            min: '1',
            max: this.total,
            value: this.quickJumperValue,
            disabled: this.disabled,
            placeholder: '\uD398\uC774\uC9C0',
            onInput: (e) => {
              this.quickJumperValue = e.target.value;
            },
            onKeyDown: this.handleQuickJumperKeyDown,
            'aria-label': '\uD398\uC774\uC9C0 \uBC88\uD638 \uC785\uB825',
          }),
          h(
            'button',
            {
              key: '2da21ee696c3703ec967e4cad469fdb092fd07b9',
              class: 'pagination-button pagination-button-jump',
              part: 'button-jump',
              disabled: this.disabled,
              onClick: this.handleQuickJumper,
            },
            '\uC774\uB3D9',
          ),
        ),
    );
  }
  static get watchers() {
    return {
      current: ['validateCurrent'],
      total: ['validateTotal'],
    };
  }
};
TintoPagination.style = paginationCss;

export { TintoPagination as tinto_pagination };
//# sourceMappingURL=tinto-pagination.entry.js.map
