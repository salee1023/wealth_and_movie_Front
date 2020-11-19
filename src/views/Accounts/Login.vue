<template>
  <div>
    <form @submit.prevent="login">
      <h1><strong>로그인</strong></h1>
      <div class="form-group">
        <label for="userId">ID</label>
        <input 
        id="userId" 
        type="text" 
        class="form-control" 
        placeholder="ID를 입력해주세요"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
        id="password"
        type="password" 
        class="form-control" 
        placeholder="PASSWORD를 입력해주세요"
        >
      </div>
      <small>
        <a :href="signupUrl">아직 회원이 아니신가요? 회원가입을 해보세요!</a>
      </small>
      <br>
      <button 
      type="submit" 
      class="btn btn-secondary my-3"
      @click="login"
      >
      로그인</button>
    </form>
  </div>
  
</template>

<script>
// import axios from 'axios'
// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
    name: 'Signup',
    data: function () {
      return {
        credentials: {
          userId: '',
          password: '',
        },
        signupUrl: 'http://localhost:8080/accounts/signup'
      }
    },
    methods: {
      login: function () {
        console.log('로그인 잘 되나!!')
        // axios.post(`${SERVER_URL}/accouts/api-token-auth`, this.credentials)
        //   .then((res) => {
        //   // console.log(res)
        //   localStorage.setItem('jwt', res.data.token)
        //   this.$emit('login')
        //   this.$router.push({ name: 'Home' })
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })
      }
    }
}
</script>

<style>
form {
  width: 30%;
  margin: 30px auto;
}
.form-group {
  margin-top: 30px;
}
</style>