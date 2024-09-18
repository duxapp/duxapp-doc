---
sidebar_position: 3
---

# LinearGradient 线性渐变

因为RN不支持通过css编写渐变，所以写了这个组件用于实现渐变功能

这个组件在RN端是使用Svg模拟实现的

这个组件的使用会有一些兼容性的差异，建议将这个组件作为背景使用

## 示例

```jsx
import { LinearGradient, px } from '@/duxui'

<LinearGradient colors={['#e94727', '#6661ee']} style={{ height: px(200) }}></LinearGradient>

// 从左到右
<LinearGradient colors={['#e94727', '#6661ee']} useAngle angle={90} style={{ height: px(200) }}></LinearGradient>
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### colors

渐变色列表

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [string, string] | 是 |  |

### locations

渐变色在渐变中的位置，必须是一个有序数组，取值范围为[0, 1]

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [number, number] | 否 |  |

### useAngle

是否使用角度控制渐变方向，默认值为false

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### angle

渐变角度，顺时针方向，单位为度，默认值为0 从上到下

useAngle 设置为ture是可用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0 |

### start

渐变开始位置，取值范围[0, 1]

```js
{
  x: 0,
  y: 0
}
```

### end

渐变结束位置，取值范围[0, 1]

```js
{
  x: 0,
  y: 0
}
```