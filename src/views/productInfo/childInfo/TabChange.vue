<template>

        <van-tabs class="tabs" sticky offset-top="46">

            <van-tab title="图片" >
                <img :src="item.path" v-for="item in detailImgList" :key="item.id">
            </van-tab>

            <van-tab title="参数">

                <van-row v-for="item in properties" :key="item.id">
                    <van-col span="12">{{item.name}}</van-col>
                    <van-col span="12">{{item.detail}}</van-col>
                </van-row>

            </van-tab>
        </van-tabs>
</template>
<script>
import { Toast } from 'vant';
export default {
    name:'TabChange',
    data(){
        return{
            
        }
    },
    props:{
        detailImgList:{
            type:Array
        },
        properties:{
            type:Array
        }
        
    },
    methods:{
        
    }
}
</script>
<style scoped lang="less">
.tabs {
  width: 100%;
  img{
    width: 100%;
  }
}
.van-row {
  font-size: 13px;
  padding: 5px 10px;
}
</style>