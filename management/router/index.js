import { createRouter, createWebHashHistory } from 'vue-router'
import { routeReplace } from '&/utils/router'
const emptyComponent = () => import('&/components/empty.vue')

export const menuRoutes =  [
  { 
    path: '/lessons',
    name: '课程管理',
    component: emptyComponent,
    children: [
      {
        path: '',
        component: routeReplace(() => import(/* webpackChunkName: "lessons" */ '&/views/lessons.vue')),
      },
      {
        path:  '/lessons/:grade/:term',
        name: '课程链接',
        component: routeReplace(() => import(/* webpackChunkName: "lessons" */'&/views/lesson.vue')),
      }
    ]
  },
  {
    path: '/words/',
    name: '生字词管理',
    component: () => import(/* webpackChunkName: "words" */'&/views/words.vue')
  }
]

const routes = [
  {
      path: '/',
      component: () => import('&/views/home.vue'),
      children: menuRoutes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router