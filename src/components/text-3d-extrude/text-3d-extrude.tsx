import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-3d-extrude',
  styleUrl: 'text-3d-extrude.scss',
  shadow: true,
})
export class Text3dExtrude {

  render() {
    return (
      <Host>
        <h1>
          <slot></slot>
        </h1>
      </Host>
    );
  }

}
