
# 配置使用

拷贝 [.eslintrc.js](../.eslintrc.js) 到项目根目录，默认情况下值检测 .js 后缀文件，可以参看扩展组件获得其他需求的支持。

> 为什么选用 `.eslintrc.js` 后缀名？因为 `.json` 没法加注释，格式要求比较严格，而 `.eslintrc` 格式在 vscode 中默认做 json 处理了，其中的注释 # 就显示为了异常，所以统一使用 js 格式，通用了

采用标准：

主要有三种标准：Airbnb，Google 以及 Standard，目前来看，公认的最好的标准是Airbnb标准（互联网发展日新月异，永远是年轻人颠覆老年人，连Google都老了）。它对于ES6要求最严格，比如禁止使用var定义变量，必须使用let或者const等等。既然采用最新标准，当然就让你的代码一次性向最高标准看齐，省得以后麻烦。

NOTE: 可选择扩展组件

- eslint-plugin-html  检测 html 内 js
- eslint-plugin-react react 规范
- eslint-plugin-jsx-a11y JSX 代码段内应用 AST 检查器
- eslint-plugin-promise 回调函数使用最佳实践
- eslint-plugin-vue 支持 vue 文件

a11y是accessibility（无障碍环境）的缩写，从第一个字母a到最后一个字母y，中间一共是11个字母，所以就叫a11y了，类似于i18n表示internationalization（国际化）一样。

## 项目配置，安装 ESLint 依赖

可以安装到全局，就不必每个项目单独安装了，全部共用

```
// ES6 推荐使用 airbnb
npm install -g eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-airbnb
// 之后设置
extend: 'airbnb',


// ES5 推荐使用 airbnb/es5（）
npm install -g eslint eslint-config-webcoding
// 之后设置
extend: 'webcoding/configurations/airbnb/es5',
```

**扩展组件配置**

```
// 示例：扩展 eslint-plugin-html
plugins: [
  // 处理 html 文件内 js 代码规范等
  'html',
],
// html默认已经包含后缀 .erb, .handlebars, .hbs, .htm, .html, .mustache, .nunjucks, .php, .tag, .twig, .vue, .we，否则要如下设置
"settings": {
  // 自定义设置如下
  // "html/html-extensions": [".html", ".custom"],
},

// NOTE: 以上配置 ATOM 中可以直接起效，VSCode 中还要增加配置
"eslint.validate": [
  "javascript",
  "javascriptreact",
  // vscode 要支持 eslint-plugin-html 需要配置这个
  "html"
],
```


## 编辑器配置

建议使用 Atom 或 VSCode 编辑器

### Atom

```
编辑器要安装 linter-eslint 插件
配置 .eslintrc filePath 为 .eslintrc.js
勾选选项 Show Rule ID in Messages (错误提示中会显示官网 rules 链接)
勾选选项 Use global ESLint installation
```

**小提示：** Atom 编辑器的 eslint 提示，有链接规则直接可打开 ESLint 官网，通过修改配置，可调整为打开对应的中文网站。

```
Preferences => Open Config Folder => 找到组件  packages/linter-eslint
            => 找到 node_modules/eslint-rule-documentation/index.js
            => 将 getRuleURI 函数中 eslint.org/ 修改为 eslint.cn/
            => 重启见效

参看插件源码: https://github.com/AtomLinter/linter-eslint
```

### VSCode

```
编辑器要安装 eslint 插件
编辑器增加全局配置
"eslint.options": {
  "configFile": "./.eslintrc.js"
},

参看插件源码: https://github.com/Microsoft/vscode-eslint
```

NOTE：不要修改配置 `"eslint.autoFixOnSave": false,`，否则开启修复功能，可能会导致意料外的修复发生，最好手动处理，而针对简单文件，可以绑定快捷键调用此功能。

绑定快捷键到 `eslint.executeAutofix` 可以调用自动修复（Fix all auto-fixable problems），示例如下：

```
// eslint 发布内容tab 有个命令列表，快捷键就可以绑定到对应的命令上
// 使用不太可能常用的快捷键，避免误修复，同时可以单手操作的快捷键
{
  "key": "ctrl+alt+cmd+space",
  "command": "eslint.executeAutofix",
  "when": "editorTextFocus"
}

NOTE: 目前(20170216) VSCode 的提示不允许外链，所以 eslint 插件的提示，也无法做到[提示链接指向官方文档](https://github.com/Microsoft/vscode/issues/11847)
```

### 其他

推荐使用 [zsh](http://ohmyz.sh/)，配合插件[z](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/z)实现跟踪/跳转你最常用的目录，配置 plugins=(z)即可。

如此，想要打开一个项目 protest，直接如下即可

```
# z protest
//使用 Atom 打开此项目
# atom .
//使用 VSCode 打开此项目
# code .
```
