import Vue from 'vue'
import App from './App.vue'

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
// bootstrap-dropdown-hover
import 'bootstrap-dropdown-hover/dist/jquery.bootstrap-dropdown-hover.min.js'

// font-awesome
import 'font-awesome/css/font-awesome.min.css'

// jquery.magnific-popup.js
import './assets/css/magnific-popup.css'
import './assets/js/jquery.magnific-popup.min.js'

// animation文字特效
import 'animate.css/animate.min.css'
// textillate
import 'textillate'
// lettering.js
import './assets/js/jquery.lettering.js'
// wow.js
import "wowjs";

// Vue-Particles粒子特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

// vue-fullpage.js
// import 'fullpage.js/vendors/scrolloverflow.min.js'
import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)

// Vee-validate
import Veevalidate from 'vee-validate'
Vue.use(Veevalidate)

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

// Global Values
import globals from "@/Global.vue"
Vue.prototype.globals = globals

// Components
Vue.component('remote-script', {
  render: function (createElement) {
      var self = this;
      return createElement('script', {
          attrs: {
              type: 'text/javascript',
              src: this.src
          },
          on: {
              load: function (event) {
                  self.$emit('load', event);
              },
              error: function (event) {
                  self.$emit('error', event);
              },
              readystatechange: function (event) {
                  if (this.readyState == 'complete') {
                      self.$emit('load', event);
                  }
              }
          }
      });
  },
  props: {
      src: {
          type: String,
          required: true
      }
  }
});

// devtools
Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    title: '华理计算机信息交流协会'
  }
}).$mount('#app')