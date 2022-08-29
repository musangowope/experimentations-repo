import { newE2EPage } from '@stencil/core/testing';

describe('musango-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<musango-component></musango-component>');

    const element = await page.find('musango-component');
    expect(element).toHaveClass('hydrated');
  });
});
