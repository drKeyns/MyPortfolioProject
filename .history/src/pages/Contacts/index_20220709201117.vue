<template>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="Contactpage">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/Contacts.jpg')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div>
          <h1>М.т.0954667184</h1>
          <h1>E-mail:drKeyns@gmail.com</h1>
        </div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
    Name: "Contacts";
}
</script>

<style lang="css" scoped></style>
