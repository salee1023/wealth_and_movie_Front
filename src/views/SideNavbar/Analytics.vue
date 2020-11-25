<template>
  <div>
    <section id="analytics">
        <h1 id="analytics-title" class="text-light my-5">
          <strong>{{username}}님의 M<span id="small-txt">(movie)</span>BTI</strong>
        </h1>

      <!--리뷰를 작성했을 때-->
      <section v-if="profile.articles.length" id="recommend-movie">
        <br><h2>당신은 XXXXXX한 사람입니다.</h2><br>
        <!--평가 성향 (평가 수, 별점 분포)-->
        <section>
          <MyReviews/><br>
        </section>
        <!--선호 장르-->
        <section class="my-3">
          <CloudChart/><br>
        </section>
        <!--추천 영화-->
        <section class="my-3">
          <MyMovie/>
        </section>
      </section> 

      <!--리뷰를 작성하지 않았을 때-->
      <section v-else>
        <div class="my-5 mx-1" id="recommend-movie">
          <h4 class="text-center my-3">나의 영화 취향을 알고 싶다면 리뷰를 작성해주세요!</h4>
          <b-button size="lg" class="mb-3"  @click="goCommunity" variant="secondary">작성하기</b-button>
        </div>
      </section>  
    </section>
    <br /><br /><br />
  </div>
</template>

<script>
import MyReviews from '@/components/Analytics/MyReviews'
import MyMovie from '@/components/Analytics/MyMovie'
import CloudChart from '@/components/Analytics/CloudChart'
// import axios from "axios"
// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "Analytics",
  components: {
    MyReviews,
    MyMovie,
    CloudChart,
  },
  methods: {
    goCommunity: function () {
      this.$router.push({ name: 'Community' })
    }
  },
  computed: {
    username: function () {
      return this.$store.state.username
    },
    profile: function () {
      return this.$store.state.profile
    }
  },
  created: function () {
    const isLogin = this.$store.state.is_login

    if (isLogin === false) {
      this.$router.push({ name: "Login" })
    }
    this.$store.dispatch('getProfile', this.username)

    window.scrollTo(0, 0)
  },
};
</script>

<style>
#analytics {
  width: 60%; /* 너비 80% 만큼 차지 */
  margin: 0 auto; /* 양 옆 마진 똑같이 */
  padding: 1rem 0;
  color: black;
}
#analytics-title {
  font-size: 5rem;
}
#recommend-movie {
  padding: 1rem 1rem;
  background-color: rgb(0, 0, 0, 0.6);
  color: #ede8f1;
}
#recent-review {
  width: 70%;
  margin-top: 1rem;
  margin-right: 1rem;
  border-right: 3pt groove lightgrey;
}
#small-txt {
  font-size: 2rem;
  color: lightcoral;
}
</style>