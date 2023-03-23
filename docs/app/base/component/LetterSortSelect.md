# 字母排序选择器(LetterSortSelect)

`LetterSortSelect` 组件是一个基于字母排序的选择器组件，它可以用于展示一个按照字母排序的列表，并支持通过快捷导航定位到列表对应的位置，也支持通过搜索框对列表中的项进行关键词搜索。

## 使用方法

```jsx
import { LetterSortSelect } from '@/components/LetterSortSelect'

const list = [
  {
    name: 'A',
    children: [
      { name: '安阳', value: 'anyang' },
      { name: '安庆', value: 'anqing' },
      //...
    ]
  },
  //...
]

<LetterSortSelect list={list} onItemClick={item => console.log(item)} />
```

## Props
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --------------- | -------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| list | `Array` | 是 | - | 数据列表，要求为一个由字母排序的对象数组，其中每个对象包含 `name` 和 `children` 两个属性。`name` 表示当前分组的名称，`children` 表示当前分组的项列表。每一项对象应包含 `name` 和 `value` 两个属性，其中 `name` 表示当前项的名称，`value` 表示当前项的值。具体格式见上面的例子。 |
| onItemClick | `function` | 否 | noop | 点击每一项时的回调函数，接收当前项的参数。 |
| className | `string` | 否 | '' | 自定义样式类名。 |
| renderTop | `ReactNode` | 否 | - | 渲染在组件顶部的节点。 |
| renderHeader | `ReactNode` | 否 | - | 渲染在列表头部的节点。 |
| renderFooter | `ReactNode` | 否 | - | 渲染在列表底部的节点。 |

### LetterSortSelect.Search

| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| ---------- | ---------- | -------- | ----------------------- | --------------------------------------- |
| placeholder | `string` | 否 | `"请输入关键词搜索"` | 输入框占位提示文本。 |

## 使用上下文

`LetterSortSelect` 组件提供了上下文，你可以通过 `LetterSortSelect.Search` 组件的 `useContext` 函数来获取上下文对象。

```jsx
import { useContext } from 'react'
import { LetterSortSelect } from '@/components/LetterSortSelect'

const list = [
  //...
]

const MyComponent = () => {
  const { keyword, setKeyword } = useContext()
  return (
    <>
      <LetterSortSelect list={list}>
        <LetterSortSelect.Search placeholder='搜索...' />
      </LetterSortSelect>
      <div>当前搜索关键词: {keyword}</div>
      <button onClick={() => setKeyword('')}>清空</button>
    </>
  )
}
```

### 上下文属性

#### keyword

- 类型：`string`
- 描述：当前搜索