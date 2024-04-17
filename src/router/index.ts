import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuManage from "@/subview/MenuManage.vue";
import BlogManage from "@/subview/BlogManage.vue";
import Setting from "@/subview/Setting.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/info.vue')
    },
    {
      path: '/RecommendedactivityView',
      name: 'info',
      component: () => import('../views/RecommendedactivityView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      children:[
        {
          path: '/menuManage',
          name: 'menuManage',
          component: MenuManage,
        },
        {
          path: '/blogManage',
          name: 'blogManage',
          component: BlogManage,
        },
        {
          path: '/setting',
          name: 'setting',
          component: Setting,
        },
      ]
    }
  ]
})

export default router
