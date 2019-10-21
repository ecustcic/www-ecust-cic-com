import Vue from 'vue'
import store from './store'
import axios from 'axios'
import Router from 'vue-router'

import Home from './views/Home.vue'
import DefaultDash from './views/DashBoard/Default.vue'

import Forbidden from './views/Forbidden.vue'

Vue.use(Router)

const routes = []

const guestRoutes = [{
  path: '*',
  name: 'forbidden',
  component: Forbidden,
  meta: {
    title: "Permission Denied"
  }
}]

const adminRoutes = [{
  path: '/',
  name: 'home',
  component: Home,
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: DefaultDash,
      meta: {
        title: 'DashBoard'
      }
    }
  ]
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import( /* webpackChunkName: "about" */ './views/About.vue')
},
{
  path: '*',
  name: 'forbidden',
  component: Forbidden,
  meta: {
    title: "Permission Denied"
  }
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})

// router登录控制
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (!store.state.addRoutes) {
    // 判断当前的token是否存在
    if (router.app.$cookies.isKey("ECUST-CIC")) {
      // 判断是否是管理员
      axios
        .get("/api/admin/check")
        .then(res => {
          if (res.data.ret === 0) {
            router.addRoutes(adminRoutes);
            store.state.addRoutes = true;
            next();
          }
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        });
    }
    router.addRoutes(guestRoutes);
    store.state.addRoutes = true;
  }
  next()
})

window.router = router

export default router