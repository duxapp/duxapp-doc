---
sidebar_position: 10
---

# Grade 评分

## 示例

```jsx
<Form.Item label='评分' field='grade' >
  <Grade />
</Form.Item>
```

## Props

继承自[SpaceProps](../layout/Space#props)

### value

当前评分值 [0, 5]

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### onChange

值变化回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: number) => void | 否 |  |

### defaultValue

默认值 [0, 5]

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### size
类型用来指定主题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('primary', 'secondary', 'success', 'danger', 'warning') | 否 | primary |

### size

尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('s', 'm', 'l') | 否 | m |