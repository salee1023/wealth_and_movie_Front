<template>
  <div class="video-container">
    <iframe :src="videoURI" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "MovieVideoListItem",
  props: {
    video: {
      type: Object,
    },
  },
  computed: {
    videoURI: function () {
      const videoId = this.video.id.videoId;
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style>
.video-list-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
}
.video-list-item > img {
  height: fit-content; /* 텍스트 늘어나도 이미지는 원래 사이즈 유지 */
  margin-right: 0.5rem;
}
</style>