<template>
  <div>
    <Topnav :booking-btn="true"/>
    <Homepage topic-page="My Profile"/>
    <div class="profile">
      <br>
      <img :src="imageFile" alt="profile" class="imageProfile">
      <div class="text-center my-5">
        <input type="file" class="text-lg font-normal w-[250px]" @change="onChangeFile"/>
        <button @click="onSumbit" class="border-black border-2 px-2 text-lg bg-[#94A684] hover:rounded-full" v-if="changeImage">Upload Image</button>
      </div>
      <div class="detailProfile">
        <label>Fullname :    {{  }}</label><br>
        <label>Username :    {{  }}</label><br>
        <label>Email :       {{  }}</label><br>
      </div>
      <div class="cp">
        <button type="button" class="activeBtn" @click="popUpCP">Change Password</button>
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
          <button type="submit" class="activeBtn">Accept</button>
        </div>
      </form>
      
    </div>

    <!-- <label>Upload File</label> -->
    <!-- <input type="file" @change="onChangeFile">
    <button @click="onSumbit" class="border-black border-2 px-5 py-2">Upload</button> -->
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
const changeImage = ref(false)

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
const onChangeFile = (event: Event) =>{
  const [_file] = (event.target as HTMLInputElement).files as FileList;

  file.value = _file

  changeImage.value = true;
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

  changeImage.value = false;
}
</script>



<style>

</style>
