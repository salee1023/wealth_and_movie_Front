<template>
  <div>
    <form @submit.prevent="signup" id="signup">
      <h1><strong>회원가입</strong></h1>
      <hr>
      <div class="form-group">
        <label for="userId">ID</label>
        <input
          id="userId"
          type="text"
          class="form-control"
          placeholder="사용할 ID를 입력해주세요"
          v-model="credentials.username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="사용할 PASSWORD를 입력해주세요"
          v-model="credentials.password"
        />
      </div>
      <div class="form-group">
        <label for="passwordConfirm">Password 확인</label>
        <input
          id="passwordConfirm"
          type="password"
          class="form-control"
          placeholder="PASSWORD를 한 번 더 입력해주세요"
          v-model="credentials.passwordConfirmation"
        />
      </div>
      <button type="submit" class="btn btn-lg btn-info my-3">가입</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  name: "Signup",
  data: function () {
    return {
      credentials: {
        username: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  methods: {
    signup: function () {
      axios
        .post(`${SERVER_URL}/accounts/signup/`, this.credentials)
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
#signup {
  background-color: rgb(0, 0, 0, 0.6);
  width: 30%;
  padding: 20px 30px 20px 30px;
  margin: 30px auto;
}
</style>
