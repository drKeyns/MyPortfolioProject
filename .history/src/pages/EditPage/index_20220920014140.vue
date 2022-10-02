<template>
  <div class="edit-product">
    Форма редагування товара
    <div>Завантажте зображення</div>
    <div>Назва товару {{ product.title }}</div>
    <div>Торгова Марка: "{{ product.Trademark }}"</div>
    <div>Категорія: "{{ product.category }}"</div>
    <div>Підкатегорія: "{{ product.subcategory }}"</div>
    <div>Ціна: {{ product.Price }}грн.</div>
  </div>
</template>

<script>
export default {
  Name: "EditPage",
};
</script>

<style lang="scss" scoped></style>
