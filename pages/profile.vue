<template>
  <div>
    <Topnav :booking-btn="true"/>
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
