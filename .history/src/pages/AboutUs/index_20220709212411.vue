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
            інтер’єрі створені для відмінного шопінгу.
          </h3>
          <h1>АСОРТИМЕНТ VITA</h1>
          <h3>
            У нашому магазині є все те, за чим ви зазвичай відправляєтеся в
            супермаркет: натуральні ковбаси і ароматні сири, свіжі молочні
            продукти і необхідні збалансованого раціону крупи, стиглі фрукти,
            овочі і багато іншого. Більшість товарів, представлених в
            онлайн-супермаркеті "Витa", ви не знайдете на полицях звичайних
            супермаркетів. Головна особливість продукції - це, звичайно ж,
            якість. При цьому у нас є товари, доступні кожному: як з
            преміум-лінійок, так і з економ-сегмента.
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
