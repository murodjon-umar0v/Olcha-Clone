<template>
  <div class="header">
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
          <router-link class="text-light link-top">
            Присоединяйтесь к нам
          </router-link>
          <router-link class="text-light link-top"> Помощь </router-link>
          <router-link class="text-light link-top"> Карта сайта </router-link>
          <a class="text-white text-bold" href="tel+998712022021"
            >+998 (71) 202 202 1</a
          >
          <button class="button-call">Запросить звонок</button>
        </b-col>
      </b-row>
    </b-container>

    <hr />

    <b-container>
      <div class="d-flex align-items-center">
        <router-link>
          <img
            src="../../assets/logo.png"
            alt="olcha"
            width="132"
            height="28"
            class="me-5"
          />
        </router-link>
        <button class="rounded-pill py-3 px-4 text-white bg-transparent border me-3">
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
      <div class="d-flex">
        <input class="input-search"  type="search">
        <button>
          <img src="../../assets/search.svg" alt="">
        </button>
      </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
:root {
  --tw-gradient-from: #e96443;
  --tw-gradient-to: #904e95;

  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(233, 100, 67, 0));
}
.header {
  padding-top: 8px;
  background-image: linear-gradient(90deg, var(--tw-gradient-stops));
}

.button-lang {
  padding: 0;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 100%;
  display: flex;
  align-items: center;
  margin-right: 25px !important;
}

.button-lang img {
  margin-right: 5px;
}

.button-tog {
  margin-left: 15px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 2px solid white;
  background-color: #34d399;
  color: white;
}

.link-top {
  margin-right: 15px;
  font-size: 18px;
  font-weight: 500;
}

.button-call {
  margin-left: 10px;
  padding: 8px 5px;
  border: 2px solid white;
  background-color: transparent;
  border-radius: 5px;
  color: white;
  font-weight: 500;
}

.input-search{
width: 522px;
height: 50px;
padding: 14px 15px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
border: 2px solid white;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border: 6px solid transparent;
}
</style>
