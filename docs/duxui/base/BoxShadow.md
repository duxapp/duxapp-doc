---
sidebar_position: 4
---

# BoxShadow 阴影

由于RN 安卓端对阴影的支持不太完善，使用这个组件可以实现阴影效果

在RN端是使用 [`react-native-fast-shadow`](https://github.com/alan-eu/react-native-fast-shadow) 实现的

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='BoxShadow' />

```jsx
import { BoxShadow, Text } from '@/duxui'

<BoxShadow>
  <Text>这是内容</Text>
</BoxShadow>
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