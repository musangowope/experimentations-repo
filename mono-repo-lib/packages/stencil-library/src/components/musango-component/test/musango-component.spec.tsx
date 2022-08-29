import { newSpecPage } from '@stencil/core/testing';
import { MusangoComponent } from '../musango-component';

describe('musango-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MusangoComponent],
      html: `<musango-component></musango-component>`,
    });
    expect(page.root).toEqualHtml(`
      <musango-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </musango-component>
    `);
  });
});
