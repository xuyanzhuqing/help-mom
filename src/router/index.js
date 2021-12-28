import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/home.vue'),
        children: [
            { path: '/lesson/:uuid', component: () => import('@/views/lesson.vue') },
            { path: '/xinhua-word/', component: () => import('@/views/xinhua-word.vue') },
        ]
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router