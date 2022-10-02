<template>
  <div>
    <product-row v-for="item in items" key="item.id" />
  </div>
</template>

<script>
import ProductRow from "./ProductRow.vue";
export default {
  Name: "CartList",

  components: {
    ProductRow,
  },
};
</script>

<style lang="scss" scoped></style>
