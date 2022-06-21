<template>
 <div id="app">
  <Header />
  <Fixed />
  <Swiper />
  <SwiperTest />
  <router-view>
   <slot />
  </router-view>
  <Footer />
 </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Swiper from "./components/Swiper.vue";
import Footer from "./components/Footer.vue";
import Fixed from "./components/Fixed.vue";
import SwiperTest from "./components/Swiper/index.vue";

export default {
 components: {
  Header,
  Swiper,
  Footer,
  Fixed,
  SwiperTest
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
