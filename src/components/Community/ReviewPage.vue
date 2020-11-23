<template>
  <div class="jumbotron jumbotron-fluid p-3 mt-5 text-dark" id="review-page">
    <!--User-->
    <div class="d-flex justify-content-between align-items-center my-1">
      <h3 class="text-left mx-3 my-1">{{ clickedReview.user }}</h3>
      <h4 class="mx-5 my-1">⭐: {{ clickedReview.rank }}</h4>
    </div>
    <hr class="bg-dark" />
    <!--Review Content-->
    <div>
      <h5 class="text-left ml-3"><strong>{{ clickedMovie.title }}</strong></h5><br>
      <h4 class="text-left ml-3">"{{ clickedReview.content }}"</h4>
      <p class="text-right mx-5">
        {{ clickedReview.created_at }} | {{ clickedReview.updated_at }}
      </p>
    </div>
    <hr class="bg-dark" />
    <!--Like-->
    <div class="d-flex align-items-center" v-if="is_liked">
        <p class="text-left mx-3">👍 : {{ clickedReview.like_users.length + 1 }}</p>
        <button class="btn btn-danger" @click="likeReview">좋아요👍</button>
    </div>
    <div class="d-flex align-items-center" v-else>  
      <p class="text-left mx-3">👍 : {{ clickedReview.like_users.length }}</p>
      <button class="btn btn-outline-danger" @click="likeReview">좋아요</button>
    </div>  
    <hr class="bg-dark" />
    <!--Comments Form-->
    <div class="ml-3 mr-4">
      <input type="text" class="form-control" placeholder="댓글을 입력해주세요!" @keypress.enter="createComment">
    </div>
    


    <!--UPDATE / DELETE / BACK -->
    <div class="d-flex justify-content-end mx-3 mt-2">
      <span v-if="username === clickedReview.user">
        <button 
          type="button" 
          class="btn btn-secondary text-white mx-1"
          @click="updateReview"
        >
          수정
        </button>
        <button
          type="button"
          class="btn btn-danger text-white"
          data-toggle="modal"
          data-target="#deleteModal"
        >
          삭제
        </button>
      </span>
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
          <b-button variant="danger" class="m-3 text-light" data-dismiss="modal" @click="deleteReview">삭제</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "ReviewPage",
  data: function () {
    return {
      is_liked: false,
    }
  },
  computed: {
    clickedReview: function () {
      return this.$store.state.clickedReview
    },
    clickedMovie: function () {
      return this.$store.state.clickedMovie
    },
    username: function () {
      return this.$store.state.username
    },
    likes: function () {
      return this.clickedReview.like_users.length
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem("jwt")

      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
      return config
    },
    gotoHome: function () {
      this.$router.push({ name: "Home" })
    },
    updateReview: function () {
      this.$router.push({ name: "ReviewUpdatePage" })
    },
    deleteReview: function () {
      const config = this.setToken()
      const review_pk = this.clickedReview.id

      axios.delete(`${SERVER_URL}/articles/${review_pk}/`, config)
        .then(() => {
          this.$router.push({ name: "Community" })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    likeReview: function () {
      const config = this.setToken()
      const review_pk = this.clickedReview.id

      axios.post(`${SERVER_URL}/articles/${review_pk}/like/`, review_pk, config)
        .then((res) => {
          this.is_liked = res.data.like
        })
        .catch((err) => {
          console.log(err)
        })
    },
    createComment: function (event) {
      const config = this.setToken()
      const review_pk = this.clickedReview.id
      const content = event.target.value

      axios.post(`${SERVER_URL}/articles/${review_pk}/comment/`, {'content': content}, config)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created: function () {
    window.scrollTo(0, 0)
  },
};
</script>

<style>
.jumbotron {
  width: 50%;
  margin: 0 auto;
}

</style>