<template>
  <div>
    <Topnav :logout-btn="true"/>
    <Homepage topicPage="History Booking" />
    <HistoryBookingItem />
  </div>
</template>

<script lang="ts" setup>
// definePageMeta({
//   middleware : ['auth']
// })
useHead({
  title: "History Booking"
})
</script>

<style>

</style>

