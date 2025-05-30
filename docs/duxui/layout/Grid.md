---
sidebar_position: 5
---

# Grid 宫格

用于实现9宫格这样的布局方式

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Grid' />

```jsx
import { Grid, Header, ScrollView, TopView, GroupList, Column, Text } from '@/duxuiExample'
import './Grid.scss'

const list = ['内容1', '内容21', '内容3', '内容4', '内容5', '内容6', '内容7', '内容8']

export default function CellExample() {
  return <TopView>
    <Header title='Grid' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Grid>
            {
              list.map(item => <Column key={item} className='grid-item'>
                <Text>{item}</Text>
              </Column>)
            }
          </Grid>
        </GroupList.Item>
        <GroupList.Item title='间距'>
          <Grid gap={20}>
            {
              list.map(item => <Column key={item} className='grid-item'>
                <Text>{item}</Text>
              </Column>)
            }
          </Grid>
        </GroupList.Item>
        <GroupList.Item title='正方形'>
          <Grid gap={20} square>
            {
              list.map(item => <Column key={item} className='grid-item'>
                <Text>{item}</Text>
              </Column>)
            }
          </Grid>
        </GroupList.Item>
        <GroupList.Item title='指定列数量 和不同间距'>
          <Grid rowGap={20} columnGap={60} column={3}>
            {
              list.map(item => <Column key={item} className='grid-item'>
                <Text>{item}</Text>
              </Column>)
            }
          </Grid>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### column

每行显示多少个内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 4 |

### square

将每一项强制显示为正方形

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### gap

单元格之间的间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0 |

### rowGap

行间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | gap |

### columnGap

列间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | gap |

### itemStyle

每一个元素容器的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |
