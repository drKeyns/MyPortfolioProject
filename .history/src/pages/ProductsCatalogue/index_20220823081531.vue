<template>
  <div>
    <div class="main">Список товарів</div>
    <product-list />
    <div v-if="isAdmin === Admin">
      <button @click="showButtonAddVisible">Додати новий товар</button>
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
      showButtonAddVisible: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
