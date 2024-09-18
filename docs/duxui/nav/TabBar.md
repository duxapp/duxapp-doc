---
sidebar_position: 2
---

# TabBar 底部导航

通常用于app首页的底部导航，要使用这个组件需要通过创建函数创建

:::info
创建的TabBar组件只能创建一个实例，也就是只能在一个地方进行使用  
如果需要在多处使用，请创建多个TabBar
:::

### 示例

```jsx
import { TestIcon, TopView, Header, createTabBar, ScrollView, Text, duxappTheme, confirm } from '@/duxui'
import { useEffect } from 'react'

// 创建 TabBar
const TabBar = createTabBar()

const Home = () => {

  TabBar.useShow(() => {
    console.log('Home显示')
  })

  TabBar.useHide(() => {
    console.log('Home隐藏')
  })

  /**
   * 返回一个是否显示的布尔值
   */
  const show = TabBar.useShowStatus()

  return <>
    <Header title='首页' />
    <ScrollView>
      <Text>首页内容</Text>
    </ScrollView>
  </>
}

const Category = () => {
  return <>
    <Header title='消息' />
    <ScrollView>
      <Text>消息内容</Text>
    </ScrollView>
  </>
}

const User = () => {
  return <>
    <Header title='个人中心' />
    <ScrollView>
      <Text>个人中心内容</Text>
    </ScrollView>
  </>
}

const tabbarList = [
  {
    text: '首页',
    icon: 'shuxing',
    iconHover: 'shuxing',
    comp: Home
  },
  {
    text: '消息',
    icon: 'biaoti',
    iconHover: 'biaoti',
    comp: Category
  },
  {
    text: '个人中心',
    icon: 'canshu',
    iconHover: 'canshu',
    comp: User
  }
]

const TabBarIcon = ({
  hover,
  index
}) => {

  return <TabBar.ItemIcon
    hover={hover}
    name={tabbarList[index].text}
    icon={<TestIcon size={40} color={hover ? duxappTheme.primaryColor : duxappTheme.textColor1} name={tabbarList[index][hover ? 'iconHover' : 'icon']} />}
  />
}

/**
 * Tabbar跳转拦截
 * @returns
 */

TabBar.onSwitchBefore(async ({ index }) => {

  if (index === 2) {
    const status = await confirm({
      title: '跳转拦截',
      content: '点击确定跳转到个人中心,点击取消将不会跳转'
    })
    if (!status) {
      throw '取消跳转'
    }
  }

})

export default function TabBarExample() {

  useEffect(() => {
    setTimeout(() => {
      TabBar.setNumber(1, 10)
      TabBar.setNumber(2, -1)
    }, 500)
  }, [])

  return (
    <TopView isSafe>
      <TabBar>
        {
          tabbarList.map(item => <TabBar.Item key={item.text} component={item.comp} icon={TabBarIcon} />)
        }
      </TabBar>
    </TopView>
  )
}
```

## Props

### onChange

切换时的回调

```jsx
<TabBar onChange={index => console.log(index)}>
</TabBar>
```

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (select: number) => void | 否 |  |

### children

子元素，这里面只能放入 `TabBar.Item` 的实例

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### style

这个样式用于导航栏的容器

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### className

这个样式用于导航栏的容器

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

## 方法

### switch(index)

切换到index页面

| name | 类型 | 说明 |
| ---- | -------- | ------- |
| index | number | 要切换到的index |

### setNumber(index, number)

设置某某个项目的红点数

- 当设置的值大于0将显示设置的数值，
- 当设置的数字小于0，将显示一个红点
- 当设置的数字等于0将不显示

| name | 类型 | 说明 |
| ---- | -------- | ------- |
| index | number | 要切换到的index |
| number | number | 红点数量 |

### onSwitchBefore(callback)

监听切换，返回一个Promise，如果排除错误，将会停止跳转

你可以用这个特性来处理登录、或者点击某个项目时跳转到其他页面，而不需要给这个页面定义 `component`

### onSwitchAfter(callback)

监听切换成功

| name | 类型 | 说明 |
| ---- | -------- | ------- |
| callback | `({ index: number }) => void` | 回调函数 |

### useShow(callback)

展示出来的hook，这个hook需要在每个项目组件中使用，用来判断当前组件是是否展示出来

切换到该页面或者从下一个页面返回时，当前页面是激活状态就会触发

| name | 类型 | 说明 |
| ---- | -------- | ------- |
| callback | `() => void` | 回调函数 |

### useHide(callback)

隐藏的hook，这个hook需要在每个项目组件中使用，用来判断当前组件是否被隐藏

从当前项目切换到其他项目，或者当前项目激活时，跳转到其他页面就会触发

| name | 类型 | 说明 |
| ---- | -------- | ------- |
| callback | `() => void` | 回调函数 |

### useShowStatus()

返回一个当前页面显示还是隐藏的状态值，这个值可以用在其他hook中进行使用

## TabBar.Item Props

TabBar的项目组件，仅能用在TabBar组件中

### component

TabBar的组件，需要传入一个未实例化的组件，用来作为当前导航的页面内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 否 |  |

### name

当前项的名称，可以传入为空，用icon属性自定义显示内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### icon

传入一个为实例化的组件，用来自定义显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| Component | 否 |  |

传入该组件Props
| name | 类型 | 说明 |
| ---- | -------- | ------- |
| hover | boolean | 当前项目是否选中 |
| index | number | 当前项目的index |

## TabBar.ItemIcon Props

这是内置的用于创建导航菜单的组件

### hover

当前项目是否选中

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 是 |  |

### name

当前项目的名称，可以不传入，让只显示图标

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### image

未选中时候的图片

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### imageHover

选中时候的图片

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### icon

自定义图片的显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |
