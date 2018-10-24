<template>
    <div>
        <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  -->
        <!-- <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dateFormat }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul> -->
        <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/1.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/2.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../imgs/news/3.jpg">
                    <div class="mui-media-body">
                        <h1>标题</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-04-01 12:12:12</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
// import { Toast } from "mint-ui";
// export default{
//     data(){
//         return{
//             newlist:[] // 新闻列表
//         };
//     },
//     created(){
//         this.getNewsList();
//     },
//     methods:{
//         getNewsList(){
//             //获取新闻列表
//             this.$http.get("api/getnewlist").then(result => {
//                 if(result.body.status === 0){
//                     // 如果没有失败，应该把数据保存到 data 上
//                     this.newlist = result.body.message;
//                 }else{
//                     Toast('获取新闻列表失败！')
//                 }
//             });
//         }
//     }
// }

</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size:14px;
        }

        .mui-ellipsis{
            font-size:12px;
            color: #226aff;
            // c3 设置两端对齐
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

