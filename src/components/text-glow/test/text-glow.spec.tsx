import { newSpecPage } from '@stencil/core/testing';
import { TextGlow } from '../text-glow';

describe('text-glow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextGlow],
      html: `<text-glow></text-glow>`,
    });
    expect(page.root).toEqualHtml(`
      <text-glow>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-glow>
    `);
  });
});
