<template>
  <div>
    <Topnav :logoutBtn="true"/>
    
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware : ['auth']
})
</script>



<style>

</style>
