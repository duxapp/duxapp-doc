---
sidebar_position: 1
---

# Column flex竖向

这是用于快速竖向布局的组件

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Column' />

```jsx
import { Header, ScrollView, TopView, GroupList, Column, Text } from '@/duxuiExample'

const list = [1, 2, 3]

const Child = () => {

  return list.map(item => <Column key={item} className='p-3 bg-white r-2'>
    <Text>内容{item}</Text>
  </Column>)
}

export default function ColumnExample() {
  return <TopView>
    <Header title='Column' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='默认竖向'>
          <Column className='gap-2'>
            <Child />
          </Column>
        </GroupList.Item>
        <GroupList.Item title='内容居中'>
          <Column items='center' className='gap-2'>
            <Child />
          </Column>
        </GroupList.Item>
        <GroupList.Item title='内容开始'>
          <Column items='start' className='gap-2'>
            <Child />
          </Column>
        </GroupList.Item>
        <GroupList.Item title='内容结束'>
          <Column items='end' className='gap-2'>
            <Child />
          </Column>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
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

