export default defineNuxtRouteMiddleware((to, from) => {
    const reference = useCookie<String>("reference-otp")
    if(!reference.value){
        alert('Can\'t Confirm sign up if don\'t signup yet')
        return navigateTo('/login')
    }
})