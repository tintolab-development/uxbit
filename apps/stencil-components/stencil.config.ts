import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'uxbit',
  srcDir: 'src',
  outputTargets: [
    // ✅ npm 패키지 + loader 생성용
    {
      type: 'dist',
      // dist 기준 상대 경로 → 프로젝트 루트에 loader/ 생성
      esmLoaderPath: '../loader',
    },

    // (옵션) 개별 custom elements 번들 + 타입 생성
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },

    // ✅ Storybook용 custom-elements.json
    {
      type: 'docs-json',
      file: 'custom-elements.json', // 루트에 생성 → ../custom-elements.json 으로 import 가능
    },

    // ✅ 기존 www 빌드 + 정적 페이지 복사
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: 'pages', dest: 'pages' }],
    },
  ],

  // ✅ 로컬 개발 서버가 www/ 를 루트로 보도록
  devServer: {
    root: 'www',
  },
};
