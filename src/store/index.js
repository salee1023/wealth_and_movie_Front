import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_movie: '',

  },
  mutations: {
    MOVIE_SEARCH: function (state, searchInput) {
      state.is_movie = 'a'
      console.log(searchInput)
    }
  },
  actions: {
    // searchBar 동작
    movieSearch({ commit }, searchInput) {
      commit('MOVIE_SEARCH', searchInput)
    }
  },
  modules: {
  }
})
