<template>
  <div>
    <Topnav :login-btn="true" :signup-btn="true" :logout-btn="false"/>
    <div class="bg-form">
      <form action="" class="container">
        <br>
        <h1>Log-In</h1>
        <div class="textField">
          <label for="">Username</label>
          <input type="text"><br>
        </div>
        <div class="textField">
          <label for="">Password</label>
          <input type="password" name="" id=""><br>
        </div>
        <button type="submit" class="activeBtn">Login</button>
        <br><br><br>
        <p>If you don't have your account, Please click <NuxtLink to="/signup" class="underline text-blue-500">Sign-Up</NuxtLink></p>
      </form>
      
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>



<style>

</style>
