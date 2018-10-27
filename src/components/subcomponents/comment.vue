<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入..." cols="30" rows="10" maxlength="300"></textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2018-07-07 12:12:12
                </div>
                <div class="cmt-body">
                    人生若只如初见，何事西风悲画扇，等闲变却故人心，却道故人心易变。
                </div>
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2018-07-07 12:12:12
                </div>
                <div class="cmt-body">
                    人生若只如初见，何事西风悲画扇，等闲变却故人心，却道故人心易变。
                </div>
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2018-07-07 12:12:12
                </div>
                <div class="cmt-body">
                    人生若只如初见，何事西风悲画扇，等闲变却故人心，却道故人心易变。
                </div>
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2018-07-07 12:12:12
                </div>
                <div class="cmt-body">
                    人生若只如初见，何事西风悲画扇，等闲变却故人心，却道故人心易变。
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
// import { Toast } from "mint-ui";
// export default{
//     data(){
//         return{
//             pageIndex:1,//默认展示第一页数据
//             comments:[] // 所有的评论数据
//         };
//     },
//     methods:{
//         getComments(){
//             this.$http.get('api').then(result => {
//                 if (result.body.status ===0){
//                     this.comments = result.body.message;
//                 }else{
//                     Toast("获取评论失败！")
//                 }
//             });
//         }
//     }
// }
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 3px;
    }

    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }

            .cmt-body{
                line-height: 35px;
                text-indent: 2em;//文本缩进
            }
        }
    }
}
</style>

