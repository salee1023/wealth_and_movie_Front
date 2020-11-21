<template>
  <div>
      <h1>RecentReview</h1>
      <div 
      v-for="(review, idx) in this.reviews"
      :key="idx"
      >
        {{ review.content }}
      </div>
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
    name: 'RecentReview',
    data: function () {
      return {
        reviews: [],
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
    },
    created: function () {
      const config = this.setToken()
      axios.get(`${SERVER_URL}/articles/`, config)
        .then(res => {
          this.reviews = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
}
</script>

<style>

</style>