---
sidebar_position: 4
---

# PullView 弹窗

可以从上下左右4个方向弹出内容

## 示例

```jsx
import { PullView } from '@/duxapp'

const Example = () => {

  const [show, setShow] = useState(false)

  const pullView = useRef()

  return <>
    <Text onClick={() => setShow(true)}>弹窗</Text>
    {show && <PullView ref={pullView} onClose={() => setShow(false)}>
      <Column className='bg-page r-3 gap-2' style={{ height: px(1200) }}>
        <Text align='center' className='mt-3' bold>说明</Text>
        <Text onClick={() => pullView.current.close()}>使用实例方法关闭</Text>
        <ScrollView>
          ... 内容
        </ScrollView>
      </Column>
    </PullView>}
  </>
}
```

## Props

### side

从什么方向进行弹出

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('bottom', 'top', 'left', 'right') | 否 | bottom |

### overlayOpacity

空白区域的不透明度，`0-1`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0.5 |

### mask

是否锁定模态框 设置为true点击空白区域无法关闭模态框

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### masking

是否显示遮罩层，默认显示，设置为false隐藏遮罩层，隐藏后，可以后面的内容是可以点击的

当关闭遮罩层时，无法点击遮罩层进行关闭，需要手动关闭弹框

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### group

分组，这个字段相同的 PullView Modal 等组件将会以队列的形式显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### style

弹出层内层样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### onClose

点击遮罩关闭时的回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| function | 否 |  |

## 实例方法

### close()

用于关闭弹窗