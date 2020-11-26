<template>
  <div>
    <section id="analytics">
        <h1 id="analytics-title" class="text-light my-5">
          <strong>{{ username }}님의 M<span id="small-txt">(movie)</span>BTI</strong>
        </h1>

      <!--리뷰를 작성했을 때-->
      <section v-if="profile.articles.length" id="recommend-movie">
        <!--MBTI 결과-->
        <section>
          <br><h2>{{ this.myMBTI }}</h2><br>
        </section>
        <!--평가 성향 (평가 수, 별점 분포)-->
        <section>
          <MyReviews @rateAvg="showResult"/><br>
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
  data: function () {
    return {
      myMBTI: '',
    }
  },
  methods: {
    goCommunity: function () {
      this.$router.push({ name: 'Community' })
    },
    showResult: function (avg) {
      if (avg === 0 || avg === 1) {
        this.myMBTI = '당신은 평점 짠돌이ㅠㅠ 부귀영화가 새로운 영화를 추천해줄게요!'
      }
      else if (avg === 2 || avg === 3) {
        this.myMBTI = '당신은 날카로운 시선을 가진 영화 평론가! 부귀영화가 당신의 취향에 꼭 맞는 영화를 준비했어요'
      }
      else {
        this.myMBTI = '당신은 영화광이거나 싫은 소리 못하는 ANGEL이거나😊 아래 다른 추천 영화도 감상해보세요!'
      }
      
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
    this.$store.dispatch('getReviews')
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
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
  border-bottom-left-radius: .3rem;
  border-bottom-right-radius: .3rem;
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