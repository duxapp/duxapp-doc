---
sidebar_position: 6
---

# 预埋点查询

预埋点是用于 cli 处理原生模块时插入或者替换内容使用的，预埋点可以访问 `src/duxappReactNative/template` 进行查看（文件在 `duxappReactNative` 模块内）

## 内容替换 replace

### android/gradle.properties

- reactNativeArchitectures  
需要打包哪些架构的apk 为了提成打包速速，默认为 arm64-v8a

- fabricEnabled  
true 或者 false，默认true，是否启用新架构，此项一般通过配置更新，请勿通过更新程序更新

- hermesEnabled  
true 或者 false，默认true，是否开启hermes，此项一般通过配置更新，请勿通过更新程序更新

- keyFile  
证书文件路径，证书文件放在app目录下，文件路径相对于app目录，此项一般通过配置更新，请勿通过更新程序更新

- keyAlias  
证书别名，此项一般通过配置更新，请勿通过更新程序更新

- keyStorePassword  
证书存储密码，此项一般通过配置更新，请勿通过更新程序更新

- keyPassword  
证书密码，此项一般通过配置更新，请勿通过更新程序更新

### android/app/build.gradle

- enableSeparateBuildPerCPUArchitecture  
true 或者 false，默认true，传入true会把app按照架构打包成不同的apk

- enableProguardInReleaseBuilds  
true 或者 false，默认true， 传入true会对打包的apk进行压缩处理，但是开启此功能，需要添加正确的Proguard，否则app会出现功能故障，此项一般通过配置更新，请勿通过更新程序更新

- packageName  
包名，默认 `cn.duxapp`，此项一般通过配置更新，请勿通过更新程序更新

- versionCode  
数字版本号，默认 `1`，此项一般通过配置更新，请勿通过更新程序更新

- versionName  
版本号，默认 `1.0.0`，此项一般通过配置更新，请勿通过更新程序更新

### android/app/src/main/java/cn/duxapp/MainActivity.kt

- packageName  
包名，默认 `cn.duxapp`，此项一般通过配置更新，请勿通过更新程序更新

### android/app/src/main/java/cn/duxapp/MainApplication.kt

- packageName  
包名，默认 `cn.duxapp`，此项一般通过配置更新，请勿通过更新程序更新

### android/gradle/wrapper/gradle-wrapper.properties

- distributionUrl
gradle 下载地址，此项一般通过配置更新，请勿通过更新程序更新

### ios/.xcode.env

此文件是cli定制环境变量，其中添加的环境变量用于在pod安装时使用

- fabricEnabled  
开启新架构

### ios/duxapp.xcodeproj/project.pbxproj
- versionCode  
数字版本号，默认`1`，此项一般通过配置更新，请勿通过更新程序更新

- versionName  
版本号，默认`1.0.0`，此项一般通过配置更新，请勿通过更新程序更新

- BundleId  
ios BundleId，默认`cn.duxapp`，此项一般通过配置更新，请勿通过更新程序更新

- team  
团队，用于编译ipk的账号的团队，此项一般通过配置更新，请勿通过更新程序更新

## 内容添加 insert

### android/build.gradle

- buildscript.ext  
内容添加到最后

- buildscript.repositories  
内容添加到最前

- buildscript.dependencies  
内容添加到最后

- allprojects.repositories  
默认内容为空，方便一些插件添加内容

- content  
添加到顶灯文件的最后面

### android/gradle.properties

- content  

可用于添加其他全局变量

### android/settings.gradle

- before  
添加到 `include ':app'` 之前

- after  
添加到文件末尾

### android/app/build.gradle

- before  
添加到 `include ':app'` 之前

- react  
react内容

- android.defaultConfig  
defaultConfig 配置

- android  
android 配置

- dependencies  
三方依赖

- content  
添加到文件结尾

### android/app/proguard-rules.pro

- content  
添加 proguard 规则

### android/app/src/main/java/cn/duxapp/MainActivity.kt

- import  
导入依赖位置

- mainActivityDelegate.loadApp  
app初始化位置，可以添加一些需在在启动就执行的功能，比如一些启动屏幕插件有这个需求

- mainActivity  
可添加其他方法

### android/app/src/main/java/cn/duxapp/MainApplication.kt

- import  
导入依赖位置

- reactNativeHost  
可添加方法用于覆盖默认方法

- onCreate  
app创建需要执行的其他代码

- mainApplication  
其他方法用于覆盖默认方法

### android/gradle/wrapper/gradle-wrapper.properties

- content
插入此文件的其他内容

### ios/Podfile

- start  
导入内容位置

- podStart  
duxapp开始位置

- podEnd  
duxapp结束位置

- end  
文件末尾

- postInstallStart  
post_install 的开始位置

- postInstallEnd  
post_install 的结束位置

### ios/.xcode.env

- content  
添加env内容


### ios/.pod.env

此文件是cli定制环境变量，其中添加的环境变量用于在pod安装时使用

- content  
添加env内容

### ios/duxapp/BridgingHeader.h

- import  
依赖导入位置

- content
放内容位置

### ios/duxapp/AppDelegate.swift

- import  
依赖导入位置

- appDelegate.didFinishLaunchingWithOptions  
启动要执行的代码

- app.delegate  
类继承更多方法的位置,例如微信模块的
```js
'app.delegate': ', WXApiDelegate'
```

- app.application.start
入口函数开始位置

- app.application.end
入口函数结束位置

- app
app内其他方法

- duxappReactNative

填写方法用于覆盖 ReactNativeDelegate 的方法

- content

文件内其他内容