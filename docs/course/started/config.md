---
sidebar_position: 6
---

# 用户配置

模块是通用代码，类似于一个npm包，我们不应该去直接修改模块里面的一个些代码，因为如果这个模块更新了，要使用这些更新就会很麻烦  

配置文件放在`configs`下，每个文件夹就是一个项目的用户配置，其中`index.js`就是用户配置文件  

此处还会放其他文件 入 `duxapp.rn.js` 是框架配置文件，一般用于RN端使用，请查看[RN用户配置](/docs/course/rn/config)  

用户配置文件是一般是这样面这样的

```js
const config = {
  // 覆盖app.config.js 配置
  appConfig: {},
  // 调试配置
  debug: {
    // 在h5端开启vconsole调试功能
    vconsole: false
  },
  // 模块配置 将会调用模块生命周期的option，将对应模块的参数传入
  option: {
    // 基础模块
    duxapp: {
      theme: {
        primaryColor: '#CDDE00',
        secondaryColor: '#FDD000',
        successColor: '#34a853',
        warningColor: '#fbbc05',
        dangerColor: '#ea4335',
        pageColor: '#fafbf8',
        mutedColor: '#666',
        header: {
          color: '#fff', // 仅支持rgb hex值，请勿使用纯单词 设置为数组将显示一个渐变按钮
          textColor: '#000', // 文本颜色
          showWechat: false, // 微信公众号是否显示header
          showWap: true, // h5是否显示header
        }
      }
    },
    // ... 其他模块配置
  }
}

export default config

```

## 配置文件使用

配置文件是如何被使用的呢，在我们运行命令时，例如 `yarn dev:weapp --app=duxuiExample`，用`--app`指定的入口模块，将会作为配置名称使用  

也就是此时用到的配置文件是 `configs/duxuiExample/index.js` 但是如果这个配置并不存在，那么他将会使用 `configs/default/index.js`，作为当前的配置文件

如果你想使用自定义的配置那么还需要在命令上加上 `--config=duxuiExampleCustom` 参数，像这样  

`yarn dev:weapp --app=duxuiExample --config=duxuiExampleCustom`

此时使用的配置文件将是 `configs/duxuiExampleCustom/index.js`  

绝大多数的命令上面都可以加上 `--config` 参数用于指定配置文件

## 基础模块提供配置

某些情况下你可能希望能更快的取得配置参数，而不是等待option的回调函数，duxapp模块导出整个配置文件，名称为 `userConfig`，按照下面的方法导入使用
```js
import { userConfig } from '@/duxapp'
```

:::info
这是由cli功能实现的，仅在duxapp模块里导出
:::

## 参数详解

### disablePages

当某些页面不需要编译时，在此处设置将其禁用  
其配置和功能和模块路由里面[disablePages](/docs/course/app/route#disablepages)完全相同

### appConfig

这里的配置将会覆盖Taro的`app.config.js`配置文件

例如你要配置小程序接口权限、小程序插件等，就配置在这个地方

### debug

- vconsole 开启h5端调试功能

### option

option字段就是模块配置，每个模块都可能拥有自己不一样的配置，配置之后在每个模块的入口文件导出的 `option` 处取得这些参数  

具体模块提供提供了哪些配置请前往具体模块查看。

## 文件复制

可以将一些自定义文件复制到对应文件夹下

### copy.build.complete

在编译结束后，这个文件夹下的内容会被复制到项目对应的文件夹下面，例如小程序的 code_obfuscation_config.json 配置文件，用来配置文件加密的，你需要等待编译结束后，再把文件复制进去，否则，会被Taro的编译逻辑给删除

:::info
这里的优先级高于模块中的 [`copy.build.complete`](/docs/course/app/directory#updatecopybuildcomplete) 复制功能
:::

### copy.rn

在编译APP的时候，将这个文件夹下的内容复制到对应位置

### copy.harmony

在编译鸿蒙端的时候，将这个文件夹下的内容复制到 `dist/harmony` 对应位置

## 小程序配置

在用户配置文件夹下还能放 `project.config.json`，配置文件内容和小程序的配置文件一样，通常用来给不同的项目指定 `appid`，这样就不用每次编译不同的项目后还需要手动更新 `appid`

```json
{
  "appid": "填写自己项目的appid"
}
```