<template>
  <div>
    <Topnav :login-btn="true" :signup-btn="true" :logout-btn="false"/>
    <Homepage topicPage="Super app for queue"><form>
          <label for="search">Search</label>
          <input type="text" v-model="searchItem"><br>
          <button type="submit" class="activeBtn">Search</button>
        </form>
    </Homepage>
  </div>
</template>

<script lang="ts" setup>
  const searchItem = ref("");
</script>



<style>

</style>
