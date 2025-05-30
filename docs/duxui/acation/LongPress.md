---
sidebar_position: 1
---

# LongPress 长按

长按事件封装

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='LongPress' />

```jsx
import { Header, ScrollView, TopView, GroupList, Text, LongPress, toast, Column } from '@/duxuiExample'

export default function LongPressExample() {

  return <TopView>
    <Header title='LongPress' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='长按事件'>
          <LongPress onLongPress={() => toast('长按事件')}>
            <Column className='p-3 bg-white'>
              <Text>长按此区域</Text>
            </Column>
          </LongPress>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### onLongPress

长按事件的处理函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (event: any) => void | 否 |  |

### onPress

点击事件的处理函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (event: any) => void | 否 |  |

