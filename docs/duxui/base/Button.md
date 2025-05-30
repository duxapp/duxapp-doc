---
sidebar_position: 1
---


# Button 按钮

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Button' />

```jsx
import { Button, Header, ScrollView, TopView, GroupList, Space, duxappTheme } from '@/duxuiExample'

export default function ButtonExample() {
  return <TopView>
    <Header title='Button' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础按钮'>
          <Button type='primary'>按钮</Button>
        </GroupList.Item>
        <GroupList.Item title='镂空按钮'>
          <Button plain type='primary'>按钮</Button>
        </GroupList.Item>
        <GroupList.Item title='使用渐变'>
          <Space>
            <Button color={[duxappTheme.primaryColor, duxappTheme.secondaryColor]}>默认从左到右</Button>
            <Button color={[duxappTheme.primaryColor, duxappTheme.secondaryColor]} colorAngle={180}>指定角度从上到下</Button>
          </Space>
        </GroupList.Item>
        <GroupList.Item title='圆角类型'>
          <Space row>
            <Button type='primary' radiusType='round'>按钮</Button>
            <Button type='primary' radiusType='round-min'>按钮</Button>
            <Button type='primary' radiusType='square'>按钮</Button>
          </Space>
        </GroupList.Item>
        <GroupList.Item title='颜色'>
          <Space>
            <Button>默认</Button>
            <Button type='primary'>主色</Button>
            <Button type='secondary'>辅色</Button>
            <Button type='success'>成功</Button>
            <Button type='warning'>警告</Button>
            <Button type='danger'>失败</Button>
          </Space>
        </GroupList.Item>
        <GroupList.Item title='禁用'>
          <Button type='primary' disabled >按钮</Button>
        </GroupList.Item>
        <GroupList.Item title='加载中'>
          <Button type='primary' loading>按钮</Button>
        </GroupList.Item>
        <GroupList.Item title='按钮尺寸'>
          <Space>
            <Button type='primary' size='s'>按钮 s</Button>
            <Button type='primary' size='m'>按钮 m</Button>
            <Button type='primary' size='l'>按钮 l</Button>
          </Space>
        </GroupList.Item>
      </GroupList>

    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

如果指定了 `openType` 那么他就会继承 [Button Props](https://nervjs.github.io/taro-docs/docs/components/forms/button) （仅限小程序端）

### type

按钮类型，类型用来指定主题颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'primary', 'secondary', 'success', 'danger', 'warning', 'custom1', 'custom2', 'custom3') | 否 | default |

### color

按钮颜色 设置多个颜色(数组的第一项和第二项)可以渐变 此属性优先级低于type

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| string[] | 否 |  |

### colorAngle

当你设置了多个颜色后，指定渐变颜色的角度，默认90从左到右

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 90 |

### radiusType

指定按钮圆角类型

- square 直角
- round 圆角
- round-min 很小的圆角

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('square', 'round', 'round-min') | 否 | round-min |

### size

按钮尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('s', 'm', 'l') | 否 | m |

### plain

是否镂空效果，这个效果有边框和文本，背景透明，当为渐变是此属性不会生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disabled

是否禁用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### loading

是否显示loading动画，显示在按钮的左侧

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### onClick

按钮点击事件，如果按钮 `disabled` 设置为true，不会触发这个事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (e) => void | 否 |  |

### openType

小程序的 openType属性 请查看Taro文档 [OpenType](https://nervjs.github.io/taro-docs/docs/components/forms/button#opentype)

当指定这个属性后，按钮组件将使用 Button去实现，否则使用View实现

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [OpenType](https://nervjs.github.io/taro-docs/docs/components/forms/button#opentype) | 否 |  |

### textStyle

按钮文字样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### renderContent

自定义渲染按钮内容 当你的内容是图片或者图标以外的内容时，使用此属性替换

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### children

按钮内容 支持文本或者图标

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| ReactElement | 否 |  |

## 主题配置

主题配置位于 `option.duxui.button`

### color

用于指定默认 `color` 属性

### radiusType

用于指定默认的 radiusType 属性

### size

用于指定默认的 size 属性

### plain

用于指定默认的 plain 属性

### sizes

用于指定不同size下按钮的大小

可以指定三个尺寸的字号，高度，内边距

```js
{
  s: { fs: 24, p: 20, h: 50 },
  m: { fs: 28, p: 30, h: 70 },
  l: { fs: 32, p: 40, h: 90 }
}
```