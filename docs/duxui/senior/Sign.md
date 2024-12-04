---
sidebar_position: 1
---

# Sign 签名

手写签名组件

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Sign' />

```jsx
import { Header, ScrollView, TopView, GroupList } from '@/duxuiExample'
import { px, Sign } from '@/duxui'

export default function SignExample() {
  return <TopView>
    <Header title='Sign' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='签名' desc='需要设置高度'>
          <Sign style={{ height: px(1200) }} className='bg-white' />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

### color

指定笔画的颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | #333 |

### onChange

触发上传操作后的Change事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (val: string) => void | 否 |  |

### className

组件样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### style

组件样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

## 实例方法

### clear()

清空画布

### save()

保存数据，调用方法后会进行判断，如果笔画太少不会提交，会执行 reject

他会返回上传后的图片地址

在这之前你需要用 `formConfig.setConfig` 注册一个上传临时文件函数，可以参考 `duxcmsUser` `app.js` 中是如何注册这个函数的

```js
formConfig.setConfig({
  upload,
  uploadTempFile
})
```