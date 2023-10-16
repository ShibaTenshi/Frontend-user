<template>
  <div>
    <Topnav :logoutBtn="true"/>
    <Homepage topicPage="RestaurantDetail" />
    <div class="restaurantHeader">
      <h1>RestaurantName</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware : ['auth']
})
</script>



<style>

</style>
