<template>
  <div class="topnav">
    <NuxtLink to="/" class="navLink logo"><img src="/logoUser.png" class="inline w-[25px] mb-1"> ShibaQueue</NuxtLink>
    <NuxtLink to="/booking" class="navLink" v-if="logoutBtn">Booking</NuxtLink>
    <NuxtLink to="login" class="navLink access" v-if="loginBtn">LogIn</NuxtLink>
    <NuxtLink to="/signup" class="navLink access" v-if="loginBtn">SignUp</NuxtLink>
    <button type="button" class="navLink access" v-if="logoutBtn" @click="requestLogout">
      Logout
    </button>

    <NuxtLink to="/profile.vue" class="navLink access" v-if="logoutBtn">{{ "Hello world" }}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

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
