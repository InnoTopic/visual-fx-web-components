import { Component, Host, h } from '@stencil/core';


/* https://codepen.io/mandymichael/pen/bWqyMN
* Layered fonts in css using Rig Shaded by Jamie Clarke
* */
@Component({
  tag: 'text-3d-magic',
  styleUrl: 'text-3d-magic.scss',
  shadow: true,
})
export class Text3dMagic {

  text = 'LaCari MiCary'

  render() {
    return (
      <Host>
        <h1 data-heading={this.text} style={{'width': '100%'}}>
          <span data-heading={this.text}>
            {this.text}
          </span>
        </h1>
      </Host>
    );
  }

}
