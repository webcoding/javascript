[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/airbnb/javascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# Airbnb JavaScript Style Guide() {

**A mostly reasonable approach to JavaScript——用更合理的方式写 JavaScript**

翻译自 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 。

ES5 的编码规范请查看[版本一](https://github.com/webcoding/javascript-style-guide/tree/master/javascript-style-guide/es5_zh-cn_v1.md)，[版本二](https://github.com/webcoding/javascript-style-guide/tree/master/javascript-style-guide/es5_zh-cn_v2.md)。

[![Downloads](https://img.shields.io/npm/dm/eslint-config-airbnb.svg)](https://www.npmjs.com/package/eslint-config-airbnb)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-airbnb-base.svg)](https://www.npmjs.com/package/eslint-config-airbnb-base)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/airbnb/javascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Other Style Guides
 - [ES5 (Deprecated)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)
 - [React](react/)
 - [CSS-in-JavaScript](css-in-javascript/)
 - [CSS & Sass](https://github.com/airbnb/css)
 - [CSS & Sass 中文版](https://github.com/webcoding/css-style-guide)
 - [Ruby](https://github.com/airbnb/ruby)

<a name="table-of-contents"></a>
## 目录

  1. [类型](#types)
  1. [引用](#references)
  1. [对象](#objects)
  1. [数组](#arrays)
  1. [解构](#destructuring)
  1. [字符串](#strings)
  1. [函数](#functions)
  1. [箭头函数](#arrow-functions)
  1. [类 & 构造函数](#classes--constructors)
  1. [模块](#modules)
  1. [Iterators & Generators ](#iterators-and-generators)
  1. [属性](#properties)
  1. [变量](#variables)
  1. [提升](#hoisting)
  1. [比较运算符 & 等号](#comparison-operators--equality)
  1. [代码块](#blocks)
  1. [注释](#comments)
  1. [空白](#whitespace)
  1. [逗号](#commas)
  1. [分号](#semicolons)
  1. [类型转换](#type-casting--coercion)
  1. [命名规则](#naming-conventions)
  1. [存取器](#accessors)
  1. [事件](#events)
  1. [jQuery](#jquery)
  1. [ECMAScript 5 兼容性](#ecmascript-5-compatibility)
  1. [ECMAScript 6 (ES 2015+) 编码规范](#ecmascript-6-styles)
  1. [测试](#testing)
  1. [性能](#performance)
  1. [资源](#resources)
  1. [使用人群](#in-the-wild)
  1. [翻译](#translation)
  1. [JavaScript 编码规范说明](#the-javascript-style-guide-guide)
  1. [一起来讨论 JavaScript](#chat-with-us-about-javascript)
  1. [Contributors](#contributors)
  1. [License](#license)

<a name="types"></a>
##  类型 

  <a name="types--primitives"></a><a name="1.1"></a>
  - [1.1](#types--primitives) **基本类型**: 直接存取基本类型。

    + `string` 字符串
    + `number` 数值
    + `boolean` 布尔类型
    + `null`
    + `undefined`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

  <a name="types--complex"></a><a name="1.2"></a>
  - [1.2](#types--complex) **复杂类型**: 通过引用的方式存取复杂类型。

    + `object` 对象
    + `array` 数组
    + `function` 函数

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="references"></a>
## 引用

  <a name="references--prefer-const"></a><a name="2.1"></a>
  - [2.1](#references--prefer-const) 对所有的引用使用 `const` ；不要使用 `var`。
  eslint: [`prefer-const`](http://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign.html)

    > 为什么? 这能确保你无法对引用重新赋值，也不会导致出现 bug 或难以理解。

    ```javascript
    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    const b = 2;
    ```

  <a name="references--disallow-var"></a><a name="2.2"></a>
  - [2.2](#references--disallow-var) 如果你一定需要可变动的引用，使用 `let` 代替 `var`。
  eslint: [`no-var`](http://eslint.org/docs/rules/no-var.html) 
  jscs: [`disallowVar`](http://jscs.info/rule/disallowVar)

    > 为什么? 因为 `let` 是块级作用域，而 `var` 是函数作用域。

    ```javascript
    // bad
    var count = 1;
    if (true) {
      count += 1;
    }

    // good, use the let.
    let count = 1;
    if (true) {
      count += 1;
    }
    ```

  <a name="references--block-scope"></a><a name="2.3"></a>
  - [2.3](#references--block-scope) 注意 `let` 和 `const` 都是块级作用域。

    ```javascript
    // const 和 let 只存在于它们被定义的区块内。
    {
      let a = 1;
      const b = 1;
    }
    console.log(a); // ReferenceError
    console.log(b); // ReferenceError
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="objects"></a>
## 对象

  <a name="objects--no-new"></a><a name="3.1"></a>
  - [3.1](#objects--no-new) 使用字面值创建对象。
  eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object.html)

    ```javascript
    // bad
    const item = new Object();

    // good
    const item = {};
    ```
  ****************
  - [3.2](#3.2) <a name='3.2'></a> 如果你的代码在浏览器环境下执行，别使用 [保留字](http://es5.github.io/#x7.6.1) 作为键值。这样的话在 IE8 不会运行。 [更多信息](https://github.com/airbnb/javascript/issues/61)。 但在 ES6 模块和服务器端中使用没有问题。

    ```javascript
    // bad
    const superman = {
      default: { clark: 'kent' },
      private: true,
    };

    // good
    const superman = {
      defaults: { clark: 'kent' },
      hidden: true,
    };
    ```

  - [3.3](#3.3) <a name='3.3'></a> 使用同义词替换需要使用的保留字。

    ```javascript
    // bad
    const superman = {
      class: 'alien',
    };

    // bad
    const superman = {
      klass: 'alien',
    };

    // good
    const superman = {
      type: 'alien',
    };
    ```
  *************

  <a name="es6-computed-properties"></a><a name="3.2"></a>
  - [3.2](#es6-computed-properties) 创建有动态属性名的对象时，使用可被计算的属性名称。

    > 为什么? 因为这样可以让你在一个地方定义所有的对象属性。

    ```javascript
    function getKey(k) {
      return `a key named ${k}`;
    }

    // bad
    const obj = {
      id: 5,
      name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;

    // good
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };
    ```

  <a name="es6-object-shorthand"></a><a name="3.5"></a>
  - [3.3](#es6-object-shorthand) 使用对象方法的简写。
  eslint: [`object-shorthand`](http://eslint.org/docs/rules/object-shorthand.html) 
  jscs: [`requireEnhancedObjectLiterals`](http://jscs.info/rule/requireEnhancedObjectLiterals)

    ```javascript
    // bad
    const atom = {
      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

    // good
    const atom = {
      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };
    ```

  <a name="es6-object-concise"></a><a name="3.6"></a>
  - [3.4](#es6-object-concise) 使用对象属性值的简写。
  eslint: [`object-shorthand`](http://eslint.org/docs/rules/object-shorthand.html) 
  jscs: [`requireEnhancedObjectLiterals`](http://jscs.info/rule/requireEnhancedObjectLiterals)

    > 为什么? 因为这样更短更有描述性。

    ```javascript
    const lukeSkywalker = 'Luke Skywalker';

    // bad
    const obj = {
      lukeSkywalker: lukeSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
    };
    ```

  <a name="objects--grouped-shorthand"></a><a name="3.5"></a>
  - [3.5](#objects--grouped-shorthand) 在对象属性声明前把简写的属性分组。

  > 为什么? 因为这样能清楚地看出哪些属性使用了简写。

    ```javascript
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    // bad
    const obj = {
      episodeOne: 1,
      twoJedisWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
      anakinSkywalker,
      episodeOne: 1,
      twoJedisWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };
    ```

  <a name="objects--quoted-props"></a><a name="3.6"></a>
  - [3.6](#objects--quoted-props) Only quote properties that are invalid identifiers.
  eslint: [`quote-props`](http://eslint.org/docs/rules/quote-props.html) 
  jscs: [`disallowQuotedKeysInObjects`](http://jscs.info/rule/disallowQuotedKeysInObjects)

    > 为什么? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

    ```javascript
    // bad
    const bad = {
      'foo': 3,
      'bar': 4,
      'data-blah': 5,
    };

    // good
    const good = {
      foo: 3,
      bar: 4,
      'data-blah': 5,
    };
    ```

  <a name="objects--prototype-builtins"></a>
  - [3.7](#objects--prototype-builtins) Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`.

    > 为什么? These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object (`Object.create(null)`).

    ```javascript
    // bad
    console.log(object.hasOwnProperty(key));

    // good
    console.log(Object.prototype.hasOwnProperty.call(object, key));

    // best
    const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
    /* or */
    import has from 'has';
    …
    console.log(has.call(object, key));
    ```

  <a name="objects--rest-spread"></a>
  - [3.8](#objects--rest-spread) Prefer the object spread operator over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

    ```javascript
    // very bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
    delete copy.a; // so does this

    // bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // good
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="arrays"></a>
## 数组

  <a name="arrays--literals"></a><a name="4.1"></a>
  - [4.1](#arrays--literals) <a name='4.1'></a> 使用字面值创建数组。
  eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor.html)

    ```javascript
    // bad
    const items = new Array();

    // good
    const items = [];
    ```

  <a name="arrays--push"></a><a name="4.2"></a>
  - [4.2](#arrays--push) 向数组添加元素时使用 [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 替代直接赋值。

    ```javascript
    const someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

  <a name="es6-array-spreads"></a><a name="4.3"></a>
  - [4.3](#es6-array-spreads) 使用拓展运算符 `...` 复制数组。

    ```javascript
    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = [...items];

    // ES5 中，当你需要拷贝数组时使用slice. [jsPerf](http://jsperf.com/converting-arguments-to-an-array/7)
    // old
    itemsCopy = items.slice();
    ```

  <a name="arrays--from"></a><a name="4.4"></a>
  - [4.4](#arrays--from) 使用 [Array.from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 把一个类数组对象转换成数组。

    ```javascript
    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);

    // ES5 中使用slice将类数组的对象转成数组.
    // old
    function trigger() {
      var args = Array.prototype.slice.call(arguments);
      ...
    }
    ```

  <a name="arrays--callback-return"></a><a name="4.5"></a>
  - [4.5](#arrays--callback-return) 在回调函数中使用 return 语句。如果函数体只由一个单独的语句组成，可以省略 return 关键字 [8.2](#8.2).
  eslint: [`array-callback-return`](http://eslint.org/docs/rules/array-callback-return)

    ```javascript
    // good
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });

    // good
    [1, 2, 3].map(x => x + 1);

    // bad
    const flat = {};
    [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
      const flatten = memo.concat(item);
      flat[index] = flatten;
    });

    // good
    const flat = {};
    [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
      const flatten = memo.concat(item);
      flat[index] = flatten;
      return flatten;
    });

    // bad
    inbox.filter((msg) => {
      const { subject, author } = msg;
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
      } else {
        return false;
      }
    });

    // good
    inbox.filter((msg) => {
      const { subject, author } = msg;
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
      }

      return false;
    });
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="destructuring"></a>
## 解构

  <a name="destructuring--object"></a><a name="5.1"></a>
  - [5.1](#destructuring--object) 使用解构存取和使用多属性对象。 
  jscs: [`requireObjectDestructuring`](http://jscs.info/rule/requireObjectDestructuring)

    > 为什么? 因为解构能减少临时引用属性。

    ```javascript
    // bad
    function getFullName(user) {
      const firstName = user.firstName;
      const lastName = user.lastName;

      return `${firstName} ${lastName}`;
    }

    // good
    function getFullName(user) {
      const { firstName, lastName } = user;
      return `${firstName} ${lastName}`;
    }

    // best
    function getFullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    }
    ```

  <a name="destructuring--array"></a><a name="5.2"></a>
  - [5.2](#destructuring--array) 对数组使用解构赋值。 
  jscs: [`requireArrayDestructuring`](http://jscs.info/rule/requireArrayDestructuring)

    ```javascript
    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];

    // good
    const [first, second] = arr;
    ```

  <a name="destructuring--object-over-array"></a><a name="5.3"></a>
  - [5.3](#destructuring--object-over-array) 需要回传多个值时，使用对象解构，而不是数组解构。 
  jscs: [`disallowArrayDestructuringReturn`](http://jscs.info/rule/disallowArrayDestructuringReturn)
  
    > 为什么? 增加属性或者改变排序不会改变调用时的位置。

    ```javascript
    // bad
    function processInput(input) {
      // then a miracle occurs
      return [left, right, top, bottom];
    }

    // 调用时需要考虑回调数据的顺序。
    const [left, __, top] = processInput(input);

    // good
    function processInput(input) {
      // then a miracle occurs
      return { left, right, top, bottom };
    }

    // 调用时只选择需要的数据
    const { left, top } = processInput(input);
    ```


**[⬆ 返回目录](#table-of-contents)**

<a name="strings"></a>
## Strings

  <a name="strings--quotes"></a><a name="6.1"></a>
  - [6.1](#strings--quotes) 字符串使用单引号 `''` 。
  eslint: [`quotes`](http://eslint.org/docs/rules/quotes.html) 
  jscs: [`validateQuoteMarks`](http://jscs.info/rule/validateQuoteMarks)

    ```javascript
    // bad
    const name = "Capt. Janeway";

    // bad - template literals should contain interpolation or newlines
    const name = `Capt. Janeway`;

    // good
    const name = 'Capt. Janeway';
    ```

  <a name="strings--line-length"></a><a name="6.2"></a>
  - [6.2](#strings--line-length) 字符串超过 100 个字节应该使用字符串连接号换行。此处可以更多个字符200或300，目前编辑界面越来越大了

    > 为什么? 切断长字符串，可以更好编码和搜索。

    注：过度使用字串连接符号可能会对性能造成影响。[jsPerf](http://jsperf.com/ya-string-concat) 和 [讨论](https://github.com/airbnb/javascript/issues/40).

    ```javascript
    // bad
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // bad
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';

    // good
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
    ```


  <a name="es6-template-literals"></a><a name="6.3"></a>
  - [6.3](#es6-template-literals) 程序化生成字符串时，使用模板字符串代替字符串连接。
  eslint: [`prefer-template`](http://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing) 
  jscs: [`requireTemplateStrings`](http://jscs.info/rule/requireTemplateStrings)

    > 为什么? 模板字符串插值更为简洁，更具可读性。

    ```javascript
    // bad
    function sayHi(name) {
      return 'How are you, ' + name + '?';
    }

    // bad
    function sayHi(name) {
      return ['How are you, ', name, '?'].join();
    }

    // bad
    function sayHi(name) {
      return `How are you, ${ name }?`;
    }

    // good
    function sayHi(name) {
      return `How are you, ${name}?`;
    }
    ```

  <a name="strings--eval"></a><a name="6.5"></a>
  - [6.4](#strings--eval) 在字符串中永不使用 `eval()`, 它会导致很多漏洞。

  <a name="strings--escaping"></a>
  - [6.5](#strings--escaping) 字符串中不要使用不必要的转义。
  eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

    > 为什么? 反斜杠会降低可读性，应该在必要时才去使用它。

    ```javascript
    // bad
    const foo = '\'this\' \i\s \"quoted\"';

    // good
    const foo = '\'this\' is "quoted"';
    const foo = `'this' is "quoted"`;
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="functions"></a>
## 函数

  - [7.1](#7.1) <a name='7.1'></a> 使用函数表达式，而不是函数声明。
  eslint: [`func-style`](http://eslint.org/docs/rules/func-style) 
  jscs: [`requireFunctionDeclarations`](http://jscs.info/rule/requireFunctionDeclarations)

    > 为什么? 函数声明会把整个函数提升（hoisted），这导致非常容易在定义以前就被引用，这会降低可读性以及维护性（而函数表达式只会把函数的引用变量名提升）。如果发现一个函数定义非常大或复杂，会干扰其他逻辑的理解，此时也许是时候把它提取成独立模块了。
    > 另外不要忘记给匿名表达式命名，匿名函数会使错误堆栈中跟踪问题更加困难。
    > 函数提升规则，使得[箭头函数](#arrow-functions)可以取代函数表达式。

    ```javascript
    // bad 匿名函数表达式
    var anonymous = function() () {
    };

    // bad
    function foo() {
    }

    // good
    const foo = function named() {
    };
    ```

  <a name="functions--iife"></a><a name="7.2"></a>
  - [7.2](#functions--iife) <a name='7.2'></a> 用括号包裹 立即调用函数表达式（IIFE）。
  eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife.html) 
  jscs: [`requireParenthesesAroundIIFE`](http://jscs.info/rule/requireParenthesesAroundIIFE)

    ```javascript
    // 立即调用的函数表达式 (IIFE)
    // 可使用箭头函数
    (() => {
      console.log('Welcome to the Internet. Please follow me.');
    }());
    ```

  <a name="functions--in-blocks"></a><a name="7.3"></a>
  - [7.3](#functions--in-blocks) 永远不要在一个非函数代码块（`if`、`while` 等）中声明一个函数，把那个函数赋给一个变量。浏览器允许你这么做，但它们的解析表现不一致。
  eslint: [`no-loop-func`](http://eslint.org/docs/rules/no-loop-func.html)

  <a name="functions--note-on-blocks"></a><a name="7.4"></a>
  - [7.4](#functions--note-on-blocks) **注意:** ECMA-262 把 `block` 定义为一组语句。函数声明不是语句。[阅读 ECMA-262 关于这个问题的说明](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97)。

    ```javascript
    // bad
    if (currentUser) {
      function test() {
        console.log('Nope.');
      }
    }

    // good
    let test;
    if (currentUser) {
      test = () => {
        console.log('Yup.');
      };
    }
    ```

  <a name="functions--arguments-shadow"></a><a name="7.5"></a>
  - [7.5](#functions--arguments-shadow) 永远不要把参数命名为 `arguments`。这将取代原来函数作用域内的 `arguments` 对象。

    ```javascript
    // bad
    function nope(name, options, arguments) {
      // ...stuff...
    }

    // good
    function yup(name, options, args) {
      // ...stuff...
    }
    ```

  <a name="es6-rest"></a><a name="7.6"></a>
  - [7.6](#es6-rest) 不要使用 `arguments`。可以选择 rest 语法 `...` 替代。
  eslint: [`prefer-rest-params`](http://eslint.org/docs/rules/prefer-rest-params)

    > 为什么? 使用 `...` 能明确你要传入的参数。另外 rest 参数是一个真正的数组，而 `arguments` 是一个类数组。

    ```javascript
    // bad
    function concatenateAll() {
      const args = Array.prototype.slice.call(arguments);
      return args.join('');
    }

    // good
    function concatenateAll(...args) {
      return args.join('');
    }
    ```

  <a name="es6-default-parameters"></a><a name="7.7"></a>
  - [7.7](#es6-default-parameters) 直接给函数的参数指定默认值，不要使用一个变化的函数参数。

    ```javascript
    // really bad
    function handleThings(opts) {
      // 不！我们不应该改变函数参数。
      // 更加糟糕: 如果参数 opts 是 false 的话，它就会被设定为一个对象。
      // 但这样的写法会造成一些 Bugs。
      //（译注：例如当 opts 被赋值为空字符串，opts 仍然会被下一行代码设定为一个空对象。）
      opts = opts || {};
      // ...
    }

    // still bad
    function handleThings(opts) {
      if (opts === void 0) {
        opts = {};
      }
      // ...
    }

    // good
    function handleThings(opts = {}) {
      // ? 对比以上写法区别是啥？参见 es6
      // ...
    }
    ```

  <a name="functions--default-side-effects"></a><a name="7.8"></a>
  - [7.8](#functions--default-side-effects) 函数参数设置默认值，要避免副作用。

    > 为什么? 因为这样会让人感到很困惑。

    ```javascript
    var b = 1;
    // bad
    function count(a = b++) {
      console.log(a);
    }
    count();  // 1
    count();  // 2
    count(3); // 3
    count();  // 3
    ```

  <a name="functions--defaults-last"></a><a name="7.9"></a>
  - [7.9](#functions--defaults-last) 总是把默认参数最后。

    ```javascript
    // bad
    function handleThings(opts = {}, name) {
      // ...
    }

    // good
    function handleThings(name, opts = {}) {
      // ...
    }
    ```

  <a name="functions--constructor"></a><a name="7.10"></a>
  - [7.10](#functions--constructor) 永远不要使用构造函数创建新函数。
  eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

    > 为什么? 以这种方式创建一个函数，类似 eval()，会导致很多漏洞。

    ```javascript
    // bad
    var add = new Function('a', 'b', 'return a + b');

    // still bad
    var subtract = Function('a', 'b', 'return a - b');
    ```

  <a name="functions--signature-spacing"></a><a name="7.11"></a>
  - [7.11](#functions--signature-spacing) 函数签名的左右间距。
  eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

    > 为什么? 一致性好，当添加或移除名称时，不必添加或移除空间。

    ```javascript
    // bad
    const f = function(){};
    const g = function (){};
    const h = function() {};

    // good
    const x = function () {};
    const y = function a() {};
    ```

  <a name="functions--mutate-params"></a><a name="7.12"></a>
  - [7.12](#functions--mutate-params) 不要使用变异参数。
  eslint: [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign.html)

    > 为什么? 操纵传入的参数，在原调用者上可能会导致不必要的变量副作用。

    ```javascript
    // bad
    function f1(obj) {
      obj.key = 1;
    };

    // good
    function f2(obj) {
      const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
    };
    ```

  <a name="functions--reassign-params"></a><a name="7.13"></a>
  - [7.13](#functions--reassign-params) 不要给形参重新赋值。
  eslint: [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign.html)

    > 为什么? 这样做可能会导致意外行为，特别是操作 `arguments` 参数。这也会导致优化问题，特别是使用 V8 解析器.

    ```javascript
    // bad
    function f1(a) {
      a = 1;
    }

    function f2(a) {
      if (!a) { a = 1; }
    }

    // good
    function f3(a) {
      const b = a || 1;
    }

    function f4(a = 1) {
    }
    ```

  <a name="functions--spread-vs-apply"></a><a name="7.14"></a>
  - [7.14](#functions--spread-vs-apply) 使用拓展操作符 `...` 调用可变参函数。
  eslint: [`prefer-spread`](http://eslint.org/docs/rules/prefer-spread)

    > 为什么? 更简洁、并且也不用提供上下文作用域，而使用 `new` 和 `apply` 也没这个容易。

    ```javascript
    // bad
    const x = [1, 2, 3, 4, 5];
    console.log.apply(console, x);

    // good
    const x = [1, 2, 3, 4, 5];
    console.log(...x);

    // bad
    new (Function.prototype.bind.apply(Date, [null, 2016, 08, 05]));

    // good
    new Date(...[2016, 08, 05]);
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="arrow-functions"></a>
## 箭头函数

  <a name="arrows--use-them"></a><a name="8.1"></a>
  - [8.1](#arrows--use-them) 当你必须使用函数表达式（或传递一个匿名函数）时，使用箭头函数符号。
  eslint: [`prefer-arrow-callback`](http://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](http://eslint.org/docs/rules/arrow-spacing.html) 
  jscs: [`requireArrowFunctions`](http://jscs.info/rule/requireArrowFunctions)

    > 为什么? 因为箭头函数会创建一个你通常最想要的 `this` 执行环境，而且语法也更简洁（译注：参考 [Arrow functions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 和 [ES6 arrow functions, syntax and lexical scoping](http://toddmotto.com/es6-arrow-functions-syntaxes-and-lexical-scoping/)），通常情况下都能满足你的需求，而且这样的写法更为简洁。

    > 为什么不？如果你有一个相当复杂的函数，你或许可以把逻辑部分转移到一个函数声明上。

    ```javascript
    // bad
    [1, 2, 3].map(function (x) {
      const y = x + 1;
      return x * y;
    });

    // good
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
    ```

  <a name="arrows--implicit-return"></a><a name="8.2"></a>
  - [8.2](#arrows--implicit-return) 如果一个函数适合用一行写出并且只有一个参数，那就把花括号、圆括号和 `return` 都省略掉。如果不是，那就不要省略。

  > 为什么? 这是语法糖。在链式调用中可读性很高。

  > 为什么不？当你打算回传一个对象的时候。

    ```javascript
    // bad
    [1, 2, 3].map(number => {
      const nextNumber = number + 1;
      `A string containing the ${nextNumber}.`;
    });

    // good
    [1, 2, 3].map(number => `A string containing the ${number}.`);

    // good
    [1, 2, 3].map((number) => {
      const nextNumber = number + 1;
      return `A string containing the ${nextNumber}.`;
    });

    // good
    [1, 2, 3].map((number, index) => ({
      [index]: number
    }));
    ```

  <a name="arrows--paren-wrap"></a><a name="8.3"></a>
  - [8.3](#arrows--paren-wrap) 如果表达式有多行，使用圆括号包裹，提高可读性。

    > 为什么? 这样能更清楚的看到开始和结束位置。

    ```js
    // bad
    ['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod
      )
    );

    // good
    ['get', 'post', 'put'].map(httpMethod => (
      Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod
      )
    ));
    ```

  <a name="arrows--one-arg-parens"></a><a name="8.4"></a>
  - [8.4](#arrows--one-arg-parens) 如果函数只有一个参数就不要使用圆括号，否则总是用圆括号包裹参数。
  eslint: [`arrow-parens`](http://eslint.org/docs/rules/arrow-parens.html) 
  jscs:  [`disallowParenthesesAroundArrowParam`](http://jscs.info/rule/disallowParenthesesAroundArrowParam)

    > 为什么? 更少的视觉干扰

    ```js
    // bad
    [1, 2, 3].map((x) => x * x);

    // good
    [1, 2, 3].map(x => x * x);

    // good
    [1, 2, 3].reduce((total, n) => {
      return total + n;
    }, 0);

    // good
    [1, 2, 3].map(number => (
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
    ));

    // bad
    [1, 2, 3].map(x => {
      const y = x + 1;
      return x * y;
    });

    // good
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
    ```

  <a name="arrows--confusing"></a><a name="8.5"></a>
  - [8.5](#arrows--confusing) 避免使用比较操作符 (`<=`, `>=`)，会混淆 箭头函数语法 (`=>`) 
  eslint: [`no-confusing-arrow`](http://eslint.org/docs/rules/no-confusing-arrow)

    ```js
    // bad
    const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

    // bad
    const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;

    // good
    const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

    // good
    const itemHeight = (item) => {
      const { height, largeSize, smallSize } = item;
      return height > 256 ? largeSize : smallSize;
    };
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="classes--constructors"></a>
## 类 & 构造器

  <a name="constructors--use-class"></a><a name="9.1"></a>
  - [9.1](#constructors--use-class) 总是使用 `class`。避免直接操作 `prototype` 。

    > 为什么? 因为 `class` 语法更为简洁更易读。

    ```javascript
    // bad
    function Queue(contents = []) {
      this.queue = [...contents];
    }
    Queue.prototype.pop = function () {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    };


    // good
    class Queue {
      constructor(contents = []) {
        this.queue = [...contents];
      }
      pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
      }
    }
    ```

  <a name="constructors--extends"></a><a name="9.2"></a>
  - [9.2](#constructors--extends) 使用 `extends` 继承。

  > 为什么? 因为 `extends` 是一个内建的原型继承方法并且不会破坏 `instanceof`。

    ```javascript
    // bad
    const inherits = require('inherits');
    function PeekableQueue(contents) {
      Queue.apply(this, contents);
    }
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = function () {
      return this.queue[0];
    }

    // good
    class PeekableQueue extends Queue {
      peek() {
        return this.queue[0];
      }
    }
    ```

  <a name="constructors--chaining"></a><a name="9.3"></a>
  - [9.3](#constructors--chaining) 方法可以返回 `this` 以便于链式调用。

    ```javascript
    // bad
    Jedi.prototype.jump = function () {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function (height) {
      this.height = height;
    };

    const luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20); // => undefined

    // good
    class Jedi {
      jump() {
        this.jumping = true;
        return this;
      }

      setHeight(height) {
        this.height = height;
        return this;
      }
    }

    const luke = new Jedi();

    luke.jump()
      .setHeight(20);
    ```


  <a name="constructors--tostring"></a><a name="9.4"></a>
  - [9.4](#constructors--tostring) 可以自定义 `toString()` 方法，但要确保它能正常运行并且不会引起副作用。

    ```javascript
    class Jedi {
      constructor(options = {}) {
        this.name = options.name || 'no name';
      }

      getName() {
        return this.name;
      }

      toString() {
        return `Jedi - ${this.getName()}`;
      }
    }
    ```

  <a name="constructors--no-useless"></a><a name="9.5"></a>
  - [9.5](#constructors--no-useless) 类有默认构造函数，书写一个空的构造函数是没必要的。
  eslint: [`no-useless-constructor`](http://eslint.org/docs/rules/no-useless-constructor)

    ```javascript
    // bad
    class Jedi {
      constructor() {}

      getName() {
        return this.name;
      }
    }

    // bad
    class Rey extends Jedi {
      constructor(...args) {
        super(...args);
      }
    }

    // good
    class Rey extends Jedi {
      constructor(...args) {
        super(...args);
        this.name = 'Rey';
      }
    }
    ```

  <a name="classes--no-duplicate-members"></a>
  - [9.6](#classes--no-duplicate-members) 避免类成员重复。
  eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members)

    > 为什么? 重复的类成员默认会使用最后一个——这肯定有一个错误存在。

    ```javascript
    // bad
    class Foo {
      bar() { return 1; }
      bar() { return 2; }
    }

    // good
    class Foo {
      bar() { return 1; }
    }

    // good
    class Foo {
      bar() { return 2; }
    }
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="modules"></a>
## 模块

  <a name="modules--use-them"></a><a name="10.1"></a>
  - [10.1](#modules--use-them) 总是使用模块 (`import`/`export`) 而不是其他非标准模块系统。你可以编译为你喜欢的模块系统。

  > 为什么? 模块就是未来，让我们开始迈向未来吧。
  > NOTE: 模块命名？（这个文件应该以驼峰命名，并在同名文件夹下，同时导出的时候名字一致）

    ```javascript
    // bad
    const AirbnbStyleGuide = require('./AirbnbStyleGuide');
    module.exports = AirbnbStyleGuide.es6;

    // ok
    import AirbnbStyleGuide from './AirbnbStyleGuide';
    export default AirbnbStyleGuide.es6;

    // best
    import { es6 } from './AirbnbStyleGuide';
    export default es6;

    // ES5中要注意
    // old
    // - 模块应该以 `!` 开始，这保证了如果一个有问题的模块忘记包含最后的分号在合并后不会出现错误
    // - 这个文件应该以驼峰命名，并在同名文件夹下，同时导出的时候名字一致
    // - 加入一个名为noConflict()的方法来设置导出的模块为之前的版本并返回它
    // - 总是在模块顶部声明 `'use strict';`
    ```

  <a name="modules--no-wildcard"></a><a name="10.2"></a>
  - [10.2](#modules--no-wildcard) 不要使用通配符 import。

  > 为什么? 这样能确保你只有一个默认 export。

    ```javascript
    // bad
    import * as AirbnbStyleGuide from './AirbnbStyleGuide';

    // good
    import AirbnbStyleGuide from './AirbnbStyleGuide';
    ```

  <a name="modules--no-export-from-import"></a><a name="10.3"></a>
  - [10.3](#modules--no-export-from-import) 不要从 import 中直接 export。

  > 为什么? 虽然一行代码简洁明了，但让 import 和 export 各司其职让事情能保持一致。

    ```javascript
    // bad
    // filename es6.js
    export { es6 as default } from './AirbnbStyleGuide';

    // good
    // filename es6.js
    import { es6 } from './AirbnbStyleGuide';
    export default es6;
    ```

  <a name="modules--no-duplicate-imports"></a>
  - [10.4](#modules--no-duplicate-imports) 一个模块只要一个 `import` 。
  eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

    > 为什么? 同一模块多个 `import` 导入，会使代码更难维护。

    ```javascript
    // bad
    import foo from 'foo';
    // … some other imports … //
    import { named1, named2 } from 'foo';

    // good
    import foo, { named1, named2 } from 'foo';

    // good
    import foo, {
      named1,
      named2,
    } from 'foo';
    ```

  <a name="modules--no-mutable-exports"></a>
  - [10.5](#modules--no-mutable-exports) 禁止 `export` 可写值输出，使用常量（Functions/Classes 暂时例外）。
  eslint: [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

    > 为什么? 避免全局使用时出现问题，除了某些特定情况下确实要这样用。一般来说，`export` 应该输出常量。

    ```javascript
    // bad
    var count = 3;
    export { count }

    // bad
    let foo = 3;
    export { foo }

    // good
    const foo = 3;
    export { foo }

    // valid
    export const count = 1
    export function getCount () {}
    export class Counter {}
    ```

  <a name="modules--prefer-default-export"></a>
  - [10.6](#modules--prefer-default-export) 单出口模块，更倾向设置为默认出口。
eslint: [`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

    ```javascript
    // bad
    export function foo() {}

    // good
    export default function foo() {}
    ```

  <a name="modules--imports-first"></a>
  - [10.7](#modules--imports-first) 把所有的 `import` 语句放在其他语句上面
eslint: [`import/imports-first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md)
    
    > 为什么? 把 `import` 提升, 保持将它们写在文件顶部是个好习惯。

    ```javascript
    // bad
    import foo from 'foo';
    foo.init();

    import bar from 'bar';

    // good
    import foo from 'foo';
    import bar from 'bar';

    foo.init();
    ```

  <a name="modules--multiline-imports-over-newlines"></a>
  - [10.8](#modules--multiline-imports-over-newlines) 多 `import` 入口，代码书写格式应与 `array` 和 `object` 保持一致。

    > 为什么? 大括号代码块、缩进以及逗号都保持风格一致

    ```javascript
    // bad
    import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

    // good
    import {
      longNameA,
      longNameB,
      longNameC,
      longNameD,
      longNameE,
    } from 'path';
    ```

  <a name="modules--no-webpack-loader-syntax"></a>
  - [10.9](#modules--no-webpack-loader-syntax) 不允许在 `import` 语句里包含 webpack 加载器语法。
eslint: [`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
    
    > 为什么? 加载器语法要在 `webpack.config.js` 中使用

    ```javascript
    // bad
    import fooSass from 'css!sass!foo.scss';
    import barCss from 'style!css!bar.css';

    // good
    import fooSass from 'foo.scss';
    import barCss from 'bar.css';
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="iterators-and-generators"></a>
## Iterators and Generators 迭代器 & 生成器

  <a name="iterators--nope"></a><a name="11.1"></a>
  - [11.1](#iterators--nope) 不要使用 iterators。使用高阶函数例如 `map()` 和 `reduce()` 替代 `for-in` or `for-of`。
  eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator.html) [`no-restricted-syntax`](http://eslint.org/docs/rules/no-restricted-syntax)

    > 为什么? 这加强了我们不变的规则。处理纯函数的回调值更易读，这比它带来的副作用更重要。

    > 使用迭代器 `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... 遍历数组，使用 `Object.keys()` / `Object.values()` / `Object.entries()` 遍历对象。
    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    // bad
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    sum === 15;

    // good
    let sum = 0;
    numbers.forEach(num => sum += num);
    sum === 15;

    // best (use the functional force)
    const sum = numbers.reduce((total, num) => total + num, 0);
    sum === 15;
    ```

  <a name="generators--nope"></a><a name="11.2"></a>
  - [11.2](#generators--nope) 现在还不要使用生成器 generators。

  > 为什么? 因为它们现在还没法很好地编译到 ES5。 (译者注：目前(2016/03) Chrome 和 Node.js 的稳定版本都已支持 generators)

  <a name="generators--spacing"></a>
  - [11.3](#generators--spacing) 如果你必须使用generators 或无视[generators 忠告](#generators--nope)，那么请务必确保函数签名(function*)是适当的间距。
  eslint: [`generator-star-spacing`](http://eslint.org/docs/rules/generator-star-spacing)

    > 为什么? `function` and `*` 是同一个关键词的不同组成部分—— `*` 不是 `function` 修饰符, `function*` 是一种特定结构, 不同于 `function`。

    ```js
    // bad
    function * foo() {
    }

    const bar = function * () {
    }

    const baz = function *() {
    }

    const quux = function*() {
    }

    function*foo() {
    }

    function *foo() {
    }

    // very bad
    function
    *
    foo() {
    }

    const wat = function
    *
    () {
    }

    // good
    function* foo() {
    }

    const foo = function* () {
    }
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="properties"></a>
## 属性

  <a name="properties--dot"></a><a name="12.1"></a>
  - [12.1](#properties--dot) 使用 `.` 符号来访问对象的属性。
  eslint: [`dot-notation`](http://eslint.org/docs/rules/dot-notation.html) 
  jscs: [`requireDotNotation`](http://jscs.info/rule/requireDotNotation)

    ```javascript
    const luke = {
      jedi: true,
      age: 28,
    };

    // bad
    const isJedi = luke['jedi'];

    // good
    const isJedi = luke.jedi;
    ```

  <a name="properties--bracket"></a><a name="12.2"></a>
  - [12.2](#properties--bracket) 当通过变量访问属性时使用中括号 `[]`。

    ```javascript
    const luke = {
      jedi: true,
      age: 28,
    };

    function getProp(prop) {
      return luke[prop];
    }

    const isJedi = getProp('jedi');
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="variables"></a>
## 变量

  <a name="variables--const"></a><a name="13.1"></a>
  - [13.1](#variables--const) 总是使用 `const` 来声明变量，如果不这样做就会产生全局变量。我们需要避免全局命名空间的污染。[地球队长](http://www.wikiwand.com/en/Captain_Planet)已经警告过我们了。
  （译注：全局，global 亦有全球的意思。地球队长的责任是保卫地球环境，所以他警告我们不要造成「全球」污染。）
  eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef) [`prefer-const`](http://eslint.org/docs/rules/prefer-const)

    ```javascript
    // bad
    superPower = new SuperPower();

    // good
    const superPower = new SuperPower();
    ```

  <a name="variables--one-const"></a><a name="13.2"></a>
  - [13.2](#variables--one-const) 使用 `const` 声明每一个变量。
  eslint: [`one-var`](http://eslint.org/docs/rules/one-var.html) jscs: [`disallowMultipleVarDecl`](http://jscs.info/rule/disallowMultipleVarDecl)

    > 为什么? 增加新变量将更容易，而且你永远不用再担心调换错 `;` or `,` ，并且 diff 工具下更少干扰。同时在 debugger 时，可以单步调试而不会一次跳过他们所有变量。

    ```javascript
    // bad
    const items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';

    // bad
    // (compare to above, and try to spot the mistake)
    const items = getItems(),
        goSportsTeam = true;
        dragonball = 'z';

    // good
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = 'z';
    ```

  <a name="variables--const-let-group"></a><a name="13.3"></a>
  - [13.3](#variables--const-let-group) 将所有的 `const` 和 `let` 分组

  > 为什么? 当你需要把已赋值变量赋值给未赋值变量时非常有用。

    ```javascript
    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;

    // good
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
    ```

  <a name="variables--define-where-used"></a><a name="13.4"></a>
  - [13.4](#variables--define-where-used) 在你需要的地方给变量赋值，但请把它们放在一个合理的位置。

  > 为什么? `let` 和 `const` 是块级作用域而不是函数作用域。
  
    ```javascript
    // bad - unnecessary function call
    function checkName(hasName) {
      const name = getName();

      if (hasName === 'test') {
        return false;
      }

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }

    // good
    function checkName(hasName) {
      if (hasName === 'test') {
        return false;
      }

      const name = getName();

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }
    ```
    
  <a name="variables--no-chain-assignment"></a><a name="13.5"></a>
  - [13.5](#variables--no-chain-assignment) 不使用链接变量赋值。

    > 为什么? 链接变量赋值会创建隐式全局变量。

    ```javascript
    // bad
    (function example() {
      // JavaScript interprets this as
      // let a = ( b = ( c = 1 ) );
      // The let keyword only applies to variable a; variables b and c become
      // global variables.
      let a = b = c = 1;
    }());

    console.log(a); // undefined
    console.log(b); // 1
    console.log(c); // 1

    // good
    (function example() {
      let a = 1;
      let b = a;
      let c = a;
    }());

    console.log(a); // undefined
    console.log(b); // undefined
    console.log(c); // undefined

    // the same applies for `const`
    ```

  <a name="variables--unary-increment-decrement"></a><a name="13.6"></a>
  - [13.6](#variables--unary-increment-decrement) 便面使用一元递增和递减操作 (++, --) 。
  eslint [`no-plusplus`](http://eslint.org/docs/rules/no-plusplus)

    > 为什么? 一元递增和递减语句默认在自动分号插入处理下会有错误问题。而且它还会出现 `num += 1` 替代 `num ++` 的情况。不允许使用它们，也可以代码更健壮。

    ```javascript
      // bad

      let array = [1, 2, 3];
      let num = 1;
      num ++;
      -- num;

      let sum = 0;
      let truthyCount = 0;
      for(let i = 0; i < array.length; i++){
        let value = array[i];
        sum += value;
        if (value) {
          truthyCount++;
        }
      }

      // good

      let array = [1, 2, 3];
      let num = 1;
      num += 1;
      num -= 1;

      const sum = array.reduce((a, b) => a + b, 0);
      const truthyCount = array.filter(Boolean).length;
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="hoisting"></a>
## Hoisting

  <a name="hoisting--about"></a><a name="14.1"></a>
  - [14.1](#hoisting--about) `var` 声明会被提升至该作用域的顶部，但它们赋值不会提升。`let` 和 `const` 被赋予了一种称为「[暂时性死区（Temporal Dead Zones, TDZ）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)」的概念。这对于了解为什么 [type of 不再安全](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15)相当重要。

    ```javascript
    // 我们知道这样运行不了（假设 notDefined 不是全局变量）
    function example() {
      console.log(notDefined); // => throws a ReferenceError
    }

    // 由于变量提升的原因，
    // 在引用变量后再声明变量是可以运行的。
    // **注意:** 变量赋值 `true` 的操作不会被提升。
    function example() {
      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;
    }

    // 编译器会把函数声明提升到作用域的顶层，
    // 这意味着我们的例子可以改写成这样：
    function example() {
      let declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }

    // 使用 const 和 let
    function example() {
      console.log(declaredButNotAssigned); // => throws a ReferenceError
      console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
      const declaredButNotAssigned = true;
    }
    ```

  <a name="hoisting--anon-expressions"></a><a name="14.2"></a>
  - [14.2](#hoisting--anon-expressions) 匿名函数表达式的变量名会被提升，但函数体并不会。

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function () {
        console.log('anonymous function expression');
      };
    }
    ```

  <a name="hoisting--named-expresions"></a><a name="14.3"></a>
  - [14.3](#hoisting--named-expresions) 命名的函数表达式的变量名会被提升，但函数名和函数体并不会。

    ```javascript
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {
        console.log('Flying');
      };
    }

    // the same is true when the function name
    // is the same as the variable name.
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {
        console.log('named');
      }
    }
    ```

  <a name="hoisting--declarations"></a><a name="14.4"></a>
  - [14.4](#hoisting--declarations) 函数声明的名称和函数体都会被提升。

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log('Flying');
      }
    }
    ```

  - For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) by [Ben Cherry](http://www.adequatelygood.com/).

  - 想了解更多信息，参考 [Ben Cherry](http://www.adequatelygood.com/) 的 [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting)。

**[⬆ 返回目录](#table-of-contents)**

<a name="comparison-operators--equality"></a>
## 比较运算符 & 等号

  <a name="comparison--eqeqeq"></a><a name="15.1"></a>
  - [15.1](#comparison--eqeqeq) 优先使用 `===` 和 `!==` 而不是 `==` 和 `!=` 。
  eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq.html)

  <a name="comparison--if"></a><a name="15.2"></a>
  - [15.2](#comparison--if) 条件表达式例如 `if` 语句通过抽象方法 `ToBoolean` 强制计算它们的表达式并且总是遵守下面的规则：

    + **Objects 对象** 被计算为 **true**
    + **Undefined** 被计算为 **false**
    + **Null** 被计算为 **false**
    + **Booleans 布尔值** 被计算为 **布尔的值**
    + **Numbers 数字** 如果是 **+0、-0、或 NaN** 被计算为 **false**, 否则为 **true**
    + **Strings 字符串** 如果是空字符串 `''` 被计算为 **false**，否则为 **true**

    ```javascript
    if ([0] && []) {
      // true
      // an array (even an empty one) is an object, objects will evaluate to true
    }
    ```

  <a name="comparison--shortcuts"></a><a name="15.3"></a>
  - [15.3](#comparison--shortcuts) 使用简写。

    ```javascript
    // bad
    if (isValid === true) {
      // ...stuff...
    }

    // good
    if (isValid) {
      // ...stuff...
    }

    // bad
    if (name) {
      // ...stuff...
    }

    // good
    if (name !== '') {
      // ...stuff...
    }

    // bad
    if (collection.length) {
      // ...stuff...
    }

    // good
    if (collection.length > 0) {
      // 为什么没用简写???
      // ...stuff...
    }
    ```

  <a name="comparison--moreinfo"></a><a name="15.4"></a>
  - [15.4](#comparison--moreinfo) 想了解更多信息，参考 Angus Croll 的 [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108)。

  <a name="comparison--switch-blocks"></a><a name="15.5"></a>
  - [15.5](#comparison--switch-blocks) `case` 以及 `default` 情况下使用括号会创建块级作用域 (e.g. `let`, `const`, `function`, and `class`).

  > 为什么? 变量声明在整个 `switch` 代码块中是可用的，但只有在执行到 `case` 并赋值时才初始化。多 `case` 中重复定义会导致问题。

  eslint rules: [`no-case-declarations`](http://eslint.org/docs/rules/no-case-declarations.html).

    ```javascript
    // ???
    // bad
    switch (foo) {
      case 1:
        let x = 1;
        break;
      case 2:
        const y = 2;
        break;
      case 3:
        function f() {}
        break;
      default:
        class C {}
    }

    // good
    switch (foo) {
      case 1: {
        let x = 1;
        break;
      }
      case 2: {
        const y = 2;
        break;
      }
      case 3: {
        function f() {}
        break;
      }
      case 4:
        bar();
        break;
      default: {
        class C {}
      }
    }
    ```

  <a name="comparison--nested-ternaries"></a><a name="15.6"></a>
  - [15.6](#comparison--nested-ternaries) 别嵌套使用三元表达式，要单个使用。

    eslint rules: [`no-nested-ternary`](http://eslint.org/docs/rules/no-nested-ternary.html).

    ```javascript
    // bad
    const foo = maybe1 > maybe2
      ? "bar"
      : value1 > value2 ? "baz" : null;

    // better
    const maybeNull = value1 > value2 ? 'baz' : null;

    const foo = maybe1 > maybe2
      ? 'bar'
      : maybeNull;

    // best
    const maybeNull = value1 > value2 ? 'baz' : null;

    const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
    ```

  <a name="comparison--unneeded-ternary"></a><a name="15.7"></a>
  - [15.7](#comparison--unneeded-ternary) 避免不必要使用三元表达式

    eslint rules: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary.html).

    ```javascript
    // bad
    const foo = a ? a : b;
    const bar = c ? true : false;
    const baz = c ? false : true;

    // good
    const foo = a || b;
    const bar = !!c;
    const baz = !c;
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="blocks"></a>
## 代码块

  <a name="blocks--braces"></a><a name="16.1"></a>
  - [16.1](#blocks--braces) 使用大括号包裹所有的多行代码块。

    ```javascript
    // bad
    if (test)
      return false;

    // good
    if (test) return false;

    // good
    if (test) {
      return false;
    }

    // bad
    function foo() { return false; }

    // good
    function bar() {
      return false;
    }
    ```

  <a name="blocks--cuddled-elses"></a><a name="16.2"></a>
  - [16.2](#blocks--cuddled-elses) 如果通过 `if` 和 `else` 使用多行代码块，把 `else` 放在 `if` 代码块关闭括号的同一行。

    ```javascript
    // bad
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }

    // good
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    ```


**[⬆ 返回目录](#table-of-contents)**

<a name="comments"></a>
## 注释

  <a name="comments--multiline"></a><a name="17.1"></a>
  - [17.1](#comments--multiline) 使用 `/** ... */` 作为多行注释。包含描述、指定所有参数和返回值的类型和值。

    ```javascript
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param {String} tag
    // @return {Element} element
    function make(tag) {

      // ...stuff...

      return element;
    }

    // good
    /**
     * make() returns a new element
     * based on the passed-in tag name
     *
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {

      // ...stuff...

      return element;
    }
    ```

  <a name="comments--singleline"></a><a name="17.2"></a>
  - [17.2](#comments--singleline) 单行注释使用 `//`，后紧跟一空格。在评论对象上面另起一行使用单行注释。在注释前插入空行。

    ```javascript
    // bad
    const active = true;  // is current tab

    // good
    // is current tab
    const active = true;

    // bad
    function getType() {
      console.log('fetching type...');
      // set the default type to 'no type'
      const type = this._type || 'no type';

      return type;
    }

    // good
    function getType() {
      console.log('fetching type...');

      // set the default type to 'no type'
      const type = this._type || 'no type';

      return type;
    }

    // also good
    function getType() {
      // set the default type to 'no type'
      const type = this._type || 'no type';

      return type;
    }
    ```

  <a name="comments--actionitems"></a><a name="17.3"></a>
  - [17.3](#comments--actionitems) 给注释增加 `FIXME` 或 `TODO` 的前缀可以帮助其他开发者快速了解这是一个需要复查的问题，或是给需要实现的功能提供一个解决方式。这将有别于常见的注释，因为它们是可操作的。使用 `FIXME -- need to figure this out` 或者 `TODO -- need to implement`。

  <a name="comments--fixme"></a><a name="17.4"></a>
  - [17.4](#comments--fixme) 使用 `// FIXME`: 标注问题。

    ```javascript
    class Calculator extends Abacus {
      constructor() {
        super();

        // FIXME: shouldn't use a global here
        total = 0;
      }
    }
    ```

  <a name="comments--todo"></a><a name="17.5"></a>
  - [17.5](#comments--todo) 使用 `// TODO`: 标注问题还需要解决。

    ```javascript
    class Calculator extends Abacus {
      constructor() {
        super();

        // TODO: total should be configurable by an options param
        this.total = 0;
      }
    }
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="whitespace"></a>
## 空白

  <a name="whitespace--spaces"></a><a name="18.1"></a>
  - [18.1](#whitespace--spaces) 使用 2 个空格作为缩进。
  eslint: [`indent`](http://eslint.org/docs/rules/indent.html) 
  jscs: [`validateIndentation`](http://jscs.info/rule/validateIndentation)

    ```javascript
    // bad
    function foo() {
    ∙∙∙∙const name;
    }

    // bad
    function bar() {
    ∙const name;
    }

    // good
    function baz() {
    ∙∙const name;
    }
    ```

  <a name="whitespace--before-blocks"></a><a name="18.2"></a>
  - [18.2](#whitespace--before-blocks) 在花括号前放一个空格。
  eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks.html) 
  jscs: [`requireSpaceBeforeBlockStatements`](http://jscs.info/rule/requireSpaceBeforeBlockStatements)

    ```javascript
    // bad
    function test(){
      console.log('test');
    }

    // good
    function test() {
      console.log('test');
    }

    // bad
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    });

    // good
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    });
    ```

  <a name="whitespace--around-keywords"></a><a name="18.3"></a>
  - [18.3](#whitespace--around-keywords) 在控制语句（`if`、`while` 等）的小括号前放一个空格。在函数调用及声明中，不在函数的参数列表前加空格。
  eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing.html) 
  jscs: [`requireSpaceAfterKeywords`](http://jscs.info/rule/requireSpaceAfterKeywords)

    ```javascript
    // bad
    if(isJedi) {
      fight ();
    }

    // good
    if (isJedi) {
      fight();
    }

    // bad
    function fight () {
      console.log ('Swooosh!');
    }

    // good
    function fight() {
      console.log('Swooosh!');
    }
    ```

  <a name="whitespace--infix-ops"></a><a name="18.4"></a>
  - [18.4](#whitespace--infix-ops) <a name='18.4'></a> 使用空格把运算符隔开。
  eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops.html) 
  jscs: [`requireSpaceBeforeBinaryOperators`](http://jscs.info/rule/requireSpaceBeforeBinaryOperators), [`requireSpaceAfterBinaryOperators`](http://jscs.info/rule/requireSpaceAfterBinaryOperators)

    ```javascript
    // bad
    const x=y+5;

    // good
    const x = y + 5;
    ```

  <a name="whitespace--newline-at-end"></a><a name="18.5"></a>
  - [18.5](#whitespace--newline-at-end) 在文件末尾插入一个空行。
  eslint: [`eol-last`](https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md)

    ```javascript
    // bad
    (function (global) {
      // ...stuff...
    })(this);
    ```

    ```javascript
    // bad
    (function (global) {
      // ...stuff...
    })(this);↵
    ↵
    ```

    ```javascript
    // good
    (function (global) {
      // ...stuff...
    })(this);↵
    ```

  <a name="whitespace--chains"></a><a name="18.6"></a>
  - [18.6](#whitespace--chains) 在使用长方法链时进行缩进。以 `.` 起行并缩进，强调这是方法调用而不是新语句。
  eslint: [`newline-per-chained-call`](http://eslint.org/docs/rules/newline-per-chained-call) [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

    ```javascript
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // bad
    $('#items').
      find('.selected').
        highlight().
        end().
      find('.open').
        updateCount();

    // good
    $('#items')
      .find('.selected')
        .highlight()
        .end()
      .find('.open')
        .updateCount();

    // bad
    const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
        .attr('width', (radius + margin) * 2).append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);

    // good
    const leds = stage.selectAll('.led')
        .data(data)
      .enter().append('svg:svg')
        .classed('led', true)
        .attr('width', (radius + margin) * 2)
      .append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);
    
    // good
    const leds = stage.selectAll('.led').data(data);
    ```

  <a name="whitespace--after-blocks"></a><a name="18.7"></a>
  - [18.7](#whitespace--after-blocks) 在块末和新语句前插入空行。
  jscs: [`requirePaddingNewLinesAfterBlocks`](http://jscs.info/rule/requirePaddingNewLinesAfterBlocks)

    ```javascript
    // bad
    if (foo) {
      return bar;
    }
    return baz;

    // good
    if (foo) {
      return bar;
    }

    return baz;

    // bad
    const obj = {
      foo() {
      },
      bar() {
      },
    };
    return obj;

    // good
    const obj = {
      foo() {
      },

      bar() {
      },
    };

    return obj;

    // bad
    const arr = [
      function foo() {
      },
      function bar() {
      },
    ];
    return arr;

    // good
    const arr = [
      function foo() {
      },

      function bar() {
      },
    ];

    return arr;
    ```

  <a name="whitespace--padded-blocks"></a><a name="18.8"></a>
  - [18.8](#whitespace--padded-blocks) Do not pad your blocks with blank lines. eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks.html) jscs:  [`disallowPaddingNewlinesInBlocks`](http://jscs.info/rule/disallowPaddingNewlinesInBlocks)

    ```javascript
    // bad
    function bar() {

      console.log(foo);

    }

    // also bad
    if (baz) {

      console.log(qux);
    } else {
      console.log(foo);

    }

    // good
    function bar() {
      console.log(foo);
    }

    // good
    if (baz) {
      console.log(qux);
    } else {
      console.log(foo);
    }
    ```

  <a name="whitespace--in-parens"></a><a name="18.9"></a>
  - [18.9](#whitespace--in-parens) Do not add spaces inside parentheses. eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens.html) jscs: [`disallowSpacesInsideParentheses`](http://jscs.info/rule/disallowSpacesInsideParentheses)

    ```javascript
    // bad
    function bar( foo ) {
      return foo;
    }

    // good
    function bar(foo) {
      return foo;
    }

    // bad
    if ( foo ) {
      console.log(foo);
    }

    // good
    if (foo) {
      console.log(foo);
    }
    ```

  <a name="whitespace--in-brackets"></a><a name="18.10"></a>
  - [18.10](#whitespace--in-brackets) Do not add spaces inside brackets. eslint: [`array-bracket-spacing`](http://eslint.org/docs/rules/array-bracket-spacing.html) jscs: [`disallowSpacesInsideArrayBrackets`](http://jscs.info/rule/disallowSpacesInsideArrayBrackets)

    ```javascript
    // bad
    const foo = [ 1, 2, 3 ];
    console.log(foo[ 0 ]);

    // good
    const foo = [1, 2, 3];
    console.log(foo[0]);
    ```

  <a name="whitespace--in-braces"></a><a name="18.11"></a>
  - [18.11](#whitespace--in-braces) Add spaces inside curly braces. eslint: [`object-curly-spacing`](http://eslint.org/docs/rules/object-curly-spacing.html) jscs: [`requireSpacesInsideObjectBrackets`](http://jscs.info/rule/requireSpacesInsideObjectBrackets)

    ```javascript
    // bad
    const foo = {clark: 'kent'};

    // good
    const foo = { clark: 'kent' };
    ```

  <a name="whitespace--max-len"></a><a name="18.12"></a>
  - [18.12](#whitespace--max-len) Avoid having lines of code that are longer than 100 characters (including whitespace). Note: per [above](#strings--line-length), long strings are exempt from this rule, and should not be broken up. eslint: [`max-len`](http://eslint.org/docs/rules/max-len.html) jscs: [`maximumLineLength`](http://jscs.info/rule/maximumLineLength)

    > Why? This ensures readability and maintainability.

    ```javascript
    // bad
    const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

    // bad
    $.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

    // good
    const foo = jsonData
      && jsonData.foo
      && jsonData.foo.bar
      && jsonData.foo.bar.baz
      && jsonData.foo.bar.baz.quux
      && jsonData.foo.bar.baz.quux.xyzzy;

    // good
    $.ajax({
      method: 'POST',
      url: 'https://airbnb.com/',
      data: { name: 'John' },
    })
      .done(() => console.log('Congratulations!'))
      .fail(() => console.log('You have failed this city.'));
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="commas"></a>
## 逗号

<a name="commas--leading-trailing"></a><a name="19.1"></a>
  - [19.1](#commas--leading-trailing) 行首逗号：**不需要**。
  eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style.html) 
  jscs: [`requireCommaBeforeLineBreak`](http://jscs.info/rule/requireCommaBeforeLineBreak)

    ```javascript
    // bad
    const story = [
        once
      , upon
      , aTime
    ];

    // good
    const story = [
      once,
      upon,
      aTime,
    ];

    // bad
    const hero = {
        firstName: 'Ada'
      , lastName: 'Lovelace'
      , birthYear: 1815
      , superPower: 'computers'
    };

    // good
    const hero = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthYear: 1815,
      superPower: 'computers',
    };
    ```

  <a name="commas--dangling"></a><a name="19.2"></a>
  - [19.2](#commas--dangling) 增加结尾的逗号: **需要**。
  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle.html) 
  jscs: [`requireTrailingComma`](http://jscs.info/rule/requireTrailingComma)

  > 为什么? 这会让 git diffs 更干净。另外，像 babel 这样的转译器会移除结尾多余的逗号，也就是说你不必担心老旧浏览器的[尾逗号问题](https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas)。

    ```javascript
    // bad - git diff without trailing comma
    const hero = {
         firstName: 'Florence',
    -    lastName: 'Nightingale'
    +    lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing']
    };

    // good - git diff with trailing comma
    const hero = {
         firstName: 'Florence',
         lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing'],
    };

    // bad
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully'
    };

    const heroes = [
      'Batman',
      'Superman'
    ];

    // good
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully',
    };

    const heroes = [
      'Batman',
      'Superman',
    ];
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="semicolons"></a>
## 分号

  <a name="semicolons--required"></a><a name="20.1"></a>
  - [20.1](#semicolons--required) **使用分号**
  eslint: [`semi`](http://eslint.org/docs/rules/semi.html)
  jscs: [`requireSemicolons`](http://jscs.info/rule/requireSemicolons)

    ```javascript
    // bad
    (function () {
      const name = 'Skywalker'
      return name
    })()

    // good
    (function () {
      const name = 'Skywalker';
      return name;
    }());

    // good (防止函数在两个 IIFE 合并时被当成一个参数)
    ;(() => {
      const name = 'Skywalker';
      return name;
    }());
    ```

    [Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214%237365214).

**[⬆ 返回目录](#table-of-contents)**

<a name="type-casting--coercion"></a>
## 类型转换

  <a name="coercion--explicit"></a><a name="21.1"></a>
  - [21.1](#coercion--explicit) 在语句开始时执行类型转换。

  <a name="coercion--strings"></a><a name="21.2"></a>
  - [21.2](#coercion--strings) 字符串：

    ```javascript
    // => this.reviewScore = 9;

    // bad
    const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

    // bad
    const totalScore = this.reviewScore.toString(); // isn't guaranteed to return a string

    // good
    const totalScore = String(this.reviewScore);
    ```

  <a name="coercion--numbers"></a><a name="21.3"></a>
  - [21.3](#coercion--numbers) 数字：对数字使用 `parseInt` 转换，并带上类型转换的基数。
  eslint: [`radix`](http://eslint.org/docs/rules/radix)

    ```javascript
    const inputValue = '4';

    // bad
    const val = new Number(inputValue);

    // bad
    const val = +inputValue;

    // bad
    const val = inputValue >> 0;

    // bad
    const val = parseInt(inputValue);

    // good
    const val = Number(inputValue);

    // good
    const val = parseInt(inputValue, 10);
    ```

  <a name="coercion--comment-deviations"></a><a name="21.4"></a>
  - [21.4](#coercion--comment-deviations) 如果因为某些原因 parseInt 成为你所做的事的瓶颈而需要使用位操作解决[性能问题](http://jsperf.com/coercion-vs-casting/3)时，留个注释说清楚原因和你的目的。

    ```javascript
    // good
    /**
     * 使用 parseInt 导致我的程序变慢，
     * 改成使用位操作转换数字快多了。
     */
    const val = inputValue >> 0;
    ```

  <a name="coercion--bitwise"></a><a name="21.5"></a>
  - [21.5](#coercion--bitwise) **注意:** 小心使用位操作运算符。数字会被当成 [64 位值](http://es5.github.io/#x4.3.19)，但是位操作运算符总是返回 32 位的整数（[参考](http://es5.github.io/#x11.7)）。位操作处理大于 32 位的整数值时还会导致意料之外的行为。[关于这个问题的讨论](https://github.com/airbnb/javascript/issues/109)。最大的 32 位整数是 2,147,483,647：

    ```javascript
    2147483647 >> 0 //=> 2147483647
    2147483648 >> 0 //=> -2147483648
    2147483649 >> 0 //=> -2147483647
    ```

  <a name="coercion--booleans"></a><a name="21.6"></a>
  - [21.6](#coercion--booleans) 布尔运算:

    ```javascript
    const age = 0;

    // bad
    const hasAge = new Boolean(age);

    // good
    const hasAge = Boolean(age);

    // best
    const hasAge = !!age;
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="naming-conventions"></a>
## 命名规则

  <a name="naming--descriptive"></a><a name="22.1"></a>
  - [22.1](#naming--descriptive) 避免单字母命名。命名应具备描述性。
  eslint: [`id-length`](http://eslint.org/docs/rules/id-length)

    ```javascript
    // bad
    function q() {
      // ...stuff...
    }

    // good
    function query() {
      // ..stuff..
    }
    ```

  <a name="naming--camelCase"></a><a name="22.2"></a>
  - [22.2](#naming--camelCase) 使用驼峰式（camelCase、小驼峰）命名变量、对象、函数和实例。
  eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase.html) 
  jscs: [`requireCamelCaseOrUpperCaseIdentifiers`](http://jscs.info/rule/requireCamelCaseOrUpperCaseIdentifiers)

    ```javascript
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}

    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

  <a name="naming--PascalCase"></a><a name="22.3"></a>
  - [22.3](#naming--PascalCase) 使用帕斯卡式（PascalCase、大驼峰式）命名构造函数或类。
  eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap.html) 
  jscs: [`requireCapitalizedConstructors`](http://jscs.info/rule/requireCapitalizedConstructors)

    Pascal命名法：单字之间不以空格断开或连接号（-）、底线（_）连结，第一个单字首字母采用大写字母；后续单字的首字母亦用大写字母

    ```javascript
    // bad
    function user(options) {
      this.name = options.name;
    }

    const bad = new user({
      name: 'nope',
    });

    // good
    class User {
      constructor(options) {
        this.name = options.name;
      }
    }

    const good = new User({
      name: 'yup',
    });
    ```

  <a name="naming--leading-underscore"></a><a name="22.4"></a>
  - [22.4](#naming--leading-underscore) 不要使用尾随或前导下划线来命名私有属性。
  eslint: [`no-underscore-dangle`](http://eslint.org/docs/rules/no-underscore-dangle.html) 
  jscs: [`disallowDanglingUnderscores`](http://jscs.info/rule/disallowDanglingUnderscores)

    > 为什么? JavaScript没有在属性或方法方面的隐私权的概念。虽然一个领先的下划线是一个共同的公约，意思是“私人”，事实上，这些属性是完全公开的，因此，是你的公共API合同的一部分。这个约定可能会导致开发人员错误地认为一个变化不算是中断，或者不需要测试。TL；DR：如果你想要的东西是“私人的”，它不应该可见。

    ```javascript
    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';
    this._firstName = 'Panda';

    // good
    this.firstName = 'Panda';
    ```

  <a name="naming--self-this"></a><a name="22.5"></a>
  - [22.5](#naming--self-this) 别保存 `this` 的引用。应使用箭头函数或函数绑定 [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)。
  jscs: [`disallowNodeTypes`](http://jscs.info/rule/disallowNodeTypes)

    ```javascript
    // bad
    function foo() {
      const self = this;
      return function () {
        console.log(self);
      };
    }

    // bad
    function foo() {
      const that = this;
      return function () {
        console.log(that);
      };
    }

    // good
    function foo() {
      return () => {
        console.log(this);
      };
    }
    ```

  <a name="naming--filename-matches-export"></a><a name="22.6"></a>
  - [22.6](#naming--filename-matches-export) 如果你的文件只输出一个类，那你的文件名必须和类名完全保持一致。

    ```javascript
    // file 1 contents
    class CheckBox {
      // ...
    }
    export default CheckBox;

    // file 2 contents
    export default function fortyTwo() { return 42; }

    // file 3 contents
    export default function insideDirectory() {}

    // in some other file
    // bad
    import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
    import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
    import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

    // bad
    import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
    import forty_two from './forty_two'; // snake_case import/filename, camelCase export
    import inside_directory from './inside_directory'; // snake_case import, camelCase export
    import index from './inside_directory/index'; // requiring the index file explicitly
    import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

    // good
    import CheckBox from './CheckBox'; // PascalCase export/import/filename
    import fortyTwo from './fortyTwo'; // camelCase export/import/filename
    import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
    // ^ supports both insideDirectory.js and insideDirectory/index.js
    ```

  <a name="naming--camelCase-default-export"></a><a name="22.7"></a>
  - [22.7](#naming--camelCase-default-export) 当你导出默认的函数时使用驼峰式命名camelCase。你的文件名必须和函数名完全保持一致。

    ```javascript
    function makeStyleGuide() {
    }

    export default makeStyleGuide;
    ```

  <a name="naming--PascalCase-singleton"></a><a name="22.8"></a>
  - [22.8](#naming--PascalCase-singleton) 当你导出构造函数、类、单例、函数库、空对象时使用帕斯卡式命名PascalCase。

    ```javascript
    const AirbnbStyleGuide = {
      es6: {
      }
    };

    export default AirbnbStyleGuide;
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="accessors"></a>
## 存取器

  <a name="accessors--not-required"></a><a name="23.1"></a>
  - [23.1](#accessors--not-required) 属性的存取函数不是必须的。

  <a name="accessors--no-getters-setters"></a><a name="23.2"></a>
  - [23.2](#accessors--no-getters-setters) 不要使用 getters/setters 有可能引起副作用，很难测试、维护、调试。如果你需要存取函数时使用 `getVal()` 和 `setVal(value)`。

    ```javascript
    // bad
    class Dragon {
      get age() {
        // ...
      }

      set age(value) {
        // ...
      }
    }

    // good
    class Dragon {
      getAge() {
        // ...
      }

      setAge(value) {
        // ...
      }
    }
    ```

  <a name="accessors--boolean-prefix"></a><a name="23.3"></a>
  - [23.3](#accessors--boolean-prefix) 如果属性或方法是布尔值，使用 `isVal()` 或 `hasVal()` 判断。

    ```javascript
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
    ```

  <a name="accessors--consistent"></a><a name="23.4"></a>
  - [23.4](#accessors--consistent) 可以创建 `get()` 和 `set()` 函数，但要保持一致。

    ```javascript
    class Jedi {
      constructor(options = {}) {
        const lightsaber = options.lightsaber || 'blue';
        this.set('lightsaber', lightsaber);
      }

      set(key, val) {
        this[key] = val;
      }

      get(key) {
        return this[key];
      }
    }
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="events"></a>
## 事件

  <a name="events--hash"></a><a name="24.1"></a>
  - [24.1](#events--hash) 当给事件附加数据时（无论是 DOM 事件还是私有事件），传入一个哈希而不是原始值。这样可以让后面的贡献者增加更多数据到事件数据而无需找出并更新事件的每一个处理器。例如，不好的写法：

    ```javascript
    // bad
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', (e, listingId) => {
      // do something with listingId
    });
    ```

    prefer 更好的写法：

    ```javascript
    // good
    $(this).trigger('listingUpdated', { listingId: listing.id });

    ...

    $(this).on('listingUpdated', (e, data) => {
      // do something with data.listingId
    });
    ```

  **[⬆ 返回目录](#table-of-contents)**

## jQuery

  <a name="jquery--dollar-prefix"></a><a name="25.1"></a>
  - [25.1](#jquery--dollar-prefix) 使用 `$` 作为存储 jQuery 对象的变量名前缀。
  jscs: [`requireDollarBeforejQueryAssignment`](http://jscs.info/rule/requireDollarBeforejQueryAssignment)

    ```javascript
    // bad
    const sidebar = $('.sidebar');

    // good
    const $sidebar = $('.sidebar');

    // good
    const $sidebarBtn = $('.sidebar-btn');
    ```

  <a name="jquery--cache"></a><a name="25.2"></a>
  - [25.2](#jquery--cache) 缓存 jQuery 查询。

    ```javascript
    // bad
    function setSidebar() {
      $('.sidebar').hide();

      // ...stuff...

      $('.sidebar').css({
        'background-color': 'pink'
      });
    }

    // good
    function setSidebar() {
      const $sidebar = $('.sidebar');
      $sidebar.hide();

      // ...stuff...

      $sidebar.css({
        'background-color': 'pink'
      });
    }
    ```

  <a name="jquery--queries"></a><a name="25.3"></a>
  - [25.3](#jquery--queries) 对 DOM 查询使用层叠 `$('.sidebar ul')` 或 父元素 > 子元素 `$('.sidebar > ul')`。 
  [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)
  
  <a name="jquery--find"></a><a name="25.4"></a>
  - [25.4](#jquery--find) 对有作用域的 jQuery 对象查询使用 `find`。

    ```javascript
    // bad
    $('ul', '.sidebar').hide();

    // bad
    $('.sidebar').find('ul').hide();

    // good
    $('.sidebar ul').hide();

    // good
    $('.sidebar > ul').hide();

    // good
    $sidebar.find('ul').hide();

    // good (slower)
    $sidebar.find('ul');

    // good (faster)
    $($sidebar[0]).find('ul');
    ```

**[⬆ 返回目录](#table-of-contents)**

<a name="ecmascript-5-compatibility"></a>
## ECMAScript 5 兼容性

  <a name="es5-compat--kangax"></a><a name="26.1"></a>
  - [26.1](#es5-compat--kangax) 参考 [Kangax](https://twitter.com/kangax/) 的 ES5 [兼容性](http://kangax.github.com/es5-compat-table/).

**[⬆ 返回目录](#table-of-contents)**

<a name="ecmascript-6-styles"></a>
## ECMAScript 6（ES 2015+）规范

  <a name="es6-styles"></a><a name="27.1"></a>
  - [27.1](#es6-styles) 以下是链接到 ES6 的各个特性的列表。

1. [Arrow Functions](#arrow-functions)
1. [Classes](#classes--constructors)
1. [Object Shorthand](#es6-object-shorthand)
1. [Object Concise](#es6-object-concise)
1. [Object Computed Properties](#es6-computed-properties)
1. [Template Strings](#es6-template-literals)
1. [Destructuring](#destructuring)
1. [Default Parameters](#es6-default-parameters)
1. [Rest](#es6-rest)
1. [Array Spreads](#es6-array-spreads)
1. [Let and Const](#references)
1. [Iterators and Generators](#iterators-and-generators)
1. [Modules](#modules)

  <a name="tc39-proposals"></a>
  - [27.2](#tc39-proposals) Do not use [TC39 proposals](https://github.com/tc39/proposals) that have not reached stage 3.

    > Why? [They are not finalized](https://tc39.github.io/process-document/), and they are subject to change or to be withdrawn entirely. We want to use JavaScript, and proposals are not JavaScript yet.

**[⬆ 返回目录](#table-of-contents)**

<a name="testing"></a>
## 测试

  <a name="testing--yup"></a><a name="28.1"></a>
  - [28.1](#testing--yup) **Yup.**

    ```javascript
    function foo() {
      return true;
    }
    ```

  <a name="testing--for-real"></a><a name="28.2"></a>
  - [28.2](#testing--for-real) **No, but seriously**:
  
   - Whichever testing framework you use, you should be writing tests!
   - Strive to write many small pure functions, and minimize where mutations occur.
   - Be cautious about stubs and mocks - they can make your tests more brittle.
   - We primarily use [`mocha`](https://www.npmjs.com/package/mocha) at Airbnb. [`tape`](https://www.npmjs.com/package/tape) is also used occasionally for small, separate modules.
   - 100% test coverage is a good goal to strive for, even if it's not always practical to reach it.
   - Whenever you fix a bug, _write a regression test_. A bug fixed without a regression test is almost certainly going to break again in the future.

**[⬆ 返回目录](#table-of-contents)**

<a name="performance"></a>
## 性能

  - [On Layout & Web Performance](https://www.kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](https://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](https://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](https://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](https://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](https://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](https://jsperf.com/ya-string-concat)
  - [Are Javascript functions like `map()`, `reduce()`, and `filter()` optimized for traversing arrays?](https://www.quora.com/JavaScript-programming-language-Are-Javascript-functions-like-map-reduce-and-filter-already-optimized-for-traversing-array/answer/Quildreen-Motta)
  - Loading...

**[⬆ 返回目录](#table-of-contents)**

<a name="resources"></a>
## 资源

**Learning ES6**

  - [Draft ECMA 2015 (ES6) Spec](https://people.mozilla.org/~jorendorff/es6-draft.html)
  - [ExploringJS](http://exploringjs.com/)
  - [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)
  - [Comprehensive Overview of ES6 Features](http://es6-features.org/)

**Read This**

  - [Standard ECMA-262](http://www.ecma-international.org/ecma-262/6.0/index.html)
  - old [Annotated ECMAScript 5.1](http://es5.github.com/)

**Tools**

  - Code Style Linters
    + [ESlint](http://eslint.org/) - [Airbnb Style .eslintrc](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc)
    + [JSHint](http://jshint.com/) - [Airbnb Style .jshintrc](https://github.com/airbnb/javascript/blob/master/linters/.jshintrc)
    + [JSCS](https://github.com/jscs-dev/node-jscs) - [Airbnb Style Preset](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json)

**Other Style Guides**

  - [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
  - [jQuery Core Style Guidelines](https://contribute.jquery.org/style-guide/js/)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)

**Other Styles**

  - [Naming this in nested functions](https://gist.github.com/cjohansen/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52) - Ross Allen
  - [Popular JavaScript Coding Conventions on GitHub](http://sideeffect.kr/popularconvention/#javascript) - JeongHoon Byun
  - [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) - Ben Alman

**Further Reading**

  - [Understanding JavaScript Closures](https://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
  - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
  - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban
  - [Frontend Guidelines](https://github.com/bendc/frontend-guidelines) - Benjamin De Cock

**Books**

  - [JavaScript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
  - [JavaScript Patterns](https://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
  - [Pro JavaScript Design Patterns](https://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
  - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](https://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
  - [Maintainable JavaScript](https://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
  - [JavaScript Web Applications](https://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
  - [Pro JavaScript Techniques](https://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
  - [Smashing Node.js: JavaScript Everywhere](https://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
  - [Secrets of the JavaScript Ninja](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
  - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
  - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
  - [JSBooks](http://jsbooks.revolunet.com/) - Julien Bouquillon
  - [Third Party JavaScript](https://www.manning.com/books/third-party-javascript) - Ben Vinegar and Anton Kovalyov
  - [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://amzn.com/0321812182) - David Herman
  - [Eloquent JavaScript](http://eloquentjavascript.net/) - Marijn Haverbeke
  - [You Don't Know JS: ES6 & Beyond](http://shop.oreilly.com/product/0636920033769.do) - Kyle Simpson

**Blogs**

  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](https://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](https://bocoup.com/weblog)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](https://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://code.tutsplus.com/?s=javascript)

**播客 Podcasts**

  - [JavaScript Air](https://javascriptair.com/)
  - [JavaScript Jabber](https://devchat.tv/js-jabber/)


**[⬆ 返回目录](#table-of-contents)**

## <a name="in-the-wild">使用人群</a>

  This is a list of organizations that are using this style guide. Send us a pull request and we'll add you to the list.

  - **4Catalyzer**: [4Catalyzer/javascript](https://github.com/4Catalyzer/javascript)
  - **Aan Zee**: [AanZee/javascript](https://github.com/AanZee/javascript)
  - **Adult Swim**: [adult-swim/javascript](https://github.com/adult-swim/javascript)
  - **Airbnb**: [airbnb/javascript](https://github.com/airbnb/javascript)
  - **Apartmint**: [apartmint/javascript](https://github.com/apartmint/javascript)
  - **Ascribe**: [ascribe/javascript](https://github.com/ascribe/javascript)
  - **Avalara**: [avalara/javascript](https://github.com/avalara/javascript)
  - **Avant**: [avantcredit/javascript](https://github.com/avantcredit/javascript)
  - **Billabong**: [billabong/javascript](https://github.com/billabong/javascript)
  - **Bisk**: [bisk/javascript](https://github.com/Bisk/javascript/)
  - **Blendle**: [blendle/javascript](https://github.com/blendle/javascript)
  - **Brainshark**: [brainshark/javascript](https://github.com/brainshark/javascript)
  - **Chartboost**: [ChartBoost/javascript-style-guide](https://github.com/ChartBoost/javascript-style-guide)
  - **ComparaOnline**: [comparaonline/javascript](https://github.com/comparaonline/javascript-style-guide)
  - **Compass Learning**: [compasslearning/javascript-style-guide](https://github.com/compasslearning/javascript-style-guide)
  - **DailyMotion**: [dailymotion/javascript](https://github.com/dailymotion/javascript)
  - **DoSomething**: [DoSomething/eslint-config](https://github.com/DoSomething/eslint-config)
  - **Digitpaint** [digitpaint/javascript](https://github.com/digitpaint/javascript)
  - **Ecosia**: [ecosia/javascript](https://github.com/ecosia/javascript)
  - **Evernote**: [evernote/javascript-style-guide](https://github.com/evernote/javascript-style-guide)
  - **Evolution Gaming**: [evolution-gaming/javascript](https://github.com/evolution-gaming/javascript)
  - **EvozonJs**: [evozonjs/javascript](https://github.com/evozonjs/javascript)
  - **ExactTarget**: [ExactTarget/javascript](https://github.com/ExactTarget/javascript)
  - **Expensify** [Expensify/Style-Guide](https://github.com/Expensify/Style-Guide/blob/master/javascript.md)
  - **Flexberry**: [Flexberry/javascript-style-guide](https://github.com/Flexberry/javascript-style-guide)
  - **Gawker Media**: [gawkermedia/javascript](https://github.com/gawkermedia/javascript)
  - **General Electric**: [GeneralElectric/javascript](https://github.com/GeneralElectric/javascript)
  - **GoodData**: [gooddata/gdc-js-style](https://github.com/gooddata/gdc-js-style)
  - **Grooveshark**: [grooveshark/javascript](https://github.com/grooveshark/javascript)
  - **How About We**: [howaboutwe/javascript](https://github.com/howaboutwe/javascript-style-guide)
  - **Huballin**: [huballin/javascript](https://github.com/huballin/javascript)
  - **HubSpot**: [HubSpot/javascript](https://github.com/HubSpot/javascript)
  - **Hyper**: [hyperoslo/javascript-playbook](https://github.com/hyperoslo/javascript-playbook/blob/master/style.md)
  - **InfoJobs**: [InfoJobs/JavaScript-Style-Guide](https://github.com/InfoJobs/JavaScript-Style-Guide)
  - **Intent Media**: [intentmedia/javascript](https://github.com/intentmedia/javascript)
  - **Jam3**: [Jam3/Javascript-Code-Conventions](https://github.com/Jam3/Javascript-Code-Conventions)
  - **JeopardyBot**: [kesne/jeopardy-bot](https://github.com/kesne/jeopardy-bot/blob/master/STYLEGUIDE.md)
  - **JSSolutions**: [JSSolutions/javascript](https://github.com/JSSolutions/javascript)
  - **KickorStick**: [kickorstick/javascript](https://github.com/kickorstick/javascript)
  - **Kinetica Solutions**: [kinetica/javascript](https://github.com/kinetica/Javascript-style-guide)
  - **Lonely Planet**: [lonelyplanet/javascript](https://github.com/lonelyplanet/javascript)
  - **M2GEN**: [M2GEN/javascript](https://github.com/M2GEN/javascript)
  - **Mighty Spring**: [mightyspring/javascript](https://github.com/mightyspring/javascript)
  - **MinnPost**: [MinnPost/javascript](https://github.com/MinnPost/javascript)
  - **MitocGroup**: [MitocGroup/javascript](https://github.com/MitocGroup/javascript)
  - **ModCloth**: [modcloth/javascript](https://github.com/modcloth/javascript)
  - **Money Advice Service**: [moneyadviceservice/javascript](https://github.com/moneyadviceservice/javascript)
  - **Muber**: [muber/javascript](https://github.com/muber/javascript)
  - **National Geographic**: [natgeo/javascript](https://github.com/natgeo/javascript)
  - **National Park Service**: [nationalparkservice/javascript](https://github.com/nationalparkservice/javascript)
  - **Nimbl3**: [nimbl3/javascript](https://github.com/nimbl3/javascript)
  - **Orion Health**: [orionhealth/javascript](https://github.com/orionhealth/javascript)
  - **OutBoxSoft**: [OutBoxSoft/javascript](https://github.com/OutBoxSoft/javascript)
  - **Peerby**: [Peerby/javascript](https://github.com/Peerby/javascript)
  - **Razorfish**: [razorfish/javascript-style-guide](https://github.com/razorfish/javascript-style-guide)
  - **reddit**: [reddit/styleguide/javascript](https://github.com/reddit/styleguide/tree/master/javascript)
  - **React**: [/facebook/react/blob/master/CONTRIBUTING.md#style-guide](https://github.com/facebook/react/blob/master/CONTRIBUTING.md#style-guide)
  - **REI**: [reidev/js-style-guide](https://github.com/rei/code-style-guides/blob/master/docs/javascript.md)
  - **Ripple**: [ripple/javascript-style-guide](https://github.com/ripple/javascript-style-guide)
  - **SeekingAlpha**: [seekingalpha/javascript-style-guide](https://github.com/seekingalpha/javascript-style-guide)
  - **Shutterfly**: [shutterfly/javascript](https://github.com/shutterfly/javascript)
  - **Springload**: [springload/javascript](https://github.com/springload/javascript)
  - **StratoDem Analytics**: [stratodem/javascript](https://github.com/stratodem/javascript)
  - **SteelKiwi Development**: [steelkiwi/javascript](https://github.com/steelkiwi/javascript)
  - **StudentSphere**: [studentsphere/javascript](https://github.com/studentsphere/guide-javascript)
  - **SysGarage**: [sysgarage/javascript-style-guide](https://github.com/sysgarage/javascript-style-guide)
  - **Syzygy Warsaw**: [syzygypl/javascript](https://github.com/syzygypl/javascript)
  - **Target**: [target/javascript](https://github.com/target/javascript)
  - **TheLadders**: [TheLadders/javascript](https://github.com/TheLadders/javascript)
  - **The Nerdery**: [thenerdery/javascript-standards](https://github.com/thenerdery/javascript-standards)
  - **T4R Technology**: [T4R-Technology/javascript](https://github.com/T4R-Technology/javascript)
  - **VoxFeed**: [VoxFeed/javascript-style-guide](https://github.com/VoxFeed/javascript-style-guide)
  - **WeBox Studio**: [weboxstudio/javascript](https://github.com/weboxstudio/javascript)
  - **Weggo**: [Weggo/javascript](https://github.com/Weggo/javascript)
  - **Zillow**: [zillow/javascript](https://github.com/zillow/javascript)
  - **ZocDoc**: [ZocDoc/javascript](https://github.com/ZocDoc/javascript)

**[⬆ 返回目录](#table-of-contents)**

## <a name="translation">翻译</a>

  This style guide is also available in other languages:

  - ![br](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Brazil.png) **Brazilian Portuguese**: [armoucar/javascript-style-guide](https://github.com/armoucar/javascript-style-guide)
  - ![bg](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Bulgaria.png) **Bulgarian**: [borislavvv/javascript](https://github.com/borislavvv/javascript)
  - ![ca](https://raw.githubusercontent.com/fpmweb/javascript-style-guide/master/img/catala.png) **Catalan**: [fpmweb/javascript-style-guide](https://github.com/fpmweb/javascript-style-guide)
  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **Chinese (Simplified)**: [sivan/javascript-style-guide](https://github.com/sivan/javascript-style-guide)
  - ![tw](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Taiwan.png) **Chinese (Traditional)**: [jigsawye/javascript](https://github.com/jigsawye/javascript)
  - ![fr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/France.png) **French**: [nmussy/javascript-style-guide](https://github.com/nmussy/javascript-style-guide)
  - ![de](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Germany.png) **German**: [timofurrer/javascript-style-guide](https://github.com/timofurrer/javascript-style-guide)
  - ![it](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Italy.png) **Italian**: [sinkswim/javascript-style-guide](https://github.com/sinkswim/javascript-style-guide)
  - ![jp](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Japan.png) **Japanese**: [mitsuruog/javascript-style-guide](https://github.com/mitsuruog/javascript-style-guide)
  - ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Korean**: [tipjs/javascript-style-guide](https://github.com/tipjs/javascript-style-guide)
  - ![pl](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Poland.png) **Polish**: [mjurczyk/javascript](https://github.com/mjurczyk/javascript)
  - ![ru](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Russia.png) **Russian**: [uprock/javascript](https://github.com/uprock/javascript)
  - ![es](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Spain.png) **Spanish**: [paolocarrasco/javascript-style-guide](https://github.com/paolocarrasco/javascript-style-guide)
  - ![th](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Thailand.png) **Thai**: [lvarayut/javascript-style-guide](https://github.com/lvarayut/javascript-style-guide)
  - ![vn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Vietnam.png) **Vietnam**: [giangpii/javascript-style-guide](https://github.com/giangpii/javascript-style-guide)

<a name="the-javascript-style-guide-guide"></a>
## JavaScript 编码规范说明

  - [Reference](https://github.com/airbnb/javascript/wiki/The-JavaScript-Style-Guide-Guide)

<a name="chat-with-us-about-javascript"></a>
## 一起来讨论 JavaScript

  - Find us on [gitter](https://gitter.im/airbnb/javascript).

<a name='authors'></a>
## 贡献者 Contributors

  - [View Contributors](https://github.com/airbnb/javascript/graphs/contributors)

<a name='license'></a>
## 许可 License

(The MIT License)

Copyright (c) 2014-2017 Airbnb

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ 返回目录](#table-of-contents)**


## 修正案 Amendments

We encourage you to fork this guide and change the rules to fit your team's style guide. Below, you may list some amendments to the style guide. This allows you to periodically update your style guide without having to deal with merge conflicts.

# };
