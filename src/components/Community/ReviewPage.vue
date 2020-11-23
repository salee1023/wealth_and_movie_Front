<template>
  <div class="jumbotron jumbotron-fluid py-3 mt-5">
    <div class="d-flex justify-content-between align-items-center">
        <h3 class="text-left mx-3">{{ clickedReview.user }}</h3>
        <div class="mx-3">⭐: {{ clickedReview.rank }}</div>
    </div>
    <hr>
    <div>
        <h4 class="text-left ml-3">{{ clickedReview.content }}</h4>
        <p class="text-right mx-3">{{ clickedReview.created_at }} | {{ clickedReview.updated_at}}</p>
    </div>
    <hr>
    <div class="d-flex align-items-center">
        <p class="text-left mx-3">👍 : {{ clickedReview.like_users.length }}</p>
        <button class="btn btn-outline-danger">좋아요👍</button>
    </div>
    <hr>
    <div>
        <p class="text-center"> 댓글 </p>
    </div>

    <div v-if="username === clickedReview.user" class="d-flex justify-content-end mx-3 mt-2">
        <button type="button" class="btn btn-secondary text-white mx-1"> 수정 </button>
        <button type="button" class="btn btn-danger text-white" data-toggle="modal" data-target="#deleteModal"> 삭제 </button>       
        <button type="button" class="btn btn-outline-secondary mx-1" @click="gotoHome"> ↩ </button> 
    </div>     
         
    <div class="modal fade" id="deleteModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content d-flex">
                <h5 class="modal-title my-2">정말 삭제하시겠습니까?</h5>
                <button type="button" class="btn-sm btn-danger text-white">Delete</button>       
            </div>
            
        </div>
    </div>
    </div>
    


</template>

<script>
export default {
    name: 'ReviewPage',
    computed: {
        clickedReview: function () {
            return this.$store.state.clickedReview
        },
        clickedMovie: function () {
            return this.$store.state.clickedMovie
        },
        username: function () {
            return this.$store.state.username
        }
    },
    methods: {
        gotoHome: function () {
            this.$router.push({ name: 'Home' })
        }
    }

}
</script>

<style>
.jumbotron {
    width: 60%;
}
</style>