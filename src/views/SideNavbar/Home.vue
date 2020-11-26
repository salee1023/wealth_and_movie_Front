<template>
  <div class="home">
    <header>
      <Search-bar />
    </header>
    <!--movie정보가 있을 때 show-->
    <section id="movie" v-if="searchData">
      <Movie />
      <section id="details">
        <article id="detail-info"><MovieDetail /></article>
        <aside id="detail-movie"><MovieVideoList /></aside>
      </section>
      <section id="comments">
        <Comments/>
      </section>
      <section id="recommend" style="border-bottom-left-radius: .3rem; border-bottom-right-radius: .3rem;">
        <Recommend/>
      </section>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/Home/SearchBar"
import Movie from "@/components/Home/Movie"
import MovieDetail from "@/components/Home/MovieDetail"
import MovieVideoList from "@/components/Home/MovieVideoList"
import Comments from "@/components/Home/Comments"
import Recommend from "@/components/Home/Recommend"

export default {
  name: "Home",
  components: {
    SearchBar,
    Movie,
    MovieDetail,
    MovieVideoList,
    Comments,
    Recommend,
  },
  computed: {
    searchData: function () {
      return this.$store.state.searchedMovie;
    },
    username: function () {
      return this.$store.state.username;
    },
  },
  created: function () {
    this.$store.dispatch("initialize")
    this.$store.dispatch("getMovies")
    this.$store.dispatch("getReviews")
    this.$store.dispatch("getProfile", this.username)
    window.scrollTo(0, 0)
  },
};
</script>

<style>
header,
#movie {
  width: 60%; /* 너비 80% 만큼 차지 */
  margin: 0 auto; /* 양 옆 마진 똑같이 */
  padding: 1rem 3rem;
}
#details,
#comments,
#recommend {
  display: flex;
  padding: 1rem 1rem;
  background-color: rgb(0, 0, 0, 0.6);
}
#detail-info {
  width: 90%;
  margin: 2rem 1rem 1rem 1rem;
  border-right: 3pt groove lightgrey;
}
aside {
  margin-top: 1rem;
}
</style>
