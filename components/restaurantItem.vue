<template>
  <div class="restaurantItem">
    <h2>{{ restaurantTitle }}</h2>
    <div class="restaurantImage">
      <img src="#" alt="" srcset="">
    </div>
    <p>{{ restaurantDetail }}</p>
    <NuxtLink to="/" class="border-black border-[2px]">Detail</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    restaurantTitle: String,
    restaurantImage: String,
    restaurantDetail: String
  })
</script>



<style>

</style>
