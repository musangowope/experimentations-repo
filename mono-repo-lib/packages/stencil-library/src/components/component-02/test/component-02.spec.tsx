import { newSpecPage } from '@stencil/core/testing';
import { Component02 } from '../component-02';

describe('component-02', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Component02],
      html: `<component-02></component-02>`,
    });
    expect(page.root).toEqualHtml(`
      <component-02>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-02>
    `);
  });
});
