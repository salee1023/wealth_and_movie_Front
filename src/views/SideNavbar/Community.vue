<template>
  <div>
      <h1>Community</h1>
      <section>
        <ReviewForm :clickedMovieData="clickedMovieData"/>
        <MovieList @clicked-movie="clickedMovie"/>
      </section>
      <article>
        <RecentReview/>
      </article>
      <aside>
        <BestReviewer/>
      </aside>
  </div>
</template>

<script>
import MovieList from '@/components/Community/MovieList'
import ReviewForm from '@/components/Community/ReviewForm'
import RecentReview from '@/components/Community/RecentReview'
import BestReviewer from '@/components/Community/BestReviewer'

export default {
    name: 'Community',
    components: {
      MovieList,
      RecentReview,
      BestReviewer,
      ReviewForm,
    },
    data: function () {
      return {
        clickedMovieData: {},
      }
    },
    methods: {
      clickedMovie: function (res) {
        this.clickedMovieData = res
      }
    },
    created: function () {
    // Login이 안되어있으면 Login으로 이동
    const isLogin = this.$store.state.is_login

    if (isLogin === false) {
      this.$router.push({ name: 'Login' })
    }
  } 
}
</script>

<style>
ReviewForm {
  position: relative;
  z-index: 2;
}
MovieList {
  position: relative;
  z-index: 1;
}
</style>