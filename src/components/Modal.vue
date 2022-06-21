<template>
  <div>
    <div :class="category ? 'openCatalog menu' : 'defaultCatalog menu'">
      <div class="body__menu">
        <b-container>
          <b-row>
            <b-card class="w-100 border-0" no-body>
              <b-tabs pills card vertical>
                <b-tab
                  v-for="item in menu"
                  :key="item.id"
                  :title="item.title"
                >
                  <div class="ml-3 animate">
                    <h5 v-if="item.title" class="menu__h5">
                      {{ item.title }}
                    </h5>

                    <div class="row overflow-auto">
                      <ul
                        v-for="(sub, indexSub) in item.children"
                        :key="indexSub"
                        class="ul__menu col-md-2"
                      >
                        <h6 v-if="sub.title" class="menu__ul__h6">
                          {{ sub.title }}
                        </h6>

                        <li
                          v-for="(br, indexBrands) in sub.brand_name"
                          :key="indexBrands"
                          class="mb-2"
                          @click="closeMenu"
                        >
                          {{ br.title }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-row>
        </b-container>
      </div>
    </div>

    <div
      :class="category ? 'black__shadow' : ''"
      @click="$emit('openCatalog')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          id: 0,
          title: "Смартфон, телефон, гаджет, аксессуарлар",
          children: [
            {
              title: "Смартфонлар",
              brand_name: [
                {
                  title: "Alcatel",
                },
              ],
            },
          ],
        },
         {
          id: 1,
          title: "Ноутбук, принтер, компьютерлар",
          children: [
            {
              title: "Ноутбуклар",
              brand_name: [
                {
                  title: "Lenova",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  props: {
    category: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeMenu() {
      this.$emit("openCatalog");
    },
  },
};
</script>

<style>
.openCatalog {
  top: 0;
  transform: translateX(0%);
}

.defaultCatalog {
  top: 0;
  transform: translateX(-100%);
}

.menu {
  position: fixed;
  background-color: #fff;
  height: 100%;
  width: auto;
  z-index: 991;
  transition: all 0.6s;
}

.black__shadow {
  visibility: visible;
  opacity: 1;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  right: 0;
  z-index: 99;
}

.menu__items {
  background-color: #f7f7f7;
  height: 100vh;
}

.body__menu .nav-pills {
  width: 300px !important;
  height: 100vh !important;
}

.body__menu .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background: #EB1537;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14),
    0 1px 10px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
}

.body__menu .nav-pills li a {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.46px;
  color: #000000;
}

.body__menu .nav-pills li {
  transition: all 0.4s;
}

.body__menu .nav-pills li:hover {
  margin-left: 10px;
}

.menu__h5 {
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.15px;
  color: #000000;
  margin-bottom: 35px;
}

.menu__ul__h6 {
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.15px;
  color: #000000;
  margin-bottom: 10px;
}

.ul__menu li a {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
}

.ul__menu li a:hover {
  color: var(--yellow-color);
}

.ul__menu {
  margin-bottom: 50px;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
  }
}

.animate {
  animation: fadeInRight 0.8s ease-in-out;
}
</style>
