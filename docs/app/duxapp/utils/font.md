---
sidebar_position: 3
---

# 字体

这可以用来自定义字体或者是用在做字体图标

## 示例

这是一个字体图标的示例，通过加载一个在线字体，来显示图标

```jsx
import { Text } from '@tarojs/components'
import { useMemo } from 'react'
import { font, px } from '@/duxapp/utils'
import icons from './icons.json'
import './index.scss'

font.load('CmsIcon', 'https://pictcdn.client.jujiang.me/fonts/CmsIcon.1725175618012.ttf')

export const CmsIcon = ({ name, color, size, style, className, ...props }) => {

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

  const status = font.useFont('CmsIcon')

  if (!icons[name]) {
    return console.log(`CmsIcon的${name}图标不存在`)
  }

  if (!status) {
    return null
  }

  return <Text
    className={`CmsIcon${className ? ' ' + className : ''}`}
    style={_style}
    {...props}
  >
    {String.fromCharCode(icons[name])}
  </Text>
}
```

index.scss
```css
.CmsIcon {
  font-family: CmsIcon;
}
```

icon.json
```json
{
  "signboard": 59346,
  "add-cart": 59207,
  "remind": 59329,
  "tongguan": 59588,
  "CurrencyConverter-fill": 59429,
  "comments-fill": 59549,
  "order_def_fill": 59341,
  "package_box_fill": 59671,
  "package_check_fill": 59689,
  "package_arrow_fill": 59688,
  "package_address_fill": 59687,
  "package_transportation_fill": 59686,
  "op_close_fill": 59675,
  "promot_tips": 59677,
  "help_FAQ": 59691,
  "copy": 59128,
  "editor": 59134,
  "download": 59256,
  "good": 59274,
  "namecard": 59299,
  "map": 59300,
  "QRcode1": 59323,
  "scanning": 59338,
  "service": 59344,
  "set": 59382,
  "store": 59383,
  "creditcard": 59388,
  "good-fill": 59442,
  "map1": 59466,
  "collection": 59523,
  "collection-fill": 59525,
  "add-select": 59554,
  "sami-select": 59556,
  "comments": 59559,
  "navigation_fill": 59533,
  "direction_right": 59058,
  "direction_down": 58880,
  "direction_up": 58882,
  "search": 58883,
  "ashbin": 58884,
  "a-Eyevision": 58885,
  "wechat": 59145,
  "phone-fill": 59158,
  "tabBar_car_fill": 59168,
  "tabbar_home_fill": 59152,
  "tabbar_home_nor": 59169,
  "tabBar_mine_fill": 59176,
  "tabbar_sort_fill": 59181,
  "tabBar_car_nor": 59183,
  "tabbar_sort_nor": 59190,
  "tabBar_mine_nor": 59192,
  "share_02": 59488,
  "sales_center": 59482,
  "share_03": 59324,
  "arrow_double_up": 59658,
  "op_close": 59684,
  "weixin": 58881,
  "zhifubao": 58904,
  "guanbi1": 59115,
  "you2": 59167,
  "qianbao": 59195,
  "yinhangqia": 59360,
  "danxuan-weixuan": 59221,
  "fuhao-zhuangtai-chenggong": 59255,
  "yinlian": 58955,
  "pay-fill": 59031
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

### useFont(name)

钩子函数，返回字体是否加载成功，需要用返回值判断，加载成功再显示用了了这个字体的Text
