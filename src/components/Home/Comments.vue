<template>
  <div>
      <strong><h1 class="text-left">Comments</h1></strong>
      <div v-if="isLogin">
        <span v-if="movieReviews.length">
          <li id="comment"
          v-for="(comment, idx) in movieReviews"
          :key="idx">
          {{ comment.user }} : {{ comment.content }}
          </li>
        </span>
        <span v-else>
          <p class="text-center">아직 리뷰가 없군요!</p>
        </span>
      </div>
      <div v-else class="mt-3">
        <strong><p class="text-center">다른 사람의 리뷰를 보고 싶다면 로그인 하세요!</p></strong>
        <button class="btn btn-secondary my-1" @click="goLogin">로그인</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Comments',
    methods: {
      goLogin: function () {
        this.$router.push({ name: 'Login' })
      }
    },
    computed: {
      isLogin: function () {
        return this.$store.state.is_login
      }, 
      movieReviews: function () {
        return this.$store.state.movieReviews
      }
    },
}
</script>

<style>
#comment {
  margin-left: 1rem;
  list-style: square;
  text-align: left;
}
</style>