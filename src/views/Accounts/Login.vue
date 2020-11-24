<template>
  <div>
    <form @submit.prevent="login" id="login">
      <h1><strong>LOGIN</strong></h1>
      <hr>
      <div class="form-group">
        <label for="userId">ID</label>
        <input
          id="userId"
          type="text"
          class="form-control"
          placeholder="ID를 입력해주세요"
          v-model="credentials.username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="PASSWORD를 입력해주세요"
          v-model="credentials.password"
          required
        />
      </div>
      <small>
        <p id="go-signup" @click="goSignup" class="text-warning">
          아직 회원이 아니신가요? 회원가입을 해보세요!
        </p>
      </small>
      <br />
      <button type="submit" class="btn btn-lg btn-info mb-3">로그인</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  name: "Login",
  data: function () {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      axios
        .post(`${SERVER_URL}/accounts/api-token-auth/`, this.credentials)
        .then((res) => {
          localStorage.setItem("jwt", res.data.token);
          this.$store.dispatch("login", this.credentials.username)
          this.$router.push({ name: "Home" })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goSignup: function () {
      this.$router.push({ name: "Signup" })
    },
  },
  created: function () {
    window.scrollTo(0, 0)
  },
};
</script>

<style>
#login {
  background-color: rgb(0, 0, 0, 0.6);
  width: 30%;
  padding: 20px 30px 20px 30px;
  margin: 30px auto;
}
.form-group {
  margin-top: 30px;
}
#go-signup {
  margin-top: 1rem;
  text-align: center;
  font-size: 1.2rem;
}
#go-signup:hover {
  color: blue;
  cursor: pointer;
}
</style>
