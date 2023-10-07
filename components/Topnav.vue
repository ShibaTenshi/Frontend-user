<template>
  <div class="topnav">
    <NuxtLink to="/" class="navLink">ShibaQueue</NuxtLink>
    <NuxtLink to="/login" class="navLink access" v-if="loginBtn">Login</NuxtLink>
    <NuxtLink to="/signup" class="navLink access" v-if="signupBtn">Signup</NuxtLink>
    <NuxtLink to="/" class="navLink access" v-if="logoutBtn">Signup</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    signupBtn: Boolean,
    loginBtn: Boolean,
    logoutBtn: Boolean
  })
</script>



<style>

</style>
