import { useAuthStore } from "~/store/useAuthStore";

const authStore = useAuthStore();

export default defineNuxtRouteMiddleware((to,from)=>{
    if(authStore.getToken === ""){
        return navigateTo('/login')
    }
})

