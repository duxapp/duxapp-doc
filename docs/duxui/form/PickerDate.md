---
sidebar_position: 5
---

# PickerDate 日期选择

用于日期时间的选择

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Date' />

```jsx
import { Header, ScrollView, TopView, Form, FormItem, Card, Divider, DividerGroup, PickerDate } from '@/duxuiExample'

export default function DateExample() {
  return <TopView>
    <Header title='Date' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <DividerGroup>
            <FormItem label='日期' field='date'>
              <PickerDate title='日期' placeholder='请选择日期' grow />
            </FormItem>
            <FormItem label='年' field='year'>
              <PickerDate title='年' placeholder='请选择年' grow mode='year' />
            </FormItem>
            <FormItem label='月' field='month'>
              <PickerDate title='月' placeholder='请选择月' grow mode='month' />
            </FormItem>
            <FormItem label='日期时间' field='datetime'>
              <PickerDate title='日期时间' placeholder='请选择日期时间' grow mode='datetime' />
            </FormItem>
            <FormItem label='时间' field='time'>
              <PickerDate title='时间' placeholder='请选择时间' grow mode='time' />
            </FormItem>
          </DividerGroup>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## PickerDate Props

日期选择器

继承自 DatePickerProps

### title

弹出选择器的标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### format
时间格式 YYYY-MM-DD HH:mm:ss 从这个格式中组合

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | YYYY-MM-DD |

### mode

:::danger Deprecated
此属性已弃用，使用 [`format`](#format) 替代。
:::

日期选择的模式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('datetime', 'date', 'time', 'month', 'year') | 否 | date |

### minDate

最小时间

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### maxDate

最大时间

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### disabled

是否禁用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### title

弹出选择器的标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### value

当前选中的值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### placeholder

提示文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 请选择 |

### onChange

值变化回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string) => void | 否 |  |

### modalFormProps

传递给modalForm的属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [ModalFormProps](./ModalForm#props) | 否 |  |

### use12Hours

是否使用12小时制

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### locale

本地话设置，其默认值如下，如需修改，需要配置完整内容

```js
{
  year: '年',
  month: '月',
  day: '日',
  hour: '时',
  minute: '分',
  am: '上午',
  pm: '下午',
}
```

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| object | 否 |  |

### style

应用于日期选择器部分的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |