<template>
  <div>
    <div>Корзина</div>
    <div><router-link to="/">Home</router-link></div>
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
