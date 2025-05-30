---
sidebar_position: 3
---

# ScrollView 滚动容器

这是对Taro ScrollView的封装，实现了多个端的下拉刷新功能，ScrollView仅支持垂直滚动，需要横向滚动使用 `ScrollView.Horizontal`

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ScrollView' />

```jsx
import { Header, ScrollView, TopView, Column, Text, px, PullView, Button } from '@/duxui'
import { useState } from 'react'

export default TopView.HOC(function ScrollViewExample() {

  const [show, setShow] = useState(false)

  return <>
    <Header title='ScrollView' />
    <ScrollView>
      <Child
        title='滚动组件默认具有 flex: 1 这个属性，因此，滚动组件的父组件需要有剩余高度'
      />
    </ScrollView>
    <Button className='m-3' type='secondary' onClick={() => setShow(true)}>弹出一个滚动容器</Button>
    <ScrollView.Horizontal>
      <Child
        title='横向滚动默认不会有 flex: 1 这个属性'
      />
    </ScrollView.Horizontal>
    {show && <PullView onClose={() => setShow(false)}>
      <Column style={{ height: px(800) }}
        className='bg-page rt-3 pv-3'
      >
        <ScrollView>
          <Child
            title='如果在弹出框里，需要给父元素设置一个高度'
          />
        </ScrollView>
      </Column>
    </PullView>}
  </>
})

const Child = ({ title }) => {
  return <>
    <Column className='p-3 m-3 bg-white r-2'>
      <Text>{title}</Text>
    </Column>
    <Column className='p-3 m-3 bg-white r-2' style={{ height: px(400) }}>
      <Text>内容</Text>
    </Column>
    <Column className='p-3 m-3 bg-white r-2' style={{ height: px(400) }}>
      <Text>内容</Text>
    </Column>
    <Column className='p-3 m-3 bg-white r-2' style={{ height: px(400) }}>
      <Text>内容</Text>
    </Column>
    <Column className='p-3 m-3 bg-white r-2' style={{ height: px(400) }}>
      <Text>内容</Text>
    </Column>
  </>
}
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