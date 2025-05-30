---
sidebar_position: 1
---

# Tab 选项卡

选项卡切换，也可以用于表单项使用

### 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Tab' />

```jsx
import { Tab, Header, ScrollView, TopView, GroupList, Card, px } from '@/duxuiExample'
import { Text } from '@tarojs/components'

export default function TabExample() {
  return <TopView>
    <Header title='Tab' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Tab>
            <Tab.Item title='标题1' >
              <Card margin>
                <Text className='text-s5 text-c1'>内容1</Text>
              </Card>
            </Tab.Item>
            <Tab.Item title='标题2' >
              <Card margin>
                <Text className='text-s5 text-c1'>内容2</Text>
              </Card>
            </Tab.Item>
            <Tab.Item title='标题3'  >
              <Card margin>
                <Text className='text-s5 text-c1'>内容3</Text>
              </Card>
            </Tab.Item>
          </Tab>
        </GroupList.Item>
        <GroupList.Item title='滑动切换' desc='开启滑动切换后，需要给 Tab 设置高度，或者开启 justify 属性'>
          <Tab swiper style={{ height: px(400) }}>
            <Tab.Item title='标题1' paneKey={1} >
              <Card margin className='flex-grow'>
                <Text className='text-s5 text-c1'>内容1</Text>
              </Card>
            </Tab.Item>
            <Tab.Item title='标题2' paneKey={2} >
              <Card margin className='flex-grow'>
                <Text className='text-s5 text-c1'>内容2</Text>
              </Card>
            </Tab.Item>
            <Tab.Item title='标题3' paneKey={3} >
              <Card margin className='flex-grow'>
                <Text className='text-s5 text-c1'>内容3</Text>
              </Card>
            </Tab.Item>
          </Tab>
        </GroupList.Item>
        <GroupList.Item title='仅使用导航部分'>
          <Tab>
            <Tab.Item title='标题1' paneKey={1} />
            <Tab.Item title='标题2' paneKey={2} />
            <Tab.Item title='标题3' paneKey={3} />
          </Tab>
        </GroupList.Item>
        <GroupList.Item title='滚动'>
          <Tab scroll>
            <Tab.Item title='标题1' paneKey={1} />
            <Tab.Item title='标题2' paneKey={2} />
            <Tab.Item title='标题3' paneKey={3} />
            <Tab.Item title='标题4' paneKey={4} />
            <Tab.Item title='标题5' paneKey={5} />
            <Tab.Item title='标题6' paneKey={6} />
            <Tab.Item title='标题7' paneKey={7} />
          </Tab>
        </GroupList.Item>
        <GroupList.Item title='按钮样式1'>
          <Tab type='button'>
            <Tab.Item title='标题1' />
            <Tab.Item title='标题2' />
            <Tab.Item title='标题3' badgeProps={{ count: 5 }} />
          </Tab>
        </GroupList.Item>
        <GroupList.Item title='按钮样式2'>
          <Tab type='button' buttonRound>
            <Tab.Item title='标题1' />
            <Tab.Item title='标题2' />
            <Tab.Item title='标题3' />
          </Tab>
        </GroupList.Item>
        <GroupList.Item title='显示红点未读数'>
          <Tab>
            <Tab.Item title='标题1' badgeProps={{ count: 2 }} />
            <Tab.Item title='标题2' badgeProps={{ dot: true }} />
            <Tab.Item title='标题3' badgeProps={{ count: 1, text: '红点' }} />
          </Tab>
        </GroupList.Item>
        <GroupList.Item title='展开更多'>
          <Tab scroll expand type='button' buttonRound>
            <Tab.Item title='标题1' />
            <Tab.Item title='标题2' />
            <Tab.Item title='标题3' />
            <Tab.Item title='标题4' />
            <Tab.Item title='标题5' />
            <Tab.Item title='标题6' />
            <Tab.Item title='标题7' />
          </Tab>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### defaultValue

默认选中的标签页的 key

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| number | 否 |  |

### value

用于控制选中的标签页

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| number | 否 |  |

### onChange

切换选项卡的时候触发的事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string \| number) => void | 否 |  |

### type

设置tab样式

- line 底部线条样式
- button 按钮样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('line', 'button') | 否 | button |

### buttonColor

按钮形式的时候未选中按钮背景颜色 可以指定为page颜色 默认为白色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('page') | 否 |  |

### buttonRound

按钮是否具有圆角

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disabled

是否禁用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### justify

高度撑满容器(flex: 1) 默认不撑起

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### lazyload

设置为`true`时，将不会在组件挂载的时候渲染被隐藏的标签页。

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### scroll

是否可横向滚动

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### expand

在右侧显示展开更多按钮 仅在滚动模式下生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### oneHidden

仅有一个Tab时是否隐藏Tab显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### swiper

是否开启幻灯片滑动功能

开启这个选项你得给 Tab 组件设置高度或者使用其他方法让 Tab 具有高度，否则内容不会显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### swiperProps

开启 `swiper` 后传递给 `Swiper` 的属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [SwiperProps](https://nervjs.github.io/taro-docs/docs/components/viewContainer/swiper#swiperprops) | 否 |  |

### tabStyle

tab的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 | false |

### getItemStyle

用于自定义样式

```jsx

const getItemStyle = useCallback(({ select }) => {
  if (isShop) {
    return {}
  }
  if (select) {
    return {
      line: {
        backgroundColor: '#fff'
      },
      text: {
        color: '#fff'
      }
    }
  } else {
    return {
      text: {
        color: 'rgba(255,255,255,0.7)'
      }
    }
  }
}, [isShop])

<Tab getItemStyle={getItemStyle}> 

</Tab>
```

需要返回的值说明
- line 底部线条样式
- text 文字样式
- container 项目的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(option: { select: boolean }) => { line?: CSSProperties; text?: CSSProperties; container?: CSSProperties }` | 否 |  |


## Tab.Item Props

### title

项目标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### paneKey

项目对应的key 如果不穿入将使用项目索引作为key

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number \| string | 否 |  |

### badgeProps

传入这参数可以给这一项加上红点指示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [BadgeProps](../show/Badge#props) | 否 |  |