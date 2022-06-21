<template>
 <div class="px-3 my-4 catalog text-center container">
    <div v-for="n in category" :key="n">
     <img
      :src="n.main_image"
      class=""
      blank="true"
      style="width: 60px; height: 50px"
     />
     <span class="d-flex justify-content-center">
      {{ n.name_ru }}
     </span>
    </div>
 </div>
</template>

<script>
export default {
 components: {

 },
 data() {
  return {
   category: [],
  };
 },
 beforeMount() {
  this.getCategory();
 },

 methods: {
  getCategory() {
   fetch("https://mobile.olcha.uz/api/v2/categories")
    .then((response) => response.json())
    .then((data) => {
     this.category = data.data.categories;
     console.log(data.data.categories);
    });
  },
 },
};
</script>