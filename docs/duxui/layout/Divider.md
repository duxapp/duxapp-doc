---
sidebar_position: 4
---

# Divider 分割线

使用边框实现的分割线

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Divider' />

```jsx
import { Divider } from '@/duxui'

<View className='gap-3'>
  <Divider type='solid' size={10} />
  <Divider type='dashed' size={10} />
  <Divider type='dotted' size={10} />
</View>

// 应用于子元素
<Divider.Group>
  <Text>文本1</Text>
  <Text>文本2</Text>
  <Text>文本3</Text>
</Divider.Group>
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### size

分割线宽度

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

### vertical

是否垂直布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### type

分割线类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('dotted', 'dashed', 'solid') | 否 | solid |

## Divider.Group Props

这个组件是将分割线应用于子元素，这是用循环`children`的方式添加的，所以你的子元素需要有实体，才能更好的显示分割线

这个组件并不会产生实体，仅是处理了 `children`

### size

分割线宽度

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

### vertical

是否垂直布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### type

分割线类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('dotted', 'dashed', 'solid') | 否 | solid |
