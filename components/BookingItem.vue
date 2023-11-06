<template>
  <div class="w-[600px] bg-gray-300 m-auto flex my-4">
    <div class="imageBooking">
      <img :src="imageFile" alt="imageRestaurant" class="w-full h-full">
    </div>
    <div class="detailBooking">
      <h2 class="text-[20px] font-bold">{{ title }}</h2>
      <p class="text-xl"><span class="font-bold">Status : </span>{{ detail }}</p>
      <p class="text-xl"><span class="font-bold">Time : </span>{{ time }}</p>
      <p class="text-xl"><span class="font-bold">Table-Size: </span>{{ tableSize }} seats</p>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  detail: String,
  time: String,
  tableSize: String,
  imageFile: String
})
</script>

<style>

</style>

