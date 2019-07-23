import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from '@/views/Home.vue'

// 用户相关
import User from '@/views/User/User.vue'
// 登录
import Login from '@/views/User/Login.vue'
// 注册
import Register from '@/views/User/Register.vue'

// 404 Not Found
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 主页
    {
      path: '/',
      name: 'home',
      meta: {
        title: '华理计算机信息交流协会'
      },
      component: Home
    },
    // 关于
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    // 用户相关
    {
      path: "/user",
      name: "user",
      component: User,
      children: [
        {
          path: "login",
          name: "login",
          component: Login
        },
        {
          path: "register",
          name: "register",
          component: Register
        }
      ]
    },
    // 404 not found
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 判断当前的token是否存在
    if (localStorage.token) {
      next();
    } else {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
})

export default router