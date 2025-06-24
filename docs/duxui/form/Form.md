---
sidebar_position: 1
---

# Form 表单

封装了表单组件，能快速完成表单的布局、表单验证、复杂对象表单

表单包含了一系列的组件或者方法，包括下面这些

- Form 表单
- FormItem 表单项
- FormSubmit 表单提交
- FormReset 表单重置
- FormObject 对象表单
- FormArray 数组表单
- FormArrayAction 数组表单操作管理
- useFormContext 获取表单上下文
- useFormItemProxy 给表单代理值和事件

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Form' />

```jsx
import { Header, ScrollView, TopView, Form, Card, Input, PickerDate, PickerSelect, Textarea, Row, DividerGroup, FormItem, FormSubmit, FormReset, confirm, route } from '@/duxuiExample'

// 默认值支持多种形式 会直接定义值 函数返回值 异步函数返回值
const defaultValues = async () => {
  return {
    text: '这是默认值'
  }
}

const rules = {
  text: [
    {
      required: true,
      type: 'string',
      message: '输入框为必填字段'
    }
  ],
  desc: [
    {
      required: true,
      type: 'string',
      message: '介绍为必填字段'
    }
  ]
}

export default function FormExample() {

  const submit = async data => {
    console.log(data)
    await confirm({
      title: '提交成功',
      content: '表单缓存将被清除，再次进入表单需要重新填写'
    })
    route.back()
    return true
  }

  return <TopView>
    <Header title='Form' />
    <Form cache='duxui-form' onSubmit={submit} defaultValues={defaultValues}>
      <ScrollView>
        <Card margin verticalPadding={false}>
          <DividerGroup>
            <FormItem label='输入框' name='text' rules={rules.text}>
              <Input placeholder='请输入' align='right' grow />
            </FormItem>
            <FormItem label='介绍的输入' name='desc' desc='输入框介绍，这是输入框介绍' rules={rules.desc}>
              <Input placeholder='请输入' />
            </FormItem>
            <FormItem label='日期' name='date'>
              <PickerDate title='日期' placeholder='请选择日期' grow />
            </FormItem>
            <FormItem label='选择' name='sex'>
              <PickerSelect title='选择' placeholder='请选择性别' range={['男', '女']} grow />
            </FormItem>
            <FormItem label='介绍' name='info' direction='vertical' >
              <Textarea placeholder='请输入介绍' maxlength={100} />
            </FormItem>
          </DividerGroup>
        </Card>
        <Row className='p-3 gap-3'>
          <FormReset className='flex-grow'>重置</FormReset>
          <FormSubmit className='flex-grow' type='primary'>提交</FormSubmit>
        </Row>
      </ScrollView>
    </Form>
  </TopView>
}
```

## Props

### defaultValues

表单默认值，也可以是一个异步函数，其返回值作为默认值，用在一些需要远程加载数据的场景

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `object \| () => Promise<{}> \| Promise<{}>` | 否 |  |

### onChange

表单改变事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(values: object) => void` | 否 |  |

### onSubmit

表单提交事件，通常是由 `FormSubmit` 提交的

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(values: object) => void \| boolean \| Promise<boolean>` | 否 |  |

### cache

是否开启表单填写缓存

填写一个用于保存缓存的字段名，即表示开启

开启后，会将当前填写的数据进行缓存，如果未提交保存，下次打开使用这个缓存加载

在 onSubmit 事件返回true的时候将会把这个缓存清除

如果 onSubmit 提交事件之后，表单继续被编辑，表单还会被保存，请处理这个逻辑

如果读取到 cache，优先级高于 defaultValues

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | |

### disabled

是否禁用表单

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### vertical

表单项是否垂直布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### labelProps

全局传递给标签的属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [TextProps](../show/Text#props) | 否 |  |

### containerProps

全局传递给项目容器的属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [SpaceProps](../layout/Space#props) | 否 |  |

### itemPadding

是否使用项目的内边距，关闭内边距后需要自己控制项目边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### children

传入子元素或者一个函数组件，从这个组件中可以获取到当前表单的多个属性，对标单进行操作

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement \| Component | 否 |  |

## 方法

### useFormContext()

获取当前表单上下文，需要在Form范围内使用，单独使用无效  

其返回值 和Form实例属性和实例方法一样，用于获取表单属性和操作表单

### useFormItemProxy(props)

并非用在表单中的，而是用在对其他表单的封装

例如在对Input的封装中这样用，封装后组件的值既可以外部控制，也可以内部控制

```jsx
export const Input = ({
  grow,
  shrink,
  self,
  align,
  className,
  style,
  value,
  onChange,
  ...props
}) => {

  const [val, setVal] = useFormItemProxy({ value, onChange })

  return <TaroInput
    onInput={setVal}
    className={classNames(
      'DuxInput',
      grow && 'flex-grow',
      shrink && 'flex-shrink',
      self && 'self-' + self,
      align && 'text-' + align,
      className
    )}
    style={style}
    placeholderTextColor={duxappTheme.textColor3}
    placeholderStyle={`color: ${duxappTheme.textColor3}`}
    {...props}
    value={val}
  />
}
```

props参数

| 名称 | 类型 | 说明 |
| ---- | -------- | ------- |
| value | string | 传入的value |
| onChange | (val: string \| any) => void | 传入的value |
| defaultValue | string \| any | 默认值 |

给表单代理值和事件

## 实例属性

### values

当前表单值

### defaultValues

经过计算之后的默认值

### data

表单结果值 将会在点击提交按钮时改变

## 实例方法

### setValue(name, value)

设置表单值


| 名称 | 类型 | 说明 |
| ---- | -------- | ------- |
| name | string | 字段名 |
| value | any | 字段值 |

### setValues(values)

批量设置表单值，values将会和当前表单值进行合并

| 名称 | 类型 | 说明 |
| ---- | -------- | ------- |
| values | object | 多个要设置的值 |

### submit()

提交表单

### reset()

重置表单

### validate()

验证表单

## FormItem Props

表单项，需要放在Form内，其子元素需要是一个表单，且只能有一个子元素

继承自[ColumnProps](../layout/Column#props)

### name

字段名称

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| number | 否 |  |

### wholeForm

控制是否管理整个表单的值

开启后，子表单的 value 将是整个表单的值，onChange 相当于 setValues

此参数和 `name` 不能同时使用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### label

标题

如果未传入属性则只会显示子元素

如果传入一个空字符串怎不会显示label 但是会显示 错误提示 desc 项目内边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### labelProps

标题属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [TextProps](../show/Text#props) | 否 |  |

### form

如果子元素是多个组件，或者嵌套，用于指定表单项目

会在所有子元素中递归查找到这个类型的元素作为表单项

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ComponentType\<any\> | 否 |  |

```jsx
<FormItem name='g' form={Input}>
  <Column className='gap-3 p-3 mv-3'>
    <Input placeholder='输入重量' type='digitpad' align='center' />
    <Divider size={4} color='primary' />
  </Column>
</FormItem>
```

### containerProps

项目容器的属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [SpaceProps](../layout/Space#props) | 否 |  |

### subLabel

副标题 仅跟着标题渲染

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### renderLabelRight

自定义渲染标题右侧区域 一般设置 vertical 为 `true` 时使用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### desc

简介 渲染在表单下面

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### vertical

是否垂直布局

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### required

是否显示红色星号 不作为验证规则

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disabled

禁用表单

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### trigger

通过哪个事件名称触发表单改变

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | onChange |

### triggerPropName

给表单绑定的值的属性名称

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | value |

### rules

表单项验证规则

验证规则使用的是 [b-validate](https://github.com/PengJiyuan/b-validate) 

要是验证生效 `field` 需要传入一个字符串或者数字

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [SchemaRuleType[]](https://github.com/PengJiyuan/b-validate) | 否 |  |

### field

:::danger Deprecated
此属性已弃用，使用 [`name`](#name) 替代。
:::

表单字段

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| number | 否 |  |

### fields

:::danger Deprecated
此属性已弃用，使用 [`wholeform`](#wholeform) 替代。
:::

如果一个表单需要控制多个字段则传入此参数  
此参数和field不能同时使用  
开启之后 子表单 value将是整个表单的值 onChange 相当于 setValues

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## FormSubmit Props

放在Form内部，用于表单提交

默认使用 [`Button`](../base/Button) 渲染按钮，如果你要自定义按钮内容，请使用一个可点击的元素作为子元素

继承自[ButtonProps](../base/Button#props)

### children

当子元素为ReactElement时，将不会使用按钮创建 当子元素为字符串时，将会创建一个按钮

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| ReactElement | 否 |  |

## FormReset Props

放在Form内部，用于表单重置

默认使用 [`Button`](../base/Button) 渲染按钮，如果你要自定义按钮内容，请使用一个可点击的元素作为子元素

继承自[ButtonProps](../base/Button#props)

### children

当子元素为ReactElement时，将不会使用按钮创建 当子元素为字符串时，将会创建一个按钮

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| ReactElement | 否 |  |

## FormObject Props

用于将某个字段创造一个对象，将这个组件作为`FormItem`的子元素使用

```jsx
import { Form, FormObject, Input } from '@/duxui'

<Form>
  <FormItem field='obj'>
    <FormObject>
      <FormItem label='姓名' field='name'>
        <Input />
      </FormItem>
    </FormObject>
  </FormItem>
</Form>
```

他提交的数据将会是这样这样的

```js
{
  obj: {
    name: ''
  }
}
```

### value

对象表单值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| object | 否 |  |

### onChange

内容改变时触发事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (values: object) => void | 否 |  |

## FormArray Props

用于将某个字段创造一个数组，将这个组件作为`FormItem`的子元素使用

```jsx
import { Form, FormArray, Input } from '@/duxui'

<Form>
  <FormItem field='arr'>
    <FormArray>
      <FormItem label='姓名' field={0}>
        <Input />
      </FormItem>
      <FormItem label='电话' field={1}>
        <Input />
      </FormItem>
    </FormArray>
  </FormItem>
</Form>
```
用这个表单提交将得到一个这样的数据

```js
{
  arr: ['张三', '10086']
}
```

可以将他结合 `FormObject` 使用

```jsx
import { Form, Input } from '@/duxui'

<Form>
  <FormItem field='arr'>
    <FormArray>
      <FormItem label='项目1' field={0}>
        <FormObject>
          <FormItem label='姓名' field='name'>
            <Input />
          </FormItem>
          <FormItem label='电话' field='tel'>
            <Input />
          </FormItem>
        </FormObject>
      </FormItem>
      <FormItem label='项目1' field={1}>
        <FormObject>
          <FormItem label='姓名' field='name'>
            <Input />
          </FormItem>
          <FormItem label='电话' field='tel'>
            <Input />
          </FormItem>
        </FormObject>
      </FormItem>
    </FormArray>
  </FormItem>
</Form>
```
那么将会得到这样的数据

```js
{
  arr: [
    {
      name: '张三',
      tel: '10086'
    },
    {
      name: '李四',
      tel: '10010'
    }
  ]
}
```

### value

对象表单值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any[] | 否 |  |

### onChange

内容改变时触发事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (values: any[]) => void | 否 |  |

### renderItem

上面的演示中都是直接使用子元素的形式创建表单，可以发现，Array的子元素通常都是一样，只是赋值了不一样的field字段，那么可以通过这个方法来简写

这是传入一个组件，而非组件实例

这个方法通常需要结合 `FormArrayAction` 来使用，这个组件可以用于数组表单的添加、删除等操作 [去查看](#formarrayaction-props)

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component \| `(props: { value: any, index: number, values: any[] }) => ReactElement`| 否 |  |

### renderTop

渲染数组表单的头部 渲染在此处的内容才能取到数组表单的 Context

一般来说 ArrayAction 将渲染到此处或者 renderItem、renderBottom 否则 ArrayAction将不会生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### renderBottom

渲染数组表单的底部 渲染在此处的内容才能取到数组表单的 Context

一般来说 ArrayAction 将渲染到此处或者 renderItem、renderTop 否则 ArrayAction将不会生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### itemContainer

表单容器组件 如果你要自定义数组表单的外围样式 并且需要获得数组表单的 Context 就可以使用容器组件来处理

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 否 |  |

### children

对于需要动态增减的表单建议使用 `renderItem`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

## FormArrayAction Props

用于实现对数组表单的新增、删除等操作

`FormArrayAction` 需要放在 `FormArray` 的子元素范围内，才能正常工作

这个示例演示了如何使用这个组件

```jsx
import { Space, Header, ScrollView, TopView, Form, FormObject, FormArray, FormArrayAction, Card, Divider, Input, PickerDate, Text, Row } from '@/duxui'

const ArrayItem = ({ value, index, values }) => {
  return <>
    <Card margin verticalPadding={false}>
      <FormItem field={index}>
        <FormObject>
          <DividerGroup>
            <FormItem label='项目' field='name'>
              <Row grow justify='end'>
                <FormArrayAction
                  action={list => {
                    list.splice(index, 1)
                    return list
                  }}
                >
                  <Text>删除</Text>
                </FormArrayAction>
              </Row>
            </FormItem>
            <FormItem label='名称' field='name'>
              <Input placeholder='名称' align='right' grow />
            </FormItem>
            <FormItem label='内容' field='tel'>
              <Input placeholder='内容' align='right' grow />
            </FormItem>
            <FormItem label='生产日期' field='date'>
              <PickerDate placeholder='请选择日期' />
            </FormItem>
          </DividerGroup>
        </FormObject>
      </FormItem>
    </Card>
    {
      index === values?.length - 1 && <FormArrayAction action={list => [...list, {}]}>
        <Card margin>
          <Space row>
            <Text>添加</Text>
          </Space>
        </Card>
      </FormArrayAction>
    }
  </>
}

// 让数组表单有一项默认值
const defaultValues = {
  array: [{}]
}

export default function FormComplexExample() {
  return <TopView>
    <Header title='FormComplex' />
    <Form onSubmit={console.log} defaultValues={defaultValues}>
      <ScrollView>
        <FormItem field='array'>
          <FormArray renderItem={ArrayItem} />
        </FormItem>
        <FormSubmit>提交</FormSubmit>
      </ScrollView>
    </Form>
  </TopView>
}
```

### action

当用户点击action的时候，对这个当前数组的操作，会传入当前的数组，你需要自行决定返回什么样的数据

```jsx
<FormArrayAction
  action={list => {
    list.push('默认值')
    return list
  }}
>
  <Text size={48}>新增</Text>
</FormArrayAction>
```

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### children

子元素 需要是一个就有 onClick 事件的组件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

## 主题配置

`theme.formItem`

### padding

配置item项目默认上下内边距，默认24

### labelWidth

配置label的默认宽度 默认 140
