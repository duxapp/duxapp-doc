---
sidebar_position: 2
---

# Cell 单元格

单元格组件用来展示竖向的菜单列表，默认拥有阴影属性

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Cell' />

```jsx
import { Cell, CellGroup, Header, ScrollView, TopView, GroupList } from '@/duxuiExample'

export default function CellExample() {
  return <TopView>
    <Header title='Cell' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Cell title='菜单' />
        </GroupList.Item>
        <GroupList.Item title='右侧简介'>
          <Cell title='菜单' desc='简介' />
        </GroupList.Item>
        <GroupList.Item title='副标题'>
          <Cell title='菜单' subTitle='这是副标题' desc='简介' />
        </GroupList.Item>
        <GroupList.Item title='组'>
          <CellGroup>
            <Cell title='菜单1' />
            <Cell title='菜单2' />
            <Cell title='菜单3' />
            <Cell title='菜单4' />
          </CellGroup>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

如果在Group中，继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

如果单独使用 继承自[BoxShadow Props](BoxShadow)

### title

左侧标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### subTitle

左侧子标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### desc

右侧描述文字

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### renderIcon

自定义左侧图标

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### radius

圆角数值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 16 |

## CellGroup Props

CellGroup用于将多个Cell进行包装，包装后他们将成为一个整体

继承自[BoxShadow Props](BoxShadow)

### line

是否显示分割线

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### radius

圆角数值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 16 |

## 主题配置

### radius

这是个公共配置，读取的是 `theme.radius`
