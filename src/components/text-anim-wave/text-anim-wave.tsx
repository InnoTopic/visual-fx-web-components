import { Component, Host, h } from '@stencil/core';

/** https://codepen.io/YusukeNakaya/pen/EbMWgd */
@Component({
  tag: 'text-anim-wave',
  styleUrl: 'text-anim-wave.scss',
  shadow: true,
})
export class TextAnimWave {

  array = Array.from(Array(26).keys())

  render() {
    return (
      <Host>
        <div class={{'myBody': true}} >
          <div id="ui">
            {
              this.array.map((_) =>
                <div class="text">
                  {_}
                  <slot></slot>
                </div>
              )
            }
          </div>
        </div>
      </Host>
    );
  }

}
