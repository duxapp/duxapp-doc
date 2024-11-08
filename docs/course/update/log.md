---
sidebar_position: 1
---

# 更新日志

## 2024-11-08

### 移除preact，默认使用react
preact在使用过程中发现了多次奇怪的bug，且非常不容易被发现，因此默认改为使用react

如果你想继续使用preact，你可以在你的模块中添加下面这些内容，并在你的模块依赖中添加 `preact`

```js
// babel.config.js
module.exports = {
  presets: [
    ['taro', {
      framework: 'preact',
      ts: false,
      compiler: 'webpack5',
    }]
  ]
}
```

```js
// babel.config.js
module.exports = {
  framework: 'preact'
}
```

```json
// package.json
// 确定10以后的版本存在导致元素顺序错乱的bug，可以自行尝试最新版本
// 10.19.7 会导致不需要重新渲染的元素，重新渲染，而且他不会被你察觉
{
  "dependencies": {
    "preact": "~10.19.7"
  }
}
```

:::info
使用preact可以减小小程序端编译后的体积，大约90kb左右，可以自行选择
:::

### 优化
- 优化虚拟列表问题
- 修复部分表单会导致死循环的问题
- 优化TabBar逻辑

## 2024-11-06

### 依赖更新

将 react-native、expo 和其他一些第三方依赖更新到了最新版本

### 表单
完善了所有表单，支持非受控模式、禁用表单、设置默认值等功能

### PickerSelect

新增 `search` ，开启后用于搜索选项

### Switch

新增 `values` 属性，用于指定开关不同状态的值

### Textarea
优化了文本显示

### 其他修复
- 完善虚拟列表功能
- useRequest onError 支持自定义处理
- 将npm依赖移动到 package.json 文件
- 修正一些样式问题
- 修正RN端一些命令会报错的问题