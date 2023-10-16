<template>
    <div>
        <Topnav :bookingBtn="true" :logoutBtn="true"/>
        <Homepage topicPage="Booking" />

        <img src="" alt="" class="w-full h-full">
    </div>
</template>

<script lang="ts" setup>
    // const {data: booking_res} = useFetch("");


    definePageMeta({
        middleware : ['auth']
    })
</script>

<style scoped>

</style>