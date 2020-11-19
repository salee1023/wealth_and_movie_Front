<template>
  <div 
  class="search-bar input-group" 
  :style="{ margin: searchInput ? '0' : '30vh 0' }"
  >
    <input 
    type="text" 
    class="form-control" 
    placeholder="영화를 검색해주세요 :)"
    @keypress.enter="onEnter" 
    @click="onKey"
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
        this.$store.dispatch('movieSearch', this.searchInput)
        console.log(this.searchInput)
      },
      onKey: function (event) {
        event.target.value = ''
      }
    },
}
</script>

<style>
.search-bar {
    transition: .5s;
}
</style>