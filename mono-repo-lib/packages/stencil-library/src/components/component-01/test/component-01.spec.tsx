import { newSpecPage } from '@stencil/core/testing';
import { Component01 } from '../component-01';

describe('component-01', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Component01],
      html: `<component-01></component-01>`,
    });
    expect(page.root).toEqualHtml(`
      <component-01>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-01>
    `);
  });
});
