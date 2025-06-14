---
sidebar_position: 7
---

# 主题系统

在 2025-06-24 更新之后支持动态主题切换功能，这里为你介绍主题和动态主题切换功能

## 示例
import { Preview } from '@site/src/components/Preview'

<Preview name='Theme' />

## 前言

在之前的版本中已经支持主题功能，在用户配置用，使用模块的 theme 字段配置主题，像下面这样

```js
// configs/config/index.js
option: {
  // 基础模块
  duxapp: {
    theme: {
      primaryColor: '#CDDE00',
      secondaryColor: '#FDD000',
      successColor: '#34a853',
      warningColor: '#fbbc05',
      dangerColor: '#ea4335',
      pageColor: '#fafbf8'
    }
  }
}
```

配置了这些主题参数，会通过一个脚本转化为scss变量被加入到全局scss变量中，就像下面这样

```css
$duxappPrimaryColor: #CDDE00;
$duxappSecondaryColor: #FDD000;
$duxappSuccessColor: #34a853;
$duxappDangerColor: #ea4335;
$duxappWarningColor: #fbbc05;
$duxappPageColor: #fafbf8;
```

然后你就能在任何scss文件中调用这些变量,例如 duxappStyle 的全局scss中调用这些变量，当然也不局限于这个文件，任何的scss都能调用这些变量

```css
// src/duxappStyle/app.scss
.bg-primary {
  background-color: $duxappPrimaryColor;
}

.bg-secondary {
  background-color: $duxappSecondaryColor;
}

.bg-success {
  background-color: $duxappSuccessColor;
}
```

然后在你的项目中就可以调用这些全局类名就能获得对应的样式

```jsx
<View className='bg-primary' />
```

如果要编写 style 的时候获取这些主题参数，可以像下面这样

```js
import { duxappTheme } from '@/duxapp'

<View style={{ backgroundColor: duxappTheme.primaryColor }} />
```

上面是基础模块 duxapp 提供的主题配置，详细主题参数查看 `src/duxapp/config/theme.js`

## 配置自己模块的主题

除了基础模块，其他任意模块都可以配置自己的主题参数

你需要新建两个文件

- src/模块/config/theme.js  
默认主题配置，需要你默认导出一个对象，这个就是你当前的主题

```js
export default {
  priceColor: 'red',
  otherColor: '#666',
  // 其他任意配置
}
```
这个配置你可以在你的其他地方再次导出，方便在js中调用

```js
export { default as 模块Theme } form '@/模块/config/theme'
```

:::info
这个配置文件为啥能直接调用？因为系统会把用户配置文件中的主题配置，合并到你导出的这个对象中，你可以放心调用这个对象，会使用用户配置的值
:::

- src/模块/config/themeToScss.js  
主题转scss脚本文件，默认导出一个函数，传入用户配置中你当前模块的主题配置

```js
// theme 参数是用户配置中的 `option.模块.theme` 字段
// 需要注意的是传入的theme仅仅包含用户配置中的配置，你需要处理用户未配置的情况，给于默认值，这个默认值需要和上面 `theme.js` 里面的默认值一致
// 变量建议命令使用当前模块的名称作为前缀，并且使用驼峰命名
export default theme => {
  return `// ---- 模块主题配置 ----
$模块PriceColor: ${theme.priceColor || 'red'};
$模块OtherColor: ${theme.otherColor || '#fff'};
// ---- 模块主题配置 ----
`
}
```

处理完这些之后，你就能在你的模块以及继承自你这个模块的模块中使用这些变量

:::info
这个样式和模块的继承关系一致，例如duxapp作为基础模块，你可以调用duxapp提供的所有主题变量，一样你的模块提供的主题变量可以在你当前模块和，继承到这个模块的模块中使用，如果没有继承这个模块的模块中使用则会报错
:::

## 升级动态主题

为了减少最小的升级成本，系统未对之前的主题系统进行大改，而是在当前的主题系统模式上进行简单调整就能使用

之前所有的内容在新的主题系统中都是生效的，如果你要切换到动态主题，只需要在用户配置中，配置多套主题即可

- 将当前的模块配置中的 `theme` 移动到 `themes.light` （每个模块的配置都需要同样的操作）
- 在 `themes` 里面新增一个主题配置 `dark`，表示夜间模式的主题 
:::info
- 如果没有指定 `themeConfig.default` light将会作为默认主题，
- 在你配置 `dark` 的主题的时候，如果和默认配置 `light` 相同的配置，你可以不配置，只需要与 `light` 不同的部分即可
:::
- 新增 `themeConfig` 配置项目，参考下面的示例，需要在里面配置主题列表 `themes` (必须配置) 其他三个选项为可选配配置，`dark` 用于指定页面模式主题，`light` 用于指定白天模式主题，`default` 指定默认主题
- 只有当夜间模式和白天模式两个主题都存在的情况下系统才会跟随系统主题进行系统切换
- 除了 `light` `dark` 你还可以配置更多的主题，通过 `theme.setMode(主题)` 切换
```js
const config = {
  option: {
    // 基础模块
    duxapp: {
      themeConfig: {
        themes: {
          light: {
            name: '明亮主题',
            color: '#fff'
          },
          dark: {
            name: '暗黑主题',
            color: '#333'
          }
        },
        // dark: 'dark',
        // light: 'light',
        // default: 'light'
      },
      themes: {
        light: {
          primaryColor: '#E70012',
          secondaryColor: '#0092e8',
          successColor: '#34a853',
          warningColor: '#fbbc05',
          dangerColor: '#ea4335',
          pageColor: '#F7F9FC',

          textColor1: '#373D52',
          textColor2: '#73778E',
          textColor3: '#A1A6B6',
          textColor4: '#FFF',
          header: {
            color: '#fff', // 仅支持rgb hex值，请勿使用纯单词 设置为数组将显示一个渐变按钮
            textColor: '#000', // 文本颜色
            showWechat: true, // 微信公众号是否显示header
            showWap: true, // h5是否显示header
          }
        },
        dark: {
          pageColor: '#1E1E1E',

          whiteColor: '#181818',
          blackColor: '#fff',
          lineColor: '#1F1F1F',

          textColor1: '#FFF',
          textColor2: '#A1A6B6',
          textColor3: '#73778E',
          textColor4: '#373D52',
          header: {
            color: '#121212',
            textColor: '#fff'
          },
          loading: {
            dark: '#fff',
            blank: '#7a7a7a'
          }
        }
      }
    },
    duxui: {
      themes: {
        light: {
          button: {
            radiusType: 'round'
          }
        },
        dark: {
          tabBar: {
            nameColor: '#888',
            nameHoverColor: '#fff'
          }
        }
      }
    }
  }
}

export default config
```

## 动态切换
默认情况下只需要你配置了 `light` 和 `dark` 两个主题，程序就能跟随系统自动切换

如果你需要手动切换就，下面是一动态切换主题的示例代码，参考这个进行开发，`theme` 是基础模块导出的工具

:::info
- 动态切换（包括自动切换）现在仅支持 小程序 H5端，其他平台还在开发中
- 不支持的平台会按照配置的默认主题显示
:::

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