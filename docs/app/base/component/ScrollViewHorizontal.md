# 横向滚动(ScrollViewHorizontal)

`ScrollViewHorizontal` 组件是基于 Taro 框架中的 ScrollView 组件开发的，用于实现水平方向滚动的容器。

## 使用方法

```jsx
import { ScrollViewHorizontal } from '@/components/ScrollViewHorizontal'

<ScrollViewHorizontal>
  <View className='item'>Item 1</View>
  <View className='item'>Item 2</View>
  <View className='item'>Item 3</View>
</ScrollViewHorizontal>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| scrollX | 是否开启横向滚动 | `Boolean` | `true` |
| scrollY | 是否开启纵向滚动 | `Boolean` | `false` |
| style | 自定义样式 | `Object` | `{}` |
| children | 子组件 | `ReactNode` | - |

除以上 props 之外，还可以传递 Taro ScrollView 组件支持的所有 props。详细信息可以查看 [Taro ScrollView 组件官方文档](https://taro-docs.jd.com/taro/docs/components/view#scrollview)。