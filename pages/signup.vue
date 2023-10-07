<template>
  <div>
    <Topnav :login-btn="true" :signup-btn="true" :logout-btn="false"/>
    <div class="bg-form">
      <form action="" class="container">
        <br>
        <h1>Sign-Up</h1>
        <div class="textField">
          <label for="">Firstname</label>
          <input type="text">
        </div>
        <div class="textField">
          <label for="">Lastname</label>
          <input type="text" name="" id="">
        </div>
        <div class="textField">
          <label for="">Username</label>
          <input type="text">
        </div>
        <div class="textField">
          <label for="">Email</label>
          <input type="email">
        </div>
        <div class="textField">
          <label for="">Password</label>
          <input type="password">
        </div>
        <div class="textField">
          <label for="">Confirm Password</label>
          <input type="password">
        </div>
        <button type="submit" class="activeBtn">Sign-Up</button>
        <br>
        <p>If you have your account, Please click <NuxtLink to="/login" class="underline text-blue-500">Login</NuxtLink></p>
      </form>
      
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>



<style>

</style>
