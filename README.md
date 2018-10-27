vue项目
===

### 本项目用到的开发工具有：
+ 代码编写工具：VS Code
+ 开发调试工具：Firefox

### 本项目用到的技术栈有：
 + html5, css3, javascrip, vue2.0, webpack4.0, node.js, MySQL

## 开发过程及思路：

## 制作首页APP组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 中的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对对一些；
 + 先把扩展图标的 css 样式，拷贝到项目中；
 + 再把扩展字体库 ttf 文件，拷贝到项目中；
 + 为购物车小图标添加如下样式:
   ```
   mui-icon mui-icon-extra mui-icon-extra-cart
   ```
3. 在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 Tabbar 为 router-link
+ 把Tabbar中的 a标签全部更换成 router-link

## 设置路由高亮


## 点击 Tabbar 中的路由链接，展示对应的路由组件
1. 在项目src文件夹下创建 components 文件夹 并在该文件下创建 tabbar 文件夹
2. 在 tabbar 文件夹下依次创建HomeContaniner.vue[首页], SearchContaniner.vue[搜索], ShopcarContainer.vue[购物车], MineContaniner.vue[我的] 四个组件
3. 在router.js 中导入以上四个组件：
    ```
    import HomeContainer from'./components/tabbar/HomeContaniner.vue';
    import SearchContainer from './components/tabbar/SearchContainer.vue';
    import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
    import MineContainer from './components/tabbar/MineContainer.vue';
    ```
    
4. 添加路由匹配规则：
    
    ```
    { path: '/home', component: HomeContainer },
    { path: '/search', component: SearchContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/mine', component: MineContainer }, 
    ```


## 制作首页轮播图布局
 + 绘制轮播图 用的是 Mint-UI 中的 Swipe,SwipeItem 组件
 + 引入格式
    ```
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    ```

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

## 获取所有的评论数据显示到页面中


## 实现点击加载更多评论按钮的功能
1. 为按钮绑定点击事件， 在事件中 请求下一页的数据
2. 点击加载更多，让 pageIndex++ ,然后重新调用 this.getComments() 方法重新获取最新一页的数据
3. 为了防止 新数据覆盖原有数据的情况的发生，在点击加载更多的时候，每当获取到新数据 就应该让原数据调用数组的 concat 方法，拼接上新数组

## 实现发表评论
1. 对文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空 若为空 则Toast提示用户 评论内容不能为空
4. 通过 vue-resource 发送一个请求 把评论内容提交到服务器
5. 当点击发表后 重新刷新列表 以查看最新的评论
 + 这里如果 调用 getComments 方法重新刷评论列表的话 可能只能得到最后一页的评论 而前几页的评论内容获取不到
 + 所以 这里当评论成功之后 在客户端 手动拼接出一个最新评论对象 然后调用数组的 unshift 方法 把最新的评论内容追加到 data 中 comments 的开头  

 ## 改造图片分享按钮为 路由链接并添加对应的组件页面

 ## 绘制 图片分享 组件页面结构并美化样式
 1. 制作顶部滑动条
 2. 制作底部图片列表

 ### 制作顶部滑动条所遇到的问题及解决办法
 1. 滑动条用的是 MUI 中的 tab-top-weview-main.html
 2. 注意：需要把 slider 区域的 mui-fullscreen 类去掉
 3. 滑动条无法正常触发滑动 通过检查官方文档 发现这是JS组件 需要被初始化一下；
  + 导入 mui.js
  + 调用官方提供的方式初始化：
  ```
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 // flick 减速系数 系数越大 滚动速度越慢 滚动距离越小 默认值0.0006
  })
  ```
 4. 在初始化滑动条的时候 导入的 mui,js 但是控制台报错 
  + 经过分析可能是 mui.js 中用到了非严格的东西 而webpack打包好的 bundel.js 中 默认的是启用严格模式的 所以两者冲突了
  + 解决办法 移除严格模式：使用这个插件
   babel-plugin-transform-remove-strict-mode
 5. 在刚进入图片分享界面时 滑动条无法正常工作 原因是 初始化滑动条 必须等 DOM 元素加载完毕后才可以 所以 解决办法是把 初始化滑动条的代码 放在 mounted 生命周期函数中去；
 6. 当滑动条调试好之后 出现了新的问题[tabbar无法正常工作了] 解决方法：把APP.vue中tabbar的每个 tabbar按钮样式中的 `mui-tab-item` 重新改一下名字（这里我把它改做了 'mui-tab-item-rs' ）