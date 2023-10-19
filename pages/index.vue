<template>
  <div>
    <Topnav :booking-btn="true" :signup-btn="true"/>
    <Homepage topicPage="Super app for queue"><form>
          <label for="search">Search</label>
          <input type="text" v-model="searchItem" placeholder="Restaurant's Name"><br>
          <button type="submit" class="activeBtn">Search</button>
        </form>
    </Homepage>
  </div>

  <div class="overflow-y-auto m-10 h-20">
    <button v-for="item in restaurants" class="px-6 py-2 mx-5 bg-blue-500 border-[2px] border-black hover:bg-white">{{ item.category }}</button>
  </div>

  <div class="grid grid-cols-3 gap-5 w-[90%] m-auto">
    <RestaurantItem :restaurant-title="item.name" :restaurant-detail="item.detail" v-for="item in restaurants"/>
  </div>
</template>

<script lang="ts" setup>
  const searchItem = ref("");

  const restaurants = ref([{
    name: "TitleRestaurantThai",
    category: "Thai",
    detail: "Lorem ipsum dolor sit amet consectetur. Et blandit venenatis nisi iaculis sollicitudin faucibus ut."
  },
  {
    name: "TitleRestaurantJapanese",
    category: "Japanese",
    detail: "Lorem ipsum dolor sit amet consectetur. Et blandit venenatis nisi iaculis sollicitudin faucibus ut."
  },
  {
    name: "TitleRestaurantIndia",
    category: "India",
    detail: "Lorem ipsum dolor sit amet consectetur. Et blandit venenatis nisi iaculis sollicitudin faucibus ut."
  }])
</script>



<style>

</style>
