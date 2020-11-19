import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_movie: '',
    is_login: false,

  },
  mutations: {
    MOVIE_SEARCH: function (state, searchInput) {
      state.is_movie = 'a'
      console.log(searchInput)
    },
    LOGIN: function (state) {
      state.is_login = true
      console.log(state.is_login)
    },
    LOGOUT: function (state) {
      state.is_login = false
    }
  },
  actions: {
    // searchBar 동작
    movieSearch({ commit }, searchInput) {
      commit('MOVIE_SEARCH', searchInput)
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
