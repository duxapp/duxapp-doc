---
sidebar_position: 17
---

# LicensePlate 车牌号输入

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='LicensePlate' />

```jsx
import { Header, ScrollView, TopView, Form, LicensePlate, GroupList } from '@/duxuiExample'

export default function LicensePlateExample() {
  return <TopView>
    <Header title='LicensePlate' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <GroupList>
          <GroupList.Item title='基础用法'>
            <LicensePlate length={7} onChange={console.log} />
          </GroupList.Item>
        </GroupList>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自[InputCodeProps](InputCode#props)

### length

车牌长度 默认7 新能源为8，需要通过外部条件来控制是否是新能源车辆

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 7 |
