<template>
  <div>
    <div class="homepage">
      <img src="/customerhomepagepic.png" alt="homepage">
      <div class="topic">
        <h1>{{ topicPage }}</h1>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  topicPage: String
})
</script>



<style>

</style>
