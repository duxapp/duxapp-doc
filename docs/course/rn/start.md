---
sidebar_position: 1
---

# 入门教程

`duxapp` 通过框架和模块组合，大大降低了RN依赖安装、APP打包的难度，仅需创建简单的配置文件，就可以实现想要的依赖和打包。

## 开始之前

在开始之前，需要根据RN中文网搭建好需要的开发环境，即便我们的框架大大降低了RN的难度，但是打包的环境还是需要的
[搭建开发环境](https://reactnative.cn/docs/environment-setup)

## 准备

在[新手教程](/docs/course/started/intro)中，你已经创建了一个全新模块，并且添加了 `duxui` 模块的依赖，要兼容RN，还需要添加 `duxappReactNative` 模块作为依赖，在添加依赖之前你需要安装

```bash
# 安装duxappReactNative
yarn duxapp app add duxappReactNative
```
安装模块之后修改模块配置文件 `src/moduleName/app.json`, 在 `dependencies` 中添加 `duxappReactNative`

```json
{
  "name": "moduleName",
  "description": "模块介绍",
  "version": "1.0.0",
  "dependencies": [
    "duxapp",
    "duxui",
    "duxappReactNative"
  ]
}

```

修改文件后，执行下面的命令，完成一个初始化的过程，这会安装RN相关的依赖，以及补全 RN 端相关的命令

```bash
yarn app --app=moduleName
```

## 添加配置文件

在之前的[入门教程](/docs/course/started/intro)中我们已经创建了 `index.js` 配置文件, RN配置需要在同一个目录下创建 `duxapp.rn.js` 文件，内容如下，

`configs/modeName/duxapp.rn.js`

```js
const config = {
  android: {
    appid: 'com.duxapp.modulename',
    appName: 'APP名称',
    versionCode: 1,
    versionName: '1.0.0',
  },
  ios: {
    BundleId: 'com.duxapp.modulename',
    appName: 'APP名称',
    versionCode: 1,
    versionName: '1.0.0',
  }
}

module.exports = config

```

:::info
android和ios都需要配置上，即便你只开发安卓端，否则无法正常编译
:::

由于安卓包名限制条件，你的包名只能由小写字母组成，并不能像模块名称那样，使用驼峰命名  

接下来使用如下命令为安卓创建证书，这需要你在搭建好安卓开发环境的前提下（JDK需要安装到默认位置，否则可能识别不到）

```bash
yarn duxapp android keystore --config=moduleName
```

`--config=moduleName` 首次出现，用来指定配置文件，意思是为这个配置文件生成证书，上面之前教程提到的大多数命令都能使用此参数，当模块名称和配置名称不一致时，就可以指定此参数 

命令执行成功后会提示如下内容 

```bash
请将下列配置配置到 duxapp.rn.js 的 android.keystore 中
{
  storeFile: 'duxapp.keystore',
  keyAlias: 'duxapp',
  storePassword: 'xdKKwwZYenypmePk',
  keyPassword: 'xdKKwwZYenypmePk'
}
```

根据这个提示将配置内容配置如下

```js
const config = {
  android: {
    appid: 'com.duxapp.modulename',
    appName: 'APP名称',
    versionCode: 1,
    versionName: '1.0.0',
    // 添加到这里
    keystore: {
      storeFile: 'duxapp.keystore',
      keyAlias: 'duxapp',
      storePassword: 'xdKKwwZYenypmePk',
      keyPassword: 'xdKKwwZYenypmePk'
    }
  },
  ios: {
    BundleId: 'com.duxapp.modulename',
    appName: 'APP名称',
    versionCode: 1,
    versionName: '1.0.0',
  }
}

module.exports = config

```
## 开始打包

接下来就能执行打包命令了

```bash
yarn android --app=moduleName
```

如果一切顺利，将会打包成功一个调试版本的安装包，如果你手机开启开发者选项，并且链接到电脑，将会把app打包安装到你的手机上  

启动app，设置你电脑的ip地址+端口8081，比如: `192.168.1.10:8081`，然后使用命令启动RN服务

```bash
yarn start --app=moduleName
```

服务启动后在手机上 `reload` 即可加载代码，其他流程和Taro开发一致

:::info
使用这个 `yarn android --app=moduleName` 编译安卓的时候会自动启动RN服务，但是大多数情况下还是需要使用 `yarn start --app=moduleName` 启动服务
:::

## 自定义app图标

自定义app图标的方式也比较简单，执行一行命令，将你的logo文件命名为 `logo.png` 放在 项目配置目录下 `configs/moduleName` ，然后执行如下命令

```bash
yarn duxapp rn logo --config=moduleName
```

命令执行成功，将会生成app需要的尺寸，放置在配置文件夹下，然后重新打包

```bash
yarn android --app=moduleName
```

## 打包发布版本

打包发布版本则较为简单，使用如下命令即可

```bash
yarn build:android --app=moduleName
```

## 使用其他原生模块

当你需要使用第三方原生插件时，`duxapp` 框架也提供了较为简单的方式，以微信(wechat)插件为例  
这个插件在rn上集成的是 `react-native-wechat-lib` ，可以实现登录、分享、支付等功能  
在H5端集成的是 `wechat-jssdk` 实现jssk相关的功能  

只需要在模块配置文件中新增模块依赖，将 `wechat` 添加到 `dependencies` 中

```json
{
  "name": "moduleName",
  "description": "模块介绍",
  "version": "1.0.0",
  "dependencies": [
    "duxapp",
    "duxui",
    "duxappReactNative",
    "wechat"
  ]
}
```

微信模块还需要配置appid等参数，在`configs/moduleName/index.js` 文件中配置如下,新增 `option.wechat` 配置

```js
const config = {
  // 覆盖app.config.js 配置
  appConfig: {},
  // 调试配置
  debug: {
    // 在h5端开启vconsole调试功能
    vconsole: false
  },
  // 模块配置 将会调用模块生命周期的option，将对应模块的参数传入
  option: {
    // 基础模块
    duxapp: {
      theme: {
        primaryColor: '#CDDE00',
        secondaryColor: '#FDD000',
        successColor: '#34a853',
        warningColor: '#fbbc05',
        dangerColor: '#ea4335',
        pageColor: '#fafbf8',
        mutedColor: '#666',
        header: {
          color: '#fff', // 仅支持rgb hex值，请勿使用纯单词 设置为数组将显示一个渐变按钮
          textColor: '#000', // 文本颜色
          showWechat: false, // 微信公众号是否显示header
          showWap: true, // h5是否显示header
        }
      },
    },
    // 新增此处的配置
    wechat: {
      app: {
        appid: 'wxxxxxxxxxx',
        // 此配置在ios上使用，安卓端无用
        universalLink: 'https://www.duxapp.cn/app/'
      }
    },
  }
}

export default config

```

在`configs/moduleName/duxapp.rn.js` 也有对应的打包配置，当然这个配置只使用于ios打包，如果仅限安卓可以不配置,新增 `option.wechat` 配置
```js
const config = {
  android: {
    appid: 'com.duxapp.modulename',
    appName: 'APP名称',
    versionCode: 1,
    versionName: '1.0.0',
    keystore: {
      storeFile: 'duxapp.keystore',
      keyAlias: 'duxapp',
      storePassword: 'xdKKwwZYenypmePk',
      keyPassword: 'xdKKwwZYenypmePk'
    }
  },
  ios: {
    BundleId: 'com.duxapp.modulename',
    appName: 'APP名称',
    versionCode: 1,
    versionName: '1.0.0',
  },
  option: {
    wechat: {
      appid: 'wxxxxxxxxxx'
    }
  }
}

module.exports = config

```

配置完上述配置之后，需要重新执行打包流程

```bash
yarn android --app=moduleName
```

打包之后原生模块打包进app，然后就可以使用微信提供的功能，具体使用方法可查看相关插件文档  

官方还提供了一些常用的原生模块，一看参考文档使用

- [alipay 支付宝](/docs/app/unionpay/start)
- [amap 高德地图](/docs/app/amap/start)
- bootsplash app启动图
- [codepush 热更新](/docs/app/codepush/start)
- duxpush 厂商通道的消息推送
- [echarts 百度图表](/docs/app/echarts/start)
- [unionpay 云闪付](/docs/app/alipay/start)
- [wechat 微信](/docs/app/wechat/start)

## 自己集成第三方插件

如果官方提供的插件不满足需求，你可以自己集成想要的插件，以`react-native-document-picker`插件为例  

在模块配置文件中先添加插件依赖，如下，先在模块创建 `package.json` 文件，放入下面的内容

```json
{
  "dependencies": {
    "react-native-document-picker": "9.1.0"
  }
}
```

然后重新执行打包命令即可

```bash
yarn android --app=moduleName
```
详细内容请查看[使用原生模块](/docs/course/rn/package)

## RN模块教程

RN基础模块中提供了用户协议、版本更新、权限管理等功能，前往[duxappReactNativem模块](/docs/app/duxappReactNative/start)了解