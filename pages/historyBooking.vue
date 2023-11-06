<template>
  <div>
    <Topnav :logout-btn="true"/>
    <Homepage topicPage="History Booking" />
    <BookingItem v-for="item in list" :title="item.restaurantName" :time="item.dateTime" :table-size="item.numSeat" :detail="item.status" :image-file="item.logo"/>
  </div>
</template>

<script lang="ts" setup>
const runtime = useRuntimeConfig();
const token = useCookie("token")
definePageMeta({
  middleware : ['auth']
})
useHead({
  title: "History Booking"
})

const {data:bookingList} = await useFetch(runtime.public.API_URL + "myBooking/history",{
        query: {
            tokenId: token.value
        }
    })

    const list = ref(toRaw(bookingList))
</script>

<style>

</style>

