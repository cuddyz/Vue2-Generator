import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alert: null,
    isLoading: false
  },
  mutations: {
    setLoading (state) {
      state.isLoading = true
    },
    clearLoading (state) {
      state.isLoading = false
    },
    setAlert (state, alert) {
      state.alert = alert
    }
  },
  getters: {},
  actions: {
    createAlert({commit}, alert) {
      commit('setAlert', alert)
    },
    clearAlert({commit}) {
      commit('setAlert', null)
    }
  }
})
