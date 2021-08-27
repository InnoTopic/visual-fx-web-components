import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-3d-paper-fold',
  styleUrl: 'text-3d-paper-fold.scss',
  shadow: true,
})
export class Text3dPaperFold {

  // JS for content editable trick from Chris Coyier
  //
  // var h1 = document.querySelector("h1");
  //
  // h1.addEventListener("input", function() {
  //   this.setAttribute("data-heading", this.innerText);
  // });

  render() {
    return (
      <Host>
        <div class="wrapper">
          <h1 contenteditable data-heading="Folded">Folded</h1>
        </div>
      </Host>
    );
  }

}
