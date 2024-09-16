---
sidebar_position: 9
---

# 全局状态

全局状态是一个很实用的功能，例如管理用户信息，组件间状态共享等功能都需要用到全局状态，react有很多成熟的全局状态管理工具，但是很多写起来太过麻烦，duxapp提供了几种应对不同场景的全局状态的方案，当然如果你需要其他全局状态，可以自行集成

## 局部全局状态

这种全局状态方案的使用场景，在于父子组件之间的状态共享

```jsx
import { contextState } from '@/duxapp'
import { Text } from '@/duxui'

const A = () => {

  return <contextState.Provider defaultValue='张三'>
    <B />
    <C />
  </contextState.Provider>
}

const B = () => {
  const [name] = contextState.useState()

  return <Text>{name}</Text>
}

const C = () => {
  const [, setName] = contextState.useState()

  return <Text onClick={() => setName('李四')}>设置名称为李四</Text>
}
```

也可以在A组件中控制这个值的变化

```jsx
import { contextState } from '@/duxapp'
import { Text } from '@/duxui'
import { useState } from 'react'

const A = () => {

  const [name, setName] = useState()

  return <contextState.Provider value={name}>
    <B />
    <C />
    <Text onClick={() => setName('王五')}>设置名称为王五</Text>
  </contextState.Provider>
}

const B = () => {
  const [name] = contextState.useState()

  return <Text>{name}</Text>
}

const C = () => {
  const [, setName] = contextState.useState()

  return <Text onClick={() => setName('李四')}>设置名称为李四</Text>
}

```

这里只演示了一层组件的嵌套，多层组件的嵌套也是支持的

## 全局状态

这个状态可以在整个运行时内所有页面或者组件内调用

```js
import { creatGlobalState } from '@/duxapp'

/** 需要在合适的地方创建，然后导出，在此处仅演示如何使用 */
const globalState = creatGlobalState({ text: '默认值' })

// 任何地方设置值
globalState.setState({ text: '设置的值' })

// 在组件或者hook中取值
const data = globalState.useState()
```

这个方法使用比较单间，如果你需要更复杂的功能，例如用户信息管理，可以使用下面的全局状态管理

## 全局状态管理

全局状态管理是用 `ObjectManage` 这个类来实现的，你需要继续扩展编写这个类来实现功能，下面以用户信息管理来演示如何使用这个类

- 定义一个用户管理类继承到`ObjectManage`
- 通过`data`，编写默认数据
- 通过构造函数设置 `ObjectManage` 的参数，参数的意思是使用缓存，缓存数据，当你更新数据时，数据会被自动设置到本地缓存中，下次启动将自动读取缓存

```js
import { ObjectManage } from '@/duxapp'

class UserManage extends ObjectManage {
  
  constructor() {
    super({
      cacheKey: 'userInfo',
      cache: true
    })
  }

  data = {
    // 登录状态
    status: false,
    // ...其他模块的用户信息
  }
}

/**
 * 实例化这个用户管理对象并且导出
 */
export const user = new UserManage()
```

这样就获得了一个基本的全局状态，要使用这些全局状态，可以在组件、hook、或者其他任何位置
```js
// 直接调用当前数据
user.data.status

// 使用hook调用数据
const data = user.useData()
data.status
```

要设置这些数据这样操作
```js
// 使用hook调用数据
user.set({ status: true })
// 或者使用函数
user.set(oldData => ({ ...oldData, status: true }))
```

对于用户信息管理，他还需要一些其他的操作，都可以在用户管理类里面进行扩展，例如判断是否登录，去登录、退出登录、更新用户信息、获取线上用户信息等

```js
import { ObjectManage } from '@/duxapp'

class UserManage extends ObjectManage {
  
  constructor() {
    super({
      cacheKey: 'userInfo',
      cache: true
    })
  }

  data = {
    // 登录状态
    status: false,
    // ...其他模块的用户信息
  }

  isLogin = () => !!this.data.status

  login = () => {
    // 登录逻辑
  }

  logout = () => {
    // 退出登录逻辑
  }

  getOnlineUserInfo = () => {
    // 请求用户信息接口更新用户信息
    request('').then(res => this.set(res))
  }

  setUsreInfo = data => {
    this.set(old => ({ ...old, ...data }))
    // 请求接口更新用户信息
    request({
      url: '',
      method: 'POST',
      data
    })
  }
}

/**
 * 实例化这个用户管理对象并且导出
 */
export const user = new UserManage()
```

这里仅是举例，用户模块里面的用户管理功能远比此例子复杂，可以前往查看
