import { newE2EPage } from '@stencil/core/testing';

describe('component-03', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-03></component-03>');

    const element = await page.find('component-03');
    expect(element).toHaveClass('hydrated');
  });
});
