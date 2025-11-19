// .storybook/main.ts
import type { StorybookConfig } from '@stencil/storybook-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [],

  framework: {
    name: '@stencil/storybook-plugin',
  },

  // 🔥 Vite 설정 커스터마이징
  viteFinal: async (baseConfig) => {
    const finalConfig = { ...baseConfig };

    // 1) Vitest mocker를 pre-bundle 대상에서 제외
    finalConfig.optimizeDeps = {
      ...(finalConfig.optimizeDeps ?? {}),
      exclude: [
        ...((finalConfig.optimizeDeps?.exclude as string[] | undefined) ?? []),
        '@vitest/mocker',
      ],
    };

    // 2) 스토리북이 vitest 브라우저 런타임을 불러오려고 할 때
    //    문제가 되는 경로를 가짜 모듈로 대체
    finalConfig.plugins = [
      ...(finalConfig.plugins ?? []),
      {
        name: 'stub-vitest-mocker-browser',
        // Vite 플러그인 훅
        load(id: string) {
          // ENOTDIR가 나는 바로 그 경로
          if (id.includes('@vitest/mocker/dist/index.js/browser')) {
            // 아무 것도 안 하는 빈 모듈을 리턴
            return 'export {};';
          }

          // 내부에서 dist/index.js 자체를 직접 읽으려고 하는 경우도 방어
          if (id.includes('@vitest/mocker/dist/index.js')) {
            // mockObject를 단순 패스스루로 스텁
            return `
              export function mockObject(obj) {
                return obj;
              }
              export default { mockObject };
            `;
          }

          return null;
        },
      },
    ];

    return finalConfig;
  },
};

export default config;
