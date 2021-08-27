import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-glow',
  styleUrl: 'text-glow.scss',
  shadow: true,
})
export class TextGlow {

  render() {
    return (
      <Host>
        aa uuu
        <div class={{'glow': true}} >
          {/* style='font-size: 50px' */}
          GLOWWWW
          <slot></slot>
        </div>
      </Host>
    );
  }

}
