<template>
  <div>
    <h1>Корзина</h1>
    <div><router-link to="/">Головна</router-link></div>
  </div>
</template>

<script>
import MainMasterPage from "@/Masterpages/MainMasterPage.vue";
export default {
  Name: "Cart",

  components: {
    MainMasterPage,
  },
};
</script>

<style lang="scss" scoped></style>
