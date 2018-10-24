<template>
    <div class="newsinfo-continer">
        
        <!-- <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>发布时间：{{ newsinfo.add_time | dateFormat }}</span>
            <span>浏览：{{ newsinfo.click }}次</span>
        </p>

        <hr>

        <div class="content"></div> -->

        <!-- =============================================== -->
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发布时间：</span>
            <span>浏览：0次</span>
        </p>

        <hr>

        <div class="content"></div>
    </div>
</template>

<script>
// export default{
//     data(){
//         return {
//             id: this.$route.params.id ,// 将地址中传递过来的 id值 挂载到 data 上 方便以后调用
//             newsinfo:{} // 新闻对象
//         };
//     },
//     created(){
//         this.getNewsInfo();
//     },
//     methods:{
//         getNewsInfo(){
//             // 获取新闻详情
//             this.$http.get('../../../static/newsinfo.json' + this.id).then(result => {
//                 if(result.body.status === 0){
//                     this.newsinfo = result.body.message[0]
//                 }else{
//                     Toast('获取数据失败！')
//                 }
//             })
//         }
//     }
// }
</script>

<style lang="scss" scoped>// 如果内容区有图片加载大小有误 可以尝试去掉 scopoed
.newsinfo-continer{
    padding: 0 4px;
    .title{
        font-size:16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }

    .subtitle{
        font-size: 13px;
        color: blue;
        display: flex;
        justify-content: space-between;
    }

    .content{
        img{
            width: 100%
        }
    }
}
</style>
