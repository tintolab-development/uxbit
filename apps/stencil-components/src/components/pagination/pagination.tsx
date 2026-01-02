// pagination.tsx
import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
  Method,
} from '@stencil/core';
import type {
  PaginationVariant,
  PaginationSize,
  PaginationAlign,
  PaginationChangeDetail,
  PaginationPageSizeChangeDetail,
} from './pagination.types';

@Component({
  tag: 'tinto-pagination',
  styleUrl: 'pagination.css',
  shadow: true,
})
export class TintoPagination {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 페이지네이션 스타일 variant */
  @Prop({ reflect: true }) variant: PaginationVariant = 'default';

  /** 페이지네이션 크기 */
  @Prop({ reflect: true }) size: PaginationSize = 'md';

  /** 정렬 */
  @Prop({ reflect: true }) align: PaginationAlign = 'start';

  /** 현재 페이지 (1부터 시작) */
  @Prop({ reflect: true, mutable: true }) current: number = 1;

  /** 총 페이지 수 */
  @Prop({ reflect: true }) total: number = 1;

  /** 페이지 크기 (선택적) */
  @Prop({ reflect: true }) pageSize?: number;

  /** 페이지 크기 선택기 표시 */
  @Prop({ reflect: true }) showSizeChanger: boolean = false;

  /** 빠른 이동 입력 필드 표시 */
  @Prop({ reflect: true }) showQuickJumper: boolean = false;

  /** 총 항목 수 표시 */
  @Prop({ reflect: true }) showTotal: boolean = false;

  /** 총 항목 수 (showTotal일 때 사용) */
  @Prop({ reflect: true }) totalItems?: number;

  /** 비활성화 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /* ============================ Events ============================ */

  /** 페이지 변경 이벤트 */
  @Event() tintoChange!: EventEmitter<PaginationChangeDetail>;

  /** 페이지 크기 변경 이벤트 */
  @Event() tintoPageSizeChange!: EventEmitter<PaginationPageSizeChangeDetail>;

  /* ============================ State ============================ */

  @State() private quickJumperValue: string = '';

  /* ============================ Watchers ============================ */

  @Watch('current')
  validateCurrent(newValue: number) {
    if (newValue < 1) {
      this.current = 1;
    } else if (newValue > this.total) {
      this.current = this.total;
    }
  }

  @Watch('total')
  validateTotal(newValue: number) {
    if (newValue < 1) {
      this.total = 1;
    }
    if (this.current > newValue) {
      this.current = newValue;
    }
  }

  /* ============================ Methods ============================ */

  /** 특정 페이지로 이동 */
  @Method()
  async goToPage(page: number) {
    if (page >= 1 && page <= this.total && page !== this.current) {
      this.current = page;
      this.tintoChange.emit({ page, pageSize: this.pageSize });
    }
  }

  /* ============================ Private Methods ============================ */

  /** 페이지 번호 배열 생성 */
  private getPageNumbers(): (number | 'ellipsis')[] {
    if (this.variant === 'simple') {
      return [];
    }

    const pages: (number | 'ellipsis')[] = [];
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
  private handlePrev = () => {
    if (this.current > 1 && !this.disabled) {
      this.goToPage(this.current - 1);
    }
  };

  /** 다음 페이지로 이동 */
  private handleNext = () => {
    if (this.current < this.total && !this.disabled) {
      this.goToPage(this.current + 1);
    }
  };

  /** 첫 페이지로 이동 */
  private handleFirst = () => {
    if (this.current !== 1 && !this.disabled) {
      this.goToPage(1);
    }
  };

  /** 마지막 페이지로 이동 */
  private handleLast = () => {
    if (this.current !== this.total && !this.disabled) {
      this.goToPage(this.total);
    }
  };

  /** 페이지 번호 클릭 */
  private handlePageClick = (page: number) => {
    if (!this.disabled) {
      this.goToPage(page);
    }
  };

  /** 페이지 크기 변경 */
  private handlePageSizeChange = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    const newPageSize = parseInt(select.value, 10);
    this.tintoPageSizeChange.emit({ pageSize: newPageSize });
  };

  /** 빠른 이동 처리 */
  private handleQuickJumper = () => {
    const page = parseInt(this.quickJumperValue, 10);
    if (page >= 1 && page <= this.total) {
      this.goToPage(page);
      this.quickJumperValue = '';
    }
  };

  private handleQuickJumperKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleQuickJumper();
    }
  };

  /* ============================ Render ============================ */

  render() {
    const pageNumbers = this.getPageNumbers();
    const isFirstPage = this.current === 1;
    const isLastPage = this.current === this.total;

    return (
      <div
        class={{
          'pagination-container': true,
          [`variant-${this.variant}`]: true,
          [`size-${this.size}`]: true,
          [`align-${this.align}`]: true,
          disabled: this.disabled,
        }}
        part="root"
      >
        {this.showTotal && this.totalItems !== undefined && (
          <span class="pagination-total" part="total">
            총 {this.totalItems.toLocaleString()}개
          </span>
        )}

        <nav class="pagination-nav" part="nav" role="navigation" aria-label="페이지네이션">
          {this.variant !== 'simple' && (
            <button
              class="pagination-button pagination-button-first"
              part="button-first"
              disabled={isFirstPage || this.disabled}
              onClick={this.handleFirst}
              aria-label="첫 페이지"
            >
              «
            </button>
          )}

          <button
            class="pagination-button pagination-button-prev"
            part="button-prev"
            disabled={isFirstPage || this.disabled}
            onClick={this.handlePrev}
            aria-label="이전 페이지"
          >
            ‹
          </button>

          {this.variant === 'simple' ? (
            <span class="pagination-info" part="info">
              {this.current} / {this.total}
            </span>
          ) : (
            <div class="pagination-pages" part="pages">
              {pageNumbers.map((page, index) => {
                if (page === 'ellipsis') {
                  return (
                    <span key={`ellipsis-${index}`} class="pagination-ellipsis" part="ellipsis">
                      ...
                    </span>
                  );
                }

                const isActive = page === this.current;
                return (
                  <button
                    key={page}
                    class={{
                      'pagination-button': true,
                      'pagination-button-page': true,
                      active: isActive,
                    }}
                    part={`button-page button-page-${page}`}
                    disabled={this.disabled}
                    aria-label={`페이지 ${page}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => this.handlePageClick(page)}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          )}

          <button
            class="pagination-button pagination-button-next"
            part="button-next"
            disabled={isLastPage || this.disabled}
            onClick={this.handleNext}
            aria-label="다음 페이지"
          >
            ›
          </button>

          {this.variant !== 'simple' && (
            <button
              class="pagination-button pagination-button-last"
              part="button-last"
              disabled={isLastPage || this.disabled}
              onClick={this.handleLast}
              aria-label="마지막 페이지"
            >
              »
            </button>
          )}
        </nav>

        {this.showSizeChanger && this.pageSize && (
          <div class="pagination-size-changer" part="size-changer">
            <select
              class="pagination-select"
              part="select"
              disabled={this.disabled}
              onChange={this.handlePageSizeChange}
              aria-label="페이지 크기 선택"
            >
              <option value="10" selected={this.pageSize === 10}>
                10개 / 페이지
              </option>
              <option value="20" selected={this.pageSize === 20}>
                20개 / 페이지
              </option>
              <option value="50" selected={this.pageSize === 50}>
                50개 / 페이지
              </option>
              <option value="100" selected={this.pageSize === 100}>
                100개 / 페이지
              </option>
            </select>
          </div>
        )}

        {this.showQuickJumper && (
          <div class="pagination-quick-jumper" part="quick-jumper">
            <span>이동</span>
            <input
              class="pagination-input"
              part="input"
              type="number"
              min="1"
              max={this.total}
              value={this.quickJumperValue}
              disabled={this.disabled}
              placeholder="페이지"
              onInput={(e) => {
                this.quickJumperValue = (e.target as HTMLInputElement).value;
              }}
              onKeyDown={this.handleQuickJumperKeyDown}
              aria-label="페이지 번호 입력"
            />
            <button
              class="pagination-button pagination-button-jump"
              part="button-jump"
              disabled={this.disabled}
              onClick={this.handleQuickJumper}
            >
              이동
            </button>
          </div>
        )}
      </div>
    );
  }
}
