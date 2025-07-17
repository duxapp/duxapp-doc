---
sidebar_position: 4
---

# 使用原生模块

## 基本模块

在开发RN是不可避免使用到原生模块，而大多数的原生模块集成进来都比较简单，例如duxui使用到的`react-native-view-shot` 和 `react-native-fast-shadow`只需要在模块的`package.json`中添加依赖  

添加依赖之后需要重新编译  
android: `yarn android --app=模块`  
ios: `yarn ios --app=模块`  

```json
{
  "dependencies": {
    "b-validate": "^1.5.3",
    "react-native-view-shot": "~3.8.0",
    "react-native-fast-shadow": "~0.1.1",
    "array-tree-filter": "^2.1.0"
  }
}
```

:::info
内容会完整的和`package.json`进行合并
:::

## 复杂模块
有的模块除了添加依赖项之外，还需要对原生的内容进行一些处理，比如说微信模块 `react-native-wechat-lib`

package.json
```json
{
  "dependencies": {
    "react-native-wechat-lib": "^3.0.4",
    "wechat-jssdk": "^5.1.0"
  }
}
```
根据文档，除了添加依赖以外，还需要进行下面这些操作  

安卓：
- 添加 proguard
- 新建 `WXEntryActivity.java` 用于回调处理
- 新建 `WXPayEntryActivity.java` 用于支付回调处理
- 添加 `<package android:name="com.tencent.mm" />` 用于跳转到微信的白名单
- 添加 `.wxapi.WXEntryActivity`
- 添加 `.wxapi.WXPayEntryActivity`

ios：  
- 由于插件bug，需要添加 pod 依赖项 `pod 'WechatOpenSDK'`
- 修改 `AppDelegate.h` 入口文件
- 修改 `AppDelegate.mm` 文件进行一些处理
- 在 `Info.plist` 添加 Schemes 和 BundleURLTypes 和 applinks
- 在项目配置中，添加 `UniversalLink`

其他：
- 通过patch修复当前版本的一个bug  

下面将一步一步的来实现这些修改，要实现这些修改，需要通过cli提供的模块处理功能，首先在模块新建一个文件夹 `update`，在文件夹下新建 `index.js`, 使用 `export default` 导出一个空对象

```js
export default {

}
```
:::info
文件路径是 `update/index.js`，cli会识别这个路径
:::

下面将使用insert预埋点功能将文档需要添加的内容添加到对应的文件，insert可以完成下面这些内容：

- 添加 proguard
- 由于插件bug，需要添加 pod 依赖项 `pod 'WechatOpenSDK'`
- 修改 `AppDelegate.h` 入口文件
- 修改 `AppDelegate.mm` 文件进行一些处理

```js
export default {
  insert: {
    'android/app/proguard-rules.pro': {
        'content': `
  ##### 微信 ######
  -keep class com.tencent.mm.opensdk.** { *; }
  -keep class com.tencent.wxop.** { *; }
  -keep class com.tencent.mm.sdk.** { *; }`
      },
      'ios/Podfile': {
        'podEnd': `  pod 'WechatOpenSDK'`
      },
      'ios/duxapp/AppDelegate.h': {
        import: '  #import "WXApi.h"',
        'appDelegate.protocol': '  ,WXApiDelegate'
      },
      'ios/duxapp/AppDelegate.mm': {
        import: '#import <React/RCTLinkingManager.h>',
        appDelegate: `// react-native-wechat-lib start

  - (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url {
      return  [WXApi handleOpenURL:url delegate:self];
  }

  - (BOOL)application:(UIApplication *)application
    continueUserActivity:(NSUserActivity *)userActivity
    restorationHandler:(void(^)(NSArray<id<UIUserActivityRestoring>> * __nullable
    restorableObjects))restorationHandler {
    // 触发回调方法
    [RCTLinkingManager application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
    return [WXApi handleOpenUniversalLink:userActivity
    delegate:self];
  }

  // Universal Links 配置文件, 没使用的话可以忽略。
  // ios 9.0+
  - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
              options:(NSDictionary<NSString*, id> *)options
  {
    // Triggers a callback event.
    // 触发回调事件
    [RCTLinkingManager application:application openURL:url options:options];
    return [WXApi handleOpenURL:url delegate:self];
  }
  // react-native-wechat-lib end`
      }
  }
}
```

下面使用文件创建功能创建两个回调所需的文件

- 新建 `WXEntryActivity.java` 用于回调处理
- 新建 `WXPayEntryActivity.java` 用于支付回调处理

因为按照要求，需要用到当前app的包名，所以需要将导出的内容修改为一个函数，函数传入的参数中，能获取到当前项目 `duxapp.rn.js` 中的配置，config字段就是这个配置，从中获取到appid，添加到文件对应位置
```js
export default ({ config }) => {
  const { android } = config
  return {
    // ...
    create: {
      'android/app/src/main/java/cn/duxapp/wxapi/WXEntryActivity.java': `package ${android.appid}.wxapi;

import android.app.Activity;
import android.os.Bundle;
import com.wechatlib.WeChatLibModule;

public class WXEntryActivity extends Activity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    WeChatLibModule.handleIntent(getIntent());
    finish();
  }
}
`,
      'android/app/src/main/java/cn/duxapp/wxapi/WXPayEntryActivity.java': `package ${android.appid}.wxapi;

import android.app.Activity;
import android.os.Bundle;
import com.wechatlib.WeChatLibModule;

public class WXPayEntryActivity extends Activity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    WeChatLibModule.handleIntent(getIntent());
    finish();
  }
}
`
    },
  }
}
```

:::info
所有安卓文件路径中的`cn/duxapp` 此文件夹路径都是固定的，可放心使用
:::

下面通过安卓的xml处理功能完成这些任务

- 添加 `<package android:name="com.tencent.mm" />` 用于跳转到微信的白名单
- 添加 `.wxapi.WXEntryActivity`
- 添加 `.wxapi.WXPayEntryActivity`

```js
export default ({ config }) => {
  const { android } = config
  return {
    // ...
    android: {
      xml: {
        'app/src/main/AndroidManifest.xml': {
          tag: {
            queries: {
              child: '<package android:name="com.tencent.mm" />'
            }
          },
          attr: {
            'android:name=".MainApplication"': {
              child: `<activity
                android:name=".wxapi.WXEntryActivity"
                android:label="@string/app_name"
                android:exported="true"
                android:taskAffinity="${android.appid}"
                android:launchMode="singleTask"
              />
              <activity
                android:name=".wxapi.WXPayEntryActivity"
                android:label="@string/app_name"
                android:exported="true"
              />`
            }
          }
        }
      }
    },
  }
}
```

:::info
此处的操作是通过 `xmldom` 操作实现的，其功能类似于 `jsdom`，可以把xml视为dom进行操作
- tag 标签查询器
- attr 属性查询器
:::

下面通过IOS的plist处理功能完成这些任务

- 在 `Info.plist` 添加 Schemes 和 BundleURLTypes 和 applinks

```js
export default ({ config }) => {
  const { android } = config
  return {
    // ...
    ios: {
      plist: {
        'duxapp/Info.plist': {
          CFBundleURLTypes: [
            {
              CFBundleTypeRole: 'Editor',
              CFBundleURLName: 'weixin',
              CFBundleURLSchemes: [
                option?.wechat?.appid || 'wx'
              ]
            }
          ],
          LSApplicationQueriesSchemes: ['weixin', 'wechat', 'weixinULAPI']
        },
        'duxapp/duxapp.entitlements': {
          'com.apple.developer.associated-domains': [
            `applinks:${option?.wechat?.applinks || 'duxapp.com'}`
          ]
        }
      }
    }
  }
}
```

可以看到这里读取了 `option.wechat` 中的两个配置，那么你也需要在配置对应位置添加上这些配置

:::info
需要注意的是在安卓或者ios配置下的文件路径，不需要添加android或者ios前缀
:::

由于当前版本的插件在运行时存在一个报错，需要通过`patch`修复这个错误  

在update文件夹下创建一个`copy`文件夹，此文件夹下的所有文件将会被复制到当前项目对应的位置下面  

在`copy`下创建 `patches` 文件夹，文件夹下创建文件 `react-native-wechat-lib+3.0.4.patch`  

整体文件路径看起来是这样的 `wechat/update/copy/patches/react-native-wechat-lib+3.0.4.patch`  

放入下面的内容

```patch
diff --git a/node_modules/react-native-wechat-lib/src/index.js b/node_modules/react-native-wechat-lib/src/index.js
index 3bb59a6..6ddb35e 100644
--- a/node_modules/react-native-wechat-lib/src/index.js
+++ b/node_modules/react-native-wechat-lib/src/index.js
@@ -4,11 +4,14 @@ import { DeviceEventEmitter, NativeModules, Platform } from 'react-native';
 import { EventEmitter } from 'events';

 let isAppRegistered = false;
-let { WeChat, WechatLib } = NativeModules;
+let { WeChat, WechatLib, RCTWeChat } = NativeModules;

 if (WeChat == null) {
   WeChat = WechatLib;
 }
+if (WeChat == null) {
+  WeChat = RCTWeChat;
+}

 // Event emitter to dispatch request and response from WeChat.
 const emitter = new EventEmitter();

```

到此整个模块的安装过程完成，重新编译app即可使用
