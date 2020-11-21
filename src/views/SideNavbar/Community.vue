<template>
  <div>
      <h1>Community</h1>
      <section id="community">
        <ReviewForm/>
        <MovieList/>
        <article>
          <RecentReview/>
        </article>
        <aside>
          <BestReviewer/>
        </aside>
      </section>
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
    created: function () {
    const isLogin = this.$store.state.is_login

    if (isLogin === false) {
      this.$router.push({ name: 'Login' })
    }
  } 
}
</script>

<style>
#community {
  width: 80%; /* 너비 80% 만큼 차지 */
  margin: 0 auto; /* 양 옆 마진 똑같이 */
  padding: 1rem 0;
}
</style>