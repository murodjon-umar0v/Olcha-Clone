<template>
 <div class="container my-3 mb-5 catalog">
  <span class="h1 fw-normal pb-0 pt-5 px-0"> Популярные товары </span>
  <swiper
   :slides-per-view="5"
   :space-between="0"
   :loop="false"
   :pagination="true"
   :navigation="true"
  >
   <swiper-slide v-for="n in 25" :key="n">
    <Card />
   </swiper-slide>
  </swiper>
 </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import Card from "@/components/Card.vue";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";
// import "../../assets/css/card.css";

SwiperCore.use([Navigation, Pagination]);

export default {
 components: {
  Swiper,
  SwiperSlide,
  Card,
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
