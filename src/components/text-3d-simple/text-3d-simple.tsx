import { Component, Host, h } from '@stencil/core';

/** */
@Component({
  tag: 'text-3d-simple',
  styleUrl: 'text-3d-simple.scss',
  shadow: true,
})
export class Text3dSimple {

  render() {
    return (
      <Host>
        <div class={{'effect': true}}>
          zzz
          <slot></slot>
        </div>
      </Host>
    );
  }

}
