---
sidebar_position: 1
---

# Column flex竖向

这是用于快速竖向布局的组件

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Column' />

```jsx
import { Column, Text } from '@/duxui'

const list = [1, 2, 3]

const Child = () => {

  return list.map(item => <Column key={item} className='p-3 bg-white r-2'>
    <Text>内容{item}</Text>
  </Column>)
}

<Column className='gap-2'>
  <Child />
</Column>

<Column items='center' className='gap-2'>
  <Child />
</Column>

<Column items='start' className='gap-2'>
  <Child />
</Column>
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

在RN端不完全继承

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

