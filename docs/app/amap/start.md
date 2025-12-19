# 开始

高德地图组件（RN）。

:::caution
旧的 `react-native-amap` 已弃用，本文档已调整为 `expo-gaode-map`（duxapp 模块）实现。
:::

## 安装

```bash
yarn duxapp app add expo-gaode-map
```

## 使用

### 1. 初始化 SDK（推荐做法）

`expo-gaode-map` 支持通过 JS 主动初始化 SDK（适合 duxapp 的 RN 打包流程），你只需要在 App 启动时调用一次即可。

```js
import ExpoGaodeMapModule from 'expo-gaode-map'

ExpoGaodeMapModule.initSDK({
  androidKey: '你的 Android Key',
  iosKey: '你的 iOS Key',
  // webKey: '可选：Web API Key（仅在使用 expo-gaode-map-web-api 时需要）'
})
```

### 2. 渲染地图

```jsx
import { useEffect, useRef } from 'react'
import { View } from '@tarojs/components'
import ExpoGaodeMapModule, { MapView, Marker } from 'expo-gaode-map'

export default function AMapExample() {

  const mapRef = useRef(null)

  useEffect(() => {
    ExpoGaodeMapModule.initSDK({
      androidKey: '你的 Android Key',
      iosKey: '你的 iOS Key',
    })
  }, [])

  return <View style={{ flex: 1 }}>
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      myLocationEnabled
      initialCameraPosition={{
        target: { latitude: 39.909187, longitude: 116.397451 },
        zoom: 14,
      }}
    >
      <Marker
        position={{ latitude: 39.909187, longitude: 116.397451 }}
        title='天安门'
      />
    </MapView>
  </View>
}
```

### 3. 定位权限（按需）

如果你开启了 `myLocationEnabled` 或使用定位相关 API，需要在运行时请求位置权限：

```js
import ExpoGaodeMapModule from 'expo-gaode-map'

const status = await ExpoGaodeMapModule.requestLocationPermission()
if (!status.granted) {
  // 可提示用户并引导到设置页
  // ExpoGaodeMapModule.openAppSettings()
}
```

:::info
更多能力（覆盖物、离线地图、权限工具等）请参考 `expo-gaode-map` 的导出 API：`MapView`、`Marker/Polyline/Polygon/Circle/HeatMap/Cluster`、`OfflineMapManager`、`PermissionUtils` 等。
:::
