import { newSpecPage } from '@stencil/core/testing';
import { Component03 } from '../component-03';

describe('component-03', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Component03],
      html: `<component-03></component-03>`,
    });
    expect(page.root).toEqualHtml(`
      <component-03>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-03>
    `);
  });
});
