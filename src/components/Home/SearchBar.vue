<template>
  <div
    class="search-bar input-group input-group-lg"
    :style="{ margin: searchInput ? '0' : '30vh 0' }"
  >
    <input
      type="text"
      class="form-control"
      placeholder="영화를 검색해주세요"
      @keypress.enter="onEnter"
    />
    <div class="input-group-append">
      <button @click="onEnter" class="btn btn-secondary" id="button-addon2">
        🔍
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: function () {
    return {

    }
  },
  computed: {
    searchData: function () {
      return this.$store.state.searchedMovie
    },
    searchInput: function () {
      return this.$store.state.searchInput
    },
  },
  methods: {
    onEnter: function (event) {
      this.$store.dispatch("movieSearch", event.target.value)
      this.$store.dispatch("movieVideoSearch", event.target.value)
      this.$store.dispatch("getMovieReviews", this.searchData[0].id)
      event.target.value = ""
    },
  },
};
</script>

<style>
.search-bar {
  transition: 0.5s;
}
</style>