import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-3d-anim-extrude-rotate',
  styleUrl: 'text-3d-anim-extrude-rotate.scss',
  shadow: true,
})
export class Text3dAnimExtrudeRotate {

  render() {
    return (
      <Host>
        <div class="stage">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
        </div>
      </Host>
    );
  }

}
