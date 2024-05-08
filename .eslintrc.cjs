module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
	  'eslint:recommended',
	  'plugin:@typescript-eslint/recommended',
	  'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'package.json', 'tsconfig.json', 'tsconfig.node.json'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
	  'react-refresh/only-export-components': [
		'warn',
		{ allowConstantExport: true },
	  ],
		'semi': ['error', 'never'],
		'quotes': ['error', 'single'],
		// "prettier/prettier": "error"
	},
}
  