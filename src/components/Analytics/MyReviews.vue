<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>나의 평가 성향은?</strong></h1>
    <hr />
    <div>
      <h3 class="text-left mx-3"><strong>총 <span id="coloring">{{ profile.articles.length }}</span>편의 영화에 후기를 남겼군요!</strong></h3><br>
      <div class="d-flex justify-content-between mr-2"> 
        <h5 class="text-left mx-3">총 ⭐ : {{ rateCount }} </h5>
        <h5 class="text-left mx-3">평균 ⭐: {{ rateAvg }} </h5>
        <h5 class="text-left mx-3">많이 준 ⭐ : {{ rateMode }} </h5>
      </div><br>
      <div class="mx-3">
        <h4 class="text-left">별점 분포</h4><br>
        <div id="lineChart">
          <LineChart></LineChart>  
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import _ from 'lodash'
import LineChart from '@/components/Analytics/LineChart'

export default {
  name: "MyReviews",
  components: {
      LineChart,
  },
  data: function () {
    return {
      rateData: [0, 0, 0, 0, 0, 0]
    }
  },
  computed: {
    username: function () {
      return this.$store.state.username
    },
    profile: function () {
      return this.$store.state.profile
    },
    rateCount: function () {
      var res = 0

      for (var i=0; i < this.rateData.length; i++ ) {
        res = res + this.rateData[i] * i 
      }

      return res
    },
    rateAvg: function () {
      return Math.floor(this.rateCount / this.profile.articles.length)
    },
    rateMode: function () {
      return _.indexOf(this.rateData , _.max(this.rateData))
    },
  },
  created: function () {
    const tmpData = []
    this.profile.articles.forEach(article => tmpData.push(article.rank))

    for (var i=0; i < tmpData.length; i++ ) {
      this.rateData[tmpData[i]] = this.rateData[tmpData[i]] + 1
    }

    this.$emit('rateAvg', this.rateAvg)
  },
};
</script>

<style>
#review {
  list-style: none;
  text-align: left;
}
#coloring {
  color:lightcoral; 
}
hr {
  margin-left: 1rem;
  background-color: white;
  width: 95%;
}
#lineChart {
  width: 60%;
  margin: 0 auto;
}
</style>