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
    renderer: 'skyline',
    lazyCodeLoading: 'requiredComponents',
    requiredPrivateInfos: [
      'chooseLocation',
      'getLocation',
      'onLocationChange',
      'startLocationUpdateBackground',
      'chooseAddress'
    ]
  },
  // 模块配置 将会调用模块生命周期的option，将对应模块的参数传入
  option: {
    // 基础模块
    base: {
      // app端配置
      app: {
        wxAppid: '',
        wxUniversalLink: '',
        codePushAndroidKey: '',
        codePushAndroidTestKey: '',
        codePushIosKey: '',
        codePushIosTestKey: '',
        duxPushID: '',
        umAppKey: ''
      },
      fileUpload: {
        // 大文件上传驱动
        // drive: qiniu()
      },
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
        },

        button: {
          color: ['#c0d930', '#f2d733'],
          textColor: '#fff',
          radiusType: 'fillet', // 按钮圆角类型 right-angle直角 fillet圆角 fillet-min较小的圆角
          size: 'l', // 按按钮尺寸 s m l xl xxl xxxl
          plain: false, // 是否镂空
        },
      }
    },
    // 用户模块
    user: {
      // 使用哪个模块注册的登录功能
      use: 'slim',
      // 是否禁用h5端微信登录
      disableH5Watch: false
    },
    // 老商城系统
    duxshop: {
      // 请求配置
      request: {
        origin: 'https://shop.tonglao.com.cn',
        path: 'a', // 域名二级目录
        secret: 'f34f01e53f0d21d9245c3f2771d1b183', // 站点token
        appid: '1651593048279300',
        devOpen: true,
        devToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zaG9wLnRvbmdsYW8uY29tLmNuIiwiYXVkIjoiaHR0cDpcL1wvc2hvcC50b25nbGFvLmNvbS5jbiIsImlhdCI6MTY3MTYwNzgyOSwibmJmIjoxNjcxNjA3ODI5LCJkYXRhIjoiMTA3In0.b5Gl_ijHfPQpaJ36OyVOACcJH0rbCBF5JXwjgOry6RM'
      }
    },
    // 新php系统
    duxravel: {
      request: {
        origin: 'https://service.tonglao.com.cn',
        path: 'api', // 域名二级目录
        accessKey: '26356048',
        sign: '958fdee7f4cc68f09d60c9c297995013',
        devOpen: false,
        devToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zaG9wLnRvbmdsYW8uY29tLmNuIiwiYXVkIjoiaHR0cDpcL1wvc2hvcC50b25nbGFvLmNvbS5jbiIsImlhdCI6MTY1MTYyNzk0MywibmJmIjoxNjUxNjI3OTQzLCJkYXRhIjoxMTN9.9RIvfur2va5Q-lew2rpSXStZQVErlagTMnLy7qVTI94'
      }
    },
    // 新php模块化系统
    duxslim: {
      request: {
        origin: 'https://a.douxcm.com',
        // origin: 'http://douxin_api.test',
        path: 'api', // 域名二级目录
        accessKey: '81506876',
        sign: 'cb6d343a133c359c451d68e37d0f7ecb',
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
        appName: 'DuxSlim'
      }
    },
    // 新商城系统配置
    shopv2: {
      theme: {
        goods: {
          // 价格颜色
          priceColor: '#ff442a',
          // 原价颜色
          marketPriceColor: '#999',
          // 购物车图标颜色
          cartColor: '#FF442A',
          // 详情购买颜色
          detailBuyColor: '#ff442a',
          // 详情添加购物车颜色
          detailCartColor: '#ff9324'
        },
        // 规格按钮样式
        spec: {
          color: '#888',
          selectColor: '#333',
          radiusType: 'fillet',
          size: 'm',
          plain: true,
        },
        // 分类页面
        category: {
          // 显示多少级菜单 1-3
          level: 3
        }
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

## 模块配置

option字段就是模块配置，每个模块都可能拥有自己不一样的配置，配置之后在每个模块的入口文件导出的 `appLifecycle` 的 `option` 处取得这些参数  

具体模块提供提供了哪些配置请前往具体模块查看。

## 基础模块提供配置

某些情况下你可能希望能更快的取得配置参数，而不是等待option的回调函数，base模块导出整个配置文件，名称为 `userConfig`，按照下面的方法导入使用
```js
inport { userConfig } from '@/base'
```
## 使用不同的配置

很多情况下，一个配置文件无法搞定多个模块的使用需求，你可以新建一个配置文件，如: `duxapp.shopv2.js`，当在执行命令 `yarn dev:weapp --apps=shopv2` 的时候将会优先使用此配置文件的内容。