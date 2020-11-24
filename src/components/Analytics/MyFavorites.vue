<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>나의 영화 성향은?</strong></h1>
    <hr/>
    <div>
      <h3 class="text-left mx-3"><strong><span id="coloring">Genre</span> 영화를 좋아하는군요!</strong></h3><br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyReviews",
  computed: {
    username: function () {
      return this.$store.state.username
    },
    profile: function () {
      return this.$store.state.profile
    },
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