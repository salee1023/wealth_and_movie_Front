<template>
  <div id="app">
    <!--우측 상단 Navbar-->
    <nav class="mx-3">
      <ul class="nav justify-content-end" v-if="isLogin">
        <li class="nav-item">
          <router-link to="/accounts/logout" class="nav-link">Logout</router-link>
        </li>
      </ul>
      <ul class="nav justify-content-end" v-else>
        <li class="nav-item">
          <router-link to="/accounts/signup" class="nav-link">Signup</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/accounts/login" class="nav-link">Login</router-link>
        </li>
      </ul>
    </nav>

    <!--우측 버거메뉴-->
    <Slide
      :closeOnNavigation="true"
      noOverlay
      width="300"
    >
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
      is_open: false,
    }
  },
  components: {
      Slide,
  },
  methods: {
   // 로그인 확인용 token 발급
    setToken: function () {
      const token = localStorage.getItem('jwt')

      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
      return config
    },
    isopen: function () {
      this.is_open = !this.is_open
    }

  },
  computed: {
    isLogin: function () {
      return this.$store.state.is_login
      }
  },
  created: function () {
   const config = this.setToken()
   this.$store.dispatch('getMovies', config)
  }
  
}
</script>


<style>
#app {
  margin-top: 40px;
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

#nav ul.li.router-link {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #5b27ab;
}

li > a {
  font-weight: bold;
  color: black;
}

nav> a:hover {
  text-decoration: none;
  font-size: 115%;
}
</style>
