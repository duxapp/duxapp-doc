---
sidebar_position: 3
---

# Modal 弹框

将内容弹出，显示在屏幕中间

:::warning
这个组件即将停用，请改用 [PullView](/docs/duxapp/component/PullView)
:::

## 示例

```jsx
import { Header, ScrollView, TopView, GroupList, Text, Button, Modal, Column } from '@/duxuiExample'
import { useState } from 'react'

export default function ModalExample() {

  return <TopView>
    <Header title='Modal' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='弹出框'>
          <Item />
        </GroupList.Item>
        <GroupList.Item title='关闭动画'>
          <Item animation={false} />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}

const Item = props => {

  const [show, setShow] = useState(false)

  return <>
    <Button onClick={() => setShow(true)} type='primary'>点击弹出</Button>
    <Modal show={show} onClose={() => setShow(false)} {...props}>
      <Column style={{ width: 200, height: 150, backgroundColor: '#fff', padding: 12 }}>
        <Text>弹出内容</Text>
        <Button onClick={() => setShow(false)} type='danger'>关闭</Button>
      </Column>
    </Modal>
  </>
}
```

## Props

### show

控制Modal是否显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### group

分组 同一个分组的弹框将会以队列的形式显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### animation

是否开启动画

RN端尚未实现

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### onClose

关闭事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| () => void | 否 |  |

### overlayOpacity

阴影不透明度

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0.2 |

### maskClosable

是否可以点击阴影关闭modal

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |
