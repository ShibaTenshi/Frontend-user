<template>
  <div>
    <Topnav :logout-btn="true"/>
    <div class="bg-form">
      <form class="container" @submit.prevent="acceptSignUP">
        <br>
        <h1>Confirm your email</h1>
        <h2>Confirmation OTP sent to</h2>
        <p>{{ email }}</p>
        <p>Reference-OTP : {{ refernece }}</p>
        <div class="textField">
          <label for="">OTP</label>
          <input type="text" v-model="pinText"><br>
        </div>
        <button type="submit" class="activeBtn">Confirm</button>
        <br><br><br>
        <p>Don't recieved your email ? <button type="button" class="underline text-blue-500" @click="resendOTP">Resend</button></p>
      </form>
      
    </div>
  </div>
  <!-- <Loading :show-loading="showLoading" /> -->
</template>

<script lang="ts" setup>

definePageMeta({
  middleware: ['before-confirm']
})

useHead({
  title: "Confirm Register"
})

  const pinText = ref("");
  const email = useRoute().params.confirm;
  const showLoading = ref(false)
  let refernece = useCookie<string>('reference-otp')
  const runtime = useRuntimeConfig()

  async function acceptSignUP() {
    showLoading.value = true
    try{
      const refernece = useCookie<string>('reference-otp')
      const {data: responseData, error, status:success} = await useFetch(`${runtime.public.API_URL}otp`,{
        method: 'post',
        query: {refer: refernece.value, otpNumber: pinText.value}
      })

      let check = String(responseData.value)
      console.log(check)

      if(check.slice(0, 6) === "Error:"){
        throw responseData.value
      }else{
        navigateTo('/login')
      }
    }catch(error){
      console.error(error)
      alert(error)
    }

    showLoading.value = false
  }

  async function resendOTP(){
    const refernece = useCookie<string>('reference-otp')
      const {data: responseData, error, status:success} = await useFetch("http://10.147.17.139:5041/otp",{
        query: {oldRefer: String(refernece.value)}
      })

      console.log(responseData.value)

    refernece.value = String(responseData.value)
    alert("Resend, please check you email")
  }
</script>



<style>

</style>
