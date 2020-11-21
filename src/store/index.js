import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL
const YOUTUBE_API_URL= 'https://www.googleapis.com/youtube/v3/search'
const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default new Vuex.Store({
  state: {
    movies: [],
    reviews: [],
    profile: {},
    is_login: false,
    username: '',
    searchedMovie: null,
    videos: [],
    movieReviews: [],
    clickedMovie: null, 
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
    GET_REVIEWS: function (state) {
      const config = {
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        }
      }

      axios.get(`${SERVER_URL}/articles/`, config)
       .then(res => {
         state.reviews = res.data
       })
       .catch(err => {
         console.log(err)
       })
    },
    GET_MOVIE_REVIEWS: function (state, movieId) {
      state.movieReviews = state.reviews.filter(review => review.movie === movieId) 
    },
    GET_PROFILE: function (state, username) {
      const config = {
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        }
      }

      axios.get(`${SERVER_URL}/accounts/${username}/`, config)
        .then(res => {
          state.profile = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    LOGIN: function (state, username) {
      state.is_login = true
      state.username = username
      state.searchedMovie = null
      state.videos = []
    },
    LOGOUT: function (state) {
      state.is_login = false
      state.username = ''
      state.searchedMovie = null
      state.videos = []
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
    MOVIE_SEARCH: function (state, searchInput) {
      state.searchedMovie = state.movies.filter(movie => movie.title === searchInput )
    },
    MOVIE_VIDEO_SEARCH: function (state, query) {
      state.videos = []

      axios.get(YOUTUBE_API_URL, {
        params: {
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          q: query,
        }
      })
      .then(res => {
        const r_videos = res.data.items
        for (var i = 0; i < 3; i++) {
          state.videos.push(r_videos[i])
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    CLICKED_MOVIE: function (state, movie) {
      state.clickedMovie = movie
    }
  },
  actions: {
    getMovies({ commit }) {
      commit('GET_MOVIES')
    },
    getReviews({ commit }) {
      commit('GET_REVIEWS')
    },
    getMovieReviews({ commit }, movieId) {
      commit('GET_MOVIE_REVIEWS', movieId)
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
    movieSearch({ commit }, searchInput) {
      commit('MOVIE_SEARCH', searchInput)
    },
    movieVideoSearch({ commit }, searchInput) {
      commit('MOVIE_VIDEO_SEARCH', searchInput)
    },
    clickedMovie({ commit }, movie) {
      commit('CLICKED_MOVIE', movie)
    },
  },
  modules: {
  }
})
