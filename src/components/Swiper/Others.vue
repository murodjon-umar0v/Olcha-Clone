<template>
 <section class="container my-5 py-5 catalog">
  <div class="w-100 px-3 d-flex justify-content-between items-center">
   <span class="h2 fw-normal"> Новинки </span>
   <span class="d-flex items-center">
    <router-link to="/products" class="text-danger fw-bold pt-3">
     Смотреть все
     <svg
      xmlns="http://www.w3.org/2000/svg"
      height="12"
      fill="#DC3545"
      viewBox="0 0 320 512"
     >
      <path
       d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
      />
     </svg>
    </router-link>
   </span>
  </div>
 </section>
</template>

<script>


export default {
 components: {
 },
 data() {
  return {
   stateHeart: false,
  };
 },
 methods: {
  toggle() {
   this.stateHeart = !this.stateHeart;
  },
 },
};
</script>

<style scoped>
.img-fluid {
 max-width: 100%;
 height: auto;
}
.w-100 {
 width: 100%;
}
.ml-auto,
.mx-auto {
 margin-left: auto;
}
.mr-auto,
.mx-auto {
 margin-right: auto;
}
</style>
