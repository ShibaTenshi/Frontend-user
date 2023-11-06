<template>
  <div>
    <Topnav :login-btn="true"/>
    <div class="bg-form">
      <form action="" class="container" @submit.prevent="requestLogin">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br><br>
        <h1>Log-In</h1>
        <div class="textField">
          <label for="">Username</label>
          <input type="text" v-model="usernameText" placeholder="username"><br>
        </div>
        <div class="textField">
          <label for="">Password</label>
          <input type="password" v-model="passwordText" placeholder="****"><br>
        </div>
        <button type="submit" class="activeBtn">Login</button>
        <br><br><br>
        <p>If you don't have your account, Please click <NuxtLink to="/signup" class="underline text-blue-500">SignUp</NuxtLink></p>
      </form>
      
    </div>
  </div>
  <Loading v-if="showLoading" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const runtime = useRuntimeConfig();

useHead({
  title: "LoginCustomer"
})
  const usernameText = ref("")
  const passwordText = ref("")
  const showLoading = ref(false);

  async function requestLogin() {
    // http://10.147.17.139:8080/login/customer
    try{
      console.log("start...")
      showLoading.value = true
      if(usernameText.value === "" || passwordText.value === ""){
        throw "Text Field is empty."
      }
      const {data:token, error} = await useFetch(`${runtime.public.API_URL}auth/login/customer`,{
        method: 'post',
        body:{
          username: usernameText.value,
          password: passwordText.value
        }
      })

    //  if(toRaw(token.value).status === "User not found") {
    //     alert("User not found")
    //     throw "User not found"
    //   }
    //   if(toRaw(token.value).status === "Password not correct") {
    //     alert("Password incoorect")
    //     throw "Password incorrect"
    //   }

      if(error.value != null){
        throw error.value
      }
      let check = String(token.value)
      if(check.slice(0,6) === "Error:"){
        throw check
      }
      
      const tokenCookie = useCookie<string>('token')
      tokenCookie.value = check;

      // get user
      const {data:user} = await useFetch(runtime.public.API_URL + "customer/profile",{
        query: {
          tokenId: tokenCookie.value
        }
      })

      const getUser = ref(toRaw(user.value));
      console.log(getUser)

      navigateTo('/allRestaurant');
    }catch(error){
      console.error(error)
      alert(error)
    }

    showLoading.value = false

    // const token = await useCookie<string>('token')
    // token.value = "---"
    
  }
</script>



<style>

</style>
