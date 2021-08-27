import { newE2EPage } from '@stencil/core/testing';

describe('text-anim-wave', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-anim-wave></text-anim-wave>');

    const element = await page.find('text-anim-wave');
    expect(element).toHaveClass('hydrated');
  });
});
