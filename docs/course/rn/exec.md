---
sidebar_position: 3
---

# 命令行工具

这里将介绍和RN有关的命令行工具的使用，包含生成安卓证书、生成app图标、编译调试包、编译发布版本等

## RN命令

### 初始化

`yarn app --app=模块`  

这个命令的用途是，当你从一个没有 RN 依赖的项目切换到一个有 RN 依赖的项目时使用的，因为没有 RN 依赖的项目中，同时也不会有编译 RN 相关的命令，例如 `yarn start --app=模块`，在你执行这些命令之前需要先执行这个命令来初始化

### 启动metro

`yarn start --app=模块` 或者 `yarn dev:rn --app=模块`  

两个命令完全一样，都能启动meter代码编译功能

:::info
RN的metro服务缓存比较重，在下面这些情况下，你需要重启命令，并且在命令后盖面加上 `--reset-cache`

如果你不这样做，你修改的内容将不会生效

```bash
yarn start --app=modeName --reset-cache
```
- 切换项目 （就是当你的--app=参数不一样的时候）
- 添加、修改、删除了模块路由
:::


### 初始化RN打包环境

`yarn duxapp rn create --app=模块`  

使用命令后，将会生成RN一样的 `android`、`ios`，`index.js` 等RN的相关文件，一般不需要直接执行这个命令，直接执行 `yarn android --app=模块` 等命令的时候会自动执行这个命令

:::info
使用这个命令需要提前创建好配置文件，包括包名、证书等必填配置  

多次使用这个命令时，如果传入的app参数与上次相同，则不会删除`android`、`ios`，`index.js`，如果传入的app参数与上次不同则会先删除然后创建
:::

### 生成项目logo

`yarn duxapp rn logo --config=配置名称`  

用于生成项目的app图标，在生成之前需要将项目logo命名为`logo.png`，放在配置文件夹的根目录  

执行命令后会自动生成安卓和ios的图标，不需要后续操作

:::info
感谢图标工厂提供的app图标生成功能 [https://icon.wuruihong.com](https://icon.wuruihong.com)
:::

## 安卓命令

### 创建证书

`yarn duxapp android keystore --config=配置名称`  

创建安卓证书，创建后证书文件会自动放进配置中，需要手动将命令行打印的配置内容，放进duxapp.rn.js相应位置
### 编译调试版本

`yarn android --app=模块` 或者 `yarn debug:android --app=模块`  

建议使用前者，前者就是和RN一样的编译命令，里面封装了自动打开模拟器等功能  

如果你链接到手机的adb功能，或者电脑上安装了模拟器，会自动安装apk，如果你需要调试版的apk，那么它位于这个文件夹下：`android/app/build/outputs/apk/debug`

:::info
在使用此命令之前请确保你已经完成下面这些操作，包括下面的编译发布版本也一样
- 搭建好安卓开发环境
- 配置安卓包名、证书、app名称
:::

### 编译发布版本

`yarn build:android --app=模块`  

编译发布版本的apk，编译成功后apk文件位于 `android/app/build/outputs/apk/release`

对于国内大部分应用市场都只要求上架 `arm64-v8a` 的包，直接选择此包上架即可

## ios

### 编译调试版本

`yarn ios --app=模块`  

使用这个命令会自动安装pod，启动模拟器、编译调试版

:::info
在使用此命令之前请确保你已经完成下面这些操作
- 搭建好ios开发环境
- 配置ios BundleId、app名称
:::

### 安装pod依赖

`yarn pod --app=模块` 

通常你不需要使用这个命令，使用上面的编译调试版本，会自动安装pod