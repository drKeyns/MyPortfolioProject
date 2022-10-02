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
            На сьогодні мережа супермаркетів Віта – це сучасний торгівельний
            комплекс, де створені комфортні умови для покупок і відпочинку.
            Запуск першого супермаркету Віта відбулося в 2011-му році і
            заслужено став популярним – величезний асортимент і цікаві рішення в
            інтер’єрі створені для відмінного шопінгу.У нашому супермаркеті є
            все, що вам потрібно: натуральні ковбаси і ароматні сири, свіжі
            молочні продукти і необхідні збалансованого раціону крупи, стиглі
            фрукти, овочі і багато іншого.
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
