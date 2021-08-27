import { newE2EPage } from '@stencil/core/testing';

describe('text-glow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-glow></text-glow>');

    const element = await page.find('text-glow');
    expect(element).toHaveClass('hydrated');
  });
});
