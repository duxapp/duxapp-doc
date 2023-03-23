# 步骤条(Step)

该组件可以实现一个步骤条的效果，可以横向或纵向展示，支持自定义开始块、结束块以及每个步骤点的样式。

使用方式：

```jsx
import Step from '路径'

const data = [
  { name: '步骤1' },
  { name: '步骤2' },
  { name: '步骤3' },
]

function Example() {
  return (
    <Step
      data={data}
      type="row"
      renderStart={(props) => <View>{props.item.name}</View>}
      renderEnd={(props) => <View>{props.item.name}</View>}
      renderPoint={(item, index) => <View>{index + 1}</View>}
    />
  )
}
```

Props：

| 名称 | 类型 | 必填 | 默认值 | 描述 |
| -------------- | -------- | ---- | ------ | ---------------------------------------------------------- |
| data | array | 是 | - | 要渲染的数据 |
| type | string | 否 | 'row' | 展示类型，可选 'row' 或 'column' |
| renderStart | function | 否 | - | 渲染开始节点的函数 |
| startSize | number | 否 | - | 开始节点的尺寸，横向为高度，纵向为宽度 |
| renderEnd | function | 否 | - | 渲染结束节点的函数 |
| renderPoint | function | 否 | - | 渲染中间节点的点的函数 |
| pointTop | number | 否 | 24 | 纵向时设置点距离顶部的距离 |
| onItemClick | function | 否 | - | 节点点击事件处理函数 |
| className | string | 否 | - | 自定义类名 |
| style | object | 否 | - | 自定义样式 |
| itemClassName | string | 否 | - | 自定义每个节点的类名 |
| itemStyle | object | 否 | - | 自定义每个节点的样式 |