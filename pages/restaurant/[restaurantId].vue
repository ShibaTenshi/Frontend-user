<template>
  <div>
    <Topnav :logoutBtn="true"/>
    <Homepage topicPage="RestaurantDetail" />
    <div class="restaurantDetail">
      <h1>{{ restaurant.restaurantName }}</h1>

      <!-- put image resaturant logo -->
      <div class="pt-2">
        <div class="w-[250px] h-[250px] border-black border-2 m-auto">
          <img :src="restaurant.logoImage" alt="">
        </div>
      </div>

      <div class="pt-2">
        <p class="text-center font-bold text-xl py-2">Environment</p>
        <div class="w-[100%] h-[250px] border-black border-2 grid grid-cols-5 overflow-y-scroll">
          <img :src="image" alt="" class="w-[150px]" v-for="image in restaurant.envImages">
        </div>
      </div>
    
      <!-- put image menu -->
      <div class="pt-2">
        <p class="text-center font-bold text-xl py-2">Menu</p>
        <div class="w-[100%] h-[250px] border-black border-2 grid grid-cols-5 overflow-y-scroll">
          <img :src="image" alt="" class="w-[150px]" v-for="image in restaurant.menuImages">
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
        <p class="p-1" v-bind:style="restaurant.openDate[0] == 1 ? 'color: black' : 'color: gray'">Sunday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[1] == 1 ? 'color: black' : 'color: gray'">Monday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[2] == 1 ? 'color: black' : 'color: gray'">Tuesday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[3] == 1 ? 'color: black' : 'color: gray'">Wednesday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[4] == 1 ? 'color: black' : 'color: gray'">Thursday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[5] == 1 ? 'color: black' : 'color: gray'">Friday</p>
        <p class="p-1" v-bind:style="restaurant.openDate[6] == 1 ? 'color: black' : 'color: gray'">Saturday</p>
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
definePageMeta({
  middleware : ['auth']
})

const route = useRoute().params.restaurantId
const runtime = useRuntimeConfig();
console.log(route);

useHead({
  title: "Restaurant"
})

const showBooking = ref(false)

const numberofSeat = ref([])
const chooseTime = ref("");

const {data} = await useFetch(runtime.public.API_URL + "content/viewRestaurant",{
  query:{
    name: route
  }
})

const restaurant = ref(toRaw(data.value))


const bookingPopUp = () =>{
  showBooking.value = !showBooking.value
}

const submitBookingForm = () =>{
  // if(numberOfNormal.value < 0 || numberOfBig.value < 0){
  //   alert("number of tables can't be less than 0");
  // }else{
  //   const date = new Date(chooseTime.value)
  //   const year = date.getFullYear();
  //   const month = date.getMonth() + 1;
  //   const dateTh = date.getDate();
  //   const time = `${date.getHours()}:${date.getMinutes()}`
  //   alert("OK")
  // }
}
</script>



<style>

</style>
