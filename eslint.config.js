import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. React and React Router DOM
            ['^react$', '^react-router-dom'],
            // 2. Redux hooks and third-party libraries (excluding type imports)
            ['^(?!.*\\btype\\b)@?\\w'],
            // 3. Custom hooks (relative imports starting with use*.ts)
            ['^\\.+\\/use[A-Z]\\w*$'],
            // 4. Component imports (not utils, constants, hooks, or types)
            [
              '^(?!.*\\btype\\b)(?!.*(?:\\/utils|\\/constants|\\/use[A-Z])).*\\/components\\/',
            ],
            ['^(?!.*\\btype\\b)\\.\\.?\\/(?!(?:utils|constants|use[A-Z]))'],
            // 5. Utils and Constants
            ['^\\.+\\/(?:utils|constants)$'],
            // 6. CSS modules
            ['\\.module\\.css$'],
            // 7. Type imports
            ['^.*\\btype\\b'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
