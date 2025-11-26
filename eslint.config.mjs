// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [{
  ignores: ['dist/**', 'loader/**', 'www/**', 'coverage/**', 'storybook-static/**', '**/*.d.ts'],
}, eslint.configs.recommended, ...tseslint.configs.recommended, {
  files: ['src/**/*.{ts,tsx,js,jsx}'],
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
  },
}, eslintConfigPrettier, ...storybook.configs["flat/recommended"]];
