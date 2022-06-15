<template>
 <div id="app">
  <Header />
  <Swiper />
  <CarouselBanner />
  <ReklamaCard />
  <router-view />
  <Footer />
 </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Swiper from "./components/Swiper.vue";
import CarouselBanner from "./components/SwiperBanner.vue";
import ReklamaCard from "./components/ReklamaCard.vue";
import Footer from "./components/Footer.vue";

export default {
 components: {
  Header,
  Swiper,
  CarouselBanner,
  ReklamaCard,
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
