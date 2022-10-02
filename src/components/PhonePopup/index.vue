<template>
  <div class="df1">
    <div class="popup__success" v-if="isCallRequest">
      <p class="popup__success-title">Чудово! Ми скоро вам зателефонуємо.</p>
      <button class="popup__success-btn" @click="closePopup">Закрити</button>
    </div>
    <div class="popup" v-else>
      <div class="popup__header">
        <span class="popup__close" @click="closePopup"> Close </span>
        <p class="popup__header-text">Замовити зворотній дзвінок</p>
      </div>
      <div class="popup__content">
        <form>
          <div class="popup__wrapper">
            <label class="popup__wrapper-label">Ім'я</label>
            <input
              class="popup__wrapper-input"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="popup__wrapper">
            <label class="popup__wrapper-label">E-mail</label>
            <input
              class="popup__wrapper-input"
              type="text"
              placeholder="Mail"
            />
          </div>
          <div class="popup__wrapper">
            <label class="popup__wrapper-label">Телефон</label>
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
</template>

<script>
export default {
  name: "PhonePopup",
  data() {
    return {
      isCallRequest: false,
    };
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    callRequest() {
      this.isCallRequest = true;
    },
  },
};
</script>

<style lang="css" scoped>
.df1 {
  position: absolute;
  background-color: blueviolet;
}
</style>
