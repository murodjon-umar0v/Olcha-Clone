<template>
 <div class="card-box position-relative">
  <div class="d-flex flex-column position-relative">
   <img src="../assets/phone.jpeg" alt="phone" />
   <button
    @click="toggle"
    class="position-absolute border-0 bg-transparent top-0 end-0 bottom-box heart"
   >
    <svg
     width="22"
     height="22"
     viewBox="0 0 22 22"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      v-if="stateHeart"
      fill="#F91155"
      d="M18.0217 3.6575C15.6017 2.0075 12.6134 2.7775 11 4.66583C9.3867 2.7775 6.39837 1.99833 3.97837 3.6575C2.69503 4.5375 1.88837 6.0225 1.83337 7.59C1.70503 11.1467 4.85837 13.9975 9.67087 18.37L9.76253 18.4525C10.4592 19.085 11.5317 19.085 12.2284 18.4433L12.3292 18.3517C17.1417 13.9883 20.2859 11.1375 20.1667 7.58083C20.1117 6.0225 19.305 4.5375 18.0217 3.6575Z"
     ></path>

     <path
      v-else
      fill="#F91155"
      d="M18.0217 3.6575C15.6017 2.0075 12.6134 2.7775 11 4.66583C9.3867 2.7775 6.39837 1.99833 3.97837 3.6575C2.69503 4.5375 1.88837 6.0225 1.83337 7.59C1.70503 11.1467 4.85837 13.9975 9.67087 18.37L9.76253 18.4525C10.4592 19.085 11.5317 19.085 12.2284 18.4433L12.3292 18.3517C17.1417 13.9883 20.2859 11.1375 20.1667 7.58083C20.1117 6.0225 19.305 4.5375 18.0217 3.6575ZM11.0917 17.0042L11 17.0958L10.9084 17.0042C6.54503 13.0533 3.6667 10.4408 3.6667 7.79166C3.6667 5.95833 5.0417 4.58333 6.87503 4.58333C8.2867 4.58333 9.6617 5.49083 10.1475 6.74666H11.8617C12.3384 5.49083 13.7134 4.58333 15.125 4.58333C16.9584 4.58333 18.3334 5.95833 18.3334 7.79166C18.3334 10.4408 15.455 13.0533 11.0917 17.0042Z"
     ></path>
    </svg>
   </button>
   <button
    class="position-absolute border-0 bg-transparent end-0 mt-4 bottom-box"
   >
    <img
     class="mt-3"
     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGZpbGw9IiNGOTExNTUiCiAgICBkPSJNMTQuOCA2LjRsLTUtNS4xYy0uMi0uMi0uNC0uMy0uNy0uMy0uMiAwLS41LjEtLjcuM2wtLjEuMWMtLjMuNC0uMiAxIC4xIDEuM0wxMS42IDZIOS4xQzQuNiA2IDEgOS42IDEgMTQuMWMwIC41LjQuOS45LjlzLjktLjQuOS0uOXYtLjJjLjEtMy40IDIuOC02IDYuMi02aDIuNmwtMy4yIDMuM2MtLjQuNC0uNCAxIDAgMS40LjIuMi40LjMuNy4zLjMgMCAuNS0uMS43LS4zbDUtNS4xYy4zLS4zLjMtLjggMC0xLjF6IgogIC8+Cjwvc3ZnPgo="
     alt="target"
    />
   </button>
  </div>
  <a href="#" class="mb-1 text-dark fs-5 mt-3 d-block link-card">Смартфон</a>
  <span class="text-dark fs-4 fw-bolder">3 102 000 сум</span>
  <span class="text-white d-block bg-danger rounded-pill ps-2 mb-3"
   >от 321 000 сум/месяц</span
  >
  <span class="d-block text-dark mb-3"
   >Смартфон Samsung Galaxy A32 6 GB 128GB Черный</span
  >
  <div class="d-flex align-items-center justify-content-between bottom-box">
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
</template>

<script>
import "../assets/css/card.css";
export default {
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
