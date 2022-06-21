<template>
 <div class="px-3 carousel">
  <div class="my-3 mx-auto">
   <!-- <swiper
    class="w-100 mx-auto d-block"
    :slides-per-view="1"
    :space-between="30"
    :loop="true"
    :pagination="true"
    :navigation="true"
    :autoplay="true"
    :interval="1000"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
   >
    <swiper-slide v-for="n in src" :key="n">
     <img
      :src="n.link"
      class="img-fluid w-100 mx-auto rounded"
      blank="true"
      alt="error"
     />
    </swiper-slide>
   </swiper> -->
  </div>
 </div>
</template>

<script>
// import { Navigation, Pagination, Autoplay } from "swiper";

// import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
// import "swiper/swiper-bundle.css";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
 components: {
  // Swiper,
  // SwiperSlide,
 },
 data() {
  return {
   slide: 0,
   sliding: null,
   src: [
    {
     link:
      "https://olcha.uz/image/1400x360/sliders/ru/6m01A17hMTJJiVuUiAMEKJQmgX1WC1vxzPTDSOTiRItNJKyzo60GM3TtebIf.",
    },
    {
     link:
      "https://olcha.uz/image/1400x360/sliders/ru/55duvcdTLcZvkrf2LaHmWe3ZIGuVdOGeXb6ouW9mHLYwDwRvzcVHkaBYpuRe.jpeg",
    },
    {
     link:
      "https://olcha.uz/image/1400x360/sliders/ru/cz2OBtW4vpbKJqEjGIVuis3wBGltGdzzvIc50P5WrQ6iPlAkiEWK3x1lH4sp.",
    },
    {
     link:
      "https://olcha.uz/image/1400x360/sliders/ru/w4Pxrr5gDfshaIXtVxgLpdTDi8nxqeRO5cYQbZdxoYpLXTDtyKbCBebhuJH6.jpeg",
    },
    {
     link:
      "https://olcha.uz/image/1400x360/sliders/ru/fwuNMeIFt1g8hz0CKilAI42YNJF3VMzsbAOJ06lGzm5Q48HM0UA0QfWvgZqK.jpeg",
    },
    {
     link:
      "https://olcha.uz/image/1400x360/sliders/ru/MHg1LXLtzAYrrbmB1vp7FVzHTiIai74H4k00n03nKE402nzzAe251eyCsCmi.jpeg",
    },
   ],
  };
 },
 methods: {
  getImageUrl(imageId) {
   return `https://picsum.photos/600/400/?image=${imageId}`;
  },
  onSwiper(swiper) {
   this.sliding = swiper;
  },
  onSlideChange() {
   this.slide = this.sliding.activeIndex;
  },
 },
};
</script>
