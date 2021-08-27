import { newSpecPage } from '@stencil/core/testing';
import { Text3dMagic } from '../text-3d-magic';

describe('text-3d-magic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Text3dMagic],
      html: `<text-3d-magic></text-3d-magic>`,
    });
    expect(page.root).toEqualHtml(`
      <text-3d-magic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-3d-magic>
    `);
  });
});
