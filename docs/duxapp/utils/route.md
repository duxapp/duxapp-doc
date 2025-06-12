---
sidebar_position: 1
---

# 路由

路由系统对原生的路由进行了封装，当你使用duxapp时，需要使用封装过的路由

你可以先阅读[入门教程中的路由](/docs/course/started/route)了解路由的使用方法

## 方法

### nav(path, params)

进行页面跳转，通过字符串解析的形式识别路由协议，具体支持的协议通过下面的示例可以查看到

```js
import { route }  from '@/duxapp'

// 跳转页面
route.push('duxcmsMall/goods/list', { name: '张三' })
route.nav('duxcmsMall/goods/list', { name: '张三' })

// 传递复杂参数
route.push('duxcmsMall/goods/list', { 
  name: '张三',
  func: () => {}
  obj: {
    name: '李四'
  }
})

// 重定向跳转
route.redirect('duxcmsMall/goods/list', { name: '张三' })
route.nav('redirect:duxcmsMall/goods/list', { name: '张三' })

// 重启程序
route.relaunch()
route.nav('relaunch:')

// 打开小程序插件
route.nav('plugin-private:插件参数')

// 返回上一页
route.back()
route.nav('back:')

// 返回2个页面
route.back(2)
route.nav('back:2')

// 返回到主页
route.back('home')
route.nav('back:home')

// 返回并传参
route.back(2, { name: '姓名' })
route.nav('back:2', { name: '姓名' })

// 拨打电话
route.tel('10086')
route.nav('tel:10086')

// 打开一个网址
route.nav('https://www.baidu.com')

// 打开地图
route.mapPoint({
  longitude: 122.22,
  latitude: 23.33,
  name: '地点名称',
  address: '地点位置'
})
route.nav('map:point', {
  longitude: 122.22,
  latitude: 23.33,
  name: '地点名称',
  address: '地点位置'
})
route.nav('map:point?longitude=122.22&latitude=23.33&name=地点名称&address=地点位置')

// 打开小程序 APP端项目需要包含wechat模块（H5端不能使用）
route.mini({
  appid: 'wx00000000',
  userName: 'gh_0000',
  path: 'pages/index/page2',
  type: 1,
  query: {
    a: 1,
    b: 2
  }
})
// 使用字符串模板打开小程序
route.nav('mini:wx00000000') // 小程序端跳转
route.nav('mini:wx00000000|gh_0000') // 同时要支持APP跳转需要加入原始id
route.nav('mini:wx00000000|gh_0000|2') // 打开体验版小程序 0正式版 1开发版 2体验版
route.nav('mini:wx00000000|gh_0000|pages/index/page2') // 指定打开页面
route.nav('mini:wx00000000|gh_0000|pages/index/page2?a=1') // 指定打开页面和参数
route.nav('mini:gh_0000|pages/index/page2?a=1') // 只有APP端可以只传入原始id
```

:::info
打开地图时，在微信中，如果你初始化了jssdk的功能，那么他会打开微信原生地图，否则将会通过网页打开一个百度地图
:::

### push(path, params)

跳转到页面

### redirect(path, params)

重定向到页面

### back(num, params)

返回页面，num要返回的页面数，params返回页面要传递的参数

当num传入 `'home'`，可以返回到主页

### relaunch()

重启程序

### tel(tel)

传入电话号码打开拨号盘

### mini(option)

打开小程序 APP端项目需要包含wechat模块（H5端不能使用）

option 参数说明

| 字段 | 类型 | 必填 | 说明 |
| ---- | ---- | -------- | ------- |
| appid | string | 否 | 小程序APPID(小程序端使用) |
| userName | string | 否 | 小程序原始id(RN端使用) |
| path | string | 否 | 要打开小程序的页面 |
| type | 0 \| 1 \| 2 | 否 | 小程序版本 0正式版 1开发版 2体验版 |
| query | AnyObject | 否 | 传递给小程序的参数 |

### mapPoint(option)

打开一个位置  
- 小程序启动内置地图  
- H5端如果注册了jssdk也会启动微信地图，否则启动一个网页打开位置  
- APP端会启动手机上的百度或者高德APP  
- 使用的是火星坐标系坐标（高德地图用的坐标系） 

option 参数说明

| 字段 | 类型 | 必填 | 说明 |
| ---- | ---- | -------- | ------- |
| longitude | number | 是 | 经度 |
| userName | number | 是 | 维度 |
| name | string | 是 | 位置名称 |
| address | string | 是 | 位置地址 |

### useRoute()

使用这个hook获取路由传递过来的参数、当前页面路径等信息

```js
const { params, path } = route.useRoute()
```

### onNavBefore(callback)

在页面跳转监听路由跳转，如果抛出`Promise reject`则可以阻止路由跳转

`callback(config, option) => Promise`

config 参数是路由配置中当前跳转页面配置的参数

option参数如下

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| path | string| 页面路径 |
| url | string | 包含页面参数的路径 |
| type | enum('navigateTo', 'redirectTo', 'navigateBack', 'reLaunch') | 包含页面参数的路径 |
| params | object | 传递到当前页面的参数 |

:::info
http https tel map 这几个协议拦截器不会生效
:::

### onNavAfter(callback)

监听页面跳转成功

`callback(option) => void`

option 和 onNavBefore的参数一致


:::info
back http https tel map 这几个协议不会触发次事件
:::

### getHashQueryVariable()

获取h5端的Hash参数和Hash值 返回一个对象

返回值
| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| hash | string| hash路径 |
| params | object | hash参数 |

### getQueryVariable()

获取h5端的参数返回一个对象，这不包含hash参数

### decodeParams(obj)

使用这个方法能自动将参数进行decodeURIComponent，并进行参数转码，小程序码的`scene`会被转码合并到参数中

通常你不需要调用这个方法，请使用 `useRoute` 获取参数

## 路由配置

如何配置路由请查看[路由配置](/docs/course/app/route)章节
