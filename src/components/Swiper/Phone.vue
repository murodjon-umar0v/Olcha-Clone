<template>
 <div class="container my-3 catalog">
  <swiper
   :slides-per-view="5"
   :space-between="30"
   :loop="false"
   :pagination="true"
   :navigation="true"
  >
   <swiper-slide
    v-for="n in 25"
    :key="n"
    :class="{ test_2: true }"
   >
    <router-link to="/product/view">
     <div class="card-box">
      <div class="d-flex flex-column">
       <img src="../../assets/phone.jpeg" alt="phone" />
      </div>
      <p class="mb-1 text-dark fs-5 mt-3">Смартфон</p>
      <span class="text-dark fs-4 fw-bolder">3 102 000 сум</span>
      <span class="text-white d-block bg-danger rounded-pill ps-2 mb-3"
       >от 321 000 сум/месяц</span
      >
      <span class="d-block text-dark mb-3"
       >Смартфон Samsung Galaxy A32 6 GB 128GB Черный</span
      >
      <div class="d-flex align-items-center justify-content-between">
       <button class="border rounded-pill btn px-5 bg-body border-dark shadow">
        <span class="px-2">Купить</span>
       </button>
       <button class="border-0 bg-transparent">
        <svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="black"
         xmlns="http://www.w3.org/2000/svg"
        >
         <rect x="3.25" y="15" width="2.5" height="7" rx="1.25"></rect>
         <rect x="8.25" y="3" width="2.5" height="19" rx="1.25"></rect>
         <rect x="13.25" y="11" width="2.5" height="11" rx="1.25"></rect>
         <rect x="18.25" y="7" width="2.5" height="15" rx="1.25"></rect>
        </svg>
       </button>
      </div>
     </div>
    </router-link>
   </swiper-slide>
  </swiper>
 </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import '../../assets/css/card.css'

SwiperCore.use([Navigation, Pagination]);

export default {
 components: {
  Swiper,
  SwiperSlide,
 },
};
</script>

<style scoped>
.img-fluid {
 max-width: 100%;
 height: auto;
}
.w-100 {
 width: 100%;
}
.ml-auto,
.mx-auto {
 margin-left: auto;
}
.mr-auto,
.mx-auto {
 margin-right: auto;
}
</style>
