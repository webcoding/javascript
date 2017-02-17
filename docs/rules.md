
JS 代码规范，使用 ESLint，

代码规范已转移，参见[javascript-style-guide](https://github.com/webcoding/javascript-style-guide)

CSS/SCSS 代码规范，详见 [css-style-guide](https://github.com/webcoding/css-style-guide)


## JavaScript Standard Style

本代码规范描述，来自[JS书写规范](http://standardjs.com/rules.html)

- 使用2个空格缩进
- 字符串单、双引号('', "")，避免使用转义。
- 不存在未使用的变量
- 在关键字后添加一个空格
- 在函数声明的括号之前添加一个空格
- 始终使用 === 代替 ==
- 中间操作必须间隔 如 var message = 'hello, ' + name + '!'
- 逗号后应该有一个空格
- 保持else语句和 大括号{} 在同一行
- 对于多行 if 语句，使用大括号 {}
- 总是处理 err 函数参数
- 浏览器环境始终保留全局变量前缀（window.）, document，console和navigator 例外
- 不允许多个空白行 ？？？多行空白可用来适当划分代码功能区域块
- 三元运算符，如要多行，操作符放置在行首
- 单 var 声明，每个变量声明都使用 var 独立成行 ？？？
- 条件赋值附加在圆括号内，代表故意赋值，如 if ((m = text.match(expr))) { //... }
- 在单行块内添加空格，如 function foo () { return true }
- 变量及函数命名使用 camelcase 小驼峰格式
- 尾逗号不允许 ？？？改为单行尾逗号不允许，多行必尾逗号须有
- 逗号必须放在当前行的末尾
- 点操作符要与属性在同一行
- 文件末尾必须有一个空行（保存时自动插入）
- 函数标识符与调用之间不能有空白 console.log('hello')
- 键值对的冒号: 右侧和值之间必须有空格，左侧则无空格
- 构造函数命名必须大写字母开头 function Animal () {}
- 无参数的构造函数必须用括号调用 var dog = new Animal()
- 对象定义了 setter，则必须包含 getter 来获取其值
- 派生类的构造函数必须调用 super()
- 使用数组常量代替数组构造器
- 避免使用arguments.callee和arguments.caller
- 避免修改变量类型
- 避免修改使用const变量
- 避免在条件下使用常量表达式（循环除外）
- 正则表达式中不能有控制字符 var pattern = /\x1f/ // ✗ avoid
- 不能有 debugger 语句
- 不能使用 delete 操作符作用域变量
- 函数定义中不能有重复的参数
- 类成员中属性名不能重复
- 对象的 key 不能重复
- switch 语句不能有重复的 case 标识
- 一个模块使用一个 import 导入语句 import { myFunc1, myFunc2 } from 'module' √
- 正则表达式中不能有空字符类 /124[]/ // ✗ avoid
- 不能使用空的解构模式 const { a: {} } = foo // ✗ avoid
- 不要使用 eval() 函数
- 不能对 catch 参数重新赋值
- 不能扩展原生对象 如 Object.prototype.age = 21     // ✗ avoid
- 避免不必要的函数绑定
- 避免不要要的 Boolean 类型，如 !!result // ✗ avoid
- 函数表达式去掉不必要的圆括号包裹 const myFunc = (function () { })   // ✗ avoid
- switch 使用 break 来避免贯通流程
- 不可省略小数前面的零 如 0.5
- 避免函数声明再赋值
- 不能对只读变量赋值 如 window = {}   // ✗ avoid
- 不能使用隐形 eval()   setTimeout("alert('Hello world')")  // ✗ avoid
- 嵌套块中不能做函数声明，如 if 的大括号中
- 不使用无效的正则表达式字符串用于正则构造函数
- 不使用无规则空白
- 不使用 __iterator__ 属性
- 不使用与作用域变量同名的属性名称
- 不使用 label 语句
- 不使用没必要的嵌套块
- 避免空格和制表符混合缩进
- 除了缩进，不要使用多个空格
- 不使用多行字符串
- 构造函数创建实例，必须有变量引用
- 不使用 Function 做构造函数
- 不使用 Object 做构造函数
- 不使用 new require 做构造函数
- 不使用 Symbol 做构造函数
- 不使用原始包装实例 const message = new String('hello')   // ✗ avoid
- 不对全局变量做赋值调用 const math = Math()   // ✗ avoid
- 不使用八进制常量
- 在字符串中不使用八进制转义序列   const copyright = 'Copyright \251'  // ✗ avoid
- 字符串串联使用时，避免直接使用__filename 和 __dirname const pathToFile = __dirname + '/app.js'            // ✗ avoid
- 避免使用__proto__，可以使用 getPrototypeOf 替代
- 变量不能重复声明
- 避免在正则表达式文本多重空间
- return 返回赋值表达式，需要用圆括号包裹
- 避免将变量赋值给自己
- 避免变量同自己比较
- 避免使用逗号运算符
- 受限制名称（如 undefined）不要使用做变量
- tab 不应该被使用
- 普通字符串不能包含占位符文字 const message = 'Hello ${name}'   // ✗ avoid
- super() 调用前，不要使用 this. 去操作
- 错误抛出要使用错误对象包裹
- 行尾不允许空白（自动删除）
- undefined 不允许用来赋值
- 未修改值不能做循环条件
- 使用简单逻辑运算替代不必要的三元运算符 val ? val : 0 ==》 val || 0
- return, throw, continue, 和 break 后不要再有语句，否则无法执行
- 在finally语句块中不能有 return 等流控制语句
- 关系运算符的左操作数不能是否定的 if (!key in obj) {}  // ✗ avoid
- 避免不必要的使用 call() 和 apply()， sum.call(null, 1, 2, 3)   // ✗ avoid
- 避免在对象上做不必要的属性计算 const user = { ['name']: 'John Doe' }   // ✗ avoid
- 不要使用多余的构造函数
- 不要使用非必要的转义
- import, export, and destructured 上不要同名称去重命名 import { config as config } from './config'     // ✗ avoid
- 属性前不要有空格
- 不要使用 with 语句
- 保持对象属性换行的一致性
- 块语句内不要空白填充
- 扩展运算符后不要空格 fn(... args)    // ✗ avoid
- 分号后必须要有空格，前面则不要空格
- 块语句前必须有个空格  if (admin){...}     // ✗ avoid
- 括号内相邻位置不要空格 getName( name )     // ✗ avoid
- 一元运算符后必须有个空格 typof !admin        // ✓ ok
- 注释// 后必须要有个空格
- 模板字符串中没有空格 const message = `Hello, ${ name }`    // ✗ avoid
- 使用 isNaN() 来检测 NaN 类型 if (isNaN(price)) { }       // ✓ ok
- typeof 必须与有效字符串类型比较
- !!!立即调用函数表达式（IFFE）必须包括在圆括号内 const getName = (function () { })     // ✓ ok
- yield * 运算中， * 前后都必须有空格 yield * increment()   // ✓ ok
- 避免 yoda 的条件 if (42 === age) { }    // ✗ avoid

关于分号：

- !!!行尾不要分号
- 永远不要使用 (, [, or ` 起行，JavaScript 中的“自动分号插入”机制（ASI）会有问题，在!!!设定的规则下

在以 ([/+- 开头的语句前加分号(由于正常写法均不会出现以 .,*% 作为语句开头，因此只需记住前面5个即可，你看能懒则懒哦)
详细参见 https://github.com/feross/standard/blob/master/RULES.md#helpful-reading

