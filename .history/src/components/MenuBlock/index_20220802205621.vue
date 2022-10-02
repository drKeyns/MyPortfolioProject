<template>
  <nav>
    <transition>
      <div
        class="material-icon menu"
        v-if="!show"
        @click="show = !show"
        key="menu"
      >
        Меню товарів
      </div>
      <div class="material-icon clear" v-else @click="show = !show" key="clear">
        Меню товарів
      </div>
    </transition>
    <transition>
      <div class="first-menu-container">
        <div
          class="first-menu-item"
          v-for="menuItem in MenuSettings"
          :key="menuItem.id"
          @mouseover="getSecondMenu(menuItem.id)"
          @click="getFilteredCategory(menuItem.category)"
        >
          <img :src="menuItem.img" alt="" />
          {{ menuItem.title }}
        </div>
        <div v-if="secondMenuData !== null">
          <second-menu :data="secondMenuData"></second-menu>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { MenuSettings } from "./settings.js";
import SecondMenu from "./SecondMenu";
export default {
  name: "MenuBlock",
  components: {
    SecondMenu,
  },
  data() {
    return {
      MenuSettings,
      secondMenuData: null,
    };
  },
  methods: {
    getSecondMenu(secondMenuid) {
      let menuDataIndex = this.MenuSettings.findIndex(
        (Item) => Item.id === secondMenuid
      );
      this.secondMenuData = this.MenuSettings[menuDataIndex].secondMenuData;
      console.log(this.secondMenuData);
    },
    getFilteredCategory(value) {
      this.$router.push({
        name: "productsCatalogue",
        params: {
          category: value,
        },
      });
    },
  },
};
</script>

<style lang="css" scoped>
.first-menu-item {
  background-color: yellowgreen;
  width: 250px;
}
.first-menu-container {
  display: flex;
  flex-direction: column;
  position: absolute;
}
img {
  height: 20px;
  width: 20px;
}
</style>
