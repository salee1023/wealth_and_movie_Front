<template>
  <div class="mt-5">
      <strong><h1>Are You Sure?</h1></strong>
      <button 
      class="btn btn-secondary"
      @click="logout"
      >
      Logout</button>
  </div>
</template>

<script>
export default {
    name: 'Logout',
    methods: {
        logout: function () {
            localStorage.removeItem('jwt')
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style>

</style>