
// JS 书写规范
// http://eslint.org
// http://standardjs.com/rules.html
//
// @dependencies 安装到全局，就不用每个项目单独安装了
// standard: npm install -g eslint-config-standard eslint-plugin-standard eslint-plugin-promise
// airbnb: npm install -g eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-airbnb

// NOTE: 在新项目中使用 error 级别，在老项目中使用 warning 级别

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  globals: {
    Vue: false,
  },

  plugins: [
    'html',
  ],
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // https://github.com/feross/eslint-config-standard/blob/master/eslintrc.json
  // extends: 'standard',
  // ES5 推荐规范
  // extends: 'airbnb',
  extends: 'defaults/configurations/airbnb/es5',

  // add your custom rules here
  rules: {
    // 行尾分号，默认配置always，要求在行末加上分号，standard 配置强制不带
    semi: ['error', 'never'],
    // 多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 禁止使用 console debugger
    // 'no-console': 1,
    // 'no-debugger': 1,
  },
}
