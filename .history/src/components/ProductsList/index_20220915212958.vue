<template>
  <div class="product-list-wrapper">
    <div>Загальна вартість товарів в корзині: {{ getTotalPrice }}</div>
    <!-- <div class="input-container">
      <input type="text" v-model="this.searchProductTitle" />
    </div> -->
    <div class="search">
      <img
        class="icon"
        :src="require('@/assets/Images/Icon/search_icon.svg')"
        alt=""
      />
      <input type="text" v-model="this.searchProductTitle" />
    </div>
    <div class="list-container">
      <product-cart
        v-for="product in reFilteredProductList"
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
  data() {
    return {
      filteredProductList: [],
      searchProductTitle: "",
    };
  },
  computed: {
    ...mapGetters("product", ["productList", "getTotalPrice", "loadProducts"]),
    checkRouteCategory() {
      return this.$route.params.category;
    },
    reFilteredProductList() {
      if (this.searchProductTitle)
        return this.filteredProductList.filter((product) =>
          product.title
            .toLowerCase()
            .includes(this.searchProductTitle.toLowerCase())
        );
      else return this.filteredProductList;
    },
  },
  methods: {
    getProducts(category) {
      let allProducts = this.productList;
      this.filteredProductList = allProducts.filter(
        (item) => item.category === category
      );
    },
  },
  watch: {
    checkRouteCategory(newValue) {
      this.getProducts(newValue);
    },
  },
  mounted() {
    this.loadProducts;
  },
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
.search {
  display: flex;
  position: absolute;
  justify-content: stretch;
  border: 3px solid black;
  top: 0;
  z-index: 20;
  left: 320px;
  width: 300px;
  height: 30px;
}
.search img {
  width: 30px;
  left: 0px;
}
</style>
