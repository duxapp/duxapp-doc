# 页面列表(List)

List组件是一个基于Taro框架的列表组件，用于快速生成数据列表页面。

### 使用方法

List组件通过接收一个对象作为参数，返回一个用于展示数据列表的组件。使用时，首先需要导入List组件并调用createList函数生成一个用于展示数据列表的组件，如下所示：

```jsx
import { createList } from '@/components/List'

const List = createList(usePageData)

export default function MyPage() {
  return (
    <List
      url='/api/data/list'
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  )
}
```

这里我们调用了createList函数并传入了usePageData方法作为参数，返回一个List组件。在MyPage组件中，我们将List组件作为子组件并传入一些参数用于展示列表数据。

### 参数说明

| 属性 | 类型 | 默认值 | 描述 |
| -------------- | ------------------ | ------ | ------------------------------------------------------------ |
| url | string | | 请求列表数据的URL |
| data | object | | 请求列表数据时携带的参数 |
| option | object | | 请求列表数据时的其他配置项 |
| listField | string | 'list' | 列表数据在接口返回数据中的字段名 |
| keyField | string | 'id' | 列表数据中作为唯一标识的字段名 |
| renderItem | function | | 列表项的渲染函数，返回一个组件或JSX |
| listCallback | function | | 处理列表数据的回调函数，用于对返回的列表数据进行自定义处理 |
| renderHeader | function | | 列表头部的渲染函数，返回一个组件或JSX |
| renderFooter | function | | 列表尾部的渲染函数，返回一个组件或JSX |
| columns | number | | 列表的列数，如果存在columns属性，List组件会根据columns属性自动将列表项分成多列 |
| page | boolean | true | 是否分页，如果为true，则会自动分页请求数据 |
| emptyTitle | string | '暂无数据' | 列表为空时的提示文字 |
| renderEmpty | function | | 自定义列表为空时的提示渲染函数 |
| onEmptyClick | function | | 列表为空时的点击事件回调函数 |
| onAction | function \| object | | 数据操作的回调函数，用于将action对象暴露给父组件 |
| listStyle | object | | 列表样式 |
| listClassName | string | | 列表类名 |
| usePageData | function | | 获取数据的自定义hook函数 |
| reloadForShow | boolean | false | 在上面页面关闭的时候是否刷新数据，用于数据 |