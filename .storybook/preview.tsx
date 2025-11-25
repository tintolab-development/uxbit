import { defineCustomElements } from '../loader/index.js';
import { setCustomElementsManifest, type Preview } from '@stencil/storybook-plugin';
import customElements from '../custom-elements.json';

defineCustomElements();

setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => {
        if (a.title === 'Uxbit/QButton') {
          return 1;
        }
        if (b.title === 'Uxbit/QButton') {
          return -1;
        }
        return a.id.localeCompare(b.id);
      },
    },
  },
};

export default preview;
