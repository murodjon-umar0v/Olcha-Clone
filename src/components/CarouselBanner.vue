<template>
 <div class="p-3 carousel">
  <div>
   <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    loop
    img-width="1024"
    img-height="480"
   >
    <b-carousel-slide
     img-src="https://olcha.uz/image/1400x360/sliders/ru/w4Pxrr5gDfshaIXtVxgLpdTDi8nxqeRO5cYQbZdxoYpLXTDtyKbCBebhuJH6.jpeg"
    >
    </b-carousel-slide>

    <b-carousel-slide
     img-src="https://olcha.uz/image/1400x360/sliders/ru/fwuNMeIFt1g8hz0CKilAI42YNJF3VMzsbAOJ06lGzm5Q48HM0UA0QfWvgZqK.jpeg"
    >
    </b-carousel-slide>

    <b-carousel-slide
     img-src="https://olcha.uz/image/1400x360/sliders/ru/MHg1LXLtzAYrrbmB1vp7FVzHTiIai74H4k00n03nKE402nzzAe251eyCsCmi.jpeg"
    >
    </b-carousel-slide>

    <b-carousel-slide
     img-src="https://olcha.uz/image/1400x360/sliders/ru/6m01A17hMTJJiVuUiAMEKJQmgX1WC1vxzPTDSOTiRItNJKyzo60GM3TtebIf."
    >
    </b-carousel-slide>

    <b-carousel-slide
     img-src="https://olcha.uz/image/1400x360/sliders/ru/55duvcdTLcZvkrf2LaHmWe3ZIGuVdOGeXb6ouW9mHLYwDwRvzcVHkaBYpuRe.jpeg"
    >
    </b-carousel-slide>
   </b-carousel>
  </div>
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
  onSlideStart(slide) {
   this.sliding = true;

   console.log("onSlideStart", slide);
  },
  onSlideEnd(slide) {
   this.sliding = false;

   console.log("onSlideEnd", slide);
  },
 },
};
</script>
