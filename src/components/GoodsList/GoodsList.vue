<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="../../imgs/goodslist/法拉利fxx k 红色跑车.jpg" alt="">
            <h1 class="title">法拉利fxx k 红色跑车</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1299</span>
                </p>
                <div class="sell">
                    <span>熱賣中</span>
                    <span>剩90件</span>
                </div>
            </div>
            
        </div>

        <div class="goods-item">
            <img src="../../imgs/goodslist/劳斯莱斯幻影Rolls-Royce Phantom EWB Chengdu.jpg" alt="">
            <h1 class="title">劳斯莱斯幻影Rolls-Royce Phantom EWB Chengdu</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1299</span>
                </p>
                <div class="sell">
                    <span>熱賣中</span>
                    <span>剩90件</span>
                </div>
            </div>
            
        </div>

        <div class="goods-item">
            <img src="../../imgs/goodslist/红色劳斯莱斯 Cullinan.jpg" alt="">
            <h1 class="title">红色劳斯莱斯 Cullinan</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999999</span>
                    <span class="old">￥1099999</span>
                </p>
                <div class="sell">
                    <span>熱賣中</span>
                    <span>剩90件</span>
                </div>
            </div>
            
        </div>

        <div class="goods-item">
            <img src="../../imgs/goodslist/2018奔驰AMG GT蓝色跑车.jpg" alt="">
            <h1 class="title">2018奔驰AMG GT蓝色跑车</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999999</span>
                    <span class="old">￥1099999</span>
                </p>
                <div class="sell">
                    <span>熱賣中</span>
                    <span>剩90件</span>
                </div>
            </div>
            
        </div>
        <div class="goods-item">
            <img src="../../imgs/goodslist/2018路虎发现SVX.jpg" alt="">
            <h1 class="title">2018路虎发现SVX</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999999</span>
                    <span class="old">￥1099999</span>
                </p>
                <div class="sell">
                    <span>熱賣中</span>
                    <span>剩90件</span>
                </div>
            </div>
            
        </div>

        <div class="goods-item">
            <img src="../../imgs/goodslist/福特2018款Mustang(野马)GT红色跑车.jpg" alt="">
            <h1 class="title">福特2018款Mustang(野马)GT红色跑车</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥9999</span>
                    <span class="old">￥1099999</span>
                </p>
                <div class="sell">
                    <span>熱賣中</span>
                    <span>剩90件</span>
                </div>
            </div>
            
        </div>

        <div class="goods-item">
            <img src="../../imgs/goodslist/杜卡迪 2018款Ducati Scrambler Classic.jpg" alt="">
            <h1 class="title">杜卡迪 2018款Ducati Scrambler Classic</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥99999</span>
                    <span class="old">￥109999</span>
                </p>
                <div class="sell">
                    <span>熱賣中</span>
                    <span>剩90件</span>
                </div>
            </div>
            
        </div>
    </div>
</template>


<script>

</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap; //換行
    padding: 7px;
    justify-content: space-between;

    .goods-item{
        width: 49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img{
            width: 100%;
        }

        .title{
            font-size: 14px;
        }

        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
                .old{
                    font-size: 12px;
                    text-decoration: line-through;
                    margin-left: 10px;
                }
            }

            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }    

        }
    }
}
</style>

