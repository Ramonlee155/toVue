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
      path: '/member/agreement',
      name: 'agreement',
      meta: {
          title: '用户协议'
      },
      component: () => import('@/views/member/agreement/index.vue'),
  },
  {
    path: '/member/index',
    name: 'memberIndex',
    meta: {
        title: '独霸'
    },
    component: () => import('@/views/member/index.vue'),
},
//     {
//       path: '/',
//       component: () => import('@/views/layout/index.vue'),
//       children:[
//         {

//           path: '/home',
//           name: 'home',
//           meta: {
//               title: '首页'
//           },
//           component: () => import('@/views/home/index.vue'),
//         },
//       ],
//   }

  ]
})

export default router
