<template>
  <div>
    <Topnav />
    <div class="bg-form">
      <form action="" class="container" @submit.prevent="requestSignUp">
        <br>
        <h1>Sign-Up</h1>
        <div class="textField">
          <label for="">Fullname</label>
          <input type="text" v-model="fullnameText" placeholder="Firstname Lastname">
        </div>
        <div class="textField">
          <label for="">Username</label>
          <input type="text" v-model="usernameText" placeholder="username">
        </div>
        <div class="textField">
          <label for="">Email</label>
          <input type="email" v-model="emailText" placeholder="you@example.com">
        </div>
        <div class="textField">
          <label for="">Password</label>
          <input type="password" v-model="passwordText" placeholder="****">
        </div>
        <div class="textField">
          <label for="">Confirm Password</label>
          <input type="password" v-model="cpasswordText" placeholder="****">
        </div>
        <button type="submit" class="activeBtn">Sign-Up</button>
        <br>
        <p>If you have your account, Please click <NuxtLink to="/login" class="underline text-blue-500">Login</NuxtLink></p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const fullnameText = ref("");
  const usernameText = ref("");
  const emailText = ref("");
  const passwordText = ref("");
  const cpasswordText = ref("");

  const noticText = ref("");

  async function requestSignUp() {
    try{
      if(passwordText.value === "" || cpasswordText.value === ""){
        throw "Both password is empty."
      }else if(passwordText.value !== cpasswordText.value){
        throw "Password and Cofirm Password are not the same."
      }


      const {data: responseData, error, status:success} = await useFetch("http://10.147.17.139:5041/register/customer",{
      method: 'post',
      body:{
        name: fullnameText.value,
        username: usernameText.value,
        email: emailText.value,
        password: passwordText.value
      }
    })

    // check status to go to confirm page
    let check = String(responseData.value)


    if(check.slice(0, 6) === "Error:"){
      throw responseData.value
    }else if(check == null){
      throw "Can't request signup" // since server isn't opened.
    }else {
      const refernece = useCookie<string>('reference-otp')
      refernece.value = String(responseData.value)
      navigateTo(`/confirm/${emailText.value}`)
    }

    }catch(error){
      console.error(error)
      alert(error)
    }
    

  }
</script>



<style>

</style>
