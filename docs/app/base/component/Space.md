# 间距(Space)

`Space` 是一个用于处理组件之间的间距的组件。它提供了一种轻松管理子元素之间空间的方式，而不必通过为每个子元素设置 margin 或 padding。

### 使用方法

```jsx
import { Space } from '@/components/Space'

function Demo() {
  return (
    <Space size={10}>
      <View className='box'>Box 1</View>
      <View className='box'>Box 2</View>
      <View className='box'>Box 3</View>
    </Space>
  )
}
```

### 组件 Props

| 属性名 | 类型 | 默认值 | 必填 | 描述 |
| ---------- | -------- | ------ | ---- | ------------------------------------------------------------ |
| align | `string` | - | 否 | 指定子元素在主轴方向上的对齐方式（仅对`direction="row"`有用） |
| direction | `string` | `column` | 否 | 指定主轴的方向，可选值为 `column` 或 `row` |
| wrap | `boolean` | `false` | 否 | 是否启用子元素的自动换行（仅对`direction="row"`有用） |
| size | `number` | - | 否 | 指定子元素之间的间距大小 |
| fill | `boolean` | `false` | 否 | 是否填充父容器的剩余空间 |
| style | `Object` | - | 否 | 自定义样式 |
| children | `ReactNode` | - | 是 | 子元素 |

### 注意事项

1. 该组件要求父容器必须有宽度和高度，否则会出现布局错误。
2. `direction="row"`时，子元素之间的间距由 `size` 属性控制，`align` 属性控制子元素在主轴方向上的对齐方式。当 `fill=true` 时，子元素的宽度会自动填充父容器的剩余空间。
3. `direction="column"`时，子元素之间的间距由父容器的 `padding` 属性控制，不受 `size` 属性影响。`align` 属性控制子元素在交叉轴方向上的对齐方式。