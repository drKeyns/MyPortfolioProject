<template>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="Contacts">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/Home.jpg')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div>М.т. +380954667184</div>
        <div>e-mail:drKeyns@gmail.com</div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
  name: "Contacts",
  components: {
    SecondMasterPage,
  },
};
</script>

<script>
export default {
  name: "Contacts",
};
</script>

<style lang="css" scoped>
.main {
  height: 40px;
  color: blue;
}
</style>
