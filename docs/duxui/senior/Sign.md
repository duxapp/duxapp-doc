---
sidebar_position: 2
---

# Sign 签名

手写签名组件

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Sign' />

```jsx
import { Header, ScrollView, TopView, GroupList } from '@/duxuiExample'
import { Button, duxappTheme, px, Row, Sign, toast } from '@/duxui'
import { useRef } from 'react'

export default function SignExample() {

  const sign = useRef()

  return <TopView>
    <Header title='Sign' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='签名' desc='需要设置高度'>
          <Sign ref={sign} style={{ height: px(1000) }} color={duxappTheme.primaryColor} className='bg-white' />
        </GroupList.Item>
        <Row className='gap-2'>
          <Button
            type='primary'
            size='l'
            className='flex-grow'
            onClick={async () => {
              try {
                const tempPath = await sign.current.save(true)
                console.log(tempPath)
                toast('临时文件路径：' + tempPath)
              } catch (error) {
                toast(error)
              }
            }}
          >获取图片</Button>
          <Button
            type='secondary'
            size='l'
            className='flex-grow'
            onClick={() => sign.current.clear()}
          >清空</Button>
          <Button
            type='secondary'
            size='l'
            className='flex-grow'
            onClick={() => sign.current.revoke()}
          >撤销</Button>
        </Row>
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

### size

指定笔画的粗细

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 3 |

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

### save(getTempFilePath)

保存数据，调用方法后会进行判断，如果笔画太少不会提交，会执行 reject

他会返回上传后的图片地址

如果传入 getTempFilePath 参数为true，则不需要后面的步骤，会返回一个临时文件路径

在这之前你需要用 `formConfig.setConfig` 注册一个上传临时文件函数，可以参考 `duxcmsUser` `app.js` 中是如何注册这个函数的

```js
formConfig.setConfig({
  upload,
  uploadTempFile
})
```

### revoke()

撤销一步
