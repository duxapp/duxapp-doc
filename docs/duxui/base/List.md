---
sidebar_position: 5
---

# List 分页列表

当你的列表接口采用 page 进行分页时，可以用这个组件快速实现列表页面，这个组件有用以下特性  

- 下拉刷新
- 自动分页
- 空组件展示
- 自定义头部底部渲染
- RN端使用 `@shopify/flash-list` 实现，拥有更好的性能
- 多列支持

如何创建列表组件，请参考入门教程[分页列表](/docs/course/started/list)

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='List' />

以售后列表说明，导出的List组件，将会这样进行使用  

- 当用户切换 `navType` 时，将会自动重新获取数据
- renderEmpty渲染了一个数据为空时显示的组件
- renderItem需要传入一个组件，而非传染之后的内容

```jsx
import { Header, ScrollView, TopView, GroupList, Column, Image, Form, FormItem, Menu, MenuItem, Empty, Text, Row } from '@/duxuiExample'
import { List, px } from '@/duxcms'
import classNames from 'classnames'

export default function ListExample() {

  return <TopView>
    <Header title='List' />
    <Form>
      {({ values }) => <>
        <Menu>
          <FormItem field='sort'>
            <MenuItem title='排序' options={[{ name: '新品', value: 1 }, { name: '价格', value: 2 }]} />
          </FormItem>
          <FormItem field='class'>
            <MenuItem title='分类' options={[{ name: '全部', value: 0 }, { name: '分类1', value: 1 }, { name: '分类2', value: 10 }]} />
          </FormItem>
        </Menu>
        <ScrollView>
          <GroupList>
            <GroupList.Item title='数据列表' desc='此组件不可单独使用，需配合接口请求数据实现，此组件封装了分页，下拉刷新、上拉加载等功能，可以快速的实现一个列表页面。配合Form，可以实现快速筛选数据。列表需要放在一个具有一定高度的容器中，否则不会渲染。'>
              <Column
                style={{ height: px(1000) }}
              >
                <List
                  url='mall'
                  data={values}
                  columns={2}
                  // 样式对非RN端生效
                  listStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
                  renderItem={Item}
                  renderEmpty={<Empty title='暂无数据' />}
                />
              </Column>
            </GroupList.Item>
          </GroupList>
        </ScrollView>
      </>}
    </Form>
  </TopView>
}

const Item = ({ item, index, action }) => {

  // action.reload() 可以用于数据刷新

  return <Column
    className={classNames('bg-white r-2', index > 1 && 'mt-3')}
    style={{ width: px(339) }}
  >
    <Image src={item.image} className='r-2 w-full' square />
    <Column className='p-2 gap-2'>
      <Text numberOfLines={2}>{item.title}</Text>
      {!!item.activity && <Text size={1} color={2}>{item.activity}</Text>}
      <Row className='gap-1' items='center'>
        <Text size={6} bold>{item.sell_price}</Text>
        <Text delete color={3} grow>{item.market_price}</Text>
      </Row>
    </Column>
  </Column>
}
```

## Props

### url

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

和request的url相同

### renderItem

每一项的渲染组件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 是 |  |

### data

请求参数 request 的 data，当这个参数的内容改变时，会自动刷新数据

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| object | 否 |  |

### requestOption

其他的request请求参数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [RequestOption](#requestoption-1) | 否 |  |

### page

是否有分页，没有分页的接口可以设置false，默认true

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### cache

是否开启数据缓存

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### listField

接口返回的列表字段

如果指定的字段不存在，会判断上一级是不是数组，如果是就使用上一级作为列表

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | list |

### keyField

列表项的key

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | id |

### listCallback

请求回调函数 可以从这里获请求中的数据 需要返列表数据

两个参数，第一个是当前list，第二个是请求返回值，需要返回一个list

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (list: any[], result: any) => any[] | 否 |  |

### reloadForShow

是否在页面显示出来的时候刷新数据

如果你使用了UI库的TabBar组件，并且是TabBar的组件中的列表，则可以这样传入

```jsx
reloadForShow={{
  useShow: TabBar.useShow
}}
```

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean 或 [ReloadForShow](#reloadforshow-1) | 否 | false |

### option

传给 usePageData 的第二个参数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [PageDataConfig](#pagedataconfig) | 否 |  |

### columns

列数，这是对RN端的配置，其他端需要使用 listStyle 或者 listClassName去实现

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

### renderHeader

插入头部的内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderFooter

插入底部的内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |


### renderLine

每一项的分割线

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |


### renderEmpty

列表为空时显示的内容 这里存在一个默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### itemProps

可以静态传输数据到每个项目的props上（不支持动态更新，更新数据不会触发渲染）

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| object | 否 |  |

### emptyTitle

未指定renderEmpty时 的空标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 暂无数据 |

### onEmptyClick

未指定renderEmpty时 空内容的点击事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| () => void | 否 |  |

### ref

usePageData 的 action 回调  

获取这个回调之后你可以用来手动刷新数据  

### onAction

:::danger Deprecated
此属性已弃用，使用 [`ref`](#ref) 替代。
:::

usePageData 的action回调  

获取这个回调之后你可以用来手动刷新数据  

可以直接将一个ref值赋值给这个属性

```jsx
const action = useRef()

<List onAction={ref} />
```

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (action: [PageDataResult](#pagedataresult)) => void | 否 |  |

### listStyle

除了RN端，其他端应用于列表上的样式，可以用于实现多列布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### listClassName

除了RN端，其他端应用于列表上的样式，可以用于实现多列布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### useVirtualList

是否使用虚拟列表 这在小程序和H5端生效 RN端默认使用虚拟列表

开启后还需要传入 virtualListProps 或者 virtualWaterfallProps 参数

如果columns>1使用virtualListProps传入参数

要需要配置 itemSize 才能正常显示，请查看相关文档

开启后，传入renderItem的组件就会接收到一个叫id的props，需要将这个id传递给你的组件的根节点

```jsx
// 单列示例
<List
  url='mall/mall'
  renderItem={Item}
  renderEmpty={<Empty title='暂无数据' />}
  useVirtualList
  virtualListProps={{
    // 需要将外边距也计算在内
    itemSize: List.itemSize(550),
    // 设置可是区域外渲染的项目数量
    overscanCount: 2,
  }}
/>

const Item = ({ item, id, index }) => {
  // 将id赋值给根组件
  return <Column id={id} style={{ height: px(550) }}>
    <Text>项目</Text>
  </Column>
}
```

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 |  |

:::info
开启虚拟列表会有一些使用限制
- 虚拟列表所在的区域不可动态变更高度，高度需要在你初始布局的时候就确定
- 需要给每一项设置一个itemSize，通常在每一项等高的时候，更合适开启虚拟列表的使用
:::

### virtualListProps

传给VirtualList的参数，至少需要配置 itemSize 列表才能正常运行

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [VirtualList](https://nervjs.github.io/taro-docs/docs/virtual-list) | 否 |  |

### virtualWaterfallProps

当 columns > 1 时传递给 VirtualWaterfall 的参数

至少需要配置 itemSize 列表才能正常运行

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [VirtualWaterfall](https://nervjs.github.io/taro-docs/docs/virtual-waterfall) | 否 |  |

## 方法

### itemSize(size)

开启虚拟列表后，用于提供给itemSize计算的方法

## 数据选择

列表组件可以用于数据选择

```jsx
// listSelectMax: 1单选，大于1多选
const { backData } = await nav('使用了List的页面路径', { listSelectMax: 1 })
const res = await backData()
```

## Types

### RequestOption

- **url** (`string`): 请求链接，相对地址
- **header** (`object`): 附加的 header
- **data** (`object`): 请求数据，根据 `method` 会加在对应位置
- **method** (`keyof method`): 请求类型
- **timeout** (`number`): 请求超时时间（ms），默认 `30000`
- **repeatTime** (`number`): 防止重复请求的时间间隔，在此时间内相同参数的请求将被拦截触发 `catch`
  - `catch` 将返回以下数据，如果你不想使用，可以把这个值设置为 `0`
    ```javascript
    { code: 3, message: '重复请求' }
    ```
  - **默认值**: `500`
- **loading** (`boolean | string | (() => () => void)`): 是否在请求过程中显示 loading
  - 传入一个字符串，将在请求时显示这个字符串
  - 传入一个 loading 函数，将执行该函数，并要求该函数返回停止 loading 的函数
- **toast** (`boolean`): 是否在请求至 `catch` 时显示错误提示
- **config** (`RequestConfig`): 请求配置，用于覆盖默认配置
- **middle** (`middle`): 中间件，用于覆盖默认配置的中间件

### ReloadForShow

- **useShow** (`() => void`): 页面显示的钩子函数

### PageDataConfig

- **field** (`string`): 用于列表的字段
- **listCallback** (`(list: any[], result: any) => any[]`): 列表回调函数
  - **list**: 列表数据
  - **result**: 请求返回值
  - **返回值**: 处理后的列表
- **cache** (`boolean`): 启用缓存，如果为`true`，将缓存第一页的内容
- **ready** (`boolean`): 是否准备好，如果为`false`，将不会发起请求
- **defaultListData** (`any[]`): 默认列表数据

### PageDataResult

- **loading** (`boolean`): 是否正在请求数据
- **refresh** (`boolean`): 是否正在下拉刷新
- **next** (`() => void`): 获取下一页数据
- **reload** (`() => Promise<{}>`): 跳转到第一个页并重新加载数据
- **setList** (`(value: any[] | ((oldState: any[]) => any[])) => void`): 设置列表数据，`useState` 返回的第二个值