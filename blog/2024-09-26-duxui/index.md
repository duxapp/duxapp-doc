---
slug: duxui
title: duxui：基于Taro，兼容小程序、H5、RN的多端UI库
description: 使用UI库提供的多端统一组件，来快速完成项目
authors: [duxapp]
tags: [duxapp, duxui]
---

duxui是duxapp官方开发的一款兼容多端的UI组件库，兼容小程序、H5、React Native，库中提供了60+的组件，覆盖大部分使用场景

它能帮助你通过统一的组件样式，快速完成多端应用的开发，包括React Native端的APP开发

duxui已经被我用于很多项目中，其中包含APP的项目就开发了几十个了，你可以通过这个链接去查看或者体验这些APP，[https://app.share.dux.plus/](https://app.share.dux.plus/)，这里只包含了其中一部分，其中一些APP可能因为停止运营，无法正常浏览

## 示例

如果你想看到这些组件的展示效果，请根据不同的端进行查看

- 小程序  
  ![小程序](./images/weapp.jpg)
- APP [https://app.share.dux.plus/com.duxapp.duxui](https://app.share.dux.plus/com.duxapp.duxui)
- H5 [https://duxui.duxapp.cn](https://duxui.duxapp.cn)

如果你想通过项目来查看这些组件的运行效果或者组件源码，使用下面这个命令创建一个UI库的示例代码

```bash
npx duxapp-cli create projectName duxuiExample
```

其中的 `projectName` 是要创建的项目名称，创建之后根命令行据提示进行下一步操作

## 使用

这是duxapp的一个模块，需要在duxapp中使用才能使用这个模块，UI库的文档请查看[https://duxapp.cn/docs/duxui/start](https://duxapp.cn/docs/duxui/start)

如果你还没有这个模块，需要先安装duxui模块，如果你还不知道什么是[duxapp框架](https://duxapp.cn/)，请先查看[这篇文章](https://duxapp.cn/blog/intro)了解

```bash
yarn duxapp app add duxui
```

安装之后在你的模块中导入即可使用，像下面这样

```jsx
import { Column, Header, Image, px, Row, ScrollView, Tab, Text, TopView } from '@/duxui'
import { GridIcon } from '@/gridOperator'

export default function LedgerDetail() {
  return <TopView>
    <Header title='企业台账详情' />
    <ScrollView>
      <Row className='mt-3 mh-3 bg-white r-1 p-3 gap-3 items-start'>
        <Image style={{ width: px(80) }} square />
        <Column grow className='mt-1 gap-1'>
          <Text numberOfLines={1}>鄂尔多斯市九工建筑有限责任公司</Text>
          <Text className='mt-1' size={18} color={2}>联系人：小阿呆 | 联系电话：010-4521-8652</Text>
          <Text size={18} color={2}>所属网格片区：<Text type='primary'>轻纺织产业园</Text>    历史问题：<Text type='danger'>12个</Text></Text>
        </Column>
        <GridIcon className='self-center text-primary' size={56} name='biaoqianlanbodianhua' />
      </Row>
      <Column className='mt-3'>
        <Tab>
          {
            tabs.map(item => <Tab.Item key={item.value} title={item.name} paneKey={item.value} />)
          }
        </Tab>
      </Column>
      <Column className='mt-3 mh-3 bg-white r-1 p-3'>
        <Text size={1} style={{ lineHeight: px(42) }}>公司是适应市场经济社会化大生产的需要而形成的一种企业组织形式。中国的公司是指依照《中华人民共和国公司法》在中国境内设立的以营利为目的社团法人，包括有限责任公司和股份有限公司。 指企业的组织形式。以营利为目的的社团法人。在资本主义社会获得高度发展。我国在建国后对私营公司进行了社会主义改造。国营工、商、建筑、运输等部门中实行独立经济核算的经营管理组织和某些城市中按行业划分的专业管理机构，也通称公司。随着我国经济体制的改革，享有法人资格的各种公司纷纷设立，按章程从事自身的生产经营活动。 指企业的组织形式。以营利为目的的社团法人。在资本主义社会获得高度发展。我国在建国后对私营公司进行了社会主义改造。国营工、商、建筑、运输等部门中实行独立经济核算的经营管理组织和某些城市中按行业划分的专业管理机构，也通称公司。随着我国经济体制的改革，享有法人资格的各种公司纷纷设立，按章程从事自身的生产经营活动。 折叠</Text>
      </Column>
    </ScrollView>
  </TopView>
}

const tabs = [
  { name: '基本信息', value: 0 },
  { name: '上报工单', value: 1 },
  { name: '历史问题', value: 2 }
]
```

## 组件库

下面我来介绍一下这些组件和组件的功能

### TopView 顶层容器

TopView是作为页面的根组件使用的，在duxapp中，每个页面都需要存在这个组件，他用来实现duxapp的多项功能

### Header 头部导航

duxapp默认将头部设置为了自定义，每个页面面建议都使用一个头部组件作为标题的显示，且Header组件会控制状态栏颜色显示、H5页面标题显示

### ScrollView 滚动容器

这是对Taro ScrollView的封装，实现了多个端的下拉刷新功能，ScrollView仅支持垂直滚动，需要横向滚动使用 ScrollView.Horizontal

### PullView 弹窗

可以从上下左右4个方向弹出内容

### Loading 加载动画

用于展示loading动画，类似于ios那样的菊花

### Absolute 绝对定位

放在这个组件内的子元素，会被渲染在最外层，这是用TopView.add方法实现的

### List 分页列表

当你的列表接口采用 page 进行分页时，可以用这个组件快速实现列表页面，这个组件有用以下特性

- 下拉刷新
- 自动分页
- 空组件展示
- 自定义头部底部渲染
- RN端使用 @shopify/flash-list 实现，拥有更好的性能
- 多列支持

### Layout 布局计算

用来计算Layout所在的组件的位置、尺寸信息

### ActionSheet 弹出菜单

封装弹出菜单功能

### Button 按钮

按钮组件

### Cell 单元格

单元格组件用来展示竖向的菜单列表，默认拥有阴影属性

### LinearGradient 线性渐变

因为RN不支持通过css编写渐变，所以写了这个组件用于实现渐变功能

### BoxShadow 阴影

由于RN 安卓端对阴影的支持不太完善，使用这个组件可以实现阴影效果

### Column flex竖向

这是用于快速竖向布局的组件

### Row flex横向

这是用于快速横向布局的组件

### Space 间距

用于控制子元素的间距，通过 gap 实现，建议直接使用全局样式的 gap

### Divider 分割线

使用边框实现的分割线

### Grid 宫格

用于实现9宫格这样的布局方式

### Card 卡片

卡片布局，带有外边距，内边距、圆角、阴影的组件

### Tab 选项卡

选项卡切换，也可以用于表单项使用

### TabBar 底部导航

通常用于app首页的底部导航，要使用这个组件需要通过创建函数创建

### Elevator 电梯楼层

例如城市选择，可以通过城市名称首字母进行导航，快速选择到需要的城市，就可以用这个组件

### Menu 下拉菜单

下拉菜单，常见用于一些表单的筛选

### Form 表单

封装了表单组件，能快速完成表单的布局、表单验证、复杂对象表单

表单包含了一系列的组件或者方法，包括下面这些

- Form 表单
- Form.Item 表单项
- Form.Submit 表单提交
- Form.Reset 表单重置
- Form.Object 对象表单
- Form.Array 数组表单
- Form.ArrayAction 数组表单操作管理
- Form.useFormContext 获取表单上下文
- Form.useFormItemProxy 给表单代理值和事件

### Input 输入框

对Taro Input的封装，新增了一些属性，基本不带样式，需要自行编写样式

### Textarea 多行文本

对Taro Textarea的封装，新增了一些属性

### Picker 选择器

选择器包含了单列选择器和多列选择器

### PickerDate 日期选择

用于日期时间的选择

### Radio 单选

单选组件

### Checkbox 多选

多选组件

### Switch 开关

开关组件

### Calendar 日历

为兼容多端，所以编写的日历组件，支持日、周、范围选择，支持多种自定义日历的方式

### Grade 评分

评分组件

### Cascade 级联选择

一个功能丰富的级联选择器，支持单选、多选，支持多级选择、单级选择，等更多功能

### CardSelect 卡片选择

一个丰富样式的卡片类型的选择器，同时支持单选和多选模式

### Upload 上传

用于上传图片或者视频的组件

### ModalForm 弹出表单

用于将其他表单封装为一个弹出表单，例如单列选择器、日期选择器都是由这个组件封装的

这里包含了

- ModalForm 单出单个表单，作为一个表单使用，放在 Form.Item 中
- ModalForms 弹出多个表单，独立内容，放在Form内任何位置

### NumberKeyboard 数字键盘

用于数字的输入，例如输入验证码，支付密码、电话号码、身份证等

### InputCode 验证码密码输入

通常需要配合 NumberKeyboard 组件来实现验证码的输入功能

### LicensePlate 车牌号输入

车牌号输入组件

### Text 文本

对Text的封装，对主题色、字号等进行了主题配置，对常用css的快捷属性封装

### Image 图片

对图片的封装，实现了预览，多图预览，在RN端使用 expo-image 实现，提供更好的性能

### Badge 徽标

用于展示未读消息数量，红点

### Tag 标签

标签展示

### Avatar 头像

显示一个头像或者头像组

### HtmlView 富文本显示

用于显示富文本

### Step 步骤条

例如快递更新日志，就可以用这个组件来实现

### Empty 空数据

某些列表数据为空时可以用这个组件显示

### Status 角标状态

显示在卡片四个角的状态

### LongPress 长按

长按事件封装

### TouchableOpacity 触摸反馈

点击具有不透明效果的组件

### Modal 弹框

将内容弹出，显示在屏幕中间

### DropDown 下拉菜单

在元素做所在位置弹出一个菜单

### loading 显示加载动画

显示加载中动画

### message 消息通知

显示一个消息通知

### confirm 确认弹框

异步调用一个确认弹框

### Sign 签名

手写签名组件

### HorseLanternLottery 跑马灯抽奖

抽奖组件，可以随机结果，也可以异步指定抽奖结果

## 总结

可以看到，组件库很丰富，覆盖的使用场景很多

详细的使用方法，请前往开发文档查看

开发文档：[http://duxapp.cn](http://duxapp.cn)

GitHub：[https://github.com/duxapp](https://github.com/duxapp)
