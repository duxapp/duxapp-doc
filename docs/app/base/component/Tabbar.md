# 底部导航(Tabbar)

该组件是一个可定制的 TabBar 组件，包含多个子 TabBarButton 组件，每个子组件可以包含一个图标和一个文本。同时还可以绑定点击事件和数字角标。

使用该组件需要引入相关的 React、Taro 组件，同时使用了 useContext、useCallback、useEffect、useMemo、useState、useRef 等 hooks。

组件包含以下 props：

- children: 子组件，为一个数组，每个数组元素都是一个 TabBar.Item 组件，其中包含以下 props：

- component: 要渲染的组件，可以是一个自定义组件或者 React 组件，为必须参数。
- itemKey: 组件的 key 值，可以为空。
- icon: 子组件的图标，为必须参数。
- name: 子组件的文本，可以为空。

- beforeEvent: QuickEvent 类型的事件，包含回调函数，当 TabBar 组件切换之前触发的事件。
- afterEvent: QuickEvent 类型的事件，包含回调函数，当 TabBar 组件切换之后触发的事件。
- actionEvent: QuickEvent 类型的事件，包含回调函数，可以用来实现 TabBar 组件的交互事件。

组件提供以下方法：

- switch: 切换子组件，传入要切换的子组件的 index。
- onSwitchBefore: 绑定 beforeEvent 事件，使用方式与 QuickEvent 类型的事件相同。
- onSwitchAfter: 绑定 afterEvent 事件，使用方式与 QuickEvent 类型的事件相同。
- setNumber: 设置数字角标，传入要设置数字角标的子组件的 index 和数字值。
- useShow: 传入一个回调函数，当 TabBar 组件显示的时候触发该函数。
- useHide: 传入一个回调函数，当 TabBar 组件隐藏的时候触发该函数。
- useShowStatus: 返回一个布尔值，表示当前 TabBar 组件是否显示。