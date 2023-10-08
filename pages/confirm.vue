<template>
  <div>
    <Topnav />
    <div class="bg-form">
      <form action="" class="container" @submit="">
        <br>
        <h1>Confirm your email</h1>
        <h2>Confirmation PIN sent to</h2>
        <p>{{ email }}</p>
        <div class="textField">
          <label for="">PIN</label>
          <input type="text" v-model="pinText"><br>
        </div>
        <button type="submit" class="activeBtn">Confirm</button>
        <br><br><br>
        <p>Don't recieved your email ? <button type="button" class="underline text-blue-500">Resend</button></p>
      </form>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
  const pinText = ref("");
  const email = ref("");
</script>



<style>

</style>
