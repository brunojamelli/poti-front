import Vue from 'vue'
import Vuex from 'vuex'
import apiConfig from '../utils/config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    titlePage: "",
    titleHome: ""
  },
  mutations: {
    setTitle(state, payload) {
      state.titlePage = payload;
    },
    setTitleHome(state, payload) {
      state.titleHome = payload;
    },
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    
  },
  actions: {
    async login({ commit }, data) {
      let endpoint = 'loginAn'
      commit('auth_request')
      try {
        let result = await apiConfig.post(`/${endpoint}/`, data)
        window.console.log(result.data.token);
        const token = result.data.token

        localStorage.setItem('token', token);

        // axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token)
        window.console.log(result);
      } catch (error) {
        window.console.log(error)
      }
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        // delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    titlePage: state => state.titlePage,
    titleHome: state => state.titleHome,
  }
})
