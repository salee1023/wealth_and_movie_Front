<template>
  <div class="home">
    <header>
        <h5>우리 프로젝트 이름 부귀영화어때??? 보면 매터모스트 ㄱㄱ</h5>  
      <Search-bar/>
    </header>
    <!--movie정보가 있을 때 show-->
    <section id="movie" v-if="searchData">
      <Movie/>
      <section id="detail">
        <article><MovieDetail/></article>
        <aside><MovieVideo/></aside>
      </section>
      <hr>
      <Comments/>
      <hr>
      <Recommend/>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/Home/SearchBar'
import Movie from '@/components/Home/Movie' 
import MovieDetail from '@/components/Home/MovieDetail' 
import MovieVideo from '@/components/Home/MovieVideo' 
import Comments from '@/components/Home/Comments' 
import Recommend from '@/components/Home/Recommend' 

export default {
  name: 'Home',
  components: {
    SearchBar,
    Movie,
    MovieDetail,
    MovieVideo,
    Comments,
    Recommend,
  },
  computed: {
    searchData: function () {
      return this.$store.state.searchedMovie
    } 
  }
}
</script>

<style>
header,
#movie {
  width: 60%; /* 너비 80% 만큼 차지 */
  margin: 0 auto; /* 양 옆 마진 똑같이 */
  padding: 1rem 0;
}
#detail {
  display: flex;
}
article {
  width: 100%;
  margin-top: 1rem;
  margin-right: 1rem;
  border-right: 3pt groove lightgrey;
}
aside {
  margin-top: 1rem;
}
h1 {
  text-align: left;
  font: bold;
}
</style>
