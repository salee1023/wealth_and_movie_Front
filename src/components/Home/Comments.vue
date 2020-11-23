<template>
  <div>
      <h1 class="text-left"><strong>Comments</strong></h1>
      <div v-if="isLogin">
        <span v-if="movieReviews.length">
          <li 
            v-for="(review, idx) in movieReviews"
            :key="idx"
            id="review"
            class="mx-2"
            >
            <h5>{{ review.user }}</h5>
            <p>{{ review.content }}</p>
            <p>{{ review.created_at }} | {{ review.updated_at}}</p>

            <div v-if="username === review.user">
              <button type="button" class="btn btn-outline-primary"> 수정 </button>
              <button type="button" class="btn btn-outline-danger"> 삭제 </button>        
            </div>
            <hr>
          </li> 
        </span>
        <span v-else>
          <p class="text-center">아직 리뷰가 없군요!</p>
        </span>
      </div>
      <div v-else class="mt-3">
        <strong><p class="text-center">다른 사람의 리뷰를 보고 싶다면 로그인 하세요!</p></strong>
        <b-button @click="goLogin" variant="secondary">로그인</b-button>
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
      },
      username: function () {
      return this.$store.state.username
      },
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