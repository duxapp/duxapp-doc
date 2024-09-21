---
sidebar_position: 9
---

# 常用工具

## 方法

### toast(msg)

对 Taro 的 showToast 的简单封装，方便调用

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| msg | string \| object | 弹出的消息 |

### isIphoneX()

判断是不是有下巴的设备

### asyncTimeOut(time)

对setTimeout的Promise封装

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| time | number | 延迟时间(毫秒) |

```js
import { asyncTimeOut } from '@/duxapp'

await asyncTimeOut(2000)
```

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| clear | () => void | 用于清除定时器 |

```js
import { asyncTimeOut } from '@/duxapp'

const task = asyncTimeOut(2000)

// task.clear() 如果需要，可以调用此方法清除定时器

await task
```

### getPlatform()

获取当前平台标识

RN端会返回 `app`，h5端如果在微信里面会返回 `wechat`，否则返回 `wap`，其他端返回 `process.env.TARO_ENV`

返回值 `enum('app', 'wechat', 'wap', ...)`

### stopPropagation(e)

用于阻止事件冒泡

```jsx
import { stopPropagation } from '@/duxapp'

<View onClick={stopPropagation}></View>
```

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| e | object | 事件参数 |

### px(px)

对Taro的 `pxTransform` 进行封装，写起来更简洁

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| px | number | px值 |