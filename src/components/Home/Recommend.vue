<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>Recommendation</strong></h1>
    <hr/>
    <div v-if="isLogin">
      <!-- <span v-if="movieReviews.length">
        <li
          v-for="(review, idx) in movieReviews"
          :key="idx"
          id="review"
          class="mx-4"
        >
          <h5>{{ review.user }}</h5>
          <p>{{ review.content }}</p>
          <p>{{ review.created_at }} | {{ review.updated_at }}</p>

          <div v-if="username === review.user" class="mt-2">
            <button type="button" class="btn btn-outline-primary">수정</button>
            <button type="button" class="btn btn-outline-danger mx-1">
              삭제
            </button>
          </div>
          <br />
        </li>
      </span>
      <span v-else>
        <p class="text-center my-3">아직 리뷰가 없군요!</p>
      </span> -->
    </div>

    <div v-else class="my-5 mx-1">
      <h4 class="text-center my-3">이 영화가 내 취향인지 보고 싶다면 로그인 하세요!</h4>
      <b-button size="lg" @click="goLogin" variant="secondary">로그인</b-button>
    </div>


  </div>
</template>

<script>
export default {
  name: "Recommend",
  methods: {
    goLogin: function () {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
</style>