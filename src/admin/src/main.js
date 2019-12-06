import Vue from "vue";

// vue-router
import router from "./router";

// vuex
import store from "./store";

// vue-cookies
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

// jquery
import jQuery from "jquery";
window.$ = jQuery;

// bootstrap
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// bootstrap-select
import "bootstrap-select/dist/js/bootstrap-select.min.js";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
// metismenu
import "metismenu/dist/metisMenu.min.css";
import "metismenu/dist/metisMenu.min.js";
// slim-scoll
import "jquery-slimscroll/jquery.slimscroll.min.js";
// smooth-scroll
import "smooth-scroll/dist/smooth-scroll.polyfills.min.js";

// font-awesome
import "font-awesome/css/font-awesome.min.css";
// import './assets/fontawesome/css/all.min.css'
// import './assets/fontawesome/js/all.min.js'

// line-icons
import "@/assets/css/line-icons.css";

// mavon-editor
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

// vue-datatables-net
import VueDataTables from "vue-datatables-net";
import "datatables.net-bs4";
// import buttons and plugins
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
// import the rest
import "datatables.net-buttons-bs4";
import "datatables.net-select-bs4";
import "datatables.net-select-bs4/css/select.bootstrap4.min.css";
import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
console.log(VueDataTables);
Vue.component("VdtnetTable", VueDataTables);

// axios
// import qs from 'qs'
import axios from "axios";
Vue.prototype.$ajax = axios;
axios.defaults.headers["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
axios.interceptors.request.use(
  config => {
    const token = store.state.token;
    if (token) {
      config.headers.common["Authorization"] = token;
    }
    // config.data = qs.stringify(config.data, {
    //     indices: false
    // });
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Global Values
import globals from "@/Global.vue";
Vue.prototype.globals = globals;

// devtools
Vue.config.devtools = process.env.NODE_ENV === "development";

Vue.config.productionTip = false;

import App from "./App.vue";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
