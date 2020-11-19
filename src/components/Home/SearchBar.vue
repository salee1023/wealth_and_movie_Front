<template>
  <div 
  class="search-bar input-group" 
  :style="{ margin: isClick ? '0' : '30vh 0' }"
  >
    <input 
    type="text" 
    class="form-control" 
    placeholder="영화를 검색해주세요 :)"
    @keypress.enter="onEnter" 
    >
    <div class="input-group-append">
      <button 
      @click="onEnter" 
      class="btn btn-secondary"
      id="button-addon2"
      >
      🔍
      </button>
    </div>

  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data: function () {
      return {
        isClick: false,
        searchInput: '',
      }
    },
    // movie가 검색되면 들어올 데이터
    // props: {
    //   movieInfo: {
    //     type: Object,
    //   }
    // },
    methods: {
      onEnter: function (event) {
        this.searchInput = event.target.value
        this.isClick = !this.isClick
        this.$store.dispatch('movieSearch', this.searchInput)
        console.log(this.searchInput)
      }
    },
}
</script>

<style>
.search-bar {
    transition: .5s;
}
</style>