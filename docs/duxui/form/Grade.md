---
sidebar_position: 10
---

# Grade 评分

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Grade' />

```jsx
import { Header, ScrollView, TopView, Form, Card, Divider, Grade } from '@/duxuiExample'

export default function GradeExample() {
  return <TopView>
    <Header title='Grade' />
    <Form onSubmit={console.log}
      defaultValues={{
        grade1: 3,
        grade2: 3,
        grade3: 3,
        grade4: 3,
        grade5: 3
      }}
    >
      <ScrollView>
        <Card margin verticalPadding={false}>
          <Divider.Group>
            <Form.Item label='评分' field='grade1' >
              <Grade />
            </Form.Item>
            <Form.Item label='类型 secondary' field='grade2' >
              <Grade type='secondary' />
            </Form.Item>
            <Form.Item label='类型 success' field='grade3' >
              <Grade type='success' />
            </Form.Item>
            <Form.Item label='尺寸 s' field='grade4' >
              <Grade size='s' />
            </Form.Item>
            <Form.Item label='尺寸 l' field='grade5' >
              <Grade size='l' />
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

### disabled

禁用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

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