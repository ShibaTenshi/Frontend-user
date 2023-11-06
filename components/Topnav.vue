<template>
  <div class="topnav">
    <NuxtLink to="/" class="navLink logo"><img src="/logoUser.png" class="inline w-[25px] mb-1"> ShibaQueue</NuxtLink>
    <NuxtLink to="/booking" class="navLink" v-if="logoutBtn">Booking</NuxtLink>
    <NuxtLink to="login" class="navLink access" v-if="loginBtn">LogIn</NuxtLink>
    <NuxtLink to="/signup" class="navLink access" v-if="loginBtn">SignUp</NuxtLink>
    <NuxtLink to="/historyBooking" class="navLink" v-if="logoutBtn">History</NuxtLink>
    <button type="button" class="navLink access" v-if="logoutBtn" @click="requestLogout">
      Logout
    </button>
    <NuxtLink to="/profile" class="navLink access" v-if="logoutBtn">
      <!-- <img src="/logoUser.png" class="inline w-[25px] mb-1"> -->
      {{ getUser.username }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/store/useUserStore';

const runtime = useRuntimeConfig();

defineProps({
  loginBtn: Boolean,
  logoutBtn: Boolean
})
  const cookie = useCookie('token')
  
  
  const {data:user} = await useFetch(runtime.public.API_URL + "customer/profile",{
    query:{
      tokenId: cookie.value
    }
  })

  const getUser = ref(toRaw(user.value))

  async function requestLogout() {
    try{
      const cookie = useCookie<string>('token')
      const {data} = await useFetch(`http://10.147.17.139:5041/auth/logout`,{
      method:'post',
      query: {token: cookie.value}
      })
      cookie.value = ""
      alert("You Log-out Complete!!")
      navigateTo('/login')
    }catch(error){
      console.error(error)
    }
  }
</script>



<style>

</style>
