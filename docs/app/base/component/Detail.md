# 页面详情(Detail)

这是一个用于详情页面的渲染组件，通过传入一些参数和子组件实现自动请求数据和展示的功能。

```jsx
import { createDetail } from '@/components/Detail'

const Detail = createDetail(useRequest)

const Example = () => {

  const url = '/api/get_detail'
  const field = 'detail'
  const defaultData = { title: '', content: '' }

  return (
    <Detail
      url={url}
      field={field}
      defaultData={defaultData}
      refresh // 是否支持下拉刷新
      reloadForShow // 是否在页面 show 时刷新数据
      renderHeader={({ data }) => (
        <View>{data.title}</View>
      )}
      renderFooter={({ action }) => (
        <Button onClick={action.reload}>重新加载</Button>
      )}
    >
      {({ data }) => (
        <View>{data.content}</View>
      )}
    </Detail>
  )
}
```

#### Props

| Prop 名称      | 类型                                     | 描述                                                             |
| -------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| url            | string                                   | 请求地址                                                         |
| option         | object                                   | 请求配置                                                         |
| reloadForShow  | boolean                                  | 是否在上一个页面关闭时重新加载数据                               |
| detailCallback | (data: any) => any                       | 对请求返回的数据进行处理的回调函数                               |
| defaultData    | any                                      | 默认数据                                                         |
| field          | string                                   | 请求返回数据的字段名称                                           |
| children       | ReactNode或者function组件                | 传入一个ReactNode或者function组件，渲染详情页的内容              |
| refresh        | boolean                                  | 是否支持下拉刷新                                                 |
| renderHeader   | (data: any, action: object) => ReactNode | 自定义头部渲染函数                                               |
| renderFooter   | (data: any, action: object) => ReactNode | 自定义底部渲染函数                                               |
| container      | ReactNode                                | 容器组件，默认为Fragment，如果需要渲染其它组件，可以传入容器组件 |

#### Children

支持以下两种方式：

1. 传入一个函数，接收一个对象 `{ data, action }`，返回 React 组件

```jsx
<Detail>
  {({ data }) => (
    <View>{data.content}</View>
  )}
</Detail>
```

2. 传入 React 组件，通过克隆传入的组件并添加 `data` 和 `action` 属性传递给该组件，例如：

```jsx
<Detail>
  <MyComponent />
</Detail>

// MyComponent.js
export const MyComponent = ({ data, action }) => (
  <View>{data.content}</View>
)
```