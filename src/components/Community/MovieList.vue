<template>
  <div>
    <!-- 장르 dropdown-->
    <label for="genre">장르</label>
    <select v-model="selectedGenre" id="genre">
        <option disabled value="">전체</option>
        <option>액션</option>
        <option>모험</option>
        <option>애니메이션</option>
        <option>코미디</option>
        <option>범죄</option>
        <option>다큐멘터리</option>
        <option>드라마</option>
        <option>가족</option>
        <option>판타지</option>
        <option>역사</option>
        <option>공포</option>
        <option>음악</option>
        <option>미스터리</option>
        <option>로맨스</option>
        <option>SF</option>
        <option>TV 영화</option>
        <option>스릴러</option>
        <option>전쟁</option>
        <option>서부</option>
    </select>

    <!--영화목록-->
    <div class="row row-cols-3 row-cols-md-5">
      <MovieCard 
      v-for="(movie, idx) in movies"
      :key="idx"
      :movie="movie"
      data-toggle="modal" 
      data-target="#exampleModal"
      />
    </div>

    <!--ReviewForm-->
    <div class="modal fade" id="exampleModal" tabindex="-1" v-if="clickedMovie" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center">
            <h1 class="mb-0"><strong>{{ clickedMovie.title }}</strong></h1>   
          </div>
          <div class="modal-body">
            <form @submit.prevent="createReview"> 
              <div class="form-group my-0">
                <label for="review">Review</label>
                <textarea class="form-control" id="review" rows="5" v-model="article.content"></textarea>
                <button type="submit" class="btn btn-secondary my-3">리뷰작성</button>     
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL
import MovieCard from '@/components/Community/MovieCard'

export default {
 name: 'MovieList',
 components: {
   MovieCard,
 },
 data: function () {
    return {
        selectedGenre: '',
        article: {
          movie_pk: 0,
          content: '',
        },
    }
 },
 methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')

      const config = {
        headers: {
        Authorization: `JWT ${token}`
        }
      }
      return config
    },
    createReview: function () {
      const config = this.setToken()
      this.article.movie_pk = this.clickedMovie.id

      axios.post(`${SERVER_URL}/articles/`,  this.article, config)
        .then(() => {
          this.article.content = ''
        })
        .catch((err) => {
            console.log(err)
        })
    },
 },
 computed: {
    movies: function () {
      return this.$store.state.movies
    },
    clickedMovie: function () {
      return this.$store.state.clickedMovie
    },
 },
}
</script>

<style>
</style>