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
route.nav('tel:10086')

// 打开一个网址
route.nav('https://www.baidu.com')

// 打开地图
route.nav('map:point', {
  longitude: 122.22,
  latitude: 23.33,
  name: '地点名称',
  address: '地点位置'
})
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

### decodeParams(obj)

使用这个方法能自动将参数进行decodeURIComponent，并进行参数转码，小程序码的`scene`会被转码合并到参数中

通常你不需要调用这个方法，请使用 `useRoute` 获取参数

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
