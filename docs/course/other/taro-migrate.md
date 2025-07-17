---
sidebar_position: 1
---

# 从Taro项目迁移

duxapp是基于Taro二次开发的框架，Taro的项目经过一些简单的处理，就能运行在duxapp中。

## 基础迁移

duxapp 一个模块化的开发框架，你的Taro项目迁移到duxapp框架中，就是作为一个模块的形式存在的，迁移时你需要做的操作有下面这些

- 在duxapp项目中创建一个新模块
- 将你项目`src`文件夹下的所有内容复制到新创建的模块中
- 修改`config/route.js`，将你项目的路由进行重新定义
- 修改组件、函数的导入位置
- 修改项目依赖
- 其他配置文件、全局样式等的修改

下面来详细描述怎么完成这些步骤的操作

### 创建项目

使用命令 `yarn duxapp app create myproject 我的duxapp项目` 创建一个新模块，注意将 `myproject` 和描述修改为你的实际名称

创建后移除默认的 `components` `pages` `utils` `index.js` 这几个文件和文件夹，仅保留 `config` `app.json` 这两个文件和文件夹

### 复制项目文件

将你项目src下的所有文件和文件夹复制到新创建的模块文件夹`myproject`内

### 修改路由

相对于你之前的项目来说，因为duxapp是多模块设计，你迁移之后，所有页面的路由将会发生变化，例如：  

`pages/index/index` 修改之后页面路径将会变成 `myproject/pages/index/index`

编辑 `config/route.js` 路由配置文件

假设你之前有这些页面:

- pages/index/index 这是首页
- pages/index/join
- pages/mall/list
- pages/mall/detail
- pages/mall/comment

那么这个配置文件应该像下面这样

```js
/**
 * platform:支持的平台(weapp, h5, rn)不配置支持所有
 * subPackage:是否将其设置为分包
 * home: 是否是主页 是主页的页面将会被排在前面
 */
export default {
  path: 'pages', // 你的所有页面存放的公共路径
  pages: {
    'myproject/index': {
      pages: {
        index: {
          // 创建的新模块的页面默认设置为首页，如果不需要可以删除这个配置
          home: true
        },
        join: {}
      },
    },
    'myproject/mall': {
      pages: {
        list: {},
        detail: {},
        comment: {}
      },
    }
  }
}
```

之后重要的一个步骤，你需要将你代码中的所有路由跳转中的路径修改为新的路径，你可以使用批量查找替换的方法进行修改，例如查找`pages/` 修改为 `myproject/pages/`

### 修改导入位置

如果你的导入位置基本都是使用相对路径导入的，那么这部分不需要修改，如果你配置了 `alias`，你的导入路径像这样的 `import xx from '@/components'`，那么这部分需要修改为新的路径，修改为像下面这样

`import xx from '@/myproject/components'`

一样你可以利用全局查找替换的方式进行

### 项目依赖

`package.json` 中你的第三方依赖需要添加到模块中，你可以先将项目的`package.json`直接复制到模块中

然后和对比 `duxapp/package.json` 把重复的依赖删除，仅保留多出来的依赖，把`name` `version` 移除，例如，除了Taro相关的依赖之外，你还使用了这些依赖

- react-dnd
- react-dnd-html5-backend 
- react-color
- react-syntax-highlighter

那么这个文件内容就应该是这样的

```json
{
  "dependencies": {
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "react-color": "^2.19.3",
    "react-syntax-highlighter": "^15.5.0"
  }
}
```

### 其他

- 全局样式

全局样式文件 `app.scss` 复制到模块之后将自动可用

- app.config.js

Taro的配置文件，你需要将其中的路由配置移除，使用模块的路由配置，其他的配置可以原样保留

- app.js

这个文件内的逻辑大部分都可以保留，你需要将他默认导出的组件进行移除，然后替换为默认导出一个对象

```js
// 保留你原有的逻辑

export default {}
```

如果你使用的入口组件的生命周期，那么你需要修改为下面这样，将你对应生命周期的逻辑移动到对应的回调函数中

```js
// 保留你原有的逻辑

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

- index.html

如果你的这个文件修改过，那么他默认也可以用，如果你没修改过，建议移除这个文件

- Taro编译配置

如果你定义过Taro的编译配置，将你定义的部分添加到 `taro.config.js` 中，具体参考 [taro.config.js](/docs/course/app/directory#taroconfigjs)

- babel.config.js

如果你有这个文件，直接将这个文件复制到模块中

### 开始运行

比如你之前兼容小程序，你可以运行命令

```bash
yarn dev:weapp --app=myproject
```

如果兼容H5，运行命令

```bash
yarn dev:h5 --app=myproject
```

运行之后再根据具体的报错进行进一步调试

## 全量迁移

duxapp中提供了很多基础组件和方法，例如 TopView(全局根组件)，route(路由方法，对路由进行了大量封装)，Header(头部导航组件)，duxui(丰富的多端兼容UI库)等，你可以继续查看文档获得更多支持