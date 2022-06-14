<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900");
@import url("../assets/css/main.css");
</style>
