import { newSpecPage } from '@stencil/core/testing';
import { TintoTypography } from '../typography';

describe('hello-uxbit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TintoTypography],
      html: `<hello-uxbit></hello-uxbit>`,
    });
    expect(page.root).toEqualHtml(`
      <hello-uxbit>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hello-uxbit>
    `);
  });
});
