import Vue from 'vue'

// vue-router
import router from './router'

// vuex
import store from './store'

// vue-cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// jquery
import jQuery from 'jquery'
window.$ = jQuery

// bootstrap
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// metismenu
import 'metismenu/dist/metisMenu.min.css'
import 'metismenu/dist/metisMenu.min.js'
// slim-scoll
import 'jquery-slimscroll/jquery.slimscroll.min.js'
// smooth-scroll
import 'smooth-scroll/dist/smooth-scroll.polyfills.min.js'

// font-awesome
import './assets/fontawesome/css/all.min.css'
import './assets/fontawesome/js/all.min.js'

// line-icons
import './assets/css/line-icons.css'

// mavon-editor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// axios
import qs from 'qs'
import axios from 'axios'
Vue.prototype.$ajax = axios;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use(
    config => {
        const token = store.state.token;
        if (token) {
            config.headers.common['Authorization'] = token;
        }
        config.data = qs.stringify(config.data, {
            indices: false
        });
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)


// devtools
Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.config.productionTip = false

import App from './App.vue'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')