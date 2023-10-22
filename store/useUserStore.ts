import { defineStore } from "pinia";

export const useUserStore = defineStore('user', ()=>{
    const userStore = ref({
        fullname: "",
    })

    function changeUser(tokenUser: string){
        const {data:user} = useFetch("http://10.147.17.139:5041/token3",{
            method: 'post',
            query: {token: tokenUser}
        })

        userStore.value.fullname = String(toRaw(user.value).fullname)
    }

    return {userStore}
})