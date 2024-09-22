---
sidebar_position: 2
---

# 小程序快捷登录

这里一般是调用小程序，获取用户手机号的方式，进行快捷登录，不需要用户设置密码或者输入密码

```jsx
import { user } from '@/user'

user.register('mark', {
  // ... 之前的配置
  // 快捷登录的优先级高于默认的登录方式，快捷登录是以弹窗的方式弹出的登录
  WeappTelLogin: ({ onLogin, onCancel, onSkip }) => {
    // 登录成功调用 onLogin(data) data就是用户信息，不需要向之前的一样指定type

    // 如果用户关闭登录 调用 onCancel()

    // 点击跳过 调用 onSkip() 调用这个方法将会跳转到默认的登录方式
    
    // 返回的内容需要使用 absolute 定位让他以弹窗的形式出现在页面上
    return <View className='cms-login-weapp--mask inset-0 absolute'>
      登录弹窗内容
    </View>
  }
})
```