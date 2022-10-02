<template>
  <div>
    <div class="main">Список товарів</div>
    <product-list />
    <div v-if="isAdmin === Admin">
      <button @click="showButtonDeleteVisible">x</button>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductsList";

export default {
  name: "ProductsCatalogue",

  components: {
    ProductList,
  },
  data() {
    return {
      key: showButtonDeleteVisible,
    };
  },
};
</script>

<style lang="css" scoped></style>
