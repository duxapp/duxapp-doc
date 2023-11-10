---
sidebar_position: 3
---

# 配置

模块是通用代码，类似于一个npm包，我们不应该去直接修改模块里面的一个些代码，因为如果这个模块更新了，要使用这些更新就会很麻烦，所以进入了一个配置文件，此文件放置在 `scr` 目录下，名为 `duxapp.js`，其内容如下：

```js
// import qiniu from './base/components/UploadFileManage/drive/qiniu'

const config = {
  // 对于默认不开启的页面 配置在此处将开启这些页面
  openPages: [
    // 'user/auth/start', // 需要登录才能访问的app 将此页面打开
    // 'base/location/index', // 需要选择位置信息的app 将此页面打开
  ],
  // 不需要的页面可以配置路径禁用
  disablePages: [

  ],
  // 覆盖app.config.js 配置
  appConfig: {
    // 使用小程序新的渲染引擎
    // renderer: 'skyline',
    // lazyCodeLoading: 'requiredComponents',
    requiredPrivateInfos: [
      'chooseLocation',
      'getLocation',
      'onLocationChange',
      'startLocationUpdateBackground',
      'chooseAddress'
    ]
  },
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
      },
      /**
       * 如果某些字体放在本地，则配置此处，可以对不同系统配置，也可以统一配置
       */
      font: {
        local: {
          // SlimIcon: {
          //   ios: true
          //   adnroid: true
          // }
        }
      }
    },
    wechat: {
      // 分享组件配置
      share: {
        // 启用分享
        open: false,
        // 开启未定义的页面分享
        pageSlef: {
          // 包含这些页面分享自身 页面路径关键词匹配 include 优先级比 exclude 高，
          // 可以配置exclude为空数组表示支持所有页面
          // pageSlef优先级高于pageHome
          // include: ['page/test'],
          // 排除这些页面 不进行分享
          // exclude: []
        },
        // 开启未定义的页面分享到指定页面
        pageHome: {
          path: '',
          params: {},
          // 包含这些页面分享自身 页面路径关键词匹配
          // include: [],
          // 排除这些页面 不进行分享
          // exclude: []
        },
        // 公共分享参数
        common: {
          title: '淘六汇',
          desc: '欢迎使用淘六汇购物平台',
          image: 'https://img.zhenxinhuixuan.com/weiwait/cropper/2lVCofRIu6Jl3jNebxCA6VkEMUeaobvLWFYMTiaG.jpg'
        }
      }
    },
    // 用户模块
    user: {
      // 使用哪个模块注册的登录功能
      use: 'slim',
      // 是否禁用h5端微信登录
      disableH5Watch: false,
      // 开启微信小程序手机号快捷登录
      weappTelLogin: true
    },
    // cms框架
    duxcms: {
      request: {
        origin: "https://shujumatou.2c99.com",
        // origin: 'http://192.168.2.24:8090',
        path: "api", // 域名二级目录
        accessKey: "60461702",
        sign: "25359648c9fedc90b32359e9ed3ceefe",
        devOpen: false,
        devToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJpYXQiOjE2NzU2NjA2MzUsImV4cCI6MTY3NTc0NzAzNSwiaWQiOjF9._kX-uT-hUEbo_J3fN5F0HHs0ee01TPNQHrDiH3SHQlc'
      },
      // 登录相关配置
      loginConfig: {
        // 手机号登录
        phone: true,
        // 邮箱登录
        email: false,
        // app微信登录
        appWatch: true,
        // 小程序微信登录
        weappWatch: true,
        // 名称
        appName: 'duxcms'
      }
    }
  }
}

export default config

```

这个示例中包含了一些基础配置，和模块的配置，option字段就对应这每个模块的配置

## 通用基础配置

这些配置和模块无关，属于架构基础配置

### openPages

要启用的页面数组合集。  
某些页面可以在路由配置中默认不开启，通过这个配置可以开启这些页面，例如你的项目需要默认进入登录页面，登录模块提供了一个登录入口页面，但是这个页面默认没有被开启，就可以在此处配置开启。

### disablePages

当某些页面不需要编译时，在此处设置将其禁用

### appConfig

这里的配置将会覆盖Taro的配置文件

### debug

- vconsole 开启h5端vconsole功能

## 模块配置

option字段就是模块配置，每个模块都可能拥有自己不一样的配置，配置之后在每个模块的入口文件导出的 `option` 处取得这些参数  

具体模块提供提供了哪些配置请前往具体模块查看。

## 基础模块提供配置

某些情况下你可能希望能更快的取得配置参数，而不是等待option的回调函数，base模块导出整个配置文件，名称为 `userConfig`，按照下面的方法导入使用
```js
inport { userConfig } from '@/base'
```
## 使用不同的配置

很多情况下，一个配置文件无法搞定多个模块的使用需求，你可以新建一个配置文件夹，如: `duxapp/index.js`，当在执行命令 `yarn dev:weapp --app=duxapp` 的时候将会优先使用此配置文件的内容。