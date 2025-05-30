---
sidebar_position: 7
---

# Checkbox 多选

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Checkbox' />

```jsx
import {
  Header, ScrollView, TopView, Form, Card,
  Divider,
  Checkbox,
  Button
} from '@/duxuiExample'

const UserButton = ({
  label,
  checked,
  onCheck
}) => {
  return <Button onClick={onCheck} type='primary' plain={!checked}>{label}</Button>
}

export default function CheckboxExample() {
  return <TopView>
    <Header title='Checkbox' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <Divider.Group>
            <Form.Item label='多选' field='checkbox1'>
              <Checkbox.Group>
                <Checkbox label='选项1' value={1} />
                <Checkbox label='选项2' value={2} />
                <Checkbox label='选项3' value={3} />
                <Checkbox label='选项4' value={4} />
              </Checkbox.Group>
            </Form.Item>
            <Form.Item label='竖向排列' field='checkbox2'>
              <Checkbox.Group direction='vertical'>
                <Checkbox label='选项1' value={1} />
                <Checkbox label='选项2' value={2} />
                <Checkbox label='选项3' value={3} />
                <Checkbox label='选项4' value={4} />
              </Checkbox.Group>
            </Form.Item>
            <Form.Item label='自定义样式' field='checkbox3'>
              <Checkbox.Group>
                <Checkbox label='选项1' value={1} >{UserButton}</Checkbox>
                <Checkbox label='选项2' value={2} >{UserButton}</Checkbox>
                <Checkbox label='选项3' value={3} >{UserButton}</Checkbox>
                <Checkbox label='选项4' value={4} >{UserButton}</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item label='自定义控制' field='checkbox4'>
              <Checkbox label='选中' checked />
              <Checkbox label='部分选中' half />
              <Checkbox label='未选中' />
            </Form.Item>
          </Divider.Group>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自[SpaceProps](../layout/Space#props)

### value

选中值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 是 |  |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 是 |  |

### label

当前选项的标签文字

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 否 |  |

### checked

如果单独使用 Checkbox 可以用这个属性控制是否选中

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### half

半选中状态，checked为false的时候生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disabled

是否禁用这个选项

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## Checkbox.Group Props

将Checkbox选项放在 `Checkbox.Group` 中，将他们组成一个表单项

继承自[SpaceProps](../layout/Space#props)

### value

当前选中的值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### onChange

值改变时的回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: any) => void | 否 |  |

### vertical

是否垂直布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### virtual

虚拟节点，为true时，这个组件不会创建任何实体节点，可以更有效的进行布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disabled

禁用选择

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |