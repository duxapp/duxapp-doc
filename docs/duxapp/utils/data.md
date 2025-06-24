---
sidebar_position: 7
---

# 数据管理

这是一个用来管理数据、数据缓存、使用hook的管理工具

如果你还不了解这个工具的用途，请在入门教程中[全局状态管理](/docs/course/started/globalState#全局状态管理)查看教程

## 示例
```js
import { ObjectManage } from '@/duxapp'

class UserManage extends ObjectManage {
  
  constructor() {
    super({
      cacheKey: 'userInfo',
      cache: true,
      cacheSync: true,
      defaultData: {
        // 登录状态
        status: false,
        // ...其他模块的用户信息
      }
    })
  }
}

/**
 * 实例化这个用户管理对象并且导出
 */
export const user = new UserManage()

// 设置数据
user.set({ status: true })
user.set(old => ({ ...old, status: true }))

// 在hook中取数据
const data = user.useData()

// 在非hook中取数据
const data = user.data
```

## 属性

### data

这个字段用来存放当前实例的数据，这是一个对象，只读属性，如果你要设置它，需要使用 [set()](#set)


### cache

当前实例使用的cache实例

### event

当前的事件 [事件系统](/docs/duxapp/utils/event)的实例

可以用来监听缓存读取、设置数据、清空数据

```js
this.event.on((data, type) => {
  // type 'set' | 'cache' | 'clear' | 'no-cache'
})
```

## 静态方法

### getInstance()

获取当前唯一实例  
使用这个方法，就不需要 new 一个对象导出  
可以用作优化：在使用时才读取缓存，会在第一次调用 `getInstance()` 方法的时候初始化对象实例

```js
class MyData extends ObjectManage {
  constructor() {
    super({
      cache: true,
      cacheKey: 'my-data-key'
    })
  }
}
// 异步获取数据，因为获取本地缓存是异步的，所以需要使用异步获取，而不是直接读取data
MyData.getInstance().getDataAsync().then(data => {})
// hook中调用数据
const data = MyData.getInstance().useData()
// 合并数据
MyData.getInstance().merge({ test: 1 })
```

## 方法

### ObjectManage(option)

构造函数

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| cache | boolean | 否 | false | 是否开启缓存 |
| cacheKey | string | 否 |  | 保存到本地缓存中用的key |
| cacheSync | boolean | 否 |  | 同步获取本地缓存 仅小程序 H5支持（警告：请只把少量的重要数据使用同步获取，例如获取用户信息，不然会导致启动缓慢） |
| defaultData | object | 否 |  | 默认data, 如果要设置默认数据，特别是cacheSync为true的情况下，一定要通过 defaultData 指定默认数据 而不是在当前类直接指定data |

### set(data)

设置数据，可以使用一个回调函数，这个函数传入的参数是之前的data，这个方法不会合并data数据，你需要手动处理

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| data | object \| (oldData: object) => data | 是 |  | 要设置的数据 |

### merge(data)

和set不同的是，你设置的数据将会和原来的数据进行简单的合并

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| data | object \| (oldData: object) => data | 是 |  | 要设置的数据 |

### clear()

清除数据

### onSet(callback, noCache, onLast)

监听设置数据，调用 `set()` 的时候就会执行这个回调

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| callback | data => void | 是 |  | 回调函数 |
| noCache | boolean | 否 |  | 传入 true 才会返回 `no-cache` 类型 |
| onLast | boolean | 否 |  | 是否监听事件的最后一条数据，在指定 `cacheSync` 为 `true` 的情况下会非常有效 |

```js
this.event.onSet((data, type) => {
  // type 'set' | 'cache' | 'clear' | 'no-cache'
})
```

### useData(key)

使用当前的数据的hook，当用户设置数据后会自动更新

返回最新的data

需要在 React Hook 中使用

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| key | string | 否 |  | 传入参数和指定使用数据的某个字段 |

### getDataAsync()

异步获取data数据，主要用于在缓存还未读取之前调用的话，确保返回缓存data
