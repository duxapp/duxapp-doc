# 定位布局(Absolute)

将子元素渲染到最外层，达到绝对定位的效果。

## 属性

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| --------- | ----------- | ------ | ---- | ------------------------------- |
| children | React.ReactNode | | 是 | 需要渲染的子元素 |

## 使用示例

```jsx
import { Absolute } from '@/components/Absolute'

function Example() {
  return (
    <Absolute>
      <View className='box' />
    </Absolute>
  )
}
```