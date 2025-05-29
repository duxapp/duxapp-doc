---
sidebar_position: 11
---

# 兼容性

当前是用新版本C-API之后，兼容性大大提升了，下面这些旧版本不兼容的特性，现在基本都兼容了，基本可以放心是用

:::info
2025-05-29 更新到鸿蒙新版本
:::

## 旧版本兼容性

鸿蒙的兼容性其实是比较差的，我在做 UI 库的兼容的时候，有种在吃 shi 的感觉，最谈疼的就是他有用一个非标准的 Flex 布局，总来的来说，也不是没有解决方法，但是这些方法总是看起来不是很简洁、不是很优雅

下面是整理了一些在开发鸿蒙端需要注意的问题

- 布局使用 被默认设置为 `flex` `column` 布局，这和 RN 端保持一致，鸿蒙端也只支持 flex 布局
- 当 flex 的 `alitn-items` 为 `stretch` 或者 `daseline` 时，需要给当前元素指定尺寸，在任何能不用 `alitn-items` 的这两个属性的时候，都不要用这两个属性，使用这两个属性会导致当前元素自动撑开，类似于 `flex: 1` 的效果，且没有办法取消这个设置。如果要使用`stretch`，建议父元素使用 `alitn-items: flex-start`，子元素使用 `align-self: stretch`，这样的形式
- 文本写在 Text 内，不要写在其他元素内
- 不支持 `global` 全局变量，需要移除使用 `global` 的代码，否则会导致报错
- 在使用 `absolute` 定位的时候，不支持同时 `left` 和 `right`、`top` 和 `buttom`，这样元素无法获得尺寸，需要单独指定 `left + width`，`top + height` 这样的形式
- `flex-wrap` 为 `wrap` 时 需要给当前元素指定尺寸，否则当前元素会自动撑开
- `ScrollView` 的子元素，需要设置 className `self-stretch` 用来和其他端保持一致，否则会导致宽度不对
- 不要把一个 `undfined` 赋值给任何一个组件的 `className` ，这样会导致报错
- 字体图标需要放在本地，不支持在线图标
- 如果父组件指定了 className ，子组件也是用了 className 并且子组件将父组件剩余的所有 props 解构赋值到子组件上，那么子组件的 className 将失效，子组件的 props 需要排除 __hmStyle，才能让其生效(似乎只对原生组件有问题，需要继续研究)
- 鸿蒙绝对定位问题，设置百分比宽度不包含padding
- Layout 获取的位置信息中的 buttom 似乎不对
- 给每个子元素都设置上 `flex: 1` 他们并不会平均分布，会受到这个每个子元素的子元素的宽度所影响，和标准不一致，解决办法是给每个子元素的子元素，设置 `width: 100%`
- `alitn-items` 为 `stretch` 时，子元素的宽度或者高度，优先级没有`alitn-items`高，会导致宽度或者高度不生效,因此如果子元素设置了宽高，需要设置 `self-start` 让宽度生效
- 没有宽度或者高度时，单独设置`border`似乎不生效
- style 根据条件切换时，已经被设置的 style。不会被清除，像下面这个，已经设置了 border，切换后 border 仍然还在
```js
select ?
{
borderColor: duxappTheme.primaryColor,
borderWidth: px(6),
height: px(180)
} :
{
height: px(180)
}
```