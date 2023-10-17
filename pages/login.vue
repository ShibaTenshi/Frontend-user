<template>
  <div>
    <Topnav :signup-btn="true"/>
    <div class="bg-form">
      <form action="" class="container" @submit.prevent="requestLogin">
        <br>
        <h1>Log-In</h1>
        <div class="textField">
          <label for="">Username</label>
          <input type="text" v-model="usernameText"><br>
        </div>
        <div class="textField">
          <label for="">Password</label>
          <input type="password" v-model="passwordText"><br>
        </div>
        <button type="submit" class="activeBtn">Login</button>
        <br><br><br>
        <p>If you don't have your account, Please click <NuxtLink to="/signup" class="underline text-blue-500">SignUp</NuxtLink></p>
      </form>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
  const usernameText = ref("")
  const passwordText = ref("")

  async function requestLogin() {
    // http://10.147.17.139:8080/login/customer
    try{
      console.log("start...")
      const {data:token} = await useFetch("http://10.147.17.139:5041/auth/login/customer",{
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
      let check = String(token.value)
      if(check.slice(0,6) === "Error:"){
        throw check
      }
      
      const tokenCookie = useCookie<string>('token')
      tokenCookie.value = check;
      navigateTo('/allRestaurant');
    }catch(error){
      console.error(error)
      alert(error)
    }

    // const token = await useCookie<string>('token')
    // token.value = "---"
    
  }
</script>



<style>

</style>
