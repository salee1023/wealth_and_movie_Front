<template>
  <div>
      <h1>Mypage</h1>
  </div>
</template>

<script>
export default {
    name: 'Mypage',
    created: function () {
      const isLogin = this.$store.state.is_login

      if (isLogin === false) {
        this.$router.push({ name: 'Login' })
      }
    }
}
</script>

<style>

</style>