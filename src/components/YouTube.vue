<template>
  <iframe
    width="100%"
    height="370"
    :src="'https://www.youtube.com/embed/'+videoId+'?start='+start"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen=""></iframe>
    <small class="video-credits"
    >Video courtesy of
    <a
      :alt="channel+' YouTube Channel'"
      target="_blank"
      :href="'https://www.youtube.com/@'+channel"
      >{{channel}}</a>
  </small>
</template>

<script>
export default {
  name: 'YouTube',
  props: {
    channel: String,
    videoId: String,
    start: Number
  }
}
</script>