<template>
  <div class="topnav">
    <NuxtLink to="/" class="navLink logo"><img src="/logoUser.png" class="inline w-[25px]"> ShibaQueue</NuxtLink>
    <NuxtLink to="/booking" class="navLink" v-if="bookingBtn">Booking</NuxtLink>
    <button class="navLink access" v-if="loginBtn" @click="enterLogin">Login</button>
    <NuxtLink to="/signup" class="navLink access" v-if="signupBtn">Signup</NuxtLink>
    <!-- <button type="button" class="navLink access">{{  }}</button> -->
    <button type="button" class="navLink access" v-if="logoutBtn" @click="requestLogout">
      Logout
    </button>
  </div>
</template>

<script lang="ts" setup>


  defineProps({
    signupBtn: Boolean,
    bookingBtn: Boolean
  })

  const loginBtn = ref<Boolean>(false)
  const logoutBtn = ref<Boolean>(false)
  const cookie = useCookie('token')
  
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

  function enterLogin(){
    if(!cookie.value){
      navigateTo('/login')
    }else{
      navigateTo('/booking')
    }
  }


  if(!cookie.value){
    loginBtn.value = true
    logoutBtn.value = false
  }else{
    loginBtn.value = false
    logoutBtn.value = true
  }
</script>



<style>

</style>
