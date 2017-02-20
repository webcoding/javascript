
// ES6 代码规范练习场

// 为便于测试，关闭部分规则检测
/* eslint no-unused-vars: 0, no-console: 0, prefer-const: 0, */

// [类型](#types)
// 使用 let const 替代 var
var type11 = 123
var type2 = 'hello'

const type3 = 123
let type4 = 123
// type4 = 456
const type5 = 'hello'

const type121 = [1, 2]
const type122 = type121
type122[0] = 9

console.log(type122[0], type122[0])


// [引用](#references)


// [对象](#objects)


// [数组](#arrays)


// [解构](#destructuring)


// [字符串](#strings)


// [函数](#functions)
(function anonymous() {
  // bad
  const original = { a: 1, b: 2 }
  const copy = Object.assign({}, original, { c: 3 })
  console.log(copy)
})()

(function anonymous() {
  // bad
  const original = { a: 1, b: 2 }
  const copy = { ...original, c: 3 }
  // const { ...copy } = original
  console.log(copy)
})()


// [箭头函数](#arrow-functions)


// [类 & 构造函数](#classes--constructors)


// [模块](#modules)


// [Iterators and Generators](#iterators-and-generators)


// [属性](#properties)


// [变量](#variables)


// [提升](#hoisting)


// [比较运算符 & 等号](#comparison-operators--equality)


// [代码块](#blocks)


// [注释](#comments)


// [空白](#whitespace)


// [逗号](#commas)


// [分号](#semicolons)


// [类型转换](#type-casting--coercion)


// [命名规则](#naming-conventions)


// [存取器](#accessors)


// [事件](#events)


// [jQuery](#jquery)
