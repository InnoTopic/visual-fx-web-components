import { newE2EPage } from '@stencil/core/testing';

describe('text-3d-simple', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-3d-simple></text-3d-simple>');

    const element = await page.find('text-3d-simple');
    expect(element).toHaveClass('hydrated');
  });
});
