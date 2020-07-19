<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="star-o" to="/">精选</van-tabbar-item>
            <van-tabbar-item name="cart" icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item name="me" icon="manager-o" to="/me">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name:'TabTag',
    data(){
        return {
            active:'home',
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>