<template>
    <div>
        <div class="bt">
            <h2>{{biaoTi.name}}</h2>
            <span>￥{{biaoTi.price}}</span>
        </div>
        <div class="info">
            <van-row class="hang">
                <van-col span="12">免运费</van-col>
                <van-col span="12">剩余：{{biaoTi.stock || 0}}</van-col>
            </van-row>

            <van-row>
                <van-col span="12">销量：{{biaoTi.sales}}</van-col>
                <van-col span="12">收藏：{{biaoTi.likes}}</van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'InfoBiaoti',
    props:{
        biaoTi:{
            type:Object,
        }
    }
}
</script>
<style scoped lang="less">
.bt{
    width: 100%;
    height: 66px;
    h2{
        margin: 10px;
        font-size: 14px;
        white-space: wrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
    span{
        margin: 10px;
        color: orange;
        font-size: 12px;
    }
}
.info{
    width: 100%;
    height: 54px;
    font-size: 13px;
    margin: 0 10px;
    .hang{
        margin: 5px 0;
    }
}
</style>