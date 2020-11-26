<template>
  <div>
    <h1 class="text-left m-3"><strong>Best Review</strong></h1>
    <hr/>
    <li id="reviews" v-for="(review, idx) in this.reviews" :key="idx">
      <h5>
        <strong>{{ review.user }}</strong>
      </h5>
      <p>{{ review.content }}</p>
      <p class="mt-2 d-flex align-items-center">
        👍 {{ review.like_users.length }}
        <button
          type="button"
          class="btn btn-outline-info btn-sm mx-2"
          @click="clickedReview(review)"
          data-dismiss="modal"
        >
        리뷰 보기
        </button>
      </p>
      <br />
    </li>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "BestReview",
  computed: {
    reviews: function () {
      const sortedReview = _.orderBy(this.$store.state.reviews, function(review) { return review.like_users.length}, ['desc'])
      const bestReview = _.slice(sortedReview, 0, 10)
      return bestReview
    },
  },
  methods: {
    clickedReview: function (review) {
      this.$store.dispatch("clickedReview", review)
      this.$router.push({ name: 'ReviewPage'})
    },
  }
};
</script>

<style>
#reviews {
  margin-left: 1rem;
  list-style: none;
  text-align: left;
}
</style>