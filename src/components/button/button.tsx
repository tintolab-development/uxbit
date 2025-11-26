import { Component, h } from '@stencil/core';

@Component({
  tag: 'tinto-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class TintoButton {
  render() {
    return (
      <button class="tinto-button">
        <slot>Button</slot>
      </button>
    );
  }
}
