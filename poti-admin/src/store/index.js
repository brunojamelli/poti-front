import Vue from 'vue'
import Vuex from 'vuex'
import apiConfig from '../utils/config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
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
      let endpoint = 'login'
      commit('auth_request')
      try {
        let result = await apiConfig.post(`/${endpoint}/`, data)
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
  }
})
