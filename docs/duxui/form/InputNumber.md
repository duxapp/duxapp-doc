---
sidebar_position: 19
---

# InputNumber 数字输入

数字进步输入器，点击加号和减号调整数字，也可以允许用户输入

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='InputNumber' />

```jsx
import { Header, ScrollView, TopView, Form, FormItem, Card, Divider, DividerGroup, InputNumber, px } from '@/duxuiExample'

export default function InputNumberExample() {
  return <TopView>
    <Header title='InputNumber' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <DividerGroup>
            <FormItem label='基本用法' field='input1'>
              <InputNumber />
            </FormItem>
            <FormItem label='允许输入' field='input2' desc='使用输入属性后，最好手动指定一个宽度，否则 input 会将宽度撑开'>
              <InputNumber input
                style={{ width: px(200) }}
              />
            </FormItem>
            <FormItem label='步长' field='input3'>
              <InputNumber step={2} />
            </FormItem>
            <FormItem label='小数' field='input4'>
              <InputNumber defaultValue={0.3} step={0.5} />
            </FormItem>
            <FormItem label='最大最小值' field='input5'>
              <InputNumber max={5} min={1} defaultValue={1} />
            </FormItem>
            <FormItem label='主题' field='input6'>
              <InputNumber type='success' />
            </FormItem>
            <FormItem label='禁用' field='input7' disabled>
              <InputNumber />
            </FormItem>
          </DividerGroup>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自[Row Props](/docs/duxui/layout/Row)

### value

值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### onChange

值变化回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: number) => void | 否 |  |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### step

步长

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

### input

是否运行用户输入

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disabled

禁用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### max

允许的最大值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### min

允许的最小值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### type

主题类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('primary', 'secondary', 'success', 'danger', 'warning') | 否 |  |
