# 弹出框(PullView)

`PullView`组件是一个可以在页面任意方向弹出的容器，通常用于显示菜单或弹出框。

### 属性列表

| 属性名 | 类型 | 默认值 | 必填 | 描述 |
| ------ | ---- | ------ | ---- | ---- |
| side | string | bottom | 否 | 指定侧边，可选值为`top`、`right`、`bottom`、`left` |
| style | object | {} | 否 | 容器样式 |
| overlayOpacity | number | 0.5 | 否 | 遮罩透明度 |
| modal | boolean | false | 否 | 是否为模态框，如果为true，则只能通过点击右上角的关闭按钮来关闭，点击遮罩区域无效 |
| onClose | function | 无 | 否 | 关闭时的回调函数 |

### PullView示例

```jsx
import { PullView } from './components/PullView'

function Example() {
  const [show, setShow] = useState(false)
  const open = useCallback(() => {
    setShow(true)
  }, [])
  const close = useCallback(() => {
    setShow(false)
  }, [])
  return (
    <View>
      <Button onClick={open}>打开PullView</Button>
      <PullView side='top' show={show} onClose={close}>
        <View>我是PullView的内容</View>
      </PullView>
    </View>
  )
}
```