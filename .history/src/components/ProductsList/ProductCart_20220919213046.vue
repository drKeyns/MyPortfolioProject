<template>
  <div class="product-container">
    <div>
      <!-- <img :src="product.img" alt="" /> -->
      <img :src="getImgSrc(product.photo)" alt="" />
    </div>
    <div>
      {{ product.title }}
    </div>
    <div>Торгова Марка: "{{ product.Trademark }}"</div>
    <div>
      Ціна: {{ product.Price }}грн.
      <button @click="onAdd">Додати до корзини</button>
      <div v-if="Admin">
        <button @click="onDeleteProduct">Видалити</button>
        <button @click="onEditProduct">Редагувати</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Buffer } from "buffer";
export default {
  Name: "ProductCart",

  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions("product", ["addProductToCart"]),
    onAdd() {
      this.addProductToCart(this.product.id);
    },
    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
  },
  computed: {
    ...mapGetters("auth", ["isAdmin"]),
    Admin() {
      return this.isAdmin;
    },
  },
};
</script>

<style lang="css" scoped>
img {
  height: 130px;
  width: 100px;
}
.product-container {
  display: block;
  align-self: center;
  margin: 30px;
  border: 3px solid blue;
  height: auto;
  width: 230px;
}
</style>
