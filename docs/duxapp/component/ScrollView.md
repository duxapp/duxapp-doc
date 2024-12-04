---
sidebar_position: 3
---

# ScrollView 滚动容器

这是对Taro ScrollView的封装，实现了多个端的下拉刷新功能，ScrollView仅支持垂直滚动，需要横向滚动使用 `ScrollView.Horizontal`

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ScrollView' />

```jsx
import { Header, ScrollView, TopView } from '@/duxapp'
import { useState } from 'react'

export default TopView.HOC(function Duxapp() {

  const [refresh, setRefresh] = useState(false)
  return <>
    <Header title='页面标题' />
    <ScrollView refresh={refresh}
      onRefresh={() => {
        setRefresh(true)
        setTimeout(() => {
          setRefresh(false)
        }, 2000)
      }}
    >
      ... 页面内容
    </ScrollView>
  </>
})
```

## Props

继承自Taro的[ScrollView Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/scroll-view#scrollviewprops)

### refresh

是否处于下拉刷新状态

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### onRefresh

用户触发下拉刷新的回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| function | 否 | |

### flip

将ScrollView组件进行180的旋转，让滚动内容倒过来，这会在一些需要从下往上布局的场景中使用，例如消息聊天

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## ScrollView.Horizontal Props

用于横向滚动的滚动组件

继承自Taro的[ScrollView Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/scroll-view#scrollviewprops)