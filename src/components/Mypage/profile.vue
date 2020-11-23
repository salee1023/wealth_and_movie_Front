<template>
  <div>
    <div 
    class="search-bar input-group w-50"
    style="margin: auto;"
    @input="submitAutoComplete"
    >
      <input
      type="text"
      class="form-control"
      v-model="searchInput"
      placeholder="사용자를 검색해주세요"
      @keypress.enter="onEnter" 
      @click="onKey"
      >
      <div class="input-group-append">
        <button 
        @click="onEnter" 
        class="btn btn-secondary"
        id="button-addon2"
        >
        🔍
        </button>
      </div>
      <select class="js-example-basic-multiple" name="states[]" multiple="multiple">
        <div class="autocomplete disabled">
        <div style="cursor: pointer" v-for="(res,i) in result" :key="i">{{ res }}</div>
        </div>
      </select>
    </div>
    <div class="row py-5 px-4" v-if="this.$store.state.is_login">
        <div class="col-md-7 mx-auto">
            <!-- Profile widget -->
            <div class="bg-white shadow rounded overflow-hidden">
                <div class="px-4 pt-0 pb-4 cover">
                    <div class="media align-items-center profile-head">
                        <div class="profile mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" class="rounded mb-2 img-thumbnail"><button v-if="followable" @click="follow" class="btn btn-outline-dark btn-sm btn-block">Follow</button></div>
                        <div class="media-body mb-5 text-white">
                            <h2 class="mt-2 mb-0">{{ profile.username }}</h2>
                        </div>
                    </div>
                </div>
                <div class="bg-light p-4 d-flex justify-content-end text-center">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <h5 class="font-weight-bold mb-0 d-block">{{ profile.articles.length }}</h5><small class="text-muted">Articles</small>
                        </li>
                        <li class="list-inline-item">
                            <h5 class="font-weight-bold mb-0 d-block">{{ profile.comments.length }}</h5><small class="text-muted">Comments</small>
                        </li>
                        <li class="list-inline-item">
                            <h5 class="font-weight-bold mb-0 d-block">{{ profile.followers.length }}</h5><small class="text-muted">Follower</small>
                        </li>
                        <li class="list-inline-item">
                            <h5 class="font-weight-bold mb-0 d-block">{{ profile.followings.length }}</h5><small class="text-muted">Following</small>
                        </li>
                    </ul>
                </div>
                <div class="px-4 py-3">
                    <h5 class="mb-0">About</h5>
                    <div class="p-4 rounded shadow-sm bg-light">
                        <p class="font-italic mb-0">{{ profile.description }}</p>
                    </div>
                </div>
                <div class="py-4 px-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <h5 class="mb-0">Recent photos</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                    </div>
                    <div class="row">
                      <div class="col-lg-4 mb-2 pr-lg-1" v-for="(article, idx) in profile.articles" :key="idx">
                        <ReviewCard :article="article"/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReviewCard from '@/components/Mypage/ReviewCard.vue'

export default {
  name: 'Profile',
  components: {
    ReviewCard,
  },
  data () {
    return {
      searchInput: '',
      result: null,
    }
  },
  computed: {
    followable () {
      return this.profile.username != this.$store.state.username
    },
    ...mapState(['profile']),
  },
  methods: {
    follow: function () {
      this.$store.dispatch('follow', this.profile.username)
    },
    onEnter: function () {
      this.$store.dispatch('getProfile', this.searchInput)
    },
    onKey: function (event) {
      event.target.value = ''
    },
    submitAutoComplete() {
      const autocomplete = document.querySelector(".autocomplete")

      if (this.searchInput) {
        autocomplete.classList.remove("disabled")
        this.result = this.profile.followings.filter((following) => {
          return following.username.match(new RegExp("^" + this.searchInput, "i"))
        })
      } else {
        this.result = null
        autocomplete.classList.add("disabled")
      }
    },
  },
}
</script>

<style>
.profile-head {
    transform: translateY(5rem)
}

.cover {
    background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
    background-size: cover;
    background-repeat: no-repeat
}

body {
    min-height: 100vh
}
</style>