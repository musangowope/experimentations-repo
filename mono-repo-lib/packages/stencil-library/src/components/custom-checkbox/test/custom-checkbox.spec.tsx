import { newSpecPage } from '@stencil/core/testing';
import { CustomCheckbox } from '../custom-checkbox';

describe('custom-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomCheckbox],
      html: `<custom-checkbox></custom-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-checkbox>
    `);
  });
});
