// navigation.tsx
import { Component, h, Element, Prop, Event, EventEmitter, State } from '@stencil/core';
import type { NavigationItem, NavigationItemClickDetail } from './navigation.types';

@Component({
  tag: 'tinto-navigation',
  styleUrl: 'navigation.css',
  shadow: true,
})
export class TintoNavigation {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 내비게이션 아이템 목록 */
  @Prop({ mutable: true }) items: NavigationItem[] = [];

  /** 활성 아이템 ID */
  @Prop({ reflect: true, mutable: true }) activeId?: string;

  /** 고정 여부 (하단 고정) */
  @Prop({ reflect: true }) fixed: boolean = true;

  /* ============================ Events ============================ */

  /** 아이템 클릭 이벤트 */
  @Event() tintoItemClick!: EventEmitter<NavigationItemClickDetail>;

  /* ============================ State ============================ */

  @State() private currentActiveId?: string;

  /* ============================ Lifecycle ============================ */

  componentWillLoad() {
    this.currentActiveId = this.activeId;
  }

  /* ============================ Handlers ============================ */

  private handleItemClick = (item: NavigationItem, index: number) => {
    // 활성 상태 업데이트
    this.currentActiveId = item.id;
    this.activeId = item.id;

    // 이벤트 발생
    this.tintoItemClick.emit({ item, index });

    // href가 있으면 이동
    if (item.href) {
      window.location.href = item.href;
    }
  };

  /* ============================ Render ============================ */

  render() {
    // 기본 아이템 없음 - items prop이 필수
    const itemsToRender = this.items;
    const activeId = this.currentActiveId || this.activeId;

    if (itemsToRender.length === 0) {
      return null;
    }

    return (
      <nav class="navigation" part="navigation" role="navigation" aria-label="내비게이션">
        <ul class="navigation-list" part="list">
          {itemsToRender.map((item, index) => {
            const isActive = activeId === item.id || item.active;
            return (
              <li key={item.id} class="navigation-item" part="item">
                <button
                  class={`navigation-button ${isActive ? 'active' : ''}`}
                  part="button"
                  type="button"
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => this.handleItemClick(item, index)}
                >
                  {/* 아이콘 */}
                  {item.icon && (
                    <span class="navigation-icon" part="icon">
                      {item.icon}
                    </span>
                  )}
                  {/* 슬롯 아이콘 (아이콘보다 우선) */}
                  <span class="navigation-icon-slot" part="icon-slot">
                    <slot name={`icon-${item.id}`} />
                  </span>

                  {/* 라벨 */}
                  <span class="navigation-label" part="label">
                    {item.label}
                  </span>

                  {/* 배지 */}
                  {item.badge && (
                    <span class="navigation-badge" part="badge">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
