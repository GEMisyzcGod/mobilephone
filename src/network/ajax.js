import axios from 'axios'
import router from './../router'
export const ajax = (config) => {
    const example = axios.create({
        // 配置公共域
        baseURL:'/api/v4',
        // 请求时长
        timeout:'6666'
    })
    // 请求拦截
    example.interceptors.request.use(config => {
        return config
    }),
    // 响应拦截
    example.interceptors.response.use(response => {
        return response.data
    })

    return example(config)
}