<template>
  <div>
    {{ profile.username }}
    {{ profile.followers }}
    <button @click="follow">follow</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    follow: function () {
      this.$store.dispatch('follow', this.profile.username)
    }
  }
}
</script>

<style>

</style>