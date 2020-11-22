<template>
  <div>
    <strong><h1 class="text-left">RecentReview</h1></strong>
    <li id="reviews"
    v-for="(review, idx) in this.reviews"
    :key="idx"
    >
    {{ review.content }}
    </li>
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
#reviews {
  margin-left: 1rem;
  list-style: square;
  text-align: left;
}
</style>