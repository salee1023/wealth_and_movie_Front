<template>
  <div class="col mb-4">
    <div class="card d-flex align-items-center" style="">
      <h5 class="card-title mt-3">{{ this.article.movie.title }}</h5>
      <img 
      :src="movieImageSrc" 
      class="card-img-top" 
      alt="이미지가 안나옴" 
      style="border-radius: 5px;">
      <div class="card-body w-100">
        <h5 class="card-title">{{ this.article.movie.genres }}</h5>
        <div class="d-flex justify-content-end">
          <button class="btn btn-primary">수정</button>
          <button class="btn btn-danger ml-3">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ReviewCard',
    props: {
      article: Object,
    },
    computed: {
        movieImageSrc: function () {
          return this.article.movie.poster_path
        }
    },
}
</script>

<style>
img {
height: 80%
}
</style>