<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar title="商品详情"  left-arrow fixed>
            <div slot="left" @click="$router.back()">
                <van-icon name="arrow-left" />
                <span>返回</span>
            </div>
            <template #right>
                <van-icon name="" size="18" />
            </template>
        </van-nav-bar>

        <main>
            <!-- 轮播图 -->
            <InfoSwiper :imgList="imgList"></InfoSwiper>
            <InfoBiaoti :biaoTi="biaoTi"></InfoBiaoti>
            <TabChange :properties="properties" :detailImgList="detailImgList"></TabChange>
        </main>

        <!-- 底部 -->
        <van-goods-action>
            <van-goods-action-icon icon="like-o" text="收藏" @click="likesClick"/>
            <van-goods-action-icon icon="shopping-cart-o" text="购物车" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
import InfoSwiper from '@views/productInfo/childInfo/InfoSwiper'
import InfoBiaoti from '@views/productInfo/childInfo/InfoBiaoti'
import TabChange from '@views/productInfo/childInfo/TabChange'
import {productInforequest,likesRequest,notLikesRequest} from '@network/api'
import TabNav from '@components/TabNav'
export default {
    name:'ProductInfo',
    data(){
        return{
            imgList:[],//选中的商品轮播图片列表
            biaoTi:{},// 选中的商品信息
            detailImgList:[],//商品详情图片数组
            properties:[],//商品参数
        }
    },
    components:{
        InfoSwiper,
        InfoBiaoti,
        TabChange
    },
    
    created(){
        this.getProductInfo();
    },
    methods:{
        // 点击收藏
        async likesClick(){
            const result = await likesRequest(this.$route.query.id)
            console.log(result)
            if(result.errcode === 90101){   
                this.$router.push("/login")
            }
        },
        // 获取商品信息
        async getProductInfo(id){
            const result = await productInforequest(this.$route.query.id)
            console.log(result)
            const {imgList,detailImgList,properties} = result.data
            this.imgList = imgList
            this.detailImgList = detailImgList
            this.properties = properties
            this.biaoTi = result.data
        },
        
    },
    
}
</script>

<style scoped lang="less">
main{
    margin-top: 46px;
    overflow-y: scroll;//滚动的区域
    height: calc(100vh - 96px);//计算滚动区域的高度
    -webkit-overflow-scrolling: touch;
}
</style>