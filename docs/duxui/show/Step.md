---
sidebar_position: 7
---

# Step 步骤条

例如快递更新日志，就可以用这个组件来实现

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Step' />

```jsx
import { Header, ScrollView, TopView, Step, GroupList, Text } from '@/duxuiExample'

const list = [
  { name: '阶段1', time: '06-18 14:22' },
  { name: '阶段2', time: '06-19 14:27' },
  { name: '阶段3', time: '06-20 15:12' },
  { name: '阶段4', time: '06-21 12:22' },
  { name: '阶段5', time: '06-22 14:22' },
  { name: '阶段6', time: '06-23 14:24' },
]

const Start = ({
  item
}) => {
  return <Text align='center'>{item.name}</Text>
}

const End = ({
  item
}) => {
  return <Text align='center'>{item.time}</Text>
}

export default function StepExample() {
  return <TopView>
    <Header title='Step' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='横向'>
          <Step
            data={list}
            startSize={30}
            renderStart={Start}
            renderEnd={End}
          />
        </GroupList.Item>
        <GroupList.Item title='纵向'>
          <Step
            vertical
            data={list}
            startSize={150}
            renderStart={Start}
            renderEnd={End}
          />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### data

列表数据

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 是 |  |

### vertical

是否垂直布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### renderStart

横向时上面的渲染内容 纵向是左侧的渲染内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 否 |  |

### startSize

指定尺寸 横向时为高度 纵向时为宽度 不指定则不会渲染开始块

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### renderEnd

横向时下面的渲染内容 纵向是右侧的渲染内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 否 |  |

### renderPoint

渲染中间的点的内容 或者在data的每一项上传入pointColor会自动渲染颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 否 |  |

### pointTop

当为纵向是设置点距离顶部的距离

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### onItemClick

项目点击回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(option: { item: any, index: number }) => void` | 否 |  |

### lineType

连接的线条类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| emun('solid', 'dashed', 'dotted') | 否 | solid |


### itemClassName

每一项的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### itemStyle

每一项的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |
