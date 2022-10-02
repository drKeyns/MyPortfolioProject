<template>
  <div>
    <div class="main">Список товарів</div>
    <product-list />
    <div v-if="Admin">
      <button @select="showButtonAddVisible">Додати новий товар</button>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductsList";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("auth", ["isAdmin"]),
    Admin() {
      return this.isAdmin;
    },
  },
};
</script>

<style lang="css" scoped></style>
