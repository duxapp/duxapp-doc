---
sidebar_position: 3
---

# 字体

这可以用来自定义字体或者是用在线字体图标

## 示例

这是一个字体图标的示例，通过加载一个在线字体，来显示图标

```jsx
import { Text } from '@tarojs/components'
import { useMemo } from 'react'
import { font, px } from '@/duxapp/utils'
import icons from './icons.json'
import './index.scss'

if (process.env.TARO_ENV === 'rn' || process.env.TARO_ENV === 'harmony_cpp') {
  font.loadLocal('DuxuiIcon', require('./DuxuiIcon.ttf'))
}

export const DuxuiIcon = ({ name, color, size, style, className, ...props }) => {

  const _style = useMemo(() => {
    const sty = { ...style }
    if (color) {
      sty.color = color
    }
    if (size) {
      sty.fontSize = px(size)
    }
    return sty
  }, [color, size, style])

  if (!icons[name]) {
    return console.log(`DuxuiIcon的${name}图标不存在`)
  }

  return <Text
    className={`DuxuiIcon${className ? ' ' + className : ''}`}
    style={_style}
    {...props}
  >
    {String.fromCharCode(icons[name])}
  </Text>
}
```

index.scss
```css
.DuxuiIcon {
  font-family: DuxuiIcon;
}
```

icon.json
```json
{
  "bianji": 58881,
  "wenben": 58937,
  "yidong": 58954,
  "juxing": 58912,
  "tupian": 59578,
  "radio-on": 60010,
  "xian": 58888,
  "banxuanze": 59746,
  "voice-right": 59083,
  "voice-right_01": 59146,
  "voice-right_02": 59147,
  "roundcheckfill": 58966,
  "roundcheck": 58967,
  "backspace": 58930,
  "direction_left": 59061,
  "pengyouquan": 58880,
  "shoucangfill": 59081,
  "weixin": 58887,
  "xiaochengxu": 58942,
  "select": 59123,
  "direction_up-fill": 59057,
  "direction-down_fill": 59059,
  "up-down_fill": 59067,
  "more-horizontal": 59055,
  "add-select": 59554,
  "xuanzekuang": 58957,
  "xuanzhong": 58958,
  "close": 59124,
  "collection": 59523,
  "collection-fill": 59525,
  "direction_right": 59058
}
```

字体图标组件可以通过命令创建 参考 [图标组件管理](/docs/course/started/cli#icon-图标组件管理)

## 方法

### load(name, url)

加载一个网络字体

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| name | string | 是 |  | 字体名称 |
| url | string | 是 |  | 字体链接 |

### loadLocal(name, eassets)

加载一个网络字体（仅RN、鸿蒙端支持）

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| name | string | 是 |  | 字体名称 |
| assets | string | 是 |  | 本地字体路径 |

### useFont(name)

钩子函数，返回字体是否加载成功，需要用返回值判断，加载成功再显示用了这个字体的Text，否则这个字体将不会正确显示
