<template>
  <div class="col mb-4">
    <div class="card">
      <img 
      :src="movieImageSrc" 
      class="card-img-top" 
      alt="이미지가 안나옴" 
      style="cursor: pointer">
      <div class="card-body">
        <h5 class="card-title">{{ this.movie.title }}</h5>
        <h5 class="card-title">{{ this.movie.genres }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ReviewCard',
    props: {
      movie: Number,
    },
    computed: {
        movieImageSrc: function () {
          return this.$store.state.movies[this.movie].poster_path
        }
    },
    methods: {
    }
}
</script>

<style>
img {
height: 80%
}
</style>