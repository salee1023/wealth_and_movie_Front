<template>
  <div id="reviewForm">
      <h1>ReviewForm</h1>
      <form @submit.prevent="createReview">
        <h1><strong>{{ this.clickedMovieData.title }}</strong></h1>
        
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
                movie_pk: this.clickedMovieData.id,
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
            console.log(this.article)
            const config = this.setToken()
            axios.post(`${SERVER_URL}/articles/`,  this.article, config)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    props: {
        clickedMovieData: {
            tpye: Object,
        }
    }
}
</script>

<style>
</style>