---
sidebar_position: 8
---

# 多语言系统

基础库提供了全局多语言系统 `lang`，并支持按“模块名”划分命名空间，避免不同模块之间翻译 key 冲突。

该系统是“轻量方案”，不依赖 i18next，特点：

- 支持按模块（命名空间）隔离 key：同一个 key 在不同模块互不冲突
- 支持插值：`{{name}}`
- 支持回退语言：模块回退 > 全局回退 > key
- 推荐通过 “`config/langs/<lang>.js` + CLI 自动加载”接入（兼容小程序）

## 配置

在用户配置中配置 `option.duxapp.lang`：

```js
export default {
  option: {
    duxapp: {
      lang: {
        default: 'zh',
        fallback: 'zh',
        autoDetect: true,
        langs: ['zh', 'zhHant', 'en']
      }
    }
  }
}
```

语言码会被规范化处理，例如：`zh_CN` / `zh-cn` -> `zh`，`zh-HK` -> `zhHant`。

配置参数说明：

- `default` (`string`)：默认语言（会被归一化）
- `fallback` (`string`)：全局回退语言（会被归一化），未配置时等于 `default`
- `autoDetect` (`boolean`)：首次启动且本地未保存语言（`lang=null`）时，是否按设备语言自动选择（仅当归一化后的语言在 `langs` 内才会生效）
- `langs` (`string[]`)：允许语言列表（用于 UI 选择器，也用于 CLI 自动加载语言包）

## 内置语言标识（推荐）

内置支持并已做过语言归一化处理的标识如下（建议 `default/fallback/langs` 使用这些值）：

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
- CLI 会自动加载该列表内的语言包文件（各模块的 `config/langs/<lang>.js`），并注入到对应模块命名空间

## 语言包文件约定（推荐）

每个模块在自身目录下创建 `config/langs` 文件夹，按语言标识创建文件：

```
<moduleRoot>/config/langs/zh.js
<moduleRoot>/config/langs/zhHant.js
<moduleRoot>/config/langs/en.js
```

文件默认导出对象即可，例如（以基础模块 `duxapp` 为例）：

```js
export default {
  common: {
    loading: '请稍后',
    cancel: '取消'
  }
}
```

当配置 `option.duxapp.lang.langs: ['zh','zhHant','en']` 时，CLI 会自动导入并注册这些语言包，因此通常不需要你在运行时代码里手动 `add/addMany`。

## 小程序限制

小程序不支持动态 `import()` 的运行时懒加载（例如 `() => import('./en')`），因此：

- 不要使用 `addLoader` / `add` 传函数 的方式去做语言包懒加载
- 推荐把语言包做成静态文件：`config/langs/<lang>.js`，由 CLI 自动加载

## 导出

```js
import { lang, duxappLang } from '@/duxapp/utils'
```

- `lang`：全局语言管理器
- `duxappLang`：基础库内置命名空间（`duxapp`）

## API

## Types

### LangTOptions

`t()` 的选项对象结构：

| 字段 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| defaultValue | any | 否 | 找不到 key 时的默认值 |
| lang | string | 否 | 指定本次翻译使用的语言 |
| params | `object` | 否 | 插值参数（对应 `{{name}}`） |

### LangAddOptions

`add/addMany` 的选项对象结构：

| 字段 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| merge | boolean | 否 | true | 注入对象时是否深度合并 |
| eager | boolean | 否 | false | 注册 loader 后是否立即触发一次 `load` |

### lang.module(moduleName, options?)

创建/获取某个模块的语言命名空间，并返回一组便捷方法：

```js
import { lang } from '@/duxapp/utils'

export const myLang = lang.module('myModule')
```

参数：

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| moduleName | string | 是 | - | 模块名（命名空间） |
| options.fallback | string | 否 | 全局 fallback | 模块自己的回退语言 |

返回值：`LangBoundModule`（见下文“模块命名空间 API”）

### lang.getLang(saveLang?)

获取当前语言。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| saveLang | boolean | 否 | false | 传 `true` 返回“保存的语言”（可能为 `null`）；不传返回“当前生效语言” |

返回值：`string | null`

### lang.useLang(saveLang?)

在 React Hook 中使用当前语言（会随语言变化而更新）。

参数同 `getLang(saveLang?)`

返回值：

| 字段 | 类型 | 说明 |
| ---- | ---- | ---- |
| value | string \| null | 语言标识（saveLang=true 时可能为 null） |
| name | string | 内置语言中文名（未知则回退为 value） |

### lang.getLangs()

获取配置的可选语言列表（来自 `option.duxapp.lang.langs`）。

返回值：`{ name: string, value: string }[]`

### lang.useLangs()

在 React Hook 中使用可选语言列表（会随语言变化而更新）。

返回值同 `getLangs()`

### lang.setLang(lang, options?)

切换语言。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| lang | string | 是 | - | 语言标识（建议使用内置标识） |
| options.preload | boolean | 否 | true | 切换后是否预加载（会调用 `preload`） |
| options.moduleNames | string[] | 否 | - | 仅预加载指定模块（不传则预加载已注册的全部模块） |

返回值：`void`

### lang.onChange(callback, options?)

监听语言变化。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| callback | (lang: string) => void | 是 | - | 回调 |
| options.onLast | boolean | 否 | false | 是否立即触发一次“最后一次的值”（用于首次订阅拿到当前值） |

返回值：`{ remove: () => void }`

### lang.preload(lang, moduleNames?)

预加载指定语言的语言包（对“已注册模块”生效）。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| lang | string | 是 | - | 要预加载的语言 |
| moduleNames | string[] | 否 | - | 限制预加载模块列表 |

返回值：`Promise<void>`

### lang.t(moduleName, key, paramsOrOptions?)

获取翻译（同步）。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| moduleName | string | 是 | - | 模块名（命名空间） |
| key | string | 是 | - | 翻译 key，支持 `a.b.c` |
| paramsOrOptions | any \| object | 否 | - | 默认值 / 插值 params / 选项（见下） |

`paramsOrOptions` 支持三种形式：

- 传字符串/任意值：作为 `defaultValue`
- 传普通对象：作为插值参数 `params`
- 传选项对象：`{ defaultValue?, lang?, params? }`

返回值：默认返回 `string`（找不到 key 时回退：模块 fallback -> 全局 fallback -> defaultValue -> key）

### lang.getT(moduleName)

获取绑定模块的 `t` 函数：`(key, paramsOrOptions?) => string`

| 名称 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| moduleName | string | 是 | 模块名（命名空间） |

### lang.useT(moduleName)

在 React Hook 中获取绑定模块的 `t` 函数（会随语言/资源变化更新）。

| 名称 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| moduleName | string | 是 | 模块名（命名空间） |

## 模块命名空间 API（LangBoundModule）

`lang.module('myModule')` 返回的对象提供以下方法（等价于把 `moduleName` 绑定到 `lang` 上）：

### myLang.t(key, paramsOrOptions?)

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| key | string | 是 | - | 翻译 key，支持 `a.b.c` |
| paramsOrOptions | any \| object | 否 | - | 默认值 / 插值 params / 选项（同 `lang.t`） |

示例：

```js
myLang.t('common.ok')
myLang.t('error.invalid', { params: { name: 'id' } })
```

### myLang.getT()

返回 `t` 函数：`(key, paramsOrOptions?) => string`

### myLang.useT()

React Hook：返回 `t` 函数（随语言/资源变化更新）。

### myLang.addResources(lang, resources, options?)

注入某语言的资源对象（可选择深度合并）。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| lang | string | 是 | - | 语言标识 |
| resources | object | 是 | - | 语言包对象 |
| options.merge | boolean | 否 | true | 是否深度合并 |

### myLang.add(lang, resourcesOrLoader, options?)

注册单个语言包。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| lang | string | 是 | - | 语言标识 |
| resourcesOrLoader | `object | Promise | (() => Promise)` | 是 | - | 资源对象 / Promise / loader（小程序不建议 loader） |
| options.merge | boolean | 否 | true | 注入对象时是否深度合并 |
| options.eager | boolean | 否 | false | 注册后是否立即触发一次 load（仅对 loader 生效） |

推荐（小程序兼容）的写法：

```js
import en from './en'
myLang.add('en', en)
```

:::caution
小程序不支持动态 `import()` 的运行时懒加载，因此不要使用 `resourcesOrLoader` 传函数（loader）的形式；推荐使用 `config/langs/<lang>.js` 由 CLI 自动加载。
:::

### myLang.addMany(resourcesMap, options?)

批量注册语言包（语法糖，会逐个调用 `add`）：

| 名称 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| resourcesMap | `object` | 是 | `{ zh: resourcesOrLoader, en: resourcesOrLoader }` |
| options | LangAddOptions | 否 | 见上文 Types |

```js
myLang.addMany({
  zh: { common: { ok: '确定' } },
  en: { common: { ok: 'OK' } }
})
```

### myLang.addLoader(lang, loader)

注册某语言的 loader（高级用法）。

| 名称 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| lang | string | 是 | 语言标识 |
| loader | `() => Promise` | 是 | loader 函数 |

:::caution
小程序不支持动态 `import()`，不建议使用该 API。
:::

### myLang.load(lang?)

触发加载某语言（如果该语言已存在资源，则直接返回）。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| lang | string | 否 | 当前语言 | 要加载的语言 |

返回值：`Promise<object | void>`

### 监听语言变化

模块维度没有单独的 `onChange`，统一使用 `lang.onChange(...)` 监听语言变化。

## 高级 API（一般不需要）

以下 API 与 `LangBoundModule` 的方法是一一对应的“全局版本”（需要显式传 `moduleName`）。常见业务不需要直接调用，推荐使用 `config/langs/<lang>.js` + CLI 自动加载，或使用 `lang.module(...)` 返回的命名空间对象。

### lang.createModule(moduleName, options?)

创建/获取模块运行时（会初始化模块的 `fallback/resources/loaders` 容器）。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| moduleName | string | 是 | - | 模块名（命名空间） |
| options.fallback | string | 否 | 全局 fallback | 模块回退语言 |
| options.resources | `object` | 否 | - | 初始语言包集合（如 `{ zh: {...}, en: {...} }`） |
| options.loaders | `object` | 否 | - | 初始 loader 集合 |

返回值：模块运行时对象

运行时对象字段（用于理解，不建议业务直接依赖）：

| 字段 | 类型 | 说明 |
| ---- | ---- | ---- |
| fallback | string | 模块回退语言 |
| resources | `object` | 已注入的语言资源 |
| loaders | `object` | 已注册的 loader |
| loading | `object` | 当前正在加载的任务 |

### lang.addResources(moduleName, lang, resources, options?)

注入语言包（可选择深度合并）。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| moduleName | string | 是 | - | 模块名（命名空间） |
| lang | string | 是 | - | 语言标识 |
| resources | object | 是 | - | 语言包对象 |
| options.merge | boolean | 否 | true | 是否深度合并 |

### lang.addLoader(moduleName, lang, loader)

注册 loader（高级用法，小程序不建议使用）。

| 名称 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| moduleName | string | 是 | 模块名（命名空间） |
| lang | string | 是 | 语言标识 |
| loader | `() => Promise` | 是 | loader 函数 |

### lang.add(moduleName, lang, resourcesOrLoader, options?)

注册单个语言包/loader。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| moduleName | string | 是 | - | 模块名（命名空间） |
| lang | string | 是 | - | 语言标识 |
| resourcesOrLoader | `object | Promise | (() => Promise)` | 是 | - | 资源对象 / Promise / loader（小程序不建议 loader） |
| options.merge | boolean | 否 | true | 注入对象时是否深度合并 |
| options.eager | boolean | 否 | false | 注册后是否立即触发一次 load（仅对 loader 生效） |

### lang.addMany(moduleName, resourcesMap, options?)

批量注册语言包/loader。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| moduleName | string | 是 | - | 模块名（命名空间） |
| resourcesMap | `object` | 是 | - | `{ zh: resourcesOrLoader, en: resourcesOrLoader }` |
| options.merge | boolean | 否 | true | 注入对象时是否深度合并 |
| options.eager | boolean | 否 | false | 注册后是否立即触发一次 load（仅对 loader 生效） |

### lang.load(moduleName, lang?)

触发加载某模块的某语言资源（如果已存在则直接返回）。

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ---- | ------ | ---- |
| moduleName | string | 是 | - | 模块名（命名空间） |
| lang | string | 否 | 当前语言 | 要加载的语言 |

返回值：`Promise<object | void>`
