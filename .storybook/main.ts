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

    // 2) @vitest/mocker를 완전히 외부화하여 번들에서 제외
    finalConfig.build = {
      ...(finalConfig.build ?? {}),
      rollupOptions: {
        ...(finalConfig.build?.rollupOptions ?? {}),
        external: (id) => {
          // @vitest/mocker 관련 모든 모듈을 외부화
          if (id.includes('@vitest/mocker')) {
            return true;
          }
          return false;
        },
      },
    };

    // 3) 스토리북이 vitest 브라우저 런타임을 불러오려고 할 때
    //    문제가 되는 경로를 가짜 모듈로 대체
    finalConfig.plugins = [
      ...(finalConfig.plugins ?? []),
      {
        name: 'stub-vitest-mocker-browser',
        // Vite 플러그인 훅
        resolveId(id: string, importer?: string) {
          // @vitest/mocker 관련 모든 import를 스텁으로 리다이렉트
          if (id.includes('@vitest/mocker')) {
            return { id: '\0vitest-mocker-stub', external: false };
          }

          // 상대 경로 import도 처리 (chunk-mocker.js에서 ./index.js 같은 경우)
          if (
            importer &&
            importer.includes('@vitest/mocker') &&
            (id.startsWith('./') || id.startsWith('../'))
          ) {
            return { id: '\0vitest-mocker-stub', external: false };
          }

          return null;
        },
        load(id: string) {
          // 스텁 모듈 제공
          if (id === '\0vitest-mocker-stub') {
            return `
              export function mockObject(obj) {
                return obj;
              }
              export default { mockObject };
            `;
          }

          // ENOTDIR가 나는 바로 그 경로
          if (id.includes('@vitest/mocker/dist/index.js/browser')) {
            return 'export {};';
          }

          // 내부에서 dist/index.js 자체를 직접 읽으려고 하는 경우도 방어
          if (
            id.includes('@vitest/mocker/dist/index.js') ||
            id.includes('@vitest/mocker/dist/chunk-mocker.js') ||
            id.includes('@vitest/mocker')
          ) {
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
