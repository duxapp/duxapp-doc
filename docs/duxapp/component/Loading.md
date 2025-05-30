---
sidebar_position: 5
---

# Loading 加载动画

用于展示loading动画，类似于ios那样的菊花

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Loading' />

```jsx
import { Loading, Header, ScrollView, TopView, GroupList, px } from '@/duxuiExample'
import { View } from '@tarojs/components'

export default function LoadingExample() {
  return <TopView>
    <Header title='Loading' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Loading />
        </GroupList.Item>
        <GroupList.Item title='尺寸'>
          <Loading size={72} />
        </GroupList.Item>
        <GroupList.Item title='白色模式'>
          <View className='p-3 bg-primary items-center'>
            <Loading color='blank' />
          </View>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### color

loading颜色，有深色，浅色两个选项

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('dark', 'blank') | 否 | dark |

### size

尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 52 |