---
sidebar_position: 14
---

# ModalForm 弹出表单

用于将其他表单封装为一个弹出表单，例如单列选择器、日期选择器都是由这个组件封装的

这里包含了 

- `ModalForm` 单出单个表单，作为一个表单使用，放在 `Form.Item` 中
- `ModalForms` 弹出多个表单，独立内容，放在Form内任何位置

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ModalForm' />

```jsx
import {
  Header, ScrollView, TopView, Form, Card, Divider,
  Cascade, ModalForm, ModalForms, DatePicker, Input, Text, CardSelect, duxappTheme, Space, Row, Column,
  px
} from '@/duxuiExample'
import { getSystemInfoSync } from '@tarojs/taro'

const cascadeData = [
  {
    name: '分类1', value: 1, children: [
      { name: '分类1-1', value: 11 },
      { name: '分类1-2', value: 12 },
      { name: '分类1-3', value: 13 },
    ]
  },
  {
    name: '分类2', value: 2, children: [
      { name: '分类2-1', value: 21 },
      { name: '分类2-2', value: 22 },
      { name: '分类2-3', value: 23 },
    ]
  },
  {
    name: '分类3', value: 3, children: [
      { name: '分类3-1', value: 31 },
      { name: '分类3-2', value: 32 },
      { name: '分类3-3', value: 33 },
    ]
  }
]

const defaultValues = {
  cascade1: 32,
  cascade2: [22, 23],
  dateshow: '2011-03-30',
  pull1: '这是默认值'
}

const PullForm = () => <Card shadow={false}>
  <Column style={{ height: getSystemInfoSync().statusBarHeight + (process.env.TARO_ENV === 'weapp' ? 22 : 0) }} />
  <Form.Item label='输入框' field='pull1' direction='vertical'>
    <Input placeholder='请输入' />
  </Form.Item>
  <Form.Item label='cardSelect' field='pull2' direction='vertical'>
    <CardSelect.Group checkedProps={{ color: duxappTheme.primaryColor, border: true }}>
      <Space row wrap>
        <CardSelect color={duxappTheme.textColor1} value={1} plain border={false} radiusType='round'>
          <Text size={3}>选项1</Text>
        </CardSelect>
        <CardSelect color={duxappTheme.textColor1} value={2} plain border={false} radiusType='round'>
          <Text size={3}>选项2</Text>
        </CardSelect>
        <CardSelect color={duxappTheme.textColor1} value={3} plain border={false} radiusType='round'>
          <Text size={3}>选项3</Text>
        </CardSelect>
      </Space>
    </CardSelect.Group>
  </Form.Item>
</Card>

export default function ModalFormExample() {
  return <TopView>
    <Header title='ModalForm' />
    <Form onSubmit={console.log} defaultValues={defaultValues}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <Divider.Group>
            <Form.Item label='日期' field='date'>
              <ModalForm
                renderForm={<DatePicker />}
                placeholder='请选择日期'
                grow
                title='请选择日期'
              />
            </Form.Item>
            <Form.Item label='日期时间' field='datetime'>
              <ModalForm
                renderForm={<DatePicker mode='datetime' />}
                placeholder='请选择日期时间'
                grow
                title='请选择日期时间'
              />
            </Form.Item>
            <Form.Item label='弹出级联选择' field='cascade3'>
              <ModalForm
                renderForm={<Cascade data={cascadeData} level={2} mode='checkbox' theme='fill' anyLevel style={{ height: px(800) }} />}
                placeholder='请选择等级'
                grow
                title='级联选择'
              >

              </ModalForm>
            </Form.Item>
            <Form.Item label='非受控模式'>
              <ModalForm
                renderForm={<Cascade data={cascadeData} level={2} mode='checkbox' theme='fill' anyLevel style={{ height: px(800) }} />}
                placeholder='请选择等级'
                grow
                title='级联选择'
              >
              </ModalForm>
            </Form.Item>
            <ModalForms
              side='right'
              renderForm={<ScrollView>
                <PullForm />
              </ScrollView>}
            >
              <Text style={{ padding: 20 }}>弹出多个表单</Text>
            </ModalForms>
          </Divider.Group>
        </Card>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

### value

值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### onChange

值变化时的回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: any) => void | 否 |  |

### renderForm

渲染表单的组件，例如你需要封装Input就传入 `<Input />`，他需要是一个表单组件，也就是说他要存在 value属性和onChange事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### getValue

获取value的显示值，如果是你自定义的表单，value不是你想要显示的值，你可以传入一个函数来返回要显示的值

函数会把当前的value传入，需要返回要显示给用户的字符串

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: any) => string | 否 |  

### placeholder

提示文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 请选择 |

### side

弹出位置

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('bottom', 'top', 'left', 'right') | 否 | bottom |

### title

弹出后顶部显示的标题

### renderHeader

内容显示在renderForm的上边

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderFooter

内容显示在renderForm的下边，如果你需要自定义提交按钮，可以将它放在这个位置

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### childPropsValueKey

传递给子内容的value的Props的名称

如果你要自定义显示，这可以用到这个属性，例如像下面这样使用

```jsx
<ModalForm
  renderForm={<DatePicker mode='month' />}
  childPropsValueKey='value'
  title='月份选择'
  value={date}
  onChange={setDate}
>
  <Dates />
</ModalForm>

const Dates = ({ value, ...props }) => {
  return <Row className='ph-1 gap-1 ca-bg' justify='end' shrink items='center' {...props}>
    <Text color={2} size={1} align='right'>{value}</Text>
    <ChiAnIcon name='calendar' color={duxappTheme.textColor2} size={40} />
  </Row>
}
```

需要注意的是需要接收 `onClick` 事件，并且赋值给你的组件的点击事件，否则将无法点击弹出

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### showButton

是否显示按钮，显示提交和重置按钮，关闭后你可以自定义显示这两个按钮

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### autoSubmit

是否在值发生改变时自动提交，也就是不需要点击提交就将值赋值到表单中

如果设置为true 提交和重置按钮也不会显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### resetMode

重置按钮重置的方式

- default 重置到Form设置的默认值 此属性是默认值
- clear 清除value 设置为undefined
- prev 重置到上一次的value

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'clear', 'prev') | 否 | default |

### onSubmitBefore

可以监听用户提交，传入要提交的值，通过抛出错误的方式阻止用户提交，这个方法可以是同步，也可以是异步的

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(val: any) => Promise<{}>` | 否 |  |

## ModalForm.Reset Props

重置按钮，showButton设置为fasle后，你可以自定义重置按钮

默认使用 [`Button`](../base/Button) 渲染按钮，如果你要自定义按钮内容，请使用一个可点击的元素作为子元素

继承自[ButtonProps](../base/Button#props)

### resetMode

重置按钮重置的方式

- default 重置到Form设置的默认值 此属性是默认值
- clear 清除value 设置为undefined
- prev 重置到上一次的value

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'clear', 'prev') | 否 | default |

### children

子元素

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

## ModalForm.Submit Props

提交按钮，showButton设置为fasle后，你可以自定义提交按钮

默认使用 [`Button`](../base/Button) 渲染按钮，如果你要自定义按钮内容，请使用一个可点击的元素作为子元素

继承自[ButtonProps](../base/Button#props)

### value

设置提交的值，如果设置了提交的时候将按照此值提交

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### defaultValue

默认值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### children

子元素

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

## ModalForms Props

用于弹出多个表单，由于context的作用域问题，当你表单中的一部分需要弹出显示的时候，需要用这个组件来进行弹出

如果你使用了PullView、Modal等弹出，填写的值将不会在表单中

### renderForm

弹出的表单内容，你可以自定义弹出任何内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### side

弹出位置

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('bottom', 'top', 'left', 'right') | 否 | bottom |

### title

弹出后顶部显示的标题

### showButton

是否显示按钮，显示提交和重置按钮，关闭后你可以自定义显示这两个按钮

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### autoSubmit

是否在值发生改变时自动提交，也就是不需要点击提交就将值赋值到表单中

如果设置为true 提交和重置按钮也不会显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### resetMode

重置按钮重置的方式

- default 重置到Form设置的默认值 此属性是默认值
- clear 清除value 设置为undefined
- prev 重置到上一次的value

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'clear', 'prev') | 否 | default |

### children

子元素，需要是一个可点击的单个元素

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### onSubmitBefore

可以监听用户提交，传入要提交的值，通过抛出错误的方式阻止用户提交，这个方法可以是同步，也可以是异步的

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(val: {[key: string]: any}) => Promise<{}>` | 否 |  |

## ModalForms.Reset Props

重置按钮，showButton设置为fasle后，你可以自定义重置按钮

默认使用 [`Button`](../base/Button) 渲染按钮，如果你要自定义按钮内容，请使用一个可点击的元素作为子元素

继承自[ButtonProps](../base/Button#props)

### resetMode

重置按钮重置的方式

- default 重置到Form设置的默认值 此属性是默认值
- clear 清除value 设置为undefined
- prev 重置到上一次的value

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'clear', 'prev') | 否 | default |

### children

子元素

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

## ModalForms.Submit Props

提交按钮，showButton设置为fasle后，你可以自定义提按钮

默认使用 [`Button`](../base/Button) 渲染按钮，如果你要自定义按钮内容，请使用一个可点击的元素作为子元素

继承自[ButtonProps](../base/Button#props)

### value

设置提交的值，如果设置了提交的时候将按照此值提交

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### children

子元素

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |
