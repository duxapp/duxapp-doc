---
sidebar_position: 5
---

# Loading 加载动画

用于展示loading动画，类似于ios那样的菊花

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Loading' />

```jsx
import { Loading } from '@/duxapp'

const Example = () => {
  return <Loading color='blank' size={32} />
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