---
sidebar_position: 1
---

# 快速入门

duxapp是一套基于Taro的模块化开发架构，每一个项目就是一个模块，且兼容多端开发，极大节省开发时间。

## 搭建环境

需要安装以下工具环境，才能正常进行duxapp的开发

- nodejs 20+
- git命令行工具
- yarn

## 初始化一个项目

```bash
npx duxapp-cli create projectName
```

`projectName` 是项目名称，项目初始化后将会自动安装依赖，安装完成就可以打开项目进行开发了，命令执行过程中，你可以选择你需要的模板，当前提供了以下模板选择

- 基础模板(仅包含基础duxapp模块)
- 移动端页面编辑器(编辑器示例代码模块)
- cms商城(单用户商城模块)
- duxui 示例代码(包含所有组件的示例代码)

## 运行

安装完成后，根据选择的不同模板，命令行将会提示不同的运行命令，下面的是运行基础模块的命令

```bash
# 运行小程序
yarn dev:weapp --app=duxapp
# 运行H5
yarn dev:h5 --app=duxapp
```
运行命令是再Taro的基础上加了 `--app=模块` 参数，用来指定要运行的模块，模块位于 `src` 目录下，每个文件夹就是一个模块，初始化后，只有`duxapp`一个模块

## 快速使用已发布的模块

如果你上面初始化命令选择的是基础模板，则里面仅有duxapp模块，这个模块只有一些基础组件或者函数，并不是很好的示例，那么你，你可以安装`duxuiExample`模块，这个模块是UI库的示例代码。

```bash
yarn duxapp app add duxuiExample
```

安装后执行命令启动`duxuiExample` 这个模块  

:::info
首次执行此命令会要求登录，如果你没有账号，请前往[duxcms](https://www.dux.cn/)注册，登录仅用作模块的安装和发布
:::

```bash
# 运行小程序
yarn dev:weapp --app=duxuiExample
# 运行H5
yarn dev:h5 --app=duxuiExample
```

## 创建新的模块

当你有新项目或者新模块的时候，就执行创建命令创建一个模块，`moduleName`为模块标识，也就是文件夹名称

```bash
yarn duxapp app create moduleName 模块介绍
```
创建新模块之后，需要配置 `src\moduleName\config\route.js`，配置的目的是将index页面指定为首页

```js
const config = {
  path: 'pages',
  pages: {
    'moduleName/index': {
      pages: {
        index: {
          // 添加这个配置
          home: true
        },
      },
    },
  },
  /**
   * 路由转换，当跳转到左侧路由时，实际上跳转的是右侧的路由
   *
   * 右侧是字符串则全局匹配
   * {
   *  mode: 'start', // start匹配路由的开始部分
   *  page: ''
   * }
   */
  transfer: {},
}

module.exports = config
```
配置保存之后，使用命令启动新模块  
注意：请勿将此文件导出方式改为 `export default`

```bash
# 运行小程序
yarn dev:weapp --app=moduleName
# 运行H5
yarn dev:h5 --app=moduleName
```

默认配置下所有页面文件放在 `src/moduleName/pages` 文件夹下，默认的index页面在`src\moduleName\pages\index\index.jsx`  
你可以尝试修改此文件的内容，首页即可发生改变

```jsx
import { View } from '@tarojs/components'
import { Header, ScrollView, TopView } from '@/duxapp'

import './index.scss'

export default function NewApp() {
  return (
    <TopView>
      <Header title='moduleName' titleCenter />
      <ScrollView>
        <View className='new-app__title'>欢迎使用duxapp</View>
        <View className='new-app__p'>新创建的模块默认依赖于duxapp模块</View>
        <View className='new-app__p'>
          如果需要依赖于其他的模块请在app.json中修改依赖项, 并且使用 yarn duxapp
          app add 添加该依赖
        </View>
      </ScrollView>
    </TopView>
  )
}
```
此文件默认内容，需要注意到 `import { Header, ScrollView, TopView } from '@/duxapp'` 中的 `@/duxapp`导入位置，以`@/`开头的导入位置就就指向一模块所在的文件夹，`@/duxapp` 就代表从 `duxapp` 模块导入，这个模块是所有模块的基础模块，有关此模块导出的组件和方法，请查看 [duxapp模块](/docs/category/基础模块duxapp)。

## 创建一个页面

如上所述，模块的页面文件位于 `pages` 文件夹下，在pages下新建一个文件夹 `mall`,在此文件夹下新增文件 `index.jsx`，内容如下

```jsx
import { View } from '@tarojs/components'
import { Header, ScrollView, TopView } from '@/duxapp'

export default function Mall() {
  return (
    <TopView>
      <Header title='商城首页' titleCenter />
      <ScrollView>
        <View className='new-app__title'>新页面</View>
      </ScrollView>
    </TopView>
  )
}
```

然后在路由配置文 `src\moduleName\config\route.js` 件中新增路由

```js
/**
 * login:是否需要登录
 * platform:支持的平台(weapp, h5, rn)不配置支持所有
 * subPackage:是否将其设置为分包
 * home: 是否是主页 是主页的页面将会被排在前面
 */
const config = {
  path: 'pages',
  pages: {
    'moduleName/index': {
      pages: {
        index: {
          home: true
        },
      },
    },
    // 新增此处
    'moduleName/mall': {
      pages: {
        index: {},
      },
    },
  },
  /**
   * 路由转换，当跳转到左侧路由时，实际上跳转的是右侧的路由
   *
   * 右侧是字符串则全局匹配
   * {
   *  mode: 'start', // start匹配路由的开始部分
   *  page: ''
   * }
   */
  transfer: {},
}

module.exports = config

```
注意此处的index里面不需要指定 `home: true` ，一个项目只需要一个主页  

然后修改首页为
```jsx
import { View } from '@tarojs/components'
// 导入nav 此方法是路由跳转方法
import { Header, ScrollView, TopView, nav } from '@/duxapp'

import './index.scss'

export default function NewApp() {
  return (
    <TopView>
      <Header title='moduleName' titleCenter />
      <ScrollView>
        <View className='new-app__title'>欢迎使用duxapp</View>
        <View className='new-app__p'>新创建的模块默认依赖于duxapp模块</View>
        <View className='new-app__p'>
          如果需要依赖于其他的模块请在app.json中修改依赖项, 并且使用 yarn duxapp
          app add 添加该依赖
        </View>
        {/** 点击事件里面执行跳转 */}
        <View onClick={() => nav('moduleName/mall/index')}>跳转到商城首页</View>
      </ScrollView>
    </TopView>
  )
}

```
至此一个新页面就创建成功了，有些需要注意的点：

- 一个页面最外层都需要使用 `TopView` 组件，并且一个页面上只能存在一个 `TopView` 组件，这和路由的实现和全局弹窗有关系
- 路由方法都需要是用 `nav` 或者 `route`，两个是相同方法的不同表现形式

## 使用其他模块

上面已经完成了页面的创建，如果你想使用其他模块，比如 `duxui` ，这个模块提供了大量的实用组件，能快速帮助你构建页面和组件  

如果你的模块里面没有 `duxui` 模块，先执行命令进行安装
```bash
yarn duxapp app add duxui
```
安装成功之后修改模块配置文件 `src/moduleName/app.json`，将 `duxui` 添加到 `dependencies` 里面
```json
{
  "name": "moduleName",
  "description": "模块介绍",
  "version": "1.0.0",
  "dependencies": [
    "duxapp",
    "duxui"
  ]
}

```

然后执行启动命令(修改此属性之后，如果你的命令行正在运行，需要重新启动命令)

```bash
# 运行小程序
yarn dev:weapp --app=moduleName
# 运行H5
yarn dev:h5 --app=moduleName
```

然后就能使用 `duxui` 提供的组件了，修改上面新建的页面内容如下

```jsx
import { Header, ScrollView, TopView, Column, Row, Text, Space } from '@/duxui'

export default function Mall() {
  return (
    <TopView>
      <Header title='商城首页' titleCenter />
      <ScrollView>
        <Space>
          <Column items='center'>
            <Text>内容1</Text>
            <Text>内容2</Text>
            <Text>内容3</Text>
          </Column>
          <Row items='center' justify='between'>
            <Text>内容1</Text>
            <Text>内容2</Text>
            <Text>内容3</Text>
          </Row>
        </Space>
      </ScrollView>
    </TopView>
  )
}
```
有关 `duxui` 导出的组件 请查看 [duxui](/docs/category/ui库duxui)，duxui的所有示例代码，在上面提到，请安装 `duxuiExample` 模块查看

## 使用自定义配置

创建模块后可以给模块做自定义的配置，在 `configs` 目录下创建一个和模块同名文件夹 `moduleName`，文件夹里面创建 `index.js` 内容如下

```js
const config = {
  // 对于默认不开启的页面 配置在此处将开启这些页面
  openPages: [

  ],
  // 不需要的页面可以配置路径禁用
  disablePages: [

  ],
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
        primaryColor: '#3162C9',
        secondaryColor: '#F27B1F',
        successColor: '#34a853',
        warningColor: '#fbbc05',
        dangerColor: '#ea4335',
        pageColor: '#f8f9fa',

        textColor1: '#373D52',
        textColor2: '#73778E',
        textColor3: '#A1A6B6',
        textColor4: '#FFF',
      },
    },
    moduleName: {
      custom: '模块自定义配置'
    }
  }
}

export default config

```
创建配置文件后重启运行命令，将会使用你新创建的配置执行，其中 `option` 字段下的配置是每个模块的配置，你也可以为你的模块创建一个字段  

`duxapp` 配置下的 `theme` 就是全局主题颜色配置

```bash
# 运行小程序
yarn dev:weapp --app=moduleName
# 运行H5
yarn dev:h5 --app=moduleName
```

上述配置中的模块的配置 `option.moduleName` 可以从模块入口文件 `src\moduleName\app.js` 中获得，如下

```js
export default {
  option: option => {
    // option对应着 option.moduleName
    console.log(option.custom) // 输出 模块自定义配置
  }
}

```

也可以通过 `duxapp` 模块导出的 `userConfig` 变量获取整个配置的内容

```js
import { userConfig } from '@/duxapp'

console.log(userConfig.option)
```

## 完结


恭喜，至此你已经入门了！  

上面只提到了小程序和h5，如果你想继续了解ReactNative，请查看[ReactNative快速开始](/docs/course/rn/start)

你还可以继续查看：
- [模块路由](/docs/course/app/route)
- [模块配置文件](/docs/course/app/directory#appjson)
- [使用全局样式](/docs/course/app/directory#appscss)
- [入口文件](/docs/course/app/directory#appjs)
- [出口文件](/docs/course/app/directory#indexjs)
- [模块主题](/docs/course/app/theme)
- [模块npm依赖](/docs/course/app/directory#npm)
- [模块管理](/docs/course/app/manage)