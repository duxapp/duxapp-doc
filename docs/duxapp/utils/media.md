---
sidebar_position: 2
---

# 媒体选择

封装的兼容多端的媒体选择方法以及中间件功能

## chooseMedia(type, option)

从相册或者相机选择图片或者视频，或者二者同时选择

| 参数名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| type | image \| video \| all | 否 | image | 选择类型 |
| option | GetMediaOption | 否 |  | 选择参数 |

GetMediaOption 参数说明

| 属性名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| count | number | 否 | 1 | 选择图片的数量，传入大于1的值就会开启多选 |
| sourceType | album \| camera \| user \| environment \[\] | 否 | \['album'\, 'camera'] | 选择来源，由这些字段组成的数组，后两个是浏览器属性. album: 相册 camera: 相机 |
| sizeType | original \| compressed \[\] | 否 | \['original'\, 'compressed'] | 压缩图片的属性，如果连个同时存在，表示的是用户可以自行选择原图还是压缩图(仅小程序端生效)，其他端，仅值为 \['compressed'\] 时压缩会生效. original: 原图 compressed: 压缩图 |
| maxDuration | number | 否 | 10 | 拍摄的最大时长，小程序最大支持60秒 |
| camera | back \| front | 否 | back | 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头. back: 使用后置摄像头 front: 使用前置摄像头 |

关于 sizeType 在RN端默认是不会生效的，使用 [duxappCompress](/docs/app/duxappCompress/start) 模块可以添加RN端视频、图片压缩的支持

异步返回文件列表，返回值 File[] 一个数组，即使只选择一个也是一个数组，其元素的属 File 性如下

| 属性名称 | 类型 |  说明 |
| ---- | ---- | ------- |
| path | string | 本地文件路径 对于H5端是一个base64 |
| size | number | 文件大小 |
| type | image \| video | 文件类型 |
| mime | string | 媒体类型，例如: image/png |
| width | number | 视频宽度 |
| height | number | 视频高度 |
| duration | number | 视频时长(毫秒) |

```js
const files = await chooseMedia('all')
```

## chooseMediaMiddle(callback, sort)

给媒体选择结果添加文件处理中间件

| 参数名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| callback | (files: File[], option: GetMediaOption) => Files \| Promise\<Files\> | 是 | | 中间件函数，参数见上面的类型 |
| sort | number | 否 | 0 | 中间件排序，数字越小越先执行 |


```js
chooseMediaMiddle((files, option) => {

  // 返回处理后的本地文件
  return files
})
```

:::info
为什么新增了这个中间件？  
这主要是为了给上传文件 upload 函数使用的，在用户选择文件后进行压缩处理，上面提到的 duxappCompress 模块就是用这个中间件实现压缩功能的
:::
