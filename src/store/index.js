import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default new Vuex.Store({
  state: {
    movies: [],
    profile: {},
    is_login: false,
    username: '',
  },
  mutations: {
    GET_MOVIES: function (state) {
      const config = {
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        }
      }

      axios.get(`${SERVER_URL}/movies/`, config)
       .then(res => {
         state.movies = res.data
       })
       .catch(err => {
         console.log(err)
       })
    },
    GET_PROFILE: function (state, username) {
      const config = {
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        }
      }

      axios.get(`${SERVER_URL}/accounts/${username}/`, config)
        .then(res => {
          console.log(res)
          state.profile = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    LOGIN: function (state, username) {
      state.is_login = true
      state.username = username
    },
    LOGOUT: function (state) {
      state.is_login = false
      state.username = ''
    },
    FOLLOW: function (state, username) {
      const config = {
        headers: {
          username: state.username,
          Authorization: `JWT ${localStorage.getItem('jwt')}`,
        }
      }

      axios.post(`${SERVER_URL}/accounts/${username}/`, config)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  actions: {
    // searchBar 동작
    getMovies({ commit }) {
      commit('GET_MOVIES')
    },
    getProfile({ commit }, username) {
      commit('GET_PROFILE', username)
    },
    login({ commit }, username) {
      commit('LOGIN', username)
    },
    logout({ commit }) {
      commit('LOGOUT')
    },
    follow({ commit }, username) {
      commit('FOLLOW', username)
    },
  },
  modules: {
  }
})
