<template>
  <div>
    <Topnav :logout-btn="true"/>
    <Homepage topic-page="My Profile"/>
    <div class="profile">
      <br>
      <img :src="imageFile" alt="profile" class="imageProfile">
      <div class="text-center my-5">
        <input type="file" class="text-lg font-normal w-[250px]" @change="onChangeFile"/>
        <button @click="onSumbit" class="border-black border-2 px-2 text-lg bg-[#94A684] hover:rounded-full" v-if="changeImage">Upload Image</button>
      </div>
      <div class="detailProfile">
        <label>Fullname :    <span class="font-normal text-xl">{{ getUser.name }}</span></label><br>
        <label>Username :    <span class="font-normal text-xl">{{ getUser.username }}</span></label><br>
        <label>Email :       <span class="font-normal text-xl">{{ getUser.email }}</span></label><br>
      </div>
      <div class="cp">
        <button type="button" class="activeBtn" @click="popUpCP">Change Password</button>
      </div>
      <div class="cp">
          <button type="submit" class="bg-white px-3 py-1 text-xl border-red-400 border-4 hover:rounded-full" @click="clickAcceptRemove">Delete Account</button>
        </div>
    </div>

    <div class="profile" v-if="changePassword">
      <h1 class="text-center pt-6">Change Password</h1>
      <br>
      <form @submit.prevent="">
        <div class="textField">
          <label for="">Original Password</label>
          <input type="password" v-model="opassword"><br>
        </div>
        <div class="textField">
          <label for="">New Password</label>
          <input type="password" v-model="npassword"><br>
        </div>
        <div class="textField">
          <label for="">Confirm Password</label>
          <input type="password" v-model="cpassword"><br>
        </div>
        <div class="cp">
          <button type="submit" class="activeBtn" @click="changePasswordHandler">Accept</button>
        </div>
      </form>
      
    </div>

    <!-- <label>Upload File</label> -->
    <!-- <input type="file" @change="onChangeFile">
    <button @click="onSumbit" class="border-black border-2 px-5 py-2">Upload</button> -->

    <div class="w-[500px] h-[300px] bg-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 text-center" v-if="showAcceptRemove">
            <br>
            <p class="font-bold text-2xl">Are you sure to delete your account?</p>
            <br>
            <br>
            <button class="px-5 py-2 bg-red-400 m-5" @click="clickCancel">Cancel</button>
            <button class="px-5 py-2 bg-green-400 m-5" @click="removeAccount">Accept</button>
        </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware : ['auth']
})

useHead({
  title: "Profile"
})

const opassword = ref("")
const npassword = ref("")
const cpassword = ref("")

const changePassword = ref(false)
const changeImage = ref(false)
const showAcceptRemove = ref(false)

const runtime = useRuntimeConfig();

const cookie = useCookie("token")
const {data:user} = await useFetch(runtime.public.API_URL + "customer/profile",{
    query:{
      tokenId: cookie.value
    }
  })

const getUser = ref(toRaw(user.value))
console.log(getUser.value.username)

const {data} = await useFetch(`${runtime.public.STORAGE_URL}customer/image/profile/${getUser.value.username}`,{
  method:'get'
})

console.log(toRaw(data.value))

const pictureText = ref(toRaw(data.value))


const imageFile = ref<String>(runtime.public.STORAGE_URL + pictureText.value)

// https://content-shibaqueue.doksakura.com/customer/${userStore.user.username}/${data.value}
const popUpCP = () =>{
  if(changePassword.value == false){
    changePassword.value = true
  }else{
    changePassword.value = false
  }
}

// choose image file in Desktop
const file = ref<File | null>(null);
const onChangeFile = (event: Event) =>{
  const [_file] = (event.target as HTMLInputElement).files as FileList;

  file.value = _file

  changeImage.value = true;
};

// submit image file
const onSumbit = async () =>{
  try{
    if(!file.value) throw "Don't have image file";

    // await $fetch(`${runtime.public.STORAGE_URL}remove/customer/${userStore.user.username}`,{
    //   method: 'delete'
    // })

    const body = new FormData();
    body.append('file', file.value, file.value.name)

    // 10.147.17.253:5034/customer/image/profile/username
    await $fetch(`${runtime.public.STORAGE_URL}customer/image/profile/${getUser.value.username}`,{
      method: 'post',
      body
    })

    location.reload()
  }catch(error){
    console.log(error)
  }

  const {data} = await useFetch(`${runtime.public.STORAGE_URL}/customer/image/profile/${userStore.user.username}`,{
    method:'get'
  })

  imageFile.value = runtime.public.STORAGE_URL + toRaw(data.value)

  changeImage.value = false;
}

const changePasswordHandler = async () =>{
  if(npassword.value !== cpassword.value || npassword.value === ""){
    alert("New Password Incorrect");
    return
  }
  const {data, error} = await useFetch(`${runtime.public.API_URL}customer/profile/changePassword`,{
    query:{
      tokenId: cookie.value,
      oldPassword: opassword,
      newPassword: npassword
    },
    method: 'post'
  })

  if(error.value == null){
    alert("successful")
    location.reload()
  }
}

const clickAcceptRemove = () =>{
  showAcceptRemove.value = true
}

const clickCancel = () =>{
  showAcceptRemove.value = false
}

const removeAccount = async () =>{
  const {data:user} = await useFetch(runtime.public.API_URL + "auth/deleteUser",{
    query: {
      tokenId: cookie.value
    },
    method: 'post'
  })
  console.log(toRaw(user.value))
  cookie.value = ""
  navigateTo("/login")
}
</script>



<style>

</style>
