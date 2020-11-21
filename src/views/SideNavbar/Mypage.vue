<template>
  <div>
    <h1>Mypage</h1>
    <input v-model="username" type="text">
    <button @click="getProfile">get</button>
    <Profile/>
  </div>
</template>

<script>
import Profile from '@/components/Mypage/profile'

export default {
  name: 'Mypage',
  components: {
    Profile
  },
  data: function () {
    return {
      username: '',
    }
  },
  created: function () {
    const isLogin = this.$store.state.is_login

    if (isLogin === false) {
      this.$router.push({ name: 'Login' })
    } else {
      this.$store.dispatch('getProfile', this.username)
    }
  },
  methods: {
    getProfile () {
      this.$store.dispatch('getProfile', this.username)
    }
  }
}
</script>

<style>

</style>