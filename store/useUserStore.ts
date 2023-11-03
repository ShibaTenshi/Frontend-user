import { defineStore } from "pinia";

export const useUserStore = defineStore('user', ()=>{
    const user = ref({
        fullname: "",
        username: "",
        email: "",
    })

    function changeUser(fullname: string, username: string, email: string){
        user.value.fullname = fullname;
        user.value.username = username;
        user.value.email = email;
    }

    function clearUser(){
        user.value.fullname = "";
        user.value.username = "";
    }

    return {user}
})