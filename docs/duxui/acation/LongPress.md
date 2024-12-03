---
sidebar_position: 1
---

# LongPress 长按

长按事件封装

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='LongPress' />

```jsx
<LongPress onLongPress={() => toast('长按事件')}>
  <Column style={{ backgroundColor: '#fff', padding: 12 }}>
    <Text>长按此区域</Text>
  </Column>
</LongPress>
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### onLongPress

长按事件的处理函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (event: any) => void | 否 |  |

### onPress

点击事件的处理函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (event: any) => void | 否 |  |

