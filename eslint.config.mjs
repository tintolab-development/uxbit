// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [{
  ignores: [
    'apps/stencil-components/dist/**',
    'apps/stencil-components/loader/**',
    'apps/stencil-components/www/**',
    'apps/stencil-components/coverage/**',
    'apps/storybook/storybook-static/**',
    'apps/templates/dist/**',
    '**/*.d.ts'
  ],
}, eslint.configs.recommended, ...tseslint.configs.recommended, {
  files: [
    'apps/stencil-components/src/**/*.{ts,tsx,js,jsx}',
    'apps/**/*.{ts,tsx,js,jsx}',
    'workspace/**/*.{ts,tsx,js,jsx}'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^(h|_)$',
      },
    ],

    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-escape': 'off',

    // 🔽 이 줄 추가
    // 빈 블록 허용 (image.tsx 같은 곳에서 의도적으로 비워둔 블록 때문에 막히지 않도록)
    'no-empty': 'off',
    // 만약 경고만 띄우고 싶으면: 'no-empty': 'warn'
    'storybook/no-redundant-story-name': 'off',
  },
}, {
  files: ['**/*.spec.{ts,tsx,js}', '**/*.e2e.{ts,tsx,js}'],
  languageOptions: {
    globals: {
      describe: false,
      it: false,
      expect: false,
      beforeEach: false,
      afterEach: false,
      beforeAll: false,
      afterAll: false,
    },
  },
}, {
  files: [
    'apps/stencil-components/src/pages/**/*.{js,jsx}',
    'apps/stencil-components/www/pages/**/*.{js,jsx}',
  ],
  languageOptions: {
    globals: {
      document: 'readonly',
      window: 'readonly',
      console: 'readonly',
      setTimeout: 'readonly',
      clearTimeout: 'readonly',
      setInterval: 'readonly',
      clearInterval: 'readonly',
      CustomEvent: 'readonly',
      HTMLElement: 'readonly',
      Event: 'readonly',
    },
  },
}, eslintConfigPrettier, ...storybook.configs["flat/recommended"], {
  files: ['apps/stencil-components/src/**/*.stories.{ts,tsx,js,jsx}', '**/*.stories.{ts,tsx,js,jsx}'],
  rules: {
    'storybook/no-redundant-story-name': 'off',
    // Storybook 스토리에서는 인라인 스타일 사용이 일반적이므로 허용
    '@typescript-eslint/ban-ts-comment': 'off',
    // 인라인 스타일 경고 비활성화 (스토리 파일에서 일반적으로 사용됨)
    'react-native/no-inline-styles': 'off',
    // 모든 인라인 스타일 관련 규칙 비활성화
    'no-restricted-syntax': 'off',
  },
}];
