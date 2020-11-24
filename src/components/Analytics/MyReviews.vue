<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>나의 평가 성향은?</strong></h1>
    <hr />
    <div>
      <h3 class="text-left mx-3"><strong>총 <span id="coloring">{{ profile.articles.length }}</span>편의 영화에 후기를 남겼군요!</strong></h3><br>
      <li
        v-for="(review, idx) in profile.articles"
        :key="idx"
        id="review"
        class="mx-4"
      >
        <h5>{{ review.movie.title }} : {{ review.rank }}</h5><br/>
      </li>
      <div>
          <h5>별점 평균 : </h5>
          <h5>별점 개수 : </h5>
          <h5>많이 준 평점 : </h5>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "MyReviews",
  computed: {
    username: function () {
      return this.$store.state.username
    },
    profile: function () {
      return this.$store.state.profile
    },
  },
};
</script>

<style>
#review {
  list-style: none;
  text-align: left;
}
#coloring {
  color:lightcoral; 
}
hr {
  margin-left: 1rem;
  background-color: white;
  width: 95%;
}
</style>