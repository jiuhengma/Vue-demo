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
        <!-- 标题 -->
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发布时间：</span>
            <span>浏览：0次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content">
            &nbsp;&nbsp;寂寥红尘，锁住了深秋的雨巷。

晨雾袅袅婷婷绕着木屋飘零，或浓或淡悠然一股枯草焦味。几只青鸟从屋顶穿来穿去，叽叽喳喳的。雾朦笼罩一条不见头的雨巷，湿润落影。一条远方流成的河，连着南北两块小镇，惊醒了霞光下的大地。艘艘乌蓬、小帆随流水，潺潺而行。

一座孤零的石狮小桥，跨南北的雨雾，横贯千年的呼啸的风、敲醒百年花开的梦，把一束束潋滟的金桂洒在不息穿流的河水里，悠悠的漂向暖暖的前方。

纷纷扬扬的小镇，染遍了飘舞的凝烟，在深深的闺房里盈香着岁月的嫁妆。晨曦中落漠成玉立的倩女，一曲横萧声，把音符落进了流淌的河水。

雾里的炊烟，雨中的吆喝。潇潇洒洒的泼开了繁华落尽的雨巷。丁香的暗香，琴瑟的石板，莹绕的清愁，百转千回在雨巷的相思中。柔情，斜阳，静幽，遥望。

纷扰的红尘，深秋的雨巷。

庭院一缕暗香，是垂挂的丁香?是紫嫣的红叶?是凌霄花开?熙熙攘攘里纷扬了三千年的青苔，染绿了芭蕉树的黄昏。江南烟雨中，雨巷独自承受孤单，照旧着昏黄角落的冷风冷雨。苦涩里静静等着一朵青花从雨雾中飘出来。

采撷一束莲花，温馨中婉莹西落笑颜，等着月下的灼热，深邃里随着青花伞香，朵朵执意芬芳，于豁达静榻上一个远方的梦，一枕流年的诗。柔婉中，相思苍凉，雨丝情殇，几叠霓裳，几件羽衣斑驳了小桥流水人家，一首西风瘦马。

油纸伞下的泪痕，雨巷里慢慢风干。在心扉的冷颤中迷朦了紫色的雾，把丁香的枯叶堆积，红烛里，给雨巷照亮着石板路。翻遍角角落落，寻找前世的烟雨，镌刻在阑珊处。

温柔与你同在，缠绵着一条深秋的雨巷。

青花撑起了岁月的一片天地。细雨挂在眉梢上，品赏中阅尽了人间四月天，一首诗，一条线。石桥上的誓言如花落，如流水，如情人，如雁归。深深浅浅的年轮勾引了多少风花雪月，梧桐树包养了多少五更情人。执意中，月光寒凉，恍惚如梦，陷进了无休止的叹息悲伤。

红尘本就是一块没有生命的土地。你种瓜得瓜种豆得豆，播种苦难你绝不会有幸福，播撒了爱恋肯定会有三生三世的花朵。

人生总会有一块苍凉，一个不能揭疤的伤口。不必说，无须问，纵然万语千言，哪怕刻骨铭心，过往只是故事，人走成了过客。

落花飘零，仍会散发清香，云起风涌，难遮五彩斑斓。曾经难说清楚，神仙也难读懂。只有在回忆中，笔墨蘸满了思念，眼里才会有泪水。

深深的雨巷，写下了人生的沧桑。纷扰的红尘，难掩雨巷的深情。秋雨里，种下一片桃花源，天涯海角都在云水间……
        </div>

        <!-- 评论子组件区域 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
//1.导入 评论子组件
import comment from '../subcomponents/comment.vue'

export default{
    components:{
        'comment-box': comment
    }
}

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
