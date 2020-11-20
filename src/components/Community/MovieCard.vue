<template>
  <div class="col mb-4">
    <div class="card">
      <img :src="movieImageSrc" class="card-img-top" alt="이미지가 안나옴">
      <div class="card-body">
        <h5 class="card-title">{{ this.movie.title }}</h5>
        <p class="card-text">{{ this.movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movie: {
            type: Object,
        }
    },
    computed: {
        movieImageSrc: function () {
            return this.movie.poster_path
        }
    }
}
</script>

<style>
img {
height: 80%
}
</style>