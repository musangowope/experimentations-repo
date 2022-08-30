// packages/vue-library/src/plugin.ts

import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@musangowope/stencil-library/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
