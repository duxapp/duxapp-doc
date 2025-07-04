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

### isPlatformMini

`boolean` 常量，判断当前环境是不是各种小程序，包括这个数组内的平台 

`['weapp', 'tt', 'alipay', 'swan', 'qq', 'jd', 'quickapp']`

### transformStyle(obj)

在编写 style 样式的时候，如果要写 `transform`，需要使用这个函数转换，用来支持多端

```jsx
<Animated.View
  animation={an3}
  className='bg-primary'
  style={{
    width: px(100),
    height: px(100),
    transform: transformStyle({
      translateX: px(50),
      translateY: px(50),
    })
  }}
/>
```

### nextTick(callback)

RN 端导入这个 Taro 的方法使用会报错，所以将这个方法封装了一下，使用方法同 Taro 的 nextTick

### useBackHandler(callback, status)

使用 hook 可以阻止安卓端返回按钮

当 status 为的时候，点击返回按钮会调用 callback

如果不传入 status 默认为true

### useForceUpdate()

用于函数组件里面的 forceUpdate，hook 返回一个函数，执行这个函数就能刷新界面

### throttle(fn, delay, immediate)

创建一个节流函数