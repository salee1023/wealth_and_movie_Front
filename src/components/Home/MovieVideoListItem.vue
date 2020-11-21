<template>
    <a class="video-list-item">
        <img :src="youtubeImageSrc" alt="유튜브 영상">
    </a>   
</template>

<script>
export default {
    name: 'MovieVideoListItem',
    props: {
        video: {
            type: Object,
        }
    },
    computed: {
       youtubeImageSrc: function () {
            return this.video.snippet.thumbnails.default.url
        }
    },
}
</script>

<style>
.video-list-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    /* height: 90px; */
}
.video-list-item > img {
    height: fit-content; /* 텍스트 늘어나도 이미지는 원래 사이즈 유지 */
    margin-right: .5rem;
}
</style>