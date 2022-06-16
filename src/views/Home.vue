<template>
 <div class="home">
  <SwiperBanner />
  <ReklamaCard />
  <PhoneSwiper />
  <Brands />
 </div>
</template>

<script>
import SwiperBanner from "@/components/SwiperBanner.vue";
import ReklamaCard from "@/components/ReklamaCard.vue";
import Brands from "@/components/Brands.vue";
import PhoneSwiper from "@/components/Swiper/Phone.vue";
// @ is an alias to /src
export default {
 name: "Home",
 components: {
  SwiperBanner,
  ReklamaCard,
  Brands,
  PhoneSwiper,
 },
};
</script>
