<template>
  <div id="app">
    <!--우측 상단 Navbar-->
    <nav class="mx-5 mt-4">
      <!--로그인 일 때-->
      <ul class="nav justify-content-end" v-if="isLogin">
        <li class="nav-item d-flex align-items-center">
          <h3>반가워요, {{ username }}</h3>
          <b-button pill variant="danger" class="m-3" data-toggle="modal" data-target="#logoutModal">LOGOUT</b-button>

          <!--Logout Modal-->
          <div class="modal fade text-dark" id="logoutModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header d-flex justify-content-center">
                  <h1 class="mb-0"><strong>ARE YOU SURE?</strong></h1>
                </div>
                <div class="modal-body">
                <b-button pill variant="danger" class="m-3 text-light" data-dismiss="modal" @click="logout">LOGOUT</b-button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 로그아웃 일 때 -->
      <ul class="nav justify-content-end" v-else>
        <li class="nav-item">
          <h3>
            <router-link to="/accounts/signup" class="nav-link text-light">Signup</router-link>
          </h3>
        </li>
        <li class="nav-item">
          <h3>
            <router-link to="/accounts/login" class="nav-link text-light">Login</router-link>
          </h3>
        </li>
      </ul>
    </nav>

    <!--우측 버거메뉴-->
    <Slide :closeOnNavigation="true" noOverlay width="400" class="mx-3 mt-5">
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

    <!-- 컴포넌트 구간 -->
    <router-view />

    <!-- Scroll Top Button -->
    <v-fab-transition>
      <v-btn
        bottom
        right
        fixed
        fab
        elevation="15"
        x-large
        class="m-2"
        v-show="btnShow"
        @click="gotoHeader"
      >
        <h1>↑</h1>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  name: "App",
  data: function () {
    return {
      btnShow: false,
      isLogout: false,
    };
  },
  components: {
    Slide,
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem("jwt")

      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };
      return config;
    },
    handleScroll: function () {
      this.btnShow = window.scrollY > 400
    },
    gotoHeader: function () {
      window.scrollTo(0, 0);
    },
    logout: function () {
      localStorage.removeItem("jwt")
      this.$store.dispatch("logout")
      this.$router.push({ name: "Home" })
    },
  },
  computed: {
    isLogin: function () {
      return this.$store.state.is_login
    },
    username: function () {
      return this.$store.state.username
    },
  },
  created: function () {
    this.$store.dispatch("getMovies")
    this.$store.dispatch("getReviews")
  },
  beforeMount: function () {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.handleScroll)
  },
};
</script>


<style>
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ede8f1;
}
#korea {
  font-family: "Nanum Gothic Coding", monospace;
}
#nav {
  padding: 30px;
}

#nav ul.li.router-link {
  font-weight: bold;
  color: #ede8f1;
}

#nav a.router-link-exact-active {
  color: #ede8f1;
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
  background-color: #ede8f1;
}
.bm-item-list {
  color: #ede8f1;
  margin-left: 10%;
  font-size: 30px;
}
.bm-menu {
  background-color: #1b171f; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

nav > a:hover {
  text-decoration: none;
  font-size: 115%;
}
</style>
