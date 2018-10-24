// 入口文件
import Vue from 'vue';

// 导入路由的包
import VueRouter from 'vue-router';
// 安装路由
Vue.use(VueRouter);

// import moment from 'moment';
// // 定义全局的过滤器
// Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
//     return moment(dataStr).format(pattern)
// });


// 导入 vue-resource
import VueResource from 'vue-resource';
// 安装 vue-resource
Vue.use(VueResource);
// // 全局设置请求的根路径
// Vue.http.options.root = 'vue-resource';

// 按需导入 Mint-UI 中的组件 及样式
import { Header, Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

// 导入 router.js 路由模块
import router from './router.js';

// 导入 APP 组件
import app from './App.vue';
import { isMoment } from 'moment';

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router,// 挂载路由对象到 vm 实例上
});







