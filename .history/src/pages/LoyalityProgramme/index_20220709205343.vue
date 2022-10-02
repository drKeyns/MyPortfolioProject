<template>
  <div>
    <div class="main">Loyality Programme</div>
  </div>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="loyality">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/loyality.png')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div>
          <h1>НАКОПИЧУЙТЕ БОНУСИ І ЕКОНОМТЕ РАЗОМ З VITA</h1>
          <h3>
            В онлайн-супермаркеті "Виток" ви можете оплатити свою продуктову
            корзину не тільки готівкою і безготівковими, а й бонусними коштами.
            Адже ми цінуємо кожного свого покупця, тому спеціально для вас
            розробили систему лояльності, яка передбачає бонуси для наших
            постійних клієнтів. Після кожної покупки на ваш рахунок
            нараховуються бонуси, якими ви можете розраховуватися при наступних
            замовленнях. Використовуючи накопичені бонусні кошти, ви можете
            заощадити до 20%, здійснюючи покупки в "Виток". Наша система
            лояльності максимально проста і зручна.
          </h3>
        </div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
  name: "LoyalityProgramme",
  components: {
    SecondMasterPage,
  },
};
</script>

<style lang="css" scoped>
.Foto {
  margin: 0px;
  height: 380px;
  width: 500px;
}
</style>
