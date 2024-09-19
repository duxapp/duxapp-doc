---
sidebar_position: 7
---

# confirm 确认弹框

`confirm(option)`

## 示例

```jsx
import { Header, ScrollView, TopView, GroupList, confirm, Button, toast } from '@/duxuiExample'

export default function ConfirmExample() {

  return <TopView>
    <Header title='confirm' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='显示确认框框'>
          <Button
            onClick={async () => {
              const status = await confirm()
              toast(status ? '点击确定' : '点击了取消')
            }}
          >显示</Button>
        </GroupList.Item>
        <GroupList.Item title='自定义文字'>
          <Button
            onClick={() => {
              confirm({
                title: '自定义标题',
                content: '自定义内容',
                cancelText: '自定义取消',
                confirmText: '自定义确定'
              })
            }}
          >显示</Button>
        </GroupList.Item>
        <GroupList.Item title='不显示取消按钮'>
          <Button
            onClick={() => {
              confirm({
                cancel: false
              })
            }}
          >显示</Button>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## 参数

### option

弹窗参数

| 名称 | 类型 | 必填 | 说明 |
| ---- | -------- | ------- | ------- |
| title | string | 否 | 标题 |
| content | string \| ReactElement | 否 | 内容 |
| cancel | boolean | 否 | 是否显示取消按钮 默认显示 |
| cancelText | string | 否 | 取消按钮文本 |
| confirmText | string | 否 | 确认按钮文本 |
| renderTop | ReactElement | 否 | 显示在整个弹框的上面 |
| renderBottom | ReactElement | 否 | 显示在整个弹框的下面 |

## 返回值

返回一个Promise，回调一个状态 true 点击了确认，false 点击了取消

返回的Promise还提供了一下方法

| 名称 |  说明 |
| ---- | ------- |
| confirm() | 相当于点击确认 |
| cancel() | 相当于点击取消 |
| close() | 触发Promise reject |