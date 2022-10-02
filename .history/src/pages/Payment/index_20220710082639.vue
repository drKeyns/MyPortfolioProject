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
          <h1>ОПЛАТА</h1>
          <h3>
            Товар оплачується тільки при отриманні покупки у кур'єра. Ми не
            беремо передоплату в зв'язку з тим, що працюємо в тому числі і з
            ваговими товарами. Остаточний вага шматка сиру або кільця ковбаси,
            який ви замовляєте в "Виток", може коливатися, як і зазвичай у всіх
            відділах ваговій продукції фізичних супермаркетів.
          </h3>
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

<style lang="scss" scoped></style>
