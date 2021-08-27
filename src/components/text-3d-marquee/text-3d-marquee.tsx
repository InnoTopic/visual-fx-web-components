import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-3d-marquee',
  styleUrl: 'text-3d-marquee.scss',
  shadow: true,
})
export class Text3dMarquee {

  render() {
    return (
      <Host>
        <div class="box">
          <div class="inner">
            <span><slot></slot></span>
          </div>
          <div class="inner">
            <span><slot></slot></span>
          </div>
        </div>
      </Host>
    );
  }

}
