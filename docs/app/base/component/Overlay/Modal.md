# 模态框(Modal)

`Modal` 组件用于展示一个浮层。

### 属性

| 属性名 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| show | Boolean | false | 是 | 是否展示 |
| animation | Boolean | true | 否 | 是否开启动画 |
| maskClosable | Boolean | true | 否 | 点击遮罩层是否关闭浮层 |
| overlayOpacity | Number | 0.2 | 否 | 遮罩层透明度 |
| onClose | Function | 无 | 否 | 关闭浮层时的回调函数 |

### Slot

| 名称 | 描述 |
| --- | --- |
| 默认插槽 | 展示在浮层内部的内容 |

### 示例

```jsx
import { useState } from 'react'
import { Button } from '@tarojs/components'
import { Modal } from '@/components/Modal'

function Example() {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Button onClick={handleShowModal}>展示Modal</Button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <div>Modal 内容</div>
      </Modal>
    </>
  )
}
```