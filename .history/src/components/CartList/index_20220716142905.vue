<template>
  <div>
    <product-row v-for="item in cartlist" :key="item.id" :cart-item="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductRow from "./ProductRow.vue";

export default {
  Name: "CartList",

  components: {
    ProductRow,
  },
  computed: {
    ...mapGettetrs(["cartlist"]),
  },
};
</script>

<style lang="scss" scoped></style>
