---
sidebar_position: 8
---

# ContextMenu 类右键菜单

通过函数弹出一个右键菜单，通常是长按事件弹出的右键菜单

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ContextMenu' />

```jsx
import { Header, ScrollView, TopView, GroupList, showContextMenu, toast } from '@/duxuiExample'
import { View } from '@tarojs/components'

export default TopView.page(function ContextMenuExample() {
  return <>
    <Header title='ContextMenu' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法' desc='点击任意位置弹出菜单'>
          <View className='w-full square bg-white'
            onClick={async e => {
              const touch = e.changedTouches[0]
              const item = await showContextMenu({
                x: touch.pageX,
                y: touch.pageY,
                list: ['复制', '粘贴', '删除']
              })
              toast(`选择了：${item.item}`)
            }}
          >
          </View>
        </GroupList.Item>
        <GroupList.Item title='长按' desc='长按任意位置弹出菜单'>
          <View className='w-full square bg-white'
            onLongPress={async e => {
              const touch = e.changedTouches[0]
              const item = await showContextMenu({
                x: touch.pageX,
                y: touch.pageY,
                list: ['复制', '粘贴', '删除']
              })
              toast(`选择了：${item.item}`)
            }}
          >
          </View>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </>
})
```

## 参数

showContextMenu(option) 的 `option` 参数内容如下

### x

菜单显示的x坐标

需要真实坐标

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 是 |  |

### y

菜单显示的y坐标

需要真实坐标

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 是 |  |

### list

菜单列表

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string[] \| \{ name: string, children?: list \}  | 是 |  |

支持显示子菜单

```js
const { item } = await showContextMenu({
  x: touch.pageX,
  y: touch.pageY,
  list: [
    { name: '菜单1', callback: () => console.log('点击菜单1') },
    {
      name: '菜单2', children: [
        { name: '子菜单1', callback: () => console.log('点击子菜单1') },
        { name: '子菜单2', callback: () => console.log('点击子菜单2') }
      ]
    }
  ]
})

item.callback()
```

### animation

是否开启动画效果

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### oneCallback

只有一个菜单时，是否立即返回这个菜单作为结果，而不经过用户选择

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## 返回值

返回值是异步返回的,返回一个对象


```js
{
  // 选中的菜单
  index: number
  // 选中菜单名称
  item: string
}
```