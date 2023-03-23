# 线性渐变(LinearGradient)

`LinearGradient` 组件用于创建一个线性渐变的背景色，可以指定起点、终点、颜色、位置等参数。

### 使用示例

```jsx
import { LinearGradient } from 'path/to/LinearGradient'

function MyComponent() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#FF7F50', '#4169E1']}
      locations={[0.25, 0.75]}
      style={{ height: 100, width: 200 }}
    >
      {/* 这里放置子组件 */}
    </LinearGradient>
  )
}
```

### 组件属性

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | ---- | ---- |
| start | Object | `{ x: 0.5, y: 0 }` | 否 | 渐变起点坐标 |
| end | Object | `{ x: 0.5, y: 1 }` | 否 | 渐变终点坐标 |
| colors | Array | `[]` | 否 | 颜色数组 |
| locations | Array | `[]` | 否 | 颜色位置数组，与颜色数组长度相同 |
| useAngle | Boolean | `false` | 否 | 是否使用角度模式来表示渐变方向 |
| angleCenter | Object | `{ x: 0.5, y: 0.5 }` | 否 | 角度模式下渐变中心点坐标 |
| angle | Number | `0` | 否 | 角度模式下渐变方向，单位为度 |
| style | Object | `{}` | 否 | 样式对象 |
| children | ReactNode | - | 否 | 子元素 |

### 组件方法

`LinearGradient` 组件没有暴露任何方法。

### 注意事项

- `colors` 数组中的颜色可以使用十六进制、RGB 或 RGBA 格式。
- `locations` 数组中的位置值必须在 0 和 1 之间。
- 当 `useAngle` 为 `true` 时，`start` 和 `end` 属性会被忽略，渐变方向由 `angle` 和 `angleCenter` 属性决定。