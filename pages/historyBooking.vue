<template>
  <div>
    <Topnav :bookingBtn="true" />
    <Homepage topicPage="History Booking" />
    <div class="w-[600px]">
      <div class="bg-gray-400 m-auto flex my-4">

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware : ['auth']
})
useHead({
  title: "History Booking"
})
</script>

<style>

</style>

