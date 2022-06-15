<template>
  <div class="home">
    <SwiperBanner />
    <ReklamaCard />
    <b-container>
      <Card />
    </b-container>
    <Brands />
  </div>
</template>

<script>
import SwiperBanner from "@/components/SwiperBanner.vue";
import ReklamaCard from "@/components/ReklamaCard.vue";
import Brands from "@/components/Brands.vue";
import Card from "@/components/Card.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    SwiperBanner,
    ReklamaCard,
    Brands,
    Card,
  },
};
</script>
