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

## 路由跳转

```js
import { route } from '@/duxapp'

// 跳转页面
route.push('duxcmsMall/goods/list')

// 重定向跳转
route.redirect('duxcmsMall/goods/list')

// 返回上一页
route.back()

// 返回传参
const { backdata } = await route.push('duxcmsMall/goods/list')
const res = await backdata()
// res { name: '返回名称' }
// duxcmsMall/goods/list 页面
route.back(1, { name: '返回名称' })
```

## 路由参数

```js
import { route } from '@/duxapp'
// 在 hook 或者 函数组件内使用
const { path, params } = useRoute()
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

## 使用nav跳转

nav 是一个集成了多种跳转方式的方法，采用协议解析的方法进行跳转

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
route.nav('https:www.baidu.com')

// 打开地图
route.nav('map:point', {
  longitude: 122.22,
  latitude: 23.33,
  name: '地点名称',
  address: '地点位置'
})
```