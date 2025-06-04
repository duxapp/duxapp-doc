---
sidebar_position: 11
---

# Cascade 级联选择

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Cascade' />

```jsx
import { Header, ScrollView, TopView, Form, FormItem, Card, Divider, DividerGroup, Cascade } from '@/duxuiExample'

const cascadeData = [
  {
    name: '分类1', value: 1, children: [
      { name: '分类1-1', value: 11 },
      { name: '分类1-2', value: 12 },
      { name: '分类1-3', value: 13 },
    ]
  },
  {
    name: '分类2', value: 2, children: [
      { name: '分类2-1', value: 21 },
      { name: '分类2-2', value: 22 },
      { name: '分类2-3', value: 23 },
    ]
  },
  {
    name: '分类3', value: 3, children: [
      { name: '分类3-1', value: 31 },
      { name: '分类3-2', value: 32 },
      { name: '分类3-3', value: 33 },
    ]
  }
]

const defaultValues = {
  cascade1: 32,
  cascade2: [22, 23]
}

export default function CascadeExample() {
  return <TopView>
    <Header title='Cascade' />
    <Form onSubmit={console.log} defaultValues={defaultValues}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <DividerGroup>
            <FormItem label='级联选择单选' field='cascade1' direction='vertical' >
              <Cascade data={cascadeData} level={2} mode='radio' theme='fill' anyLevel />
            </FormItem>
            <FormItem label='级联选择多选' field='cascade2' direction='vertical' >
              <Cascade data={cascadeData} level={2} mode='checkbox' theme='fill' anyLevel />
            </FormItem>
            <FormItem label='默认样式' field='cascade3' direction='vertical' >
              <Cascade data={cascadeData} level={2} mode='checkbox' anyLevel />
            </FormItem>
            <FormItem label='只允许最后一级选中' field='cascade4' direction='vertical' >
              <Cascade data={cascadeData} level={2} mode='checkbox' />
            </FormItem>
            <FormItem label='非受控模式' direction='vertical' >
              <Cascade data={cascadeData} level={2} mode='checkbox' />
            </FormItem>
          </DividerGroup>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### data

数据源，包含级联数据的数组

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CascadeData[] | 是 |  |

CascadeData 数据格式

| 名称 | 类型 | 必填 | 说明 |
| ---- | ---- | -------- | ------- |
| name | string | 是 | 显示名称 |
| value | string \| number | 是 | 项目的值 |
| children | CascadeData[] | 否 | 子项 |

### getData

当没有一次性返回全部数据时，加载子分类数据的回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(current: CascadeData, level: number) => Promise<CascadeData[]>` | 否 |  |

### value

当前选中的值

不同数据类型，取决于单选还是多选

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| number \| (string \| number)[] | 否 |  |

### onChange

值改变时的回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(value: string \| number \| (string \| number)[]) => void` | 否 |  |

### onChangeItem

和 `onChange` 一同触发 会把选中项的对象，而不是值传回去

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(item: CascadeData \| CascadeData[]) => void` | 否 |  |

### checkbox

是否多选模式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### anyLevel

是否允许选择任何一级分类

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### theme

组件主题样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'fill') | 否 | default |

### level

显示的层级数量

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

### childrenKey

子分类数据的键名

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | children |

### nameKey

名称的键名

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | name |

### valueKey

值的键名

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | value |