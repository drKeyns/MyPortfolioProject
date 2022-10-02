<template>
  <div class="second-menu-container">
    <div class="second-menu-item" v-for="menuItem in data" :key="menuItem.id">
      {{ menuItem.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondMenu",
  props: {
    data: {
      type: Array,
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
