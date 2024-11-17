---
sidebar_position: 2
---

# 用户配置

配置文件用来配置包名、版本号、证书等信息，配置文件和配置一样都放在`configs`文件夹下对应的配置中，其名称为`duxapp.harmony.js`

```js
module.exports = {
  appid: 'cn.duxapp',
  appName: 'duxapp',
  versionCode: 1,
  versionName: '1.0.0',
}
```

:::info
这是一个node模块，需要使用`module.exports`导出一个配置对象
:::

下面将详细介绍此对象包含的内容

## appid
app包名，必填，推荐 `cn.duxapp.项目名称`

## appName
app名称，必填

## versionCode
app数字版本号，类型为number

## versionName
app版本号

## onStart(callback)

模块处理开始回调

## onStop(callback)

模块处理结束回调
