---
sidebar_position: 13
---

# UploadManage 上传管理器

用于上传图片或者视频以及其他文件的组件，需要设置一个上传驱动，参照本文档最后的代码

如果选择文件，小程序可以从聊天记录中选择

## 示例

此组件需要上传驱动，暂时无法提供演示

```jsx
import { Header, ScrollView, TopView, Form, FormItem, Card, Divider, DividerGroup, UploadManage } from '@/duxuiExample'

export default function UploadManageExample() {
  return <TopView>
    <Header title='UploadManage' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <DividerGroup>
            <FormItem label='图片上传' field='image1' direction='vertical' >
              <UploadManage type='image/*' />
            </FormItem>
            <FormItem label='指定图片类型' field='image2' direction='vertical' >
              <UploadManage type='.png,.jpg' />
            </FormItem>
            <FormItem label='视频上传' field='video1' direction='vertical' >
              <UploadManage type='video/*' />
            </FormItem>
            <FormItem label='指定类型' field='video2' direction='vertical' >
              <UploadManage type='.mp4' />
            </FormItem>
            <FormItem label='图片和视频' field='videoImage1' direction='vertical' >
              <UploadManage type='video/*,image/*' />
            </FormItem>
            <FormItem label='图片和视频' field='videoImage2' direction='vertical' >
              <UploadManage type='.mp4,.png,.jpg' />
            </FormItem>
            <FormItem label='音频上传' field='audio' direction='vertical' >
              <UploadManage type='.mp3' />
            </FormItem>
            <FormItem label='其他文件' field='file' direction='vertical' >
              <UploadManage type='.pdf,.docx' />
            </FormItem>
          </DividerGroup>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自[GridProps](../layout/Grid#props)

### type

选择文件类型，可以是文件后缀名组成的字符串，参见上面的示例

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | image/* |

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

选择的文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 选择 |

### disabled

是否禁用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### option

传递给选择媒体函数的选项

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [chooseMedia](/docs/duxapp/utils/media#choosemediatype-option) | 否 | false |

## 方法

### choiceUploadManage(type, max, option)

通过函数的方式调用资源管理器进行文件选择，参数和使用组件时一致，异步返回选择结果

### uploadManageDrive.setDreve(dreve)

设置上传驱动

内置一个7牛云的上传驱动，如果你要开发其他驱动，请参照此驱动进行开发

```js
import { uploadManageDrive, uploadDriveQiniu } from '@/duxui'

const qiniu = uploadDriveQiniu()

qiniu.configAsync(async () => {
  const res = await request({
    method: 'POST',
    url: 'member/qiniu'
  })
  return {
    // 可选参数
    bucket: res.bucket,
    // 上传token
    token: res.token,
    // cdn地址
    host: res.public_url,
    // 上传地址
    endpoint: res.domain.startsWith('http') ? res.domain : `https://${res.domain}`
  }
})

uploadManageDrive.setDreve(qiniu)
```