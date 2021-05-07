import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../view '

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
