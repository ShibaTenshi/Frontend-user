<template>
  <div class="topnav">
    <NuxtLink to="/" class="navLink logo"><img src="/happy 2.svg" class="inline w-[25px]"> ShibaQueue</NuxtLink>
    <NuxtLink to="/booking" class="navLink" v-if="bookingBtn">Booking</NuxtLink>
    <NuxtLink to="/login" class="navLink access" v-if="loginBtn">Login</NuxtLink>
    <NuxtLink to="/signup" class="navLink access" v-if="signupBtn">Signup</NuxtLink>
    <NuxtLink to="/" class="navLink access" v-if="logoutBtn">Logout</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    signupBtn: Boolean,
    loginBtn: Boolean,
    logoutBtn: Boolean,
    bookingBtn: Boolean
  })
</script>



<style>

</style>
