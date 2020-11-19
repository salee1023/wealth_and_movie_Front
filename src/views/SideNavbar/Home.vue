<template>
  <div class="home">
    <header>
        <h5>우리 프로젝트 이름 정해줘...안그럼 JSSA로 해버릴거임</h5>  
      <Search-bar/>
    </header>
    <!--movie정보가 있을 때 show-->
    <section>
      <Movie/>
      <MovieDetail/>
      <MovieVideo/>
      <Comments/>
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
}
</script>

<style>
header {
  width: 70%; /* 너비 80% 만큼 차지 */
  margin: 0 auto; /* 양 옆 마진 똑같이 */
  padding: 1rem 0;
}
</style>
