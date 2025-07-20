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
| string[] | 是 |  |

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