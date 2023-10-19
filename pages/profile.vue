<template>
  <div>
    <Topnav :booking-btn="true"/>
    <Homepage topic-page="My Profile"/>
    <div class="profile">
      <img :src="null || 'logoUser.png'" alt="profile" class="imageProfile">
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
    <p>{{ file?.name }}</p>

    <button @click="onSumbit"></button>
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

const popUpCP = () =>{
  if(changePassword.value == false){
    changePassword.value = true
  }else{
    changePassword.value = false
  }
}

const file = ref<File | null>(null);
const onChanageFile = (event: Event) =>{
  const [_file] = (event.target as HTMLInputElement).files as FileList;

  file.value = _file
};

const onSumbit = async () =>{
  const {data} = await useFetch("",{
    method: 'post',
    body:{

    }
  });
}
</script>



<style>

</style>
