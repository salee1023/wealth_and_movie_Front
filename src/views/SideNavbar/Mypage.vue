<template>
  <div>
    <Profile />
  </div>
</template>

<script>
import Profile from "@/components/Mypage/Profile.vue";

export default {
  name: "Mypage",
  components: {
    Profile,
  },
  data: function () {
    return {
      username: "",
    };
  },
  created: function () {
    const isLogin = this.$store.state.is_login;

    if (isLogin === false) {
      this.$router.push({ name: "Login" });
    } else {
      this.$store.dispatch("getProfile", this.$store.state.username);
    }
  },
};
</script>

<style>
</style>