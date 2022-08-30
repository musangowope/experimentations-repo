import { newE2EPage } from '@stencil/core/testing';

describe('component-01', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-01></component-01>');

    const element = await page.find('component-01');
    expect(element).toHaveClass('hydrated');
  });
});
