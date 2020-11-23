<template>
  <div id="app">
    <!--우측 상단 Navbar-->
    <nav class="mx-5 mt-4">
      <ul class="nav justify-content-end" v-if="isLogin">
        <li class="nav-item">
          <h3><router-link to="/accounts/logout" class="nav-link text-light">Logout</router-link></h3>
        </li>
      </ul>
      <ul class="nav justify-content-end" v-else>
        <li class="nav-item">
          <h3><router-link to="/accounts/signup" class="nav-link text-light">Signup</router-link></h3>
        </li>
        <li class="nav-item">
          <h3><router-link to="/accounts/login" class="nav-link text-light">Login</router-link></h3>
        </li>
      </ul>
    </nav>

    <!--우측 버거메뉴-->
    <Slide
      :closeOnNavigation="true"
      noOverlay
      width="300"
      class="mx-3 mt-5"
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
    this.$store.dispatch('getMovies')
    this.$store.dispatch('getReviews')
  }
}
</script>


<style>
#app {
  font-family: 'Raleway', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #EDE8F1;
}
#korea {
  font-family: 'Nanum Gothic Coding', monospace;
}
#nav {
  padding: 30px;
}

#nav ul.li.router-link {
  font-weight: bold;
  color: #EDE8F1;
}

#nav a.router-link-exact-active {
  color: #EDE8F1;
}
.bm-burger-button {
  position: fixed;
  width: 50px;
  height: 50px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #EDE8F1;
}
.bm-item-list {
  color: #EDE8F1;
  margin-left: 10%;
  font-size: 30px;
}
.bm-menu {
  background-color:#1B171F; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

nav> a:hover {
  text-decoration: none;
  font-size: 115%;
}
</style>
