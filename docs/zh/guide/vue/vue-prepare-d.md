# 什么是 Vue

## 简介

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的**渐进式框架**，发布于 2014 年 2 月。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。**Vue 的核心库只关注视图层**，不仅易于上手，还便于与第三方库（如：`vue-router`，`vue-resource`，`vuex`）或既有项目整合。

## MVVM 模式的实现者

 MVVM 表示如下：

- Model：模型层，在这里表示 JavaScript 对象
- View：视图层，在这里表示 DOM（HTML 操作的元素）
- ViewModel：连接视图和数据的中间件，**Vue.js 就是 MVVM 中的 ViewModel 层的实现者**

![img](/assets/vue-d-1.png)

在 MVVM 架构中，是不允许 **数据** 和 **视图** 直接通信的，只能通过 `ViewModel` 来通信，而 ViewModel 就是定义了一个 `Observer` 观察者

- ViewModel 能够观察到数据的变化，并对视图对应的内容进行更新
- ViewModel 能够监听到视图的变化，并能够通知数据发生改变

至此，我们就明白了，Vue.js 就是一个 MVVM 的实现者，他的核心就是实现了 `DOM 监听` 与 `数据绑定`

### 其它 MVVM 实现者

- AngularJS
- ReactJS
- 微信小程序

## 为什么要使用 Vue.js

- 轻量级，体积小是一个重要指标。Vue.js 压缩后有只有 **20多kb** （Angular 压缩后 **56kb+**，React 压缩后 **44kb+**）
- 移动优先。更适合移动端，比如移动端的 Touch 事件
- 易上手，学习曲线平稳，文档齐全
- 吸取了 Angular（`模块化`）和 React（`虚拟 DOM`）的长处，并拥有自己独特的功能，如：`计算属性`
- 开源，社区活跃度高

## Vue.js 的两大核心要素

### 数据驱动

![img](/assets/vue-d-2.png)

当你把一个普通的 JavaScript 对象传给 Vue 实例的 `data` 选项，Vue 将遍历此对象所有的属性，并使用 `Object.defineProperty` 把这些属性全部转为 `getter/setter`。**Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器**。

这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。这里需要注意的问题是浏览器控制台在打印数据对象时 getter/setter 的格式化并不同，所以你可能需要安装 `vue-devtools` 来获取更加友好的检查接口。

每个组件实例都有相应的 **watcher** 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 `setter` 被调用时，会通知 `watcher` 重新计算，从而致使它关联的组件得以更新。

### 组件化

- 页面上每个独立的可交互的区域视为一个组件
- 每个组件对应一个工程目录，组件所需的各种资源在这个目录下就近维护
- 页面不过是组件的容器，组件可以嵌套自由组合（复用）形成完整的页面

# 第一个 Vue 应用程序


## 兼容性

Vue **不支持** IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有**兼容 ECMAScript 5 的浏览器**。

## 下载地址

- 开发版本
  - 包含完整的警告和调试模式：https://vuejs.org/js/vue.js
  - 删除了警告，30.96KB min + gzip：https://vuejs.org/js/vue.min.js
- CDN
  - `<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>`
  - `<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>`



### 完整的 HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>第一个 Vue 应用程序</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
</head>
<body>
    <div id="vue">
        {{message}}
    </div>

<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            message: 'Hello Vue!'
        }
    });
</script>
</body>
</html>
```

注：我是在 `IDEA` 上创建的 HTML，并使用 `IDEA` 内置的 HTTP 服务器运行

## 测试 Vue

为了能够更直观的体验 Vue 带来的数据绑定功能，我们需要在浏览器测试一番，操作流程如下：

- 在 `Chrome` 浏览器上运行第一个 Vue 应用程序，并按 `F12` 进入 `开发者工具`


- 在控制台输入 `vm.message = 'Hello World'` ，然后 `回车`，你会发现浏览器中显示的内容会直接变成 `Hello World`


### 说明

在之前的代码中，我们创建了一个名为 `vm` 的 Vue 实例

```javascript
var vm = new Vue({
    el: '#vue',
    data: {
        message: 'Hello Vue!'
    }
});
```


此时就可以在控制台直接输入 `vm.message` 来修改值，中间是可以省略 `data` 的，在这个操作中，我并没有主动操作 DOM，就让页面的内容发生了变化，这就是借助了 Vue 的 **数据绑定** 功能实现的；MVVM 模式中要求 ViewModel 层就是使用 `观察者模式` 来实现数据的监听与绑定，以做到数据与视图的快速响应。



# 附：Vue 实例的生命周期

## 什么是生命周期

Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载 DOM、渲染→更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。通俗说就是 Vue 实例从创建到销毁的过程，就是生命周期。

在 Vue 的整个生命周期中，它提供了一系列的事件，可以让我们在事件触发时注册 JS 方法，可以让我们用自己注册的 JS 方法控制整个大局，在这些事件响应方法中的 this 直接指向的是 Vue 的实例。

![img](/assets/vue-d-3.jpg)

> 特别值得注意的是 `created` 钩子函数和 `mounted` 钩子函数的区别

## 钩子函数的触发时机

### beforeCreate

在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

### created

实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

### beforeMount

在挂载开始之前被调用：相关的 render 函数首次被调用。

### mounted

el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。

### beforeUpdate

数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

### updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。

### beforeDestroy

实例销毁之前调用。在这一步，实例仍然完全可用。

### destroyed

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。



# 语法篇（省略）



# 使用 Axios 实现异步通信


## 什么是 Axios

Axios 是一个开源的可以用在浏览器端和 NodeJS 的异步通信框架，她的主要作用就是实现 AJAX 异步通信，其功能特点如下：

- 从浏览器中创建 `XMLHttpRequests`
- 从 `node.js` 创建 `http` 请求
- 支持 `Promise API`
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 `JSON` 数据
- 客户端支持防御 `XSRF`（跨站请求伪造）

GitHub：https://github.com/axios/axios

## 为什么要使用 Axios

由于 Vue.js 是一个 **视图层框架** 并且作者（尤雨溪）严格准守 `SoC` （关注度分离原则），所以 Vue.js 并不包含 AJAX 的通信功能，为了解决通信问题，作者单独开发了一个名为 `vue-resource` 的插件，不过在进入 2.0 版本以后停止了对该插件的维护并推荐了 Axios 框架

## 第一个 Axios 应用程序

咱们开发的接口大部分都是采用 JSON 格式，可以先在项目里模拟一段 JSON 数据，数据内容如下：

```json
{
  "name": "广州芦苇",
  "url": "http://www.luwei.cn",
  "page": 88,
  "isNonProfit": true,
  "address": {
    "street": "元岗路.",
    "city": "广东广州",
    "country": "中国"
  },
  "links": [
    {
      "name": "Google",
      "url": "http://www.google.com"
    },
    {
      "name": "Baidu",
      "url": "http://www.baidu.com"
    },
    {
      "name": "SoSo",
      "url": "http://www.SoSo.com"
    }
  ]
}
```


创建一个名为 `data.json` 的文件并填入上面的内容，放在项目的根目录下，如图所示：


### 创建 HTML

```html
<div id="vue">
    <div>名称：{{info.name}}</div>
    <div>地址：{{info.address.country}}-{{info.address.city}}-{{info.address.street}}</div>
    <div>链接：<a v-bind:href="info.url" target="_blank">{{info.url}}</a> </div>
</div>
```

注：在这里使用了 `v-bind` 将 `a:href` 的属性值与 Vue 实例中的数据进行绑定

### 引入 JS 文件

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

1
2

### JavaScript

```javascript
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data() {
            return {
                info: {
                    name: null,
                    address: {
                        country: null,
                        city: null,
                        street: null
                    },
                    url: null
                }
            }
        },
        mounted() {
            axios
                .get('data.json')
                .then(response => (this.info = response.data));
        }
    });
</script>
```

使用 `axios` 框架的 `get` 方法请求 AJAX 并自动将数据封装进了 Vue 实例的数据对象中

#### 数据对象

这里的数据结构与 JSON 数据结构是匹配的

```json
info: {
    name: null,
    address: {
        country: null,
        city: null,
        street: null
    },
    url: null
}
```


#### 调用 `get` 请求

调用 `axios` 的 `get` 请求并自动装箱数据

```javascript
axios
    .get('data.json')
    .then(response => (this.info = response.data));
```


### 完整的 HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>网络篇 Axios</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>

<div id="vue">
    <div>名称：{{info.name}}</div>
    <div>地址：{{info.address.country}}-{{info.address.city}}-{{info.address.street}}</div>
    <div>链接：<a v-bind:href="info.url" target="_blank">{{info.url}}</a> </div>
</div>

<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data() {
            return {
                info: {
                    name: null,
                    address: {
                        country: null,
                        city: null,
                        street: null
                    },
                    url: null
                }
            }
        },
        mounted() {
            axios
                .get('data.json')
                .then(response => (this.info = response.data));
        }
    });
</script>
</body>
</html>
```

# 表单输入

## 本节视频


## 什么是双向数据绑定

Vue.js 是一个 MVVM 框架，即数据双向绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化。这也算是 Vue.js 的精髓之处了。值得注意的是，**我们所说的数据双向绑定，一定是对于 UI 控件来说的**，非 UI 控件不会涉及到数据双向绑定。单向数据绑定是使用状态管理工具的前提。如果我们使用 `vuex`，那么数据流也是单项的，这时就会和双向数据绑定有冲突。

## 为什么要实现数据的双向绑定

在 Vue.js 中，如果使用 `vuex`，实际上数据还是单向的，之所以说是数据双向绑定，这是用的 UI 控件来说，对于我们处理表单，Vue.js 的双向数据绑定用起来就特别舒服了。即两者并不互斥，在全局性数据流使用单项，方便跟踪；局部性数据流使用双向，简单易操作。

##  在表单中使用双向数据绑定

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

**注意：v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。**

### 单行文本

```html
<div id="vue">
    单行文本：<input type="text" v-model="message" />&nbsp;&nbsp;单行文本是：{{message}}
</div>
```


```javascript
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            message: "Hello Vue"
        }
    });
</script>
```

### 多行文本

```html
<div id="vue">
    多行文本：<textarea v-model="message"></textarea>&nbsp;&nbsp;多行文本是：{{message}}
</div>
```


```javascript
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            message: "Hello Textarea"
        }
    });
</script>
```

### [#](https://funtl.com/zh/vue/表单输入.html#单复选框)单复选框

```html
<div id="vue">
    单复选框：<input type="checkbox" id="checkbox" v-model="checked">&nbsp;&nbsp;<label for="checkbox">{{ checked }}</label>
</div>
```


```javascript
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            checked: false
        }
    });
</script>
```



### 多复选框

```html
<div id="vue">
    多复选框：
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <span>选中的值: {{ checkedNames }}</span>
</div>
```


```javascript
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            checkedNames: []
        }
    });
</script>
```


### 单选按钮

```html
<div id="vue">
    单选按钮：
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <span>选中的值: {{ picked }}</span>
</div>
```
```javascript
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            picked: ''
        }
    });
</script>
```


### 下拉框

```html
<div id="vue">
    下拉框：
    <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>选中的值: {{ selected }}</span>
</div>
```

```javascript
<script type="text/javascript">
    var vm = new Vue({
        el: '#vue',
        data: {
            selected: ''
        }
    });
</script>
```
** 注意：如果 v-model 表达式的初始值未能匹配任何选项，<select/>元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项 **

#  组件基础


## 什么是组件

组件是可复用的 Vue 实例，说白了就是一组可以重复使用的模板，跟 `JSTL` 的自定义标签、`Thymeleaf`的 `th:fragment` 以及 `Sitemesh3` 框架有着异曲同工之妙。通常一个应用会以一棵嵌套的组件树的形式来组织：


例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。

## 第一个 Vue 组件

**注意：在实际开发中，我们并不会用以下方式开发组件，而是采用 vue-cli 创建 .vue 模板文件的方式开发，以下方法只是为了让大家理解什么是组件。**

### 使用 `Vue.component()` 方法注册组件

#### JavaScript

```javascript
<script type="text/javascript">
    // 先注册组件
    Vue.component('my-component-li', {
        template: '<li>Hello li</li>'
    });

    // 再实例化 Vue
    var vm = new Vue({
        el: '#vue'
    });
</script>
```

#### HTML

```html
<div id="vue">
    <ul>
        <my-component-li></my-component-li>
    </ul>
</div>
```

#### 说明

- `Vue.component()`：注册组件
- `my-component-li`：自定义组件的名字
- `template`：组件的模板


### 使用 `props` 属性传递参数

像上面那样用组件没有任何意义，所以我们是需要传递参数到组件的，此时就需要使用 `props` 属性了

**注意：默认规则下 props 属性里的值不能为大写；感谢来自 Java微服务技术交流群2 的群友 [CV战士蛋蛋面] 帮助大家踩坑；**

#### JavaScript

```javascript
<script type="text/javascript">
    // 先注册组件
    Vue.component('my-component-li', {
        props: ['item'],
        template: '<li>Hello {{item}}</li>'
    });

    // 再实例化 Vue
    var vm = new Vue({
        el: '#vue',
        data: {
            items: ["张三", "李四", "王五"]
        }
    });
</script>
```


#### HTML

```html
<div id="vue">
    <ul>
        <my-component-li v-for="item in items" v-bind:item="item"></my-component-li>
    </ul>
</div>
```

### 说明

- `v-for="item in items"`：遍历 Vue 实例中定义的名为 `items` 的数组，并创建同等数量的组件
- `v-bind:item="item"`：将遍历的 `item` 项绑定到组件中 `props` 定义的名为 `item` 属性上；`=` 号左边的 `item` 为 `props` 定义的属性名，右边的为 `item in items` 中遍历的 `item` 项的值


### 完整的 HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>布局篇 组件基础</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
</head>
<body>

<div id="vue">
    <ul>
        <my-component-li v-for="item in items" v-bind:item="item"></my-component-li>
    </ul>
</div>

<script type="text/javascript">
    // 先注册组件
    Vue.component('my-component-li', {
        props: ['item'],
        template: '<li>Hello {{item}}</li>'
    });

    // 再实例化 Vue
    var vm = new Vue({
        el: '#vue',
        data: {
            items: ["张三", "李四", "王五"]
        }
    });
</script>
</body>
</html>
```

# 内容分发与自定义事件


## Vue 中的内容分发

在 Vue.js 中我们使用 `<slot>` 元素作为承载分发内容的出口，作者称其为 `插槽`，可以应用在组合组件的场景中

###  利用插槽功能实现一个组合组件

比如准备制作一个待办事项组件（`todo`），该组件由待办标题（`todo-title`）和待办内容（`todo-items`）组成，但这三个组件又是相互独立的，该如何操作呢？

#### 定义一个名为 `todo` 的待办事项组件

```javascript
Vue.component('todo', {
    template: '<div>\
                    <slot name="todo-title"></slot>\
                    <ul>\
                        <slot name="todo-items"></slot>\
                    </ul>\
               </div>'
});
```



该组件中放置了两个插槽，分别为 `todo-title` 和 `todo-items`

#### 定义一个名为 `todo-title` 的待办标题组件

```javascript
Vue.component('todo-title', {
    props: ['title'],
    template: '<div>{{title}}</div>'
});
```

#### 定义一个名为 `todo-items` 的待办内容组件

```javascript
Vue.component('todo-items', {
    props: ['item', 'index'],
    template: '<li>{{index + 1}}. {{item}}</li>'
});
```

#### 实例化 Vue 并初始化数据

```javascript
var vm = new Vue({
    el: '#vue',
    data: {
        todoItems: ['《刀剑神域3》', '《关于我转生成为史莱姆这件事》', '《实力至上主义教室》']
    }
});
```

#### HTML

```html
<div id="vue">
    <todo>
        <todo-title slot="todo-title" title="今日动漫推荐"></todo-title>
        <todo-items slot="todo-items" v-for="(item, index) in todoItems" v-bind:item="item" v-bind:index="index" :key="index"></todo-items>
    </todo>
</div>
```


此时，我们的 `todo-title` 和 `todo-items` 组件分别被分发到了 `todo` 组件的 `todo-title` 和 `todo-items` 插槽中

#### 测试效果


## 使用自定义事件删除待办事项

通过以上代码不难发现，数据项在 Vue 的实例中，但删除操作要在组件中完成，那么组件如何才能删除 Vue 实例中的数据呢？此时就涉及到参数传递与事件分发了，Vue 为我们提供了自定义事件的功能很好的帮助我们解决了这个问题；使用 `this.$emit('自定义事件名', 参数)`，操作过程如下

### 修改创建 Vue 实例代码

```javascript
var vm = new Vue({
    el: '#vue',
    data: {
        todoItems: ['《刀剑神域3》', '《关于我转生成为史莱姆这件事》', '《实力至上主义教室》']
    },
    methods: {
        // 该方法可以被模板中自定义事件触发
        removeTodoItems: function (index) {
            console.log("删除 " + this.todoItems[index] + " 成功");
            // splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目，其中 index 为添加/删除项目的位置，1 表示删除的数量
            this.todoItems.splice(index, 1);
        }
    }
});
```

增加了 `methods` 对象并定义了一个名为 `removeTodoItems` 的方法

### 修改 `todo-items` 待办内容组件的代码

```javascript
Vue.component('todo-items', {
    props: ['item', 'index'],
    template: '<li>{{index + 1}}. {{item}} <button @click="remove">删除</button></li>',
    methods: {
        remove: function (index) {
            // 这里的 remove 是自定义事件的名称，需要在 HTML 中使用 v-on:remove 的方式指派
            this.$emit('remove', index);
        }
    }
});
```


增加了 `<button @click="remove">删除</button>` 元素并绑定了组件中定义的 `remove` 事件

### 修改 `todo-items` 待办内容组件的 HTML 代码

```html
<todo-items slot="todo-items" v-for="(item, index) in todoItems" v-bind:item="item" v-bind:index="index" :key="index" v-on:remove="removeTodoItems(index)"></todo-items>
```


增加了 `v-on:remove="removeTodoItems(index)"` 自定义事件，该事件会调用 Vue 实例中定义的名为 `removeTodoItems` 的方法

## 完整的 HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>布局篇 内容分发与自定义事件</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
</head>
<body>

<div id="vue">
    <todo>
        <todo-title slot="todo-title" title="今日动漫推荐"></todo-title>
        <todo-items slot="todo-items" v-for="(item, index) in todoItems" v-bind:item="item" v-bind:index="index" :key="index" v-on:remove="removeTodoItems(index)"></todo-items>
    </todo>
</div>

<script type="text/javascript">
    // 定义一个待办事项组件
    Vue.component('todo', {
        template: '<div>\
                        <slot name="todo-title"></slot>\
                        <ul>\
                            <slot name="todo-items"></slot>\
                        </ul>\
                   </div>'
    });

    // 定义一个待办事项标题组件
    Vue.component('todo-title', {
        props: ['title'],
        template: '<div>{{title}}</div>'
    });

    // 定义一个待办事项内容组件
    Vue.component('todo-items', {
        props: ['item', 'index'],
        template: '<li>{{index + 1}}. {{item}} <button @click="remove">删除</button></li>',
        methods: {
            remove: function (index) {
                this.$emit('remove', index);
            }
        }
    });

    var vm = new Vue({
        el: '#vue',
        data: {
            todoItems: ['《刀剑神域3》', '《关于我转生成为史莱姆这件事》', '《实力至上主义教室》']
        },
        methods: {
            // 该方法可以被模板中自定义事件触发
            removeTodoItems: function (index) {
                console.log("删除 " + this.todoItems[index] + " 成功");
                this.todoItems.splice(index, 1);
            }
        }
    });
</script>
</body>
</html>
```
