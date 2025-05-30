---
sidebar_position: 8
---

# Switch 开关

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Switch' />

```jsx
import { Header, ScrollView, TopView, Form, Card, Divider, Switch } from '@/duxuiExample'

export default function SwitchExample() {
  return <TopView>
    <Header title='Switch' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <Divider.Group>
            <Form.Item label='开关' field='switch'>
              <Switch onChange={console.log} />
            </Form.Item>
            <Form.Item label='自定义选中值' field='custom'>
              <Switch values={[0, 1]} onChange={console.log} />
            </Form.Item>
            <Form.Item label='非受控模式'>
              <Switch onChange={console.log} />
            </Form.Item>
          </Divider.Group>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自Taro的[Switch Props](https://nervjs.github.io/taro-docs/docs/components/forms/switch)

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean \| any | 否 |  |

### values

指定未选中和选中的值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [any, any] | 否 |  |
