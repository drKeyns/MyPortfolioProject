<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="">
      <div class="" v-if="isAddRequest">
        <button class="" @click="closePopup">Закрити</button>
      </div>
      <div class="" v-else>
        <div class="">
          <p class="">Додати новий товар</p>
        </div>
        <div class="popup_content">
          <form>
            <div class="Addnewproductwrapper">
              <label class="popup__wrapper-label">Фото</label>
              <input
                class="popup_wrapper-input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="Addnewproductwrapper">
              <label class="popup__wrapper-label">Назва</label>
              <input
                class="popup__wrapper-input"
                type="text"
                placeholder="Mail"
              />
            </div>
            <div class="Addnewproductwrapper">
              <label class="popup__wrapper-label">Торгова Марка</label>
              <input
                class="popup__wrapper-input"
                type="number"
                placeholder="Phone"
              />
            </div>
            <div class="Addnewproductwrapper">
              <label class="popup__wrapper-label">Ціна</label>
              <input
                class="popup__wrapper-input"
                type="number"
                placeholder="Phone"
              />
            </div>
          </form>
        </div>
        <div class="popup__footer">
          <button class="request__call-btn" @click="callRequest">
            Замовити дзвінок
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  Name: "AddNewProduct",
  data() {
    return {
      isAddRequest: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
