
# 配置使用

拷贝 [.eslintrc.js](../.eslintrc.js) 到项目根目录

> 为什么选用 `.eslintrc.js` 后缀名？因为 `.json` 没法加注释，格式要求比较严格，而 `.eslintrc` 格式在 vscode 中默认做 json 处理了，其中的注释 # 就显示为了异常，所以统一使用 js 格式，通用了

## 项目配置，安装 ESLint 依赖

可以安装到全局，全部共用

```
// ES6 推荐使用 airbnb
npm install -g eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-airbnb

// 如果使用 standardjs(仅仅涉及 ES5)
npm install -g eslint-config-standard eslint-plugin-standard eslint-plugin-promise
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
