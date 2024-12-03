---
sidebar_position: 4
---

# Menu 下拉菜单

下拉菜单，常见用于一些表单的筛选

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Menu' />

```jsx
import { Menu, Form } from '@/duxui'

const itemRef = useRef()

<Menu round>
  <Form.Item field='show1'>
    <Menu.Item
      title='显示1'
      options={[{ name: '标题1', value: 1 }, { name: '标题2', value: 2 }]}
    />
  </Form.Item>
  <Form.Item field='show2'>
    <Menu.Item
      column={2}
      title='多列'
      options={[{ name: 'ABC1', value: 1 }, { name: 'ABC2', value: 2 }, { name: 'ABC3', value: 3 }]}
    />
  </Form.Item>
  <Form.Item field='show3'>
    <Menu.Item
      title='自定义内容'
      ref={itemRef}
    >
      <Text>自定义显示</Text>
      <Button onClick={() => itemRef.current.toggle()}>关闭</Button>
    </Menu.Item>
  </Form.Item>
</Menu>
```

## Props

继承自 [Layout Props](../../duxapp/component/Layout#props)

### round

弹出的菜单是否显示圆角

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## Menu.Item Props

Menu.Item 只能放在 Menu 的子元素中，但是不限制是一级子元素

继承自 [Row Props](../layout/Row#props)

### title

菜单项标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

### options

菜单项目

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `{ value: any name: string }[]` | 是 |  |

### cancel

是否能取消选中项目

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### column

列数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

### align

文本对齐方式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('left', 'center', 'right') | 否 | left |

### value

当前选中的值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### onChange

值改变时触发的事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: any) => void | 否 |  |

### renderIcon

自定义图标区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### children

自定义渲染弹出元素，优先级高于options

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### onClick

点击事件回调函数，当传入点击事件参数时，默认的点击事件将不会被触发

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| () => void | 否 |  |

## Menu.Item 实例方法

### toggle()

切换菜单项的显示/隐藏状态
