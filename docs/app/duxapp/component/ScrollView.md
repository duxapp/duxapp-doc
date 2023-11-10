# 滚动容器(ScrollView)

`ScrollView` 组件用于在页面上垂直滚动内容。

## 属性

| 名称 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| style | Object | 否 | {} | 自定义样式 |
| refresh | Boolean | 否 | undefined | 是否开启下拉刷新 |
| emptyIcon | String | 否 | 'tishi' | 数据为空时显示的图标名称 |
| emptyTitle | String | 否 | '什么都没有' | 数据为空时显示的标题 |
| emptyDesc | String | 否 | undefined | 数据为空时显示的描述 |
| emptyBttton | String | 否 | undefined | 数据为空时显示的按钮文本 |
| emptyColor | String | 否 | undefined | 数据为空时显示的颜色 |
| emptyShow | Boolean | 否 | false | 是否显示数据为空时的提示 |
| scrollWithAnimation | Boolean | 否 | true | 是否使用滚动动画 |
| scrollTop | Number | 否 | 0 | 滚动条位置 |
| flip | Boolean | 否 | false | 是否翻转滚动条 |

## 事件

| 名称 | 描述 |
| --- | --- |
| onScroll | 滚动时触发的事件 |
| onScrollToLower | 滚动到底部时触发的事件 |
| onRefresh | 下拉刷新时触发的事件 |
| onReload | 数据为空时点击刷新按钮触发的事件 |
| onEmptyButtonCilck | 数据为空时点击按钮触发的事件 |

## 示例

```jsx
import { ScrollView, Icon, Button } from '@/components'

<ScrollView
  refresh
  emptyIcon='zhanwei'
  emptyTitle='没有数据了'
  emptyDesc='快去添加一些数据吧'
  emptyBttton='去添加'
  emptyColor='#999'
  emptyShow={dataSource.length === 0}
  scrollTop={scrollTop}
  onEmptyButtonCilck={() => Taro.navigateTo({ url: '/pages/add' })}
  onRefresh={handleRefresh}
  onScrollToLower={handleLoadMore}
>
  {
    dataSource.map(item => (
      <View className='item' key={item.id}>
        <Icon name='wode' size={40} color='#999' />
        <Text className='title'>{item.title}</Text>
      </View>
    ))
  }
</ScrollView>
```