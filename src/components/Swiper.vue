<template>
 <div class="px-3 my-4 catalog text-center container">
  <swiper
   :loop="false"
   :pagination="true"
   :navigation="true"
  >
   <swiper-slide v-for="n in category" :key="n">
    <img
     :src="n.main_image"
     class="img-fluid d-block mx-auto"
     blank="true"
     style="width: 60px; height: 50px"
    />
    <span class="d-flex justify-content-center">
     {{ n.name_ru }}
    </span>
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
 data() {
  return {
   category: [],
   breakpoints: {
    300: {
     slidesPerView: 3,
     spaceBetweenSlides: 30,
    },
    500: {
     slidesPerView: 4,
     spaceBetweenSlides: 30,
    },
    800: {
     slidesPerView: 6,
     spaceBetweenSlides: 30,
    },
    999: {
     slidesPerView: 7,
     spaceBetweenSlides: 30,
    },
    1100: {
     slidesPerView: 9,
     spaceBetweenSlides: 30,
    },
   },
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
