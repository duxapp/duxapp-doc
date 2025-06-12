---
sidebar_position: 9
---

# Layout 布局计算

用来计算Layout所在的组件的位置、尺寸信息

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Layout' />

```jsx
import { Header, ScrollView, TopView, GroupList, Text, Space, Layout } from '@/duxuiExample'
import { useState } from 'react'

export default function LayoutExample() {

  const [layout1, setLayout1] = useState({})

  return <TopView>
    <Header title='Layout' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='布局测量' desc='测量上面白色区域的位置信息 测量结果将永远是异步的，当你需要用测量结果来布局时，先考虑用css去实现，css无法实现的再使用测量'>
          <Layout onLayout={setLayout1}>
            <Space style={{ backgroundColor: '#fff', padding: 12 }}>
              <Text>width: {layout1.width}</Text>
              <Text>height: {layout1.height}</Text>
              <Text>left: {layout1.left}</Text>
              <Text>top: {layout1.top}</Text>
            </Space>
          </Layout>
        </GroupList.Item>
      </GroupList>
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

除了RN不会在布局发生更改之后自动触发 onLayout 需要在合适的时机让，更新这个属性让他触发

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number 或 string | 否 |  |

## Types

### Layout

- **width** (`number`): 宽度
- **height** (`number`): 高度
- **left** (`number`): 距离屏幕左侧的位置
- **top** (`number`): 距离屏幕顶部的位置