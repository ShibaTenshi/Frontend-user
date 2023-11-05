<template>
  <div>
    <Topnav :logoutBtn="true"/>
    <Homepage topicPage="RestaurantDetail" />
    <div class="restaurantDetail">
      <h1>RestaurantName</h1>

      <!-- put image resaturant -->
      <div class="flex">
        <div class="w-[250px] h-[250px] border-black border-2">
          <img src="" alt="">
          sdfasf
        </div>

        <div class="h-[250px] border-black border-2 grow">
          <img src="" alt="">
        </div>
      </div>
    

      <div class="pt-2">
        <p class="text-center font-bold text-xl py-2">Menu</p>
        <div class="w-[100%] h-[250px] border-black border-2 grid grid-cols-5 overflow-y-scroll">
          <img src="" alt="" class="w-[250px]">
        </div>
      </div>

      <div class="w-3/4 m-auto py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero mollitia aliquid cumque at, consequatur culpa eum minima illum ipsam!
      </div>

      <div class="pt-2 text-center">
        <p class="font-bold text-xl py-2">Open Date Time</p>

      </div>

      <div class="cp">
        <button class="activeBtn" @click="bookingPopUp">Booking Form</button>
      </div>
    </div>
  </div>
  <br>
  <div class="restaurantDetail" v-if="showBooking">
    <h1>Booking Restaurant</h1>
    <div class="m-auto">
      <input type="datetime-local" v-model="chooseTime">
    </div>
    <div class="flex py-4 justify-between">
      <img src="/tableIcon.png" alt="" class="mx-5">
      <div class="py-8 border-2 border-black grow">
        <span class="font-bold">Normal Table</span><br>
        (For 1 - 2 customers)
      </div>

      <div class="items-center border-2 mx-5 py-10">
        <input type="number" class="text-3xl w-[60px] text-center" v-model="numberOfNormal">
      </div>
    </div>

    <div class="flex py-4 justify-between">
      <img src="/tableIcon.png" alt="" class="mx-5">
      <div class="py-8 border-2 border-black grow">
        <span class="font-bold">Big Table</span><br>
        (For 3 or more customers)
      </div>

      <div class="items-center py-10 border-2 mx-5">
        <input type="number" class="text-3xl w-[60px] text-center" v-model="numberOfBig">
      </div>

    </div>
    <div class="cp">
      <button class="activeBtn" @click="submitBookingForm">Accept</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// definePageMeta({
//   middleware : ['auth']
// })

const showBooking = ref(false)
const numberOfNormal = ref(0);
const numberOfBig = ref(0)
const chooseTime = ref("");

const bookingPopUp = () =>{
  showBooking.value = !showBooking.value
}

const submitBookingForm = () =>{
  if(numberOfNormal.value < 0 || numberOfBig.value < 0){
    alert("number of tables can't be less than 0");
  }else{
    const date = new Date(chooseTime.value)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dateTh = date.getDate();
    const time = `${date.getHours()}:${date.getMinutes()}`
    alert("OK")
  }
}
</script>



<style>

</style>
