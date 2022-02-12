module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    indent: ['error', 2],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/store/**/*.slice.*', 'src/store/**/*.actions.*'],
      rules: {
        'no-param-reassign': 0,
      },
    },
    {
      files: ['src/store/**/*.thunks.*', 'src/store/**/*.actions.*'],
      rules: {
        'no-underscore-dangle': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
