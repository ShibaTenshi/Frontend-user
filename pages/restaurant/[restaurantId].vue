<template>
  <div>
    <Topnav :logoutBtn="true"/>
    <Homepage topicPage="RestaurantDetail" />
    <div class="restaurantDetail">
      <h1>{{ restaurant.restaurantName }}</h1>

      <!-- put image resaturant logo -->
      <div class="pt-2">
        <div class="w-[250px] h-[250px] m-auto overflow-hidden">
          <img :src="restaurant.logoImage" alt="">
        </div>
      </div>

      <div class="pt-2">
        <p class="text-center font-bold text-xl py-2">Environment</p>
        <div class="w-[100%] h-[250px] border-black border-2 grid grid-cols-5 overflow-y-scroll">
          <img :src="image" alt="" class="w-[150px] h-[150px]" v-for="image in restaurant.envImages">
        </div>
      </div>
    
      <!-- put image menu -->
      <div class="pt-2">
        <p class="text-center font-bold text-xl py-2">Menu</p>
        <div class="w-[100%] h-[250px] border-black border-2 grid grid-cols-5 overflow-y-scroll">
          <img :src="image" alt="" class="w-[150px] h-[150px]" v-for="image in restaurant.menuImages">
        </div>
      </div>

      <div class="w-3/4 m-auto py-2">
        <h1>Detail</h1>
        {{ restaurant.description }}
      </div>

      <div class="w-3/4 m-auto py-2 text-center">
        <h1>Catgeory</h1>
        <p class="text-xl">{{ restaurant.category }}</p>
      </div>

      <div class="pt-2 text-center">
        <p class="font-bold text-xl py-2">Open Date Time</p>
        <div class="flex justify-center">
        <p class="p-1" v-bind:style="restaurant.openDate[0] == 1 ? 'color: black; font-weight: bold' : 'color: gray'">Sunday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[1] == 1 ? 'color: black; font-weight: bold' : 'color: gray'">Monday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[2] == 1 ? 'color: black; font-weight: bold' : 'color: gray'">Tuesday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[3] == 1 ? 'color: black; font-weight: bold' : 'color: gray'">Wednesday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[4] == 1 ? 'color: black; font-weight: bold' : 'color: gray'">Thursday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[5] == 1 ? 'color: black; font-weight: bold' : 'color: gray'">Friday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[6] == 1 ? 'color: black; font-weight: bold' : 'color: gray'">Saturday</p>
        </div>
        <p class="font-bold text-sm py-2">{{ restaurant.openTime }} - {{ restaurant.closeTime }}</p>
        <p class="font-bold text-xl py-2">Location</p>
        <p>{{ restaurant.location }}</p>
      </div>

      <div class="cp">
        <button class="activeBtn" @click="bookingPopUp">Booking Form</button>
      </div>
    </div>
  </div>
  <br>
  <div class="restaurantDetail" v-if="showBooking">
    <h1>Booking Restaurant</h1>
    <div class="w-[500px] m-auto">
      <input type="datetime-local" v-model="chooseTime" class="text-center w-[500px] text-xl border-black p-2">
    </div>
    <div class="flex py-4 justify-center" v-for="table in tableSize">
      <img src="/tableIcon.png" alt="" class="mx-5">
      <div class="py-8 border-2 border-black grow">
        <span class="font-bold text-xl">Table Size : {{ table }} seats</span><br>
      </div>

      <div class="items-center border-2 mx-5 py-10">
        <input type="radio" class="w-[40px] h-[40px]" :value="table" v-model="picked">
      </div>
    </div>
    <div class="cp">
      <button class="activeBtn" @click="submitBookingForm">Accept</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware : ['auth']
})

const token = useCookie("token")
const route = useRoute().params.restaurantId
const runtime = useRuntimeConfig();

useHead({
  title: "Restaurant"
})

const showBooking = ref(false)
const chooseTime = ref("");

const {data} = await useFetch(runtime.public.API_URL + "content/viewRestaurant",{
  query:{
    name: route
  }
})

const restaurant = ref(toRaw(data.value))

const {data:tables} = await useFetch(runtime.public.API_URL + "booking/allTable",{
  query:{
    name: route
  }
})

const tableSize = ref(toRaw(tables.value))
const picked =ref(tableSize.value[0]);

const bookingPopUp = () =>{
  showBooking.value = !showBooking.value
}

const submitBookingForm = async() =>{
  let date = new Date(chooseTime.value)
  if(isNaN(date)){
    alert("Please input date")
    return
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateTh = date.getDate();
  const day = date.getDay();
  let time = "";
  if(date.getHours() < 10 && date.getMinutes() < 10){
    time = `0${date.getHours()}:0${date.getMinutes()}`
  }else if(date.getHours() < 10){
    time = `0${date.getHours()}:${date.getMinutes()}`
  }else if(date.getMinutes() < 10){
    time = `${date.getHours()}:0${date.getMinutes()}`
  }else{
    time = `${date.getHours()}:${date.getMinutes()}`
  }
  let dateThText = "";
  if(dateTh < 10){
    dateThText = `0${dateTh}`
  }else{
    dateThText = `${dateTh}`
  }

  try{
    const {data:booking} = await useFetch(runtime.public.API_URL + "booking",{
      method: 'post',
      body: {
        time: time,
        year: year,
        month: month,
        dayTh: dateThText,
        restaurantName: route,
        tokenId: token.value,
        numSeat: picked.value,
        dayOfWeek: day
      }
    })

    const checkError = String(toRaw(booking.value));
    if(checkError.slice(0,6) === "Error:"){
        throw checkError
    }
    navigateTo("/booking")
  }catch(error){
    alert(error)
  }
    

  
}
</script>



<style>

</style>
