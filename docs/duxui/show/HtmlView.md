---
sidebar_position: 6
---

# HtmlView 富文本显示

组件待完善

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='HtmlView' />

```jsx
import { Header, ScrollView, TopView, GroupList, HtmlView, Space, Text } from '@/duxuiExample'

const html = `<h2 style="text-align: center; line-height: 1;" align="center"><span style="font-size: 18px;"><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">摄像头用户指南</span></span></strong></span></h2>
<h2 style="text-align: center; line-height: 1;" align="center"><span style="font-size: 16px;"><span style="font-family: 黑体;"><span style="font-family: 黑体;">使用设备前请仔细阅读用户指南，请妥善保管本手册以备后续使用</span></span></span></h2>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">一</span> <span style="font-family: 黑体;">外观介绍</span></span></strong></span></h2>
<p class="MsoNormal" style="text-indent: 21pt; line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体; letter-spacing: 0pt;">&nbsp;<img  src="https://cdn.tonglao.com.cn/upload/2022-07-19/07ce2cd74f60531c6da525447ec5321f.png" alt="" width="281" height="256" /></span></span></p>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;"><img  src="https://cdn.tonglao.com.cn/upload/2022-07-19/f9121f08f45322ddff5e611745902018.png" alt="" width="397" height="228" /></span></span></strong></span></h2>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">安装</span><span style="font-family: Arial;">SD</span><span style="font-family: 黑体;">卡</span></span></strong></span></h2>
<p class="MsoNormal" style="line-height: 1;"><span style="font-family: 宋体; font-size: 16px;">&nbsp;<img  src="https://cdn.tonglao.com.cn/upload/2022-07-19/b60adddfe2575bac4bf9daf034381f35.png" alt="" width="408" height="184" /></span></p>
<p class="MsoNormal" style="line-height: 1; text-align: center;"><span style="font-family: Calibri; font-size: 16px;">&nbsp;</span><span style="font-size: 16px;"><span style="font-family: 宋体; color: #ff0000; letter-spacing: 0pt;"><span style="font-family: 宋体;">注意：如果插入</span><span style="font-family: 宋体;">SD卡时发现无法顺利进入切勿使用蛮力推进，防止SD卡损坏！</span></span></span></p>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">二</span> <span style="font-family: 黑体;">安装位置选择与注意事项</span></span></strong></span></h2>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">应根据安装环境选取安装点</span></span></strong></span></h2>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><strong><span class="15" style="font-family: 黑体;"><span style="font-family: Arial;">1</span><span style="font-family: 黑体;">）建议高度</span></span></strong><strong><span style="font-family: 宋体;"> </span></strong></span></p>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">在四周墙角，天花板，书柜，空调机上方等位置，安装高度大于</span><span style="font-family: Calibri;">2</span><span style="font-family: 宋体;">米。</span></span></span></p>
<h4 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: Arial;">2</span><span style="font-family: 黑体;">）光线</span></span></strong></span></h4>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">摄像机安装位置要根据光照、灯光条件适当调整安装摄像机位置；如摄像机安装在灯光后侧，当人员走到摄像机有效采集距离时，灯光可有效的照射在人脸上，人脸不会出现阴阳脸（半张脸暗，半张脸亮）、看不清人脸等情况，采集到的照片能更好的识别比对。</span></span></span></p>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">光照对人脸的影响方向为：向光、逆光、侧光等；摄像机安装位置需要根据人脸</span></span><strong><span style="font-family: 宋体; color: #ff0000;"><span style="font-family: 宋体;">向光方向</span></span></strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">来安装摄像机，采集人像才能更好的采集或识别比对。</span></span></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">向光：人脸朝向光照或灯光方向</span></span></span></p>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">逆光：人脸朝向背对光照或灯光方向</span></span></span></p>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">侧光：人脸左右两边的光照、灯光比前后光照强度高</span></span></span></p>
<h4 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: Arial;">3</span><span style="font-family: 黑体;">）视野范围</span></span></strong></span></h4>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">请保证视野内能清晰，规整的看清地面，将主要活动的区域移至视野中心位置，最佳有效视野范围为视野中心直径为</span><span style="font-family: 宋体;">3-5米的圆。使用吊装时，应在软件内进行画面反转，请确保画面为水平垂直，否则会影响画面探测结果，导致误报的产生。</span></span></span></p>
<h4 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: Arial;">4</span><span style="font-family: 黑体;">）角度</span></span></strong></span></h4>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">断电重启后，设备进行自检，为了保证设备的正常看护功能，请检查设备角度，因人为导致的角度偏差，使看护功能无法正常运行，本公司概不负责，请确认实际探测的画面和角度在需要检测的画面内。</span></span></span></p>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 黑体;">5）</span><!--[endif]--><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">安装电源</span></span></strong></span><span style="font-family: Calibri; font-size: 16px;"><img  src="https://cdn.tonglao.com.cn/upload/2022-07-19/7126f24747f1291e622662176dd3b304.png" alt="" width="363" height="269" /></span></h2>
<p class="MsoNormal" style="margin-left: 21pt; line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体; color: #ff0000;"><span style="font-family: 宋体;">警告：若电源线长度不够，为防止触电，请勿在没有专业电工技能的情况下私自对电路进行改造或对电线进行牵拉，请联系专业人员或购买安装服务。</span></span></span></p>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">三</span> <span style="font-family: 黑体;">下载护老卫士</span><span style="font-family: Arial;">APP</span></span></strong></span></h2>
<p class="MsoNormal" style="margin-left: 0pt; text-indent: 0pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体; font-weight: bold;">①　</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">将手机连接</span><span style="font-family: Calibri;">WIFI</span></span></span></p>
<p class="MsoNormal" style="margin-left: 0pt; text-indent: 0pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体; font-weight: bold;">②　</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">扫描下方的二维码进行下载并安装。</span></span></span></p>
<p class="MsoNormal" style="text-indent: 0pt; line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">也可以通过销售人员发送的连接或二维码进行下载安装。</span></span></span></p>
<p class="MsoNormal" style="margin-left: 0pt; text-indent: 0pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体; font-weight: bold;">③　</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">打开</span><span style="font-family: Calibri;">APP </span><span style="font-family: 宋体;">通过提示与指引完成用户注册，</span></span></span></p>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">第一次登录时请使用微信进行手机号绑定，方便后续登录。</span></span></span></p>
<p class="MsoNormal" style="margin-left: 21pt; line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><img  src="https://cdn.tonglao.com.cn/upload/2022-07-19/0cb2802591c087814ec1e4f16243a15d.png" alt="" width="198" height="195" />&nbsp;</span></span></p>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">四</span> &nbsp;<span style="font-family: 黑体;">添加至护老卫士</span><span style="font-family: Arial;">APP</span></span></strong></span></h2>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">1.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">打开护老卫士</span><span style="font-family: 宋体;">APP，点击左下角主页，点击屏幕正下方激活按钮，进行激活</span></span></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">2.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">点击主页右上角</span> <span style="font-family: 宋体;">&oplus; 号，点击 扫一扫/添加设备 </span></span></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">3.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">请扫描设备机身或说明书首页的二维码进行添加</span></span></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">4.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">家庭使用人员请选择</span></span><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">非安装人员</span></span></strong><span style="font-family: 宋体;">&nbsp;<span style="font-family: 宋体;">，安装人员请选择</span></span><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">安装人员</span></span></strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">进行设备调试（安装人员只有</span><span style="font-family: 宋体;">24小时临时权限）</span></span></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">5.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">选择已经进行激活的家庭</span></span></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">6.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">阅读</span></span><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">添加设备说明</span></span></strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">请保证您有一台正常上网的路由器，且已知其密码；将设备初始化，此状态下热点被开启，设备可被手机连接。（新设备上电即可进入热点模式）；将手机，设备和路由器相互靠近，且中间无遮挡，以确保信号良好。</span></span></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">7.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">点击</span></span><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">确定</span></span></strong></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">8.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">在摄像头指示灯呈蓝色快闪的情况下勾选</span><span style="font-family: 宋体;">&ldquo;指示灯已经蓝色快闪&rdquo;点击下一步</span></span></span><span style="font-family: 宋体; font-size: 16px;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">9.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">选择</span><span style="font-family: 宋体;">WiFi名称，输入WiFi密码，点击下一步。（注意：请连接2.4G的WiFi，暂不支持5G的WiFi）</span></span></span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">10.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">护老卫士</span> <span style="font-family: 宋体;">想要加入无线局域网，点击加入，请耐心等待配置</span></span></span></p>
<p class="MsoNormal" style="margin-left: 21.25pt; text-indent: -21.25pt; line-height: 1;"><span style="font-size: 16px;"><!-- [if !supportLists]--><span style="font-family: 宋体;">11.&nbsp;</span><!--[endif]--><span style="font-family: 宋体;"><span style="font-family: 宋体;">选择或输入设备名称，添加完成</span></span></span></p>
<h2 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">五</span> &nbsp;<span style="font-family: 黑体;">安装步骤</span></span></strong></span></h2>
<h5 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">安装底座<img  src="https://cdn.tonglao.com.cn/upload/2022-07-19/600b974e7f9bbea7c8ea067cd17cc982.png" alt="" width="474" height="386" /></span></span></strong></span></h5>
<h5 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">安装机身<img  src="https://cdn.tonglao.com.cn/upload/2022-07-19/958ba541a2d680601e1f2d48ebf2e9e1.png" alt="" width="371" height="266" /></span></span></strong></span></h5>
<h5 style="line-height: 1;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">调整视角</span></span></strong></span></h5>
<p class="MsoNormal" style="line-height: 1;"><span style="font-size: 16px;"><span style="font-family: 宋体;"><span style="font-family: 宋体;">在护老卫士上</span><span style="font-family: Calibri;">APP</span><span style="font-family: 宋体;">上点开摄像头画面，画面下方操作</span></span><strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">云台控制</span></span></strong><span style="font-family: 宋体;"><span style="font-family: 宋体;">控制摄像头画面在需要监控的位置。</span></span></span></p>`


const videoHtml = `<p><video controls="controls" width="760" height="760">
<source src="https://cdn.tonglao.com.cn/upload/2023-05-30/a65a356a467432bd56b93c7fc2588128.mp4" type="video/mp4" /></video></p>
<p>&nbsp;</p>`

export default function HtmlViewExample() {
  return <TopView>
    <Header title='HtmlView' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='html里面视频渲染'
          desc={<Space>
            <Text bold>组件说明</Text>
            <Text color={2}>1、富文本渲染是将HTML转换为Taro组件进行渲染，因此这个组件具有较低的性能，当富文本过大时，渲染会比较缓慢</Text>
            <Text color={2}>2、为了兼容RN，富文本的样式仅支持RN端支持的样式，其他不支持的样式将会被舍弃</Text>
            <Text color={2}>3、小程序版本此处未展示</Text>
          </Space>}
        >
          {process.env.TARO_ENV !== 'weapp' && <HtmlView html={videoHtml} />}
        </GroupList.Item>
        <GroupList.Item title='富文本渲染（开启图片预览）'>
          <HtmlView html={html} previewImage />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```