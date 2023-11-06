<template>
  <div>
    <Topnav :login-btn="true"/>
    <Homepage topicPage="Super app for queue">
          <label for="search">Search</label>
          <input type="text" v-model="searchItem" placeholder="Restaurant's Name"><br>
          <button class="activeBtn" @click="searchRestaturant">Search</button>
    </Homepage>
  </div>

  <div class="snap-x m-10 h-20">
    <button v-for="item in getCategory" @click="filterCategory(item)" class="snap-center px-6 py-2 mx-5 bg-blue-300 border-[2px] border-black hover:bg-white shadow-md hover:shadow-green-500">{{ item }}</button>
  </div>

  <div class="grid grid-cols-1 gap-5 m-auto w-[400px] md:grid-cols-3 md:w-[900px]">
    <RestaurantItem :restaurant-title="item.restaurantName" :restaurant-image="item.image" :restaurant-detail="item.category" v-for="item in getRestaurant"/>
  </div>

  <Loading v-if="showLoading"/>

  <div class="text-center my-5">
    <button class="py-2 px-5 border-black border-2 m-3 bg-red-400 shadow-lg shadow-red-500/40 hover:rounded-full" @click="prevPage">Prev</button>
    <span class="font-bold text-2xl">{{ pageNum }}</span>
    <button class="py-2 px-5 border-black border-2 m-3 bg-green-400 shadow-lg shadow-green-500/40 hover:rounded-full" @click="nextPage">Next</button>
  </div>
</template>

<script lang="ts" setup>

const runtime = useRuntimeConfig()
const pageNum = ref(1);

useHead({
  title: "Homepage"
})
  const searchItem = ref("");
  const showLoading = ref(false)

  const {data:restaurants} = await useFetch(runtime.public.API_URL + "content/restaurantPage",{
    query:{
      query: "",
      page: pageNum.value
    },
    method: 'get'
  })

  const getRestaurant = ref(toRaw(restaurants.value));

const {data:categories} = await useFetch(runtime.public.API_URL + "content/category")
const getCategory = ref(toRaw(categories.value))

const filterCategory = async (category: String) =>{
  const{data:restaurants} = await useFetch(runtime.public.API_URL + "content/restaurantPage/category",{
    query:{
      category: category,
      page: pageNum.value
    },
    method: 'get'
  })

  getRestaurant.value = toRaw(restaurants.value)
}

const nextPage = async () =>{
  pageNum.value++
  const {data:restaurants} = await useFetch(runtime.public.API_URL + "content/restaurantPage",{
    query:{
      query: "",
      page: pageNum.value
    },
    method: 'get'
  })

  getRestaurant.value = toRaw(restaurants.value);
}

const prevPage = async () =>{
  if(pageNum.value == 1){
    return
  }
  pageNum.value--
  const {data:restaurants} = await useFetch(runtime.public.API_URL + "content/restaurantPage",{
    query:{
      query: "",
      page: pageNum.value
    },
    method: 'get'
  })

  getRestaurant.value = toRaw(restaurants.value);
  console.log(getRestaurant)
}

const searchRestaturant = async () =>{
  const {data:restaurants} = await useFetch(runtime.public.API_URL + "content/restaurantPage",{
    query:{
      query: searchItem.value,
      page: pageNum.value
    },
    method: 'get'
  })

  getRestaurant.value = toRaw(restaurants.value);
}
</script>



<style>

</style>
