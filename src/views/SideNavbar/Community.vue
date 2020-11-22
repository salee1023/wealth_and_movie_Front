<template>
  <div>
      <h1 id="community-title"><strong>Community</strong></h1>
      <section id="community">
        <MovieList/>
        <hr>
        <section id="reviews">
          <article id="recent-review"><RecentReview/></article>
          <aside id="bext-reviewer"><BestReviewer/></aside>
        </section>
      </section>
      <br><br><br>
  </div>
</template>

<script>
import MovieList from '@/components/Community/MovieList'
import RecentReview from '@/components/Community/RecentReview'
import BestReviewer from '@/components/Community/BestReviewer'

export default {
    name: 'Community',
    components: {
      MovieList,
      RecentReview,
      BestReviewer,
    },
    created: function () {
    const isLogin = this.$store.state.is_login

    if (isLogin === false) {
      this.$router.push({ name: 'Login' })
      }
    },
}
</script>

<style>
#community {
  width: 80%; /* 너비 80% 만큼 차지 */
  margin: 0 auto; /* 양 옆 마진 똑같이 */
  padding: 1rem 0;
}
#community-title {
  font-size: 5rem;
}
#reviews {
  display: flex;
}
#recent-review {
  width: 70%;
  margin-top: 1rem;
  margin-right: 1rem;
  border-right: 3pt groove lightgrey;
}
</style>