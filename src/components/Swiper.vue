<template>
 <div class="px-3 my-3 catalog">
  <swiper
   :slides-per-view="9"
   :space-between="30"
   :loop="false"
   :pagination="true"
   :navigation="true"
   @swiper="onSwiper"
   @slideChange="onSlideChange"
  >
   <swiper-slide
    v-for="n in 25"
    :key="n"
    :class="{ test_2: true }"
    style="width: 80px; height: 80px"
   >
    <img
     :src="getImageUrl(34 + n)"
     class="img-fluid w-100 mx-auto"
     blank="true"
    />
   </swiper-slide>
  </swiper>
 </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default {
 components: {
  Swiper,
  SwiperSlide,
 },
 methods: {
  getImageUrl(imageId) {
   return `https://picsum.photos/600/400/?image=${imageId}`;
  },
  onSwiper(swiper) {
   console.log(swiper);
  },
  onSlideChange() {
   console.log("slide change");
  },
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
