---
sidebar_position: 4
---

# 模块处理脚本

这个脚本可以用来合并一些鸿蒙相关的 JSON 配置文件，或者创建文件等功能 

每个模块都可用拥有自己的处理脚本，模块下 `update/harmony.js`，就是当前模块的处理文件，这个文件是node模块文件，需要用`module.exports`进行导出

```js
module.exports = {
  
}
```

当你需要用到当前的配置、或者打包的模块列表时，可以导出一个函数，从参数中获取到

```js
module.exports = ({ config, apps, configName }) => {
  return {

  }
}
```
- config 当前app的用户配置文件 详情参见 [用户配置](config)
- apps 一个数组表示当前被打包的模块列表
- configName 当前使用的用户配置的名称  

:::info
使用函数导出返回的对象和直接导出的对象内容相同
:::

下面将详细介绍此对象包含的内容

## create 创建

用于创建当前不存在的文件，之前原生模块中有用到，给微信创建了两个文件

```js
module.exports = () => {
  return {
    create: {
      '文件路径': '文件内容'
    }
  }
}
```

## json 合并JSON 配置文件

鸿蒙中的配置文件都是以 json5 的文件格式存在，在 duxapp 中这些文件都可以当做 json 文件处理

例如要添加一个网络权限，仅示例，这个权限默认已经添加

```js
module.exports = () => {
  return {
    json: {
      'entry/src/main/module.json5': {
        module: {
          requestPermissions: [
            {
              name: 'ohos.permission.INTERNET'
            }
          ]
        }
      }
    }
  }
}
```

:::info
文件路径中不需要`ios`
:::

## onStart

开始处理模板之前的执行回调

## onStop

模板处理完成后的回调

## 文件复制

这个并不是用于此脚本的，而是一个规定，模块文件夹下 `update/copy.harmony` 里面的内容会被原样复制到项目中，放在里面的文件路径不应该包含 `dist/harmony`
