---
sidebar_position: 12
---

# KeyboardDismiss 键盘自动收起

在rn端在非ScrollView组件内，点击空白区域不会自动隐藏键盘

在RN端作为一个View处理，在其他端是一个空元素，直接返回子元素

不要给他绑定任何事件，你可以给你设置style

什么时候使用这个组件？  
在非ScrollView里面使用了输入框组件的情况下，在外部包裹这个组件，可以让点击空白区域的时候自动收起键盘

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='KeyboardDismiss' />

```jsx
import { Header, KeyboardDismiss, TopView, Form, Card, Input, PickerDate, Row, DividerGroup, FormItem, FormSubmit } from '@/duxuiExample'

export default function KeyboardDismissExample() {

  const submit = async data => {
    console.log(data)
  }

  return <TopView>
    <Header title='Form' />
    <Form onSubmit={submit}>
      <KeyboardDismiss>
        <Card margin verticalPadding={false}>
          <DividerGroup>
            <FormItem label='输入框' name='text' desc='这个组件仅针对RN端生效，其他端默认如此'>
              <Input placeholder='请输入' align='right' grow />
            </FormItem>
            <FormItem label='介绍的输入' name='desc' desc='输入框介绍，这是输入框介绍'>
              <Input placeholder='请输入' />
            </FormItem>
            <FormItem label='日期' name='date' desc='当键盘弹出时，点击选择日期，可以收起键盘并弹出日期'>
              <PickerDate title='日期' placeholder='请选择日期' grow />
            </FormItem>
          </DividerGroup>
        </Card>
        <Row className='p-3 gap-3'>
          <FormSubmit className='flex-grow' type='primary'>提交</FormSubmit>
        </Row>
      </KeyboardDismiss>
    </Form>
  </TopView>
}
```

## 属性

### buddle

决定子元素有点击事件的时候，是否也要收起键盘  
例如点击 Upload 的上传按钮的时候是否收起键盘


ScrollView不支持这个属性，如果要让在ScrollView里面的表单实现这样的效果  
给ScrollView 设置 `keyboardShouldPersistTaps='always'`  
然后用这个组件包裹ScrollView或者更外层

当设置为false，效果和 keyboardShouldPersistTaps='handled' 是一样的  
duxapp 模块提供的 ScrollView 默认设置了keyboardShouldPersistTaps='handled'

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |