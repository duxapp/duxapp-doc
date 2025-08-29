---
sidebar_position: 6
---

# Radio 单选

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Radio' />

```jsx
import { Header, ScrollView, TopView, Form, FormItem, Card, Divider, DividerGroup, Radio, RadioGroup, Button } from '@/duxuiExample'

const UserButton = ({
  label,
  checked,
  onCheck
}) => {
  return <Button onClick={onCheck} type='primary' plain={!checked}>{label}</Button>
}

export default function RadioExample() {
  return <TopView>
    <Header title='Radio' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <DividerGroup>
            <FormItem label='单选' field='radio1'>
              <RadioGroup>
                <Radio label='选项1' value={1} />
                <Radio label='选项2' value={2} />
                <Radio label='选项3' value={3} />
                <Radio label='选项4' value={4} />
              </RadioGroup>
            </FormItem>
            <FormItem label='竖向排列' field='radio2'>
              <RadioGroup vertical>
                <Radio label='选项1' value={1} />
                <Radio label='选项2' value={2} />
                <Radio label='选项3' value={3} />
                <Radio label='选项4' value={4} />
              </RadioGroup>
            </FormItem>
            <FormItem label='自定义样式' field='radio3'>
              <RadioGroup>
                <Radio label='选项1' value={1} >{UserButton}</Radio>
                <Radio label='选项2' value={2} >{UserButton}</Radio>
                <Radio label='选项3' value={3} >{UserButton}</Radio>
                <Radio label='选项4' value={4} >{UserButton}</Radio>
              </RadioGroup>
            </FormItem>
          </DividerGroup>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自[SpaceProps](../layout/Space#props)

### value

当前选项的值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 是 |  |

### label

当前选项的标签文字

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### checked

如果单独使用 Radio 可以用这个属性控制是否选中

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disabled

是否禁用这个选项

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## RadioGroup Props

将Radio选项放在 `RadioGroup` 中，将他们组成一个表单项

继承自[SpaceProps](../layout/Space#props)

### value

选中值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### defaultValue

默认值

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

### cancel

允许取消选择

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | |