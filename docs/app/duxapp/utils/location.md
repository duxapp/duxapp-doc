---
sidebar_position: 4
---

# 地理位置

这里集成了一些经纬度转换、获取定位的方法，这些方法都从duxapp模块导入

坐标系说明
- WGS-84 GPS坐标
- GCJ-02 火星坐标
- BD-09 百度坐标

## 方法

### getLocationBase(enableHighAccuracy)

获取经纬度地址

小程序上需要通过配置开启`getLocation`方法的使用

h5上需要使用https访问才能获取

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| enableHighAccuracy | boolean | 否 | false | 是否通过gps获取提高精度，开启后如果在室内，可能导致获取失败 |

### distance(latA, lonA, latB, lonB)

计算两个经纬度之间的距离(米)

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| latA | number | 是 |  | 地点1纬度 |
| lonA | number | 是 |  | 地点1经度 |
| latB | number | 是 |  | 地点2纬度 |
| lonB | number | 是 |  | 地点2经度 |

### gcjEncrypt(wgsLat, wgsLon)

WGS-84 to GCJ-02

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| wgsLat | number | 是 |  | 纬度 |
| wgsLon | number | 是 |  | 经度 |

### gcjEncrypt(gcjLat, gcjLon)

GCJ-02 to WGS-84

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| gcjLat | number | 是 |  | 纬度 |
| gcjLon | number | 是 |  | 经度 |

### gcjDecryptExact(gcjLat, gcjLon)

GCJ-02 to WGS-84 更准确的方法

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| gcjLat | number | 是 |  | 纬度 |
| gcjLon | number | 是 |  | 经度 |

### bdEncrypt(gcjLat, gcjLon)

GCJ-02 to BD-09

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| gcjLat | number | 是 |  | 纬度 |
| gcjLon | number | 是 |  | 经度 |

### bdEncrypt(bdLat, bdLon)

BD-09 to GCJ-02

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| bdLat | number | 是 |  | 纬度 |
| bdLon | number | 是 |  | 经度 |