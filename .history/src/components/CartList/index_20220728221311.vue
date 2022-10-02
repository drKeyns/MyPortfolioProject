<template>
  <div>
    <product-row v-for="item in cartList" :key="item.id" :CartItem="item" />
    <div>
      {{ getTotalPrice }}
    </div>
    <button @click="show">ok</button>
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
  methods: {
    show() {},
  },
};
</script>

<style lang="css" scoped></style>
