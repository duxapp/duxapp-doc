---
sidebar_position: 6
---

# 事件系统

事件系统可以在整个程序内执行监听和触发

## 示例

```js
import { QuickEvent } from '@/duxapp'

// 初始化
const event = new QuickEvent()

// 监听事件 remove 用于移除事件的监听
const { remove } = event.on(data => {

})

// 触发事件
event.trigger({
  name: '张三'
})
```

## 方法

### on(callback)

监听事件

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| callback | (...data) => void | 是 |  | 监听事件的回调函数 |

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| remove | () => void | 用于移除这个监听 |

### trigger(...params)

出用触发事件，可以传递多个参数，参数内容不限定
