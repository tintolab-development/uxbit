// tabs.tsx
import { Component, h, Element, Prop, Event, EventEmitter, State, Method } from '@stencil/core';
import type {
  TabsVariant,
  TabsSize,
  TabsOrientation,
  TabsPosition,
  TabsChangeDetail,
  TabsClickDetail,
} from './tabs.types';

@Component({
  tag: 'tinto-tabs',
  styleUrl: 'tabs.css',
  shadow: true,
})
export class TintoTabs {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 탭 스타일 variant */
  @Prop({ reflect: true }) variant: TabsVariant = 'default';

  /** 탭 크기 */
  @Prop({ reflect: true }) size: TabsSize = 'md';

  /** 탭 방향 */
  @Prop({ reflect: true }) orientation: TabsOrientation = 'horizontal';

  /** 탭 정렬 */
  @Prop({ reflect: true }) position: TabsPosition = 'start';

  /** 기본 활성 탭 ID */
  @Prop({ reflect: true }) defaultTab?: string;

  /** 전체 비활성화 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** 스크롤 가능 여부 (모바일) */
  @Prop({ reflect: true }) scrollable: boolean = false;

  /* ============================ Events ============================ */

  /** 탭 변경 이벤트 */
  @Event() tintoChange!: EventEmitter<TabsChangeDetail>;

  /** 탭 클릭 이벤트 */
  @Event() tintoTabClick!: EventEmitter<TabsClickDetail>;

  /* ============================ State ============================ */

  @State() private activeTabId: string | null = null;
  @State() private tabPanels: HTMLTintoTabPanelElement[] = [];

  private tabButtons: HTMLElement[] = [];

  /* ============================ Methods ============================ */

  /** 특정 탭 활성화 */
  @Method()
  async setActiveTab(tabId: string) {
    const panel = this.tabPanels.find((p) => p.tabId === tabId);
    if (panel && !panel.disabled) {
      this.activateTab(tabId);
    }
  }

  /** 현재 활성 탭 ID 반환 */
  @Method()
  async getActiveTab(): Promise<string | null> {
    return this.activeTabId;
  }

  /* ============================ Private Methods ============================ */

  /** 탭 패널 수집 */
  private collectTabPanels() {
    this.tabPanels = Array.from(this.el.querySelectorAll('tinto-tab-panel'));

    // 기본 활성 탭 설정
    if (!this.activeTabId) {
      const defaultPanel = this.defaultTab
        ? this.tabPanels.find((p) => p.tabId === this.defaultTab)
        : this.tabPanels[0];

      if (defaultPanel && !defaultPanel.disabled) {
        this.activeTabId = defaultPanel.tabId;
      }
    }
  }

  /** 탭 활성화 */
  private activateTab(tabId: string) {
    const previousTabId = this.activeTabId;
    this.activeTabId = tabId;

    // 패널 활성 상태 업데이트
    this.tabPanels.forEach((panel) => {
      panel.active = panel.tabId === tabId;
    });

    // 이벤트 발생
    if (previousTabId !== tabId) {
      this.tintoChange.emit({ tabId, previousTabId: previousTabId || undefined });
    }
  }

  /** 탭 클릭 핸들러 */
  private handleTabClick = (event: MouseEvent, tabId: string) => {
    if (this.disabled) return;

    const panel = this.tabPanels.find((p) => p.tabId === tabId);
    if (panel && !panel.disabled) {
      this.tintoTabClick.emit({ tabId, event });
      this.activateTab(tabId);
    }
  };

  /** 키보드 네비게이션 */
  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled || !this.activeTabId) return;

    const currentIndex = this.tabPanels.findIndex((p) => p.tabId === this.activeTabId);
    if (currentIndex === -1) return;

    let targetIndex = currentIndex;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        if (this.orientation === 'horizontal') {
          event.preventDefault();
          targetIndex = (currentIndex + 1) % this.tabPanels.length;
        }
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        if (this.orientation === 'horizontal') {
          event.preventDefault();
          targetIndex = currentIndex === 0 ? this.tabPanels.length - 1 : currentIndex - 1;
        }
        break;
      case 'Home':
        event.preventDefault();
        targetIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        targetIndex = this.tabPanels.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        return; // 클릭 핸들러가 처리
    }

    // 비활성 탭 건너뛰기
    while (targetIndex !== currentIndex && this.tabPanels[targetIndex]?.disabled) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'End') {
        targetIndex = (targetIndex + 1) % this.tabPanels.length;
      } else {
        targetIndex = targetIndex === 0 ? this.tabPanels.length - 1 : targetIndex - 1;
      }
    }

    if (targetIndex !== currentIndex) {
      const targetTab = this.tabPanels[targetIndex];
      if (targetTab) {
        this.activateTab(targetTab.tabId);
        // 포커스 이동
        const button = this.tabButtons[targetIndex];
        if (button) {
          button.focus();
        }
      }
    }
  };

  /* ============================ Lifecycle ============================ */

  componentDidLoad() {
    this.collectTabPanels();
  }

  componentDidUpdate() {
    this.collectTabPanels();
  }

  /* ============================ Render ============================ */

  render() {
    const tabListClass = {
      'tabs-list': true,
      [`variant-${this.variant}`]: true,
      [`size-${this.size}`]: true,
      [`orientation-${this.orientation}`]: true,
      [`position-${this.position}`]: true,
      scrollable: this.scrollable,
      disabled: this.disabled,
    };

    return (
      <div class="tabs-container" part="root">
        <div
          class={tabListClass}
          part="list"
          role="tablist"
          aria-orientation={this.orientation}
          onKeyDown={this.handleKeyDown}
        >
          {this.tabPanels.map((panel, index) => {
            const isActive = panel.tabId === this.activeTabId;
            const isDisabled = this.disabled || panel.disabled;

            return (
              <button
                ref={(el) => {
                  if (el) this.tabButtons[index] = el;
                }}
                key={panel.tabId}
                class={{
                  'tab-button': true,
                  active: isActive,
                  disabled: isDisabled,
                }}
                part={`tab tab-${panel.tabId}`}
                role="tab"
                aria-selected={isActive ? 'true' : 'false'}
                aria-controls={`tabpanel-${panel.tabId}`}
                id={`tab-${panel.tabId}`}
                tabindex={isActive ? 0 : -1}
                disabled={isDisabled}
                onClick={(e) => this.handleTabClick(e, panel.tabId)}
              >
                {panel.label || `Tab ${index + 1}`}
              </button>
            );
          })}
        </div>

        <div class="tabs-content" part="content">
          <slot />
        </div>
      </div>
    );
  }
}
