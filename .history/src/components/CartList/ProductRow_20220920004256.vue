<template>
  <div class="product-row-container">
    <div>
      <img :src="getImgSrc(product.photo)" alt="" />
    </div>
    <div>{{ product.title }},</div>
    <div>Ціна:{{ product.Price }}</div>
    <div>
      <button @click="onDecrement">-</button>
      <span>{{ CartItem.count }}</span>
      <button @click="onIncrement">+</button>
      <button @click="onDelete">x</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Buffer } from "buffer";
export default {
  Name: "ProductRow",

  props: {
    CartItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      product: {},
    };
  },

  computed: {
    ...mapGetters("product", ["getProductById"]),
  },

  methods: {
    ...mapActions("product", ["cartAction"]),
    onDecrement() {
      this.cartAction({
        type: "decrement",
        value: this.CartItem.id,
      });
    },
    onIncrement() {
      this.cartAction({
        type: "increment",
        value: this.CartItem.id,
      });
    },
    onDelete() {
      this.cartAction({
        type: "delete",
        value: this.CartItem.id,
      });
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
  mounted() {
    this.product = this.getProductById(this.CartItem.productId);
    console.log(this.CartItem);
  },
};
</script>

<style lang="css" scoped>
.product-row-container {
  display: flex;
  align-items: center;
}
img {
  height: 25px;
  width: 25px;
}
</style>
