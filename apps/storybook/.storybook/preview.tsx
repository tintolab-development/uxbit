import { defineCustomElements } from '@uxbit/stencil-components/loader';
import { setCustomElementsManifest } from '@stencil/storybook-plugin';
import customElements from '@uxbit/stencil-components/custom-elements.json';

defineCustomElements();

setCustomElementsManifest(customElements);
