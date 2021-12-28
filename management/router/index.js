import { createRouter, createWebHashHistory } from 'vue-router'

export const menuRoutes =  [
  { 
    path: '/lessons',
    name: '课程管理',
    component: () => import('&/views/lessons.vue'),
    children: [
      {
        path:  '/lessons/:grade/:term',
        name: '课程链接',
        component: () => import('&/views/lesson.vue'),
      }
    ]
  },
  {
    path: '/words/',
    name: '生字词管理',
    component: () => import('&/views/words.vue')
  },
]

const routes = [
  {
      path: '/',
      component: () => import('&/views/home.vue'),
      children: menuRoutes
  },
  {
    path:  '/lessons/:grade/:term',
    name: '课程链接',
    component: () => import('&/views/lesson.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router