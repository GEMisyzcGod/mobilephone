<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar title="精选"  left-arrow fixed	>
            <div slot="left">
                <van-icon name="location-o" />
                <span>深圳市</span>
            </div>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>

        <!-- 商品数据 -->
        <main ref="gd" @scroll="mainScroll">
            <div class="product" v-for="item in productList" :key="item.id" @click="infoClick(item.id)">
                <div class="img">
                    <img :src="item.cover">
                </div>
                <div class="item">
                    <h2>{{item.name}}</h2>
                    <span>￥{{item.price}}</span>
                </div>
            </div>
        </main>


        <!-- 底部导航 -->
       <TabTag></TabTag>

        <!-- 返回顶部按钮 -->
        <van-icon name="upgrade" class="up" v-if="backTop" @click="backTopClick"/>

    </div>
</template>
<script>
import {productRequestList} from '@network/api'
import TabTag from '@components/TabTag'
export default {
    
    name:'Cart',
    components:{
        TabTag
    },
    data(){
        return {
            active:'home',
            page:1,
            productList:[],//商品列表
            totalPages:0,//商品总页数
            flag:false,
            backTop:false,
        }
    },
    created(){
        this.getProduct(this.page)
    },
    methods: {
        // 点击获取商品详情
        infoClick(id){
            this.$router.push({
                path:'/productinfo',
                query:{
                    id
                }
            })
        },
        // 点击返回顶部
        backTopClick(){
            // alert("kkk")
            this.$refs.gd.scrollTop = 0
        },
        // 监听滚动时间
        mainScroll(){
            // console.log(this.$refs.gd.clientHeight)//滚动高度
            // console.log(this.$refs.gd.scrollTop)//可见高度
            // console.log(this.$refs.gd.scrollHeight)//滚动区域的高度 
            // 判断返回顶部按钮出现
            if(this.$refs.gd.scrollTop >= 1666){
                this.backTop = true
            }else{
                this.backTop = false
            }
            // 如果falg的值为false就直接返回 说明
            if(this.flag){
                return
            }
            if(this.$refs.gd.clientHeight + this.$refs.gd.scrollTop >= this.$refs.gd.scrollHeight - 1){
                this.page++
                // 判断是否还有数据
                if(this.page > this.totalPages){
                    this.$toast("没有更多数据了...")
                    return
                }
                // 继续请求数据
                this.getProduct(this.page)
            }   
        },
        // 请求商品数据
        async getProduct(page){
            // flag为true的时候发送请求
            this.flag = true
           const result = await productRequestList({page,size:10})
        //    console.log(result)
            if(result.errcode === 0){
                // 请求成功
                const {data,totalPages} = result.data
                this.productList = [...this.productList,...data]
                this.totalPages = totalPages
                // 发送请求完成后为false
                this.flag = false
            }   
        }
    },
    
}
</script>
<style scoped lang='less'>
main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 46px;
    overflow-y: scroll;//滚动的区域
    height: calc(100vh - 96px);//计算滚动区域的高度
     -webkit-overflow-scrolling: touch;
    .product{
        width: 48vw;
        height: 240px;
        position: relative;
        margin: 5px 2px;
        box-shadow: 0 0 4px rgba(0, 0, 0, .3);
        
        .img{
            width: 100%;
            height: 190px;
            img{    
                width: 100%;
                height: 100%;
            }
        }
        .item{
            height: 50px;
            position:absolute;
            bottom: 2px;
            left: 0;
            width: 100%;
            h2{
                font-size: 14px;
                white-space: nowrap;
                overflow-x: hidden;
                text-overflow: ellipsis;
                margin: 5px 5px;
            }
            span{
                color: orange;
                font-size: 12px;
                margin: 3px 5px;
            }
        }
        
    }
}
.up{
    position: fixed;
    right: 30px;
    bottom: 77px;
    font-size: 50px;
    color: #ccc;
}
</style>