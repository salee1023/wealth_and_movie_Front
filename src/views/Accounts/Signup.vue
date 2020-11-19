<template>
  <div>
    <form @submit.prevent="signup">
      <h1><strong>회원가입</strong></h1>
      <div class="form-group">
        <label for="userId">ID</label>
        <input 
        id="userId" 
        type="text" 
        class="form-control" 
        placeholder="사용할 ID를 입력해주세요"
        v-model="credentials.username"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
        id="password"
        type="password" 
        class="form-control" 
        placeholder="사용할 PASSWORD를 입력해주세요"
        v-model="credentials.password"
        >
      </div>
      <small class="form-text text-muted">
        비밀번호 유의사항 넣기
      </small>
      <div class="form-group">
        <label for="passwordConfirm">Password 확인</label>
        <input 
        id="passwordConfirm"
        type="password" 
        class="form-control" 
        placeholder="PASSWORD를 한 번 더 입력해주세요"
        v-model="credentials.passwordConfirmation"
        >
      </div>
      <button type="submit" class="btn btn-secondary my-3">
      가입</button>
    </form>
  </div>
  
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Singup',
  data: function () {
    return {
      credentials:{
        username: '',
        password: '',
        passwordConfirmation: '',
      }
    }
  },
  methods: {
    signup: function () {
      console.log('회원가입 잘 됐나!!!')
      axios.post(`${SERVER_URL}/accounts/signup/`, this.credentials)
        .then((res) => {
          console.log(res)
          this.$router.push({ name: 'Login' })
        })
        .catch((err) => {
          console.log(err)
        })
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