---
sidebar_position: 6
---

# Radio 单选

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Radio' />

```jsx
<Form.Item label='单选' field='radio1'>
  <Radio.Group>
    <Radio label='选项1' value={1} />
    <Radio label='选项2' value={2} />
    <Radio label='选项3' value={3} />
    <Radio label='选项4' value={4} />
  </Radio.Group>
</Form.Item>
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

## Radio.Group Props

将Radio选项放在 `Radio.Group` 中，将他们组成一个表单项

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