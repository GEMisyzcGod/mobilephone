import {ajax} from './ajax'
// 请求商品数据
export const productRequestList = (params) => {
    return ajax({
        url:'/product/pagination',
        method:'get',
        params
    })
}

// 获取商品详情
export const productInforequest = (id) => {
    return ajax({
        url:'/product',
        method:'get',
        params:{
            id
        }
    })
}
// 获取用户信息
export const userInfoRequest = () => {
    return ajax({
        url:'/user/info',
        method:'get',
    })
}

// 添加收藏
export const likesRequest = (id) => {
    return ajax({
        url:'/product_like/create',
        method:'post',
        params:{
            product_id:id
        }
    })
}
// 取消收藏
export const notLikesRequest = (id) => {
    return ajax({
        url:'/product_like/delete',
        method:'get',
        params:{
            product_id:id
        }
    })
}

// 登录/注册
export const loginRequest = (data) => {
    return ajax({
        url:'/user/signin',
        method:'post',
        data
    })
}