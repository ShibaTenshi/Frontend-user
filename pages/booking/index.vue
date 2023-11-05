<template>
    <div>
        <Topnav :bookingBtn="true" />
        <Homepage topicPage="Booking" />

        <BookingItem />
        <BookingItem />

    </div>
</template>

<script lang="ts" setup>
    // const {data: booking_res} = useFetch("");


    // definePageMeta({
    //     middleware : ['auth']
    // })

    useHead({
        title: "Booking List"
    })
</script>

<style scoped>

</style>