import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const tabsCss =
  ":host{display:block;width:100%}:host([hidden]){display:none !important}.tabs-container{display:flex;flex-direction:column;width:100%;background:var(--t-tabs-bg, transparent);border:var(--t-tabs-border, 1px solid #e0e0e0);border-radius:var(--t-tabs-radius, 0)}.tabs-list{display:flex;gap:var(--t-tabs-container-gap, clamp(4px, 1vw, 8px));padding:var(--t-tabs-container-padding, clamp(8px, 1.5vw, 12px));overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;scrollbar-color:rgba(0, 0, 0, 0.2) transparent}.tabs-list::-webkit-scrollbar{height:4px}.tabs-list::-webkit-scrollbar-track{background:transparent}.tabs-list::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.2);border-radius:2px}.tabs-list.scrollable{-webkit-overflow-scrolling:touch}.tabs-list.orientation-vertical{flex-direction:column;overflow-x:hidden;overflow-y:auto}.tabs-list.position-center{justify-content:center}.tabs-list.position-end{justify-content:flex-end}.tabs-list.disabled{opacity:0.6;pointer-events:none}.tab-button{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;position:relative;background:var(--t-tab-bg, transparent);color:var(--t-tab-color, #666666);border:none;border-radius:var(--t-tab-radius, clamp(6px, 1.5vw, 8px));padding:var(--t-tab-padding, clamp(12px, 2.5vw, 16px) clamp(16px, 3vw, 24px));min-height:var(--t-tab-min-height, 44px);font-size:var(--t-tab-font-size, clamp(14px, 2.5vw, 16px));font-weight:var(--t-tab-font-weight, 500);line-height:1.2;white-space:nowrap;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;transition:background-color 0.2s ease,\n    color 0.2s ease,\n    transform 0.1s ease;outline:none}.tab-button:focus-visible{outline:2px solid var(--t-tab-color-active, #111827);outline-offset:2px}.tab-button:hover:not(.disabled):not(:active){background:var(--t-tab-bg-hover, #fafafa);color:var(--t-tab-color-hover, #333333)}.tab-button:active:not(.disabled){transform:scale(0.98)}.tab-button.active{background:var(--t-tab-bg-active, #f5f5f5);color:var(--t-tab-color-active, #111827);font-weight:var(--t-tab-font-weight-active, 600)}.tab-button.disabled{opacity:0.5;cursor:not-allowed;pointer-events:none}.tabs-list.variant-underline .tab-button.active::after{content:'';position:absolute;bottom:0;left:0;right:0;height:var(--t-tab-underline-height, 2px);background:var(--t-tab-underline-active-color, #005fcc);border-radius:var(--t-tab-underline-height, 2px) 0 0 0}.tabs-list.variant-underline{border-bottom:var(--t-tab-underline-height, 2px) solid var(--t-tab-underline-color, #e0e0e0);padding-bottom:0}.tabs-list.variant-underline .tab-button{border-radius:var(--t-tab-radius, clamp(6px, 1.5vw, 8px)) var(--t-tab-radius, clamp(6px, 1.5vw, 8px)) 0 0}.tabs-list.variant-pills .tab-button{border-radius:var(--t-tab-pills-radius, clamp(20px, 4vw, 24px))}.tabs-list.variant-pills .tab-button.active{background:var(--t-tab-pills-bg-active, #111827);color:var(--t-tab-pills-color-active, #ffffff)}.tabs-list.variant-enclosed{background:var(--t-tab-panel-bg, #f5f5f5);border-radius:var(--t-tabs-radius, clamp(8px, 2vw, 12px));padding:clamp(4px, 1vw, 8px)}.tabs-list.variant-enclosed .tab-button.active{background:var(--t-tab-panel-bg, #ffffff);box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.tabs-list.size-sm .tab-button{padding:clamp(8px, 2vw, 12px) clamp(12px, 2.5vw, 16px);font-size:clamp(12px, 2vw, 14px);min-height:36px}.tabs-list.size-lg .tab-button{padding:clamp(16px, 3vw, 20px) clamp(20px, 3.5vw, 28px);font-size:clamp(16px, 3vw, 18px);min-height:52px}.tabs-list.orientation-vertical{flex-direction:column;align-items:flex-start}.tabs-list.orientation-vertical .tab-button{width:100%;justify-content:flex-start}.tabs-list.orientation-vertical.variant-underline .tab-button.active::after{top:0;bottom:0;left:0;right:auto;width:var(--t-tab-underline-height, 2px);height:100%;border-radius:var(--t-tab-underline-height, 2px) 0 0 var(--t-tab-underline-height, 2px)}.tabs-list.orientation-vertical.variant-underline{border-bottom:none;border-right:var(--t-tab-underline-height, 2px) solid var(--t-tab-underline-color, #e0e0e0);padding-bottom:var(--t-tabs-container-padding, clamp(8px, 1.5vw, 12px));padding-right:0}.tabs-content{width:100%}@media (max-width: 767px){.tabs-list{gap:clamp(4px, 1vw, 6px);padding:clamp(8px, 1.5vw, 10px)}.tab-button{min-width:80px;padding:clamp(10px, 2vw, 14px) clamp(14px, 2.5vw, 20px)}}@media (min-width: 1920px){.tabs-list{gap:8px;padding:12px}.tab-button{padding:16px 24px;font-size:clamp(16px, 1.5vw, 18px)}}@media (prefers-reduced-motion: reduce){.tab-button{transition:none}}";

const TintoTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoChange = createEvent(this, 'tintoChange');
    this.tintoTabClick = createEvent(this, 'tintoTabClick');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 탭 스타일 variant */
  variant = 'default';
  /** 탭 크기 */
  size = 'md';
  /** 탭 방향 */
  orientation = 'horizontal';
  /** 탭 정렬 */
  position = 'start';
  /** 기본 활성 탭 ID */
  defaultTab;
  /** 전체 비활성화 */
  disabled = false;
  /** 스크롤 가능 여부 (모바일) */
  scrollable = false;
  /* ============================ Events ============================ */
  /** 탭 변경 이벤트 */
  tintoChange;
  /** 탭 클릭 이벤트 */
  tintoTabClick;
  /* ============================ State ============================ */
  activeTabId = null;
  tabPanels = [];
  tabButtons = [];
  /* ============================ Methods ============================ */
  /** 특정 탭 활성화 */
  async setActiveTab(tabId) {
    const panel = this.tabPanels.find((p) => p.tabId === tabId);
    if (panel && !panel.disabled) {
      this.activateTab(tabId);
    }
  }
  /** 현재 활성 탭 ID 반환 */
  async getActiveTab() {
    return this.activeTabId;
  }
  /* ============================ Private Methods ============================ */
  /** 탭 패널 수집 */
  collectTabPanels() {
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
  activateTab(tabId) {
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
  handleTabClick = (event, tabId) => {
    if (this.disabled) return;
    const panel = this.tabPanels.find((p) => p.tabId === tabId);
    if (panel && !panel.disabled) {
      this.tintoTabClick.emit({ tabId, event });
      this.activateTab(tabId);
    }
  };
  /** 키보드 네비게이션 */
  handleKeyDown = (event) => {
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
    return h(
      'div',
      { key: 'ca8d5edb5ac3d3455d5027ea83fe40c5f8eb7a08', class: 'tabs-container', part: 'root' },
      h(
        'div',
        {
          key: '9ea4abdeff03e110df17ec134a649e3702364f7e',
          class: tabListClass,
          part: 'list',
          role: 'tablist',
          'aria-orientation': this.orientation,
          onKeyDown: this.handleKeyDown,
        },
        this.tabPanels.map((panel, index) => {
          const isActive = panel.tabId === this.activeTabId;
          const isDisabled = this.disabled || panel.disabled;
          return h(
            'button',
            {
              ref: (el) => {
                if (el) this.tabButtons[index] = el;
              },
              key: panel.tabId,
              class: {
                'tab-button': true,
                active: isActive,
                disabled: isDisabled,
              },
              part: `tab tab-${panel.tabId}`,
              role: 'tab',
              'aria-selected': isActive ? 'true' : 'false',
              'aria-controls': `tabpanel-${panel.tabId}`,
              id: `tab-${panel.tabId}`,
              tabindex: isActive ? 0 : -1,
              disabled: isDisabled,
              onClick: (e) => this.handleTabClick(e, panel.tabId),
            },
            panel.label || `Tab ${index + 1}`,
          );
        }),
      ),
      h(
        'div',
        { key: '170aedacc03d459aa369dfff2d6bc47331c08cca', class: 'tabs-content', part: 'content' },
        h('slot', { key: 'beca91ac384ca76558f85337d69f3ce10b876608' }),
      ),
    );
  }
};
TintoTabs.style = tabsCss;

export { TintoTabs as tinto_tabs };
//# sourceMappingURL=tinto-tabs.entry.js.map
