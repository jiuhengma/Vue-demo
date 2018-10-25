# vue项目

### 本项目用到的开发工具有：
+ 代码编写工具：VS Code
+ 项目调试工具：Firefox

### 本项目用到的技术栈有：
 + html5, css3, javascrip, vue2.0, webpack4.0, node.js, MySQL

## 下面开始进入正题：

## 制作首页APP组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 中的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对复杂一些；
 + 先把扩展图标的 css 样式，拷贝到项目中；
 + 再把扩展字体库 ttf 文件，拷贝到项目中；
 + 为购物车小图标添加如下样式 
`mui-icon mui-icon-extra mui-icon-extra-cart`
3. 在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 Tabbar 为 router-link
+ 把Tabbar中的 a标签全部更换成 router-link

## 设置路由高亮


## 点击 Tabbar 中的路由链接，展示对应的路由组件
1. 在项目src文件夹下创建 components 文件夹 并在该文件下创建 tabbar 文件夹
2. 在 tabbar 文件夹下依次创建HomeContaniner.vue[首页], SearchContaniner.vue[搜索], ShopcarContainer.vue[购物车], MineContaniner.vue[我的] 四个组件
3. 在router.js 中导入以上四个组件：
    
    `import HomeContainer from './components/tabbar/HomeContaniner.vue';
    import SearchContainer from './components/tabbar/SearchContainer.vue';
    import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
    import MineContainer from './components/tabbar/MineContainer.vue';`
4. 添加路由匹配规则：
    
    ` 
       { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/mine', component: MineContainer }, 
    `

## 制作首页轮播图布局
 + 绘制轮播图 用的是 Mint-UI 中的 Swipe,SwipeItem 组件
 + 引入格式

    `import { Swipe, SwipeItem } from 'mint-ui';
        Vue.component(Swipe.name, Swipe);
        Vue.component(SwipeItem.name, SwipeItem);`

## 加载首页轮播图数据
1. 获取数据，使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项 

## 改造九宫格区域样式
 + 绘制九宫格界面 用的是 MUI 中的 grid-default.html

## 改造新闻资讯路由链接
1. 九宫格中新闻资讯的 a 标签 更改为 router—link
2. 创建新闻资讯的组件页面 NewsList.vue

## 新闻资讯页面制作
1. 绘制界面，使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现新闻咨询列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link 同时 在跳转的时候应该提供唯一的ID标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中 将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中 先手动导入 comment组件
 + `import comment from './comment.vue'`
3. 在父组件中 使用  `components` 属性 将刚才导入的 comment 组件 注册为自己的子组件
4. 将注册子组件时候的注册名称 以标签的形式在页面中 引用即可
