import Vue from "vue";
import store from "./store";
import axios from "axios";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import DefaultDash from "@/views/DashBoard/Default.vue";

import Activity from "@/views/Activity/Activity.vue";
import Release from "@/views/Activity/Release.vue";
import Overview from "@/views/Activity/Overview.vue";
import Detail from "@/views/Activity/Detail.vue";

import Service from "@/views/Service/Service.vue";
import Repair from "@/views/Service/Repair.vue";

import Forbidden from "@/views/Forbidden.vue";

Vue.use(Router);

const routes = [];

const guestRoutes = [
  {
    path: "*",
    name: "forbidden",
    component: Forbidden,
    meta: {
      title: "Permission Denied"
    }
  }
];

const adminRoutes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "",
        redirect: "/dashboard"
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: DefaultDash,
        meta: {
          title: "DashBoard"
        }
      },
      {
        path: "activity",
        name: "activity",
        component: Activity,
        children: [
          {
            path: "release",
            name: "release",
            component: Release,
            meta: {
              title: "Activity Release"
            }
          },
          {
            path: "overview",
            name: "overview",
            component: Overview,
            meta: {
              title: "Activity OverView"
            }
          },
          {
            path: ":id",
            name: "detail",
            component: Detail,
            meta: {
              title: "Activity Detail"
            }
          }
        ]
      },
      {
        path: "service",
        name: "service",
        component: Service,
        children: [
          {
            path: "repair",
            name: "repair",
            component: Repair,
            meta: {
              title: "Service Repair"
            }
          }
        ]
      }
    ]
  },
  {
    path: "*",
    name: "forbidden",
    component: Forbidden,
    meta: {
      title: "Permission Denied"
    }
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes
});

// router登录控制
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
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
          } else {
            router.addRoutes(guestRoutes);
            store.state.addRoutes = true;
            next("/");
          }
        })
        .catch(error => {
          console.log(error);
          router.addRoutes(guestRoutes);
          store.state.addRoutes = true;
          next("/");
        });
    } else {
      router.addRoutes(guestRoutes);
      store.state.addRoutes = true;
      next("/");
    }
  }
  next();
});

window.router = router;

export default router;
