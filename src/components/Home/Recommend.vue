<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>Recommendation</strong></h1>
    <hr/>
    <div v-if="isLogin">
      <!-- <span v-if="profile.articles.length"> -->
        <div class="mx-3">
          <div v-if="!recommendScore">데이터가 부족합니다!</div>
          <div v-else>
            <br><h4>{{searchedMovie[0].title}}의 추천 점수는 <span id="dif-txt">{{ recommendScore }}점</span>입니다! </h4>
            <br>
            <div v-if="recommendScore >= 4">이 영화의 추천등급은 <h4 class="font-italic d-inline">"🥇 인생영화" </h4> 입니다.</div>
            <div v-else-if="recommendScore >= 3">이 영화의 추천등급은 <h4 class="font-italic d-inline">"🥈 재밌는영화" </h4> 입니다.</div>
            <div v-else-if="recommendScore >= 2">이 영화의 추천등급은 <h4 class="font-italic d-inline">"🥉 볼만한영화" </h4> 입니다.</div>
            <div v-else>이 영화의 추천등급은 <h4 class="font-italic d-inline">"시간죽이기영화" </h4> 입니다.</div>
            <br>
            <div id="barBottom" />
            <div id="barTop" :style="{ width: vwidth }"/>
            <br>
          </div>
        </div>
      <!-- </span> -->
      <!-- <span v-else>
        <div class="my-5 mx-1">
          <h4 class="text-center my-3">이 영화의 추천여부를 알고싶다면 리뷰를 작성해주세요!</h4>
          <b-button size="lg" @click="goCommunity" variant="info">리뷰 작성하기</b-button>
        </div>
      </span> -->
    </div>

    <div v-else class="my-5 mx-1">
      <h4 class="text-center my-3">다른 사람의 리뷰를 보고 싶다면 로그인 하세요!</h4>
      <b-button size="lg" @click="goLogin" variant="secondary">로그인</b-button>
    </div>


  </div>
</template>

<script>
export default {
  name: "Recommend",
  methods: {
    goLogin: function () {
      this.$router.push({ name: "Login" });
    },
    goCommunity: function () {
      this.$router.push({ name: "Community" });
    },
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
    },
    recommendScore: function () {
      return this.$store.state.recommendScore
    },
    vwidth: function () {
      return `${this.recommendScore*20}%`
    }
  },
};
</script>

<style>
#dif-txt {
  color: lightcoral;
}
#barTop {
  background-color: violet;
  height: 3vh;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  position: relative;
  top: -3vh;
}
#barBottom {
  background-color: midnightblue;
  height: 3vh;
  width: 100%;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  position: relative;
}
</style>