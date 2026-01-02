// tab-panel.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tinto-tab-panel',
  styleUrl: 'tab-panel.css',
  shadow: true,
})
export class TintoTabPanel {
  /* ============================ Props ============================ */

  /** 탭 ID (고유 식별자) */
  @Prop({ reflect: true }) tabId!: string;

  /** 탭 라벨 */
  @Prop({ reflect: true }) label!: string;

  /** 비활성화 여부 */
  @Prop({ reflect: true }) disabled: boolean = false;

  /* ============================ State ============================ */

  /** 활성 상태 (부모 tinto-tabs에서 관리) */
  @Prop({ mutable: true }) active: boolean = false;

  /* ============================ Render ============================ */

  render() {
    return (
      <div
        class={{
          'tab-panel': true,
          active: this.active,
          disabled: this.disabled,
        }}
        part="panel"
        role="tabpanel"
        aria-labelledby={`tab-${this.tabId}`}
        id={`tabpanel-${this.tabId}`}
        hidden={!this.active}
      >
        <slot />
      </div>
    );
  }
}
