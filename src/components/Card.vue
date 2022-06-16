<template>
 <div class="m-2">
  <router-link to="/product/view">
   <div class="card-box">
    <div class="d-flex flex-column">
     <img src="../assets/phone.jpeg" alt="phone" />
    </div>
    <p class="mb-1 text-dark fs-5 mt-3">Смартфон</p>
    <span class="text-dark fs-4 fw-bolder">3 102 000 сум</span>
    <span class="text-white d-block bg-danger rounded-pill ps-2 mb-3"
     >от 321 000 сум/месяц</span
    >
    <span class="d-block text-dark mb-3"
     >Смартфон Samsung Galaxy A32 6 GB 128GB Черный</span
    >
    <div class="d-flex align-items-center justify-content-between">
     <button class="border rounded-pill btn px-5 bg-body border-dark shadow">
      <span class="px-2">Купить</span>
     </button>
     <button class="border-0 bg-transparent">
      <svg
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="black"
       xmlns="http://www.w3.org/2000/svg"
      >
       <rect x="3.25" y="15" width="2.5" height="7" rx="1.25"></rect>
       <rect x="8.25" y="3" width="2.5" height="19" rx="1.25"></rect>
       <rect x="13.25" y="11" width="2.5" height="11" rx="1.25"></rect>
       <rect x="18.25" y="7" width="2.5" height="15" rx="1.25"></rect>
      </svg>
     </button>
    </div>
   </div>
  </router-link>
 </div>
</template>

<script>
import "../assets/css/card.css";
export default {
 data() {},
};
</script>
