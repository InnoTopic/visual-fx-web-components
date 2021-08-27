import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-glow',
  styleUrl: 'text-glow.css',
  shadow: true,
})
export class TextGlow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
