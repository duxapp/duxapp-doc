---
slug: intro
title: Taro使用模块化开发，以提升开发效率
description: 通过模块化，将通用功能编写在通用模块中，提高代码复用率
authors: [duxapp]
tags: [duxapp, 项目, 介绍]
---

duxapp是基于Taro二次开发的模块化框架

使用这个框架，结合框架提供的UI库和工具库，能帮助你快速且高质量的完成项目，且能实现同时开发小程序、H5、APP（React Native），并且保证各个端的一致性

duxapp还针对APP开发（React Native）做了大量优化，大大降低了APP发开的难度，你可以阅读[React Native教程](http://duxapp.com/docs/course/rn/start)，了解详情

下面让我来详细介绍如何使用duxapp

## 何为模块化

什么是模块化？就像npm包一样，我们可以将一些通用的功能或页面编写在一个模块内，提供给多个项目来使用，以提高代码的复用性。

模块的概念在很多后端框架中很常见，它们可以在应用商店通过安装应用的方式来获得新功能，在前端框架中确很少见到类似的设计方案，当然你其实也可以理解为发布到npm就是一种模块化的设计，但是在Taro中很多功能他并不能发布到npm中，例如页面。页面需要放在项目中，当发布到npm之后就会无法使用

在duxapp框架中的模块化设计原理，和npm的依赖关系是类似的，每个模块有一个配置文件`app.json`，里面的依赖字段`dependencies`，用来填写我要用到的依赖，就像下面`ui库示例`这个模块的配置

```jsx
{
  "name": "duxuiExample",
  "description": "ui库示例",
  "version": "1.0.13",
  "dependencies": [
    "duxui",
    "duxcms",
    "amap",
    "echarts",
    "wechat"
  ]
}
```

和npm依赖不一样的是，这里的依赖不包含版本信息。因为页面等限制条件，你一个项目中，同一个模块无法存在两个不同的版本，因此并未设计指定版本号的功能

依赖关系是逐层查找的，就像npm一样，例如这里依赖的`duxui`模块，他的模块配置文件是这样的

```json
{
  "name": "duxui",
  "description": "DUXUI库",
  "version": "1.0.42",
  "dependencies": [
    "duxapp"
  ]
}
```

在duxui模块中他又使用了`duxapp`这个依赖，通过每个模块都去查找，我们最终整理出这样的依赖关系图

![dependencies](./images/image1.png)

那么最终当我们使用下面的命令编译`duxuiExample`模块的时候

```bash
# 调试小程序
yarn dev:weapp --app=duxuiExample
# 调试h5
yarn dev:h5 --app=duxuiExample
```

实际被编译的模块就包含下面这些

- duxuiExample
- duxcms
- amap
- echarts
- wechat
- duxui
- duxappReactNative
- duxapp

## 使用duxapp

上面介绍了模块化的原理，现在我们来看看，具体要怎么使用这个框架

首先使用cli命令创建一个项目，中途会要求你选择模板，你可以选择 `duxui 示例代码(包含所有组件的示例代码 支持RN端)` 这个选项，和上面使用的示例一样

```bash
npx duxapp-cli create projectName
```

在使用这个命令之前，确保安装了以下工具和环境

- [nodejs 20+](https://nodejs.cn/download/)
- [git命令行工具](https://git-scm.com/downloads)
- yarn  
使用命令 `npm i yarn -g` 安装

安装后会自动安装项目依赖

进入项目目录`projectName`，使用上面提到的命令 `yarn dev:weapp --app=duxuiExample` 或者 `yarn dev:h5 --app=duxuiExample` 编译为小程序或者H5，使用开发者工具或者浏览器就能预览

可以看到编译命令是在Taro原有的命令基础上增加了 `--app=` 参数，参数用来指定一个模块，通常你都需要指定这个参数，因为你的项目中除了上面提到的模块之外，大多是时候还会存在其他模块，如果你不指定的话，他会把所有模块都打包进去

通过上面的描述可以看出，其实在一个项目中不是真的只有一个项目，在我的实际开发经验中，我是将很多项目放在一起开发的，我只需要通过 `--app=` 参数指定我的项目入口文件进行编译，他就是不同的项目

多个项目同时存在，如何保持他们不混乱呢，例如第三方npm依赖，每个项目可能都有不同的npm依赖，这通过下面的章节来介绍

## 模块

在duxapp框架中，`src`目录下每个文件夹将被识别为一个模块，模块一般是像下面这样设计结构的

```
├── duxapp                      模块名称
│   ├── components              模块组件库 
│   │   ├── ComponentName       组件
│   │   │   └── index.jsx
│   │   └── index.js            导出需要导出的组件
│   ├── config                  配置目录 
│   │   ├── route.js            路由配置文件（路径固定）
│   │   ├── theme.js            主题配置文件（路径固定）
│   │   └── themeToScss.js      主题转换函数（路径固定）
│   ├── pages                   页面放置文件夹
│   │   └── index               页面文件夹
│   │       ├── index.jsx       页面
│   │       └── index.scss
│   ├── utils                   工具库
│   │   ├── index.js            导出工具库
│   │   └── ...you util.js
│   ├── update                  模块安装目录
│   │   ├── copy                需要复制到项目的文件（路径固定）
│   │   │   └── ...             
│   │   └── index.js            安装脚本 主要针对RN端 插件安装方法（路径固定）
│   ├── app.js                  模块入口文件
│   ├── app.json                模块配置文件 包括名称 依赖等（必须）
│   ├── app.scss                全局样式文件（次样式文件无需导入到js文件中，会自动注入全局）
│   ├── package.json            和项目的package.json相同，用于指定当前模块需要用到的三方依赖等
│   ├── changelog.md            更新日志（必须 如果发布）
│   ├── index.js                模块出口文件 可以导出组件和方法给其他模块使用
│   ├── index.html              如果是h5的项目可以自定义index.html，仅当作为入口模块时可用
│   ├── app.config.js           用于覆盖项目全局配置
│   ├── babel.config.js         babel配置文件
│   ├── metro.config.js         metro配置文件
│   ├── taro.config.js          Taro编译配置文件
│   ├── taro.config.prod.js     Taro 发布配置文件
│   ├── taro.config.dev.js      Taro 调试配置文件
│   └── readme.md               自述文件（必须 如果发布）
```

关于模块目录的详细内容查看这个 [模块结构](http://duxapp.com/docs/course/app/directory) 获取

## 模块配置

在duxui这个模块中，它的配置文件是这样的

```json
{
  "name": "duxui",
  "description": "DUXUI库",
  "version": "1.0.42",
  "dependencies": [
    "duxapp"
  ]
}
```

我们看到，他有一个字段 `npm`，(新版本中，这个配置已经移动到模块的`package.json`文件中)它的内容和项目的 `package.json` 的配置是完全一样的，在模块中编写这个内容，将会和项目的 `package.json` 进行覆盖合并，那么你就可以通过模块来安装当前模块需要依赖了，每个模块中都可以指定这个依赖，他们会合并在一起

当你指定了不同的 `--app=` 入口模块之后，框架会根据你使用到的模块中的第三方依赖自动重新安装

在模块中还有很多类似的设计，用来编写配置或者文件，包括下面这些

- app.scss 编写全局样式
- index.html 如果是h5的项目可以自定义index.html，仅当作为入口模块时可用
- app.config.js 用于覆盖项目全局配置
- babel.config.js babel配置文件
- metro.config.js metro配置文件
- taro.config.js Taro编译配置文件

## 模块路由

每个模块中都可以编写页面，当然这不是必选项，这些页面会被定义在自己的模块中

通过 `modeName/config/route.js` 定义当前的模块路由，例如 `duxuiExample` 的路由定义如下

```js
/**
 * login:是否需要登录
 * platform:支持的平台(weapp, h5, rn)不配置支持所有
 * subPackage:是否将其设置为分包
 * home: 是否是主页 是主页的页面将会被排在前面
 */
const config = {
  pages: {
    'duxuiExample/index': {
      pages: {
        index: {
          home: true
        }
      }
    },
    'duxuiExample/example': {
      pages: {
        Button: {},
        Cell: {},
        Grid: {},
        Divider: {},
        Space: {},
        // 更多未展示
      }
    }
  }
}

module.exports = config
```

路由的定义也是经过封装的，配置的时候是将一个文件夹作为一个对象来处理，这样我们能很方便的将某个文件夹进行分包等操作

## 使用UI库和全局样式编写页面

在基础模块 `duxapp` 中提供了可以用于快速布局页面的全局样式，他就和 `tailwindcss` 类似，在结合UI组件，编写页面像下面这样的，可以看到我们不需要编写 `scss` 文件就能完成页面的编写

```jsx
import { Avatar, Card, ScrollView, Column, Divider, Header, Text, TopView, Row, px, Image, nav, Tag } from '@/duxui'
import { useRequest, CmsIcon, saleHook, Qrcode } from '@/duxcmsSale'
import { setClipboardData } from '@tarojs/taro'

export default function Sale() {

  const [{ info = {}, day = {}, money, total = {} }] = useRequest('sale/index')

  return <TopView>
    <Header absolute title='推广中心' color='#FFFFFF' style={{ backgroundColor: 'transparent' }} />
    <Image style={{ height: px(396) }} className='w-full absolute' src={require('./images/tui_bag.png')} />
    <Row justify='between' items='center' style={{ marginTop: px(208) }} className='mt-3 ph-3'>
      <Row items='center' justify='start'>
        <Avatar url={info.avatar}>{info.nickname}</Avatar>
        <Column className='mh-3'>
          <Row items='center' className='gap-2'>
            <Text size={33} bold color='#FFFFFF' >{info.nickname}</Text>
            {!!info.level_name && <Tag type='primary' size='s'>{info.level_name}</Tag>}
          </Row>
          <Row className='mt-2'>
            <Text color='#FFFFFF' size={1}>邀请码：{info.code}</Text>
            <CmsIcon className='mh-2' size={36} name='copy' color='#FFFFFF' onClick={() => setClipboardData({ data: info.code })} />
          </Row>
        </Column>
      </Row>
      <CmsIcon size={60} name='QRcode1' color='#FFFFFF' onClick={Qrcode.show} />
    </Row>
    <ScrollView className='mt-3'>
      <Card margin disableMarginTop>
        <Row jtems='center' justify='between' className='gap-3'>
          <Column justify='center' items='center' grow >
            <Text bold type='primary'>{total.order_num || 0}</Text>
            <Text color={2} size={2} className='mt-2'>直推订单</Text>
          </Column>
          <Column justify='center' items='center' grow>
            <Text bold type='primary'>{total.user_num || 0}</Text>
            <Text color={2} size={2} className='mt-2'>直推客户</Text>
          </Column>
        </Row>
        <Row className='mt-2' jtems='center' justify='between'>
          <Column justify='center' items='center' grow>
            <Text bold type='primary'>{total.month_sale_money || 0}</Text>
            <Text color={2} size={2} className='mt-2'>本月收益</Text>
          </Column>
          <Column justify='center' items='center' grow>
            <Text bold type='primary'>{total.sale_money || 0}</Text>
            <Text color={2} size={2} className='mt-2'>累计收益</Text>
          </Column>
        </Row>
      </Card>
      <Card shadow margin disableMarginTop onClick={() => nav('duxcmsAccount/cash/index')}>
        <Row items='center' justify='between'>
          <Text bold>佣金管理</Text>
          <CmsIcon name='direction_right' size={32} />
        </Row>
        <Row className='mt-3' items='baseline'>
          <Text size={2}>可提现佣金:</Text>
          <Text className='mh-3' bold size={50}>{money || 0}</Text>
        </Row>
      </Card>
      <Card margin disableMarginTop>
        <Row items='center' justify='around'>
          <Column items='center'>
            <Text size={2}>今日预估收益</Text>
            <Text className='mt-1' bold size={40} >{day.sale_money || 0}</Text>
          </Column>
          <Column items='center'>
            <Text size={2}>今日有效订单</Text>
            <Text className='mt-1' bold size={40} >{day.order_num || 0}</Text>
          </Column>
          <Column items='center'>
            <Text size={2}>今日新增客户</Text>
            <Text className='mt-1' bold size={40} >{day.user_num || 0}</Text>
          </Column>
        </Row>
      </Card>

      <Card margin className='gap-4'>
        <Text size={4} bold>其他操作</Text>
        <Row justify='between' items='center' onClick={() => nav('duxcmsSale/index/order')}>
          <Text size={2} className='mh-2' bold>推广订单</Text>
          <CmsIcon name='direction_right' size={32} />
        </Row>
        <Row justify='between' items='center' onClick={() => nav('duxcmsSale/index/customer')} >
          <Text size={2} className='mh-2' bold>我的客户</Text>
          <CmsIcon name='direction_right' size={32} />
        </Row>
        <saleHook.Render mark='index.menus' />
      </Card>
      <Row style={{ height: px(16) }}></Row>
    </ScrollView >
  </TopView>
}
```

为何获得更好的编辑体验，需要在vscode中安装 [SCSS Everywhere](https://marketplace.visualstudio.com/items?itemName=gencer.html-slim-scss-css-class-completion) 插件，他能识别到全局样式并给出编写提示

## 用户配置

很多模块都是通用的，那么一些需要根据不同项目变化的内容，就不能写在模块中，而是要通过配置的形式来配置

项目配置放在项目根目录下的 `configs` 目录中，其中每个文件夹就是一个配置，文件中的`index.js`就是项目配置

像下面这个`duxuiExample`的配置，其中`option`中的每一项就是对应模块的配置

```js
// import qiniu from './base/components/UploadFileManage/drive/qiniu'

const config = {
  // 覆盖app.config.js 配置
  appConfig: {
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
        primaryColor: '#E70012',
        secondaryColor: '#E84C00',
        successColor: '#34a853',
        warningColor: '#fbbc05',
        dangerColor: '#ea4335',
        pageColor: '#F7F9FC',

        textColor1: '#373D52',
        textColor2: '#73778E',
        textColor3: '#A1A6B6',
        textColor4: '#FFF',
        header: {
          color: '#fff', // 仅支持rgb hex值，请勿使用纯单词 设置为数组将显示一个渐变按钮
          textColor: '#000', // 文本颜色
          showWechat: false, // 微信公众号是否显示header
          showWap: true, // h5是否显示header
        }
      }
    },
    wechat: {
      // 分享组件配置
      share: {
        open: true,
        // 开启未定义的页面分享
        pageSlef: {
          // 包含这些页面分享自身 页面路径关键词匹配 include 优先级比 exclude 高，
          // 可以配置exclude为空数组表示支持所有页面
          // pageSlef优先级高于pageHome
          // include: ['page/test'],
          // 排除这些页面 不进行分享
          exclude: []
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
          title: 'DUXUI',
          desc: '同时兼容小程序、H5、RN',
          image: 'https://img.zhenxinhuixuan.com/weiwait/cropper/2lVCofRIu6Jl3jNebxCA6VkEMUeaobvLWFYMTiaG.jpg'
        },
        platform: {
          app: {
            // 配置分享到小程序的原始id 同时相当于开关
            weappUserName: '',
            // 配置分享到h5的url 同时相当于开关
            h5Url: 'https://duxui.cn',
          }
        }
      }
    },
    // 新php模块化系统
    duxcms: {
      request: {
        origin: 'https://mock.dux.plus',
        path: 'api', // 域名二级目录
        secretId: '53368068',
        secretKey: '6c278fbf1791fbed3ae79197de03f65f',
        devOpen: false,
        devToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJpYXQiOjE2ODc5Mzg3NDEsImV4cCI6MTY5MDUzMDc0MSwiaWQiOjZ9.kCb82Y3bgUJWUo_WYsUPO1cLYzF1OJdEWTKAj9iNlF0'
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
        appName: 'duxui'
      }
    }
  }
}

export default config
```

## 后端框架

在我开发的项目中，后端框架是我的合伙人负责的，后端同样也是采用模块化的开发模式完成的，duxapp框架对后端框架已经打好了对接的基础，如果你考虑进一步提升后端的开发效率，可以考虑使用

后端开发文档：[https://www.dux.cn/](https://www.dux.cn/)

## 总结

这一篇文章已经很长了，duxapp框架中还有很多内容，无法在这里一一介绍，像下面这些

- 模块主题
- 模块安装与发布
- 快速开发APP(React Native)
- 请求上传
- 路由系统
- 开放模块(用户管理、微信、支付宝、页面设计器等)
- 等等

请前往开发文档查看详细教程

开发文档：[http://duxapp.com/](http://duxapp.com/)

GitHub：[https://github.com/duxapp](https://github.com/duxapp)
