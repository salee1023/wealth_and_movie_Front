<template>
  <div class="text-dark">
    <div class="search-bar input-group w-50" style="margin: auto">
      <input
        type="text"
        class="form-control"
        v-model="searchInput"
        placeholder="사용자를 검색해주세요"
        @keypress.enter="onEnter"
        @click="onKey"
      />
      <div class="input-group-append">
        <button @click="onEnter" class="btn btn-secondary" id="button-addon2">
          🔍
        </button>
      </div>
    </div>
    <div class="row py-5 px-4" v-if="this.$store.state.is_login">
      <div class="col-md-7 mx-auto">
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  :src="profile.profile"
                  alt="이미지가 없습니다."
                  width="130"
                  class="rounded mb-3 img-thumbnail"
                />
                <span v-if="followable">
                  <button
                    v-if="is_followed"
                    @click="follow"
                    class="btn btn-danger btn-sm btn-block"
                  >
                    Follow 🖤
                  </button>
                  <button
                    v-else
                    @click="follow"
                    class="btn btn-outline-danger btn-sm btn-block"
                  >
                    Follow 
                  </button>
                </span>
                <span v-else>
                  <button
                    class="btn btn-info btn-sm btn-block"
                    data-toggle="modal"
                    data-target="#profileModal"
                  >
                    프로필 등록
                  </button>
                </span>
              </div>
              <div class="media-body mb-5 text-white">
                <h1 class="mb-3">{{ profile.username }}</h1>
              </div>
            </div>
          </div>
          <!--Profile Modal-->
          <div class="modal fade text-dark" id="profileModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header d-flex justify-content-center">
                  <h3 class="mb-0">프로필을 등록해보세요</h3>
                </div>
                <div class="modal-body">
                  <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Image URL</span>
                    </div>
                    <input type="text" class="form-control" v-model="inputURL">
                  </div>
                <b-button 
                  variant="info" 
                  class="m-3 text-light" 
                  @click="putImage"
                  data-dismiss="modal"
                  >
                  등록
                </b-button>
                </div>
              </div>
            </div>
          </div>
          <!--Content-->
          <div class="bg-light p-4 d-flex justify-content-end text-center">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ profile.articles.length }}
                </h5>
                <small class="text-muted">Articles</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ profile.comments.length }}
                </h5>
                <small class="text-muted">Comments</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ profile.followers.length }}
                </h5>
                <small class="text-muted">Follower</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ profile.followings.length }}
                </h5>
                <small class="text-muted">Following</small>
              </li>
            </ul>
          </div>
          <div class="px-4 py-3">
            <h5 class="my-2">About</h5>
            <div class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">Web Developer</p>
              <p class="font-italic mb-0">Lives in New York</p>
              <p class="font-italic mb-0">Photographer</p>
            </div>
          </div>
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">내가 작성한 REVIEW</h5>
              <a href="#" class="btn btn-link text-muted">Show all</a>
            </div>
            <div class="row">
              <div
                class="col-lg-4 mb-2 pr-lg-1"
                v-for="(article, idx) in profile.articles"
                :key="idx"
              >
                <ReviewCard :article="article" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex"
import ReviewCard from "@/components/Mypage/ReviewCard.vue"
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "Profile",
  components: {
    ReviewCard,
  },
  data() {
    return {
      searchInput: "",
      is_followed: false,
      inputURL: '',
      imgURL: '',
    };
  },
  computed: {
    followable() {
      return this.profile.username != this.$store.state.username
    },
    ...mapState(["profile"]),
  },
  methods: {
    follow: function () {
      this.$store.dispatch("follow", this.profile.username)
      this.is_followed = !this.is_followed
    },
    onEnter: function () {
      this.$store.dispatch("getProfile", this.searchInput)
      this.is_followed = false
    },
    onKey: function (event) {
      event.target.value = "";
    },
    setToken: function () {
      const token = localStorage.getItem("jwt")

      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
      return config
    },
    putImage: function () {
      const config = this.setToken()
      this.imgURL =  this.inputURL
      this.inputURL = ''

      axios.patch(`${SERVER_URL}/accounts/${this.profile.username}/`, { profile : this.imgURL} , config)
        .then(() => {
          this.profile.profile = this.imgURL      
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
};
</script>

<style>
.profile-head {
  transform: translateY(3rem);
}

.cover {
  background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
  /* background-size: cover; */
  padding: 0rem 3rem 5rem 3rem;
  background-repeat: no-repeat;
}

body {
  min-height: 100vh;
}
</style>
