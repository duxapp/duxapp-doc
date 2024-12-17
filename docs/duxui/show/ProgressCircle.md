---
sidebar_position: 10
---

# ProgressCircle 环形进度条

这是用 svg 模拟实现的进度条功能

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ProgressCircle' />

```jsx
import { Header, ScrollView, TopView, GroupList, ProgressCircle, duxappTheme, Row, Text, Button, colorLighten } from '@/duxuiExample'
import { useState } from 'react'

export default TopView.HOC(function ProgressCircleExample() {

  const [val, setVal] = useState(30)

  return <>
    <Header title='ProgressCircle' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Row items='center' className='gap-3'>
            <ProgressCircle value={30} />
            <ProgressCircle value={40} clockwise={false} />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='颜色和渐变'>
          <Row items='center' className='gap-3'>
            <ProgressCircle value={30} color={duxappTheme.successColor} />
            <ProgressCircle value={100}
              color={{
                '0%': duxappTheme.primaryColor,
                '100%': colorLighten(duxappTheme.primaryColor, 0.5)
              }}
            />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='尺寸'>
          <Row items='center' className='gap-3'>
            <ProgressCircle value={30} size={100} />
            <ProgressCircle value={30} size={180} strokeWidth={30} />
            <ProgressCircle value={30} size={260} strokeWidth={40} />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='进度条圆角'>
          <Row items='center' className='gap-3'>
          <ProgressCircle value={50} />
            <ProgressCircle value={50} strokeLinecap='square' />
          </Row>
        </GroupList.Item>
        <GroupList.Item title='子元素'>
          <ProgressCircle value={30}>
            <Text size={7}>30%</Text>
          </ProgressCircle>
        </GroupList.Item>
        <GroupList.Item title='动态变更'>
          <ProgressCircle value={val}>
            <Text size={7}>{val}%</Text>
          </ProgressCircle>
          <Row className='gap-3'>
            <Button type='primary' onClick={() => setVal(Math.max(val - 10, 0))}>减少</Button>
            <Button type='primary' onClick={() => setVal(Math.min(val + 10, 100))}>增加</Button>
          </Row>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </>
})
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### value

当前进度 [0 - 100]

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 是 |  |

### size

尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 200 |

### strokeWidth

圆弧的宽度

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 20 |

### color

进度条颜色

使用渐变的示例
```jsx
<ProgressCircle value={100}
  color={{
    '0%': duxappTheme.primaryColor,
    '100%': colorLighten(duxappTheme.primaryColor, 0.5)
  }}
/>
```

:::info
svg 无法实现跟随进度条的渐变，这个渐变是从左到右的渐变
:::

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| 渐变键值对 | 否 | duxappTheme.primaryColor |

### background

进度条背景颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | #e5e9f2 |

### strokeLinecap

进度条端点形状

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| emun('round', 'square') | 否 | round |

### clockwise

是否顺时针展示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### loading

是否处于加载中状态

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |