<template>
  <div class="w-[600px] bg-gray-300 m-auto flex my-4">
    <div class="imageBooking">
      <img src="" alt="imageRestaurant" class="w-full h-full">
    </div>
    <div class="detailBooking">
      <h2 class="text-[20px] font-bold">TitleRestaurant</h2>
      <p>detail</p>
      <p>time</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  detail: String,
  time: String,
  
})
</script>

<style>

</style>

