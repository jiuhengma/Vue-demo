# 这是一个初次使用vue写的demo

#本项目用到的技术栈有：



## 制作首页APP组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 中的 Tabbar.html
 a. 在制作 购物车 小图标的时候，操作会相对对一些；
 b. 先把扩展图标的 css 样式，拷贝到项目中；
 c. 再把扩展字体库 ttf 文件，拷贝到项目中；
 d. 为购物车小图标添加如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 Tabbar 为 router-link


## 设置路由高亮


## 点击 Tabbar 中的路由链接，展示对应的路由组件


## 制作首页轮播图布局


## 加载首页轮播图数据
1. 获取数据，使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项 