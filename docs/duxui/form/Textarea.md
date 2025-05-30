---
sidebar_position: 3
---

# Textarea 多行文本

对Taro Textarea的封装，新增了一些属性

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Textarea' />

这个多行文本输入框默认会有一个背景颜色和圆角，你可以通过编写样式覆盖他

```jsx
import { Header, ScrollView, TopView, Form, Card, Divider, Textarea } from '@/duxuiExample'

export default function TextareaExample() {
  return <TopView>
    <Header title='Textarea' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <Divider.Group>
            <Form.Item label='输入框' field='input1'>
              <Textarea placeholder='请输入' grow />
            </Form.Item>
            <Form.Item label='上下布局' field='input2' vertical>
              <Textarea placeholder='请输入' />
            </Form.Item>
            <Form.Item label='限制文本和高度' field='input3' vertical>
              <Textarea placeholder='请输入' maxlength={120} line={10} />
            </Form.Item>
          </Divider.Group>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自Taro的[Textarea Props](https://nervjs.github.io/taro-docs/docs/components/forms/textarea)

### line

显示几行 用于控制高度

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 5 |

### maxlength

最多允许输入数字

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### showLength

是否显示输入文字长度

在设置maxlength的时候生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### grow

设置为true相当于 `flex: 1`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### shrink

设置为true相当于 `flex-shrink: 0`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### self

对 `align-self` 的封装

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('start', 'end', 'center', 'baseline', 'stretch') | 否 |  |

### align

输入框文本对齐方式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('left', 'center', 'right') | 否 | left |

### onChange

值变化回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string) => void | 否 |  |
