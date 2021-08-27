import { newE2EPage } from '@stencil/core/testing';

describe('text-3d-marquee', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-3d-marquee></text-3d-marquee>');

    const element = await page.find('text-3d-marquee');
    expect(element).toHaveClass('hydrated');
  });
});
