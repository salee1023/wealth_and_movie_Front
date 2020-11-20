<template>
  <div>
      <h1>Community</h1>
      <section>
        <MovieList/>
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
    // Login이 안되어있으면 Login으로 이동
    const isLogin = this.$store.state.is_login

    if (isLogin === false) {
      this.$router.push({ name: 'Login' })
    }
  } 
}
</script>

<style>

</style>