---
sidebar_position: 13
---

# Upload 上传

用于上传图片或者视频的组件

在使用这个这个组件之前需要先用 `formConfig.setConfig` 注册一个上传函数，可以参考 `duxcmsUser` `app.js` 中是如何注册这个函数的

```js
formConfig.setConfig({
  upload,
  uploadTempFile
})
```

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Upload' />

```jsx
import { Header, ScrollView, TopView, Form, Card, Divider, Upload } from '@/duxui'

export default function UploadExample() {
  return <TopView>
    <Header title='Upload' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <Divider.Group>
            <Form.Item label='单图上传' field='image' direction='vertical' >
              <Upload />
            </Form.Item>
            <Form.Item label='多图上传' field='images' direction='vertical' >
              <Upload max={9} />
            </Form.Item>
            <Form.Item label='视频上传' field='images' direction='vertical' >
              <Upload type='video' />
            </Form.Item>
            <Form.Item label='视频和图片上传' field='images' direction='vertical' >
              <Upload type='all' />
            </Form.Item>
          </Divider.Group>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自[GridProps](../layout/Grid#props)

### type

上传媒体类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('image', 'video', 'all') | 否 | image |

### max

最多允许上传多少图片

传入 1 相当于单个上传，value是字符串类型，大于1是多个上传，value是数组类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

### value

值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| string[] | 否 | 1 |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| string[] | 否 |  |

### onChange

上传或者删除图片的回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string \| string[]) => void | 否 |  |

### column

每行显示多少图片

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 4 |

### addText

上传的文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 上传 |

### disabled

是否禁用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### option

传递给上传函数的选项

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [Upload.Option](/docs/duxapp/utils/net#uploadoption) | 否 | false |