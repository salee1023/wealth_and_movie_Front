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
      @clicked-movie="clickedMovie"
      />
    </div>

  </div>
</template>

<script>
import MovieCard from '@/components/Community/MovieCard'

export default {
 name: 'MovieList',
 components: {
   MovieCard,
 },
 data: function () {
    return {
        selectedGenre: '',
    }
 },
 methods: {
    clickedMovie: function (movie) {
      this.$emit('clicked-movie', movie)
    }
 },
 computed: {
    movies: function () {
      return this.$store.state.movies
    },
 },
}
</script>

<style>

</style>