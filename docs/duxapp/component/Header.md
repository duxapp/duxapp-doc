---
sidebar_position: 2
---

# Header 头部导航

duxapp默认将头部设置为了自定义，每个页面面建议都使用一个头部组件作为标题的显示，且Header组件会控制状态栏颜色显示、H5页面标题显示

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Header' />

```jsx
import { Header, ScrollView, TopView, GroupList, Text } from '@/duxuiExample'

export default function CellExample() {
  return <TopView>
    <Header title='Header' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法' desc='Header 组件包含了状态栏的部分，所以此处呈现的高度比较高'>
          <Header title='标题' />
        </GroupList.Item>
        <GroupList.Item title='右侧自定义渲染' desc='右侧渲染的内容在小程序上会排除胶囊按钮，所以右侧内容在小程序上不会在最右侧'>
          <Header title='标题' renderRight={<Text>右侧</Text>} />
        </GroupList.Item>
        <GroupList.Item title='自定义样式'>
          <Header title='标题' style={{ backgroundColor: '#333' }} color='#fff' />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### title
标题，这个标题在在小程序中会在最左边，也就是返回按钮的右边，在其他端会在中间，为因小程序上右侧有胶囊，所以将标题放在左侧  

如果你在首页，首页不会有返回按钮，这时标题还在左侧他就会有点不太协调，通过设置 titleCenter 属性为 true 可以将首页的标题居中

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### navTitle

h5端显示在头部的标题 默认等于title 设置为空将不会产生变化

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | title |

### color

设置导航标题的颜色，返回按钮是用的图片，标题颜色设置为深色，那么放回按钮是黑色，反之则是白色

如果要设置导航单的背景颜色通过 style 的 `backgroundColor` 进行设置（不支持通过css）

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### absolute

使用绝对定位，让Header悬浮在其他内容上面，例如某些页面头部通常是一个幻灯片图片，是没有header的，但是他又有返回按钮

设置按钮颜色为黑色，设置背景颜色为透明

```jsx
import { Header, ScrollView, TopView } from '@/duxapp'

export default TopView.HOC(function Duxapp() {

  return <>
    <Header absolute color='#000' style={{ backgroundColor: 'transparent' }} />
    <ScrollView>
      ... 幻灯片
      ... 页面内容
    </ScrollView>
  </>
})
```

### show

用于控制组件的显示和隐藏

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### showStatus

show=false的情况下时候显示status状态栏

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### renderMain

自定义渲染标题区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderHeader

自定义渲染整个Header，包括返回区域和右侧区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderLeft

自定义渲染右侧区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderRight

自定义渲染返回区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### titleCenter

强制将标题显示在中间 仅在主页生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### onBackClick

左侧按钮点击事件 点击左侧按钮时，如果传入了点击事件 则点击按钮时不会触发返回操作

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| () => void | 否 | |

## Header.Back Props

返回按钮组件，当你使用了`renderHeader`属性的时候，返回按钮将不在header上，你可以使用这个组件替代返回按钮的位置。

```jsx
import { Header } from '@/duxapp'

<Header 
  title='页面标题'
  renderHeader={<View>
    <Header.Back />
    <View>其他部分</View>
  </View>}
/>
```

:::info
Header.Back 基本只有这一种用法，这个组件不可单独使用，使用了将无法达到预定功能
:::

## 主题配置

header的主题配置在 `theme.header`

### color

默认背景颜色，仅支持rgb hex值，请勿使用纯单词 设置为数组将显示一个渐变按钮

| 类型 | 默认值 |
| ---- | ------- |
| string \| string[] | #fff |

### textColor

默认文字颜色

| 类型 | 默认值 |
| ---- | ------- |
| string | #000 |

### showWechat

微信H5是否显示header

| 类型 | 默认值 |
| ---- | ------- |
| boolean | false |

### showWap

除去微信端，其他h5是否显示header

| 类型 | 默认值 |
| ---- | ------- |
| boolean | true |