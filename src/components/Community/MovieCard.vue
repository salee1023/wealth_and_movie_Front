<template>
  <div>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="mb-4 mx-2">
          <v-img :src="movieImageSrc"></v-img>

          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#000000">
              <div>
                <h3>
                  <strong>{{ movie.title }}</strong>
                </h3>
                <h5 class="my-4 text-center">⭐: {{ movieRate }}</h5>
              </div>
              <button
                class="btn btn-info mx-1"
                @click="clickMovie"
                data-toggle="modal"
                data-target="#reviewFormModal"
              >
                리뷰쓰기
              </button>
              <button
                class="btn btn-warning mx-1"
                @click="getMovieReviews"
                data-toggle="modal"
                data-target="#reviewsModal"
              >
                리뷰보기
              </button>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  data: function () {
    return {
      overlay: false,
    };
  },
  props: {
    movie: {
      type: Object,
    },
  },
  computed: {
    movieImageSrc: function () {
      return this.movie.poster_path;
    },
    movieRate: function () {
      return this.movie.vote_average / 2;
    },
  },
  methods: {
    clickMovie: function () {
      this.$store.dispatch("clickedMovie", this.movie);
    },
    getMovieReviews: function () {
      this.$store.dispatch("clickedMovie", this.movie);
      this.$store.dispatch("getMovieReviews", this.movie.id);
    },
  },
};
</script>

<style>
</style>