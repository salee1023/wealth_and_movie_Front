<template>
  <div>
    <h1>Analytics</h1>
  </div>
</template>

<script>
export default {
  name: "Analytics",
  created: function () {
    const isLogin = this.$store.state.is_login;

    if (isLogin === false) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style>
</style>