---
sidebar_position: 8
---

# 多语言（lang）

基础模块提供了全局多语言系统 `lang`，并支持按“模块名”划分命名空间（避免不同模块的 key 冲突）。

多语言推荐使用“语言包文件约定 + CLI 自动加载”的方式接入：语言包文件名就是语言标识（如 `zh` / `zhHant` / `en`），CLI 会根据 `option.duxapp.lang.langs` 自动加载这些语言包。

## 1. 配置语言

在用户配置中配置 `option.duxapp.lang`：

```js
export default {
  option: {
    duxapp: {
      lang: {
        // 默认语言：zh / zhHant / en ...
        default: 'zh',
        // 兜底语言
        fallback: 'zh',
        // 首次启动：未保存语言时是否按设备语言自动选择（需在 langs 内）
        autoDetect: true,
        // 允许的语言列表（用于语言选择器等）
        langs: ['zh', 'zhHant', 'en']
      }
    }
  }
}
```

内置支持并已做过语言归一化处理的标识（推荐使用这些值）：

- `zh`：简体中文
- `zhHant`：繁体中文
- `en`：英语
- `ja`：日语
- `ko`：韩语
- `ru`：俄语
- `fr`：法语
- `de`：德语
- `es`：西班牙语
- `pt`：葡萄牙语
- `it`：意大利语
- `ar`：阿拉伯语
- `th`：泰语
- `vi`：越南语
- `id`：印尼语
- `ms`：马来语
- `tr`：土耳其语
- `hi`：印地语

`langs` 的作用：

- 用于语言选择器等 UI 的可选项
- CLI 会自动加载该列表内的语言包文件（各模块的 `config/langs/<lang>.js`）

## 2. 定义语言包文件（推荐）

每个模块在自身目录下创建 `config/langs` 文件夹，按语言标识创建文件：

```
<moduleRoot>/config/langs/zh.js
<moduleRoot>/config/langs/zhHant.js
<moduleRoot>/config/langs/en.js
```

文件默认导出对象即可，例如 `config/langs/zh.js`：

```js
export default {
  common: {
    cancel: '取消'
  }
}
```

当 CLI 根据 `langs: ['zh','zhHant','en']` 自动加载时，会把这些内容注入到该模块对应的语言命名空间（模块名与 `app.json` 的 `name` 一致）。

## 3. 在模块内创建命名空间

推荐在模块下新建 `utils/lang.js`：

```js
import { lang } from '@/duxapp/utils'

export const myModuleLang = lang.module('myModule')

// 当你采用 config/langs/<lang>.js 并启用 CLI 自动加载时，这里无需再 add/addMany
```

## 4. 在组件中使用

在 React 组件中建议使用 `useT()`：

```jsx
import { myModuleLang } from '../utils/lang'

export default function Page() {
  const t = myModuleLang.useT()
  return <Text>{t('common.title')}</Text>
}
```

在非 Hook 环境下可以直接调用 `t()`：

```js
myModuleLang.t('common.title')
```

## 5. 切换语言

```js
import { lang } from '@/duxapp/utils'

lang.setLang('en')
```

语言选择器可以使用 `lang.useLangs()` / `lang.useLang()` 获取当前语言与可选列表。
