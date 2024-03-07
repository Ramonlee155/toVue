import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/agreement',
      name: 'agreement',
      meta: {
          title: '用户协议'
      },
      component: () => import('@/views/agreement/index.vue'),
  },
    {
      path: '/',
      component: () => import('@/views/layout/index.vue'),
      children:[
        {

          path: '/member/index',
          name: 'member',
          meta: {
              title: '首页'
          },
          component: () => import('@/views/member/index.vue'),
        },
      ],
  }

  ]
})

export default router
