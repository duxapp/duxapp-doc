# 弹出菜单(Dropdown)

下拉菜单组件，用于在页面中展示一个下拉菜单。点击该组件，会显示一个下拉菜单列表。支持自定义下拉菜单列表，支持回调函数。

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 点击该组件后，下拉菜单列表所对应的组件 | ReactElement | - |
| renderContent | 下拉菜单列表的渲染函数 | Function | - |
| menuList | 下拉菜单的数据 | Array | - |
| onSelect | 点击下拉菜单某一项时的回调函数 | Function | - |
| rangeKey | 数据中作为文本显示的 key 值，如果传入了 renderContent，则该值无效 | String | `'text'` |
| select | 下拉菜单默认选中项的下标 | Number | - |
| className | 样式类名 | String | - |

## Ref

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| close | 关闭下拉菜单 | Function |

## Events

| 参数 | 说明 | 回调参数 |
| --- | --- | --- |
| onSelect | 点击下拉菜单某一项时的回调函数 | `{ item: object, index: number }` |

## Example

```jsx
import { DropDown } from '@/components/DropDown'

const options = [
  { text: '选项一' },
  { text: '选项二' },
  { text: '选项三' },
  { type: 'line' },
  { text: '选项四' },
  { text: '选项五' },
]

function Page() {
  const [selected, setSelected] = useState(-1)

  const handleSelect = useCallback(({ index }) => {
    setSelected(index)
  }, [])

  return (
    <DropDown
      menuList={options}
      onSelect={handleSelect}
      select={selected}
    >
      <View>点击展开下拉菜单</View>
    </DropDown>
  )
}
```