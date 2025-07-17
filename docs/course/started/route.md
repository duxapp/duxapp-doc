---
sidebar_position: 3
---

# 路由

路由系统对原生的路由进行了封装，当你使用duxapp时，需要使用封装过的路由

相对于原生路由进行了一下封装
- 路由拦截
- 传递任何类型参数到页面
- 路由协议解析
- 返回传参
- 封装返回主页方法

## 基础路由跳转

```js
import { route } from '@/duxapp'

// 跳转页面
route.push('duxcmsMall/goods/list', { name: '张三' })

// 重定向跳转
route.redirect('duxcmsMall/goods/list', { name: '张三' })

// 返回上一页
route.back()

// 返回主页
route.back('home')

// 返回传参
const { backdata } = await route.push('duxcmsMall/goods/list')
const res = await backdata()
// res { name: '返回名称' }
// duxcmsMall/goods/list 页面
route.back(1, { name: '返回名称' })
```

## 接收路由参数

```js
import { route } from '@/duxapp'
// 在 hook 或者 函数组件内使用
const { path, params } = route.useRoute()
```

## 使用相对路径跳转

使用相对路径，是基于当前用户可见的页面路径，计算相对位置的，需要在合适的地方调用

```js
route.nav('./page')
route.push('../group/page')
```

## 监听路由跳转

```js
import { route }  from '@/duxapp/utils'

// 比如在user模块监听路由跳转 判断是否需要登录 未登录的让其执行登录
// 如果在这个地方抛出错误，则跳转不会成功
// 注意这个函数的返回值是一个Promise
route.onNavBefore(async (config, params) => {
  if (config?.login && !this.isLogin()) {
    // 执行登陆 登陆成功后继续跳转
    await this.login()
    // 让路由在停顿一会之后再继续执行
    await asyncTimeOut(100)
  }
})

// 当跳转页面并且满足条件时，将不会跳转
route.onNavBefore(async (config, params) => {
  if (params.path === 'duxcmsMall/goods/list') {
    if (xxx) {
      throw '禁止跳转'
    }
  }
})

// 监听跳转成功
route.onNavAfter(params => {

})
```

## 更多路由跳转

nav 是一个集成了多种跳转方式的方法，采用协议解析的方法进行跳转，方便后台控制跳转地址

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
查看[路由](/docs/duxapp/utils/route)获取更多细节

## 路由配置

如何配置路由请查看[路由配置](/docs/course/app/route)章节
