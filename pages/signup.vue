<template>
  <div>
    <Topnav :login-btn="true" />
    <div class="bg-form">
      <form action="" class="container" @submit.prevent="requestSignUp">
        <br>
        <h1>Sign-Up</h1>
        <div class="textField">
          <label for="">Firstname</label>
          <input type="text" v-model="firstnameText">
        </div>
        <div class="textField">
          <label for="">Lastname</label>
          <input type="text" v-model="lastnameText">
        </div>
        <div class="textField">
          <label for="">Username</label>
          <input type="text" v-model="usernameText">
        </div>
        <div class="textField">
          <label for="">Email</label>
          <input type="email" v-model="emailText">
        </div>
        <div class="textField">
          <label for="">Password</label>
          <input type="password" v-model="passwordText">
        </div>
        <div class="textField">
          <label for="">Confirm Password</label>
          <input type="password" v-model="cpasswordText">
        </div>
        <button type="submit" class="activeBtn">Sign-Up</button>
        <br>
        <p>If you have your account, Please click <NuxtLink to="/login" class="underline text-blue-500">Login</NuxtLink></p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const firstnameText = ref("");
  const lastnameText = ref("");
  const usernameText = ref("");
  const emailText = ref("");
  const passwordText = ref("");
  const cpasswordText = ref("");

  const requestSignUp = () => {
    const fullname = firstnameText.value + " " + lastnameText.value
    const {data: responseData, error} = useFetch("",{
      method: 'post',
      body:{
        fullname: fullname,
        username: usernameText.value,
        email: emailText.value,
        password: passwordText.value
      }
    })

    console.log(responseData)
  }
</script>



<style>

</style>
