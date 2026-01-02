import { r as registerInstance, h } from './index-CgnYPz94.js';

const tabPanelCss =
  ':host{display:block;width:100%}:host([hidden]){display:none !important}.tab-panel{display:none;width:100%;padding:var(--t-tab-panel-padding, clamp(16px, 3vw, 24px));background:var(--t-tab-panel-bg, transparent)}.tab-panel.active{display:block}.tab-panel.disabled{opacity:0.5;pointer-events:none}';

const TintoTabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /* ============================ Props ============================ */
  /** 탭 ID (고유 식별자) */
  tabId;
  /** 탭 라벨 */
  label;
  /** 비활성화 여부 */
  disabled = false;
  /* ============================ State ============================ */
  /** 활성 상태 (부모 tinto-tabs에서 관리) */
  active = false;
  /* ============================ Render ============================ */
  render() {
    return h(
      'div',
      {
        key: 'dcb086019d2d854c3b2680c57e050f3b0a32093d',
        class: {
          'tab-panel': true,
          active: this.active,
          disabled: this.disabled,
        },
        part: 'panel',
        role: 'tabpanel',
        'aria-labelledby': `tab-${this.tabId}`,
        id: `tabpanel-${this.tabId}`,
        hidden: !this.active,
      },
      h('slot', { key: '955e1986c66d397e822f83ac748184e3e6f650cc' }),
    );
  }
};
TintoTabPanel.style = tabPanelCss;

export { TintoTabPanel as tinto_tab_panel };
//# sourceMappingURL=tinto-tab-panel.entry.js.map
