<template>
  <div>
    <Topnav :signup-btn="true"/>
    <div class="bg-form">
      <form action="" class="container" @submit="requestLogin">
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
        <p>If you don't have your account, Please click <NuxtLink to="/signup" class="underline text-blue-500">Sign-Up</NuxtLink></p>
      </form>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
  const usernameText = ref("")
  const passwordText = ref("")

  const requestLogin = () => {
    const {data: responseData, error} = useFetch("",{
      method: 'post',
      body:{
        username: usernameText.value,
        password: passwordText.value
      }
    })

    if(error){
      console.log(error.value);
      
    }else{
      console.log(responseData);
    }
    
  }
</script>



<style>

</style>
