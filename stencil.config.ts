import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'uxbit',
  outputTargets: [
    {
      type: 'www',
      dir: 'www', // ⭐ 이게 핵심! src가 아님
      serviceWorker: null,
    },
  ],
  devServer: {
    root: 'www', // ⭐ 이 줄이 없으면 index.html 못 찾음
  },
};
