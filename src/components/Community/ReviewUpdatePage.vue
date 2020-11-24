<template>
  <div class="jumbotron jumbotron-fluid p-3 mt-5 text-dark" id="review-page">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="text-left mx-3">{{ clickedReview.user }}</h3>
      <star-rating
        v-model="article.rating"
        active-color="purple"
        :star-size="40"
        class="mx-4"
      >
      </star-rating>
    </div>
    <hr class="bg-dark" />
    <div class="mx-4">
      <textarea
        class="form-control"
        id="review"
        rows="5"
        placeholder="리뷰를 작성해주세요"
        v-model="article.content"
      ></textarea>
    </div>
    <hr class="bg-dark" />
    <div class="d-flex align-items-center">
      <p class="text-left mx-3">👍 : {{ clickedReview.like_users.length }}</p>
    </div>
    <hr class="bg-dark" />
    <div>
      <p class="text-center">댓글</p>
    </div>

    <div
      v-if="username === clickedReview.user"
      class="d-flex justify-content-end mx-3 mt-2"
    >
      <button
        type="button"
        class="btn btn-info text-white mx-1"
        @click="updateReview"
      >
        수정완료
      </button>
      <button
        type="button"
        class="btn btn-danger text-white"
        data-toggle="modal"
        data-target="#deleteModal"
      >
        삭제
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary mx-1"
        @click="gotoHome"
      >
        ↩
      </button>
    </div>

    <!--Review Delete Modal-->
    <div class="modal fade text-dark" id="deleteModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center">
            <h1 class="mb-0"><strong>정말 삭제하시겠습니까?</strong></h1>
          </div>
          <div class="modal-body">
            <b-button
              variant="danger"
              class="m-3 text-light"
              data-dismiss="modal"
              @click="deleteReview"
              >삭제</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import StarRating from "vue-star-rating"
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "ReviewUpdatePage",
  components: {
    StarRating,
  },
  data: function () {
    return {
      article: {
        content: "",
        rating: 0,
      },
    };
  },
  computed: {
    clickedReview: function () {
      return this.$store.state.clickedReview
    },
    username: function () {
      return this.$store.state.username
    },
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem("jwt")

      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };
      return config
    },
    gotoHome: function () {
      this.$router.push({ name: "Home" })
    },
    updateReview: function () {
      const config = this.setToken()
      const review_pk = this.clickedReview.id

      axios.put(`${SERVER_URL}/articles/${review_pk}/`, this.article, config)
        .then(() => {
          this.$store.dispatch("getReview", this.clickedReview.id)
          this.$router.push({ name: "ReviewPage" })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteReview: function () {
      const config = this.setToken();
      const review_pk = this.clickedReview.id

      axios.delete(`${SERVER_URL}/articles/${review_pk}/`, config)
        .then(() => {
          this.$router.push({ name: "Community" })
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.jumbotron {
  width: 50%;
  margin: 0 auto;
}
</style>