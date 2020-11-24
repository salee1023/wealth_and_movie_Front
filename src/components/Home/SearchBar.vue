<template>
  <div>
    <div v-if="non_search" id="logo">
      <img src="@/assets/logo1.png" id="logo1" alt="Logo">
      <img src="@/assets/logo2.png" id="logo2" alt="Logo">
      <img src="@/assets/logo3.png" id="logo3" alt="Logo">
    </div>
    <div
      class="search-bar input-group input-group-lg d-flex"
      :style="{ margin : searchInput ? '0' : '47vh 0' }"
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
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: function () {
    return {
      non_search: true
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
      this.non_search = false
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
  z-index: 2;
}
#logo {
  width: 60%;
  /* position: absolute; */
  top: 10px;
}
#logo1 {
  width: 60%;
  height: 55%;
  position: absolute;
  top: 20vh;
  right: 48vh;
  z-index: 1;
}
#logo2 {
  width: 10%;
  height: 10%;
  position: absolute;
  top: 48vh;
  right: 48vh;
  z-index: 1;
}
#logo3 {
  width: 25%;
  height: 45%;
  position: absolute;
  top: 12vh;
  right: 35vh;
  z-index: 0;
}
</style>