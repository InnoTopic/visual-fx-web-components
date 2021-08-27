import { newSpecPage } from '@stencil/core/testing';
import { Text3dSimple } from '../text-3d-simple';

describe('text-3d-simple', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Text3dSimple],
      html: `<text-3d-simple></text-3d-simple>`,
    });
    expect(page.root).toEqualHtml(`
      <text-3d-simple>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-3d-simple>
    `);
  });
});
