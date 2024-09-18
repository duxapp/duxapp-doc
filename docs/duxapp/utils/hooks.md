---
sidebar_position: 7
---

# 常用hook

网络请求的hook文档写在 [请求上传](net) 中

这个文档介绍 `creatGlobalState` `creatContextState` `useDeepObject` 这些hook的用途

## 方法

### creatGlobalState(defaultState)

用于创建全局状态，请参考入门教程[全局状态](/docs/course/started/globalState#全局状态-1)

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| defaultState | any | false |  | 设置这个全局状态的默认值 |

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| useState | () => any | 获取当前值的hook |
| setState | (value: S | ((prevState: S) => S)) => void | 设置值 |

### creatContextState()

用于创建局部全局状态，请参考入门教程[局部全局状态](/docs/course/started/globalState#局部全局状态)

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| useState | () => [any, (value: any \| ((prevState: any) => any)) => void] | 获取当前值的hook，和 React 的 useState一致 |
| Provider | Component | 和React的Context的Provider类似，除了可以传入 defaultValue，还可以传入value属性，用于外部控制 |

局部全局状态默认会创建一个并导出名称为`contextState`


### useDeepObject(obj)

这是用来比较传入的对象前后是否有变化，如果有变化就返回新的对象，否则返回之前的对象

这个比较不是针对内存值的比较，而是深度递归后进行比较

```js
import { useDeepObject } from '@/duxapp'

const data = useDeepObject({
  name: '张三',
  obj: {
    value: '李四'
  }
})

useEffect(() => {
  // 这里只会触发一次
}, [data])
```

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| obj | object | 一个对象 |

:::info
- 需要特别注意的是，如果你传入一个未使用 useCallback 包装的函数，那么这个hook将会失效，一般请不要传入函数，除非你知道你该怎么做
- 对于一些复杂对象，存在循环引用的也不要传入
:::