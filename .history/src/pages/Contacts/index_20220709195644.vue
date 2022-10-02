<template>
  <div class="main">
    Contacts
    <div>
      <div>Телефон-0954667184</div>
      <div>e-mail: drKeyns@gmail.com</div>
    </div>
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

<style lang="css" scoped>
.main {
  height: 40px;
  color: blue;
}
</style>
