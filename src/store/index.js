import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default new Vuex.Store({
  state: {
    movies: [],
    is_login: false,
  },
  mutations: {
    GET_MOVIES: function (state, config) {
      axios.get(`${SERVER_URL}/movies/`, config)
       .then(res => {
         state.movies = res.data
       })
       .catch(err => {
         console.log(err)
       })
    },
    LOGIN: function (state) {
      state.is_login = true
    },
    LOGOUT: function (state) {
      state.is_login = false
    }
  },
  actions: {
    // searchBar 동작
    getMovies({ commit }, config) {
      commit('GET_MOVIES', config)
    },
    login({ commit }){
      commit('LOGIN')
    },
    logout({ commit }){
      commit('LOGOUT')
    }
  },
  modules: {
  }
})
