---
sidebar_position: 1
---

# 介绍

模块(app)概念类似于应用程序，它可以安装、发布、卸载，当你拥有一个模块时，就拥有这个模块提供的能力，例如：
- duxapp 此模块是所有模块的基础，模块提供了常用的工具、组件
- duxui 模块提供了全面的ui组件
- duxappReactNative 此模块提供了RN端的支持
- duxcmsShop 此模块提供了一个完整的单用户商城，里面包含了商品、订单、售后、用户等完整流程

## 为什么设计了模块化

在很多后台应用程序中都有在后台安装一个应用，就能实现对应的功能，例如`微擎`,`duxcms`, `fastadmin`等，但是在前端，确甚少看到过类似的实现  

借鉴了这些框架的思维，于是设计了模块化的前端框架，但是对于前端来说有些许不同，duxapp的模块他并不会多个模块同时工作，你通常需要指定一个模块作为入口，例如
- `yarn dev:weapp --app=duxcmsShop`
- `yarn dev:weapp --app=duxuiExample`  

这里通过`--app`指定了入口模块，那么他们将分别会使用到下面这些模块

- 入口duxcmsShop使用使用到的模块：  
duxcmsContent amap duxcmsChat unionpay alipay duxcmsPay wechat duxappReactNative duxui duxcms duxapp user duxcmsUser duxcmsAccount duxcmsOrder duxcmsMall duxcmsShop

- 入口duxuiExample使用使用到的模块：  
wechat echarts amap duxappReactNative duxcms duxapp duxui duxuiExample  

可以看到他们都使用了多个模块，也就是说，当你选择对应模块作为入口的时候，他用到的模块将会被一起编译，未使用的模块则完全不工作，即使那个模块存在你的项目中  

通过上面的入口使用到的模块我们可以看出，两个不同的入口都使用了 `wechat echarts amap duxappReactNative duxcms duxapp duxui` 这些模块，由此我们可以得出一个显而易见的好处：代码共用！  

这里的代码共用包含了模块提供的组件、方法、页面等，在很多时候当你要创建一个新项目时，总是要不停的复制粘贴之前写过的代码，通过模块化的设计，就可以不用这样做，且当你发现一个共用模块中存在bug需要修复，也可以直接修复到所有项目，而不需要每一个项目都去在修改一遍

:::info
src目录下的每一个文件夹都会被视为一个模块
:::

## 工作原理

模块的关系类似于npm包的依赖关系，但是模块的依赖不能指定版本号，因为无法在一个项目中使用多个版本的模块  

例如 `duxuiExample` 模块的配置文件 `dependencies` 字段所指定的，将需要用的模块以数组的形式配置

```json
{
  "name": "duxuiExample",
  "description": "ui库示例",
  "version": "1.0.10",
  "dependencies": [
    "duxui",
    "duxcms",
    "amap",
    "echarts",
    "wechat"
  ]
}
```

如上面这个配置，我们在其中并未找到 `duxapp` 模块，但是打包的模块中确有这个模块，是因为依赖关系每个模块都存在，虽然 `duxuiExample` 中没有 `duxapp` 这个依赖，但是在 `duxui` 中包含了这个依赖，所以也会被要编译进去  

duxui的配置文件：
```json
{
  "name": "duxui",
  "description": "DUXUI库",
  "version": "1.0.39",
  "dependencies": [
    "duxapp"
  ],
  "npm": {
    "dependencies": {
      "b-validate": "^1.5.3",
      "react-native-view-shot": "~3.8.0",
      "react-native-fast-shadow": "~0.1.1",
      "array-tree-filter": "^2.1.0"
    }
  }
}
```

:::info
模块配置中虽然有 `version` 字段，但是这个字段仅仅用于发布的时候更新版本，并不会作为依赖关系处理
:::
