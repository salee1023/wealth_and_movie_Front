<template>
  <div class="home">
    <header>
    
        <h1>Home</h1>
        <h5>우리 프로젝트 이름 정해줘...안그럼 JSSA로 해버릴거임</h5>
      
      <Search-bar/>
    </header>

  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/Home/SearchBar'

export default {
  name: 'Home',
  components: {
    SearchBar,
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
header {
  width: 70%; /* 너비 80% 만큼 차지 */
  margin: 0 auto; /* 양 옆 마진 똑같이 */
  padding: 1rem 0;
}
</style>
