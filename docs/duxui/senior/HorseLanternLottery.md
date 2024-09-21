---
sidebar_position: 2
---

# HorseLanternLottery 跑马灯抽奖

抽奖组件，可以随机结果，也可以异步指定抽奖结果

## 示例

```jsx
import { Column, Header, HorseLanternLottery, Text, TopView, duxappTheme, px, GroupList, ScrollView, confirm } from '@/duxuiExample'

export default function HorseLanternLotteryExample() {

  return (
    <TopView isSafe>
      <Header title='HorseLanternLottery' />
      <ScrollView>
        <GroupList>
          <GroupList.Item title='随机结果'>
            <HorseLanternLottery
              list={list}
              renderItem={Item}
              onEnd={res => console.log('抽奖结果', res.index)}
              renderStart={<Column grow className='items-center justify-center'>
                <Text>开始</Text>
              </Column>}
            />
          </GroupList.Item>
          <GroupList.Item title='异步获取结果'>
            <HorseLanternLottery
              list={list}
              renderItem={Item}
              onStart={async () => {
                const status = await confirm({
                  content: '点击确定选中奖品3，点击取消取消抽奖'
                })
                if (status) {
                  return 2
                }
                throw '取消'
              }}
              onEnd={res => console.log('抽奖结果', res.index)}
              renderStart={<Column grow className='items-center justify-center'>
                <Text>开始</Text>
              </Column>}
            />
          </GroupList.Item>
          <GroupList.Item title='指定行和列'>
            <HorseLanternLottery
              list={list}
              column={4}
              row={4}
              renderItem={Item}
              onEnd={res => console.log('抽奖结果', res.index)}
              renderStart={<Column grow className='items-center justify-center'>
                <Text>开始</Text>
              </Column>}
            />
          </GroupList.Item>
          <GroupList.Item title='自定义间距'>
            <HorseLanternLottery
              list={list}
              gap={64}
              renderItem={Item}
              onEnd={res => console.log('抽奖结果', res.index)}
              renderStart={<Column grow className='items-center justify-center'>
                <Text>开始</Text>
              </Column>}
            />
          </GroupList.Item>
          <GroupList.Item title='禁用抽奖'>
            <HorseLanternLottery
              disabled
              list={list}
              onDisabledClick={() => confirm({ content: '抽奖次数已经用完了' })}
              renderItem={Item}
              onEnd={res => console.log('抽奖结果', res.index)}
              renderStart={<Column grow className='items-center justify-center'>
                <Text>抽奖次数已用完</Text>
              </Column>}
            />
          </GroupList.Item>
        </GroupList>
      </ScrollView>
    </TopView>
  )
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Item = ({ item, index, select }) => {
  return <Column className='bg-white items-center justify-center'
    style={
      select ?
        {
          borderColor: duxappTheme.primaryColor,
          borderWidth: 3,
          height: px(180)
        } :
        {
          height: px(180)
        }
    }
  >
    <Text>奖品{item}</Text>
  </Column>
}
```

## Props

继承自[LayoutProps](/docs/duxapp/component/Layout)

### list

奖品列表 奖品列表的长度要大于等于实际展示的奖品数量

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 是 |  |

### renderItem

渲染奖品项目的组件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 是 |  |

### renderStart

开始按钮的渲染节点

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 是 |  |

### row

行 默认3 请勿设置小于3的数字

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 3 |

### column

列 默认3 请勿设置小于3的数字

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 3 |

### disabled

是否禁用开始抽奖

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### gap

项目间距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 24 |

### onStart

开始回调 可以使用同步或者异步返回需要选中的index 返回的不是数字则随机选中结果

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `() => void \| number \| Primise<number>` | 否 |  |

### onEnd

结果回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(e: { index: number }) => void` | 否 |  |

### onDisabledClick

禁用的时候点击开始区域的回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `() => void` | 否 |  |

