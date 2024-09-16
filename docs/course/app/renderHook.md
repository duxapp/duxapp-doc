---
sidebar_position: 6
---

# 渲染钩子

在模块化设计中，很多模块是通用的，那么一些通用模块设计的功能，他不可能完全符合所有项目的需求，例如 `duxcmsMall` 这个是商品模块，里面有商品详情，商品列表、分类、快速购买等功能  

例如商品详情中，底部有购物车按钮，但是在我当前的项目中，我还需要在购物车的旁边加一个客服按钮，这种情况就可以使用渲染钩子来完成

底部导航条的代码如下，`<mallHook.Render mark='detail.footer.btn'>` 这就是用来定义钩子位置的
```jsx
const Footer = () => {

  return <>
    <Divider padding={0} />
    <Row items='center' className='bg-white p-1 gap-4'>
      <Row className='gap-3' items='center'>
        <mallHook.Render mark='detail.footer.btn'>{FooterCart}</mallHook.Render>
      </Row>
      <Row className='gap-2' justify='end' grow style={{ marginLeft: px(56) }}>
        <mallHook.Render mark='detail.footer.cart'>
          <GoodsSpec.Button type='cart'>
            <Button type='secondary' size='l' radiusType='round'>加入购物车</Button>
          </GoodsSpec.Button>
        </mallHook.Render>
        <mallHook.Render mark='detail.footer.buy'>
          <GoodsSpec.Button type='buy'>
            <Button type='primary' size='l' radiusType='round'>立即购买</Button>
          </GoodsSpec.Button>
        </mallHook.Render>
      </Row>
    </Row>
  </>
}
```

那么，需要在我当前的项目中使用这个钩子，像下面这样，将客服按钮添加在购物车的右边

```jsx
mallHook.addAfter('detail.footer.btn', () => {
  return <Column items='center'
    onClick={toCustom}
  >
    <CmsIcon name='service' size={54} style={{ lineHeight: px(54) }} />
    <Text color={2} size={1}>客服</Text>
  </Column>
})
```

下面将详细讲解如何使用渲染钩子

## 钩子创建

在使用钩子之前需要先创建一个钩子，像这个商城的钩子，创建在 `src/duxcmsMall/utils/index.js`，并导出

```jsx
import { RenderHook } from '@/duxapp'

export const mallHook = new RenderHook()
```

## 使用

### 基本用法
```jsx
<mallHook.Render mark='mark' />
```
然后使用这个定义的钩子
```jsx
mallHook.add('mark', () => {
  return <Text>自定义插入的内容</Text>
})
```

### 传入参数

```jsx
<mallHook.Render mark='mark' option={{ name: '张三' }} />
```
参数会传入组件的props中
```jsx
mallHook.add('mark', ({ name }) => {
  return <Text>自定义插入的内容 {name}</Text>
})
```

### 使用children

定义的时候可以在组件中使用子内容，如果没有使用到这个定义，这个子内容将作为默认内容显示
```jsx
<mallHook.Render mark='mark'>
  <Text>这是默认内容</Text>
</mallHook.Render>
```
子内容将作为children传入定义组件，可以判断显示子内容还是自定义内容，还是都显示，或者你还可以继续使用`React.cloneElement`处理这个子内容
```jsx
mallHook.add('mark', ({ children }) => {

  if (xxx) {
    return children
  }

  return <Text>自定义插入的内容</Text>
})
```

### 插入位置

```jsx
<mallHook.Render mark='mark'>
  <Text>这是默认内容</Text>
</mallHook.Render>
```

可以自定义插入到定位内容的前面还是后面

```jsx
mallHook.addBefore('mark', () => {、
  return <Text>添加到默认内容之前</Text>
})
mallHook.add('mark', () => {、
  return <Text>替换默认内容</Text>
})
mallHook.addAfter('mark', () => {、
  return <Text>添加到默认内容之后</Text>
})
```

### 多个插入

同一个方法可以多次调用，插入过个内容，当你在不同的模块内都需要插入内容时，可以这样使用

```jsx
mallHook.addBefore('mark', () => {、
  return <Text>项目1</Text>
})
mallHook.addBefore('mark', () => {、
  return <Text>项目2</Text>
})
```