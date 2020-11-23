<template>
  <div>
    <h1 class="text-left m-3"><strong>Recent Review</strong></h1>
    <hr />
    <li id="reviews" v-for="(review, idx) in this.reviews" :key="idx">
      <h5>
        <strong>{{ review.user }}</strong>
      </h5>
      <p>{{ review.content }}</p>
      <br />
    </li>
  </div>
</template>

<script>
export default {
  name: "RecentReview",
  computed: {
    reviews: function () {
      return this.$store.state.reviews;
    },
  },
};
</script>

<style>
#reviews {
  margin-left: 1rem;
  list-style: none;
  text-align: left;
}
</style>