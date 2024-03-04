import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const commonRoutes = [
  // {
  //       path: '/login',
  //       name: 'login',
  //       meta: {
  //           title: '登录'
  //       },
  //       component: () => import('../views/login/index.vue'),
  //   },
    {
        path: '/',
        redirect: '/login/index',
    }, 
    {
      path: '/login',
      component: () => import('@/views/layout/layout.vue'),
      children:[
        {

          path: '/login/index',
          name: 'login',
          meta: {
              title: '登录页'
          },
          component: () => import('@/views/login/index.vue'),
        },
      ],
  },
  {
    path: '/logon',
    component: () => import('@/views/layout/layout.vue'),
    children:[
      {

        path: '/login/logon',
        name: 'logon',
        meta: {
            title: '登录页1'
        },
        component: () => import('@/views/login/logon.vue'),
      },
    ],
},
{
  path: '/register',
  component: () => import('@/views/layout/layout.vue'),
  children:[
    {

      path: '/login/register',
      name: 'register',
      meta: {
          title: '注册'
      },
      component: () => import('@/views/login/register.vue'),
    },
  ],
},
    {
      path: '/',
      component: () => import('@/views/layout/layoutUser.vue'),
      children:[
        {

          path: '/home',
          name: 'home',
          meta: {
              title: '首页'
          },
          component: () => import('@/views/home/index.vue'),
        },
      ],
  },
    {
        path: '/error',
        name: 'error',
        meta: {
            title: 'error'
        },
        component: () => import('../views/error.vue'),
    }
]

const createRouter = () => new Router({
    mode: 'history',
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}
export default router

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}