import VueRouter from 'vue-router';

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContaniner.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import MineContainer from './components/tabbar/MineContainer.vue';
import NewsList from  './components/news/NewsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';
import photoList from './components/photos/photoList.vue';

// 创建路由对象
var router = new VueRouter({
    routes: [// 匹配路由规则
        // 路由重定向
        { path: '/', redirect: './home' },

        { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/mine', component: MineContainer },
        { path: '/home/newsList', component: NewsList },
        { path: '/home/newsinfo', component:NewsInfo },
        // { path: '/home/newsinfo/:id', component:NewsInfo }
        { path: '/home/photolist', component:photoList},

    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
});


//把路由对象暴露出去
export default router 