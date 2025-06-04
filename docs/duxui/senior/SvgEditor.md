---
sidebar_position: 4
---

# SvgEditor Svg编辑器

基于UI库编写的跨端Svg开发的基础编辑器，支持插入图片、文本、绘画等元素，对插入的元素进行移动，缩放，旋转操作

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='SvgEditor' />

```jsx
import { getMedia } from '@/duxapp/utils/net/util'
import { Header, TopView, Column, SvgEditor, SvgEditorController, useSvgEditorController, px } from '@/duxuiExample'

export default function SvgEditorExample() {

  const context = useSvgEditorController()

  return <TopView>
    <Header title='SvgEditor' />
    <Column grow className='m-3 bg-white'>
      <SvgEditor
        width='100%' height='100%'
        {...context.editor}
      />
    </Column>
    <SvgEditorController
      {...context.controller}
      selectImage={selectImage}
      className='m-3 bg-white r-1'
      style={{ height: px(100), marginTop: 0 }}
    />
  </TopView>
}

const selectImage = async () => {
  const res = await getMedia('image', { count: 1 })

  return res[0].path
}
```

## Props

继承自 [`Svg`](/docs/duxui/svg/)

### defaultValue

默认渲染内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Value[] | 否 |  |

### onChange

绘制改变事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: Value[]) => void | 否 |  |

### mode

组件模式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| path \| text \| ellipse \| line \| rect | 否 |  |

### pathProps

传递给绘画模式的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| PathProps | 否 |  |

### textProps

文本输入样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| TextProps | 否 |  |

### ellipseProps

绘制椭圆样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| EllipseProps | 否 |  |

### lineProps

绘制线条样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| LineProps | 否 |  |

### rectProps

绘制矩形样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| RectProps | 否 |  |

## 实例方法

### add(...values)

添加图层到编辑器

## SvgEditorController Props

编辑器控制器，通过可控制器可以很方便的操作控制器，省去用户编写操作界面

使用方法，查看上面的示例

继承自 [`Column`](/docs/duxui/layout/Column)

### selectImage

插入图片必须的选项，传入一个函数，异步返回一个本地图片路径

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| () => Promise\<string\> | 否 |  |

## 方法

### useSvgEditorController()

React钩子，返回的数据分别用于编辑器和控制器，使用方法，请查看上面的示例