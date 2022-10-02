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
  position: absolute;
  text-align: center;
  background-color: bisque;
  flex-direction: column;
  width: 150px;
  height: 109px;
  top: 85px;
  left: 300px;
}
</style>
