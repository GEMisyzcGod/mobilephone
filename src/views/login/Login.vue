<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar title="登录/注册"  left-arrow fixed>
            <div slot="left" @click="$router.back()">
                <van-icon name="arrow-left" />
                <span>返回</span>
            </div>
            <template #right>
                <van-icon name="" size="18" />
            </template>
        </van-nav-bar>

        <!-- 注册 -->
        <van-form @submit="onSubmit" class="denglu">
            <van-field
            v-model="loginFrom.name"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
            v-model="loginFrom.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
                登录/注册
            </van-button>
            </div>
        </van-form>

    </div>
</template>
<script>
import {loginRequest} from '@network/api'
export default {
    name:'Login',
    data(){
        return{
            loginFrom:{
                name: '',
                password: '',
            } 
        }
    },
    methods: {
    // 登录/注册
    async onSubmit() {
       const result = await loginRequest(this.loginFrom)
       console.log(result)
       if(result.errcode === 0){
        //  登录或者注册成功
        this.$store.commit("saveUser",result.data)
        sessionStorage.setItem("token",result.data.token)
        this.$router.back()
       }
    },
  },
}
</script>
<style scoped lang='less'>
.denglu{
    margin-top: 46px;
}
</style>