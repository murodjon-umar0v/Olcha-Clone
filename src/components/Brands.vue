<template>
 <div class="px-3 mb-5 brands border d-flex justify-between items-center flex-wrap">
  <div class="w-100 border d-flex justify-between items-center">
   <span class="h1 fw-normal"> Бренды </span>
   <router-link to="/brands" class="text-danger border">
    Смотреть все
    <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 320 512">
     <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
     <path
      d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
     />
    </svg>
   </router-link>
  </div>
  <div class="cards p-2" v-for="(i, idx) in brands" :key="idx">
   <div v-if="idx < 20" class="card px-5 py-3">
    <img class="w-50 mx-auto d-block" :src="i.main_image" />
    <span class="text-center pt-2">
     <a :href="i.link" target="_blank">
      {{ i.name_uz }}
     </a>
    </span>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
   brands: [],
  };
 },

 mounted() {
  this.getBrands();
 },
 methods: {
  getBrands() {
   const request = new XMLHttpRequest();
   // get brand logos of electronics from free api
   request.open("GET", "https://mobile.olcha.uz/api/v2/manufacturers");
   request.send();
   request.onload = () => {
    if (request.status === 200) {
     const data = JSON.parse(request.response);
     this.brands = data.data.manufacturers;
     console.log(this.brands);
    }
   };
  },
 },
};
</script>
