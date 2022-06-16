<template>
 <section class="px-3 my-3 catalog text-center container">

  <swiper
   :slides-per-view="9"
   :space-between="50"
   :loop="false"
   :pagination="true"
   :navigation="true"
  >
   <swiper-slide
    v-for="n in category"
    :key="n"
   >
    <img :src="n.main_image" class="img-fluid d-block mx-auto" blank="true" style="width: 60px; height: 50px" />
    <span>
     {{ n.name_ru }}
    </span>
   </swiper-slide>
  </swiper>
 </section>
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
 data() {
  return {
   category: [],
  };
 },
 mounted() {
  this.getCategory();
 },
 methods: {
  getCategory() {
   fetch("https://mobile.olcha.uz/api/v2/categories")
    .then((response) => response.json())
    .then((data) => {
     this.category = data.data.categories;
     console.log(data.data.categories);
    });
  },
  getImageUrl(imageId) {
   return `https://picsum.photos/600/400/?image=${imageId}`;
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
