module.exports = {
  parser: 'babel-eslint',
  env: { es6: true, browser: true, jest: true },
  plugins: ['react', 'jsx-a11y', 'import'],
  parserOptions: { ecmaFeatures: { jsx: true } },
  settings: { ecmascript: 6 },
  extends: 'standard',
  rules: {
    /* Possible errors */
    'no-console': 'warn',
    'no-empty': 'error',
    'no-ex-assign': 'warn',
    'no-extra-semi': 'off',
    'no-prototype-builtins': 'off',
    'valid-jsdoc': 'off',
    'no-mixed-operators': 'off',
    'no-unused-expressions': 'off',
    semi: ['warn', 'never'],
    'space-before-function-paren': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-arrow-callback': 'error',

    /* Best practices */
    'block-scoped-var': 'error',
    'default-case': 'error',
    'no-eq-null': 'error',
    'no-alert': 'error',

    /* ES 6 */
    'prefer-template': 'off',
    'no-var': 'error',

    /* Stylistic */
    'jsx-quotes': 'off',
    'max-len': 'off',
    'no-lonely-if': 'error',
    camelcase: 'off',
    'no-multiple-empty-lines': 'warn',
    'object-curly-spacing': 'warn',

    /* React */
    'react/jsx-no-undef': 'error',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-unused-prop-types': ['warn', { skipShapeProps: true }],
    'react/prop-types': ['warn', { skipUndeclared: true }],
    'react/forbid-prop-types': 'warn',

    // Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // Require ES6 class declarations over React.createClass
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // Prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'error',

    // Require render() methods to return something
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // Prevent using string references
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // Prevent duplicate props in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Prevent usage of unknown DOM property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    /* JSX support */
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',

    /* Import */
    'import/no-duplicates': 'error',
    'import/first': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/export': 'off'

    // MINE
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }]
  }
}
