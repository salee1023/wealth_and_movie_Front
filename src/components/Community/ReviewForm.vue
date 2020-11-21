<template>
  <div id="reviewForm">
      <h1>ReviewForm</h1>
      <form @submit.prevent="createReview">
        <span v-if="clickedMovie">
            <h1><strong>{{ clickedMovie.title }}</strong></h1>    
        </span>
        <div class="form-group">
            <label for="content">review</label>
            <textarea 
            id="content" 
            cols="30" rows="10"
            placeholder="리뷰를 작성해주세요"
            v-model="article.content"
            ></textarea>
        </div>
        <br>
      <button type="submit" class="btn btn-secondary my-3">리뷰작성</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
    name: 'ReviewForm',
    data: function () {
        return {
            article: {
                movie_pk: 0,
                content: '',
            },
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
        createReview: function () {
            const config = this.setToken()
            this.article.movie_pk = this.clickedMovie.id
            console.log(this.article)
            axios.post(`${SERVER_URL}/articles/`,  this.article, config)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    computed: {
        clickedMovie: function () {
            return this.$store.state.clickedMovie
        }
    }
}
</script>

<style>
</style>