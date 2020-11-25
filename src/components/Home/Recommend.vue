<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>Recommendation</strong></h1>
    <hr/>
    <div v-if="isLogin">
      <span v-if="profile.articles.length">
        <div class="mx-3">
          <br><h3>{{searchedMovie[0].title}}의 추천 점수는 <span id="dif-txt">{{ score }}점</span>입니다! </h3>
          <BarChart @recommendScore="recommendScore"></BarChart>
        </div>
      </span>
      <span v-else>
        <div class="my-5 mx-1">
          <h4 class="text-center my-3">이 영화의 추천여부를 알고싶다면 리뷰를 작성해주세요!</h4>
          <b-button size="lg" @click="goCommunity" variant="info">리뷰 작성하기</b-button>
        </div>
      </span>
    </div>

    <div v-else class="my-5 mx-1">
      <h4 class="text-center my-3">다른 사람의 리뷰를 보고 싶다면 로그인 하세요!</h4>
      <b-button size="lg" @click="goLogin" variant="secondary">로그인</b-button>
    </div>


  </div>
</template>

<script>
import BarChart from '@/components/Home/BarChart'

export default {
  name: "Recommend",
  components: {
    BarChart,
  },
  data: function () {
    return {
      score: 0,
    }
  },
  methods: {
    goLogin: function () {
      this.$router.push({ name: "Login" });
    },
    goCommunity: function () {
      this.$router.push({ name: "Community" });
    },
    recommendScore: function (data) {
      this.score = data[0]
    }
  },
  computed: {
    isLogin: function () {
      return this.$store.state.is_login;
    },
    profile: function () {
      return this.$store.state.profile
    },
    searchedMovie: function () {
      return this.$store.state.searchedMovie
    }
  }
};
</script>

<style>
#dif-txt {
  color: lightcoral;
}
</style>