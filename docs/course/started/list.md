---
sidebar_position: 8
---

# 分页列表

这个组件能够更快的帮你完成数据列表的编写，因为将文档写在入门文档中，这个组件拥有这些特性  

- 下拉刷新
- 自动分页
- 空组件展示
- 自定义头部底部渲染
- RN端使用 `@shopify/flash-list` 实现，拥有更好的性能
- 多列支持

:::info
2025-04-16 开始的版本中，这个组件从 duxapp 模块移动到 duxui 模块中，请注意修改
:::

## 创建

之前的章节中讲到了如何创建 `usePageData`，在此处将会用到，如果你尚未创建，请先去查看[请求上传](/docs/course/started/net)文档  

从之前创建`usePageData`的地方导入`usePageData`
```js
import { usePageData } from '@/duxcms/utils'
import { createList } from '@/duxapp'

const List = createList(usePageData)

export {
  List
}
```

## 使用

以售后列表说明，导出的List组件，将会这样进行使用  

- 当用户切换 `navType` 时，将会自动重新获取数据
- renderEmpty渲染了一个数据为空时显示的组件
- renderItem需要传入一个组件，而非传染之后的内容

```jsx
import { Column, Empty, Header, Image, Row, Tab, TabItem, Text, TopView, nav, px, useRoute } from '@/duxui'
import { List } from '@/duxcmsOrder'
import { useState } from 'react'

export default function RefundList() {
  const { params } = useRoute()

  const [navType, setNavType] = useState(params.type | 0)

  return <TopView>
    <Header title='退款/售后' />
    <Tab value={navType} onChange={setNavType} className='bg-white rb-3'>
      {
        navList.map(item => <TabItem key={item.value} paneKey={item.value} title={item.text} />)
      }
    </Tab>
    <List
      url='order/refund'
      data={{
        type: navType,
      }}
      renderItem={Item}
      renderEmpty={<Empty title='暂无售后' />}
    />
  </TopView>
}

const navList = [
  { text: '全部', value: 0 },
  { text: '待审核', value: 1 },
  { text: '待退货', value: 2 },
  { text: '退货中', value: 3 },
  { text: '已退款', value: 4 }
]

const Item = ({ item, index }) => {
  return <Column
    className='m-3 r-2 bg-white p-3 gap-3'
    style={index ? { marginTop: 0 } : {}}
    onClick={() => nav('duxcmsOrder/refund/detail', { id: item.id })}
  >
    <Row justify='between'>
      <Text size={1} >{item.refund_no}</Text>
      <Text size={1}>{item.state_name}</Text>
    </Row>
    {
      item.goods.map(good => <GoodsItem key={good.id} item={good} />)
    }
    <Text self='end' className='mv-1'>退款：￥{item.price} 退运费：￥{item.freight}</Text>
  </Column>
}

const GoodsItem = ({ item }) => {
  return <Row className='gap-3'>
    <Image src={item.goods_image} className='r-2' square style={{ width: px(160) }} />
    <Column grow justify='between' className='pv-1 overflow-hidden'>
      <Row items='center' justify='between'>
        <Text bold size={2} numberOfLines={1} grow>{item.goods_name}</Text>
        <Text bold size={2}><Text size={1}>￥</Text>{item.goods_price}</Text>
      </Row>
      <Row items='center' justify='between'>
        <Text size={2} color={3} numberOfLines={1}>{item.goods_spec}</Text>
        <Text bold size={2} color={2}>x{item.goods_num}</Text>
      </Row>
    </Column>
  </Row>
}
```