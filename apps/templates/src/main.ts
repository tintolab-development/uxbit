import { defineCustomElements } from '@uxbit/stencil-components/loader';

defineCustomElements();

const mount = document.getElementById('app');

if (mount) {
  mount.innerHTML = `
    <section class="template-section">
      <h1>UXBIT Templates Workspace</h1>
      <p>Stencil components render directly inside this Vite-powered shell.</p>
      <my-component first="UXBIT" last="Templates"></my-component>
    </section>
  `;
}
