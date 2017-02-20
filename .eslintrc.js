
// JS 书写规范
// http://eslint.org
// http://standardjs.com/rules.html
// - 规范文档参看[javascript-style-guide](https://github.com/webcoding/javascript-style-guide/blob/master/docs)
// - 具体配置及注意事项参看 [config-eslint.md](https://github.com/webcoding/javascript-style-guide/blob/master/docs/config-eslint.md)

// NOTE: 兼容性设定，放置在项目根目录，此文件同时支持 ES5、ES6 便于切换（切换注释即可，待修订）

module.exports = {
  root: true,
  parser: 'babel-eslint',
  installedESLint: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true,
      // lambda表达式
      "arrowFunctions": true,
      // 块级作用域，允许使用let const
      "blockBindings": true,
      // class
      "classes": true,
      // http://es6.ruanyifeng.com/#docs/function#函数参数的默认值
      "defaultParams": true,
      // 解构赋值
      "destructuring": true,
      // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符
      "experimentalObjectRestSpread": true,
      // http://es6.ruanyifeng.com/#docs/iterator#for---of循环
      "forOf": true,
      // http://es6.ruanyifeng.com/#docs/generator
      "generators": true,
      // 允许使用模块，模块内默认严格模式
      "modules": true,
      // 允许字面量定义对象时，用表达式做属性名
      // http://es6.ruanyifeng.com/#docs/object#属性名表达式
      "objectLiteralComputedProperties": true,
      // 允许对象字面量方法名简写
      /*var o = {
          method() {
            return "Hello!";
          }
       };

       等同于

       var o = {
         method: function() {
           return "Hello!";
         }
       };
      */
      "objectLiteralShorthandMethods": true,
      /*
        对象字面量属性名简写
        var foo = "bar";
        var baz = {foo};
        baz // {foo: "bar"}

        // 等同于
        var baz = {foo: foo};
      */
      "objectLiteralShorthandProperties": true,
      // http://es6.ruanyifeng.com/#docs/function#rest参数
      "restParams": true,
      // http://es6.ruanyifeng.com/#docs/function#扩展运算符
      "spread": true,
      "superInFunctions": true,
      // http://es6.ruanyifeng.com/#docs/string#模板字符串
      "templateStrings": true,
      "unicodeCodePointEscapes": true,
    },
  },
  globals: {
    Vue: false,
  },

  plugins: [
    // 处理 html 文件内 js 代码规范等
    'html',
  ],

  // ES5 推荐规范
  // extends: 'webcoding/configurations/airbnb/es5',
  // ES6 推荐规范
  extends: 'airbnb',
  // extends: 'webcoding/configurations/airbnb/es6',

  // add your custom rules here
  rules: {
    // 行尾分号，默认配置always，要求在行末加上分号，standard 配置强制不带
    semi: ['error', 'never'],
    // 多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', {'code': 160}],
    // 禁止使用 console debugger
    // 'no-console': 1,
    // 禁止使用 debugger
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
