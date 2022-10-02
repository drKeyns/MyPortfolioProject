<template>
  <div class="product-list-wrapper">
    <div>Загальна вартість товарів в корзині: {{ getTotalPrice }}</div>
    <div class="list-container">
      <product-cart
        v-for="product in productList"
        :key="product.id"
        :product="product"
      ></product-cart>
    </div>
  </div>
</template>

<script>
import ProductCart from "./ProductCart.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductList",

  components: {
    ProductCart,
  },
  // data() {
  //   return {
  //     filteredProductList: [],
  //   };
  // },
  computed: {
    ...mapGetters("product", ["productList", "getTotalPrice"]),
  },
  // methods: {
  //   getProducts(category) {
  //     let allProducts = this.productList;
  //     this.filteredProductList = allProducts.filter(
  //       (item) => item.category === category
  //     );
  //   },
  // },
  // watch: {
  //   $route.params.category: {
  //     this.getProducts(value)
  //   },
  // },
};
</script>

<style lang="css" scoped>
.product-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
}
.list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* float: right; */
  margin: 30px;
}
</style>
