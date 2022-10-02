<template>
  <div class="add-new-product">
    Форма створення нового товара
    <div>Завантажте зображення</div>
    <div>Назва товару {{ product.title }}</div>
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
export default {
  Name: "AddNewProduct",
};
</script>

<style lang="css" scoped></style>
