import { newE2EPage } from '@stencil/core/testing';

describe('component-02', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-02></component-02>');

    const element = await page.find('component-02');
    expect(element).toHaveClass('hydrated');
  });
});
