---
sidebar_position: 5
---

# 原生模块处理明细

模块处理用来处理三方插件，很多三方插件需要对原生模块代码或者配置进行修改才能使用，如微信、支付宝、codepush、高德地图等，这个文档将详细介绍模块处理的功能  

每个模块都可用拥有自己的三方模块处理，模块下 `update/rn.js`，就是当前模块的处理文件，这个文件是node模块文件，需要用`module.exports`进行导出

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

## insert 插入

使用预埋点插入内容，insert预埋点详见[内容添加预埋点](embedded#内容添加-insert)  

例如要给安卓添加一个实现gif图显示的依赖

```js
module.exports = () => {
  return {
    insert: {
      'android/app/build.gradle': {
        dependencies: `    implementation 'com.facebook.fresco:animated-gif:2.5.0'`
      }
    }
  }
}
```

在insert中每个key表示文件路径，value表示插入的预埋点的集合，上面的就表示在 `dependencies` 预埋点插入内容，可以同时在多个预埋点插入内容

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

## replace 替换内容

用于替换一些关键配置，这个项目一般使用不会很多，只有一些特殊第三方模块中需要使用
```

## android 安卓端处理

当前安卓端的处理只有xml一个选项

### xml 合并/创建xml

- xml.file.document  
用于添加到文件顶层，用于创建一个新的xml文件，document选项只有一个子元素`child`，使用此选项时，请不要使用其他选项

- xml.file.tag  
通过标签名称查找，如果存在多个同名的标签，只会查找到第一个

- xml.file.attr  
通过属性进行查找，在`AndroidManifest.xml`，多数标签都有`android:name`属性，可以通过这个name查找到对应的标签

- xml.file.custom
如果无法满足需求，可以通过此配置自定义操作`xmldom`，传入一个函数，函数的参数是当前xml的`document`,不需要返回内容，查看[https://github.com/xmldom/xmldom](https://github.com/xmldom/xmldom)获得帮助  

详细使用方法请查看这个示例

```js
module.exports = () => {
  return {
    android: {
      xml: {
        'app/src/main/AndroidManifest.xml': {
          document: {
            child: '<tag>内容</tag>',
          },
          // 标签选择器
          tag: {
            // 找到标签为queries的标签
            queries: {
              // 添加子元素
              child: `<package android:name="com.baidu.BaiduMap" />
      <package android:name="com.autonavi.minimap" />`,
              // 添加标签属性，也可以用于覆盖、修改标签属性
              attr: {
                name: 'value'
              }
            }
          },
          // 属性选择器
          attr: {
            // 选择存在 android:name=".MainApplication" 的标签
            'android:name=".MainApplication"': {
              // 添加子元素
              child: ``
              // 修改属性
              attr: {
                'android:largeHeap': 'true'
              }
            }
          },
          custom: document => {
            // 选择一个标签设置属性
            // getElementByAttr方法是扩展方法，在文档上无法找到，仅此一个扩展方法
            const el = document.getElementByAttr('android:name=".MainApplication"')
            el.setAttribute('name', 'value')
          }
        }
      }
    }
  }
}
```

:::info
文件路径中不需要`android`
:::

## ios ios端处理

当前安卓端的处理只有plist一个选项，用于合并plist配置

### plist 配置合并

plist的处理比较简单，plist可以和JSON互相转换，只需要合并即可，所以plist的内容是以对象的方式配置的  
plist 现在仅支持配置 `duxapp/Info.plist` 和 `duxapp/duxapp.entitlements`，这两个文件的内容需要自行查看ios相关文档或者文件

```js
module.exports = () => {
  return {
    ios: {
      plist: {
        'duxapp/Info.plist': {
          NSAppTransportSecurity: {
            NSExceptionDomains: {
              localhost: {
                NSExceptionAllowsInsecureHTTPLoads: true
              }
            }
          },
          LSApplicationQueriesSchemes: ['iosamap', 'baidumap', 'qqmap']
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

这个并不是用于此脚本的，而是一个规定，模块文件夹下 `update/copy.rn` 里面的内容会被原样复制到项目中

例如 `update/copy.rn/android/app/libs/push-3.0.0.aar` 这个文件，在编译安卓的时候，他就会被放在 安卓工程的这个位置：`android/app/libs/push-3.0.0.aar`

再结合 `insert` 将这个aar包，导入到项目中

内容复制可以放任何文件类型，按照目录复制到对应位置
