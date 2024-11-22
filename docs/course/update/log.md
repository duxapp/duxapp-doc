---
sidebar_position: 1
---

# 更新日志

## 2024-11-22

### 主要更新

- React Native 更新 react-native-pager-view 插件，修复这个插件导致闪退的问题
- 初步兼容微信小程序的 skyline 新渲染器，可以通过项目配置打开新渲染器

```js
const config = {
  appConfig: {
    // 添加这些配置，开启使用小程序的skyline渲染引擎
    renderer: 'skyline',
    lazyCodeLoading: 'requiredComponents',
    componentFramework: 'glass-easel',
    rendererOptions: {
      skyline: {
        defaultDisplayBlock: false
      }
    },
  }
}
```

- 兼容 QQ 小程序开发

### UI库
- 修复上传组建 IOS 图片显示问题
- 优化 Divider 对为空子元素的处理

### 其他

- duxapp 模块新增 isPlatformMini 常量，用来判断是不是小程序端（微信、QQ、支付宝等）
- 修复鸿蒙在 windows 编译后两个报错：导入的函数不存在的问题（windows 上仍然还存在其他问题，目前尚未修复，建议先使用其他系统进行编译）

## 2024-11-18

### 鸿蒙端开发支持

使用 Taro 的 ets 方案，将鸿蒙编译为原生 arkts，详情请查看[鸿蒙入门教程](/docs/course/harmony/start)

### 重要更新

这些更新是为了适配鸿蒙等后期可能出现的其他端开发，请尽快更新，后期会移除对原有内容的支持

- 模块中 `update/copy` 内除了 `patches` 以外的RN 端文件需要移动到 `update/copy.rn`
- 模块中 `update/index` 需要重命名为 `rn.js`
- 用户配置中 `copy` 文件夹需要重命名为 `copy.rn`
- 用户配置中 `duxapp.js` 配置文件需要重命名为 `duxapp.rn.js`

### 其他更新

- 修复 H5 端编译报错
- 修复 H5 端热重载问题
- 用户配置 `duxapp.rn.js` 中新增开始和结束生命周期回调

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
// taro.config.js
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