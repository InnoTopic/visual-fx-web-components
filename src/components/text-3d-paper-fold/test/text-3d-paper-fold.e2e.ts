import { newE2EPage } from '@stencil/core/testing';

describe('text-3d-paper-fold', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-3d-paper-fold></text-3d-paper-fold>');

    const element = await page.find('text-3d-paper-fold');
    expect(element).toHaveClass('hydrated');
  });
});
