# 开始

集成极光推送RN端插件，通过配置参数，即可使用

## 安装

```bash
yarn duxapp app add jpush
```

## 使用

- 1、将模块添加到你的项目依赖中

- 2、创建应用

在极光官网创建app并注册，获取应用的 `AppKey`，将他配置在配置用户配置文件，和RN编译配置文件中

用户配置文件内容如下 `index.js` 
```js
// option.jpush
{
  // 是否自动初始化，会自动调用极光的初始化接口，这样就能收到消息
  autoInit: true,
  // AppKey
  key: 'ee41c0229b32316285476f09',
  // 通道（可以不配置）
  channel: 'duxapp'
}
```

RN编译配置文件内容如下 `duxapp.rn.js` 
```js
// option.jpush
{
  // AppKey
  key: 'ee41c0229b32316285476f09',
  // 通道（可以不配置）
  channel: 'duxapp'
}
```

## 其他

- [极光RN端开发文档](https://github.com/jpush/jpush-react-native/blob/master/index.js)

- [极光官网](https://www.jiguang.cn/console/)

- [ios证书设置指南](https://docs.jiguang.cn/jpush/client/iOS/ios_cer_guide#%E4%B8%A4%E7%A7%8D%E9%89%B4%E6%9D%83%E6%96%B9%E5%BC%8F%E7%9A%84%E9%85%8D%E7%BD%AE)

