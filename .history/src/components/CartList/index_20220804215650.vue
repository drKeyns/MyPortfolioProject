<template>
  <div>
    <div>Загальна вартість замовлення:{{ getTotalPrice }}грн.</div>

    Перелік товарів в замовленні:
    <product-row v-for="item in cartList" :key="item.id" :CartItem="item" />
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
    show() {
      console.log(this.cartList);
    },
  },
};
</script>

<style lang="css" scoped></style>
