---
sidebar_position: 8
---

# 使用UI库

duxapp框架的duxui模块是免费开放的，使用这个库来编写项目，能提升效率，提高多端一致性，且UI库提供了丰富的组件，多端的兼容  

源代码会不定期更新到github，可以点个star [https://github.com/duxapp/duxui](https://github.com/duxapp/duxui)  

## 在线示例

- 小程序 （小程序搜索 duxui）
- APP https://app.share.dux.plus/cn.duxapp.duxui
- H5 https://duxui.duxapp.com/

## 使用

使用之前如果你尚未安装到你的项目中，需要先安装这个模块

```bash
yarn duxapp app add duxui
```

从ui库中导入有组件开始使用，下面是ui组件结合全局样式的案例

```jsx
import { Avatar, Card, ScrollView, Column, Divider, Header, Text, TopView, Row, px, Image, nav, Tag } from '@/duxui'
import { useRequest, CmsIcon, saleHook, Qrcode } from '@/duxcmsSale'
import { setClipboardData } from '@tarojs/taro'

export default function Sale() {

  const [{ info = {}, day = {}, money, total = {} }] = useRequest('sale/index')

  return <TopView>
    <Header absolute title='推广中心' color='#FFFFFF' style={{ backgroundColor: 'transparent' }} />
    <Image style={{ height: px(396) }} className='w-full absolute' src={require('./images/tui_bag.png')} />
    <Row justify='between' items='center' style={{ marginTop: px(208) }} className='mt-3 ph-3'>
      <Row items='center' justify='start'>
        <Avatar url={info.avatar}>{info.nickname}</Avatar>
        <Column className='mh-3'>
          <Row items='center' className='gap-2'>
            <Text size={33} bold color='#FFFFFF' >{info.nickname}</Text>
            {!!info.level_name && <Tag type='primary' size='s'>{info.level_name}</Tag>}
          </Row>
          <Row className='mt-2'>
            <Text color='#FFFFFF' size={1}>邀请码：{info.code}</Text>
            <CmsIcon className='mh-2' size={36} name='copy' color='#FFFFFF' onClick={() => setClipboardData({ data: info.code })} />
          </Row>
        </Column>
      </Row>
      <CmsIcon size={60} name='QRcode1' color='#FFFFFF' onClick={Qrcode.show} />
    </Row>
    <ScrollView className='mt-3'>
      <Card margin disableMarginTop>
        <Row jtems='center' justify='between' className='gap-3'>
          <Column justify='center' items='center' grow >
            <Text bold type='primary'>{total.order_num || 0}</Text>
            <Text color={2} size={2} className='mt-2'>直推订单</Text>
          </Column>
          <Column justify='center' items='center' grow>
            <Text bold type='primary'>{total.user_num || 0}</Text>
            <Text color={2} size={2} className='mt-2'>直推客户</Text>
          </Column>
        </Row>
        <Row className='mt-2' jtems='center' justify='between'>
          <Column justify='center' items='center' grow>
            <Text bold type='primary'>{total.month_sale_money || 0}</Text>
            <Text color={2} size={2} className='mt-2'>本月收益</Text>
          </Column>
          <Column justify='center' items='center' grow>
            <Text bold type='primary'>{total.sale_money || 0}</Text>
            <Text color={2} size={2} className='mt-2'>累计收益</Text>
          </Column>
        </Row>
      </Card>
      <Card shadow margin disableMarginTop onClick={() => nav('duxcmsAccount/cash/index')}>
        <Row items='center' justify='between'>
          <Text bold>佣金管理</Text>
          <CmsIcon name='direction_right' size={32} />
        </Row>
        <Row className='mt-3' items='baseline'>
          <Text size={2}>可提现佣金:</Text>
          <Text className='mh-3' bold size={50}>{money || 0}</Text>
        </Row>
      </Card>
      <Card margin disableMarginTop>
        <Row items='center' justify='around'>
          <Column items='center'>
            <Text size={2}>今日预估收益</Text>
            <Text className='mt-1' bold size={40} >{day.sale_money || 0}</Text>
          </Column>
          <Column items='center'>
            <Text size={2}>今日有效订单</Text>
            <Text className='mt-1' bold size={40} >{day.order_num || 0}</Text>
          </Column>
          <Column items='center'>
            <Text size={2}>今日新增客户</Text>
            <Text className='mt-1' bold size={40} >{day.user_num || 0}</Text>
          </Column>
        </Row>
      </Card>

      <Card margin className='gap-4'>
        <Text size={4} bold>其他操作</Text>
        <Row justify='between' items='center' onClick={() => nav('duxcmsSale/index/order')}>
          <Text size={2} className='mh-2' bold>推广订单</Text>
          <CmsIcon name='direction_right' size={32} />
        </Row>
        <Row justify='between' items='center' onClick={() => nav('duxcmsSale/index/customer')} >
          <Text size={2} className='mh-2' bold>我的客户</Text>
          <CmsIcon name='direction_right' size={32} />
        </Row>
        <saleHook.Render mark='index.menus' />
      </Card>
      <Row style={{ height: px(16) }}></Row>
    </ScrollView >
  </TopView>
}
```

请查看[UI库](/docs/duxui/start)获取完整的帮助文档

## 组件库

### 基础组件
- Button 按钮
- Cell 单元格
- LinearGradient 渐变
- BoxShadow 阴影
- Loading 加载动画
- Icon 图标

### 布局组件
- Column flex竖向
- Row flex横向
- Space 间距
- BoxShadow 阴影
- Divider 分割线
- Grid 宫格
- Card 卡片

### 导航组件
- Header 头部导航
- Tab 选项卡切换
- TabBar 底部导航
- BoxShadow 阴影
- Elevator 电梯楼层
- Menu 下拉菜单

### 表单组件
- Form 表单
- Input 输入框
- Textarea 多行文本
- Picker 选择器
- Date 日期时间
- Radio 单选
- Checkbox 多选
- Radio 单选
- Switch 开关
- Radio 单选
- Calendar 日历
- Grade 评分
- Cascade 级联选择
- CardSelect 卡片选择器
- Upload 上传
- ModalForm 弹出表单
- ModalForms 弹出复杂表单(对象数组)
- NumberKeyboard 数字键盘
- InputCode 验证码密码输入
- LicensePlate 车牌号输入

### 展示组件
- Text 文本
- Image 图片
- Badge 徽标
- Tag 标签
- Avatar 头像
- HtmlView 富文本
- Step 步骤条
- Empty 空数据
- Status 角标状态

### 操作反馈
- LongPress 长按
- TouchableOpacity 触摸反馈
- Layout 布局计算
- TopView 顶层容器
- Absolute 绝对定位
- PullView 弹出层
- Modal 弹框
- DropDown 下拉菜单
- loding 显示加载动画
- message 消息通知
- confirm 确认弹框

### 内容优化
- List 分页列表
- Detail 内容详情

### 高级
- Share 分享系统
- Chart echarts图表
- Map 地图
- Sign 签名
- HorseLanternLottery 跑马灯抽奖
- UploadManage 大文件上传及管理
