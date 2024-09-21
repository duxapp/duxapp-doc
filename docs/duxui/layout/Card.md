---
sidebar_position: 6
---

# Card 卡片

卡片布局，带有外边距，内边距、圆角、阴影的组件

## 示例

```jsx
import { Card, Text } from '@/duxui'

<Card margin>
  <Text>标题</Text>
  <Text>简介</Text>
</Card>
```

## Props

如果设置 shadow 设置为 true，则继承自[BoxShadow Props](../base/BoxShadow)

否则继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### shadow

是否显示阴影

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### radius

圆角大小

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 24 |

### margin

是否使用外边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disableMarginTop

启用外边距后，禁用上边的外边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disableMarginBottom

启用外边距后，禁用下边的外边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### verticalPadding

是否显示垂直方向的内边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

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

## 主题配置

主题配置位于 `theme.card`

### shadow

用于配置默认是否开启阴影效果

### radius

用于配置默认的radius大小

### margin

用于配置开启margin后margin的大小