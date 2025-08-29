---
sidebar_position: 21
---

# ConfirmForm API弹出表单

使用api的方式弹出一个表单，并在用户输入后获取用户输入的结果

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ConfirmForm' />


```jsx
import { Header, ScrollView, TopView, GroupList, Button, confirmForm, Input, toast, Textarea } from '@/duxuiExample'

export default TopView.page(function ConfirmFormExample() {
  return <>
    <Header title='ConfirmForm' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Button type='primary'
            onClick={async () => {
              const text = await confirmForm({
                form: <Input placeholder='请输入内容' align='center' />
              })
              toast(`结果：${text}`)
            }}
          >弹出输入框</Button>
        </GroupList.Item>
        <GroupList.Item title='其他表单'>
          <Button type='primary'
            onClick={async () => {
              const text = await confirmForm({
                form: <Textarea placeholder='请输入内容' />
              })
              toast(`结果：${text}`)
            }}
          >弹出多行文本</Button>
        </GroupList.Item>
        <GroupList.Item title='数据验证'>
          <Button type='primary'
            onClick={async () => {
              const text = await confirmForm({
                title: '数据验证',
                form: <Input placeholder='请输入内容' align='center' />,
                verify: val => {
                  if (!val) {
                    return toast('请输入内容')
                  }
                  if (val.length < 4) {
                    return toast('输入的内容太少了')
                  }
                  return true
                }
              })
              toast(`结果：${text}`)
            }}
          >弹出输入框</Button>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </>
})
```

## 参数

### title

标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 请输入 |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 | |

### form

要渲染的表单，表单项需要从ui库中选择

或者自行封装，需要支持 onChange 事件 和 value 属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement \| ComponentType\<any\> | 是 | |

### verify

提供验证函数

如果提供，最终必须返回 true 才能验证通过

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (val: any) => boolean \| Promise\<boolean\> | 否 | |

### multiple

是否多字段表单

开启后可以传入Form的任意子表单

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | |

```jsx
const res = await confirmForm({
  title: '信息',
  multiple: true,
  defaultValue: {
    images: ['https://picsum.photos/200']
  },
  form: <Column className='gap-3'>
    <FormItem name='price' label='价格'>
      <Input placeholder='请输入价格' grow type='digitpad' />
    </FormItem>
    <FormItem name='images' label='凭证图' vertical>
      <Upload max={3} />
    </FormItem>
  </Column>,
  verify: vals => {
    if (!vals.weight_price) {
      return toast('请输入价格')
    }
    if (!vals.images?.length) {
      return toast('请上传凭证')
    }
    return true
  }
})
```

### cancel

是否显示取消按钮

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### submitText

提交按钮的文本内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 确定 |

### cancelText

取消按钮的文本内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 取消 |