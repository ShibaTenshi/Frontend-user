<template>
  <div>
    <Topnav :booking-btn="true"/>
    <Homepage topic-page="My Profile"/>
    <div class="profile">
      <img :src="imageFile" alt="profile" class="imageProfile">
      <div class="detailProfile">
        <label>Fullname :    {{  }}</label><br>
        <label>Username :    {{  }}</label><br>
        <label>Email :       {{  }}</label><br>
        <label>Upload Your Image File : </label>
        <button type="button" class="activeBtn">choose file</button>
      </div>
      <button type="button" class="activeBtn cp" @click="popUpCP">Change Password</button>
    </div>

    <div class="profile" v-if="changePassword">
      <h1 class="text-center py-5">Change Password</h1>
      <br>
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

        <button type="submit" class="activeBtn cp">Accept</button>
      </form>
      
    </div>

    <label>Upload File</label>
    <input type="file" @change="onChanageFile">
    <button @click="onSumbit" class="border-black border-2 px-5 py-2">Upload</button>
  </div>
</template>

<script lang="ts" setup>
// definePageMeta({
//   middleware : ['auth']
// })

const opassword = ref("")
const npassword = ref("")
const cpassword = ref("")

const changePassword = ref(false)

const {data} = await useFetch("http://10.147.17.253:5034/customer/image/profile/siwakorn",{
  method:'get'
})

console.log(toRaw(data.value))

const imageFile = ref<String>("")

if(data.value === "/default.png"){
  // imageFile.value = `https://content-shibaqueue.doksakura.com/${data.value}`
  imageFile.value = "logoUser.png"
}else{
  imageFile.value = `https://content-shibaqueue.doksakura.com/customer/siwakorn/${data.value}`
}

// https://content-shibaqueue.doksakura.com/customer/siwakorn/${data.value}
const popUpCP = () =>{
  if(changePassword.value == false){
    changePassword.value = true
  }else{
    changePassword.value = false
  }
}

// choose image file in Desktop
const file = ref<File | null>(null);
const onChanageFile = (event: Event) =>{
  const [_file] = (event.target as HTMLInputElement).files as FileList;

  file.value = _file
};

// submit image file
const onSumbit = async () =>{
  try{
    if(!file.value) throw "Don't have image file";

    await $fetch('http://10.147.17.253:5034/remove/customer/siwakorn',{
      method: 'delete'
    })

    const body = new FormData();
    body.append('file', file.value, file.value.name)

    // 10.147.17.253:5034/customer/image/profile/username
    await $fetch('http://10.147.17.253:5034/customer/image/profile/siwakorn',{
      method: 'post',
      body
    })

    alert('Uploaded')
  }catch(error){
    console.log(error)
  }
}
</script>



<style>

</style>
