<template>
    <div>
                <!-- 轮播图 -->
            <template>
                <swiper ref="mySwiper" :options="swiperOptions" class="swiper"> 
                    <swiper-slide v-for="item in imgList" :key="item.id">
                        <img :src="item.path">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </template>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'InfoSwiper',
    components:{
                Swiper,
                SwiperSlide
    },
    props:{
        imgList:{
            type:Array
        }
    },
    data() {
      return {
        swiperOptions: {
        autoplay: {
          delay: 2000
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
          // Some Swiper option/callback...
        }
      }
    },
    directives: {
        swiper: directive
    },
    // 轮播
    mounted(){
    },
     computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
}
</script>
<style scoped lang="less"> 
.swiper{
    height: 300px;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>>