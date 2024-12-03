---
sidebar_position: 5
---

# Grid 宫格

用于实现9宫格这样的布局方式

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Grid' />

```jsx
import { Grid, Text } from '@/duxui'

<Grid column={3}>
  <Text>内容1</Text>
  <Text>内容2</Text>
  <Text>内容3</Text>
  <Text>内容4</Text>
  <Text>内容5</Text>
</Grid>
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### column

每行显示多少个内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 4 |

### square

将每一项强制显示为正方形

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### gap

单元格之间的间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0 |

### rowGap

行间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | gap |

### columnGap

列间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | gap |

### itemStyle

每一个元素容器的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |
