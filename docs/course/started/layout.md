---
sidebar_position: 7
---

# 样式布局

在duxapp中写样式为了兼容React Native，我们需要采取flex的布局方式，因此，为了和RN端获得一致的布局方式，默认会给小程序和h5的标签赋予默认样式，像下面这样  

对于h5：
```css
taro-view-core {
  display: flex;
  flex-direction: column;
  position: relative;
  border-style: solid;
  border-width: 0;
}
input,
textarea,
taro-view-core {
  box-sizing: border-box;
}
```

对于小程序：
```css
view {
  display: flex;
  flex-direction: column;
  position: relative;
  border-style: solid;
  border-width: 0;
}
input,
textarea,
view {
  box-sizing: border-box;
}
```

- 在RN上 `display` 仅支持 `flex` 和 `none`
- 在RN上 `position` 支持 `relative` 和 `absolute`
- 在新版本的RN上开启新架构之后 `position` 也支持 `static`，但是他不是默认选项，所以，position的默认值还是会被设置为relative
- RN上模型盒仅支持 `border-box`

## 样式编写规则

因为RN不存在选择器这一说法，因此在编写scss文件的时候，仅支持单一的class功能

```css
/* 支持  */
.name {}

/* 下面的都不支持  */
.button.button_theme_islands {
  font-style: bold;
}

img + p {
  font-style: bold;
}

p ~ span {
  color: red;
}

div > span {
  background-color: DodgerBlue;
}

div span {
  background-color: DodgerBlue;
}
```

为了实现兼容RN的支持，需要使用BEM的规范书写样式，像下面这样

```jsx
<View className="block">
  <Text className="block__elem">文本</Text>
</View>
```

```css
.block: {
  background-color: DodgerBlue;
  &__elem {
    color: yellow;
  }
}
```
这样的方式编写，如果内容过多会导致你的className过长，且修改奇特也特别的费劲，更推荐使用下面的全局样式方式进行页面布局

## 使用全局样式布局

模块的 [app.scss](/docs/course/app/directory#appscss) 提供了编写全局样式的地方，我们在基础模块(duxapp)的全面样式中导出了很多对于布局使用的全局样式，你可以在这个文档末尾查询到，用这些全局样式书写起来就类似于[`tailwindcss`](https://www.tailwindcss.cn/)一样

```jsx
import { View, Text } from '@tarojs/components'

export const Test = () => {
  return <View className='m-3 r-2 bg-white p-3 gap-3'>
    <Text className='text-c1 text-s3 bold'>这是标题</Text>
    <Text className='text-c3 text-s1 bold'>这是描述</Text>
  </View>
}
```

就像这个示例一样，因为用bem编写本身className就会很长，我用差不多的长度就实现了样式布局，还省去了编写样式，且在修改的时候也不需要去修改对应的scss的内容，这样写起来也是非常的方便  

全局样式中很多样式都是和[主题](/docs/course/app/theme)相结合的，例如文字文字、背景颜色、边框颜色，字号等，可以在本文默认查看到  

:::info
为何获得更好的编辑体验，需要在vscode中安装 [`SCSS Everywhere`](https://marketplace.visualstudio.com/items?itemName=gencer.html-slim-scss-css-class-completion) 插件，他能识别到全局样式并给出编写提示
:::

当然全局样式并不能覆盖所有的场景，你可以结合其他方案来完善：
- 在自己的模块使用全局样式完善
- 继续写scss
- 写style补全不支持的样式

这里演示下使用style完善，大部分不支持的样式基本都和尺寸相关，例如 `width` `height` 等，样式里面没办法定义的尺寸完全能满足要求，就可以使用style补全

```jsx
import { View, Text } from '@tarojs/components'
import { px } from '@/duxapp'

export const Test = () => {
  return <View className='m-3 r-2 bg-white p-3 gap-3'>
    <Text className='text-c1 text-s3 bold'>这是标题</Text>
    <Text className='text-c3 text-s1 bold'>这是描述</Text>
    <Image className='w-full' style={{ height: px(240) }} />
  </View>
}
```

:::info
px方法是 Taro.pxTransform 的简写，为了看起来更简洁一些，并且做了一些处理
:::

## 使用duxui

使用样式编辑页面还是会很麻烦，要写很多的样式，那么可以在结合使用duxui模块提供的大量ui库，还能将写代码的速度提升一个层次  

前往下一章节查看 [duxui](duxui)

## 附：duxapp的全局样式

```css

/*  #ifdef weapp  */
.button-clean {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: initial;
  margin-right: initial;
  padding-left: initial;
  padding-right: initial;
  line-height: initial;
  font-size: initial;
  background-color: initial;
  border: initial;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 0;
  -webkit-tap-highlight-color: transparent;
  color: transparent;

  &::after {
    border: none;
  }
}

/*  #endif  */

.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

/* overflow */
.overflow-hidden {
  overflow: hidden;
}

/* 定位 */
.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

.bottom-0 {
  bottom: 0;
}

.left-0 {
  left: 0;
}

/* z-index */

.z-0 {
  z-index: 0;
}

.z-1 {
  z-index: 1;
}

.z-2 {
  z-index: 2;
}

/* flex */
.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}

.flex-grow {
  flex: 1;
}

.flex-shrink {
  flex-shrink: 0;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.content-center {
  align-content: center;
}

.content-start {
  align-content: flex-start;
}

.content-end {
  align-content: flex-end;
}

.content-between {
  align-content: space-between;
}

.content-around {
  align-content: space-around;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-stretch {
  align-self: stretch;
}

.self-baseline {
  align-self: baseline;
}

/* size */
.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.w-0 {
  width: 0;
}

.h-0 {
  height: 0;
}

/* 斜体 */
.italic {
  font-style: italic;
}

/* 加粗 */
.bold {
  font-weight: bold;
}

/* 文本对齐 */
.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-justify {
  text-align: justify;
}

/* 文本颜色 */
.text-transparent {
  color: transparent;
}

.text-black {
  color: #000;
}

.text-white {
  color: #fff;
}

.text-c1 {
  color: $duxappTextColor1;
}

.text-c2 {
  color: $duxappTextColor2;
}

.text-c3 {
  color: $duxappTextColor3;
}

.text-c4 {
  color: $duxappTextColor4;
}

.text-primary {
  color: $duxappPrimaryColor;
}

.text-secondary {
  color: $duxappSecondaryColor;
}

.text-success {
  color: $duxappSuccessColor;
}

.text-danger {
  color: $duxappDangerColor;
}

.text-warning {
  color: $duxappWarningColor;
}

// 文本尺寸
.text-s1 {
  font-size: $duxappTextSize1;
}

.text-s2 {
  font-size: $duxappTextSize2;
}

.text-s3 {
  font-size: $duxappTextSize3;
}

.text-s4 {
  font-size: $duxappTextSize4;
}

.text-s5 {
  font-size: $duxappTextSize5;
}

.text-s6 {
  font-size: $duxappTextSize6;
}

.text-s7 {
  font-size: $duxappTextSize7;
}

/* 文本装饰 */
.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}

/* 文本转换 */
.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;
}

/* 边框颜色 */
.border-black {
  border-color: #000;
}

.border-white {
  border-color: #fff;
}

.border-primary {
  border-color: $duxappPrimaryColor;
}

.border-secondary {
  border-color: $duxappSecondaryColor;
}

.border-success {
  border-color: $duxappSuccessColor;
}

.border-danger {
  border-color: $duxappDangerColor;
}

.border-warning {
  border-color: $duxappWarningColor;
}

// 边框宽度
.border-w1 {
  border-width: 2px;
}

/* 边框样式 */
.border-dotted {
  border-style: dotted;
}

.border-dashed {
  border-style: dashed;
}

// 内边距
.p-1 {
  padding: 8px;
}

.p-2 {
  padding: 16px;
}

.p-3 {
  padding: 24px;
}

.pv-1 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.pv-2 {
  padding-top: 16px;
  padding-bottom: 16px;
}

.pv-3 {
  padding-top: 24px;
  padding-bottom: 24px;
}

.ph-1 {
  padding-left: 8px;
  padding-right: 8px;
}

.ph-2 {
  padding-left: 16px;
  padding-right: 16px;
}

.ph-3 {
  padding-left: 24px;
  padding-right: 24px;
}

// 外边距
.m-1 {
  margin: 8px;
}

.m-2 {
  margin: 16px;
}

.m-3 {
  margin: 24px;
}

.mv-1 {
  margin-top: 8px;
  margin-bottom: 8px;
}

.mv-2 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.mv-3 {
  margin-top: 24px;
  margin-bottom: 24px;
}

.mt-1 {
  margin-top: 8px;
}

.mt-2 {
  margin-top: 16px;
}

.mt-3 {
  margin-top: 24px;
}

.mt-3 {
  margin-top: 32px;
}

.mh-1 {
  margin-left: 8px;
  margin-right: 8px;
}

.mh-2 {
  margin-left: 16px;
  margin-right: 16px;
}

.mh-3 {
  margin-left: 24px;
  margin-right: 24px;
}

// 圆角
.r-1 {
  border-radius: 8px;
}

.r-2 {
  border-radius: 16px;
}

.r-3 {
  border-radius: 24px;
}

.r-max {
  border-radius: 750px;
}

.rt-1 {
  border-radius: 8px 8px 0 0;
}

.rt-2 {
  border-radius: 16px 16px 0 0;
}

.rt-3 {
  border-radius: 24px 24px 0 0;
}

.rb-1 {
  border-radius: 0 0 8px 8px;
}

.rb-2 {
  border-radius: 0 0 16px 16px;
}

.rb-3 {
  border-radius: 0 0 24px 24px;
}

// 间距
.gap-1 {
  gap: 8px;
}

.gap-2 {
  gap: 16px;
}

.gap-3 {
  gap: 24px;
}

.gap-4 {
  gap: 32px;
}

// 背景
.bg-white {
  background-color: white;
}

.bg-primary {
  background-color: $duxappPrimaryColor;
}

.bg-secondary {
  background-color: $duxappSecondaryColor;
}

.bg-success {
  background-color: $duxappSuccessColor;
}

.bg-danger {
  background-color: $duxappDangerColor;
}

.bg-warning {
  background-color: $duxappWarningColor;
}

.bg-page {
  background-color: $duxappPageColor;
}

// 其他
.square {
  aspect-ratio: 1;
}

```