# 布局计算(Layout)

### 简介

该组件用于获取子组件的布局尺寸信息。

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | ReactNode | - | 子组件 |
| onLayout | Function | - | 获取布局尺寸信息的回调函数 |
| className | string | - | 组件的样式类名 |
| reloadKey | any | - | 组件刷新的key值 |

### 使用示例

```jsx
import { Layout } from '@/components/Layout'

const MyComponent = () => {

  const handleLayout = (res) => {
    console.log('组件的布局信息：', res)
  }

  return (
    <Layout onLayout={handleLayout}>
      <View className='my-component'>...</View>
    </Layout>
  )
}
```