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
                  <strong>{{ article.movie.title }}</strong>
                </h3>
                <h5 class="my-4 text-center">⭐: {{ movieRate }}</h5>
              </div>
              <button
                type="button"
                class="btn btn-info btn-sm mx-2"
                @click="clickedReview(article)"
                data-dismiss="modal"
              >
              리뷰 보기
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
    article: {
      type: Object,
    },
  },
  computed: {
    movieImageSrc: function () {
      return this.article.movie.poster_path;
    },
    movieRate: function () {
      return this.article.rank
    },
  },
  methods: {
    clickedReview: function (review) {
      this.$store.dispatch("clickedReview", review)
      this.$router.push({ name: 'ReviewDetail' })
    },
  },
};
</script>
<style>
img {
  height: 80%;
}
</style>