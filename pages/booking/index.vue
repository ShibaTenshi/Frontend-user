<template>
    <div>
        <Topnav :logout-btn="true" />
        <Homepage topicPage="Booking" />

        <BookingItem v-for="item in list" :title="item.restaurantName" :time="item.dateTime" :table-size="item.numSeat" :detail="item.status" :image-file="item.logo">
            <button type="button" class="cancelBtn" @click="clickAcceptBooking(item.id)">Cancel</button>
        </BookingItem>
        
        <div class="w-[500px] h-[300px] bg-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 text-center" v-if="showAccept">
            <br>
            <p class="font-bold text-2xl">Are you sure to cancel this restaurant</p>
            <br>
            {{ storeIdBooking }}
            <br>
            <button class="px-5 py-2 bg-red-400 m-5" @click="clickCancel">Cancel</button>
            <button class="px-5 py-2 bg-green-400 m-5" @click="cancelBooking(storeIdBooking)">Accept</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    // const {data: booking_res} = useFetch("");

    const runtime = useRuntimeConfig();
    const token = useCookie("token")
    const showAccept = ref(false);
    const storeIdBooking = ref("");

    definePageMeta({
        middleware : ['auth']
    })

    useHead({
        title: "Booking List"
    })

    const {data:bookingList} = await useFetch(runtime.public.API_URL + "myBooking/inProgress",{
        query: {
            tokenId: token.value
        }
    })

    const list = ref(toRaw(bookingList))
    

    const cancelBooking = async (idBooking:String) =>{
        showAccept.value = false
        const {data:cancel} = await useFetch(runtime.public.API_URL + "myBooking/cancel",{
            method: 'post',
            query: {
                tokenId: token.value,
                bookingId: idBooking
            }
        })

        location.reload()
    }

    const clickCancel = () =>{
        storeIdBooking.value = ""
        showAccept.value = false
    }

    const clickAcceptBooking = (idBooking:string) =>{
        storeIdBooking.value = idBooking
        showAccept.value = true
    }
</script>

<style scoped>

</style>