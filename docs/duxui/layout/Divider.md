---
sidebar_position: 4
---

# Divider 分割线

使用边框实现的分割线

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Divider' />

```jsx
import { Divider, Header, ScrollView, TopView, GroupList, px } from '@/duxuiExample'
import { View } from '@tarojs/components'
import './Divider.scss'

export default function DividerExample() {
  return <TopView>
    <Header title='Divider' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <View className='divider-item'>
            <Divider />
          </View>
        </GroupList.Item>
        <GroupList.Item title='竖向'>
          <View className='divider-item gap-4 flex-row' style={{ height: px(200) }}>
            <Divider vertical type='solid' size={10} />
            <Divider vertical type='dashed' size={10} />
            <Divider vertical type='dotted' size={10} />
          </View>
        </GroupList.Item>
        <GroupList.Item title='类型'>
          <View className='divider-item gap-3'>
            <Divider type='solid' size={10} />
            <Divider type='dashed' size={10} />
            <Divider type='dotted' size={10} />
          </View>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
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

## DividerGroup Props

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

### self

对 `align-self` 的封装

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('start', 'end', 'center', 'baseline', 'stretch') | 否 |  |

### color

线条的主题颜色类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'primary', 'secondary', 'success', 'danger', 'warning', 'custom1', 'custom2', 'custom3') | 否 | default |
