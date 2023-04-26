<template>
  <img class="logo" alt="Logo" src="{{url}}" />
</template>

<script>


export default {
  name: 'Logo',
  props: {
    url: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>