---
sidebar_position: 11
---

# CLI命令工具

初始化duxapp项目，自动生成app图标，证书，修改包名等功能

## 如何使用

当你在项目中时 使用 `yarn` 或者 `npm run` 运行下面的命令  

当不在项目中时，使用npx运行命令，将下面的所有 `duxapp` 命令替换为 `npx duxapp-cli`，如  
```bash
npx duxapp-cli create 项目名称
```

## 支持的命令列表

### create 项目初始化

初始化一个新的项目
```bash
duxapp create 项目名称
```
:::info
- 项目名称将会作为项目文件目录的名称，推荐使用英文作为项目名称
- 初始化项目推荐用 `npx duxapp-cli create 项目名称` 执行
:::

### app 模块管理

#### app add
添加、更新模块，支持批量添加（后面跟着多个模块名称）
```bash
duxapp app add 模块1 模块2
```
此命令会同步更新所依赖的模块，例如
```bash
duxapp app add duxui
```
在安装`duxui`模块的同时会把`duxapp`模块也更新  

:::info
发布模块会需要在[https://www.dux.cn/](https://www.dux.cn/)注册账号，并登录
:::

#### app update

更新模块依赖，任意模块都可以，会检查当前模块所依赖的模块是否在应用商店发布

如果不传入任何参数，会更新所有可更新的模块

```bash
duxapp app update <模块1> <模块2>
duxapp app update
```

#### app publish
发布模块到应用市场
```bash
duxapp app add 模块名称
```

发布模块 并且发布依赖的模块
```bash
duxapp app add 模块名称 1
```
:::info
- 发布模块后需要前往[https://www.dux.cn/](https://www.dux.cn/)继续发布应用，提交上架，否则，发布的模块仅有自己能安装
- 发布模块会需要在[https://www.dux.cn/](https://www.dux.cn/)注册账号，并登录
:::

#### app create

快速创建一个模块，从多个模板中选择一个进行创建

```bash
duxapp app create 模块名称 模块描述
```

:::info
如果没有合适你的模板，你可以将你的模板 PR 提交到 [github](https://github.com/duxapp/duxapp-app-templates)，等待合并后即可使用
:::

#### app check
检查模块依赖的问题

```bash
# 检查指定模块
duxapp app check 模块1 模块2
# 检查依赖的所有模块
duxapp app check --app=模块
```

#### app checkIntegrity
检查从应用商店安装的模块是否被修改过
```bash
# 检查特定模块
yarn duxapp app checkIntegrity duxui

# 检查所有已安装模块
yarn duxapp app checkIntegrity
```
此命令会验证模块文件是否被修改，并显示具体哪些文件发生了变化。


### user 用户操作

#### user login
命令行用户登录

#### user logout
命令行用户退出登录

### icon 图标组件管理
#### icon create

[iconfont](https://www.iconfont.cn/) 的图标库创建为一个React组件的工具
```bash
duxapp icon create UiIcon duxui https://at.alicdn.com/t/c/font_4643878_n6necu7zt7p.css
```
如上所示的命令将为duxui模块创建组件名为`UiIcon`的组件，此组件将会放在`src/duxui/components`目录下，用户可根据情况使用。  
多次使用此命令，将会覆盖组件创建

:::info
- 这个参数上面的css地址是iconfont项目的css地址，地址不包含后面的参数部分
- 项目设置里面字体格式要包含 `Base64` 这个选项，默认项目未启用这个选项，需要在项目设置里面开启
- 在项目设置里面，字体名称需要设置，不能保持默认 `iconfont`，否则当你一个项目，存在多个图标库的时候，在RN ios端，只会有其中一个图标库生效
:::

默认创建的是本地图标，你可以指定为创建本地在线图标图标，像下面这样，在最后加上个1

```bash
duxapp icon create UiIcon duxui https://at.alicdn.com/t/c/font_4643878_n6necu7zt7p.css 1
```

### npm 管理模块的npm依赖

用于管理模块的npm依赖相关的命令

#### npm add

给模块添加依赖，添加依赖规则将会以 `~` 的形式添加进去

```bash
# 给 duxui 模块添加 dayjs 插件
duxapp npm add dayjs --app duxui
# 指定版本号添加
duxapp npm add dayjs@1.0.0 --app duxui
# 一次性添加多个依赖
duxapp npm add dayjs@1.0.0 duxapp-cli --app duxui
```

### rn React Native 端操作

####  rn create
创建RN打包环境
```bash
# 需要同时指定模块和配置才能创建成功
duxapp rn create --app=模块 --config=配置名称
```
创建打包环境是创建RN端需要的所有文件，如`adnroid`,`ios`文件夹,`app.json`,`index.js`等文件

#### rn logo

通过[图标工厂接口](https://icon.wuruihong.com)快速创建项目app图标
```bash
# 未指定图标，请将图标命名为 logo.png 放在配置目录下
duxapp rn logo --config=配置名称
# 或者指定图标位置 相对于配置目录
duxapp rn logo logo.png --config=配置名称
```

### android RN安卓端操作

#### android keystore

为项目配置生成证书

```bash
duxapp android keystore --config=项目配置
```

:::info
生成证书需要用户先安装好`jdk`工具，详情查看RN环境搭建文档
:::

### ios RNios端操作

#### ios upload

将ios的ipa安装包上传到应用商店  

```bash
duxapp ios upload aaa.ipa
```
要使用这个功能需要在配置文件提供账号和密码

```javascript
{
  ios: {
    // 应用商店上传账号
    account: '',
    // 不是账号密码，是在账户中心生成的密码
    password: ''
  }
}
```

### file 文件操作

#### file move

将一个文件移动到另一个位置，或者是文件夹

```bash
duxapp file move a b
```

#### file copy

将一个文件复制到另一个位置，或者是文件夹

```bash
duxapp file copy a b
```

#### file delete

删除文件或文件夹

```bash
duxapp file delete a
```

