import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

export type TintoButtonVariant = 'primary' | 'secondary' | 'ghost';
export type TintoButtonSize = 'sm' | 'md' | 'lg';
export type TintoButtonType = 'button' | 'submit' | 'reset';

@Component({
  tag: 'tinto-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class TintoButton {
  /**
   * 시각 스타일(색 계열)
   */
  @Prop({ reflect: true }) variant: TintoButtonVariant = 'primary';

  /**
   * 버튼 크기
   */
  @Prop({ reflect: true }) size: TintoButtonSize = 'md';

  /**
   * HTML button type
   */
  @Prop({ reflect: true }) type: TintoButtonType = 'button';

  /**
   * 비활성화 여부
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * 가로 전체폭 사용 여부
   */
  @Prop({ reflect: true }) block: boolean = false;

  /**
   * 클릭 이벤트 (기본 click 외에 Stencil 커스텀 이벤트)
   */
  @Event() tintoClick!: EventEmitter<MouseEvent>;

  private handleClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.tintoClick.emit(event);
  };

  render() {
    const classes = {
      'tinto-button': true,
      [`tinto-button--${this.variant}`]: true,
      [`tinto-button--${this.size}`]: true,
      'tinto-button--block': this.block,
      'tinto-button--disabled': this.disabled,
    };

    return (
      <Host>
        <button
          class={classes}
          type={this.type}
          disabled={this.disabled}
          onClick={this.handleClick}
        >
          <slot>Button</slot>
        </button>
      </Host>
    );
  }
}
