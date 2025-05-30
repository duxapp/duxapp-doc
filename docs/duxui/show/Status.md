---
sidebar_position: 9
---

# Status 角标状态

显示在卡片四个角的状态

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Status' />

```jsx
import { Status, Header, ScrollView, TopView, GroupList, px } from '@/duxuiExample'
import { Text, View } from '@tarojs/components'

export default function StatusExample() {
  return <TopView>
    <Header title='Status' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法' desc='外层元素需要有 overflow-hidden 将内容进行裁剪'>
          <View className='bg-white items-center justify-center overflow-hidden' style={{ height: px(300) }}>
            <Text>这是内容</Text>
            <Status status={<Status.Incline>状态1</Status.Incline>} />
            <Status horizontal='right' status={<Status.Incline>状态2</Status.Incline>} />
            <Status horizontal='right' vertical='bottom' status={<Status.Incline>状态3</Status.Incline>} />
            <Status vertical='bottom' status={<Status.Incline>状态4</Status.Incline>} />
          </View>
        </GroupList.Item>
        <GroupList.Item title='类型'>
          <View className='bg-white items-center justify-center overflow-hidden' style={{ height: px(150) }}>
            <Text>default</Text>
            <Status status={<Status.Incline type='default'>状态</Status.Incline>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden' style={{ height: px(150) }}>
            <Text>primary</Text>
            <Status status={<Status.Incline type='primary'>状态</Status.Incline>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden' style={{ height: px(150) }}>
            <Text>secondary</Text>
            <Status status={<Status.Incline type='secondary'>状态</Status.Incline>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden' style={{ height: px(150) }}>
            <Text>success</Text>
            <Status status={<Status.Incline type='success'>状态</Status.Incline>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden' style={{ height: px(150) }}>
            <Text>danger</Text>
            <Status status={<Status.Incline type='danger'>状态</Status.Incline>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden' style={{ height: px(150) }}>
            <Text>warning</Text>
            <Status status={<Status.Incline type='warning'>状态</Status.Incline>} />
          </View>
        </GroupList.Item>
        <GroupList.Item title='作为父元素容器并组合使用'>
          <Status status={<Status.Incline>状态2</Status.Incline>}>
            <View className='bg-white items-center justify-center' style={{ height: px(150) }}>
              <Text>这是内容</Text>
              <Status horizontal='right' status={<Status.Incline>状态2</Status.Incline>} />
            </View>
          </Status>
        </GroupList.Item>
        <GroupList.Item title='Common组件'>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>default</Text>
            <Status status={<Status.Common type='default'>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>primary</Text>
            <Status status={<Status.Common type='primary'>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>secondary</Text>
            <Status status={<Status.Common type='secondary'>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>success</Text>
            <Status status={<Status.Common type='success'>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>danger</Text>
            <Status status={<Status.Common type='danger'>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>warning</Text>
            <Status status={<Status.Common type='warning'>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>内测圆角</Text>
            <Status status={<Status.Common type='primary' radius>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>尺寸s</Text>
            <Status status={<Status.Common size='s'>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>尺寸m</Text>
            <Status status={<Status.Common size='m'>状态</Status.Common>} />
          </View>
          <View className='bg-white items-center justify-center overflow-hidden r-2' style={{ height: px(150) }}>
            <Text>尺寸l</Text>
            <Status status={<Status.Common size='l'>状态</Status.Common>} />
          </View>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### horizontal

横向位置

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| emun('left', 'right') | 否 | left |

### vertical

竖向位置

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| emun('top', 'bottom') | 否 | top |

### status

要渲染的状态组件元素

组件提供了两种状态可选择 `Status.Incline` `Status.Common`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

## Status.Incline Props

这个组件的倾斜45度的角标状态

### type

颜色类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'primary', 'secondary', 'success', 'danger', 'warning', 'custom1', 'custom2', 'custom3') | 否 | primary |

### textStyle

添加给文本的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### children

子元素请添加字符串

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

## Status.Common Props

### type

颜色类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'primary', 'secondary', 'success', 'danger', 'warning', 'custom1', 'custom2', 'custom3') | 否 | primary |

### size

尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('s', 'm', 'l') | 否 | m |

### radius

显示内测的圆角

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### textStyle

添加给文本的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### children

子元素请添加字符串

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |