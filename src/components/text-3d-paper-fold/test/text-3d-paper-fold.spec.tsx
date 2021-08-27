import { newSpecPage } from '@stencil/core/testing';
import { Text3dPaperFold } from '../text-3d-paper-fold';

describe('text-3d-paper-fold', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Text3dPaperFold],
      html: `<text-3d-paper-fold></text-3d-paper-fold>`,
    });
    expect(page.root).toEqualHtml(`
      <text-3d-paper-fold>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-3d-paper-fold>
    `);
  });
});
