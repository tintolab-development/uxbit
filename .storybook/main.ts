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

    const CORE_STUB_ID = '\0vitest-mocker-core-stub';
    const BROWSER_STUB_ID = '\0vitest-mocker-browser-stub';
    const pickStubId = (target: string) => {
      if (!target.includes('@vitest/mocker')) {
        return null;
      }

      return target.includes('browser') ? BROWSER_STUB_ID : CORE_STUB_ID;
    };

    // 2) 스토리북이 vitest 브라우저 런타임을 불러오려고 할 때
    //    문제가 되는 경로를 가짜 모듈로 대체
    finalConfig.plugins = [
      ...(finalConfig.plugins ?? []),
      {
        name: 'stub-vitest-mocker-browser',
        enforce: 'pre',
        // Vite 플러그인 훅
        resolveId(id: string, importer?: string) {
          // @vitest/mocker 관련 모든 import를 스텁으로 리다이렉트
          const directMatch = pickStubId(id);
          if (directMatch) {
            return { id: directMatch, external: false };
          }

          // 상대 경로 import도 처리 (chunk-mocker.js에서 ./index.js 같은 경우)
          if (
            importer &&
            importer.includes('@vitest/mocker') &&
            (id.startsWith('./') || id.startsWith('../'))
          ) {
            const relativeId = id.includes('browser') ? BROWSER_STUB_ID : CORE_STUB_ID;
            return { id: relativeId, external: false };
          }

          return null;
        },
        load(id: string) {
          // 스텁 모듈 제공
          if (id === CORE_STUB_ID) {
            return `
              class MockerRegistry {
                constructor() {
                  this.registry = new Map();
                }

                add(entry) {
                  if (!entry) {
                    return;
                  }
                  const key = entry.url ?? entry.id ?? Symbol();
                  this.registry.set(key, entry);
                }

                delete(key) {
                  this.registry.delete(key);
                }

                clear() {
                  this.registry.clear();
                }

                get(key) {
                  return this.registry.get(key);
                }

                has(key) {
                  return this.registry.has(key);
                }
              }

              export { MockerRegistry };
              export default { MockerRegistry };
            `;
          }

          if (id === BROWSER_STUB_ID) {
            return `
              class ModuleMocker {
                constructor() {}
                queueMock() {}
                queueUnmock() {}
                importActual() {
                  return Promise.resolve(undefined);
                }
                importMock() {
                  return Promise.resolve({});
                }
              }

              function createCompilerHints() {
                return {
                  hoisted(factory) {
                    return typeof factory === 'function' ? factory() : factory;
                  },
                  mock() {},
                  unmock() {},
                  doMock() {},
                  doUnmock() {},
                  importActual() {
                    return Promise.resolve(undefined);
                  },
                  importMock() {
                    return Promise.resolve({});
                  },
                };
              }

              export { ModuleMocker, createCompilerHints };
              export default { ModuleMocker, createCompilerHints };
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
