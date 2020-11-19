<template>
  <div>
      <h1>Community</h1>
  </div>
</template>

<script>
export default {
    name: 'Community',
    created: function () {

      // Login이 안되어있으면 Login으로 이동
      const isLogin = this.$store.state.is_login

      if (isLogin === false) {
        this.$router.push({ name: 'Login' })
      }
    }
}
</script>

<style>

</style>