---
sidebar_position: 2
---

# Row flex横向

这是用于快速横向布局的组件

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Row' />

```jsx
import { Column, Row, Text } from '@/duxui'

const Child = () => {

  return list.map(item => <Column key={item} className='p-2 bg-white' style={{ height: 24 * item }}>
    <Text>内容{item}</Text>
  </Column>)
  return
}

<Row className='gap-2'>
  <Child />
</Row>

<Row items='center' className='gap-2'>
  <Child />
</Row>

<Row items='start' className='gap-2'>
  <Child />
</Row>
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

在RN端不完全继承

### wrap

是否自动换行 相当于 `flex-wrap: wrap`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### items

对 `align-items` 的封装

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('start', 'end', 'center', 'baseline', 'stretch') | 否 | stretch |

### justify

对 `justify-content` 的封装

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('start', 'end', 'center', 'between', 'around') | 否 | start |

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

