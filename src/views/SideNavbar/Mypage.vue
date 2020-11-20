<template>
  <div>
    <h1>Mypage</h1>
    {{}}
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Mypage',
  created: function () {
    const isLogin = this.$store.state.is_login

    if (isLogin === false) {
      this.$router.push({ name: 'Login' })
    } else {
      const config = this.setToken()
      axios.get(`${SERVER_URL}/accounts/${this.$store.state.username}/`, config)
        .then(res => {
          console.log(res)
        })
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')

      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
      return config
    },
  }
}
</script>

<style>

</style>