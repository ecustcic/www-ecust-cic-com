import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    admin: false,
    token: ''
  },
  mutations: {
    login: (state, token) => {
      const user = JSON.parse(window.atob(token.split(".")[1]));
      state.name = user.name;
      state.admin = user.admin;
      state.token = token;
    },
    logout: (state) => {
      state.name = '';
      state.admin = false;
      state.token = '';
    }
  },
  actions: {

  }
})