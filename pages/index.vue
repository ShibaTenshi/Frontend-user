<template>
  <div>
    <Topnav :login-btn="true" :signup-btn="true" :logout-btn="false"/>
    <div class="homepage">
      <img src="customerhomepagepic.png" alt="homepage">
      <div class="topic">
        <h1>Super app for queue</h1>
        <form action="">
          <label for="search">Search</label>
          <input type="text" v-model="searchItem"><br>
          <button type="submit" class="activeBtn">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const searchItem = ref("");
</script>



<style>

</style>
