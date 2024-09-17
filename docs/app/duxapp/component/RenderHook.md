---
sidebar_position: 9
---

# RenderHook 渲染钩子

用于在不同的模块中将元素添加到指定位置

想了解这个库是如何工作的，请先阅读[渲染钩子章节](/docs/course/app/renderHook)

## Render Props

```jsx
<payHook.Render mark='mark' option={{ price }}>
  <Text size={4} bold>需支付：￥{price}</Text>
</payHook.Render>
<payHook.Render mark='mark' option={{ price }}>{Text}</payHook.Render>
<payHook.Render mark='mark' option={{ price }} />
```

### mark

钩子唯一标识

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

### option

要传递给传入组件的 props

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| object | 否 |  |

### max

用于控制此处最多渲染多少个添加的元素 默认不限制

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### children

传入的子元素，可以是一个组件，或者是一个实例化的元素

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component 或 JSX.Element | 否 |  |

## add(mark, ...eles)

添加一个或多个钩子  

可以将组件直接传入，也可以传入渲染后的内容  

需要注意的是只有传入未渲染的组件才能获取到钩子传入的option参数  

默认子元素将会作为children传入注册的组件中

```jsx
payHook.add('mark', props => {
 // props 为注册钩子时传入的option <payHook.Render mark='mark' option={{ name: '名称' }} />

 props.children

 return <Text>{props.name}</Text>
})
payHook.add('mark', <Text>内容</Text>)
```

## addBefore(mark, ...eles)

添加一个或多个钩子 此方法添加的元素将显示在钩子的前面 

## addAfter(mark, ...eles)

添加一个或多个钩子 此方法添加的元素将显示在钩子的后面 

## addContainer(mark, ...eles)

添加一个或多个容器钩子  

这些容器是一个组件，可以套在此标记的外层，并控制这个标记的子元素  

可以添加多个容器进行多层嵌套

```jsx
payHook.addContainer('mark', ({ children }) => {
  return <View className='a'>{children}</View>
})
payHook.addContainer('mark', ({ children }) => {
  return <View className='b'>{children}</View>
})

// 多层嵌套，实际渲染相当于，后添加的在外面
<View className='b'>
  <View className='a'>{children}</View>
</View>
```

## useMark(mark, type)

用钩子的形式获取注册的内容，这样你可以更自由的使用注册的内容，注册内容是也不限定是组件或者元素，可以是任何内容

```jsx
payHook.add('mark', '张三')

const name = payHook.useMark('mark')
// name 张三
```
