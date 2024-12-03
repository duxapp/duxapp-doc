---
sidebar_position: 2
---

# Input 输入框

对Taro Input的封装，新增了一些属性，基本不带样式，需要自行编写样式

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Input' />

```jsx
<Form.Item label='输入框' field='input1'>
  <Input placeholder='请输入' grow />
</Form.Item>
```

## Props

继承自Taro的[Input Props](https://nervjs.github.io/taro-docs/docs/components/forms/input)

### grow

设置为true相当于 `flex: 1`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### shrink

设置为true相当于 `flex-shrink: 0`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### self

对 `align-self` 的封装

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('start', 'end', 'center', 'baseline', 'stretch') | 否 |  |

### align

输入框文本对齐方式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('left', 'center', 'right') | 否 | left |

### onChange

值变化回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string) => void | 否 |  |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

## Input.Search Props

继承自[Input Props](#props)

这个组件是Input的封装，当用户快速输入时，进行了节流处理