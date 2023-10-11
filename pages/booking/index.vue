<template>
    <div>
        <Topnav :bookingBtn="true" :logoutBtn="true"/>
        <Homepage topicPage="Booking" />
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