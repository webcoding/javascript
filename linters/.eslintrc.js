

// 此文件为设置参考
// 所有 ESLint 属性有列表设定，以及为什么


/* global aa */
// http://eslint.org/docs/rules/no-undef

/**
 * 参看文档
 * https://github.com/feross/eslint-config-standard/blob/master/eslintrc.json
 *
 * https://segmentfault.com/a/1190000004468428
 * http://www.tuicool.com/articles/rIFBfey
 * http://blog.csdn.net/helpzp2008/article/details/51507428
 * http://www.cnblogs.com/allin123/p/5754500.html
 */


//文件中关闭验证

/*eslint-disable */

//suppress all warnings between comments
//alert("foo");

/*eslint-enable */



//文件中指定规则不验证

/*eslint-disable no-alert, no-console */

// alert("foo");
// console.log("bar");

/*eslint-enable no-alert */


module.exports = {
  // http://eslint.org/docs/user-guide/configuring
  // 环境定义了预定义的全局变量, 更多在官网查看
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "amd": true,
    "es6": true,
    "mocha": true,
  },

  // 声明全局变量。值 false 表示不可写（只读属性），true 表示可写
  // 无论 true 或 false，都代表声明了
  // 也可以文件中声明，如下
  // /* global var1, var2 */
  // /* global var1:false, var2:false */
  "globals": {
    "_": false,
    "$": false,
    "define": false,
    "document": false,
    "navigator": false,
    "window": false,
  },

  //表示使用默认的规则进行校验
  // "extends": "eslint:recommended",
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // https://github.com/feross/eslint-config-standard/blob/master/eslintrc.json
  "extends": "standard",

  // required to lint *.vue files
  // eslint-config-standard
  // 可共享的标准格式配置, 在自己工程中，加入 .eslint 文件即可
  // eslint-plugin-html
  // 支持从 html 等文件的 <script> 标签中读取配置的插件，通常配置文件都是 js 文件
  "plugins": [
    "html",
    "standard",
    "promise",
  ],

  // JavaScript 语言选项
  "parserOptions": {
    // 设置你要解析的 JavaScript 的 ECMAScript 版本。默认是 ES7。
    // "ecmaVersion": 8,

    // sourceType配置项有两个值： module 和 script ，默认是 script 。
    // 主要是严格模式和 import/export 的区别。ES6 中的模块是严格模式，也就是你无须添加 use strict 。我们通常浏览器中使用的 script 是没有 import/export 语法的。
    // 所以，选择了 script 则出现 import/export 会报错，可以使用严格模式声明，选择了 module ，则不用严格模式声明，可以使用 import/export 语法。
    "sourceType": "module", //script

    // 想使用的额外的语言特性:
    "ecmaFeatures": {
      // 允许在全局作用域下使用 return 语句
      // "globalReturn": true,
      // impliedStric
      // "impliedStrict": true,
      // 启用 JSX
      // "jsx": true
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


  /** 规则的严重性(rule severity)
  * "off"   或 0 - 关闭规则
  *                turn the rule off 不验证 "warn"
  * "warn"  或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
  *                turn the rule on as a warning(doesn’ t affect exit code) 警告 2
  * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  *                turn the rule on as an error(exit code is 1 when triggered) 错误（ 如有）规则的选项(additional options)
  */

  /** rules 核心配置
  *   这里也许可以抽取一个精简版
  */

  "rules": {

    /////////////////
    /// 可能的错误 ///
    ////////////////

    // 定义对象的set存取器属性时，强制定义get（在声明对象时getter和setter需成对出现）
    "accessor-pairs": 2,
    // 指定数组的元素之间要以空格隔开(, 后面)，
    // 用数组字面量定义数组时数组元素前后是否加空格
    // never 参数：默认，数组元素前后不能带空格，但可以有换行符
    // always参数：数组元素前后必须留空格
    "array-bracket-spacing": [1, "never"],
    // 强制数组方法的回调函数中有 return 语句
    "array-callback-return": 0,
    // 要求箭头函数体使用大括号
    "arrow-body-style": 2,
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 0,
    "arrow-spacing": [1, { "before": true, "after": true }],
    // 在块级作用域外访问块内定义的变量是否报错提示
    // 强制把变量的使用限制在其定义的作用域范围内
    // 当在代码块中用var声明变量，并在代码块外使用时报错
    "block-scoped-var": 0,
    // 禁止或强制在单行代码块中使用空格(禁用)
    // 在单行代码块中，代码块前后是否需要留空格
    // always参数：默认，前后必须留空格
    // never 参数： 前后不能带空格
    "block-spacing":[2, "never"],
    // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
    // if while function 后面的 { 必须与if在同一行，java风格。
    // 大括号的样式，比如下面的大括号语法采用『1tbs』,允许单行样式
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    // require return statements after callbacks
    // 强制回调后return，避免多次调用回调
    "callback-return": 1,
    // 强制使用双峰驼命名格式
    "camelcase": 0,
    // "camelcase": [2, { "properties": "never" }],
    "class-methods-use-this": 2,
    // 数组和对象键值对最后一个逗号, never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号(I don"t care about IE8)
    // "comma-dangle": 0,
    // "comma-dangle": [1, "never"], // always-multiline
    "comma-dangle": [1, "always-multiline"], // never
    // 控制逗号前后的空格
    // 规定了逗号前后的空白，默认配置规定逗号前面没有空白，而逗号后面需要留空白
    "comma-spacing": [1, { "before": false, "after": true }],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    // http://eslint.org/docs/rules/comma-style
    // 规定了逗号放的位置，默认配置逗号应该放在行末，如果设置为first，逗号就应放在行首
    "comma-style": [2, "last"],
    // 限制圈复杂度，也就是类似if else能连续接多少个
    "complexity": [2, 5],
    // "SwitchCase" (默认：0) 强制 switch 语句中的 case 子句的缩进水平
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    // 是否在对象的动态属性（computed properties： ES6引入）中添加空白，默认配置不添加空白
    "computed-property-spacing": [2, "never"],
    // 要求 return 语句要么总是指定返回的值，要么不指定
    // 不同分支的return语句不能返回不同的类型，要么一致要么都没有
    "consistent-return": 0,
    // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了
    // e.g [0,"that"] 指定只能 var that = this. that不能指向其他任何值，this也不能赋值给that以外的其他值
    // 统一this的别名（this赋值的变量名）保证整个应用程序代码的统一。
    // 如果一个变量被指定为this对象的别名，那么这个变量就不能够用来赋其他值，只能够用来保存this对象。
    // 如果this对象明确被赋值给了一个变量，那么这个变量应该是配置中指定的那个变量名。
    "consistent-this": [1, "self"],
    // "consistent-this": [1, "that"],
    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    "constructor-super": 2,
    // if else while for do后面的代码块是否需要{ }包围，参数：
    //    multi         只有块中有多行语句时才需要{ }包围
    //    multi-line    只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，
    //                        块中的语句只能跟和if语句在同一行。if (foo) foo++; else doSomething();
    //    multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在if语句后面
    //    [2, "multi", "consistent"] 保持前后语句的{ }一致
    //    default: [2, "all"] 全都需要{ }包围
    // 强制所有控制语句使用一致的括号风格
    "curly": [2, "multi-line"],
    // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
    // 所有的switch语句都必须要有一个default分支
    "default-case": 2,
    // 在书写对象的属性或方法时，新的一行代码可以以. 开头，也可以以. 结束。
    // 强制object.key 中 . 的位置，参数:
    //      property, "."号应与属性在同一行
    //      object,   "."号应与对象名在同一行
    "dot-location": [2, "property"],
    // 强制使用.号取属性
    //    参数： allowKeywords: true  (默认)使用保留字做属性名时，只能使用.方式取属性
    //                         false 使用保留字做属性名时, 只能使用[]方式取属性
    //                                e.g [2, {"allowKeywords": false}]
    //           allowPattern:  当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值
    //                          e.g [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}]
    "dot-notation": 0,
    // "dot-notation": [2, {"allowKeywords": true}],
    // 文件末尾强制换行
    // 该规则规定文件最后强制换行，仅需留一空行
    "eol-last": 2,
    // 在进行比较时，必须使用全等=== 和完全不等!==
    // allow-null 允许 null 和 undefined ==
    "eqeqeq": [2, "allow-null"],
    "func-call-spacing": [2, "never"],
    "func-name-matching": 2,
    // 强制使用命名的 function 表达式
    // 要求给函数表达式命名，便于 debug
    "func-names": 0,
    //函数声明就是把function关键词写在最前面，后面跟一个函数名。我们可以在函数申明代码前调用函数
    //函数表达式是通过var等声明变量的关键字开头，然后跟函数名，再后面是function本身。在使用函数表达式定义函数前调用函数会报错
    // 统一定义函数是所采用的方式，参数：
    // 强制一致地使用函数声明或函数表达式，方法定义风格，参数：
    //    declaration: 强制使用方法声明的方式，function f(){} e.g [2, "declaration"]
    //    expression:  强制使用方法表达式的方式，默认方式，var f = function() {}  e.g [2, "expression"]
    //    allowArrowFunctions: declaration风格中允许箭头函数。 e.g [2, "declaration", {"allowArrowFunctions":true}]
    "func-style": 0,
    // "func-style": [2, "expression"],
    // 强制 generator 函数中 * 号周围使用一致的空格
    "generator-star-spacing": [0, { "before": true, "after": true }],
    // 要求 require() 出现在顶层模块作用域中
    // 强制 require() 出现在模块作用域的顶部
    "global-require": 0,
    // "global-require": 1,
    // 要求 for-in 循环中必须有一个 if 语句
    // for (key in foo) {
    //   doSomething(key);
    // } error
    // 确保 foo.hasOwnProperty(key) =>
    // for (key in foo) {
    //   if ({}.hasOwnProperty.call(foo, key)) {
    //     doSomething(key);
    //   }
    // }
    "guard-for-in": 1,
    // 要求回调函数中有容错处理
    // 如果函数有err入参(err或者error)，在函数体内必须进行处理
    "handle-callback-err": [2, "^(err|error)$" ],
    // 禁止使用指定的标识符
    // 规定了标识符命名的黑名单
    "id-blacklist": 1,
    // "id-blacklist": [2, "data", "err", "e", "cb", "callback"],
    // 规定标识符的最小及最大长度，默认配置标识符最少两个字符
    // 这里设定为 1，如 $ _ 等
    "id-length": [2, { "min": 1 }],
    // 要求标识符匹配一个指定的正则表达式
    // 命名检测，标识符命名需和配置中的正则表达式匹配，但是该规则对函数调用无效
    "id-match": 1,
    // "id-match": [2, "^[a-z]+([A-Z][a-z]+)*$", { "properties": false }],
    // 统一代码缩进方式，默认值是4 spaces
    // "indent": [2, 2, { "SwitchCase": 1 }],
    "indent": [2, 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }],
    // "indent": 0,
    // 要求或禁止 var 声明中的初始化(初值)
    // 变量声明时必须赋初值
    "init-declarations": 0,
    // 强制在 JSX 属性中一致地使用双引号或单引号
    // 规定了在JSX中的属性值是使用单引号还是双引号,默认使用双引号
    "jsx-quotes": [2, "prefer-double"],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    // 该规则规定了在对象字面量语法中key和value之间的空白，冒号前不要留空格，冒号后面需留一个空格
    // "key-spacing": 0,
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    // 强制在关键字前后使用一致的空格 (前后都需要)
    // 规定了keyword前后是否需要留一个空格
    "keyword-spacing": 0,
    // "keyword-spacing": [2, { "before": true, "after": true, "overrides": {} }],
    // "keyword-spacing": [2, { "before": true, "after": true }],
    // 规定了单行注释的位置，默认: "position": "above"; 可选: beside
    "line-comment-position": [1, { "position": "above" }],
    // 强制使用一致的换行风格
    // 统一换行符，"\n" unix(for LF) and "\r\n" for windows(CRLF)，默认unix
    "linebreak-style": [1, "unix"],
    // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
    // 规定注释和代码块之间是否留空行
    "lines-around-comment": [1, { "beforeBlockComment": true, "allowBlockStart": true }],
    // "lines-around-comment": 2,
    "lines-around-directive": 2,
    // 规定代码最多可以嵌套多少层
    "max-depth": [2, 4],
    // 规定了代码单行的最大长度
    "max-len": [1, 240],
    // "max-len": [2, 80, 4],
    // 强制最大行数
    "max-lines": 0,
    // 强制回调函数最大嵌套深度 5层
    "max-nested-callbacks": [1, 5],
    // 强制 function 定义中最多允许的参数数量
    // 规定了函数参数的最大个数
    "max-params": [1, 7],
    // 强制 function 块最多允许的的语句数量
    // 规定了函数中代码不能够超过多少行
    "max-statements": [1, 200],
    // 强制每一行中所允许的最大语句数量
    "max-statements-per-line": 0,
    "multiline-ternary": [2, "never"],
    // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
    // 要求调用无参构造函数时有圆括号
    // 使用构造函数(new)时必须圆括号不能省略
    "new-parens": 2,
    // 要求或禁止 var 声明语句后有一行空行
    // 规定了变量声明后是否需要空行
    "newline-after-var": 0,
    // 要求 return 语句之前有一空行
    // 规定了return语句前是否是否需要空行
    "newline-before-return": 0,
    // 要求方法链中每个调用都有一个换行符
    // 规定了方法链式调用时是否需换行
    "newline-per-chained-call": 1,
    // 禁用 alert、confirm 和 prompt
    "no-alert": 0,
    // 禁止使用 Array 构造函数
    "no-array-constructor": 2,
    // 禁用按位运算符
    "no-bitwise": 0,
    // 禁用 arguments.caller 和 arguments.callee
    "no-caller": 2,
    // 不允许在 case 子句中使用词法声明
    // 禁止在case/default语句中使用 lexical declarations，例如let, const, function and class
    // 因为在case/default中的声明，在整个switch语句中都能够访问到，如果需要声明变量，可以加大括号。
    "no-case-declarations": 2,
    // 不允许 catch 子句的参数与外层作用域中的变量同名
    // In IE 8 and earlier，禁止catch子句参数与外部作用域变量同名
    "no-catch-shadow": 0,
    // 禁止修改类声明的变量
    "no-class-assign": 2,
    // 不允许箭头功能，在那里他们可以混淆的比较
    "no-confusing-arrow": 0,
    // 禁止条件表达式中出现赋值操作符
    "no-cond-assign": 2,
    // 禁用 console
    "no-console": 0,
    // 禁止修改 const 声明的变量
    "no-const-assign":2,
    // 禁止在条件中使用常量表达式 if(true) if(1)
    // if (false) {
    //   doSomethingUnfinished();
    // } //cuowu
    "no-constant-condition": 1,
    // "no-constant-condition": [2, { "checkLoops": false }],
    // 禁用 continue 语句
    "no-continue": 0,
    // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    "no-control-regex": 2,
    // 禁止使用 debugger 语句
    // allow debugger during development
    // "no-debugger": 1,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // 禁止删除变量
    // 禁止使用 delete 删除 var声明的变量
    "no-delete-var": 2,
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    // 不能使用看起来像除法的正则表达式
    // 用来消除/ (除号)操作符对程序员的迷惑，比如在正则表达式/=foo/中，我们并不能够确定第一个/是除号还是正则表达式，因此我们需要在等号前面加一个转移符/\=foo/
    "no-div-regex": 2,
    // 禁止 function 定义中出现重名参数(函数参数禁止重名)
    "no-dupe-args": 2,
    // 禁止类成员中出现重复的名称(在创建对象字面量时不允许键重复 )
    "no-dupe-class-members": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签(在switch语句中禁止重复的case)
    "no-duplicate-case": 2,
    // 不允许复制模块的进口
    "no-duplicate-imports": 2,
    // 禁止 if 语句中有 return 之后有 else
    // 在if else语句中，如果else语句中只含有一个return语句，那么完全可以不使用else语句，直接return。
    "no-else-return": 2,
    // 禁止空代码块，代码块的内容不能为空
    "no-empty": 1,
    // 禁止在正则表达式中使用空字符集 (正则表达式的内容不能为空 /^abc[]/)
    "no-empty-character-class": 2,
    // 禁止出现空函数 如果一个函数包含了一条注释，它将不会被认为有问题
    "no-empty-function": 2,
    // 禁止使用空解构模式no-empty-pattern
    // 在结构赋值时，模式不能为空。在ECMAScript2015的结构赋值中，模式为空是不会报错的，只是这样的结构赋值没有任何效果，该条规则就保证了模式不能为空，也就保证了结构赋值的有效性。
    "no-empty-pattern": 2,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    // 保证了在和null比较时使用===和!==，而不能够使用==和!=
    "no-eq-null": 1,
    // 禁用 eval() 函数
    "no-eval": 2,
    // 禁止对catch语句中的异常(即参数)进行赋值
    "no-ex-assign": 2,
    // 禁止扩展原生类型，不能向native的对象上面添加属性
    "no-extend-native": 2,
    // 禁止不必要的 .bind() 调用
    // 保证了调用 bind 方法的函数体内有this对象。规避了不必要的使用bind方法的情况。
    // 箭头函数中没有 this 对象，也就不能够使用 bind()方法。该规则保证了在所有的箭头函数中使用 bind 方法将被视为错误。
    "no-extra-bind": 2,
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast":2,
    // 禁用不必要的标签
    // 如果 loop中没有内嵌的 loops或 switches, loop标签是不必要的
    "no-extra-label": 1,
    // 禁止不必要的圆括号，默认 all 时
    // incorrect  (a * b) + c;     a = (b + c);
    // correct    (0).toString();  typeof (a);
    "no-extra-parens": [1, "functions"],
    // "no-extra-parens": [2, "functions"],
    // 禁止不必要的分号，
    // incorrect =>
    // function foo() {
    //   // code
    // };
    // correct =>
    // var foo = function() {
    //   // code
    // };
    "no-extra-semi": 1,
    // 禁止 case 语句落空
    // 在case语句中尽量加break，避免不必要的fallthrough错误，消除从一个case到另一个case的非故意的「fall through」。
    // 如果没有添加 break 等终止语句或者没有添加注释语句，将会抛出错误
    "no-fallthrough": 2,
    // 禁止数字字面量中使用前导和末尾小数点
    // 在使用浮点小数时，不能够省略小数点前面的数或者后面的数，必须写。比如.2 2. 应该写2.2 2.0
    "no-floating-decimal": 2,
    // 禁止对 function 声明重新赋值（禁止重复的函数声明）
    "no-func-assign": 2,
    // 禁止使用短符号进行类型转换(!!fOO)
    // 禁止隐式转换，为了消除简写的类型转换
    "no-implicit-coercion": 0,
    // 禁止在全局范围内使用 var 和 function 声明，消除全局变量、全局函数
    "no-implicit-globals": 1,
    // 禁止使用类似 eval() 的方法
    // 在 setTimeout(), setInterval() or execScript()中消除隐式eval的使用
    "no-implied-eval": 2,
    // 禁止在代码行后使用内联注释（行内注释）
    "no-inline-comments": 0,
    // 禁止在嵌套的块中出现 function 或 var 声明（禁止在块语句中声明变量或函数）
    "no-inner-declarations": [2, "functions"],
    // 禁止 RegExp 构造函数中无效的正则表达式字符串（禁止使用无效的正则语句）
    "no-invalid-regexp": 2,
    // 禁止 this 关键字出现在类和类对象之外
    // 禁止无效的this，只能用在构造器，类，对象字面量
    "no-invalid-this": 0,
    // 禁止在字符串和注释之外不规则的空白（禁止使用不合法或者不规则的空白符）
    "no-irregular-whitespace": 2,
    // 禁用 __iterator__ 属性
    "no-iterator": 2,
    // 防止 label 和 声明的变量 重名
    "no-label-var": 2,
    // 禁用标签语句
    // 禁止使用 label 语句，以避免无限循环
    "no-labels": [2, { "allowLoop": false, "allowSwitch": false }],
    // 禁用不必要的嵌套代码块
    "no-lone-blocks": 2,
    // 禁止 if 作为唯一的语句出现在 else 语句中
    // 禁止在if-else控制语句中，else代码块中仅包含一个if语句
    "no-lonely-if": 0,
    // 禁止在循环中出现 function 声明和表达式
    // 禁止在循环体中定义函数并且函数引用了外部变量
    // 在循环中定义了函数，但是函数内部没有引用外部变量，或者使用let定义的代码块变量，视为合法
    "no-loop-func": 2,
    // 禁用"Magic numbers"，建议使用常量来命名（如 3.14 或 max: 10 之类的数字）
    // 忽视 数组索引 以及 数字 1 0 -1等
    "no-magic-numbers": 0,
    // "no-magic-numbers": [1, { "ignore": [0, -1, 1], "ignoreArrayIndexes": true }],
    // 禁止混合使用不同的操作符
    "no-mixed-operators": 0,
    // 禁止混合常规 var 声明和 require 调用
    // 声明时不能混用声明类型
    "no-mixed-requires": 0,
    // 禁止混用 空格 和 tab 缩进
    "no-mixed-spaces-and-tabs": 2,
    // 禁止使用多个空格
    // 保证了在逻辑表达式、条件表达式、申明语句、数组元素、对象属性、sequences、函数参数中不使用超过一个的空白符
    "no-multi-spaces": 1,
    // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
    // 该规则保证了字符串不分行书写
    "no-multi-str": 2,
    // 不允许多个空行
    // 不要留超过规定数目的空白行
    "no-multiple-empty-lines": [1, { "max": 5 }],
    // 禁止对原生对象赋值
    // 该规则保证了不重写原生对象
    "no-native-reassign": 2,
    // 不允许否定的表达式
    // 在if语句中使用了否定表达式，同时else语句又不为空，那么这样的if-else语句将被视为不合法，
    // 为什么不将其反过来这样代码更容易理解(虽更易理解，但可能否定分支进入频率更高，所以提到前面用)，
    // 该规则同样适用于三元操作符
    "no-negated-condition": 0,
    // 禁止在 in 表达式中出现否定的左操作数（在in操作符左边的操作项不能用! ）
    // 例如这样写不对的：if ( !a in b) { //dosomething }
    "no-negated-in-lhs": 2,
    // 禁止使用嵌套的三元表达式
    "no-nested-ternary": 1,
    // 禁止在非赋值或条件语句中使用 new 操作符
    // 在使用new来调用构造函数后，必须把生成的实例赋值给一个变量
    "no-new": 2,
    // 禁止对 Function 对象使用 new 操作符
    // 禁止使用 new Function(); 语句
    "no-new-func": 0,
    // 禁止使用 new Object() 来构造函数
    "no-new-object": 2,
    // 禁止调用 require 时使用 new 操作符
    // 禁止把 require方法 和 new操作符 一起使用
    "no-new-require": 2,
    // 禁止 Symbol 的构造函数
    "no-new-symbol": 2,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    // 禁止使用 new 创建 String, Number, and Boolean实例
    "no-new-wrappers": 2,
    // 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math() 以及 JSON();
    "no-obj-calls": 2,
    // 禁用八进制字面量（八进制数字）
    "no-octal": 2,
    // 禁止在字符串中使用八进制转义序列，比如 var foo = "Copyright \251";
    "no-octal-escape": 2,
    // 不允许对 function 的参数进行重新赋值
    // 禁止对函数的参数重新进行无意义的赋值
    "no-param-reassign": 1,
    // 禁止对 __dirname 和 __filename 进行字符串连接（路径拼接）
    "no-path-concat": 0,
    // 禁止使用一元操作符 ++ 和 --
    "no-plusplus": 0,
    // 禁用 process.env
    "no-process-env": 0,
    // 禁用 process.exit()
    "no-process-exit": 0,
    // 禁用 __proto__ 属性
    "no-proto": 2,
    // 禁止直接使用 Object.prototypes 的内置属性
    "no-prototype-builtins": 1,
    // 禁止使用 var 多次声明同一变量，避免重复声明一个变量
    "no-redeclare": [2, { "builtinGlobals": true }],
    // 禁止正则表达式字面量中出现多个空格  /foo bar/
    "no-regex-spaces": 2,
    // 禁用特定的全局变量
    "no-restricted-globals": [2, "event"],
    // 允许指定模块加载时的进口
    "no-restricted-imports": 0,
    // 使用了就会报错
    // "no-restricted-modules": [2, "fs"],
    "no-restricted-modules": 2,
    "no-restricted-properties": 2,
    // 禁止使用特定的语法
    // 禁止使用某些特定的JavaScript语法，例如FunctionDeclaration 和 WithStatement
    "no-restricted-syntax": 0,
    // "no-restricted-syntax": [1, "FunctionExpression", "WithStatement"],
    // 禁用指定的通过 require 加载的模块
    // 不要在return语句中使用赋值语句
    "no-return-assign": [2, "always"],
    // "no-return-assign": [2, "except-parens"],
    // 禁止使用 javascript: url
    // 禁止代码中使用类似 javascript:void(0) 的javascript: urls.
    "no-script-url": 0,
    // 禁止自我赋值 禁止给自身赋值
    "no-self-assign": 2,
    // 禁止自身比较 禁止和自身作比较
    "no-self-compare": 2,
    // 禁用逗号操作符
    // 禁止可能导致结果不明确的逗号操作符
    "no-sequences": 2,
    // 禁止 var 声明 与外层作用域的变量同名
    // 禁止声明外部作用域中已定义的变量
    "no-shadow": 0,
    // 禁止覆盖受限制的标识符
    // 声明变量时禁止覆盖JavaScript中的一些保留关键字，比如 NaN、Infinity、undefined、eval、arguments等
    "no-shadow-restricted-names": 2,
    // 禁止稀疏数组，清除多余的逗号申明  比如 [1,,2]
    "no-sparse-arrays": 2,
    // 禁止 function 标识符和括号之间出现空格
    // 函数调用时，函数名和圆括号之间不能有空格
    "no-spaced-func": 2,
    // 禁止使用同步方法，建议使用异步方法
    "no-sync": 1,
    "no-tabs": 2,
    "no-template-curly-in-string": 2,
    // 禁止使用三元操作符
    "no-ternary": 0,
    // 禁止抛出非异常字面量
    // 通过throw语句抛出的对象必须是Error对象本身或者通过Error对象定义的对象。有些情况除外，见官网
    "no-throw-literal": 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    "no-this-before-super": 2,
    // 禁用行尾空格，（默认 false）不允许尾随空格空行，
    // 注：编辑器保存代码时会去除尾空格，不用担心
    "no-trailing-spaces": 1,
    // "no-trailing-spaces": [1, { "skipBlankLines": true }],
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    // 禁止使用未被定义的变量，除非已在配置文件的 global 中进行了说明
    "no-undef": 2,
    // "no-undef": [2, { "typeof": true }],
    // 禁止将变量初始化为 undefined
    "no-undef-init": 2,
    // 禁止将 undefined 作为标识符（变量名）
    "no-undefined": 0,
    // 禁止标识符中有悬空下划线 _bar
    // 禁止在标识符前后使用下划线
    "no-underscore-dangle": 0,
    // 禁止出现令人困惑的多行表达式（为了保证两行不相关的代码不会意外的被当做一行代码来解析）
    "no-unexpected-multiline": 2,
    // 禁用一成不变的循环条件
    // 禁止使用不被修改的循环条件
    "no-unmodified-loop-condition": 2,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    // 禁止使用没有必要的三元操作符，因为用有些三元操作符可以使用其他语句替换
    "no-unneeded-ternary": [2, { "defaultAssignment": false }],
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码 (禁止有执行不到的代码)
    /*
      function foo() {
      return true;
      console.log("done");
    } //错误
    */
    "no-unreachable": 2,
    // 禁止出现未使用过的表达式
    // 禁止在代码中出现没有被使用到的表达式或值
    "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true }],
    // "no-unused-expressions": 1,
    // 禁用未使用过的标签
    // 禁止在代码中出现没有被使用到的标签
    "no-unused-labels": 2,
    // 禁止出现未使用过的变量
    // 不允许定义的变量在后面的代码中没有被使用到
    "no-unused-vars": [1, { "vars": "all", "args": "none" }],
    // 不允许在变量定义之前使用它们（所有的变量都应该先定义后使用）
    "no-use-before-define": 2,
    // 禁止不必要的（没有意义的） .call() 和 .apply()
    "no-useless-call": 2,
    // 禁止不必要的计算性能键对象的文字
    "no-useless-computed-key": 2,
    // 禁止不必要的字符串字面量或模板字面量的连接
    // 避免使用不必要的字符串拼接 如：var str = "Hello, " + "World!";
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    // 禁用不必要的转义字符
    "no-useless-escape": 2,
    "no-useless-rename": 2,
    "no-useless-return": 2,
    // 要求使用 let 或 const 而不是 var
    "no-var": 0,
    // 禁用 void 操作符
    "no-void": 2,
    // 禁止在注释中使用特定的警告术语
    // 生产代码中不能出现 warning-comments 包含的注释（默认 location: "start"）
    "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "anywhere" }],
    // "no-warning-comments": 1,
    // 禁止属性前有空白
    // 禁止属性操作符 . 的前后和 [ 之前有空格
    "no-whitespace-before-property": 1,
    // 禁用 with 语句
    "no-with": 2,
    // 强制花括号内换行符的一致性
    "object-curly-newline": 0,
    // 强制在花括号中使用一致的空格
    // 规定对象字面量中大括号内是否允许加空格，也适用于ES6中的结构赋值和模块import和export
    "object-curly-spacing": 0,
    // "object-curly-spacing": [2, "never"],
    // 强制将对象的属性放在不同的行上
    "object-property-newline": 0,
    // "object-property-newline": [2, { "allowMultiplePropertiesPerLine": true }],
    // 要求或禁止对象字面量中方法和属性使用简写语法
    "object-shorthand": 0,
    // 强制函数中的变量要么一起声明要么分开声明
    // 规定了在每个函数中声明变量是否只使用一次var，该规则同样适用于 let 和 const
    "one-var": [1, { "initialized": "never" }],
    // 禁止在 var 声明周围换行
    "one-var-declaration-per-line": [1, "initializations"],
    // 要求或禁止在可能的情况下要求使用简化的赋值操作符
    // 规定了使用赋值操作符的简写形式 赋值运算符 += -=什么的
    "operator-assignment": 2,
    // "operator-assignment": [2, "always"],
    // 强制操作符使用一致的换行符
    // 在换行时操作符应该放在行首还是行尾。还可对某些操作符进行重写
    "operator-linebreak": [2, "after", { "overrides": { "?": "before", ":": "before" } }],
    // 要求或禁止块内填充
    // 在代码块中，代码块的开始和结尾是否应该留一个空行
    "padded-blocks": 0,
    // "padded-blocks": [2, "never"],
    // 要求使用箭头函数作为回调
    "prefer-arrow-callback": 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-const": 0,
    "prefer-numeric-literals": 2,
    // 要求在合适的地方使用 Reflect 方法
    "prefer-reflect": 0,
    // 要求使用扩展运算符而非 .apply()
    "prefer-spread": 0,
    // 要求使用模板字面量而非字符串连接
    // var str = "Hello, " + name + "!";
    // 改为模板字面量
    // var str = `Hello, ${name}!`;
    "prefer-template": 0,
    // Suggest using the rest parameters instead of arguments
    "prefer-rest-params": 0,
    "prefer-spread": 2,
    // 要求对象字面量属性名称用引号括起来
    // 对象的属性名是否强制加双引号
    "quote-props": 0,
    // "quote-props": [2, "always"],
    // 强制使用一致的反勾号、双引号或单引号
    // 规定了字符串定义的方式，在JavaScript中有三种方式定义字符串，
    // 双引号 double、单引号 single、反义符 backtick ES6 only（ECMAScript2015）。
    "quotes": 0,
    // "quotes": [1, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    // 强制在parseInt()使用基数参数
    // 在使用parseInt()方法时，必须要传递第二个参数来帮助解析
    "radix": 0,
    // 要求使用 JSDoc 注释
    // 注释格式要求JSDoc格式
    // "require-jsdoc": 1,
    "require-jsdoc": [0, {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": false,
        "ClassDeclaration": false
      }
    }],
    // 要求generator 函数内有 yield
    "require-yield": 0,
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": [2, "never"],
    // 要求或禁止使用分号而不是使用 ASI（这个才是控制行尾部分号的，）
    // JavaScript不要求在每行末尾加上分号，这是因为JavaScript引擎会决定是否需要在行末加上分号，然后自动帮我们在行末加上分号，这一特性被成为ASI(automatic semicolon insertion)，也是JavaScript语言最富争议的特性之一
    // 尽管ASI允许我们使用更加自由的代码风格，但是它也可能使得你的代码并不是按你期许的方式运行
    // 两个可选参数，always 和never
    // 默认配置always，要求在行末加上分号。
    // NOTE: 到底要不要分号，参看 https://github.com/feross/standard/blob/master/RULES.md#helpful-reading
    // "semi": [1, "always"],
    "semi": [1, "never"],
    // 强制分号之前和之后使用一致的空格
    // 该规则用来规定分号前后是否加空格，默认配置如下
    "semi-spacing": 0,
    // "semi-spacing": [2, { "before": false, "after": true }],
    // 强制模块内的 import 排序
    // 要求对同一个模块里的import声明按字母排序
    "sort-imports": 0,
    "sort-keys": 0,
    // 要求同一个声明块中的变量按顺序排列
    // 规定在同一个变量声明代码块中，要对变量的声明按字母排序
    "sort-vars": 0,
    // 要求关键词后必须有空格
    "space-after-keywords": 0,
    // "space-after-keywords": [2, "always"],
    // 强制在块之前使用一致的空格
    // 规定了在代码块前是否需要加空格
    "space-before-blocks": 0,
    // "space-before-blocks": [2, "always"],
    // 强制在 function的左括号之前使用一致的空格
    // 函数定义时，function关键字后面的小括号前是否需要加空格
    "space-before-function-paren": 0,
    // "space-before-function-paren": [2, "always"],
    // 强制在圆括号内使用一致的空格
    // 规定圆括号内部的空格。规定是否需要在(右边，或者)左边加空格
    "space-in-parens": 0,
    // "space-in-parens": [2, "never"],
    // 要求操作符周围有空格, 如：a+b => a + b
    "space-infix-ops": 0,
    //This rule was removed in ESLint v2.0 and replaced by the keyword-spacing rule.
    // "space-return-throw-case": 2,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": 0,
    // "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"] }],
    // "spaced-comment": [2, "always", { "line": { "markers": ["*package", "!", ","] }, "block": { "balanced": true, "markers": ["*package", "!", ","], "exceptions": ["*"] } }],
    // 要求或禁止使用严格模式指令（使用严格模式）
    "strict": 0,
    "symbol-description": 2,
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "template-curly-spacing": 1,
    // "template-curly-spacing": [2, "never"],
    // 要求或禁止 Unicode BOM
    "unicode-bom": [2, "never"],
    // 禁止和 NaN 作比较，要求使用 isNaN() 检查
    "use-isnan": 2,
    // 强制使用有效的 JSDoc 注释（用来检测JSDoc是否完整和合法）
    "valid-jsdoc": 0,
    // 强制 typeof 表达式与有效的字符串进行比较
    // typeof 操作符返回的结果会是 "undefined",  "object",  "boolean", "number", "string", 和  "function"之一。
    // 保证 typeof 操作符返回的结果必须和上面六个字符串作比较
    // typeof foo === "undefimed" 错误
    "valid-typeof": 2,
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    // 在通过var声明变量时，应该放在代码所在作用域的顶部
    "vars-on-top": 0,
    // 要求 IIFE 使用括号括起来
    // 立即执行函数需要通过圆括号包围
    "wrap-iife": [2, "any", { "functionPrototypeMethods": true }],
    // 要求正则表达式被括号括起来
    "wrap-regex": 0,
    // 强制在 yield* 表达式中 * 周围使用空格
    "yield-star-spacing": [2, "both"],
    // 要求或禁止 “Yoda” 条件
    // yoda条件语句就是对象字面量应该写在比较操作符的左边，而变量应该写在比较操作符的右边
    // 默认的规则要求，变量写在左边而字面量写在右边
    "yoda": [2, "never"],

    // "standard/object-curly-even-spacing": [2, "either"],
    // "standard/array-bracket-even-spacing": [2, "either"],
    // "standard/computed-property-even-spacing": [2, "even"],
    //
    // "promise/param-names": 2
  }
};
