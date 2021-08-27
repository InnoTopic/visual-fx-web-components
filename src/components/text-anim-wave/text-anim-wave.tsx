import {Component, Host, h, Element} from '@stencil/core';

/** https://codepen.io/YusukeNakaya/pen/EbMWgd */
@Component({
  tag: 'text-anim-wave',
  styleUrl: 'text-anim-wave.scss',
  shadow: true,
})
export class TextAnimWave {

  @Element() hostElement;

  array = Array.from(Array(26).keys())

  /** https://github.com/ionic-team/stencil/issues/990
   * https://webcomponents.dev/edit/oEPlhviSVrJMW94FinxW/src/index.tsx?sv=1
   * */
  getContent() {
    const node = this.hostElement
      .querySelector('[slot="title"]')
      .cloneNode(true);

    console.log('getContent', node)

    // const newNode = findAndReplaceInnerHtml(node, todo);
    // const newNode2 = findAndReplaceSrc(newNode, todo);

    return node.innerHTML;
  }

  render() {
    return (
      <Host>
        <div class={{'myBody': true}} >
          <div id="ui">
            {
              this.array.map((_) =>
                // <div class="text">
                //   TEST
                //   {/*<slot></slot>*/}
                // </div>
                <div class="text" innerHTML={this.getContent()}></div>
              )
            }
          </div>
        </div>
      </Host>
    );
  }

}
