<template>
  <div>
    <product-row v-for="item in cartList" :key="item.id" :CartItem="item" />
    <div>
      {{ getTotalPrice }}
    </div>
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
    ...mapGetters("product", ["cartList", "getTotalPrice"]),
  },
};
</script>

<style lang="css" scoped></style>
