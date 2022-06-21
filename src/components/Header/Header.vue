<template>
  <div class="header py-3">
    <b-container>

      <b-row>
        <b-col class="d-flex">
          <button class="button-lang">
            <img
              src="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4bWw6c3BhY2U9InByZXNlcnZlIgogIHdpZHRoPSI0Mi4zMzM0bW0iCiAgaGVpZ2h0PSIyOS42MzRtbSIKICB2ZXJzaW9uPSIxLjAiCiAgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIgogIHZpZXdCb3g9IjAgMCA0MjE5LjEzIDI5NTMuNDUiPgogPGRlZnM+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgPCFbQ0RBVEFbCiAgICAuZmlsMiB7ZmlsbDojMDAzOUE2O2ZpbGwtcnVsZTpub256ZXJvfQogICAgLmZpbDEge2ZpbGw6I0Q1MkIxRTtmaWxsLXJ1bGU6bm9uemVyb30KICAgIC5maWwwIHtmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvfQogICBdXT4KICA8L3N0eWxlPgogPC9kZWZzPgogIDxnIGlkPSLQodC70L7QuV94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogICAgPGcgaWQ9InJ1LnN2ZyI+CiAgIDxyZWN0IGNsYXNzPSJmaWwwIiB4PSItMCIgeT0iMCIgd2lkdGg9IjQyMTkuMTMiIGhlaWdodD0iMTY4Ny42OCIvPgogICAgICA8cmVjdCBjbGFzcz0iZmlsMSIgeD0iLTAiIHk9IjEyNjUuNzciIHdpZHRoPSI0MjE5LjEzIiBoZWlnaHQ9IjE2ODcuNjgiLz4KICAgICAgPHJlY3QgY2xhc3M9ImZpbDIiIHg9Ii0wIiB5PSI4NDMuODYiIHdpZHRoPSI0MjE5LjEzIiBoZWlnaHQ9IjEwNTQuNzkiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo="
              alt="fly"
              width="32"
              height="24"
            />
            Рус

          </button>
          <b-button variant="danger" class="rounded-pill p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="24"
              height="24"
              viewBox="0 0 384 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M374.6 73.39c-12.5-12.5-32.75-12.5-45.25 0l-320 320c-12.5 12.5-12.5 32.75 0 45.25C15.63 444.9 23.81 448 32 448s16.38-3.125 22.62-9.375l320-320C387.1 106.1 387.1 85.89 374.6 73.39zM64 192c35.3 0 64-28.72 64-64S99.3 64.01 64 64.01S0 92.73 0 128S28.7 192 64 192zM320 320c-35.3 0-64 28.72-64 64s28.7 64 64 64s64-28.72 64-64S355.3 320 320 320z"
              />
            </svg>
            Скидки</b-button
          >
          <button class="rounded-pill p-2 button-tog">Рассрочка</button>
        </b-col>
        <b-col cols="8" class="text-end">
          <router-link class="text-light link-top" to="#">
            Присоединяйтесь к нам
          </router-link>
          <router-link class="text-light link-top" to="#"> Помощь </router-link>
          <router-link class="text-light link-top" to="#"> Карта сайта </router-link>
          <a class="text-white text-bold" href="tel+998712022021"
            >+998 (71) 202 202 1</a
          >
          <button class="button-call">Запросить звонок</button>
        </b-col>
      </b-row>
    </b-container>

    <hr />

    <b-container>
      <div ref="nav" :class="[scrol ? 'sitenav--fixed' : 'nav']">
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">
      <img
              src="../../assets/logo.png"
              alt="olcha"
              width="132"
              height="28"
              class="me-2 logo-img-white"
            />
             <img
              src="../../assets/index.png"
              alt="olcha"
              width="132"
              height="28"
              class="me-4 d-none logo-img-red"
            />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

<button
            @click="openCatalog"
            class="rounded-pill py-2 px-4 text-white bg-transparent border me-2"
          >
            Каталог
            <svg
              fill="#fff"
              width="18"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
              />
            </svg>
          </button>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       <div class="d-flex align-items-center">
            <input
              class="input-search"
              type="search"
              placeholder="Поиск товаров..."
            />
            <button class="search-button">
              <img src="../../assets/search.svg" alt="" />
            </button>
          </div>

<ul class="d-flex align-items-center list">
            <li class="me-4">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <svg
                  class="mb-2"
                  fill="#fff"
                  aria-hidden="true"
                  width="32"
                  height="24"
                  viewBox="0 0 18 22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5 5C11.5 3.62125 10.3787 2.5 9 2.5C7.62125 2.5 6.5 3.62125 6.5 5C6.5 6.37875 7.62125 7.5 9 7.5C10.3787 7.5 11.5 6.37875 11.5 5ZM14 5C14 7.7575 11.7575 10 9 10C6.2425 10 4 7.7575 4 5C4 2.2425 6.2425 0 9 0C11.7575 0 14 2.2425 14 5ZM0.25 20C0.25 15.175 4.17625 11.25 9 11.25C13.8237 11.25 17.75 15.175 17.75 20C17.75 20.69 17.1912 21.25 16.5 21.25C15.8088 21.25 15.25 20.69 15.25 20C15.25 16.5537 12.4462 13.75 9 13.75C5.55375 13.75 2.75 16.5537 2.75 20C2.75 20.69 2.19125 21.25 1.5 21.25C0.80875 21.25 0.25 20.69 0.25 20Z"
                  ></path>
                </svg>
                <p class="m-0 text-white text-bold">Войти</p>
              </div>
            </li>
            <li class="me-4">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <svg
                  class="mb-2"
                  fill="#fff"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3.25" y="15" width="2.5" height="7" rx="1.25"></rect>
                  <rect x="8.25" y="3" width="2.5" height="19" rx="1.25"></rect>
                  <rect
                    x="13.25"
                    y="11"
                    width="2.5"
                    height="11"
                    rx="1.25"
                  ></rect>
                  <rect
                    x="18.25"
                    y="7"
                    width="2.5"
                    height="15"
                    rx="1.25"
                  ></rect>
                </svg>
                <p class="m-0 text-white text-bold">Сравнение</p>
              </div>
            </li>
            <li class="me-4">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <svg
                  class="mb-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2913 4.61183C20.7805 4.10083 20.1741 3.69547 19.5066 3.41891C18.8392 3.14235 18.1238 3 17.4013 3C16.6788 3 15.9634 3.14235 15.2959 3.41891C14.6285 3.69547 14.022 4.10083 13.5113 4.61183L12.4513 5.67183L11.3913 4.61183C10.3596 3.58013 8.96032 3.00053 7.50129 3.00053C6.04226 3.00053 4.64298 3.58013 3.61129 4.61183C2.5796 5.64352 2 7.04279 2 8.50183C2 9.96086 2.5796 11.3601 3.61129 12.3918L4.67129 13.4518L12.4513 21.2318L20.2313 13.4518L21.2913 12.3918C21.8023 11.8811 22.2076 11.2746 22.4842 10.6072C22.7608 9.93972 22.9031 9.22431 22.9031 8.50183C22.9031 7.77934 22.7608 7.06393 22.4842 6.39647C22.2076 5.72901 21.8023 5.12258 21.2913 4.61183V4.61183Z"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="m-0 text-white text-bold">Избранное</p>
              </div>
            </li>
            <li>
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <svg
                  class="mb-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.09265 6.41183L6.09265 2.41183H18.0927L21.0927 6.41183M3.09265 6.41183V20.4118C3.09265 20.9423 3.30336 21.451 3.67844 21.826C4.05351 22.2011 4.56222 22.4118 5.09265 22.4118H19.0927C19.6231 22.4118 20.1318 22.2011 20.5069 21.826C20.8819 21.451 21.0927 20.9423 21.0927 20.4118V6.41183M3.09265 6.41183H21.0927M16.0927 10.4118C16.0927 11.4727 15.6712 12.4901 14.9211 13.2403C14.1709 13.9904 13.1535 14.4118 12.0927 14.4118C11.0318 14.4118 10.0144 13.9904 9.26422 13.2403C8.51408 12.4901 8.09265 11.4727 8.09265 10.4118"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="m-0 text-white text-bold">Корзина</p>
              </div>
            </li>
          </ul>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    </b-container>
    <Modal :category="category" @openCatalog="openCatalog" />
  </div>
</template>

<script>
import Modal from "../Modal.vue";
import "../../assets/css/header.css";
export default {
  data() {
    return {
      category: false,
      scrol: false,
    };
  },
  components: {
    Modal,
  },
  mounted() {
    this.offsetHeight = this.$refs.nav.offsetHeight;
  },
  created() {
    document.addEventListener("scroll", this.scroll);
  },
  methods: {
    openCatalog() {
      this.category = !this.category;
    },
    scroll() {
      if (window.scrollY >= 100) {
        document.body.style.paddingTop = this.offsetHeight + "px";
        this.scrol = true;
        // setTimeout(()=>{
        //   this.$refs.nav.classList.add('anime')
        // },0)
      } else {
        document.body.style.paddingTop = 0;
        this.scrol = false;
        // this.$refs.nav.classList.remove('anime')
      }
    },
  },
};
</script>
