import { newSpecPage } from '@stencil/core/testing';
import { Text3dAnimExtrudeRotate } from '../text-3d-anim-extrude-rotate';

describe('text-3d-anim-extrude-rotate', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Text3dAnimExtrudeRotate],
      html: `<text-3d-anim-extrude-rotate></text-3d-anim-extrude-rotate>`,
    });
    expect(page.root).toEqualHtml(`
      <text-3d-anim-extrude-rotate>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-3d-anim-extrude-rotate>
    `);
  });
});
