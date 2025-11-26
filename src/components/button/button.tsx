import { Component, h, Element, Prop, Watch } from '@stencil/core';
import type { ButtonSize, ButtonVariant } from './button.types';

@Component({
  tag: 'tinto-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class TintoButton {
  @Element() el!: HTMLElement;

  /**
   * 시각 스타일(색 계열)
   * 예: 'primary' | 'secondary' | 'tertiary'
   */
  @Prop({ reflect: true }) variant: ButtonVariant = 'primary';

  /**
   * 버튼 크기 토큰
   * 예: 'sm' | 'md' | 'lg'
   */
  @Prop({ reflect: true }) size: ButtonSize = 'md';

  /**
   * 초기 마운트 시 CSS 변수 동기화
   */
  componentWillLoad() {
    this.syncVariantAndSize();
  }

  /**
   * variant/size 변경 시 CSS 변수 동기화
   */
  @Watch('variant')
  @Watch('size')
  protected syncVariantAndSize() {
    const style = this.el.style;

    if (this.variant) {
      style.setProperty('--t-button-variant-token', String(this.variant));
    } else {
      style.removeProperty('--t-button-variant-token');
    }

    if (this.size) {
      style.setProperty('--t-button-size-token', String(this.size));
    } else {
      style.removeProperty('--t-button-size-token');
    }
  }

  /**
   * 렌더 – Host 없이 버튼만 반환
   */
  render() {
    return (
      <button class="tinto-button">
        <slot>Button</slot>
      </button>
    );
  }
}
