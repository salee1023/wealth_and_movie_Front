<template>
  <div id="app">
    <nav>
      <span v-if="isLogin">
        <router-link to="/accounts/logout">Logout</router-link>
      </span>
      <span v-else>
        <router-link to="/accounts/signup">Signup</router-link> |
        <router-link to="/accounts/login">Login</router-link> 
      </span>
    </nav>
    <Slide width="300">
      <router-link to="/">
        <span>Home</span>
      </router-link>
      <router-link to="/mypage">
        <span>Mypage</span>
      </router-link>
      <router-link to="/community">
        <span>Community</span>
      </router-link>
      <router-link to="/analytics">
        <span>Analytics</span>
      </router-link>
    </Slide>
    
    <router-view/>

  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu' 
// import slide from './views/Menu/slide'

export default {
  name: 'App',
  data: function () {
    return {
    
    }
  },
  components: {
      Slide,
  },
  computed: {
    isLogin: function () {
      return this.$store.state.is_login
    }
  }
}
</script>


<style>
#app {
  margin-top: 50px;
  font-family: 'Raleway', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#korea {
  font-family: 'Nanum Gothic Coding', monospace;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
