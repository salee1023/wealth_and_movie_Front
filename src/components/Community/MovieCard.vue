<template>
  <div class="col mb-4">
    <div class="card">
      <img 
      :src="movieImageSrc" 
      class="card-img-top" 
      alt="이미지가 안나옴" 
      @click="clickMovie"
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
    },
    methods: {
      clickMovie: function () {
        this.$emit('clicked-movie', this.movie)        
      }
    }
}
</script>

<style>
img {
height: 80%
}
</style>