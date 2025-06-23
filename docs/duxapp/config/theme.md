---
sidebar_position: 1
---

# 主题配置

用户的主题配置在 `option.duxapp.theme` 如果配置了动态主题切换 则配置在 `option.duxapp.themes`,具体使用防范请查看[主题系统](/docs/course/started/theme)

配置duxapp的主题，这里面包含了基础配置和组件配置，组件配置请前往组件查看具体的使用方法

## 默认配置
```js
/**
 * 默认主题配置
 */

export default {
  // General
  primaryColor: '#337ab7', // 主色
  secondaryColor: '#5bc0de', // 辅色
  successColor: '#34a853',
  dangerColor: '#ea4335',
  warningColor: '#fbbc05',

  pageColor: '#fafbf8',
  whiteColor: '#fff',
  blackColor: '#000',
  lineColor: '#f5f5f5',

  //用户自定义颜色1
  customColor1: '#337ab7',
  customColor2: '#337ab7',
  customColor3: '#337ab7',

  // 文本颜色 从暗色到亮色
  textColor1: '#373D52',
  textColor2: '#73778E',
  textColor3: '#A1A6B6',
  textColor4: '#FFF',

  // 文本尺寸 从小到大
  textSize1: 24,
  textSize2: 26,
  textSize3: 28,
  textSize4: 30,
  textSize5: 32,
  textSize6: 34,
  textSize7: 36,

  radius: 16,

  header: {
    color: '#000', // 仅支持rgb hex值，请勿使用纯单词 设置为数组将显示一个渐变按钮
    bgColor: undefined,
    showWechat: false, // 微信公众号是否显示header
    showWap: true, // h5是否显示header
  },

  loading: {
    dark: '#7a7a7a',
    blank: '#fff'
  },

  topView: {
    weappRem: false
  }
}
```

## 全局scss变量

```css
$duxappPrimaryColor: #337ab7;
$duxappSecondaryColor: #5bc0de;
$duxappSuccessColor: #34a853;
$duxappDangerColor: #ea4335;
$duxappWarningColor: #fbbc05;
$duxappPageColor: #fafbf8;

$duxappWhiteColor: #fff;
$duxappBlackColor: #000;
$duxappLineColor: #f5f5f5;

$duxappCustomColor1: #337ab7;
$duxappCustomColor2: #337ab7;
$duxappCustomColor3: #337ab7;

$duxappTextColor1: #373D52;
$duxappTextColor2: #73778E;
$duxappTextColor3: #A1A6B6;
$duxappTextColor4: #FFF;

$duxappTextSize1: 24px;
$duxappTextSize2: 26px;
$duxappTextSize3: 28px;
$duxappTextSize4: 30px;
$duxappTextSize5: 32px;
$duxappTextSize6: 34px;
$duxappTextSize7: 36px;

$duxappRadius: 16px;

// Header组件
$duxappHeaderColor: #fff;
$duxappHeaderTextColor: #000;
```