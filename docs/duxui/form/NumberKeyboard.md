---
sidebar_position: 15
---

# NumberKeyboard 数字键盘

用户数字的输入，例如输入验证码，支付密码、电话号码、身份证等

## 示例

```jsx
import { Header, ScrollView, TopView, GroupList, NumberKeyboard, toast } from '@/duxuiExample'

export default function NumberKeyboardExample() {

  return <TopView>
    <Header title='NumberKeyboard' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='默认键盘'>
          <NumberKeyboard onKeyPress={toast} />
        </GroupList.Item>
        <GroupList.Item title='定制按钮'>
          <NumberKeyboard
            onKeyPress={toast}
            keyLeft={{ key: '.' }}
          />
        </GroupList.Item>
        <GroupList.Item title='随机'>
          <NumberKeyboard
            onKeyPress={toast}
            random
          />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自[ColumnProps](../layout/Column#props)

### onKeyPress

按键点击事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (key: string) => void | 否 |  |

### onBackspace

删除键事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| () => void | 否 |  |

### random

打乱显示数字

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| () => void | 否 |  |

### keyLeft

底部左侧按钮自定义

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CustomKey | 否 |  |

CustomKey说明

| 名称 | 类型 | 必填 | 默认值 |
| ---- | ---- | -------- | ------- |
| key | string | 是 | 按键key 如果未指定 onClick 则会通过 onKeyPress 事件传递这个key |
| render | ReactElement | 否 | 自定义渲染内容 |
| onClick | () => void | 否 | 自定义点击事件 |

### keyRight

底部右侧按钮自定义 此处默认为回退键

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CustomKey | 否 |  |

## 方法

### useController(option)

这个方法用于将键盘输入的内容进行拼接或者转换为数字的处理

```jsx
const [value, props] = NumberKeyboard.useController()

<Text>{value}</Text>
<NumberKeyboard {...props} />
```

参数说明

| 名称 | 类型 | 必填 | 说明 |
| ---- | ---- | -------- | ------- |
| defaultValue | string | 否 | 默认值 |
| number | boolean | 否 | 是否转换为数字 |

返回值说明

返回一个数组 [value, props]

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| value | string \| number | 经过处理的值 |
| props | object | 将这个props解构赋值给 `NumberKeyboard` 组件 |
