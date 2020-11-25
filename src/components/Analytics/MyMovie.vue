<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>추천 영화</strong></h1>
    <hr/>
    <div>
      <h3 class="text-left mx-3"><strong><span id="coloring">{{ username }}</span>님을 위한 영화입니다🤍</strong></h3><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMovie",
  computed: {
    username: function () {
      return this.$store.state.username
    },
    profile: function () {
      return this.$store.state.profile
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
#coloring {
  color:lightcoral; 
}
hr {
  margin-left: 1rem;
  background-color: white;
  width: 95%;
}
</style>