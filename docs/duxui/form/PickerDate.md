---
sidebar_position: 5
---

# PickerDate 日期选择

用于日期时间的选择

## 示例

```jsx
import { Header, ScrollView, TopView, Form, Card, Divider, PickerDate } from '@/duxuiExample'

export default function DateExample() {
  return <TopView>
    <Header title='Date' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <Divider.Group>
            <Form.Item label='日期' field='date'>
              <PickerDate placeholder='请选择日期' grow />
            </Form.Item>
            <Form.Item label='年' field='year'>
              <PickerDate placeholder='请选择年' grow mode='year' />
            </Form.Item>
            <Form.Item label='月' field='month'>
              <PickerDate placeholder='请选择月' grow mode='month' />
            </Form.Item>
            <Form.Item label='日期时间' field='datetime'>
              <PickerDate placeholder='请选择日期时间' grow mode='datetime' />
            </Form.Item>
            <Form.Item label='时间' field='time'>
              <PickerDate placeholder='请选择时间' grow mode='time' />
            </Form.Item>
          </Divider.Group>
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

### mode

日期选择的模式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('datetime', 'date', 'time', 'month', 'year') | 否 | datetime |

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