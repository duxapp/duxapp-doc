---
sidebar_position: 2
---

# Row flex横向

这是用于快速横向布局的组件

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Row' />

```jsx
import { Header, ScrollView, TopView, GroupList, Column, Row, Text } from '@/duxuiExample'

const list1 = [1, 2, 3, 4, 5]

const list2 = [1, 2, 3]

const list3 = [1, 2, 3, 4, 5, 6, 7]

const Child = ({
  list = list1
}) => {

  return list.map(item => <Column shrink key={item} className='p-2 bg-white' style={{ height: 24 * item }}>
    <Text>内容{item}</Text>
  </Column>)
  return
}

export default function RowExample() {

  return <TopView>
    <Header title='Row' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='默认'>
          <Row className='gap-2'>
            <Child />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='items居中'>
          <Row items='center' className='gap-2'>
            <Child />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='items开始'>
          <Row items='start' className='gap-2'>
            <Child />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='items结束'>
          <Row items='end' className='gap-2'>
            <Child />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='justify开始'>
          <Row justify='start' className='gap-2'>
            <Child list={list2} />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='justify居中'>
          <Row justify='center' className='gap-2'>
            <Child list={list2} />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='justify结束'>
          <Row justify='end' className='gap-2'>
            <Child list={list2} />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='justify两端'>
          <Row justify='between' className='gap-2'>
            <Child list={list2} />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='justify周围'>
          <Row justify='around' className='gap-2'>
            <Child list={list2} />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='换行'>
          <Row wrap items='center' className='gap-2'>
            <Child list={list3} />
          </Row>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
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

