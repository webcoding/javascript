
// JS 书写规范
// http://eslint.org
// http://standardjs.com/rules.html
// 具体规范参见文档[javascript-style-guide](https://github.com/webcoding/javascript-style-guide/blob/master/docs)

// 配置参看 [config-eslint.md](https://github.com/webcoding/javascript-style-guide/blob/master/docs/config-eslint.md)

// NOTE: 兼容性设定，放置在项目根目录，同时支持 ES5、ES6 便于切换

module.exports = {
  root: true,
  parser: 'babel-eslint',
  installedESLint: true,
  parserOptions: {
    // ecmaVersion: 6,
    sourceType: 'module',
  },
  globals: {
    Vue: false,
  },

  plugins: [
    // 处理 html 文件内 js 代码规范等
    'html',
  ],
  // extends: 'standard',
  // ES5 推荐规范
  extends: 'webcoding/configurations/airbnb/es5',
  // ES6 推荐规范
  // extends: 'airbnb',
  // extends: 'webcoding/configurations/airbnb/es6',

  // add your custom rules here
  rules: {
    // 行尾分号，默认配置always，要求在行末加上分号，standard 配置强制不带
    semi: ['error', 'never'],
    // 多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 'max-len': ['error', 120],
    // 禁止使用 console debugger
    // 'no-console': 1,
    // 'no-debugger': 1,
  },
}
