<template>
 <div class="p-3 carousel">
  <b-carousel
   id="carousel-1"
   v-model="slide"
   :interval="4000"
   controls="true"
   background="#ababab"
   img-width="1024"
   img-height="280"
   style="text-shadow: 1px 1px 2px #333"
   @sliding-start="onSlideStart"
   @sliding-end="onSlideEnd"
  >
   <b-carousel-slide
    img-src="https://olcha.uz/image/1400x360/sliders/ru/w4Pxrr5gDfshaIXtVxgLpdTDi8nxqeRO5cYQbZdxoYpLXTDtyKbCBebhuJH6.jpeg"
   ></b-carousel-slide>

   <b-carousel-slide
    img-src="https://olcha.uz/image/1400x360/sliders/ru/fwuNMeIFt1g8hz0CKilAI42YNJF3VMzsbAOJ06lGzm5Q48HM0UA0QfWvgZqK.jpeg"
   >
   </b-carousel-slide>

   <b-carousel-slide
    img-src="https://olcha.uz/image/1400x360/sliders/ru/MHg1LXLtzAYrrbmB1vp7FVzHTiIai74H4k00n03nKE402nzzAe251eyCsCmi.jpeg"
   ></b-carousel-slide>

   <b-carousel-slide
    img-src="https://olcha.uz/image/1400x360/sliders/ru/6m01A17hMTJJiVuUiAMEKJQmgX1WC1vxzPTDSOTiRItNJKyzo60GM3TtebIf."
   ></b-carousel-slide>

   <b-carousel-slide
    img-src="https://olcha.uz/image/1400x360/sliders/ru/55duvcdTLcZvkrf2LaHmWe3ZIGuVdOGeXb6ouW9mHLYwDwRvzcVHkaBYpuRe.jpeg"
   ></b-carousel-slide>
  </b-carousel>
 </div>
</template>

<script>
export default {
 data() {
  return {
   slide: 0,
   sliding: null,
  };
 },
 methods: {
  onSlideStart() {
   this.sliding = true;
  },
  onSlideEnd() {
   this.sliding = false;
  },
 },
};
</script>
