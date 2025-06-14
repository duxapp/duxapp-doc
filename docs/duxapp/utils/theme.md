---
sidebar_position: 6
---

# 主题工具

2025-06-14 新增工具，用于管理动态主题切换

主题和动态主题的使用，参考[基础教程](/docs/course/started/theme)

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Theme' />

手动或者自动切换主题

```jsx
import { Header, ScrollView, TopView, GroupList, theme, Button } from '@/duxuiExample'

export default function ThemeExample() {

  const mode = theme.useMode(true)

  const modes = theme.useModes()

  return <TopView>
    <Header title='Theme' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='主题切换功能' desc='主题切换当前仅支持小程序和H5端，其他端还在努力开发中'
          className='gap-3'
        >
          {
            modes.map(item => <Button
              type='primary'
              plain={item.mode !== mode}
              key={item.name}
              onClick={() => item.switch()}
              size='l'
            >{item.name}</Button>)
          }
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## 方法

### useModes()

获取当前可用的主题列表，如果可以自动切换，其中第一个就是跟随系统选项，后面紧跟着用户配置的主题列表

返回数组项目参数包含 name mode switch() 和用户配置 `option.duxapp.themeConfig.themes` 里面配置的其他参数

你可以直接调用项目的 switch() 切换到当前主题

### useMode(saveMode)

获取当前使用的主题

如果 saveMode 传入true是获取当前保存的主题，如果是跟随系统的话会返回 `null`，如果不传这个参数，会返回实际正在使用的主题

### setMode(mode)

切换主题 如果传入 `null` 则是切换为跟随系统 或者 自动选择

### useTheme(app)

在某些情况下你直接调用主题，在切换主题的时候不会生效，就需要使用这个hook获取主题

如果传入模块，则返回指定模块的主题

```jsx
const duxappTheme = useTheme('duxapp')

duxappTheme.primaryColor
```