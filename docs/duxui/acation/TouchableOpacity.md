---
sidebar_position: 2
---

# TouchableOpacity 触摸反馈

点击具有不透明效果的组件

## 示例

```jsx
import { Header, ScrollView, TopView, Form, TouchableOpacity, GroupList, Text } from '@/duxuiExample'

export default function TouchableOpacityExample() {
  return <TopView>
    <Header title='TouchableOpacity' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <GroupList>
          <GroupList.Item title='基础用法'>
            <TouchableOpacity className='bg-white p-3 r-2'>
              <Text>点击查看效果</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className='bg-white p-3 r-2'>
              <Text>不透明度 0.7</Text>
            </TouchableOpacity>
          </GroupList.Item>
        </GroupList>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

这个组件在RN端使用的是 `TouchableOpacity` 组件，其他端使用的是 `Column` 组件，因为他们有不同的属性，点击事件都是onClick

### activeOpacity

点击时候的不透明度 0-1

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0.2 |

