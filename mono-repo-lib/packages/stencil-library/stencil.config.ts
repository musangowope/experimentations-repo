import { Config } from '@stencil/core';
import {  vueOutputTarget } from "@stencil/vue-output-target";
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'stencil-library', // i.e.: stencil-library
      proxiesFile: '../vue-library/src/components.ts',
    }),
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../react-library/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
