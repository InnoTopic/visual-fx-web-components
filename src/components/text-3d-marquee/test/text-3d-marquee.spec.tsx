import { newSpecPage } from '@stencil/core/testing';
import { Text3dMarquee } from '../text-3d-marquee';

describe('text-3d-marquee', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Text3dMarquee],
      html: `<text-3d-marquee></text-3d-marquee>`,
    });
    expect(page.root).toEqualHtml(`
      <text-3d-marquee>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-3d-marquee>
    `);
  });
});
