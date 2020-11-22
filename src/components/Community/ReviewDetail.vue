<template>
  <div class="jumbotron jumbotron-fluid py-3 mb-1">
        <h1 class="text-center">📽 영화제목📽</h1>
        <hr>
        <div>
            <h3 class="text-center">리뷰내용</h3>
            <p>rank</p>
        </div>
        
        <div class="d-flex justify-content-end mx-2 mt-2">
            <button type="button" class="btn btn-outline-secondary mx-1"> ↩ </button>
            <button type="button" class="btn btn-outline-secondary mx-1"> ✏ </button>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">정말 삭제하시겠습니까?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <a href="{% url 'community:delete' review.pk %}">
                                <button type="button" class="btn btn-danger">Delete</button>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    
        <div class="d-flex justify-content-end mx-2 mt-2">
           <button type="button" class="btn btn-outline-secondary mx-1"> ↩ </button>
        </div>
       
        <div class="d-flex justify-content-end mt-1k text-white">
            <p class="d-inline m-0 px-1">CREATED : </p>
            <p class="d-inline m-0 px-1">UPDATED : </p>  
        <hr>
        </div>
    </div>


</template>

<script>
export default {
    name: 'ReviewDetail',

}
</script>

<style>

</style>