import { newE2EPage } from '@stencil/core/testing';
describe('hello-uxbit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hello-uxbit></hello-uxbit>');
    const element = await page.find('hello-uxbit');
    expect(element).toHaveClass('hydrated');
  });
});
