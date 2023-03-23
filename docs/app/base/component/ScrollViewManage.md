# 滚动管理器(ScrollViewManage)

## ScrollViewManage 组件

`ScrollViewManage` 组件是一个管理滚动视图的组件，它可以通过监听滚动事件、下拉刷新和上拉加载更多等操作，实现更加灵活和高效的滚动视图管理。

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| defaultRefresh | boolean | `false` | 是否默认开启下拉刷新 |
| children | ReactNode or (refreshStatus: boolean, bottomLoadStatus: boolean) => ReactNode | 无 | 子元素，可以是 ReactNode 或一个回调函数 |

### 方法

`ScrollViewManage` 组件会向子元素传递以下属性和方法：

| 属性/方法名 | 类型 | 说明 |
| --- | --- | --- |
| refreshStatus | boolean | 是否处于下拉刷新状态 |
| bottomLoadStatus | boolean | 是否处于上拉加载更多状态 |
| onRefresh | (callback: () => void) => { remove: () => void; } | 添加一个下拉刷新的回调函数，并返回一个移除该回调函数的方法 |
| setRefresh | () => void | 设置为下拉刷新状态 |
| onScrollToLower | (callback: () => void) => { remove: () => void; } | 添加一个上拉加载更多的回调函数，并返回一个移除该回调函数的方法 |

### 使用示例

```jsx
import { ScrollViewManage } from '@/components/ScrollViewManage'
import { ScrollView, View, Text } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

export default function Example() {
  const [list, setList] = useState(Array.from({ length: 20 }, (_, i) => i))
  const onRefresh = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    setList(Array.from({ length: 20 }, (_, i) => i))
  }
  const onScrollToLower = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    setList([...list, ...Array.from({ length: 20 }, (_, i) => i + list.length)])
  }
  return (
    <ScrollViewManage defaultRefresh>
      {({ refreshStatus, bottomLoadStatus }) => (
        <ScrollView
          className='scroll-view-manage'
          scrollY
          lowerThreshold={50}
          onScrollToLower={onScrollToLower}
          refresherEnabled={true}
          refresherThreshold={45}
          refresherDefaultStyle='black'
          refresherBackground='#f5f5f5'
          onRefresherRefresh={onRefresh}
          refresherTriggered={refreshStatus}
        >
          {list.map((item) => (
            <View key={item} className='item'>
              <Text>{item}</Text>
            </View>
          ))}
          {bottomLoadStatus && (
            <View className='loading'>
              <Text>加载中...</Text>
            </View>
          )}
        </ScrollView>
      )}
    </ScrollViewManage>
  )
}
```

在上面的例子中，`ScrollViewManage` 组件会将 `onRefresh` 和 `onScrollToLower` 方法传递给子组件 `ScrollView`，同时，它还会将 `refreshStatus` 和 `bottomLoadStatus` 属性传