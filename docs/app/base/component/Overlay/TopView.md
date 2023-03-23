# 顶层容器(TopView)

TopView

## 代码示例

```jsx
import { TopView } from '@/components/TopView';

// 添加元素
const ele = <div>Hello world</div>;
const { remove, update } = TopView.add(ele);

// 移除元素
remove();

// 更新元素
update();

// 或者 更新元素
const newEle = <div>New element</div>;
TopView.update(key, newEle);

// 移除所有元素
TopView.removeAll();
```

## Props

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| children | any | | 组件的子元素 |
| isSafe | boolean | `false` | 是否为 iPhoneX 安全区域 |
| isForm | boolean | `false` | 是否包含表单，决定输入法收起的时候是否要滚动 |
| pageUrl | string | | 所在的页面 URL 地址 |
| style | object | | 样式对象 |

## 静态方法

### TopView.add

添加一个元素到最外层渲染。返回一个对象，包含一个 `remove` 方法用于移除该元素，和一个 `key` 属性表示该元素的键值。

```js
const { remove, update, key } = TopView.add(element, pageUrl);
```

- `element`：要添加的元素，可以是任何 JSX 元素。
- `pageUrl`：可选，要添加到哪个页面的最外层，页面 URL 地址，如果不传则默认添加到当前页面的最外层。

### TopView.update

更新某个元素。需要传递元素的键值，和要更新的元素。

```js
TopView.update(key, newElement, pageUrl);
```

- `key`：要更新的元素的键值。
- `newElement`：要更新成的元素。
- `pageUrl`：可选，要更新的元素所在的页面 URL 地址，如果不传则默认更新当前页面的元素。

### TopView.remove

移除某个元素。需要传递元素的键值。

```js
TopView.remove(key, pageUrl);
```

- `key`：要移除的元素的键值。
- `pageUrl`：可选，要移除的元素所在的页面 URL 地址，如果不传则默认移除当前页面的元素。

### TopView.removeAll

移除所有元素。

```js
TopView.removeAll(pageUrl);
```

- `pageUrl`：可选，要移除元素所在的页面 URL 地址，如果不传则默认移除当前页面的元素。