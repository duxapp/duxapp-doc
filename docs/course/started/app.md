---
sidebar_position: 2
---

# 模块介绍

模块作为本架构的基础，非常重要的内容，模块之间还有相互依赖关系，src目录下的每个文件夹即是一个模块

## 项目目录结构
```
├── config                          Taro项目配置文件
├── configs                         项目配置文件夹
│   ├── projectName                 配置名称
│   │   ├── copy                    兼容文件里面的所有文件将原样复制到项目根目录下
│   │   │   └── ...                 要复制的文件
│   │   ├── index.js                配置文件
│   │   └── duxapp.js               其他配置文件 主要集中在RN端的打包配置
│   └── ...                         其他项目配置文件
├── src                             模块目录
│   ├── duxapp                      模块
│   │   ├── components              模块组件库
│   │   │   ├── ComponentName       组件
│   │   │   │   └── index.jsx
│   │   │   └── index.js            导出需要导出的组件
│   │   ├── config                  配置目录
│   │   │   ├── route.js            路由配置文件
│   │   │   ├── theme.js            主题配置文件（可选）
│   │   │   └── themeToScss.js      主题转换函数
│   │   ├── pages                   页面防止文件
│   │   │   └── index               页面文件夹
│   │   │       ├── index.jsx       页面
│   │   │       └── index.scss
│   │   ├── utils                   工具库
│   │   │   ├── index.js            导出工具库
│   │   │   └── ...youutil.js
│   │   ├── update                  模块安装目录
│   │   │   ├── copy                需要复制到项目的文件
│   │   │   │   └── ...             
│   │   │   └── index.js            安装脚本 主要针对RN端 插件安装方法
│   │   ├── app.js                  模块入口文件
│   │   ├── app.json                模块配置文件 包括名称 依赖等
│   │   ├── app.scss                全局样式文件（次样式文件无需导入到js文件中，会自动注入全局）
│   │   ├── changelog.md            更新日志
│   │   ├── index.js                模块出口文件 可以导出组件和方法给其他模块使用
│   │   └── readme.md               自述文件
│   └── ...                         其他模块
├─ package.json                     npm配置文件 请勿修改 通过命令行自动生成
└─ ...                              其他项目文件 请勿修改 在升级app时将会被覆盖
```

## 模块注意事项
- 模块的依赖关系非常有用，可以在打包的时候自动寻找需要的模块，也可以在安装模块的时候自动寻找需要的模块
- 模块依赖请勿循环依赖 例如 A->B->A，或者A->B->C->A
- 如果A模块依赖于B模块，则可以在A模块中放心的导入B模块的组件和函数，反之没有依赖的模块不要导入他的任何东西，否则打包将会报错
- 一般来说新的模块至少需要依赖于base模块，因为base模块里面包含了很多基础工具和函数

## 模块命令

```bash
# 安装、更新模块
yarn duxapp app add 模块名称
# 创建模块
yarn duxapp app create 模块名称
# 发布模块
yarn duxapp app publish 模块名称
```

## 入口文件

app.js是每个模块的入口文件，这个文件将会被默认执行，此文件需要导出一个默认对象，如下

```js
// 可以在此处执行一些要初始化的东西

export default {
  // 启动配置 位于项目配置index.js文件中的option配置
  option: option => {
    console.log(option)
  },
  // useLaunch
  launch: () => {
    
  },
  // useShow
  show: () => { },
  // useHide
  hide: () => { },
  // useEffect
  effect: () => {
   
  }
}
```