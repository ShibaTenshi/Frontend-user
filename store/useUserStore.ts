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

    return {user, changeUser}
})