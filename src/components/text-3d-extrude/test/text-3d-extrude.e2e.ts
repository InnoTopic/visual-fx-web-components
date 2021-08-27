import { newE2EPage } from '@stencil/core/testing';

describe('text-3d-extrude', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-3d-extrude></text-3d-extrude>');

    const element = await page.find('text-3d-extrude');
    expect(element).toHaveClass('hydrated');
  });
});
