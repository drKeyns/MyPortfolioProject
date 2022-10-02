<template>
  <div class="first-menu-container">
    <div
      class="first-menu-item"
      v-for="menuItem in MenuSettings"
      :key="menuItem.id"
      @click="getSecondMenu(menuItem.id)"
    >
      <img :src="menuItem.img" alt="" />
      {{ menuItem.title }}
    </div>
    <div v-if="secondMenuData !== null">
      <second-menu :data="secondsMenuData" />
    </div>
  </div>
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
      secondsMenuData: null,
    };
  },
  methods: {
    getSecondMenu(secondMenuid) {
      let menuDataIndex = this.MenuSettings.findIndex(
        (Item) => Item.id === secondMenuid
      );
      this.secondsMenuData = this.MenuSettings[menuDataIndex].secondMenuData;
      console.log(this.secondsMenuData);
    },
  },
};
</script>

<style lang="css" scoped>
.first-menu-item {
  background-color: yellowgreen;
  width: 300px;
}
.first-menu-container {
  display: flex;
  flex-direction: column;
}
img {
  height: 20px;
  width: 20px;
}
</style>
