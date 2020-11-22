<template>
  <div>
    <form @submit.prevent="login" id="login">
      <h1><strong>LOGIN</strong></h1>
      <div class="form-group">
        <label for="userId">ID</label>
        <input 
        id="userId" 
        type="text" 
        class="form-control" 
        placeholder="ID를 입력해주세요"
        v-model="credentials.username"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
        id="password"
        type="password" 
        class="form-control" 
        placeholder="PASSWORD를 입력해주세요"
        v-model="credentials.password"
        >
      </div>
      <small>
        <p id="go-signup" @click="goSignup">아직 회원이 아니신가요? 회원가입을 해보세요!</p>
      </small>
      <br>
      <button type="submit" class="btn btn-secondary mb-3">로그인</button>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
    name: 'Login',
    data: function () {
      return {
        credentials: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      login: function () {
        axios.post(`${SERVER_URL}/accounts/api-token-auth/`, this.credentials)
          .then((res) => {
            localStorage.setItem('jwt', res.data.token)
            this.$store.dispatch('login', this.credentials.username)
            this.$router.push({ name: 'Home' })
          })
          .catch((err) => {
            console.log(err)
          })
      },
      goSignup: function () {
        this.$router.push({ name:'Signup' })
      }
    }
}
</script>

<style>
#login {
  border: 3pt groove lightgrey;
  width: 40%;
  padding: 10px 10px 10px 10px;
  margin: 30px auto;
}
.form-group {
  margin-top: 30px;
}
#go-signup {
  margin-top: 1rem;
  text-align: center;
}
#go-signup:hover {
  color: blue;
  cursor: pointer;
}
</style>
