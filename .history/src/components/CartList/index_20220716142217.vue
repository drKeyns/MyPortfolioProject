<template>
  <div>
    <product-row v-for="item in ...mapGettetrs(['cartlist'])" :key="item.id" />
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
    ...mapGettetrs(['cartlist']),

    }
  },
};
</script>

<style lang="scss" scoped></style>
