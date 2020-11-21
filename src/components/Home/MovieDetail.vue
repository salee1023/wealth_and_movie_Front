<template>
  <div class="movie-detail">
    <p>줄거리</p>
    <p id="overview">{{ movie[0].overview }}</p>
    <p>{{ movie[0].genres }} / {{ movie[0].release_date }} </p>
  </div>
</template>

<script>
export default {
    name: 'MovieDetail',
    data: function () {
      return {
        
      }
    },
    computed: {
      movie: function () {
        return this.$store.state.searchedMovie
      },
    }
}
</script>

<style>
p {
  text-align: left;
}
#overview {
  text-align:justify;
  margin-right: 1rem;
}
</style>