# 页面容器(Page)

## 组件描述

该组件是一个页面容器组件，包含头部、滚动视图和底部按钮。

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| children | ReactNode | - | 子元素 |
| title | string | - | 页面标题 |
| topView | object | - | 传递给 `TopView` 组件的属性 |
| header | object | - | 传递给 `Header` 组件的属性 |
| scrollView | object | - | 传递给 `ScrollView` 组件的属性 |
| btn | ReactNode | - | 底部按钮元素 |

## 使用示例

```jsx
import { Page } from '@/components/Page'

const ExamplePage = () => {
  return (
    <Page title="页面标题">
      <View>页面内容</View>
    </Page>
  )
}
```