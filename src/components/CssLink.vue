<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    :href="url"
  >
    <i 
    :class="style" 
    :title="text"
    ></i>
  </a>
</template>
<script>
export default {
  name: 'CssLink',
  props: {
    text: String,
    url: String,
    style: String
  }
}
</script>