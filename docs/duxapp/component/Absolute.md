---
sidebar_position: 6
---

# Absolute 绝对定位

放在这个组件内的子元素，会被渲染在最外层，这是用`TopView.add`方法实现的

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Absolute' />

```jsx
import { Header, ScrollView, TopView, GroupList, Text, Absolute, Column, px } from '@/duxuiExample'

export default function AbsoluteExample() {

  return <TopView>
    <Header title='Absolute' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='绝对定位' desc='此容器的children将会被渲染到TopView的内部，而不是当前位置'>
          <Absolute>
            <Column className='p-3 bg-white items-start'>
              <Text>这是Absolute的子元素，但是最终渲染位置在这里</Text>
            </Column>
          </Absolute>
        </GroupList.Item>
        <GroupList.Item title='浮动' desc='加上绝对定位的css样式即可浮动'>
          <Absolute>
            <Column style={{ top: px(600) }} className='absolute left-0 p-3 bg-white items-start'>
              <Text>这是Absolute的子元素，但是最终渲染位置在这里</Text>
            </Column>
          </Absolute>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

### group

如果设置了分组，那么设置了相同分组名称的内容，将以队列的形式显示，这是[TopView 的add方法参数](TopView#addel-option)

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |