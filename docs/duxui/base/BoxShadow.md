---
sidebar_position: 4
---

# BoxShadow 阴影

由于RN 安卓端对阴影的支持不太完善，使用这个组件可以实现阴影效果

在RN端是使用 [`react-native-fast-shadow`](https://github.com/alan-eu/react-native-fast-shadow) 实现的

:::info
新版本组件即将停用，从RN0.76开始原生支持 `box-shadow` css，请使用css样式
:::

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='BoxShadow' />

```jsx
import { BoxShadow, Header, ScrollView, TopView, GroupList, Text, duxappTheme } from '@/duxuiExample'
import './BoxShadow.scss'

export default function BoxShadowExample() {
  return <TopView>
    <Header title='BoxShadow' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <BoxShadow className='box-shadow-item'>
            <Text>这是内容</Text>
          </BoxShadow>
        </GroupList.Item>
        <GroupList.Item title='圆角'>
          <BoxShadow className='box-shadow-item' radius={16}>
            <Text>这是内容</Text>
          </BoxShadow>
        </GroupList.Item>
        <GroupList.Item title='深色'>
          <BoxShadow className='box-shadow-item' radius={16} color='#333' opacity={0.3} border={20}>
            <Text>这是内容</Text>
          </BoxShadow>
        </GroupList.Item>
        <GroupList.Item title='指定颜色'>
          <BoxShadow className='box-shadow-item' radius={16} color={duxappTheme.primaryColor} opacity={0.3} border={20}>
            <Text>这是内容</Text>
          </BoxShadow>
        </GroupList.Item>
        <GroupList.Item title='倾斜方向'>
          <BoxShadow className='box-shadow-item' radius={16} color='#333' opacity={0.3} border={20} x={10} y={10}>
            <Text>这是内容</Text>
          </BoxShadow>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

在RN端并不完全继承，只继承了一部分

### color

阴影颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | #999 |

### border

阴影边框大小

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 8 |

### opacity

阴影不透明度

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0.1 |

### x

阴影 x 轴偏移量

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0 |

### y

阴影 y 轴偏移量

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0 |