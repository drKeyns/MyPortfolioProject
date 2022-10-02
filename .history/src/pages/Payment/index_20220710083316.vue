<template>
  <h1>ДОСТАВКА І ОПЛАТА ЗАМОВЛЕНЬ В ОНЛАЙН-СУПЕРМАРКЕТІ</h1>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="Payment">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/Payment.jpg')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div>
          <h3>ОПЛАТА</h3>
          <h5>
            Товар оплачується тільки при отриманні покупки у кур'єра. Ми не
            беремо передоплату в зв'язку з тим, що працюємо в тому числі і з
            ваговими товарами. Остаточний вага шматка сиру або кільця ковбаси,
            який ви замовляєте в "Виток", може коливатися, як і зазвичай у всіх
            відділах ваговій продукції фізичних супермаркетів.
          </h5>
          <h3>ДОСТАВКА</h3>
          <h5>
            Якщо ви зробили замовлення на суму від 1 до 449 грн - доставка буде
            коштувати 35 грн. Замовлення на суму від 450 грн доставляється
            безкоштовно. Доставка здійснюється як в межах Дніпра, так і в
            передмісті,
          </h5>
        </div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
  Name: "Payment",
  components: {
    SecondMasterPage,
  },
};
</script>

<style lang="css" scoped>
.Foto {
  height: 330px;
  width: 400px;
}
</style>
