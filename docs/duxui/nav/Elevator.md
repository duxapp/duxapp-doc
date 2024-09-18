---
sidebar_position: 3
---

# Elevator 电梯楼层

例如城市选择，可以通过城市名称首字母进行导航，快速选择到需要的城市，就可以用这个组件

## 示例

```jsx
import { Column, Empty, TopView, Header, Elevator } from '@/duxui'

const list = [
  {
    name: 'A', children: [
      { name: 'A1' },
      { name: 'A2' },
      { name: 'A3' },
      { name: 'A4' },
      { name: 'A5' },
      { name: 'A6' },
      { name: 'A7' }
    ]
  },
  {
    name: 'B', children: [
      { name: 'B1' },
      { name: 'B2' },
      { name: 'B3' },
      { name: 'B4' },
      { name: 'B5' },
      { name: 'B6' },
      { name: 'B7' }
    ]
  },
  {
    name: 'C', children: [
      { name: 'C1' },
      { name: 'C2' },
      { name: 'C3' },
      { name: 'C4' },
      { name: 'C5' },
      { name: 'C6' },
      { name: 'C7' }
    ]
  }
]

export default function ElevatorExample() {
  return <TopView>
    <Header title='Elevator' />
    <Column grow style={{ padding: 12 }}>
      <Elevator
        onItemClick={item => console.log('项目点击', item)}
        renderTop={<>
          <Elevator.Search placeholder='输入城市名称进行搜索' />
        </>}
        renderEmpty={<Empty title='该城市未开通' />}
        list={list}
      />
    </Column>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### list

列表数据，格式要求参考上面示例中的格式进行传入

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `{ name: string, children: { name: string }[] }[]` | 是 |  |

### onItemClick

项目点击回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(item: { name: string }) => void` | 是 |  |

### showNav

是否显示右侧导航

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### renderEmpty

自定义数据或者搜索结果为空是要展示的内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderTop

在滚动区域之外，头部要渲染的内容，通常这个地方用来放 `Elevator.Search`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderHeader

在滚动区域之内的头部要放的内容，不要动态更新这部分的内容，否则会导致导航错误

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderFooter

在滚动区域之内的底部要放的内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

## Elevator.Search Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

用来检索列表内容，需要放在 `renderTop` 或者 `renderHeader` 或者 `renderFooter` 里面渲染，否则将没有作用

### placeholder

输入框中的提示文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 请输入关键词搜索 |