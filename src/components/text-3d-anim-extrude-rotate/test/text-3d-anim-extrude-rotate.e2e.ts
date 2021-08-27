import { newE2EPage } from '@stencil/core/testing';

describe('text-3d-anim-extrude-rotate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-3d-anim-extrude-rotate></text-3d-anim-extrude-rotate>');

    const element = await page.find('text-3d-anim-extrude-rotate');
    expect(element).toHaveClass('hydrated');
  });
});
