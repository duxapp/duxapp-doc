---
sidebar_position: 4
---

# 权限管理

在华为等应用市场中，申请安卓权限的时候，他需要你给用户提示申请权限的用途，否则它不会让你上架，这里封装了安卓权限申请，弹出申请说明的方法

申请保存媒体文件的权限

```js
import { requestPermissionMessage } from '@/duxappReactNative'

await requestPermissionMessage(requestPermissionMessage.types.saveMedia)
```

默认有下面这些types

```js
requestPermissionMessage.types = {
  camera: {
    type: 'camera',
    name: '相机',
    message: '用于更换头像、反馈问题拍照等用途',
    permission: [PermissionsAndroid.PERMISSIONS.CAMERA]
  },
  audio: {
    type: 'audio',
    name: '麦克风',
    message: '用户录制音频内容供系统使用',
    permission: [PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]
  },
  image: {
    type: 'image',
    name: '相机或相册',
    message: '用于更换头像、反馈问题拍照等用途',
    permission: [PermissionsAndroid.PERMISSIONS.CAMERA, 'android.permission.READ_MEDIA_IMAGES']
  },
  video: {
    type: 'video',
    name: '相机或相册',
    message: '用于更换头像、反馈问题录制等用途',
    permission: [PermissionsAndroid.PERMISSIONS.CAMERA, 'android.permission.READ_MEDIA_VIDEO']
  },
  location: {
    type: 'location',
    name: '位置信息',
    message: '用于定位您的位置，展示附近推荐',
    permission: [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION]
  },
  saveMedia: {
    type: 'saveMedia',
    name: '相册写入',
    message: '用于保存用户头像，推广海报等用途',
    permission: [PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES, PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO]
  }
}
```

## 自定义权限描述

如果默认的message不符合你的使用场景，可以通过第二个参数传入

```js
import { requestPermissionMessage } from '@/duxappReactNative'

await requestPermissionMessage(requestPermissionMessage.types.saveMedia, '用于将推广海报保存到相册')
```

## 权限配置

可以通过用户配置配置要出的权限获取描述信息，这个优先级低于 `requestPermissionMessage` 的第二个参数

`option.duxappReactNative.permissions`

```js
{
  saveMedia: '将商品图片保存到相册',
  // ... 其他描述
}
```