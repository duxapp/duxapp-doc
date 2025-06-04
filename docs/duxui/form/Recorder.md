---
sidebar_position: 18
---

# Recorder 录音

可以用于录制音频，也可以调用静态方法获取录音

在使用这个这个组件之前需要先用 `formConfig.setConfig` 注册一个上传函数，可以参考 `duxcmsUser` `app.js` 中是如何注册这个函数的

```js
formConfig.setConfig({
  upload,
  uploadTempFile
})
```

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Recorder' />

```jsx
import { Header, ScrollView, TopView, Form, FormItem, Card, Divider, DividerGroup, Recorder,  recorderStart, Button, Text, Column } from '@/duxuiExample'

export default function RecorderExample() {
  return <TopView>
    <Header title='Radio' />
    <Form onSubmit={console.log}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <DividerGroup>
            <FormItem label='录音' field='recorder1' vertical desc='单个录音类型为字符串'>
              <Recorder />
            </FormItem>
            <FormItem label='多个录音' field='recorder2' vertical desc='多个录音类型为数组'>
              <Recorder max={9} />
            </FormItem>
            <Column className='gap-2 pv-3'>
              <Button size='l' type='primary'
                onClick={async () => {
                  const res = await recorderStart()
                  console.log('本地录音结果', res)
                }}
              >弹出录音</Button>
              <Text size={1} color={2}>直接通过静态方法调用录音接口，并返回录音结果</Text>
            </Column>
          </DividerGroup>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

继承自[GridProps](../layout/Grid#props)

### max

最多允许多少个录音

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

用户操作时回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string \| string[]) => void | 否 |  |

### column

每行显示多少录音

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 4 |

### tip

录音提示文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 录音 |

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

## 方法

### recorderStart()

异步弹出录音界面，并异步返回本地录音结果

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| path | string | 临时文件位置 |
| size | number | 录音大小 |
| duration | number | 录音时长 ms |