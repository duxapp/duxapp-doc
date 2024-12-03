---
sidebar_position: 4
---

# Picker 选择器

选择器包含了单列选择器和多列选择器

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Picker' />

```jsx
import { Header, ScrollView, TopView, Form, Card, Divider, PickerSelect, PickerMultiSelect } from '@/duxui'

const selectorData = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const selectorObjectData = [
  { name: '选项0', value: 0 },
  { name: '选项1', value: 1 },
  { name: '选项2', value: 2 },
  { name: '选项3', value: 3 },
  { name: '选项4', value: 4 },
  { name: '选项5', value: 5 },
  { name: '选项6', value: 6 },
  { name: '选项7', value: 7 }
]

const multiSelectorData = [selectorObjectData, selectorObjectData, selectorObjectData]

export default function PickerExample() {
  return <TopView>
    <Header title='Picker' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <Divider.Group>

            <Form.Item label='单列选择' field='picker1'>
              <PickerSelect placeholder='请选择' range={selectorData} grow title='请选择' />
            </Form.Item>

            <Form.Item label='多列选择' field='picker2'>
              <PickerMultiSelect placeholder='请选择' range={multiSelectorData} grow title='请选择' />
            </Form.Item>

            <Form.Item label='单列选择对象数据' field='picker3'>
              <PickerSelect placeholder='请选择' range={selectorObjectData} grow title='请选择' />
            </Form.Item>
          </Divider.Group>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## PickerSelect Props

单列选择器

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

### range

选项范围

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 是 |  |

### placeholder

提示文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 请选择 |

### search

启用搜索功能

### nameKey

选项对象中表示名称的键名

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | name |

### valueKey

选项对象中表示值的键名

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | value |

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

## PickerMultiSelect Props

多列选择器

### title

弹出选择器的标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### value

当前选中的值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 否 |  |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 否 |  |

### range

选项范围

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[][] | 是 |  |

### placeholder

提示文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 请选择 |

### nameKey

选项对象中表示名称的键名

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | name |

### valueKey

选项对象中表示值的键名

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | value |

### onChange

值变化回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: any[]) => void | 否 |  |

### modalFormProps

传递给modalForm的属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [ModalFormProps](./ModalForm#props) | 否 |  |