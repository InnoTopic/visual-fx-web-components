import { newSpecPage } from '@stencil/core/testing';
import { TextAnimWave } from '../text-anim-wave';

describe('text-anim-wave', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextAnimWave],
      html: `<text-anim-wave></text-anim-wave>`,
    });
    expect(page.root).toEqualHtml(`
      <text-anim-wave>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-anim-wave>
    `);
  });
});
