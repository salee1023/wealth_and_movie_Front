<template>
  <div class="movie-detail">
    <h5 class="text-left"><strong>OVERVIEW</strong></h5>
    <br />
    <p id="overview">{{ movie[0].overview }}</p>
    <br />
    <p>
      <span v-for="(genre, idx) in genres" :key="idx"> {{ genre }} </span>
      <span> / {{ movie[0].release_date }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  data: function () {
    return {};
  },
  computed: {
    movie: function () {
      return this.$store.state.searchedMovie;
    },
    genres: function () {
      return this.movie[0].genres;
    },
  },
};
</script>

<style>
p {
  text-align: left;
}
#overview {
  text-align: justify;
  margin-right: 1rem;
}
</style>