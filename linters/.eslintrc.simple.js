module.exports = {
  // 环境定义了预定义的全局变量, 更多在官网查看
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "amd": true,
    "es6": true,
    "mocha": true,
  },
  "globals": {
    "_": false,
    "$": false,
    "define": false,
    "document": false,
    "navigator": false,
    "window": false,
    "getViewTemplatePath": false,
  },
  "rules": {
    // 强制使用双峰驼命名格式
    "camelcase": 0,
    // "camelcase": [2, { "properties": "never" }],
    // 数组和对象键值对最后一个逗号, never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号(I don't care about IE8)
    "comma-dangle": [1, "always-multiline"], // never
    // 控制逗号前后的空格
    // 规定了逗号前后的空白，默认配置规定逗号前面没有空白，而逗号后面需要留空白
    "comma-spacing": [1, { "before": false, "after": true }],
    // 规定了标识符命名的黑名单
    "id-blacklist": [1, "err", "e", "cb"],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    // 该规则规定了在对象字面量语法中key和value之间的空白，冒号前不要留空格，冒号后面需留一个空格
    // "key-spacing": 0,
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }],
    // 强制在关键字前后使用一致的空格 (前后都需要)
    // 规定了keyword前后是否需要留一个空格
    "keyword-spacing": 0,
    // "keyword-spacing": [1, { "before": true, "after": true, "overrides": {} }],
    // 禁止使用某些特定的JavaScript语法，例如FunctionDeclaration 和 WithStatement
    "no-restricted-syntax": 0,
    // "no-restricted-syntax": [1, "FunctionExpression", "WithStatement"],
    // 禁止 this 关键字出现在类和类对象之外
    // 禁止无效的this，只能用在构造器，类，对象字面量
    "no-invalid-this": 0,
    // 在代码块中，代码块的开始和结尾是否应该留一个空行
    "padded-blocks": 0,
    // "padded-blocks": [2, "never"],
    // 要求关键词后必须有空格
    "space-after-keywords": 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": 0,
    // "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"] }],
    // "spaced-comment": [2, "always", { "line": { "markers": ["*package", "!", ","] }, "block": { "balanced": true, "markers": ["*package", "!", ","], "exceptions": ["*"] } }],
    // 要求或禁止使用严格模式指令（使用严格模式）
    "strict": 0,
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    // 在通过var声明变量时，应该放在代码所在作用域的顶部
    "vars-on-top": 0,
    // 要求正则表达式被括号括起来
    "wrap-regex": 0,
  }
}
