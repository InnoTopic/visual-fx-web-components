import { newSpecPage } from '@stencil/core/testing';
import { Text3dExtrude } from '../text-3d-extrude';

describe('text-3d-extrude', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Text3dExtrude],
      html: `<text-3d-extrude></text-3d-extrude>`,
    });
    expect(page.root).toEqualHtml(`
      <text-3d-extrude>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-3d-extrude>
    `);
  });
});
