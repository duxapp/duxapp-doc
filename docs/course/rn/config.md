---
sidebar_position: 2
---

# 用户配置

配置文件用来配置包名、版本号、证书等信息，配置文件和配置一样都放在`configs`文件夹下对应的配置中，其名称为`duxapp.rn.js`

```js
module.exports = {
  android: {
    appid: 'cn.duxapp',
    appName: 'duxapp',
    versionCode: 3,
    versionName: '1.0.2',
    keystore: {
      storeFile: 'duxapp.keystore',
      keyAlias: 'duxapp',
      storePassword: 'EQGNRXRE47CcSD5i',
      keyPassword: 'EQGNRXRE47CcSD5i'
    }
  },
  ios: {
    BundleId: 'cn.duxapp',
    appName: 'duxapp',
    versionCode: 3,
    versionName: '1.0.2',
    team: '87MKAFB878',
    plist: {
      'duxapp/Info.plist': {
        NSCalendarsUsageDescription: 'Allow duxapp to access your calendar',
        NSCameraUsageDescription: 'duxapp需要拍照用于APP内图片上传更换头像',
        NSContactsUsageDescription: 'duxapp需要访问你的通讯录，将客户信息保存到通讯录中',
        NSLocalNetworkUsageDescription: 'App需要访问你的本地网络，用于和服务器建立连接',
        NSLocationAlwaysAndWhenInUseUsageDescription: '使用你的位置信息用于地图定位和位置选择',
        NSLocationAlwaysUsageDescription: '使用你的位置信息用于地图定位和位置选择',
        NSLocationWhenInUseUsageDescription: '使用你的位置信息用于地图定位和位置选择',
        NSMicrophoneUsageDescription: 'Allow duxapp to access your microphone',
        NSMotionUsageDescription: 'Allow duxapp to access your devices accelerometer',
        NSPhotoLibraryAddUsageDescription: 'duxapp需要保存宣传图到你的相册用于分享',
        NSPhotoLibraryUsageDescription: 'duxapp需要访问相册用于APP内图片上传更换头像',
        NSRemindersUsageDescription: 'Allow duxapp to access your reminders',
      },
      'duxapp/duxapp.entitlements': {
        'com.apple.developer.associated-domains': [
          'applinks:a.mifi.top'
        ]
      }
    }
  },
  option: {

  }
}
```

:::info
这是一个node模块，需要使用`module.exports`导出一个配置对象
:::

下面将详细介绍此对象包含的内容

## android

### appid
app包名，必填，推荐 `cn.duxapp.项目名称`

### appName
app名称，必填

### versionCode
app数字版本号，类型为number

### versionName
app版本号

### keystore
证书配置，必填，他的内容是下面这样的

```js
{
  storeFile: 'duxapp.keystore',
  keyAlias: 'duxapp',
  storePassword: 'EQGNRXRE47CcSD5i',
  keyPassword: 'EQGNRXRE47CcSD5i'
}
``` 
cli提供了一个快捷命令用于创建证书`yarn duxapp android keystore --config=配置名称` 创建后，会在命令行输出这个配置的内容，复制这个内容设置到此配置

### fabricEnabled
是否开启新架构，默认是开启的，如果需要关闭，请配置为false

### enableProguardInReleaseBuilds
开启`Proguard`打包，默认是开启的，请配置正确的`Proguard`，如需关闭请设置为`false`，关闭后app的体积会有所增大

### enableSeparateBuildPerCPUArchitecture
将apk打包为不同架构，默认开启，如需关闭，需配置为`false`

### reactNativeArchitectures
默认只会编译 `arm64-v8a` 的包，如果你还需要编译其他的包请配置替换

完整的为 `armeabi-v7a,x86,x86_64,arm64-v8a` 你可以参照这个，按照需要进行修改

### distributionUrl
用于替换默认的 gradle 下载地址

默认值为
`https\://services.gradle.org/distributions/gradle-8.8-all.zip`

### xml
用于合并xml文件，他的配置和 [合并创建xml](package-update#xml-合并创建xml) 一致

## ios

### BundleId
配置BundleId，必填 `cn.duxapp.项目名称`

### appName
app名称，必填

### versionCode
app数字版本号，类型为number

### versionName
app版本号

### team
项目团队，配置后用于打包

### fabricEnabled
是否开启新架构，默认是开启的，如果需要关闭，请配置为false

### plist
用于合并plist文件，他的配置和 [plist-配置合并](package-update#plist-配置合并) 一致

## onStart(callback)

模块处理开始回调

## onStop(callback)

模块处理结束回调

## qiniu

7牛云上传配置，此配置并非用于RN使用，而是用于创建Icon命令上传字体文件使用

### accessKey
key

### bucket
存储空间

### cdn
访问域名

## option
模块自定义配置，例如微信模块在编译ios时需要用到appid，就配置在`option.wechat.appid`
