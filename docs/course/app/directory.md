---
sidebar_position: 2
---

# 结构

模块目录结构是下面这个样子的

```
├── duxapp                      模块名称
│   ├── components              模块组件库 
│   │   ├── ComponentName       组件
│   │   │   └── index.jsx
│   │   └── index.js            导出需要导出的组件
│   ├── config                  配置目录 
│   │   ├── route.js            路由配置文件（路径固定）
│   │   ├── theme.js            主题配置文件（路径固定）
│   │   └── themeToScss.js      主题转换函数（路径固定）
│   ├── pages                   页面放置文件夹
│   │   └── index               页面文件夹
│   │       ├── index.jsx       页面
│   │       └── index.scss
│   ├── utils                   工具库
│   │   ├── index.js            导出工具库
│   │   └── ...you util.js
│   ├── update                  模块安装目录
│   │   ├── copy                需要复制到项目的文件（路径固定）
│   │   ├── copy.build.complete 需要在编译结束后，复制到项目的文件（路径固定）
│   │   ├── copy.rn             编译 RN 的时候需要复制到项目的文件（路径固定）
│   │   ├── copy.harmony        运行鸿蒙端需要复制到鸿蒙项目的文件（路径固定）
│   │   ├── rn.js               RN 端安装脚本 插件安装方法（路径固定）
│   │   └── harmony.js          鸿蒙 端安装脚本 插件安装方法（路径固定）
│   ├── app.js                  模块入口文件
│   ├── app.json                模块配置文件 包括名称 依赖等（必须）
│   ├── app.scss                全局样式文件（次样式文件无需导入到js文件中，会自动注入全局）
│   ├── package.json            和项目的package.json相同，用于指定当前模块需要用到的三方依赖等
│   ├── changelog.md            更新日志（必须 如果发布）
│   ├── index.js                模块出口文件 可以导出组件和方法给其他模块使用
│   ├── index.html              如果是h5的项目可以自定义index.html，仅当作为入口模块时可用
│   ├── app.config.js           用于覆盖项目全局配置
│   ├── babel.config.js         babel配置文件
│   ├── metro.config.js         metro配置文件
│   ├── taro.config.js          Taro编译配置文件
│   ├── taro.config.prod.js     Taro 发布配置文件
│   ├── taro.config.dev.js      Taro 调试配置文件
│   └── readme.md               自述文件（必须 如果发布）
```

上面的目录结构中 `components` `pages` `utils` 文件夹是推荐写法，不一定都需要存在，你也可以自定义为其他文件夹或者文件  

不同的模块提供不同的功能，有的模块仅提供组件，例如 `duxui`，那么他就不需要页面，pages就不会存在

## app.json

模块配置文件，通常看起来是这样的

```json
{
  "name": "duxui",
  "description": "duxapp模块，所有模块的公共基础模块",
  "version": "1.0.61",
  "dependencies": [
    "duxapp"
  ],
}
```

### name
模块名称，请和模块目录保持一致

### description
模块描述

### version
版本号，版本号仅用于将版本模块到应用市场，发布的时候不能发布相同版本，需要更新版本号

### dependencies
要使用的依赖，数组类型，其中每一项都是其他模块名称，处理模块依赖时请不要出现循环依赖的情况，例如:  
module2 -> module1 -> module2

### npm

此项配置的内容和 `package.json` 完全一致，会将多个模块的配置合并到 `package.json` 中  

例如 `dependencies` 安装依赖，`scripts` 创建命令等

:::info
在新版本中将被移除，请使用模块的[`package.json`](#packagejson)文件配置这个内容
:::

## app.js

根据需要创建这个文件，入口文件需要默认导出一个对象，这个对象会用于一些生命周期的回调
```js
// 没有用到默认导出一个空对象
export default {}

// 根据需要使用回调
export default {
  // 启动配置 位于项目配置index.js文件中的option配置
  option: option => {
    console.log(option)
  },
  // useLaunch
  launch: () => {},
  // useShow
  show: () => { },
  // useHide
  hide: () => { },
  // useEffect
  effect: () => {}
}
```

对于一些模块需要初始化的内容也可以在此入口文件中执行

### option

用于回调用户配置中当前模块的配置内容，通常你可以通过`duxapp`导出的 `userConfig` 更快的获得模块参数

### launch

app 的 useLaunch

### show

app 的 useShow

### hide

app 的 useHide

### effect

app 的 useEffect

### app

如果你需要定制入口文件，入口文件的组件将会作为一个参数传入，你需要返回一个新的组件

## index.js

这个文件用于导出内容，例如duxui模块导出了模块定义的所有ui组件 导出后提供给其他模模块使用，使用方法如下  

```jsx
import { Avatar, Column, Row } form '@/duxui'
```

就像上面的依赖关系一样，请不要使用模块依赖项里面没有依赖的模块

## app.scss

定义模块全局样式，修改内容后需要重新启动编译工具才能生效

## package.json

内容和项目的 `package.json` 完全一致，会将多个模块的配置合并到项目的 `package.json` 中  

例如 `dependencies` 安装依赖，`scripts` 创建命令等

## index.html

如果是h5的项目可以自定义index.html，仅当作为入口模块时可用

## readme.md

模块自述文件，如果要发布模块，需要编辑这个文件

## changelog.md 
模块更新日志，这个文件的内容用于发布模块，应用商店会显示更新内容  ，如果要发布模块，需要编辑这个文件

例如：
```json md
# 1.0.51
## 初步兼容支付宝、抖音小程序
- 更新cli兼容支付宝、抖音
- 修改Header组件兼容
- 修改Layout组件兼容
- 修改全局样式兼容

## getLocationBase
将RN端的方法移动到RN端模块

## 全局样式
修复错误的全局样式

# V2023-12-02
## 发布说明

- 发布首个版本

```

## app.config.js

全局配置文件，会和默认的全局配置进行合并

参考[Taro 全局配置](https://nervjs.github.io/taro-docs/docs/app-config)

## babel.config.js

配置模块babel，配置会合并的babel中，某些第三方插件有要求配置babel，才能使用，就可以创建这个配置文件

## metro.config.js

RN编译工具配置文件，会合并到metro配置文件中，请参阅 [https://metrobundler.dev/docs/configuration](https://metrobundler.dev/docs/configuration)

## taro.config.js
Taro编译配置文件，会合并到 `config/index.js` 中  
`taro.config.prod.js`和`taro.config.dev.js`就分别是发布和调试模式的配置

参考[Taro 编译配置](https://nervjs.github.io/taro-docs/docs/config)

## config/route.js

路由详细文档请查看 [路由](route)

这个文件必须存在，配置当前模块的路由，即使当前模块没有页面也需要导出一个默认内容，他是这样导出的

```js
/**
 * login:是否需要登录
 * platform:支持的平台(weapp, h5, rn)不配置支持所有
 * subPackage:是否将其设置为分包
 * home: 是否是主页 是主页的页面将会被排在前面
 */
const config = {
  // 指定页面路径
  path: 'pages',
  // 跳转时打印跳转路径
  pages: {},
}

module.exports = config
```

:::info
这是一个node模块，需要使用 `module.exports` 导出
:::

## config/theme.js

主题详细文档请查看 [主题](theme)  

当前模块的默认主题配置，这是duxapp的主题配置导出的内容

```js
export default {
  primaryColor: '#337ab7', // 主色
  secondaryColor: '#5bc0de', // 辅色
  successColor: '#34a853',
  dangerColor: '#ea4335',
  warningColor: '#fbbc05',
  pageColor: '#fafbf8',
  // ... 其他
}
```

## config/themeToScss.js

主题详细文档请查看 [主题](theme)  

这个文件是将用户配置或者默认配置的主题，转换为scss变量，方便在scss中调用

## update/copy
这个文件夹下的内容会被复制到项目对应的文件夹下面

## update/copy.build.complete
在编译结束后，这个文件夹下的内容会被复制到项目对应的文件夹下面，例如小程序的 `code_obfuscation_config.json` 配置文件，用来配置文件加密的，你需要等待编译结束后，再把文件复制进去，否则，会被Taro的编译逻辑给删除

## update/rn.js

用来处理rn原生模块的脚本文件，详情请查看 [原生模块处理明细](/docs/course/rn/package-update)

## update/copy.rn

这个文件夹下的内容，在编译 RN 端的时候，会被复制到项目对应的文件夹下面

## update/harmony.js

用来处理鸿蒙端的脚本文件

## update/copy.harmony

这个文件夹下的内容，在编译鸿蒙端的时候，会被复制到项目对应的文件夹下面

## pages

通常用来放当前模块的页面

## components

通常用来放当前模块的组件

## utils

通常用来放当前模块的工具库