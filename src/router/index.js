import { createRouter, createWebHashHistory } from 'vue-router'
import emptyPage from '@/components/empty.vue'
const routes = [
    {
      path: '/',
      component: () => import('@/views/entry.vue'),
    },
    {
      path: '/locator',
      component: emptyPage,
      children: [
        {
          path: '',
          component: () => import('@/views/locator/phase.vue'),
        },
        {
          path: '/grade',
          component: () => import('@/views/locator/grade.vue'),
        },
        {
          path: '/subject',
          component: () => import('@/views/locator/subject.vue'),
        }
      ]
    },
    {
      path: '/home',
      component: () => import('@/views/home.vue'),
      children: [
          { path: '/cases', component: () => import('@/views/cases.vue') },
          { path: '/lesson', component: () => import('@/views/lesson.vue') },
          { path: '/xinhua-word/', component: () => import('@/views/xinhua-word.vue') },
      ]
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router