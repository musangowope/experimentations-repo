import { newE2EPage } from '@stencil/core/testing';

describe('custom-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-checkbox></custom-checkbox>');

    const element = await page.find('custom-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
