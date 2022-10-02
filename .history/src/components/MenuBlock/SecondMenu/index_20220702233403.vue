<template>
  <div class="second-menu-container">
    <div
      class="second-menu-item"
      v-for="(menuItem"
      in
      data)
      :key="MenuItem.id"
    ></div>
  </div>
</template>

<script>
export default {
  name: "SecondMenu",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="css" scoped>
.second-menu-container {
  display: flex;
  background-color: bisque;
  flex-direction: column;
}
.second-menu-item {
}
</style>
