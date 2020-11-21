<template>
  <div class="video-list">
    <MovieVideoListItem
    v-for="(video, idx) in videos"
    :key="idx"
    :video="video"
    />
  </div>
</template>

<script>
import MovieVideoListItem from '@/components/Home/MovieVideoListItem.vue'

export default {
    name: 'MovieVideoList',
    components: {
      MovieVideoListItem,
    },
    computed: {
      videos: function () {
        return this.$store.state.videos
      }
    }
}
</script>

<style>
.video-list {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>