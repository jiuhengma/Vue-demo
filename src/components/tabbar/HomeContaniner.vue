<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item>
                <img src="../../imgs/lunbotu/1.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../imgs/lunbotu/2.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../imgs/lunbotu/3.png" alt="">
            </mt-swipe-item>
            <!-- <mt-swipe-item v-for="itme in lunbotuList" :key="itme.ulr">
                <img src="itme.img" alt="">
            </mt-swipe-item> -->
        </mt-swipe>

        <!-- 九宫格功能区域 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9" id="ul6">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                   <span class="mui-icon-extra mui-icon-extra-order"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
            
        </ul> 
        
    </div>
</template>

<script>
// -------------------------------------------------
// import { Toast } from 'mint-ui';

// export default{
//     data(){
//         return{};
//     },
//     created(){
//         this.getLunbotu();
//     },
//     methods:{
//         getLunbotu(){
//             // 获取轮播图数据的方法
//             this.$http.get("api地址").then(result => {
//                 // console.log(result.body)
//                 if (result.body.status === 0){
//                     // 成功
//                     this.lunbotuList = result.body.message;
                    
//                 }else{
//                     // 失败
//                     Toast("轮播图加载失败")
//                 }
//             })
//         }
//     }
// }
// --------------------------------------------------------

</script>

<style lang="scss" coped>
    .mint-swipe{
        height: 200px;

        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color: blue;
            }
            &:nth-child(3){
                background-color: cyan;
            }

            img{
                width: 100%;
                height: 100%;
            }
        
        }
    };
    #ul6{
        span{
            height: 40.8px;
            width: 40.8px;
            text-align: center;
            line-height: 40.8px;
        }
    }
    
    
</style>

