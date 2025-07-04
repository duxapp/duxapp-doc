---
sidebar_position: 1
---

# 开始

用户模块是用来管理用户信息、控制登录页面的基础组件

如果你的项目中有用户信息管理或者登录这样的功能，那么可以使用这个模块来管理

## 安装

```bash
yarn duxapp app add duxappUser
```

## 注册

需要在你的模块中调用注册方法，注册一个用户管理信息

mark为当前模块的标识，当你一个项目中有多个用户信息管理时有用

```jsx
import { user } from '@/duxappUser'

user.register('mark', {
  // 需要实现登录页面的内容，登录成功后触发 onLogin事件
  UserLogin: ({ onLogin }) => {
    // 在用户登录成功后执行，type是登录方式 data是用户信息
    const login = () => {
      onLogin({
        type: 'account',
        data: { ... 用户信息 }
      })
    }

    // 这不是一个页面里面不要使用TopView组件
    return <Column></Column>
  },
  // 注册一个判断用户是否登录的方法
  isLogin: data => !!data?.token
  // 注册一个获取用户id的方法
  getUserID: data => data?.id
  // 如果有微信端微信登录，需要注册一个跳转到登录地址的方法
  getH5WechatLoginUrl: async () => {
    return config.origin + '/wechat/login'
  },
  // 需要自行实现微信登录功能
  h5WechatLogin: async code => {
    // 返回登录成功的用户信息
  },
  // 注册一个获取线上用户信息的方法
  getOnlineUserInfo: async () => {

  },
})
```

## 使用

注册后就能使用了

```jsx
import { user } from '@/duxappUser'

// 去登录 异步方法，如果登录成功，可以继续执行后面的逻辑
await user.login()

// 判断是否登录
user.isLogin()

// 退出登录
user.logout()

// 监听登录状态变化
user.onLoginStatus((status, loginType) => {
  // status true是登录 false是退出登录
  // 如果在启动时用户是处于登录状态，那么你的监听会被执行
})

// hook获取用户信息 第一个用户信息，第二个登录状态
const [userInfo, loginStatus] = user.useUserInfo()

// 获取用户id
const id = user.getUserID()

// 获取用户信息
const userInfo = user.getUserInfo()

// 设置用户信息，这只会更新本地保存的用户信息，你还需要结合后端接口进行功能新
user.setInfo({
  nickname: '李四',
  sex: 2
})

// 设置单个用户信息
user.setKey('nickname', '李四')
```

## 结合路由

在之前的[路由配置](/docs/course/app/route#login)中，讲到配置的login属性，就是在这个模块使用的

如果你的某些页面是需要登录的，那么你就将那些页面配置这个属性为true

当跳转到这些配置了的页面时，如果用户未登录，那么会先登录，登录成功后才会跳转到该页面

## 封闭程序

这指的是app需要在启动时就登录的程序，所有功能都需要在登录后才能使用

在你的项目入口文件中调用下面的方法

```jsx
import { user, UserLogin } from '@/duxappUser'

// 请先执行 register 注册后在执行Start
user.register(...)

UserLogin.start()
```

如果你无法确定先后顺序，请直接将register注册中的 `UserLogin` 组件传入 `UserLogin.start()` 中

```jsx
import { user, UserLogin } from '@/duxappUser'

UserLogin.start(({ onLogin }) => {
  // 在用户登录成功后执行，type是登录方式 data是用户信息
  const login = () => {
    onLogin({
      type: 'account',
      data: { ... 用户信息 }
    })
  }

  // 这不是一个页面里面不要使用TopView组件
  return <Column></Column>
})
```