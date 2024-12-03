---
sidebar_position: 6
---

# Absolute 绝对定位

放在这个组件内的子元素，会被渲染在最外层，这是用`TopView.add`方法实现的

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Absolute' />

示例中的代码将会显示在TopView相同层级的dom中

```jsx
import { Header, ScrollView, TopView, Absolute } from '@/duxapp'

export default TopView.HOC(function Duxapp() {

  return <>
    <Header title='页面标题' />
    <ScrollView>
      <Absolute>
        <View className='absolute w-full bg-white p-3 bottom-0'>
          <Text>显示在最外层</Text>
        </View>
      </Absolute>
    </ScrollView>
  </>
})
```

## Props

### group

如果设置了分组，那么设置了相同分组名称的内容，将以队列的形式显示，这是[TopView 的add方法参数](TopView#addel-option)

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |