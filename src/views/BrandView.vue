<template>
 <div
  class="px-3 mb-5 brands d-flex justify-content-center items-center flex-wrap"
 >
  <div class="w-100 px-3 d-flex justify-content-between items-center">
   <span class="h1 fw-normal py-4"> Бренды </span>
  </div>
  <div
   class="cards d-flex align-items-stretch p-2"
   v-for="(i, idx) in brands"
   :key="idx"
  >
  <div v-if="idx < 20" class="card d-flex flex-column items-center justify-content-around py-3">
    <img class="w-50 mx-auto d-block" :src="i.main_image" />
    <span class="text-center pt-2">
     <a :href="i.link" target="_blank">
      {{ i.name_uz }}
     </a>
    </span>
   </div>
  </div>

  <div class="overflow-auto">
   <div class="mt-5">
    <b-pagination
     v-model="currentPage"
     hide-goto-end-buttons='false'
     pills
     size="lg"
     :total-rows="rows"
     @change="getBrands"
    ></b-pagination>
   </div>
  </div>
 </div>
</template>

<script>
import { BPagination } from "bootstrap-vue";

export default {
 name: "Brand",
 components: {
  BPagination,
 },

 data() {
  return {
   brands: [],
   currentPage: 1,
   rows: 100,
  };
 },

 mounted() {
  this.getBrands();
 },
 methods: {
  getBrands() {
   const request = new XMLHttpRequest();
   // get brand logos of electronics from free api
   request.open(
    "GET",
    "https://mobile.olcha.uz/api/v2/manufacturers?page=" + this.currentPage
   );
   request.send();
   request.onload = () => {
    if (request.status === 200) {
     const data = JSON.parse(request.response);
     this.brands = data.data.manufacturers;
    }
   };
  },
 },
};
</script>
