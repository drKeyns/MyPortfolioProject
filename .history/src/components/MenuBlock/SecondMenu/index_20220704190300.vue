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
      type: Object,
    },
  },
};
</script>

<style lang="css" scoped>
.second-menu-container {
  display: flex;
  display: inline-block;
  background-color: bisque;
  flex-direction: column;
  width: 150px;
  top: 200px;
  left: 100px;
}
</style>
