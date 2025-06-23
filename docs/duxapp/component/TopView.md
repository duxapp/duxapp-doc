---
sidebar_position: 1
---

# TopView 顶层容器

TopView是作为页面的根组件使用的，在duxapp中，每个页面都需要存在这个组件，他用来实现duxapp的多项功能，例如

- 路由跳转 和 返回数据
- PullView 组件内容全局弹出
- Modal 组件内容全局弹出
- loading 加载中
- Absolute 渲染到全局
- wechat 分享功能
- Agreement RN启动用户协议

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='TopView' />

在duxapp中有个示例页面，他常用的用法是作为高阶函数封装页面，并且导出

```jsx
import { Header, ScrollView, TopView, GroupList, Text, Button, Column, confirm, toast } from '@/duxuiExample'

export default TopView.page(function TopViewExample() {
  return <>
    <Header title='TopView' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='顶层容器' desc='TopView组件需要放在每个页面的最外层，一些路由功能依赖于此组件，如果不放在页面上，某些路由功能会异常。PullView、Absolute、Modal等组件是使用此特性封装的'>
        </GroupList.Item>
        <GroupList.Item title='添加元素' desc='TopView提供了静态方法，可以将一下元素转发到TopView子下一级，利用此特性可以再元素内部做全局弹出之类的操作'>
          <Button type='primary'
            onClick={() => {
              const action = TopView.add(<Column items='center' className='p-3'>
                <Text type='success'>添加成功</Text>
                <Text>可以利用元素检查器，看看此元素的实际渲染位置</Text>
                <Button onClick={() => action.remove()} type='danger'>移除此元素</Button>
              </Column>)
            }}
          >点击在顶层弹出元素</Button>
        </GroupList.Item>
        <GroupList.Item title='添加浮层' desc='TopView增加绝对定位，使元素浮动'>
          <Button type='primary'
            onClick={() => {
              const action = TopView.add(<Column className='absolute inset-0' items='center' justify='center' style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <Column className='p-3 bg-white items-center'>
                  <Text type='success'>添加成功</Text>
                  <Text>可以利用元素检查器，看看此元素的实际渲染位置</Text>
                  <Button onClick={() => action.remove()} type='danger'>移除此元素</Button>
                </Column>
              </Column>)
            }}
          >点击在顶层弹出元素</Button>
        </GroupList.Item>
        <GroupList.Item title='添加浮层' desc='TopView.add方法可以在任意的地方使用，不局限于组件内，利用此特性，可以封装一些带界面的函数供调用'>
          <Button type='primary'
            onClick={async () => {
              const status = await confirm({
                content: 'confirm函数是一个用TopView.add方法封装的确认框'
              })
              toast(status ? '点击了确认' : '点击了取消')
            }}
          >点击测试</Button>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </>
})
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### isSafe

是否显示安全区域，对于有下巴的机型，可以控制内容不显示在该区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### isForm

是否是表单页面，如果是表单页面，建议开启这个选项

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## 方法

### page(comp, option)

高阶函数，用于创建页面的高阶组件，在上面的示例中有演示过，传入的option参数和组件本身的Props完全相同

:::info
你应该一直使用 TopView.page() 包裹你的页面组件，就像上面的示例一样，这样，你的所有依赖TopView实现的功能都不会有问题
:::

### add(el, option)

向顶层容器添加元素，PullView、Modal等组件都是使用这个方案来实现的


```jsx
import { TopView } from '@/duxapp'

const { update, remove } = TopView.add(<Text>添加的内容</Text>)

update(<Text>更换添加的内容</Text>) // 更新内容

remove() // 移除内容

```

传的el也可以是一个未实例化的组件，像下面这样用数组作为参数传入，数组的第二项将作为组件实例化的props

```jsx
const Comp = ({ onSubmit }) => {
  return <Button onClick={onSubmit}>提交</Button>
}

const { remove } = TopView.add([
  Comp,
  {
    onSubmit: () => remove()
  }
])
```

这是一种常用的用法，用来将全局弹窗封装成Promise的方式进行调用

```jsx
import { Card, CardTitle, Column, Form, FormItem, FormSubmit, PullView, Row, Text, TopView, UploadImages, loading, toast } from '@/duxui'
import { useCallback, useRef } from 'react'
import { request } from '@/chiananke'

export const LedgerSubmit = ({ onClose, onSubmit, id }) => {

  const pullView = useRef()

  const submit = useCallback(async data => {
    if (!data.images?.length) {
      return toast('请上传图片')
    }
    await request({
      url: `safe/risksCorrect/${id}`,
      data,
      method: 'PUT',
      loading,
      toast: true
    })
    onSubmit()
  }, [id, onSubmit])

  return <PullView ref={pullView} onClose={onClose}>
    <Form onSubmit={submit}>
      <Column className='rt-3 p-3 gap-3 bg-white'>
        <Row items='center' justify='between'>
          <Text color={3} onClick={() => pullView.current.close()}>取消</Text>
          <Text bold>整改照片</Text>
          <FormSubmit>
            <Text>确认</Text>
          </FormSubmit>
        </Row>
        <CardTitle className='mt-3'>上传附件</CardTitle>
        <FormItem field='images'>
          <UploadImages />
        </FormItem>
        <Column className='mt-3 pv-3' />
      </Column>
    </Form>
  </PullView>
}

LedgerSubmit.show = id => {
  return new Promise((resolve, reject) => {
    const { remove } = TopView.add([
      LedgerSubmit,
      {
        id,
        onSubmit: () => {
          remove()
          resolve()
        },
        onClose: () => {
          remove()
          reject()
        }
      }
    ])
  })
}
```

option参数

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| group | string | 否 |  | 分组 同一个分组内的弹窗 将会以队列的形式显示 也就是他会一个一个的展示，等上一个被移除时，才会显示下一个 |
| page | number | 否 |  | 标识，通常不需要指定 默认添加到当前页面 |

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| update(el) | (el: Element) => void | 用于更新元素 |
| remove() | () => void | 用于移除元素 |
| key | number | 当前添加元素的标识 |

### removeAll()

用于移除所有通过add()添加的内容，仅限当前页面

### addContainer(comp, props)

添加一个容器，容器可以控制页面是否显示，以及重写子元素，例如我们要给所有的页面添加一个背景图，那么就可以像下面这样

```jsx
TopView.addContainer(({ children }) => {
  return <>
    <Image src={bg} className='absolute left-0 top-0 w-full' style={{ height: px(1280) }} />
    {children}
  </>
})
```

参数说明

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| comp | Component | 是 |  | 传入一个组件 |
| props | object | 否 |  | 传给这个组件的props |


### HOC(comp, option)

:::danger Deprecated
此方法已弃用，使用 [`page()`](#pagecomp-option) 替代。
:::

## 主题配置

### weappRem

配置 `topView.weappRem`

这个配置用于在小程序端开启使用rem单位的使用，可以用来更好的兼容pc端小程序，需要使用这个功能，需要配置Taro，将 `targetUnit` 切换为 `rem`

在模块中使用 [`taro.config.js`](/docs/course/app/directory#taroconfigjs) 创建这样的内容

```js
module.exports = {
  mini: {
    postcss: {
      pxtransform: {
        config: {
          targetUnit: 'rem'
        }
      }
    }
  }
}

```

同时需要在每个页面中配置 `enablePageMeta: true`，这个问题等待Taro处理，应该要能全局配置开启这个属性    

weappRem默认未开启，可以传入true开启，或者可传入一个对象用于配置参数  

配置参数说明

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| maxSize | number | 否 | 16 | 最小fontSize |
| minSize | number | 否 | 28 | 最大fontSize |