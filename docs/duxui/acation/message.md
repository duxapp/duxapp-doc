---
sidebar_position: 6
---

# message 消息通知

`message(title, desc, url)`

## 示例

```jsx
import { Header, ScrollView, TopView, GroupList, message, Button } from '@/duxuiExample'

export default function MessageExample() {

  return <TopView>
    <Header title='message' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='显示消息'>
          <Button onClick={() => message('这是一个消息')}>弹出</Button>
        </GroupList.Item>
        <GroupList.Item title='带描述'>
          <Button onClick={() => message('这是一个消息', '这里是简介')}>弹出</Button>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## 参数说明

### title

标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

### desc

简介

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### url

点击消息时候的跳转链接

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |