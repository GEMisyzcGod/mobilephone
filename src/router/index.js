import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import("@views/home/Home")
const Cart = () => import("@views/cart/Cart")
const Me = () => import("@views/me/Me")
const ProductInfo = () => import("@views/productInfo/ProductInfo")
const Login = () => import("@views/login/Login")


  const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/login',
    component:Login,
    nane:'Login'
  },
  {
    path:'/productinfo',
    component:ProductInfo,
    nane:'ProductInfo'
  },
  {
    path: '/home',
    component:Home,
    name:'Home',
  },
  {
    path: '/cart',
    component:Cart,
    name:'Cart'
  },
  {
    path: '/me',
    component:Me,
    name:'Me'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
