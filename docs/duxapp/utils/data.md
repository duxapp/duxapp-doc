---
sidebar_position: 7
---

# 数据管理

这是一个用来管理数据、数据缓存、使用hook的管理工具

如果你还不了解这个工具的用途，请在入门教程中[全局状态管理](/docs/course/started/globalState#全局状态管理)查看教程

## 属性

### data

这个字段用来存放当前实例的数据，这是一个对象，只读属性，如果你要设置它，需要使用 [set()](#set)


### cache

当前实例使用的cache实例

## 方法

### ObjectManage(option)

构造函数

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| cache | boolean | 否 | false | 是否开启缓存 |
| cacheKey | string | 否 |  | 保存到本地缓存中用的key |
| defaultData | object | 否 |  | 默认data |

### set(data)

设置数据，可以使用一个回调函数，这个函数传入的参数是之前的data，这个方法不会合并data数据，你需要手动处理

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| data | object \| (oldData: object) => data | 是 |  | 要设置的数据 |

### clear()

清除数据

### onSet(callback)

监听设置数据，调用 `set()` 的时候就会执行这个回调


| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| callback | data => void | 是 |  | 回调函数 |

### useData()

使用当前的数据的hook，当用户设置数据后会自动更新

返回最新的data
