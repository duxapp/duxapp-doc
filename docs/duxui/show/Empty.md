---
sidebar_position: 8
---

# Empty 空数据

某些列表数据为空时可以用这个组件显示

## 示例

```jsx
<Empty />
<Empty title='自定义标题' />
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### title

标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 什么都没有~ |

### url

用于替换默认的图片

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### icon

用于替换默认的图片

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### renderIcon

自定义渲染替换图片区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderFooter

底部自定义渲染

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

