import { newE2EPage } from '@stencil/core/testing';

describe('text-3d-magic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-3d-magic></text-3d-magic>');

    const element = await page.find('text-3d-magic');
    expect(element).toHaveClass('hydrated');
  });
});
