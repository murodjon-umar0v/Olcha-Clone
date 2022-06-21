<template>
 <div class="home">
  <SwiperBanner />
  <ReklamaCard />
  <PhoneSwiper />
  <OthersSwiper />
  <Credits />
  <Brands />
 </div>
</template>

<script>
import SwiperBanner from "@/components/SwiperBanner.vue";
import ReklamaCard from "@/components/ReklamaCard.vue";
import Brands from "@/components/Brands.vue";
import PhoneSwiper from "@/components/Swiper/Phone.vue";
import OthersSwiper from "@/components/Swiper/Others.vue";
import Credits from "@/components/Swiper/Credits.vue";
// @ is an alias to /src
export default {
 name: "Home",
 components: {
  SwiperBanner,
  ReklamaCard,
  Brands,
  PhoneSwiper,
  OthersSwiper,
  Credits,
 },
};
</script>
