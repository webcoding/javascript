
# 配置使用

拷贝 [.eslintrc.js](../.eslintrc.js) 到项目根目录，默认情况下值检测 .js 后缀文件，可以参看扩展组件获得其他需求的支持。

> 为什么选用 `.eslintrc.js` 后缀名？因为 `.json` 没法加注释，格式要求比较严格，而 `.eslintrc` 格式在 vscode 中默认做 json 处理了，其中的注释 # 就显示为了异常，所以统一使用 js 格式，通用了

NOTE: 可选择扩展组件

- eslint-plugin-html  检测 html 内 js
- eslint-plugin-react react 规范
- eslint-plugin-jsx-a11y JSX 代码段内应用 AST 检查器
- eslint-plugin-promise 回调函数使用最佳实践
- eslint-plugin-vue 支持 vue 文件

## 项目配置，安装 ESLint 依赖

可以安装到全局，全部共用

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

### Atom

```
编辑器要安装 linter-eslint 插件
配置 .eslintrc filePath 为 .eslintrc.js
勾选选项 Use global ESLint installation
```

### VSCode

```
编辑器要安装 eslint 插件
编辑器增加全局配置
  "eslint.options": {
    "configFile": "./.eslintrc.js"
  },
```
