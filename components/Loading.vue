<template>
  <div class="loadingBg" v-if="showLoading">
    <div class="loadingImg"></div>
    <div class="font-bold text-3xl ml-4">Loading</div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  showLoading: Boolean
})
</script>

<style>

</style>

