---
sidebar_position: 16
---

# InputCode 验证码密码输入

通常需要配合 [`NumberKeyboard`](./NumberKeyboard) 组件来实现验证码的输入功能

## 示例

```jsx
import { Header, ScrollView, TopView, GroupList, InputCode, NumberKeyboard } from '@/duxuiExample'

export default function InputCodeExample() {

  const [value, props] = NumberKeyboard.useController()

  return <TopView>
    <Header title='InputCode' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='默认'>
          <InputCode value='11' />
        </GroupList.Item>
        <GroupList.Item title='焦点'>
          <InputCode value='11' focus />
        </GroupList.Item>
        <GroupList.Item title='输入密码'>
          <InputCode value='11' password />
        </GroupList.Item>
        <GroupList.Item title='4位验证码'>
          <InputCode value='11' length={4} />
        </GroupList.Item>
        <GroupList.Item title='配合数字键盘使用'>
          <InputCode value={value} focus />
          <NumberKeyboard {...props} />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自[RowProps](../layout/Row#props)

### value

值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### onChange

值改变回调 此功能待实现

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string) => void | 否 |  |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### length

输入长度

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 6 |

### password

是否隐藏输入内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### focus

是否显示焦点

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### itemStyle

每个输入框的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |