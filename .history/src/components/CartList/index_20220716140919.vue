<template>
  <div>
    <product-row />
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
