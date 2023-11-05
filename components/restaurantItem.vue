<template>
  <div class="restaurantItem">
    <h2>{{ restaurantTitle }}</h2>
    <div class="restaurantImage">
      <img src="#" alt="restaurantImage" srcset="">
    </div>
    <p>{{ restaurantDetail }}</p>
    <NuxtLink :to="`/restaurant/${restaurantId}`" class="detailBtn">Detail</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    restaurantTitle: String,
    restaurantImage: String,
    restaurantDetail: String,
    restaurantId: String
  })
</script>



<style>

</style>
