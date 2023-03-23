# 地图(Map)

Map 组件是一个基于 Taro 框架封装的地图组件，可以用于显示地图、标记点、路线等。

## 使用方法

引入 Map 组件：

```jsx
import { Map } from '@/components/Map';

// 使用 Map 组件
<Map
  center={[116.397428, 39.90923]}
  zoom={16}
  markers={[{id: 1, longitude: 116.397428, latitude: 39.90923, iconPath: 'path/to/icon.png'}]}
  onMarkerClick={({ item, index }) => console.log(`Marker ${index + 1} clicked:`, item)}
  onMoveEnd={({ center }) => console.log(`Map center is now:`, center)}
/>
```

## Props

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| onMoveEnd | function | - | 否 | 移动结束后的回调函数，参数为 `{ center: [longitude, latitude] }` |
| center | array | - | 是 | 地图的中心点坐标，为数组 `[longitude, latitude]` |
| zoom | number | 18 | 否 | 地图缩放等级 |
| markers | array | [] | 否 | 标记点数组，具体格式参见下方的 `marker` 属性 |
| circles | array | [] | 否 | 圆形覆盖物数组，具体格式参见下方的 `circle` 属性 |
| polylines | array | [] | 否 | 折线数组，具体格式参见下方的 `polyline` 属性 |
| polygons | array | [] | 否 | 多边形数组，具体格式参见下方的 `polygon` 属性 |
| onMarkerClick | function | - | 否 | 点击标记点的回调函数，参数为 `{ item: marker, index: number }` |

`marker` 属性：

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| id | string | - | 是 | 标记点唯一 id |
| latitude | number | - | 是 | 纬度 |
| longitude | number | - | 是 | 经度 |
| title | string | '' | 否 | 标题 |
| iconPath | string | - | 否 | 图标路径 |
| width | number | - | 否 | 图标宽度 |
| height | number | - | 否 | 图标高度 |
| callout | object | - | 否 | 自定义标记点上方的气泡窗口，具体格式参见 Taro 官方文档 |
| label | object | - | 否 | 自定义标记点的文本标签，具体格式参见 Taro 官方文档 |

`circle` 属性：

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| id | string | - | 是 | 圆形覆盖物唯一 id |
| latitude | number | - | 是 | 中心点纬度 |
| longitude | number | - | 是 | 中心点经度 |
| radius | number | - | 是 | 半径 |
| strokeWidth | number | - | 否 | 边框线宽度 |
| strokeColor | string | - | 否 | 边框线颜色 |
| fillColor | string | - | 否 | 填充颜色 |

`polyline` 属性：

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| points | array | - | 是 | 坐标数组，每个元素为一个对象 `{ longitude: number, latitude: number }` |
| strokeWidth | number | - | 否 | 边框线宽度 |
| strokeColor | string | - | 否 | 边框线颜色 |
| dottedLine | boolean

`polygon` 属性：


| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| points | Array | - | 多边形坐标点集合，格式为`[{latitude, longitude}]`，最少2个点 |
| zIndex | Number | 1 | 层级 |
| strokeWidth | Number | 1 | 边框宽度 |
| strokeColor | String | '#0066FF' | 边框颜色 |
| fillColor | String | '#0066FF66' | 填充颜色 |
| visible | Boolean | true | 是否可见 |
