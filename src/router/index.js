import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'
const Category = () => import('views/category/Category.vue')                 //路由懒加载
const Shopcart = () => import('views/shopcart/Shopcart.vue') 
const Profile = () => import('views/profile/Profile.vue') 
const Detail = () => import('views/detail/Detail.vue') 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/shopcart',
    component: Shopcart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      showTabbar: false,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push                     //解决页面重复点击的报错问题
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
