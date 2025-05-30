---
sidebar_position: 3
---

# Space 间距

用于控制子元素的间距，通过 `gap` 实现，建议直接使用全局样式的 `gap`

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Space' />

```jsx
import { Space, Header, ScrollView, TopView, GroupList } from '@/duxuiExample'
import { View, Text } from '@tarojs/components'
import './Space.scss'

export default function SpaceExample() {
  return <TopView>
    <Header title='Space' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Space>
            <View className='speac-item'>内容1</View>
            <View className='speac-item'>内容2</View>
            <View className='speac-item'>内容3</View>
          </Space>
        </GroupList.Item>
        <GroupList.Item title='横向'>
          <Space row>
            <Text className='speac-item'>1</Text>
            <Text className='speac-item'>2</Text>
            <Text className='speac-item'>3</Text>
            <Text className='speac-item'>4</Text>
          </Space>
        </GroupList.Item>
        <GroupList.Item title='尺寸'>
          <Space size={64}>
            <View className='speac-item'>内容1</View>
            <View className='speac-item'>内容2</View>
            <View className='speac-item'>内容3</View>
          </Space>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

在RN端不完全继承

### size

元素间的间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 24 |

### between

是否在元素的开头和结束位置也加上间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### row

是否横向排列

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

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

