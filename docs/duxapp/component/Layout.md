---
sidebar_position: 9
---

# Layout 布局计算

用来计算Layout所在的组件的位置、尺寸信息

## 示例

```jsx
import { Header, ScrollView, TopView, Text, Space, Layout } from '@/duxui'
import { useState } from 'react'

export default function LayoutExample() {

  const [layout, setLayout] = useState({})

  return <TopView>
    <Header title='Layout' />
    <ScrollView>
      <Layout onLayout={setLayout}>
        <Space style={{ backgroundColor: '#fff', padding: 12 }}>
          <Text>width: {layout.width}</Text>
          <Text>height: {layout.height}</Text>
          <Text>left: {layout.left}</Text>
          <Text>top: {layout.top}</Text>
        </Space>
      </Layout>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### onLayout

当获得布局结果时的回调  

RN端使用的是原生onLayout，可能会多次触发

其他端则是使用api获取的尺寸，不会多次触发，如果要多次触发，请手动控制 `reloadKey` 属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (layout: [Layout](#layout)) => void | 否 |  |

### reloadKey

用于控制重新获取布局信息，当这个值变化之后就会重新获取布局信息

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number 或 string | 否 |  |

## Types

### Layout

- **width** (`number`): 宽度
- **height** (`number`): 高度
- **left** (`number`): 距离屏幕左侧的位置
- **top** (`number`): 距离屏幕顶部的位置