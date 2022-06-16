<template>
  <div class="px-3 my-4 catalog text-center container">
    <swiper :options="swiperLotOptions2">
      <swiper-slide v-for="n in category" :key="n">
        <img
          :src="n.main_image"
          class=""
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
      swiperLotOptions2: {
        slidesPerView: 2,
        loop: false,
        pagination: true,
        navigation: true,
        autoplay: true,
        spaceBetween: 17,
        centeredSlides: true,
        breakpoints: {
          300: {
            slidesPerView: 8,
            spaceBetweenSlides: 30,
          },
          500: {
            slidesPerView: 5,
            spaceBetweenSlides: 30,
          },
          800: {
            slidesPerView: 5,
            spaceBetweenSlides: 30,
          },
          999: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
          },
          1100: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
          },
        },
      },
    };
  },
  created() {
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
