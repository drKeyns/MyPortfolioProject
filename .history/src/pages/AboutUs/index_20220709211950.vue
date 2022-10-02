<template>
  <div class="main">Про нас</div>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="About">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/About.png')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div>
          <h1>ОНЛАЙН-СУПЕРМАРКЕТ VITА:</h1>
          <h3>
            На сьогодні мережа супермаркетів Рост – це 9 сучасних торгівельних
            комплексів, де створені комфортні умови для покупок і відпочинку.
            null
          </h3>
        </div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
  name: "AboutUs",
  components: {
    SecondMasterPage,
  },
};
</script>

<style lang="css" scoped>
.Foto {
  margin: 0px;
  height: 400px;
  width: 650px;
}
</style>
