import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';

const Home = () => import('@/views/home/index.vue');

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router