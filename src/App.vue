<template>
 <div id="app">
  <Header />
  <VueSlickCarousel v-bind="settings">
   <div v-for="i in 22" :key="i" class="text-center">
    <!-- placeholder img -->
    <img class="px-2 d-block mx-auto" src="https://picsum.photos/50/100?random" alt="" />
    <span class="text-danger fw-bold pb-3">Информация {{ i }}</span>
   </div>
  </VueSlickCarousel>
  <CarouselBanner />
  <router-view />
  <Footer />
 </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import VueSlickCarousel from "vue-slick-carousel";
import CarouselBanner from "./components/CarouselBanner.vue";
import Footer from "./components/Footer.vue";

export default {
 components: {
  Header,
  VueSlickCarousel,
  CarouselBanner,
  Footer,
 },
 data() {
  return {
   settings: {
    bullets: false,
    buttons: false,
    draggable: false,
    dots: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
     {
      breakpoint: 1024,
      settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
      },
     },
     {
      breakpoint: 600,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
       initialSlide: 2,
      },
     },
     {
      breakpoint: 480,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
      },
     },
    ],
   },
  };
 },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900");
@import url("./assets/css/main.css");
</style>
