<template>
  <div>
    <h1>Корзина</h1>
    <div><router-link to="/">Головна</router-link></div>
    <cart-list />
  </div>
</template>

<script>
import CartList from "@/components/CartList";

export default {
  Name: "Cart",

  components: {
    Cartlist,
  },
};
</script>
<style lang="scss" scoped></style>
