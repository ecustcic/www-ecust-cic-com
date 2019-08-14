import Vue from 'vue'
import App from './App.vue'

// vue-router
import router from './router'

// vuex
import store from './store'

// jquery
import 'jquery'

// bootstrap
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// font-awesome
import 'font-awesome/css/font-awesome.min.css'

// animation文字特效
import 'animate.css/animate.min.css'
// textillate
import 'textillate'
// lettering.js
import './assets/js/jquery.lettering.js'

// Vue-Particles粒子特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

// ParticleGround粒子特效
import './assets/js/jquery.particleground.min.js'

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