<template>
 <div class="px-3 products">
  <h2 class="title">Популярные товары - Страница - {{ page }}</h2>
  <div class="row py-5">
   <div class="col-2">
    <div class="accordion bg-white" role="tablist">
     <b-card no-body class="mb-1 bg-white border-0">
      <b-card-header
       header-tag="header"
       class="p-1 bg-white border-0 d-flex justify-content-between align-items-center"
       role="tab"
      >
       <button
        block
        v-b-toggle.accordion-1
        toggled="true"
        variant="info"
        class="text-start m-0 p-0 w-100 h-100 bg-white border-0 outline-0 fw-bolder fs-5 fw-semibold"
       >
        <div class="row d-flex justify-content-center align-items-center">
         <div class="col-10">Смартфоны, телефоны, гаджеты, аксессуары</div>
         <div class="col-2">
          <svg
           class="bi bi-chevron-down align-middle h-100"
           width="1em"
           height="1em"
           viewBox="0 0 16 16"
           fill="currentColor"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
           />
          </svg>
         </div>
        </div>
       </button>
      </b-card-header>
      <b-collapse
       id="accordion-1"
       visible
       accordion="my-accordion"
       role="tabpanel"
      >
       <h3 class="fs-4 p-0 m-0 pt-3">Смартфоны</h3>
       <b-card-body>
        <b-card-text v-for="i in category" :key="i" class="mb-3">
         <router-link to="/product/1" class="text-secondary">
          {{ i.name }}
         </router-link>
        </b-card-text>
       </b-card-body>
      </b-collapse>
     </b-card>

     <b-card no-body class="mb-1 bg-white border-0">
      <b-card-header
       header-tag="header"
       class="p-1 bg-white border-0 d-flex justify-content-between align-items-center"
       role="tab"
      >
       <button
        block
        v-b-toggle.accordion-2
        toggled="true"
        variant="info"
        class="text-start m-0 p-0 w-100 h-100 bg-white border-0 outline-0 fw-bolder fs-5 fw-semibold"
       >
        <div class="row d-flex justify-content-center align-items-center">
         <div class="col-10">Ноутбуки, принтеры, компьютеры</div>
         <div class="col-2">
          <svg
           class="bi bi-chevron-down align-middle h-100"
           width="1em"
           height="1em"
           viewBox="0 0 16 16"
           fill="currentColor"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
           />
          </svg>
         </div>
        </div>
       </button>
      </b-card-header>
      <b-collapse
       id="accordion-2"
       visible
       accordion="my-accordion"
       role="tabpanel"
      >
       <b-card-body>
        <b-card-text v-for="i in category" :key="i">
         <router-link to="/product/1" class="text-secondary">
          {{ i.name }}
         </router-link>
        </b-card-text>
       </b-card-body>
      </b-collapse>
     </b-card>

     <b-card no-body class="mb-1 bg-white border-0">
      <b-card-header
       header-tag="header"
       class="p-1 bg-white border-0 d-flex justify-content-between align-items-center"
       role="tab"
      >
       <button
        block
        v-b-toggle.accordion-3
        toggled="true"
        variant="info"
        class="text-start m-0 p-0 w-100 h-100 bg-white border-0 outline-0 fw-bolder fs-5 fw-semibold"
       >
        <div class="row d-flex justify-content-center align-items-center">
         <div class="col-10">Телевизоры, фото-видео и аудио</div>
         <div class="col-2">
          <svg
           class="bi bi-chevron-down align-middle h-100"
           width="1em"
           height="1em"
           viewBox="0 0 16 16"
           fill="currentColor"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
           />
          </svg>
         </div>
        </div>
       </button>
      </b-card-header>
      <b-collapse
       id="accordion-3"
       visible
       accordion="my-accordion"
       role="tabpanel"
      >
       <b-card-body>
        <b-card-text v-for="i in category" :key="i">
         <router-link to="/product/1" class="text-secondary">
          {{ i.name }}
         </router-link>
        </b-card-text>
       </b-card-body>
      </b-collapse>
     </b-card>
    </div>
   </div>

   <div class="col-10">
    <div
     class="d-flex flex-wrap justify-content-between align-items-center"
     id="product-view"
    >
     <Card v-for="i in showCount" :key="i" />
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import { BCard, BCardHeader, BCardBody } from "bootstrap-vue";
import Card from "../components/Card.vue";

export default {
 components: {
  BCard,
  BCardHeader,
  BCardBody,
  Card,
 },
 data() {
  return {
   page: 1,
   showCount: 12,
   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   category: [
    {
     id: 1,
     name: "Смартфоны",
    },
    {
     id: 2,
     name: "Планшеты",
    },
    {
     id: 3,
     name: "Ноутбуки",
    },
    {
     id: 4,
     name: "Телевизоры",
    },
    {
     id: 5,
     name: "Компьютеры",
    },
    {
     id: 6,
     name: "Камеры",
    },
    {
     id: 7,
     name: "Фотоаппараты",
    },
    {
     id: 8,
     name: "Аудио",
    },
    {
     id: 9,
     name: "Видео",
    },
    {
     id: 10,
     name: "Наушники",
    },
    {
     id: 11,
     name: "Прочее",
    },
   ],
  };
 },
};
</script>
